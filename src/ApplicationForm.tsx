import React from "react";
import Header from "./Components/HeaderComponent/Header";
import Banner from "./Components/BannerComponent/Banner";
import Form from "./Components/FormComponent/Form";

interface Props {}

export const ApplicationForm = (props: Props) => (
  <div>
    <Header />
    <Banner
      jobTitle="UX Designer (m/f/x)"
      position="Fulltime"
      place="Berlin"
      country="Germany"
    />
    <Form />
  </div>
);
