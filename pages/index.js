import { Form } from "./Form";
import axios from "axios";
import { useState } from "react";
const IndexPage = () => {
  const [uploaded, setUploaded] = useState(0);
  const onChange = async (formData) => {
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        let uploadedData = Math.round((event.loaded * 100) / event.total);
        setUploaded(uploadedData);
        console.log(
          `Current progress:`,
          Math.round((event.loaded * 100) / event.total)
        );
      },
    };

    const response = await axios.post("/api/uploads", formData, config);

    console.log("response", response.data);
  };

  return (
    <div className="container mt-5">
      <Form
        label="Choose An Image"
        uploadFileName="image"
        onChange={onChange}
      />
      <div className="progress mt-3">
        <div
          className="progress-bar progress-bar-striped text-center"
          role="progressbar"
          style={{ width: `${uploaded}%` }}
          aria-valuenow={uploaded}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {uploaded + "%"}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
