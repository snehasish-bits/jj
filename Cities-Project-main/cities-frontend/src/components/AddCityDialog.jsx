import React, { useEffect, useState } from 'react';
import { Dialog, Bar, Button, Label, Input } from '@ui5/webcomponents-react';
import { useRef } from 'react';

function AddCityDialog({ isDialogOpen, closeDialogFn, newCityCreationFn }) {
  const cityNameRef = useRef(null);
  const cityAreaRef = useRef(null);
  const cityPopulationRef = useRef(null);

  const [isNameValid, setIsNameValid] = useState(false); // State for name validity
  const [isAreaValid, setIsAreaValid] = useState(false); // State for area validity
  const [isPopulationValid, setIsPopulationValid] = useState(false); // State for population validity

  // Function to handle adding a new city
  const handleAddNewCity = () => {
    // Check if all input fields are valid and create city if valid
    if (
      cityNameRef.current &&
      cityAreaRef.current &&
      cityPopulationRef.current &&
      checkFieldsValidity()
    ) {
      newCityCreationFn({
        name: cityNameRef.current.value,
        area: cityAreaRef.current.value,
        population: cityPopulationRef.current.value,
      });
      closeDialogFn(false); // Close dialog after adding new city
    }
  };

  // Function to check validity of all input fields
  const checkFieldsValidity = () => {
    return isNameValid && isAreaValid && isPopulationValid;
  };

  // Function to check validity of city name
  const checkNameValidity = () => {
    const nameValidity = cityNameRef.current?.value.trim().length > 0; // Check if name has non-zero length
    setIsNameValid(nameValidity);
  };

  // Function to check validity of city area
  const checkAreaValidity = () => {
    const areaValidity = cityAreaRef.current?.value > 0; // Check if area is greater than 0
    setIsAreaValid(areaValidity);
  };

  // Function to check validity of city population
  const checkPopulationValidity = () => {
    const populationValidity = cityPopulationRef.current?.value > 0; // Check if population is greater than 0
    setIsPopulationValid(populationValidity);
  };

  return (
    <Dialog
      footer={
        <Bar
          design="Footer"
          endContent={
            <div>
              <Button type="submit" onClick={handleAddNewCity}>
                Save
              </Button>
              <Button onClick={() => closeDialogFn(false)}>Close</Button>
            </div>
          }
        />
      }
      headerText="Add City"
      open={isDialogOpen}
      style={{ height: '320px', width: '200px', overflow: 'auto' }}
      className='dialog-container'
    >
      <Label>City Name:</Label>
      <Input
        type="Text"
        valueState={isNameValid ? 'None' : 'Error'} // Set value state based on name validity
        ref={cityNameRef}
        required
        onChange={checkNameValidity}
        placeholder='Enter City Name'
      />
      <Label>Area:</Label>
      <Input
        type="Number"
        valueState={isAreaValid ? 'None' : 'Error'} // Set value state based on area validity
        ref={cityAreaRef}
        required
        onChange={checkAreaValidity}
        placeholder='Enter City Area'
      />
      <Label>Population:</Label>
      <Input
        type="Number"
        valueState={isPopulationValid ? 'None' : 'Error'} // Set value state based on population validity
        ref={cityPopulationRef}
        required
        onChange={checkPopulationValidity}
        placeholder='Enter City Population'
      />
    </Dialog>
  );
}

export default AddCityDialog;
