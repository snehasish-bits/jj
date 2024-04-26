import React, { useState } from 'react';
import { Dialog, Bar, Button, Select, Option, Label } from '@ui5/webcomponents-react';

function FiltersDialog({ isDialogOpen, closeDialogFn, setFilterFn }) {
  const [newFilter, setNewFilter] = useState(null); // State for new filter value

  // Function to handle select change and update new filter state
  const handleSelect = (event) => {
    setNewFilter(event.target.value); // Update new filter value
  };

  // Function to handle filter change and close dialog
  const handleFilterChange = () => {
    closeDialogFn(false); // Close filter dialog
    setFilterFn(newFilter); // Update filter using setFilterFn
  };

  return (
    <Dialog
      className='dialog-container'
      footer={
        <Bar
          design="Footer"
          endContent={
            <div>
              <Button onClick={handleFilterChange}>Apply</Button> {/* Apply Filter button */}
              <Button onClick={() => closeDialogFn(false)}>Close</Button>
            </div>
          }
        />
      }
      headerText="Filters"
      open={isDialogOpen}
      style={{ height: '200px', overflow: 'auto' }}
    >
      <Label>Sort By:</Label>
      <Select onChange={handleSelect} value={newFilter}> {/* Select input for filter options */}
        <Option value="nameAsc">{"Name (Ascending)"}</Option> 
        <Option value="nameDesc">{"Name (Descending)"}</Option> 
        <Option value="areaAsc">{"Area (Ascending)"}</Option> 
        <Option value="areaDesc">{"Area (Descending)"}</Option> 
        <Option value="populationAsc">{"Population (Ascending)"}</Option> 
        <Option value="populationDesc">{"Population (Descending)"}</Option>
      </Select>
    </Dialog>
  );
}

export default FiltersDialog;
