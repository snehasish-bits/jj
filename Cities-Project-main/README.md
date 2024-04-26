# Cities Project for International Rotation
This Repository contains the backend and frontend code for cities project.

## How to locally set-up and run the Application

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

1. Node.js and npm for the frontend. [Node.js and npm installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
2. Java Development Kit (JDK) and Maven for the backend. [Maven installation guide](https://maven.apache.org/install.html).
3. Git for version control. [Git installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
4. IntelliJ IDEA to open the source code and run it. [IntelliJ installation guide](https://www.jetbrains.com/help/idea/installation-guide.html#requirements)
5. Intsall Postman to test the API endpoints. [Postman installation guide](https://learning.postman.com/docs/getting-started/installation/installation-and-updates/)

### Getting Started

Follow these steps to set up and run the project locally.

1. Clone this repository using: `git clone https://github.tools.sap/I528631/Cities-Project.git`.
2. Open the cloned repository in IntelliJ IDEA IDE.


#### Running the Backend of the Application:

1. Let the project load successfully on the IDE.
2. Open Terminal and run the backend using the command `mvn spring-boot:run`.
3. In-case you face any issues with terminal, you can run the application by running the `src/main/java/com/quiz/cities/CitiesApplication.java` file directly.
4. The Backend of the application is now running on [http://localhost:8080](http://localhost:8080).


#### Running the Frontend of the Application:

1. Open a new terminal.
2. Get inside the cities-frontend directory by using the command `cd cities-frontend`.
3. Run the command `npm install`. This will install all the required dependencies for the project.
4. Once all the dependencies are installed run the command `npm run dev`.
5. Application will start running on [http://localhost:5173](http://localhost:5173).

## Features of the Application

### UI Features:
1. The application displays the list of available cities in table format.
2. User can sort the table content based on various fields.
3. User can filter out the table content based on the search text.
4. User can add new city to the database during runtime.
5. Cities have propulation more tha one million are highlighted.

### Backend API Endpoints:
1. GET - `/api/v1/cities` - This API retrives the list of available cities from the database and returns it.

It has two optional parameters (`sortBy` and `searchText`) which can be used for sorting and filtering out.
Example endpoints:
- With sorting only: `http://localhost:8080/api/v1/cities?sortBy=areaAsc`
- With search only: `http://localhost:8080/api/v1/cities?searchText=Jersey`
- With both searching and sorting: `http://localhost:8080/api/v1/cities?sortBy=areaAsc&searchText=Jersey`

2. POST - `/api/v1/cities` - This API adds a new city to the database.

The Data format to add a new city is as follows:
`{
"name": "city name",
"area": 123,
"population": 3455
}`
