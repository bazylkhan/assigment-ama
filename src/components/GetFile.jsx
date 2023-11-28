import {useState} from "react";
import {CheckFile} from "../helpers/CheckFile";

const GetFile = () => {
    const [file, setFile] = useState(undefined); // Используйте const и деструктурирование

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) setFile(selectedFile)
    };


    return (
        <div>
            <label htmlFor="fileInput">Выберите файл:</label>
            <input
                type="file"
                id="fileInput"
                accept=".xml, .csv"
                onChange={handleFileChange} // Обновленное имя функции
            />
            {
                file ?
                    <CheckFile file={file} />
                    :
                    <div>Пусто</div>}
        </div>
    );
};

export default GetFile;