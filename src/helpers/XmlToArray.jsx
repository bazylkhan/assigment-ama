import React, { useState, useEffect } from 'react';
import {ValidateData} from "./ValidateData";

export const XmlToArray = ({ file }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const reader = new FileReader();

        reader.onload = (event) => {
            const xmlData = event.target.result;

            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
            const records = xmlDoc.getElementsByTagName('record');

            const newArray = Array.from(records).map((record) => ({
                'Reference': record.getAttribute('reference'),
                'Account Number': record.querySelector('accountNumber').textContent,
                'Description': record.querySelector('description').textContent,
                'Start Balance': parseFloat(record.querySelector('startBalance').textContent),
                'Mutation': parseFloat(record.querySelector('mutation').textContent),
                'End Balance': parseFloat(record.querySelector('endBalance').textContent),
            }));

            setData(newArray);
        };

        reader.onerror = (error) => {
            console.error('Error reading the file:', error);
        };

        if (file) {
            reader.readAsText(file);
        }

    }, [file]);
    return <ValidateData data={data} />
};