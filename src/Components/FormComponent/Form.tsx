import React from "react";
import InputField from "../InputfieldComponent/InputField";
import Upload from "../UploadComponent/Upload";
import Button from "../ButtonComponent/Button";
import styles from "./Form.module.css";

function Form() {
  return (
    <form className={styles.container}>
      {/* title of the form   */}
      <div className={styles.headingTitle}>
        <h2>Job Application</h2>
        <label className={styles.helperText}>
          <span className={styles.required}>*</span> Required
        </label>
      </div>

      <div className={styles.inputfieldContainer}>
        <h3 className={styles.inputfieldHeading}>Personal Info</h3>

        {/* Inputfields */}
        <InputField />
        <InputField />
        <InputField />
      </div>

      <div className={styles.uploadContainer}>
        <h3 className={styles.uploadHeading}>Upload Documents</h3>
        <label className={styles.helperText}>
          File accepcted - .PDF, .docs/docx - Max file size 20kb for each
        </label>

        {/* Upload Fields */}
        <Upload />
        <Upload />
      </div>

      {/* Divider */}
      <hr />

      {/* Button Component */}
      <Button />
    </form>
  );
}

export default Form;