import {CsvToArray} from "./CsvToArray";
import {XmlToArray} from "./XmlToArray";

export const CheckFile = ( {file} ) => {

    const fileNameParts = file.name.split('.');

    const fileFormat = fileNameParts[fileNameParts.length - 1].toLowerCase();

    return (fileFormat === 'csv' ? <CsvToArray file={file} /> : <XmlToArray file={file} />)
}