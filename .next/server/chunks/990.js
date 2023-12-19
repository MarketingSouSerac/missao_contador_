"use strict";
exports.id = 990;
exports.ids = [990];
exports.modules = {

/***/ 9990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CardHeader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit.js
var nextjs_material_kit = __webpack_require__(6547);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/components/cardHeaderStyle.js

const cardHeaderStyle = {
    cardHeader: {
        borderRadius: "3px",
        padding: "1rem 15px",
        marginLeft: "15px",
        marginRight: "15px",
        marginTop: "-30px",
        border: "0",
        marginBottom: "0"
    },
    cardHeaderPlain: {
        marginLeft: "0px",
        marginRight: "0px"
    },
    warningCardHeader: nextjs_material_kit/* warningCardHeader */.rt,
    successCardHeader: nextjs_material_kit/* successCardHeader */.aT,
    dangerCardHeader: nextjs_material_kit/* dangerCardHeader */.yF,
    infoCardHeader: nextjs_material_kit/* infoCardHeader */.Yi,
    primaryCardHeader: nextjs_material_kit/* primaryCardHeader */.hF
};
/* harmony default export */ const components_cardHeaderStyle = (cardHeaderStyle);

;// CONCATENATED MODULE: ./components/Card/CardHeader.js


// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons
// core components

const useStyles = (0,styles_.makeStyles)(components_cardHeaderStyle);
function CardHeader(props) {
    const classes = useStyles();
    const { className , children , color , plain , ...rest } = props;
    const cardHeaderClasses = external_classnames_default()({
        [classes.cardHeader]: true,
        [classes[color + "CardHeader"]]: color,
        [classes.cardHeaderPlain]: plain,
        [className]: className !== undefined
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: cardHeaderClasses,
        ...rest,
        children: children
    });
};
CardHeader.propTypes = {
    className: (external_prop_types_default()).string,
    color: external_prop_types_default().oneOf([
        "warning",
        "success",
        "danger",
        "info",
        "primary"
    ]),
    plain: (external_prop_types_default()).bool,
    children: (external_prop_types_default()).node
};


/***/ })

};
;