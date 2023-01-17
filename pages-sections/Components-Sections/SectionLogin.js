import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/loginStyle.js";

const useStyles = makeStyles(styles);

export default function SectionLogin() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <Button startIcon={<LocalFireDepartmentIcon className={classes.icon} fontSize="large"/>} className={classes.Button}> 
          FAZER MINHA INSCRIÇÃO
        </Button>
      </div>
    </div>
  );
}
