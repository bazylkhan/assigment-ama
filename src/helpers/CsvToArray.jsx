import Papa from 'papaparse'
import {useEffect, useState} from "react";
import {ValidateData} from "./ValidateData";
export const CsvToArray = (props) => {
    const file = props.file
    const [data, setData] = useState([])

    useEffect(() => {
        Papa.parse(file, {
            complete: function (results) {
                setData(results.data);
            },
            header: true,
        });
    }, [file]);

    return <ValidateData data={data} />
}

