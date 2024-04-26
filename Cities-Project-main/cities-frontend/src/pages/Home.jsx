import React, { useEffect, useRef, useState } from 'react';
import DataTable from '../components/DataTable';
import CitiesService from '../http-services/CitiesService';
import { Button, FlexBox, Input, Toast } from '@ui5/webcomponents-react';
import FiltersDialog from '../components/FiltersDialog';
import AddCityDialog from '../components/AddCityDialog';
import LoadingDialog from '../components/LoadingDialog';

function Home() {
  const [cities, setCities] = useState([]); // State to store cities data
  const [isAddCityPopoverOpen, setIsAddCityPopoverOpen] = useState(false); // State for Add City dialog visibility
  const [isFiltersPopoverOpen, setIsFiltersPopoverOpen] = useState(false); // State for Filters dialog visibility
  const [filter, setFilter] = useState("areaAsc"); // State for current filter
  const [searchText, setSearchText] = useState(null); // State for search text
  const [toastMessage, setToastMessage] = useState(null); // State for toast message
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const searchRef = useRef(null); // Ref for search input field
  const toastRef = useRef(null); // Ref for toast message

  // useEffect to fetch cities data based on filter and search text
  useEffect(() => {
    setIsLoading(true); // Show loading indicator
    
    CitiesService.getAllCities(filter, searchText)
      .then((res) => {
        setCities(res.data); // Update cities data
        setIsLoading(false); // Hide loading indicator
      })
      .catch((err) => {
        setIsLoading(false); // Hide loading indicator
        showToast("Unknown Error Occurred"); // Show toast message for error
        console.log(err); // Log error to console
      });
  }, [filter, searchText]); // Dependencies for useEffect

  // Function to handle creation of new city
  const handleNewCityCreation = (newCity) => {
    setIsLoading(true); // Show loading indicator
    
    CitiesService.addNewCity(newCity)
      .then((res) => {
        setCities(res.data); // Update cities data
        setIsLoading(false); // Hide loading indicator
        showToast("City Added Successfully"); // Show success toast message
      })
      .catch((err) => {
        setIsLoading(false); // Hide loading indicator
        showToast("Failed to add city"); // Show error toast message
        console.log(err); // Log error to console
      });
  };

  // Function to show toast message
  const showToast = (message) => {
    setToastMessage(message); // Set toast message state
    toastRef.current.show(); // Show toast message using ref
  };

  // Function to handle opening Filters dialog
  const handleFilterDialog = () => {
    setIsFiltersPopoverOpen(true); // Open Filters dialog
  };

  // Function to handle search based on input value
  const handleSearch = () => {
    if (searchRef.current) {
      setSearchText(searchRef.current.value); // Update search text state
    }
  };

  return (
    <>
      <h1 className='page-title'>Cities Table</h1>
      <FlexBox
        alignItems="Center"
        direction="Row"
        justifyContent="SpaceBetween"
      >
        <div className='table-search'>
          <Input ref={searchRef} placeholder='Search Text' />
          <Button onClick={handleSearch} icon='search'>Search</Button>
        </div>

        <div className='table-actions'>
          <Button onClick={() => setIsAddCityPopoverOpen(true)} icon='add'>Add City</Button>
          <Button onClick={handleFilterDialog} icon='filter'>Filters</Button>
        </div>
      </FlexBox>
      <DataTable citiesData={cities} />
      <FiltersDialog isDialogOpen={isFiltersPopoverOpen} closeDialogFn={setIsFiltersPopoverOpen} filter={filter} setFilterFn={setFilter} />
      <AddCityDialog isDialogOpen={isAddCityPopoverOpen} closeDialogFn={setIsAddCityPopoverOpen} newCityCreationFn={handleNewCityCreation} />
      <Toast
        ref={toastRef}
        placement="MiddleCenter"
        duration={3000}
      >
        {toastMessage}
      </Toast>
      {isLoading && <LoadingDialog />}
    </>
  );
}

export default Home;
