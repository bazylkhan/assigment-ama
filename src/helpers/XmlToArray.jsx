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
                reference: record.getAttribute('reference'),
                accountNumber: record.querySelector('accountNumber').textContent,
                description: record.querySelector('description').textContent,
                startBalance: parseFloat(record.querySelector('startBalance').textContent),
                mutation: parseFloat(record.querySelector('mutation').textContent),
                endBalance: parseFloat(record.querySelector('endBalance').textContent),
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