package com.quiz.cities.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id; // City ID

    private String name; // City name
    private float area; // City area
    private float density; // City density
    private int population; // City population

    // Getter and setter methods for City ID
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    // Getter and setter methods for City name
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // Getter and setter methods for City area
    public float getArea() {
        return area;
    }

    public void setArea(float area) {
        this.area = area;
    }

    // Getter and setter methods for City density
    public float getDensity() {
        return density;
    }

    public void setDensity(float density) {
        this.density = density;
    }

    // Getter and setter methods for City population
    public int getPopulation() {
        return population;
    }

    public void setPopulation(int population) {
        this.population = population;
    }
}
