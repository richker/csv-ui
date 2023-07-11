# CSV-UI

CSV-UI is a robust React application that fetches data from a REST API and displays it on a line chart. The application supports date filtering, allowing users to select a specific date range and view the corresponding data.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of Node.js and npm.
* You have a `<Windows/Linux/Mac>` machine.

### Installing CSV-UI

To install CSV-UI, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory: `cd csv-ui`
3. Install the dependencies: `npm install`

### Using CSV-UI

To use CSV-UI, follow these steps:

1. Start the application: `npm start`
2. The application will start on localhost:3000 by default.

## Application Features

The application fetches data from the `/recall` endpoint of a REST API. The endpoint supports date filtering with `from_ts` and `to_ts` parameters.

### Examples

- To view all data: Navigate to `localhost:3000`.
- To filter by date: Use the date filter feature in the application's user interface.

### Response

The application displays an array of data on a line chart, with each data point representing a date and a recall value.

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Node.js](https://nodejs.org/) - The runtime environment
- [npm](https://www.npmjs.com/) - Package manager

## Authors

- Matan Richker - Matanrichker@gmail.com - [Github Account](https://github.com/richker)
