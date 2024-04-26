package com.quiz.cities.repositories;

import com.quiz.cities.entities.City;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

// JpaRepository interface for City entity with Integer as ID type
public interface CitiesRepository extends JpaRepository<City, Integer> {

    // Method to find all cities by name containing the specified search text and sort order
    List<City> findAllByNameContainingIgnoreCase(String searchText, Sort sort);
}
