# This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

Validation of CSV and XML files in the MT940 format. All transaction numbers must be unique. The final balance should be validated for accuracy.

## Plan

1. Receive CSV and XML files in the GetFile format as input.
2. Determine the file format and send it to the corresponding helper (CsvToArray or XmlToArray)
3. Parse CsvToArray and XmlToArray into an array of objects and then send them for validation in ValidateData. The idea is not to write a separate validator for each file.
4. Further, check and display errors in the markup.

## Technologies

The following technologies were used in this project:

- React.  
- Papaparse for CSV parsing

## Project Launch

You can try the project online by following this [project link](https://bazylkhan.github.io/assigment-ama/).

