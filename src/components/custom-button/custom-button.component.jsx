import React from "react";

import { CustomButtonContainer } from "./custom-button.style";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <CustomButtonContainer
    className={`${inverted ? "iverted" : ""} custom-button ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
