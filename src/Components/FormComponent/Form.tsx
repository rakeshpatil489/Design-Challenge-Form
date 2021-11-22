import React from "react";
import InputField from "../InputfieldComponent/InputField";
import Upload from "../UploadComponent/Upload";
import Button from "../ButtonComponent/Button";
import Checkbox from "../CheckboxComponent/Checkbox";
import graphicsLeft from "../../Assets/left-graphics.svg";
import graphicsRight from "../../Assets/right-graphics.svg";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <form>
      <img
          className={styles.graphicsLeft}
          src={graphicsLeft}
          alt="graphics"
          height="154"
          width="154"
        />
        <img
          className={styles.graphicsRight}
          src={graphicsRight}
          alt="graphics"
          height="154"
          width="154"
        />
      <div className={styles.container}>
        
        <div className={styles.formWrapper}>

          {/* title of the form   */}
          <div className={styles.headingTitleContainer}>
            <h2 className={styles.headingTitle}>Job Application</h2>
            <label className={styles.helperText}>
              <span className={styles.required}>*</span> Required
            </label>
          </div>

          <div className={styles.inputfieldContainer}>
            <h3 className={styles.inputfieldHeading}>Personal Info</h3>

            {/* Inputfields */}
            <InputField
              label="Fullname"
              type="text"
              placeholder="Ex: Rakesh patil"
            />
            <InputField
              label="Email Address"
              type="text"
              placeholder="Ex: Rakesh@gmail.com"
            />
            <InputField
              label="Portfolio Link"
              type="text"
              placeholder="Ex: www.rakesh-patil.com"
            />
          </div>

          <div className={styles.uploadContainer}>
            <div className={styles.uploadHeadingContainer}>
              <h3 className={styles.uploadHeading}>Upload Documents</h3>
              <label className={styles.helperText}>
                File accepcted - .PDF, .docs/docx - Max file size 20kb for each
              </label>
            </div>

            {/* Upload Fields */}
            <Upload 
             label="Upload CV" />
            <Upload 
             label="Cover Letter" />

          </div>

          <Checkbox 
           consentText="I accepect"
           externalLink="Optilyz’s Privacy Policy"
           />

          {/* Divider */}
          <hr />

          {/* Button Component */}
          <Button buttonText="submit application" />
        </div>
      </div>
    </form>
  );
};

export default Form;
