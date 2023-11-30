import {useState} from "react";
import {CheckFile} from "../helpers/CheckFile";

const GetFile = () => {
    const [file, setFile] = useState(undefined);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) setFile(selectedFile)
    };


    return (
        <div>
            <label htmlFor="fileInput"><h1>Select the file:</h1></label> <br/>
            <input
                type="file"
                id="fileInput"
                accept=".xml, .csv"
                onChange={handleFileChange}
                placeholder='upload'
            />
            {
                file ?
                    <CheckFile file={file} />
                    :
                    <div />}
        </div>
    );
};

export default GetFile;