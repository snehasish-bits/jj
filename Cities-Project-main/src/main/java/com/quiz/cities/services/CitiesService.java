package com.quiz.cities.services;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.quiz.cities.entities.City;
import com.quiz.cities.repositories.CitiesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
public class CitiesService {

    @Autowired
    private CitiesRepository citiesRepository; // Autowired CitiesRepository

    // Method to get all cities with optional sorting and search text
    public List<City> getAllCities(String sortBy, String searchText) {
        Sort sort;

        // Determine sorting based on sortBy parameter
        if ("nameAsc".equalsIgnoreCase(sortBy)) {
            sort = Sort.by(Sort.Direction.ASC, "name");
        } else if ("nameDesc".equalsIgnoreCase(sortBy)) {
            sort = Sort.by(Sort.Direction.DESC, "name");
        } else if ("populationAsc".equalsIgnoreCase(sortBy)) {
            sort = Sort.by(Sort.Direction.ASC, "population");
        } else if ("populationDesc".equalsIgnoreCase(sortBy)) {
            sort = Sort.by(Sort.Direction.DESC, "population");
        } else if ("areaAsc".equalsIgnoreCase(sortBy)) {
            sort = Sort.by(Sort.Direction.ASC, "area");
        } else if ("areaDesc".equalsIgnoreCase(sortBy)) {
            sort = Sort.by(Sort.Direction.DESC, "area");
        } else {
            // Default sorting
            sort = Sort.by(Sort.Direction.ASC, "name");
        }

        if (searchText == null) {
            return citiesRepository.findAll(sort); // Return all cities with sorting when search text is not provided
        }

        // Return filtered cities with sorting when search text is provided
        return citiesRepository.findAllByNameContainingIgnoreCase(searchText, sort);
    }

    public List<City> addCity(City city) {
        float density = city.getPopulation() / city.getArea(); // Calculate density
        city.setDensity(density); // Set density for the city

        citiesRepository.save(city); // Save the city to the repository

        return getAllCities(null,null); // Return all cities after adding the new city
    }

    // Method to add cities from JSON data
    public void addCitiesFromJson() {
        ObjectMapper objectMapper = new ObjectMapper();

        // Path of the JSON file which contains all the cities details
        String citiesJsonFilePath = "src/main/resources/jsonFiles/cities.json";

        try {
            // Reading JSON data into a list of City objects
            List<City> cities = objectMapper.readValue(new File(citiesJsonFilePath), new TypeReference<List<City>>() {});

            //Traversing all the cities fetched from the json file
            for (City city : cities) {
                float density = city.getPopulation()/city.getArea(); // Calculate density for each city
                city.setDensity(density); // Set density for each city
            }

            citiesRepository.saveAll(cities); // Save all cities to the database
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
