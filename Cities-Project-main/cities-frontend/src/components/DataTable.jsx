import React from 'react';
import { Table, TableColumn, Label, TableRow, TableCell } from '@ui5/webcomponents-react';

function DataTable(props) {
  return (
    <div style={{ height: '100vh', overflow: 'auto' }}>
      <Table
        stickyColumnHeader // Sticky column headers
        noDataText='No Data Available' // Text to display when there is no data
        columns={
          <>
            <TableColumn>
              <Label>Sl no.</Label> {/* Column for serial numbers */}
            </TableColumn>
            <TableColumn>
              <Label>City Name</Label> {/* Column for city names */}
            </TableColumn>
            <TableColumn>
              <Label>Area</Label> {/* Column for area */}
            </TableColumn>
            <TableColumn>
              <Label>Population</Label> {/* Column for population */}
            </TableColumn>
            <TableColumn>
              <Label>Density</Label> {/* Column for density */}
            </TableColumn>
          </>
        }
      >
        {/* Mapping over cities data to display in the table */}
        {props.citiesData.map((data, index) => {
          const isPopulationMoreThanAMillion = data.population > 1000000; // Check if population is more than a million
          return (
            <TableRow key={`${index}-row`}>
              {/* Conditional highlighting based on population */}
              <TableCell className={isPopulationMoreThanAMillion ? 'highlighted-row' : ''}>
                <Label>{index + 1}</Label> {/* Serial number */}
              </TableCell>
              <TableCell className={isPopulationMoreThanAMillion ? 'highlighted-row' : ''}>
                <Label>{data.name}</Label> {/* City name */}
              </TableCell>
              <TableCell className={isPopulationMoreThanAMillion ? 'highlighted-row' : ''}>
                <Label>{data.area}</Label> {/* Area */}
              </TableCell>
              <TableCell className={isPopulationMoreThanAMillion ? 'highlighted-row' : ''}>
                <Label>{data.population}</Label> {/* Population */}
              </TableCell>
              <TableCell className={isPopulationMoreThanAMillion ? 'highlighted-row' : ''}>
                <Label>{data.density}</Label> {/* Density */}
              </TableCell>
            </TableRow>
          );
        })}
      </Table>
    </div>
  );
}

export default DataTable;
