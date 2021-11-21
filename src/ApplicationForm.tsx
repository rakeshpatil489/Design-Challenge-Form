import React from 'react';
import Header from './Components/HeaderComponent/Header';
import Banner from './Components/BannerComponent/Banner';
import Form from './Components/FormComponent/Form';
//import styles from './ApplicationForm.module.css';

interface Props {}

export const ApplicationForm = (props: Props) => (
    <div>
      <Header />
      <Banner />
      <Form />
    </div>
);
