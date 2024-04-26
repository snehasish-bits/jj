import axios from 'axios';

const baseUrl = "http://localhost:8080/api/v1/cities"; // Base URL for API requests

class CitiesService {
    // Method to fetch all cities based on filter and search text
    getAllCities = async (filter = "nameAsc", searchText) => {
        if (searchText) {
            return axios.get(`${baseUrl}?sortBy=${filter}&searchText=${searchText}`);
        }
        return axios.get(`${baseUrl}?sortBy=${filter}`);
    }

    // Method to add a new city
    addNewCity = async (city) => {
        return axios.post(`${baseUrl}`, city);
    }
}

export default new CitiesService(); // Export an instance of CitiesService
