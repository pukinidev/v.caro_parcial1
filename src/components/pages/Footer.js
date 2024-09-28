import { Typography } from "@mui/material";
import React from "react";
import { FormattedMessage } from "react-intl";

function Footer() {
  return (
    <Typography variant="body1" textAlign="center" gutterBottom >
      <FormattedMessage id="contact"/> +57 3102105253 - info@robot-lovers.com - @robot-lovers
    </Typography>
  );
}

export default Footer;
