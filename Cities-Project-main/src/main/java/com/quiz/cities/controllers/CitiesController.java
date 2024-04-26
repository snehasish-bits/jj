package com.quiz.cities.controllers;

import com.quiz.cities.entities.City;
import com.quiz.cities.services.CitiesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/cities")
public class CitiesController {

    @Autowired
    private CitiesService citiesService; // Autowired CitiesService

    // Get mapping to fetch all cities with optional sorting and search text
    @GetMapping
    List<City> getAllCities(@RequestParam(required = false) String sortBy, @RequestParam(required = false) String searchText) {
        return citiesService.getAllCities(sortBy, searchText);
    }

    // Post mapping to add a new city
    @PostMapping
    List<City> addNewCity(@RequestBody City city) {
        return citiesService.addCity(city);
    }

    // Event listener to add cities from JSON data to the database when application starts
    @EventListener(ApplicationReadyEvent.class)
    public void init() {
        citiesService.addCitiesFromJson();
    }
}
