const GetFile = () => {
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            const fileNameParts = selectedFile.name.split('.');
            const fileFormat = fileNameParts[fileNameParts.length - 1].toLowerCase();
            if (fileFormat === 'csv') console.log('this is SCV')
            if (fileFormat === 'xml') console.log('this is XML')
        }
    };


    return (
        <div>
            <label htmlFor="fileInput">Выберите файл:</label>
            <input
                type="file"
                id="fileInput"
                accept=".xml, .csv"
                onChange={handleFileChange}
            />
        </div>
    );
};

export default GetFile;
