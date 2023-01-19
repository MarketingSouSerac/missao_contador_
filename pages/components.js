import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// sections for this page
import SectionBasics from "/pages-sections/Components-Sections/SectionBasics.js";
import SectionNavbars from "/pages-sections/Components-Sections/SectionNavbars.js";
import SectionTabs from "/pages-sections/Components-Sections/SectionTabs.js";
import SectionPills from "/pages-sections/Components-Sections/SectionPills.js";
import SectionNotifications from "/pages-sections/Components-Sections/SectionNotifications.js";
import SectionTypography from "/pages-sections/Components-Sections/SectionTypography.js";
import SectionJavascript from "/pages-sections/Components-Sections/SectionJavascript.js";
import SectionCarousel from "/pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "/pages-sections/Components-Sections/SectionCompletedExamples.js";
import SectionLogin from "/pages-sections/Components-Sections/SectionLogin.js";
import SectionExamples from "/pages-sections/Components-Sections/SectionDepoimentos.js";
import SectionDownload from "/pages-sections/Components-Sections/SectionDownload.js";

import styles from "/styles/jss/nextjs-material-kit/pages/components.js";
import SectionJhonny from "../pages-sections/Components-Sections/SectionCompletedExamples";

const useStyles = makeStyles(styles);



export default function Components(props) {
  
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <div className={classes.sections}>
        <div className={classes.container}>
          <iframe
            className={classes.video}
            src="https://www.youtube.com/embed/3CHci1sai_I"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay ; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          
        </div>
      </div>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionCarousel />
        <SectionJhonny />
        <SectionBasics />
        <SectionTabs />
        <SectionNotifications />
        <SectionJavascript />
        <SectionPills />
        <SectionExamples />
        <SectionDownload />
      </div>
    </div>
  );
}
