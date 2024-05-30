// @ts-nocheck

import React from 'react';
import errorImage from "../components/Error404.jpeg"

const ErrorPage: React.FC = () => {
  return (
    <div>
      <img src={errorImage} alt="Ambulance" className="mb-4" />
    </div>
  );
};

export default ErrorPage;
