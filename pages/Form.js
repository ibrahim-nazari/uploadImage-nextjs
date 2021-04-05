import React from "react";

export const Form = (props) => {
  const fileInputRef = React.useRef(null);
  const formRef = React.useRef(null);

  const onChangeHandler = (event) => {
    if (!event.target.files?.length) {
      return;
    }

    const formData = new FormData();
    formData.append(event.target.name, event.target.files[0]);
    formData.append("name", event.target.name);
    props.onChange(formData);

    formRef.current?.reset();
  };

  return (
    <form ref={formRef}>
      <div className="form-group">
        <label>{props.label}</label>
        <input
          className="form-control"
          name={props.uploadFileName}
          onChange={onChangeHandler}
          type="file"
        />
      </div>
    </form>
  );
};

Form.defaultProps = {
  acceptedFileTypes: "",
  allowMultipleFiles: false,
};
