"use strict";
(() => {
var exports = {};
exports.id = 505;
exports.ids = [505];
exports.modules = {

/***/ 672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Components)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
;// CONCATENATED MODULE: external "nouislider"
const external_nouislider_namespaceObject = require("nouislider");
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
;// CONCATENATED MODULE: external "@mui/icons-material/LocationOnOutlined"
const LocationOnOutlined_namespaceObject = require("@mui/icons-material/LocationOnOutlined");
var LocationOnOutlined_default = /*#__PURE__*/__webpack_require__.n(LocationOnOutlined_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/DateRangeOutlined"
const DateRangeOutlined_namespaceObject = require("@mui/icons-material/DateRangeOutlined");
var DateRangeOutlined_default = /*#__PURE__*/__webpack_require__.n(DateRangeOutlined_namespaceObject);
// EXTERNAL MODULE: ./components/Header/Header.js + 1 modules
var Header = __webpack_require__(9152);
// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__(5031);
// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__(6256);
// EXTERNAL MODULE: ./components/CustomDropdown/CustomDropdown.js + 1 modules
var CustomDropdown = __webpack_require__(3743);
// EXTERNAL MODULE: external "@material-ui/core/InputAdornment"
var InputAdornment_ = __webpack_require__(2944);
;// CONCATENATED MODULE: external "@material-ui/core/FormControlLabel"
const FormControlLabel_namespaceObject = require("@material-ui/core/FormControlLabel");
;// CONCATENATED MODULE: external "@material-ui/core/Checkbox"
const Checkbox_namespaceObject = require("@material-ui/core/Checkbox");
;// CONCATENATED MODULE: external "@material-ui/core/Radio"
const Radio_namespaceObject = require("@material-ui/core/Radio");
;// CONCATENATED MODULE: external "@material-ui/core/Switch"
const Switch_namespaceObject = require("@material-ui/core/Switch");
// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__(9899);
// EXTERNAL MODULE: external "@material-ui/icons/People"
var People_ = __webpack_require__(1075);
;// CONCATENATED MODULE: external "@material-ui/icons/Check"
const Check_namespaceObject = require("@material-ui/icons/Check");
;// CONCATENATED MODULE: external "@material-ui/icons/FiberManualRecord"
const FiberManualRecord_namespaceObject = require("@material-ui/icons/FiberManualRecord");
// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var Grid_GridContainer = __webpack_require__(4041);
// EXTERNAL MODULE: ./components/Grid/GridItem.js
var Grid_GridItem = __webpack_require__(6680);
// EXTERNAL MODULE: ./components/CustomInput/CustomInput.js + 1 modules
var CustomInput = __webpack_require__(6140);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: external "@material-ui/core/LinearProgress"
const LinearProgress_namespaceObject = require("@material-ui/core/LinearProgress");
var LinearProgress_default = /*#__PURE__*/__webpack_require__.n(LinearProgress_namespaceObject);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit.js
var nextjs_material_kit = __webpack_require__(6547);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/components/customLinearProgressStyle.js

const customLinearProgressStyle = {
    root: {
        height: "4px",
        marginBottom: "20px",
        overflow: "hidden"
    },
    bar: {
        height: "4px"
    },
    primary: {
        backgroundColor: nextjs_material_kit/* primaryColor */.lr
    },
    warning: {
        backgroundColor: nextjs_material_kit/* warningColor */.MA
    },
    danger: {
        backgroundColor: nextjs_material_kit/* dangerColor */.E7
    },
    success: {
        backgroundColor: nextjs_material_kit/* successColor */.nq
    },
    info: {
        backgroundColor: nextjs_material_kit/* infoColor */.bE
    },
    rose: {
        backgroundColor: nextjs_material_kit/* roseColor */.An
    },
    gray: {
        backgroundColor: nextjs_material_kit/* grayColor */.X_
    },
    primaryBackground: {
        background: "rgba(156, 39, 176, 0.2)"
    },
    warningBackground: {
        background: "rgba(255, 152, 0, 0.2)"
    },
    dangerBackground: {
        background: "rgba(244, 67, 54, 0.2)"
    },
    successBackground: {
        background: "rgba(76, 175, 80, 0.2)"
    },
    infoBackground: {
        background: "rgba(0, 188, 212, 0.2)"
    },
    roseBackground: {
        background: "rgba(233, 30, 99, 0.2)"
    },
    grayBackground: {
        background: "rgba(221, 221, 221, 0.2)"
    }
};
/* harmony default export */ const components_customLinearProgressStyle = (customLinearProgressStyle);

;// CONCATENATED MODULE: ./components/CustomLinearProgress/CustomLinearProgress.js


// nodejs library to set properties for components

// @material-ui/core components


// core components

const useStyles = (0,styles_.makeStyles)(components_customLinearProgressStyle);
function CustomLinearProgress(props) {
    const classes = useStyles();
    const { color , ...rest } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx((LinearProgress_default()), {
        ...rest,
        classes: {
            root: classes.root + " " + classes[color + "Background"],
            bar: classes.bar + " " + classes[color]
        }
    });
};
CustomLinearProgress.defaultProps = {
    color: "gray"
};
CustomLinearProgress.propTypes = {
    color: external_prop_types_default().oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ])
};

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(2610);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/components/paginationStyle.js

const paginationStyle = {
    pagination: {
        display: "inline-block",
        paddingLeft: "0",
        margin: "0 0 20px 0",
        borderRadius: "4px"
    },
    paginationItem: {
        display: "inline"
    },
    paginationLink: {
        ":first-of-type": {
            marginleft: "0"
        },
        letterSpacing: "unset",
        border: "0",
        borderRadius: "30px !important",
        transition: "all .3s",
        padding: "0px 11px",
        margin: "0 3px",
        minWidth: "30px",
        height: "30px",
        minHeight: "auto",
        lineHeight: "30px",
        fontWeight: "400",
        fontSize: "12px",
        textTransform: "uppercase",
        background: "transparent",
        position: "relative",
        float: "left",
        textDecoration: "none",
        boxSizing: "border-box",
        "&,&:hover,&:focus": {
            color: nextjs_material_kit/* grayColor */.X_
        },
        "&:hover,&:focus": {
            zIndex: "3",
            backgroundColor: "#eee",
            borderColor: "#ddd"
        },
        "&:hover": {
            cursor: "pointer"
        }
    },
    primary: {
        "&,&:hover,&:focus": {
            backgroundColor: nextjs_material_kit/* primaryColor */.lr,
            borderColor: nextjs_material_kit/* primaryColor */.lr,
            color: "#FFFFFF",
            boxShadow: `0 4px 5px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* primaryColor */.lr, 0.14)}, 0 1px 10px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* primaryColor */.lr, 0.12)}, 0 2px 4px -1px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* primaryColor */.lr, 0.2)}`
        },
        "&:hover,&:focus": {
            zIndex: "2",
            cursor: "default"
        }
    },
    info: {
        "&,&:hover,&:focus": {
            backgroundColor: nextjs_material_kit/* infoColor */.bE,
            borderColor: nextjs_material_kit/* infoColor */.bE,
            color: "#FFFFFF",
            boxShadow: `0 4px 5px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* infoColor */.bE, 0.14)}, 0 1px 10px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* infoColor */.bE, 0.12)}, 0 2px 4px -1px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* infoColor */.bE, 0.2)}`
        },
        "&:hover,&:focus": {
            zIndex: "2",
            cursor: "default"
        }
    },
    success: {
        "&,&:hover,&:focus": {
            backgroundColor: nextjs_material_kit/* successColor */.nq,
            borderColor: nextjs_material_kit/* successColor */.nq,
            color: "#FFFFFF",
            boxShadow: `0 4px 5px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* successColor */.nq, 0.14)}, 0 1px 10px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* successColor */.nq, 0.12)}, 0 2px 4px -1px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* successColor */.nq, 0.2)}`
        },
        "&:hover,&:focus": {
            zIndex: "2",
            cursor: "default"
        }
    },
    warning: {
        "&,&:hover,&:focus": {
            backgroundColor: nextjs_material_kit/* warningColor */.MA,
            borderColor: nextjs_material_kit/* warningColor */.MA,
            color: "#FFFFFF",
            boxShadow: `0 4px 5px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* warningColor */.MA, 0.14)}, 0 1px 10px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* warningColor */.MA, 0.12)}, 0 2px 4px -1px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* warningColor */.MA, 0.2)}`
        },
        "&:hover,&:focus": {
            zIndex: "2",
            cursor: "default"
        }
    },
    danger: {
        "&,&:hover,&:focus": {
            backgroundColor: nextjs_material_kit/* dangerColor */.E7,
            borderColor: nextjs_material_kit/* dangerColor */.E7,
            color: "#FFFFFF",
            boxShadow: `0 4px 5px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* dangerColor */.E7, 0.14)}, 0 1px 10px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* dangerColor */.E7, 0.12)}, 0 2px 4px -1px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* dangerColor */.E7, 0.2)}`
        },
        "&:hover,&:focus": {
            zIndex: "2",
            cursor: "default"
        }
    },
    rose: {
        "&,&:hover,&:focus": {
            backgroundColor: nextjs_material_kit/* roseColor */.An,
            borderColor: nextjs_material_kit/* roseColor */.An,
            color: "#FFFFFF",
            boxShadow: `0 4px 5px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* roseColor */.An, 0.14)}, 0 1px 10px 0 ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* roseColor */.An, 0.12)}, 0 2px 4px -1px ${(0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* roseColor */.An, 0.2)}`
        },
        "&:hover,&:focus": {
            zIndex: "2",
            cursor: "default"
        }
    },
    disabled: {
        "&,&:hover,&:focus": {
            color: "#777",
            cursor: "not-allowed",
            backgroundColor: "#fff",
            borderColor: "#ddd"
        }
    }
};
/* harmony default export */ const components_paginationStyle = (paginationStyle);

;// CONCATENATED MODULE: ./components/Pagination/Pagination.js


// nodejs library to set properties for components

// nodejs library that concatenates classes

// @material-ui/core components



const Pagination_useStyles = (0,styles_.makeStyles)(components_paginationStyle);
function Pagination(props) {
    const classes = Pagination_useStyles();
    const { pages , color  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: classes.pagination,
        children: pages.map((prop, key)=>{
            const paginationLink = external_classnames_default()({
                [classes.paginationLink]: true,
                [classes[color]]: prop.active,
                [classes.disabled]: prop.disabled
            });
            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: classes.paginationItem,
                children: prop.onClick !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    onClick: prop.onClick,
                    className: paginationLink,
                    children: prop.text
                }) : /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    onClick: ()=>alert("you've clicked " + prop.text),
                    className: paginationLink,
                    children: prop.text
                })
            }, key);
        })
    });
};
Pagination.defaultProps = {
    color: "primary"
};
Pagination.propTypes = {
    pages: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        active: (external_prop_types_default()).bool,
        disabled: (external_prop_types_default()).bool,
        text: external_prop_types_default().oneOfType([
            (external_prop_types_default()).number,
            external_prop_types_default().oneOf([
                "PREV",
                "NEXT",
                "..."
            ])
        ]).isRequired,
        onClick: (external_prop_types_default()).func
    })).isRequired,
    color: external_prop_types_default().oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger"
    ])
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/components/badgeStyle.js

const badgeStyle = {
    badge: {
        marginRight: "3px",
        borderRadius: "12px",
        padding: "5px 12px",
        textTransform: "uppercase",
        fontSize: "10px",
        fontWeight: "500",
        lineHeight: "1",
        color: "#fff",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "baseline",
        display: "inline-block"
    },
    primary: {
        backgroundColor: nextjs_material_kit/* primaryColor */.lr
    },
    warning: {
        backgroundColor: nextjs_material_kit/* warningColor */.MA
    },
    danger: {
        backgroundColor: nextjs_material_kit/* dangerColor */.E7
    },
    success: {
        backgroundColor: nextjs_material_kit/* successColor */.nq
    },
    info: {
        backgroundColor: nextjs_material_kit/* infoColor */.bE
    },
    rose: {
        backgroundColor: nextjs_material_kit/* roseColor */.An
    },
    gray: {
        backgroundColor: "#6c757d"
    }
};
/* harmony default export */ const components_badgeStyle = (badgeStyle);

;// CONCATENATED MODULE: ./components/Badge/Badge.js


// nodejs library to set properties for components

// @material-ui/core components


const Badge_useStyles = (0,styles_.makeStyles)(components_badgeStyle);
function Badge(props) {
    const classes = Badge_useStyles();
    const { color , children  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: classes.badge + " " + classes[color],
        children: children
    });
};
Badge.defaultProps = {
    color: "gray"
};
Badge.propTypes = {
    color: external_prop_types_default().oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    children: (external_prop_types_default()).node
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/customCheckboxRadioSwitch.js

const customCheckboxRadioSwitch = {
    checkRoot: {
        padding: "12px",
        "&:hover": {
            backgroundColor: (0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* primaryColor */.lr, 0.04) + "!important"
        }
    },
    radioRoot: {
        padding: "12px",
        "&:hover": {
            backgroundColor: (0,nextjs_material_kit/* hexToRGBAlpha */.vS)(nextjs_material_kit/* primaryColor */.lr, 0.04) + "!important"
        }
    },
    labelRoot: {
        marginLeft: "-14px"
    },
    checkboxAndRadio: {
        position: "relative",
        display: "block",
        marginTop: "10px",
        marginBottom: "10px"
    },
    checkboxAndRadioHorizontal: {
        position: "relative",
        display: "block",
        "&:first-child": {
            marginTop: "10px"
        },
        "&:not(:first-child)": {
            marginTop: "-14px"
        },
        marginTop: "0",
        marginBottom: "0"
    },
    checked: {
        color: nextjs_material_kit/* primaryColor */.lr + "!important"
    },
    checkedIcon: {
        width: "20px",
        height: "20px",
        border: "1px solid rgba(0, 0, 0, .54)",
        borderRadius: "3px"
    },
    uncheckedIcon: {
        width: "0px",
        height: "0px",
        padding: "9px",
        border: "1px solid rgba(0, 0, 0, .54)",
        borderRadius: "3px"
    },
    disabledCheckboxAndRadio: {
        opacity: "0.45"
    },
    label: {
        cursor: "pointer",
        paddingLeft: "0",
        color: "rgba(0, 0, 0, 0.26)",
        fontSize: "14px",
        lineHeight: "1.428571429",
        fontWeight: "400",
        display: "inline-flex",
        transition: "0.3s ease all",
        letterSpacing: "unset"
    },
    labelHorizontal: {
        color: "rgba(0, 0, 0, 0.26)",
        cursor: "pointer",
        display: "inline-flex",
        fontSize: "14px",
        lineHeight: "1.428571429",
        fontWeight: "400",
        paddingTop: "39px",
        marginRight: "0",
        "@media (min-width: 992px)": {
            float: "right"
        }
    },
    labelHorizontalRadioCheckbox: {
        paddingTop: "22px"
    },
    labelLeftHorizontal: {
        color: "rgba(0, 0, 0, 0.26)",
        cursor: "pointer",
        display: "inline-flex",
        fontSize: "14px",
        lineHeight: "1.428571429",
        fontWeight: "400",
        paddingTop: "22px",
        marginRight: "0"
    },
    labelError: {
        color: nextjs_material_kit/* dangerColor */.E7
    },
    radio: {
        color: nextjs_material_kit/* primaryColor */.lr + "!important"
    },
    radioChecked: {
        width: "16px",
        height: "16px",
        border: "1px solid " + nextjs_material_kit/* primaryColor */.lr,
        borderRadius: "50%"
    },
    radioUnchecked: {
        width: "0px",
        height: "0px",
        padding: "7px",
        border: "1px solid rgba(0, 0, 0, .54)",
        borderRadius: "50%"
    },
    inlineChecks: {
        marginTop: "8px"
    },
    iconCheckbox: {
        height: "116px",
        width: "116px",
        color: nextjs_material_kit/* grayColor */.X_,
        "& > span:first-child": {
            borderWidth: "4px",
            borderStyle: "solid",
            borderColor: "#CCCCCC",
            textAlign: "center",
            verticalAlign: "middle",
            borderRadius: "50%",
            color: "inherit",
            margin: "0 auto 20px",
            transition: "all 0.2s"
        },
        "&:hover": {
            color: nextjs_material_kit/* roseColor */.An,
            "& > span:first-child": {
                borderColor: nextjs_material_kit/* roseColor */.An
            }
        }
    },
    iconCheckboxChecked: {
        color: nextjs_material_kit/* roseColor */.An,
        "& > span:first-child": {
            borderColor: nextjs_material_kit/* roseColor */.An
        }
    },
    iconCheckboxIcon: {
        fontSize: "40px",
        lineHeight: "111px"
    },
    switchBase: {
        color: nextjs_material_kit/* primaryColor */.lr + "!important"
    },
    switchIcon: {
        boxShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.4)",
        color: "#FFFFFF !important",
        border: "1px solid rgba(0, 0, 0, .54)"
    },
    switchBar: {
        width: "30px",
        height: "15px",
        backgroundColor: "rgb(80, 80, 80)",
        borderRadius: "15px",
        opacity: "0.7!important"
    },
    switchChecked: {
        "& + $switchBar": {
            backgroundColor: "rgba(156, 39, 176, 1) !important"
        },
        "& $switchIcon": {
            borderColor: "#9c27b0"
        }
    },
    switchRoot: {
        height: "48px"
    }
};
/* harmony default export */ const nextjs_material_kit_customCheckboxRadioSwitch = (customCheckboxRadioSwitch);

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js


const basicsStyle = {
    sections: {
        padding: "70px 0",
        background: "#211a19"
    },
    container: nextjs_material_kit/* container */.nC,
    title: {
        ...nextjs_material_kit/* title */.TN,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    space50: {
        height: "50px",
        display: "block"
    },
    space70: {
        height: "70px",
        display: "block"
    },
    icons: {
        width: "40px",
        height: "40px",
        color: "#FFFFFF"
    },
    ...nextjs_material_kit_customCheckboxRadioSwitch
};
/* harmony default export */ const componentsSections_basicsStyle = (basicsStyle);

;// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionBasics.js


// plugin that creates slider




// @material-ui/core components










// @material-ui/icons




// core components







const SectionBasics_useStyles = (0,styles_.makeStyles)(componentsSections_basicsStyle);
function SectionBasics() {
    const classes = SectionBasics_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.sections,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.container,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                        xs: 12,
                        sm: 12,
                        md: 6,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: classes.title,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Typography, {
                                    className: classes.title,
                                    style: {
                                        color: "white",
                                        paddingBottom: "20px"
                                    },
                                    children: [
                                        "SUA ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: "MISS\xc3O CASO ACEITE,"
                                        }),
                                        " COME\xc7A AQUI:"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                                brand: /*#__PURE__*/ jsx_runtime_.jsx((LocationOnOutlined_default()), {
                                    className: classes.icons,
                                    fontSize: "large"
                                }),
                                leftLinks: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                    style: {
                                        color: "black",
                                        fontSize: "19px"
                                    },
                                    children: "S\xe3o Paulo - SP"
                                }),
                                color: "danger"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                        style: {
                            paddingTop: "10px"
                        },
                        xs: 12,
                        sm: 12,
                        md: 6,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: classes.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                                brand: /*#__PURE__*/ jsx_runtime_.jsx((DateRangeOutlined_default()), {
                                    className: classes.icons,
                                    fontSize: "large"
                                }),
                                leftLinks: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Typography, {
                                    style: {
                                        color: "black",
                                        fontSize: "19px"
                                    },
                                    children: [
                                        "19 e 20 de maio ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "08H - Hor\xe1rio de Brasilia"
                                    ]
                                }),
                                color: "danger"
                            })
                        ]
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: external "@material-ui/core/Icon"
var Icon_ = __webpack_require__(7886);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);
;// CONCATENATED MODULE: external "@material-ui/icons/Search"
const Search_namespaceObject = require("@material-ui/icons/Search");
// EXTERNAL MODULE: external "@material-ui/icons/Email"
var Email_ = __webpack_require__(5732);
;// CONCATENATED MODULE: external "@material-ui/icons/Face"
const Face_namespaceObject = require("@material-ui/icons/Face");
;// CONCATENATED MODULE: external "@material-ui/icons/AccountCircle"
const AccountCircle_namespaceObject = require("@material-ui/icons/AccountCircle");
;// CONCATENATED MODULE: external "@material-ui/icons/Explore"
const Explore_namespaceObject = require("@material-ui/icons/Explore");
// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__(4286);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit/components/headerLinksStyle.js
var headerLinksStyle = __webpack_require__(9441);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js


const navbarsStyle = (theme)=>({
        section: {
            padding: "70px 0",
            paddingTop: "40px",
            background: "#211a19"
        },
        container: nextjs_material_kit/* container */.nC,
        title: {
            ...nextjs_material_kit/* title */.TN,
            marginTop: "30px",
            minHeight: "32px",
            textDecoration: "none"
        },
        navbar: {
            marginBottom: "-10px",
            zIndex: "100",
            position: "relative",
            overflow: "hidden",
            "& header": {
                borderRadius: "0"
            }
        },
        navigation: {
            backgroundPosition: "center center",
            backgroundSize: "cover",
            marginTop: "0",
            minHeight: "740px"
        },
        formControl: {
            [theme.breakpoints.down("md")]: {
                margin: "10px 0 0 15px !important",
                color: nextjs_material_kit/* grayColor */.X_
            },
            margin: "10px 0 0 0 !important",
            paddingTop: "0"
        },
        inputRootCustomClasses: {
            margin: "0!important"
        },
        searchIcon: {
            width: "20px",
            height: "20px",
            color: "inherit"
        },
        ...(0,headerLinksStyle/* default */.Z)(theme),
        img: {
            width: "40px",
            height: "40px",
            borderRadius: "50%"
        },
        imageDropdownButton: {
            [theme.breakpoints.down("md")]: {
                top: "0",
                margin: "5px 15px"
            },
            padding: "0px",
            top: "4px",
            borderRadius: "50%",
            marginLeft: "5px"
        }
    });
/* harmony default export */ const componentsSections_navbarsStyle = (navbarsStyle);

;// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionNavbars.js


// @material-ui/core components




// @material-ui/icons





// core components










const SectionNavbars_useStyles = (0,styles_.makeStyles)(componentsSections_navbarsStyle);
function SectionNavbars() {
    const classes = SectionNavbars_useStyles();
    return /*#__PURE__*/ _jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ _jsx("div", {
            className: classes.container,
            children: /*#__PURE__*/ _jsxs(GridContainer, {
                children: [
                    /*#__PURE__*/ _jsx(GridItem, {
                        xs: 12,
                        sm: 12,
                        md: 6,
                        children: /*#__PURE__*/ _jsx("div", {
                            className: classes.img,
                            children: /*#__PURE__*/ _jsx("img", {
                                height: "500px",
                                src: "/img/00J.png"
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsxs(GridItem, {
                        xs: 12,
                        sm: 12,
                        md: 6,
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: classes.title
                            }),
                            /*#__PURE__*/ _jsxs(Typography, {
                                style: {
                                    textAlign: "center",
                                    color: "white"
                                },
                                children: [
                                    /*#__PURE__*/ _jsx("strong", {
                                        children: "PERFORMANCE + DINHEIRO + PESSOAS!"
                                    }),
                                    " ",
                                    /*#__PURE__*/ _jsx("br", {}),
                                    " ",
                                    /*#__PURE__*/ _jsx("i", {
                                        children: "TENHA UMA EMPRESA DE SUCESSO!"
                                    }),
                                    " ",
                                    /*#__PURE__*/ _jsx("br", {}),
                                    " ",
                                    /*#__PURE__*/ _jsx("strong", {
                                        children: "“N\xc3O EXISTE CNPJ FORTE COM CPF FRACO!”"
                                    }),
                                    " ",
                                    /*#__PURE__*/ _jsx("br", {})
                                ]
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: "    "
                            }),
                            /*#__PURE__*/ _jsx(Typography, {
                                style: {
                                    color: "white"
                                },
                                children: "VENHA TRANSFORMAR A GESTÃO DO SEU NEGÓCIO AO LADO DE UM DOS CONTADORES MAIS INFLUENTES DO PAÍS E GRANDES EMPREENDEDORES DE SUCESSO. APRENDA QUAIS AS ESTRAT\xc9GIAS ATUAIS QUE EST\xc3O DOMINANDO O MERCADO PARA VOC\xca AUMENTAR O SEU FATURAMENTO, TER UMA EMPRESA QUE N\xc3O DEPENDA DA SUA ATUA\xc7\xc3O PARA CRESCER, INVESTIR E SE POSICIONAR NA INTERNET COM MARKETING DIGITAL, FAZER A MELHOR GESTÃO DE PESSOAS E AINDA INOVAR COM A TECNOLOGIA E FERRAMENTAS."
                            })
                        ]
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: external "@material-ui/icons/Chat"
var Chat_ = __webpack_require__(1677);
;// CONCATENATED MODULE: external "@material-ui/icons/Build"
const Build_namespaceObject = require("@material-ui/icons/Build");
;// CONCATENATED MODULE: external "@mui/icons-material/LocalFireDepartment"
const LocalFireDepartment_namespaceObject = require("@mui/icons-material/LocalFireDepartment");
var LocalFireDepartment_default = /*#__PURE__*/__webpack_require__.n(LocalFireDepartment_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Pix"
const Pix_namespaceObject = require("@mui/icons-material/Pix");
var Pix_default = /*#__PURE__*/__webpack_require__.n(Pix_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/CreditCard"
const CreditCard_namespaceObject = require("@mui/icons-material/CreditCard");
var CreditCard_default = /*#__PURE__*/__webpack_require__.n(CreditCard_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/core/Tabs"
var Tabs_ = __webpack_require__(9033);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);
// EXTERNAL MODULE: external "@material-ui/core/Tab"
var Tab_ = __webpack_require__(2301);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);
// EXTERNAL MODULE: ./components/Card/Card.js + 1 modules
var Card = __webpack_require__(2406);
// EXTERNAL MODULE: ./components/Card/CardBody.js + 1 modules
var CardBody = __webpack_require__(7585);
// EXTERNAL MODULE: ./components/Card/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(9990);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/components/customTabsStyle.js
const customTabsStyle = {
    cardTitle: {
        float: "left",
        padding: "10px 10px 10px 0px",
        lineHeight: "24px"
    },
    cardTitleRTL: {
        float: "right",
        padding: "10px 0px 10px 10px !important"
    },
    displayNone: {
        display: "none !important"
    },
    tabsRoot: {
        minHeight: "unset !important"
    },
    tabRootButton: {
        minHeight: "unset !important",
        minWidth: "unset !important",
        width: "unset !important",
        height: "unset !important",
        maxWidth: "unset !important",
        maxHeight: "unset !important",
        padding: "10px 15px",
        borderRadius: "3px",
        lineHeight: "24px",
        border: "0 !important",
        color: "#fff !important",
        marginLeft: "4px",
        fontWeight: "500",
        fontSize: "12px",
        "&:last-child": {
            marginLeft: "0px"
        }
    },
    tabSelected: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        transition: "0.2s background-color 0.1s"
    },
    tabWrapper: {
        display: "inline-block",
        minHeight: "unset !important",
        minWidth: "unset !important",
        width: "unset !important",
        height: "unset !important",
        maxWidth: "unset !important",
        maxHeight: "unset !important",
        "& > svg": {
            verticalAlign: "middle",
            margin: "-1.55px 5px 0 0 !important"
        },
        "&,& *": {
            letterSpacing: "normal !important"
        }
    }
};
/* harmony default export */ const components_customTabsStyle = (customTabsStyle);

;// CONCATENATED MODULE: ./components/CustomTabs/CustomTabs.js


// nodejs library that concatenates classes

// nodejs library to set properties for components

// material-ui components




// core components




const CustomTabs_useStyles = (0,styles_.makeStyles)(components_customTabsStyle);
function CustomTabs(props) {
    const [value, setValue] = external_react_default().useState(0);
    const handleChange = (event, value)=>{
        setValue(value);
    };
    const classes = CustomTabs_useStyles();
    const { headerColor , plainTabs , tabs , title , rtlActive  } = props;
    const cardTitle = external_classnames_default()({
        [classes.cardTitle]: true,
        [classes.cardTitleRTL]: rtlActive
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
        plain: plainTabs,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                color: headerColor,
                plain: plainTabs,
                children: [
                    title !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: cardTitle,
                        children: title
                    }) : null,
                    /*#__PURE__*/ jsx_runtime_.jsx((Tabs_default()), {
                        value: value,
                        onChange: handleChange,
                        classes: {
                            root: classes.tabsRoot,
                            indicator: classes.displayNone
                        },
                        children: tabs.map((prop, key)=>{
                            var icon = {};
                            if (prop.tabIcon) {
                                icon = {
                                    icon: typeof prop.tabIcon === "string" ? /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                                        children: prop.tabIcon
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(prop.tabIcon, {})
                                };
                            }
                            return /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                classes: {
                                    root: classes.tabRootButton,
                                    label: classes.tabLabel,
                                    selected: classes.tabSelected,
                                    wrapper: classes.tabWrapper
                                },
                                label: prop.tabName,
                                ...icon
                            }, key);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CardBody/* default */.Z, {
                children: tabs.map((prop, key)=>{
                    if (key === value) {
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: prop.tabContent
                        }, key);
                    }
                    return null;
                })
            })
        ]
    });
};
CustomTabs.propTypes = {
    headerColor: external_prop_types_default().oneOf([
        "warning",
        "success",
        "danger",
        "info",
        "primary",
        "rose"
    ]),
    title: (external_prop_types_default()).string,
    tabs: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        tabName: (external_prop_types_default()).string.isRequired,
        tabIcon: (external_prop_types_default()).object,
        tabContent: (external_prop_types_default()).node.isRequired
    })),
    rtlActive: (external_prop_types_default()).bool,
    plainTabs: (external_prop_types_default()).bool
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js

const tabsStyle = {
    section: {
        background: "#211a19",
        padding: "70px 0"
    },
    container: nextjs_material_kit/* container */.nC,
    textCenter: {
        textAlign: "center"
    },
    title: {
        fontSize: "28px",
        textAlign: "center",
        fontWeight: "bold",
        paddingBottom: "30px"
    },
    icon: {
        height: "400px",
        width: "70px",
        marginLeft: "20px",
        color: "white"
    },
    Button: {
        marginLeft: `@media and screen (max-width: 800px){
      marginLeft: '500px'
    }`,
        height: "80px",
        borderRadius: "17px",
        fontSize: "22px",
        width: "280px",
        background: "#800000",
        color: "white"
    },
    card: {
        background: "linear-gradient(to top, #800000 0%, #211a19 100%)",
        borderRadius: "27px"
    },
    img: {
        padding: "10px"
    }
};
/* harmony default export */ const componentsSections_tabsStyle = (tabsStyle);

;// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionTabs.js


// @material-ui/core components


// @material-ui/icons






// core components




const SectionTabs_useStyles = (0,styles_.makeStyles)(componentsSections_tabsStyle);
const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: "20px",
    p: 4
};
const pix = ()=>{
    window.location = "https://link.pagar.me/lSynZAA2Fs";
};
const CreditCard = ()=>{
    window.location = "https://link.pagar.me/lB19tTR2Kj";
};
function SectionTabs() {
    const classes = SectionTabs_useStyles();
    const [open, setOpen] = external_react_default().useState(false);
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>setOpen(false);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                    style: {
                        color: "white"
                    },
                    className: classes.title,
                    children: "OS 6 MOTIVOS PARA VOC\xca N\xc3O FICAR DE FORA"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                className: classes.card,
                                variant: "elevation",
                                sx: {
                                    maxWidth: 345
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: classes.img,
                                                height: "130px",
                                                src: "/img/mickey-mouse.png"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                            style: {
                                                color: "white"
                                            },
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: "Entenda o impacto positivo ao desenvolver uma cultura empresarial baseada em grandes empresas"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                className: classes.card,
                                variant: "elevation",
                                sx: {
                                    maxWidth: 345
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: classes.img,
                                                height: "130px",
                                                src: "/img/network (1) (1).png"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                            style: {
                                                color: "white"
                                            },
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: "Aprenda a fazer Networking de forma f\xe1cil e com retorno garantido"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                className: classes.card,
                                variant: "elevation",
                                sx: {
                                    maxWidth: 345
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: classes.img,
                                                height: "130px",
                                                src: "/img/teamwork (1) (1).png"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                            style: {
                                                color: "white"
                                            },
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: "Entenda o impacto positivo ao desenvolver uma cultura empresarial baseada em grandes empresas"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                className: classes.card,
                                variant: "elevation",
                                sx: {
                                    maxWidth: 345
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: classes.img,
                                                height: "130px",
                                                src: "/img/cyber-security (1) (1).png"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                            style: {
                                                color: "white"
                                            },
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: "Saiba quais ferramentas e processos mais indicados para seu negocio"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                className: classes.card,
                                variant: "elevation",
                                sx: {
                                    maxWidth: 345
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: classes.img,
                                                height: "130px",
                                                src: "/img/sms.png"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                            style: {
                                                color: "white"
                                            },
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: "Acompanhe o crescimento da sua empresa com inova\xe7\xe3o e seguran\xe7a"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                className: classes.card,
                                variant: "elevation",
                                sx: {
                                    maxWidth: 345
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: classes.img,
                                                height: "130px",
                                                src: "/img/ferramentas (1) (1).png"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                            style: {
                                                color: "white"
                                            },
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: "Domine t\xe9cnicas infal\xedveis de Marketing Digital com inova\xe7\xe3o e ideias de mercado"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "20px"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                            onClick: handleOpen,
                            startIcon: /*#__PURE__*/ jsx_runtime_.jsx((LocalFireDepartment_default()), {
                                className: classes.icon,
                                fontSize: "large"
                            }),
                            className: classes.Button,
                            children: "FAZER MINHA INSCRI\xc7\xc3O"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Modal, {
                            open: open,
                            onClose: handleClose,
                            "aria-labelledby": "modal-modal-title",
                            "aria-describedby": "modal-modal-description",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                                sx: styleModal,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                        style: {
                                            textAlign: "center",
                                            paddingBottom: "20px"
                                        },
                                        children: "ESCOLHA O M\xc9TODO DE PAGAMENTO"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 12,
                                                md: 6,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                                    onClick: pix,
                                                    style: {
                                                        height: "175px",
                                                        cursor: "pointer"
                                                    },
                                                    variant: "elevation",
                                                    sx: {
                                                        maxWidth: 345
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Pix_default()), {
                                                                    fontSize: "large"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                                                style: {
                                                                    textAlign: "center"
                                                                },
                                                                children: "Efetuar o pagamento com PIX"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 12,
                                                md: 6,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                                    onClick: CreditCard,
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    variant: "elevation",
                                                    sx: {
                                                        maxWidth: 345
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((CreditCard_default()), {
                                                                    fontSize: "large"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                                                style: {
                                                                    textAlign: "center"
                                                                },
                                                                children: "Efetuar o pagamento com Cart\xe3o de Cr\xe9dito"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: external "@material-ui/icons/Dashboard"
const Dashboard_namespaceObject = require("@material-ui/icons/Dashboard");
;// CONCATENATED MODULE: external "@material-ui/icons/Schedule"
const Schedule_namespaceObject = require("@material-ui/icons/Schedule");
;// CONCATENATED MODULE: external "@material-ui/icons/List"
const icons_List_namespaceObject = require("@material-ui/icons/List");
// EXTERNAL MODULE: ./components/NavPills/NavPills.js + 1 modules
var NavPills = __webpack_require__(4341);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/pages/componentsSections/pillsStyle.js

const pillsStyle = {
    section: {
        background: "#211a19",
        display: "block",
        width: "100%",
        position: "relative",
        paddingTop: "50px"
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        paddingTop: "50px",
        width: "70%",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    title: {
        ...nextjs_material_kit/* title */.TN,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    }
};
/* harmony default export */ const componentsSections_pillsStyle = (pillsStyle);

;// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionPills.js


// @material-ui/core components

// @material-ui/icons



// core components




const SectionPills_useStyles = (0,styles_.makeStyles)(componentsSections_pillsStyle);
function SectionPills() {
    const classes = SectionPills_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.container,
            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: classes.img,
                src: "/img/BIG-NUMBERS.png"
            })
        })
    });
};

;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/LocationOn"
const LocationOn_namespaceObject = require("@material-ui/icons/LocationOn");
;// CONCATENATED MODULE: external "@material-ui/icons/Warning"
const Warning_namespaceObject = require("@material-ui/icons/Warning");
;// CONCATENATED MODULE: external "@material-ui/core/SnackbarContent"
const SnackbarContent_namespaceObject = require("@material-ui/core/SnackbarContent");
var SnackbarContent_default = /*#__PURE__*/__webpack_require__.n(SnackbarContent_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__(3974);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
;// CONCATENATED MODULE: external "@material-ui/icons/Close"
const Close_namespaceObject = require("@material-ui/icons/Close");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_namespaceObject);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/components/snackbarContentStyle.js

const snackbarContentStyle = {
    root: {
        ...nextjs_material_kit/* defaultFont */.Df,
        position: "relative",
        padding: "20px 15px",
        lineHeight: "20px",
        marginBottom: "20px",
        fontSize: "14px",
        backgroundColor: "white",
        color: "#555555",
        borderRadius: "0px",
        maxWidth: "100%",
        minWidth: "auto",
        boxShadow: "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
    },
    info: {
        backgroundColor: "#00d3ee",
        color: "#ffffff",
        ...nextjs_material_kit/* infoBoxShadow */.ur
    },
    success: {
        backgroundColor: "#5cb860",
        color: "#ffffff",
        ...nextjs_material_kit/* successBoxShadow */.TI
    },
    warning: {
        backgroundColor: "#ffa21a",
        color: "#ffffff",
        ...nextjs_material_kit/* warningBoxShadow */.D6
    },
    danger: {
        backgroundColor: "#f55a4e",
        color: "#ffffff",
        ...nextjs_material_kit/* dangerBoxShadow */.iW
    },
    primary: {
        backgroundColor: "#af2cc5",
        color: "#ffffff",
        ...nextjs_material_kit/* primaryBoxShadow */.kY
    },
    message: {
        padding: "0",
        display: "block",
        maxWidth: "89%",
        "&,& *": {
            letterSpacing: "normal"
        }
    },
    close: {
        width: "14px",
        height: "14px"
    },
    iconButton: {
        width: "24px",
        height: "24px",
        float: "right",
        fontSize: "1.5rem",
        fontWeight: "500",
        lineHeight: "1",
        position: "absolute",
        right: "-4px",
        top: "0",
        padding: "0"
    },
    icon: {
        display: "block",
        float: "left",
        marginRight: "1.071rem"
    },
    container: {
        ...nextjs_material_kit/* container */.nC,
        position: "relative"
    }
};
/* harmony default export */ const components_snackbarContentStyle = (snackbarContentStyle);

;// CONCATENATED MODULE: ./components/Snackbar/SnackbarContent.js


// nodejs library to set properties for components

// @material-ui/core components




// @material-ui/icons

// core components

const SnackbarContent_useStyles = (0,styles_.makeStyles)(components_snackbarContentStyle);
function SnackbarContent(props) {
    const { message , color , close , icon  } = props;
    const classes = SnackbarContent_useStyles();
    var action = [];
    const closeAlert = ()=>{
        setAlert(null);
    };
    if (close !== undefined) {
        action = [
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                className: classes.iconButton,
                "aria-label": "Close",
                color: "inherit",
                onClick: closeAlert,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                    className: classes.close
                })
            }, "close")
        ];
    }
    let snackIcon = null;
    switch(typeof icon){
        case "object":
            snackIcon = /*#__PURE__*/ jsx_runtime_.jsx(props.icon, {
                className: classes.icon
            });
            break;
        case "string":
            snackIcon = /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                className: classes.icon,
                children: props.icon
            });
            break;
        default:
            snackIcon = null;
            break;
    }
    const [alert, setAlert] = external_react_default().useState(/*#__PURE__*/ jsx_runtime_.jsx((SnackbarContent_default()), {
        message: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                snackIcon,
                message,
                close !== undefined ? action : null
            ]
        }),
        classes: {
            root: classes.root + " " + classes[color],
            message: classes.message + " " + classes.container
        }
    }));
    return alert;
};
SnackbarContent.propTypes = {
    message: (external_prop_types_default()).node.isRequired,
    color: external_prop_types_default().oneOf([
        "info",
        "success",
        "warning",
        "danger",
        "primary"
    ]),
    close: (external_prop_types_default()).bool,
    icon: external_prop_types_default().oneOfType([
        (external_prop_types_default()).object,
        (external_prop_types_default()).string
    ])
};

;// CONCATENATED MODULE: ./components/Clearfix/Clearfix.js


// mterial-ui components

const styles = {
    clearfix: {
        "&:after,&:before": {
            display: "table",
            content: '" "'
        },
        "&:after": {
            clear: "both"
        }
    }
};
const Clearfix_useStyles = (0,styles_.makeStyles)(styles);
function Clearfix() {
    const classes = Clearfix_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.clearfix
    });
};
Clearfix.propTypes = {};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/pages/componentsSections/notificationsStyles.js

const notificationsStyles = {
    section: {
        backgroundImage: "url('/img/BACK-2.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        display: "block",
        height: "100%",
        minHeight: "300px",
        width: "100%",
        position: "relative",
        paddingTop: "20px"
    },
    title: {
        ...nextjs_material_kit/* title */.TN,
        marginTop: "30px",
        minHeight: "36px",
        fontSize: "22px",
        paddingTop: "30px",
        textDecoration: "none"
    },
    container: nextjs_material_kit/* container */.nC
};
/* harmony default export */ const componentsSections_notificationsStyles = (notificationsStyles);

;// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionNotifications.js


// @material-ui/core components






// @material-ui/icons


// core components




const SectionNotifications_useStyles = (0,styles_.makeStyles)(componentsSections_notificationsStyles);
function SectionNotifications() {
    const classes = SectionNotifications_useStyles();
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                    style: {
                        color: "white",
                        textAlign: "center"
                    },
                    className: classes.title,
                    children: "DESCUBRA OS AGENTES QUE FORAM IDENTIFICADOS"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridContainer/* default */.Z, {
                    style: {
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                        xs: 12,
                        sm: 12,
                        md: 10,
                        className: classes.marginAuto,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                            ...settings,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/img/JOEL-JOTA.png",
                                        alt: "First slide",
                                        className: "slick-image"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/img/TCAR.png",
                                        alt: "Second slide",
                                        className: "slick-image"
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/components/typographyStyle.js

const typographyStyle = {
    defaultFontStyle: {
        ...nextjs_material_kit/* defaultFont */.Df,
        fontSize: "14px"
    },
    defaultHeaderMargins: {
        marginTop: "20px",
        marginBottom: "10px"
    },
    quote: {
        padding: "10px 20px",
        margin: "0 0 20px",
        fontSize: "17.5px",
        borderLeft: "5px solid #eee"
    },
    quoteText: {
        margin: "0 0 10px",
        fontStyle: "italic"
    },
    quoteAuthor: {
        display: "block",
        fontSize: "80%",
        lineHeight: "1.42857143",
        color: "#777"
    },
    mutedText: {
        color: "#777"
    },
    primaryText: {
        color: nextjs_material_kit/* primaryColor */.lr
    },
    infoText: {
        color: nextjs_material_kit/* infoColor */.bE
    },
    successText: {
        color: nextjs_material_kit/* successColor */.nq
    },
    warningText: {
        color: nextjs_material_kit/* warningColor */.MA
    },
    dangerText: {
        color: nextjs_material_kit/* dangerColor */.E7
    },
    smallText: {
        fontSize: "65%",
        fontWeight: "400",
        lineHeight: "1",
        color: "#777"
    }
};
/* harmony default export */ const components_typographyStyle = (typographyStyle);

;// CONCATENATED MODULE: ./components/Typography/Small.js


// nodejs library to set properties for components

// @material-ui/core components

// core components

const Small_useStyles = (0,styles_.makeStyles)(components_typographyStyle);
function Small_Small(props) {
    const classes = Small_useStyles();
    const { children  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.defaultFontStyle + " " + classes.smallText,
        children: children
    });
};
Small_Small.propTypes = {
    children: (external_prop_types_default()).node
};

;// CONCATENATED MODULE: ./components/Typography/Danger.js


// nodejs library to set properties for components

// @material-ui/core components

// core components

const Danger_useStyles = (0,styles_.makeStyles)(components_typographyStyle);
function Danger_Danger(props) {
    const classes = Danger_useStyles();
    const { children  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.defaultFontStyle + " " + classes.dangerText,
        children: children
    });
};
Danger_Danger.propTypes = {
    children: (external_prop_types_default()).node
};

;// CONCATENATED MODULE: ./components/Typography/Warning.js


// nodejs library to set properties for components

// @material-ui/core components

// core components

const Warning_useStyles = (0,styles_.makeStyles)(components_typographyStyle);
function Warning_Warning(props) {
    const classes = Warning_useStyles();
    const { children  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.defaultFontStyle + " " + classes.warningText,
        children: children
    });
};
Warning_Warning.propTypes = {
    children: (external_prop_types_default()).node
};

;// CONCATENATED MODULE: ./components/Typography/Success.js


// nodejs library to set properties for components

// @material-ui/core components

// core components

const Success_useStyles = (0,styles_.makeStyles)(components_typographyStyle);
function Success_Success(props) {
    const classes = Success_useStyles();
    const { children  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.defaultFontStyle + " " + classes.successText,
        children: children
    });
};
Success_Success.propTypes = {
    children: (external_prop_types_default()).node
};

;// CONCATENATED MODULE: ./components/Typography/Info.js


// nodejs library to set properties for components

// @material-ui/core components

// core components

const Info_useStyles = (0,styles_.makeStyles)(components_typographyStyle);
function Info_Info(props) {
    const classes = Info_useStyles();
    const { children  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.defaultFontStyle + " " + classes.infoText,
        children: children
    });
};
Info_Info.propTypes = {
    children: (external_prop_types_default()).node
};

;// CONCATENATED MODULE: ./components/Typography/Primary.js


// nodejs library to set properties for components

// @material-ui/core components

// core components

const Primary_useStyles = (0,styles_.makeStyles)(components_typographyStyle);
function Primary_Primary(props) {
    const classes = Primary_useStyles();
    const { children  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.defaultFontStyle + " " + classes.primaryText,
        children: children
    });
};
Primary_Primary.propTypes = {
    children: (external_prop_types_default()).node
};

;// CONCATENATED MODULE: ./components/Typography/Muted.js


// nodejs library to set properties for components

// @material-ui/core components

// core components

const Muted_useStyles = (0,styles_.makeStyles)(components_typographyStyle);
function Muted_Muted(props) {
    const classes = Muted_useStyles();
    const { children  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.defaultFontStyle + " " + classes.mutedText,
        children: children
    });
};
Muted_Muted.propTypes = {
    children: (external_prop_types_default()).node
};

;// CONCATENATED MODULE: ./components/Typography/Quote.js


// nodejs library to set properties for components

// @material-ui/core components

// core components

const Quote_useStyles = (0,styles_.makeStyles)(components_typographyStyle);
function Quote_Quote(props) {
    const { text , author  } = props;
    const classes = Quote_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("blockquote", {
        className: classes.defaultFontStyle + " " + classes.quote,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: classes.quoteText,
                children: text
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                className: classes.quoteAuthor,
                children: author
            })
        ]
    });
};
Quote_Quote.propTypes = {
    text: (external_prop_types_default()).node,
    author: (external_prop_types_default()).node
};

// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit/imagesStyles.js
var imagesStyles = __webpack_require__(266);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js


const typographyStyle_typographyStyle = {
    section: {
        padding: "70px 0"
    },
    container: nextjs_material_kit/* container */.nC,
    space50: {
        height: "50px",
        display: "block"
    },
    title: {
        ...nextjs_material_kit/* title */.TN,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    typo: {
        paddingLeft: "25%",
        marginBottom: "40px",
        position: "relative",
        width: "100%"
    },
    note: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        bottom: "10px",
        color: "#c0c1c2",
        display: "block",
        fontWeight: "400",
        fontSize: "13px",
        lineHeight: "13px",
        left: "0",
        marginLeft: "20px",
        position: "absolute",
        width: "260px"
    },
    marginLeft: {
        marginLeft: "auto !important"
    },
    ...imagesStyles/* default */.Z
};
/* harmony default export */ const componentsSections_typographyStyle = (typographyStyle_typographyStyle);

;// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionTypography.js


// @material-ui/core components

// @material-ui/icons
// core components











const SectionTypography_useStyles = (0,styles_.makeStyles)(componentsSections_typographyStyle);
function SectionTypography() {
    const classes = SectionTypography_useStyles();
    return /*#__PURE__*/ _jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ _jsxs("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    id: "typography",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: classes.title,
                            children: /*#__PURE__*/ _jsx("h2", {
                                children: "Typography"
                            })
                        }),
                        /*#__PURE__*/ _jsxs(GridContainer, {
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: classes.note,
                                            children: "Header 1"
                                        }),
                                        /*#__PURE__*/ _jsx("h1", {
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: classes.note,
                                            children: "Header 2"
                                        }),
                                        /*#__PURE__*/ _jsx("h2", {
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: classes.note,
                                            children: "Header 3"
                                        }),
                                        /*#__PURE__*/ _jsx("h3", {
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: classes.note,
                                            children: "Header 4"
                                        }),
                                        /*#__PURE__*/ _jsx("h4", {
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: classes.note,
                                            children: "Header 5"
                                        }),
                                        /*#__PURE__*/ _jsx("h5", {
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: classes.note,
                                            children: "Header 6"
                                        }),
                                        /*#__PURE__*/ _jsx("h6", {
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: classes.note,
                                            children: "Header 1"
                                        }),
                                        /*#__PURE__*/ _jsx("h1", {
                                            className: classes.title,
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: classes.note,
                                            children: "Header 2"
                                        }),
                                        /*#__PURE__*/ _jsx("h2", {
                                            className: classes.title,
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: classes.note,
                                            children: "Header 3"
                                        }),
                                        /*#__PURE__*/ _jsx("h3", {
                                            className: classes.title,
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: classes.note,
                                            children: "Header 4"
                                        }),
                                        /*#__PURE__*/ _jsx("h4", {
                                            className: classes.title,
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: classes.note,
                                            children: "Paragraph"
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: classes.note,
                                            children: "Quote"
                                        }),
                                        /*#__PURE__*/ _jsx(Quote, {
                                            text: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.",
                                            author: " Kanye West, Musician"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: classes.note,
                                            children: "Muted Text"
                                        }),
                                        /*#__PURE__*/ _jsx(Muted, {
                                            children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: classes.note,
                                            children: "Primary Text"
                                        }),
                                        /*#__PURE__*/ _jsx(Primary, {
                                            children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: classes.note,
                                            children: "Info Text"
                                        }),
                                        /*#__PURE__*/ _jsx(Info, {
                                            children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: classes.note,
                                            children: "Success Text"
                                        }),
                                        /*#__PURE__*/ _jsx(Success, {
                                            children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: classes.note,
                                            children: "Warning Text"
                                        }),
                                        /*#__PURE__*/ _jsx(Warning, {
                                            children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: classes.note,
                                            children: "Danger Text"
                                        }),
                                        /*#__PURE__*/ _jsx(Danger, {
                                            children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: classes.note,
                                            children: "Small Tag"
                                        }),
                                        /*#__PURE__*/ _jsxs("h2", {
                                            children: [
                                                "Header with small subtitle",
                                                /*#__PURE__*/ _jsx("br", {}),
                                                /*#__PURE__*/ _jsxs(Small, {
                                                    children: [
                                                        "Use ",
                                                        '"Small"',
                                                        " tag for the headers"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: classes.space50
                }),
                /*#__PURE__*/ _jsxs("div", {
                    id: "images",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: classes.title,
                            children: /*#__PURE__*/ _jsx("h2", {
                                children: "Images"
                            })
                        }),
                        /*#__PURE__*/ _jsx("br", {}),
                        /*#__PURE__*/ _jsxs(GridContainer, {
                            children: [
                                /*#__PURE__*/ _jsxs(GridItem, {
                                    xs: 12,
                                    sm: 2,
                                    children: [
                                        /*#__PURE__*/ _jsx("h4", {
                                            children: "Rounded Image"
                                        }),
                                        /*#__PURE__*/ _jsx("img", {
                                            src: "/img/faces/avatar.jpg",
                                            alt: "...",
                                            className: classes.imgRounded + " " + classes.imgFluid
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(GridItem, {
                                    xs: 12,
                                    sm: 2,
                                    className: classes.marginLeft,
                                    children: [
                                        /*#__PURE__*/ _jsx("h4", {
                                            children: "Circle Image"
                                        }),
                                        /*#__PURE__*/ _jsx("img", {
                                            src: "/img/faces/avatar.jpg",
                                            alt: "...",
                                            className: classes.imgRoundedCircle + " " + classes.imgFluid
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(GridItem, {
                                    xs: 12,
                                    sm: 2,
                                    className: classes.marginLeft,
                                    children: [
                                        /*#__PURE__*/ _jsx("h4", {
                                            children: "Rounded Raised"
                                        }),
                                        /*#__PURE__*/ _jsx("img", {
                                            src: "/img/faces/avatar.jpg",
                                            alt: "...",
                                            className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(GridItem, {
                                    xs: 12,
                                    sm: 2,
                                    className: classes.marginLeft,
                                    children: [
                                        /*#__PURE__*/ _jsx("h4", {
                                            children: "Circle Raised"
                                        }),
                                        /*#__PURE__*/ _jsx("img", {
                                            src: "/img/faces/avatar.jpg",
                                            alt: "...",
                                            className: classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx(GridContainer, {})
                    ]
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: classes.space50
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: external "react-datetime"
const external_react_datetime_namespaceObject = require("react-datetime");
;// CONCATENATED MODULE: external "@material-ui/core/Slide"
const Slide_namespaceObject = require("@material-ui/core/Slide");
;// CONCATENATED MODULE: external "@mui/icons-material/CheckCircle"
const CheckCircle_namespaceObject = require("@mui/icons-material/CheckCircle");
var CheckCircle_default = /*#__PURE__*/__webpack_require__.n(CheckCircle_namespaceObject);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/modalStyle.js
const modalStyle = {
    modal: {
        borderRadius: "6px"
    },
    modalHeader: {
        borderBottom: "none",
        paddingTop: "24px",
        paddingRight: "24px",
        paddingBottom: "0",
        paddingLeft: "24px",
        minHeight: "16.43px"
    },
    modalTitle: {
        margin: "0",
        lineHeight: "1.42857143"
    },
    modalCloseButton: {
        color: "#999999",
        marginTop: "-12px",
        WebkitAppearance: "none",
        padding: "0",
        cursor: "pointer",
        background: "0 0",
        border: "0",
        fontSize: "inherit",
        opacity: ".9",
        textShadow: "none",
        fontWeight: "700",
        lineHeight: "1",
        float: "right"
    },
    modalClose: {
        width: "16px",
        height: "16px"
    },
    modalBody: {
        paddingTop: "24px",
        paddingRight: "24px",
        paddingBottom: "16px",
        paddingLeft: "24px",
        position: "relative"
    },
    modalFooter: {
        padding: "15px",
        textAlign: "right",
        paddingTop: "0",
        margin: "0"
    },
    modalFooterCenter: {
        marginLeft: "auto",
        marginRight: "auto"
    }
};
/* harmony default export */ const nextjs_material_kit_modalStyle = (modalStyle);

// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit/tooltipsStyle.js
var tooltipsStyle = __webpack_require__(7745);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/popoverStyles.js
const popoverStyles = {
    popover: {
        padding: "0",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        lineHeight: "1.5em",
        background: "#fff",
        border: "none",
        borderRadius: "3px",
        display: "block",
        maxWidth: "276px",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontStyle: "normal",
        fontWeight: "400",
        textAlign: "start",
        textDecoration: "none",
        textShadow: "none",
        textTransform: "none",
        letterSpacing: "normal",
        wordBreak: "normal",
        wordSpacing: "normal",
        whiteSpace: "normal",
        lineBreak: "auto",
        fontSize: "0.875rem",
        wordWrap: "break-word"
    },
    popoverBottom: {
        marginTop: "5px"
    },
    popoverHeader: {
        backgroundColor: "#fff",
        border: "none",
        padding: "15px 15px 5px",
        fontSize: "1.125rem",
        margin: "0",
        color: "#555",
        borderTopLeftRadius: "calc(0.3rem - 1px)",
        borderTopRightRadius: "calc(0.3rem - 1px)"
    },
    popoverBody: {
        padding: "10px 15px 15px",
        lineHeight: "1.4",
        color: "#555"
    }
};
/* harmony default export */ const nextjs_material_kit_popoverStyles = (popoverStyles);

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/pages/componentsSections/javascriptStyles.js




const javascriptStyles = {
    section: {
        paddingTop: "70px",
        paddingTop: "100px",
        backgroundImage: "url('/img/JHONNY 7.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        height: `@media and screen(max-width: 800) {
      height: '400px'
    }`
    },
    container: nextjs_material_kit/* container */.nC,
    title: {
        ...nextjs_material_kit/* title */.TN,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    icons: {
        width: "82px",
        height: "82px",
        paddingTop: "6px",
        color: "red"
    },
    icon: {
        height: "400px",
        width: "70px",
        marginLeft: "20px",
        color: "white"
    },
    Button: {
        marginLeft: `@media and screen (max-width: 800px){
      marginLeft: '500px'
    }`,
        height: "100px",
        borderRadius: "17px",
        fontSize: "22px",
        width: "280px",
        background: "#800000",
        color: "white"
    },
    ...nextjs_material_kit_modalStyle,
    label: {
        color: "rgba(0, 0, 0, 0.26)",
        cursor: "pointer",
        display: "inline-flex",
        fontSize: "14px",
        transition: "0.3s ease all",
        lineHeight: "1.428571429",
        fontWeight: "400",
        paddingLeft: "0",
        letterSpacing: "normal"
    },
    card: {
        background: "#1F1D1C",
        borderRadius: "27px"
    },
    ...tooltipsStyle/* default */.Z,
    ...nextjs_material_kit_popoverStyles
};
/* harmony default export */ const componentsSections_javascriptStyles = (javascriptStyles);

;// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionJavascript.js


// react plugin for creating date-time-picker

// @material-ui/core components






// @material-ui/icons
// core components




const SectionJavascript_useStyles = (0,styles_.makeStyles)(componentsSections_javascriptStyles);
const SectionJavascript_styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: "20px",
    p: 4
};
const SectionJavascript_pix = ()=>{
    window.location = "https://link.pagar.me/lSynZAA2Fs";
};
const SectionJavascript_CreditCard = ()=>{
    window.location = "https://link.pagar.me/lB19tTR2Kj";
};
function SectionJavascript() {
    const classes = SectionJavascript_useStyles();
    const [open, setOpen] = external_react_default().useState(false);
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>setOpen(false);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                    style: {
                        color: "white",
                        paddingBottom: "30px"
                    },
                    className: classes.title,
                    children: "O MISS\xc3O CONTADOR FOI PENSADO PARA QUEM:"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                    spacing: 3,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                className: classes.card,
                                variant: "elevation",
                                sx: {
                                    maxWidth: 345
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((CheckCircle_default()), {
                                                className: classes.icons,
                                                fontSize: "large"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                            style: {
                                                color: "white",
                                                fontSize: "20px",
                                                textAlign: "center",
                                                fontWeight: "bold"
                                            },
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: "Aplica o que aprende"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                className: classes.card,
                                variant: "elevation",
                                sx: {
                                    maxWidth: 345
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((CheckCircle_default()), {
                                                className: classes.icons,
                                                fontSize: "large"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                            style: {
                                                color: "white",
                                                fontSize: "20px",
                                                textAlign: "center",
                                                fontWeight: "bold"
                                            },
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: "Se esfor\xe7a ao M\xe1ximo"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                className: classes.card,
                                variant: "elevation",
                                sx: {
                                    maxWidth: 345
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((CheckCircle_default()), {
                                                className: classes.icons,
                                                fontSize: "large"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                            style: {
                                                color: "white",
                                                fontSize: "20px",
                                                textAlign: "center",
                                                fontWeight: "bold"
                                            },
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: "Deseja impulsionar sua carreira"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                className: classes.card,
                                variant: "elevation",
                                sx: {
                                    maxWidth: 345
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((CheckCircle_default()), {
                                                className: classes.icons,
                                                fontSize: "large"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                            style: {
                                                color: "white",
                                                fontSize: "20px",
                                                textAlign: "center",
                                                fontWeight: "bold"
                                            },
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: "Deseja melhorar a gest\xe3o de times de alta performance"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                className: classes.card,
                                variant: "elevation",
                                sx: {
                                    maxWidth: 345
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((CheckCircle_default()), {
                                                className: classes.icons,
                                                fontSize: "large"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                            style: {
                                                color: "white",
                                                fontSize: "20px",
                                                textAlign: "center",
                                                fontWeight: "bold"
                                            },
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: "Busca aumentar o faturamento e o lucro da sua empresa"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                className: classes.card,
                                variant: "elevation",
                                sx: {
                                    maxWidth: 345
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((CheckCircle_default()), {
                                                className: classes.icons,
                                                fontSize: "large"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                            style: {
                                                color: "white",
                                                fontSize: "20px",
                                                textAlign: "center",
                                                fontWeight: "bold"
                                            },
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: "Deseja criar relacionamentos duradouros"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                    style: {
                        textAlign: "center",
                        paddingTop: "20px",
                        fontWeight: "bold",
                        color: "white",
                        paddingTop: "50px"
                    },
                    children: "“O caminho do sucesso n\xe3o tem f\xf3rmulas, mas ele deixa pistas. Modele as pessoas de sucesso para chegar mais r\xe1pido onde voc\xea gostaria de chegar”"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "20px"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                            onClick: handleOpen,
                            startIcon: /*#__PURE__*/ jsx_runtime_.jsx((LocalFireDepartment_default()), {
                                className: classes.icon,
                                fontSize: "large"
                            }),
                            className: classes.Button,
                            children: "FAZER MINHA INSCRI\xc7\xc3O"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Modal, {
                            open: open,
                            onClose: handleClose,
                            "aria-labelledby": "modal-modal-title",
                            "aria-describedby": "modal-modal-description",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                                sx: SectionJavascript_styleModal,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                        style: {
                                            textAlign: "center",
                                            paddingBottom: "20px"
                                        },
                                        children: "ESCOLHA O M\xc9TODO DE PAGAMENTO"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 12,
                                                md: 6,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                                    onClick: SectionJavascript_pix,
                                                    style: {
                                                        height: "175px",
                                                        cursor: "pointer"
                                                    },
                                                    variant: "elevation",
                                                    sx: {
                                                        maxWidth: 345
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Pix_default()), {
                                                                    fontSize: "large"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                                                style: {
                                                                    textAlign: "center"
                                                                },
                                                                children: "Efetuar o pagamento com PIX"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 12,
                                                md: 6,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                                    onClick: SectionJavascript_CreditCard,
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    variant: "elevation",
                                                    sx: {
                                                        maxWidth: 345
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((CreditCard_default()), {
                                                                    fontSize: "large"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                                                style: {
                                                                    textAlign: "center"
                                                                },
                                                                children: "Efetuar o pagamento com Cart\xe3o de Cr\xe9dito"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js

const carouselStyle = {
    section: {
        width: "100%",
        display: "block",
        position: "relative",
        backgroundImage: "url('/img/Background Miss\xe3o Contador_V1.svg')",
        backgroundSize: "100% 100%"
    },
    Card: {
        borderRadius: "32px"
    },
    img: {
        width: "100%",
        marginRight: `@media and screen(min-width: 800){
      marginRight: '90px'
    }`
    },
    imgJhonny: {
        width: `@media and screen(max-width: 800px){
      width: '200px',
    }`,
        marginLeft: `@media and screen(min-width: 800px){
      marginLeft: '60px'
    }`
    },
    video: {
        paddingTop: "20px",
        borderRadius: "20px",
        width: "70%"
    },
    container: {},
    marginAuto: {
        marginLeft: "auto !important",
        marginRight: "auto !important"
    }
};
/* harmony default export */ const componentsSections_carouselStyle = (carouselStyle);

;// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionCarousel.js


// react component for creating beautiful carousel

// @material-ui/core components

// @material-ui/icons

// core components





const SectionCarousel_useStyles = (0,styles_.makeStyles)(componentsSections_carouselStyle);
function SectionCarousel() {
    const classes = SectionCarousel_useStyles();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.container,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                        xs: 12,
                        sm: 12,
                        md: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                marginLeft: "20px"
                            },
                            className: classes.imgJhonny,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                height: "600px",
                                src: "/img/00J.png"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                        style: {
                            marginBottom: "30px"
                        },
                        xs: 12,
                        sm: 12,
                        md: 6,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    marginRight: "40px"
                                },
                                className: classes.brand,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: classes.img,
                                    width: "600px",
                                    src: "/img/profile-bg.png"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                style: {
                                    textAlign: "center",
                                    color: "white",
                                    paddingRight: "20px"
                                },
                                children: "VENHA TRANSFORMAR A GEST\xc3O DO SEU NEG\xd3CIO AO LADO DE UM DOS CONTADORES MAIS INFLUENTES DO PA\xcdS E GRANDES EMPREENDEDORES DE SUCESSO"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                style: {
                                    textAlign: "center",
                                    color: "white",
                                    paddingRight: "20px"
                                },
                                children: "APRENDA COMO AUMENTAR O SEU FATURAMENTO, INVESTIR EM MARKETING DIGITAL, FAZER A MELHOR GEST\xc3O DE PESSOAS E PROCESSOS E AINDA INOVAR COM A TECNOLOGIA"
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/pages/componentsSections/completedStyle.js

const completedStyle = {
    section: {
        paddingTop: "70px",
        backgroundSize: "cover",
        height: "700px"
    },
    container: {
        ...nextjs_material_kit/* container */.nC,
        textAlign: "center !important"
    }
};
/* harmony default export */ const componentsSections_completedStyle = (completedStyle);

;// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionCompletedExamples.js


// @material-ui/core components




// @material-ui/icons





// core components










const SectionCompletedExamples_useStyles = (0,styles_.makeStyles)(componentsSections_completedStyle);
function SectionJhonny() {
    const classes = SectionCompletedExamples_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            backgroundImage: "url('/img/JHONNY-FOTO-10.png')"
        },
        className: classes.section,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.container,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridItem/* default */.Z, {
                        xs: 12,
                        sm: 12,
                        md: 6,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: classes.title,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    style: {
                                        color: "white",
                                        textAlign: "center"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: "SEU MENTOR: QUEM \xc9 E POR QUAL MOTIVO APRENDER COM JHONNY MARTINS"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Typography, {
                                    style: {
                                        color: "white",
                                        marginLeft: "10px",
                                        paddingBottom: "40px"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: "Jhonny Martins \xe9 hoje um dos contadores mais influentes do pa\xeds que conquitstou clientes renomados e grandes personalidades. \xc9 respons\xe1vel por estruturar empresas de todos os segmentos e tamanhos, podendo ensinar o caminho certo para o seu neg\xf3cio com conceitos e ferramentas inovadoras com uma vis\xe3o ampla e estrat\xe9gia de mercado."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: " "
                                        }),
                                        "Possui clientes reconhecidos como XP, Loggi, Sorridents, Mundial Cal\xe7ados e grandes personalidades como: Thiago Nigro, Joel Jota, Fl\xe1vio Augusto, Caio Carneiro, Boca Rosa, Tiago TCAR, Bruno e Malu Perini, entre outros. Jhonny Martins é atualmente vice-presidente do SERAC, contador e advogado pela PUC-SP com especialização em Direito do Trabalho pela Faculdade de Direito Damásio de Jesus, com MBA em Gestão Empresarial pela FGV-SP e MBA em Gestão Tributária pela USP.",
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: " "
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                        xs: 8,
                        sm: 8,
                        md: 6
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionLogin.js


// @material-ui/core components






// @material-ui/icons


// core components




const SectionLogin_useStyles = (0,styles_.makeStyles)(componentsSections_notificationsStyles);
function SectionLogin_SectionNotifications() {
    const classes = SectionLogin_useStyles();
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return /*#__PURE__*/ _jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ _jsxs("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ _jsx(Typography, {
                    style: {
                        color: "white",
                        textAlign: "center"
                    },
                    className: classes.title,
                    children: "ALGUNS DE NOSSOS CLIENTES:"
                }),
                /*#__PURE__*/ _jsx(GridContainer, {
                    style: {
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: /*#__PURE__*/ _jsx(GridItem, {
                        xs: 12,
                        sm: 12,
                        md: 10,
                        className: classes.marginAuto,
                        children: /*#__PURE__*/ _jsxs(Carousel, {
                            ...settings,
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    children: /*#__PURE__*/ _jsx("img", {
                                        src: "/img/JOEL-JOTA.png",
                                        alt: "First slide",
                                        className: "slick-image"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    children: /*#__PURE__*/ _jsx("img", {
                                        src: "/img/TCAR.png",
                                        alt: "Second slide",
                                        className: "slick-image"
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: external "@mui/icons-material/Face"
const icons_material_Face_namespaceObject = require("@mui/icons-material/Face");
;// CONCATENATED MODULE: external "@mui/icons-material/FaceOutlined"
const FaceOutlined_namespaceObject = require("@mui/icons-material/FaceOutlined");
;// CONCATENATED MODULE: external "@mui/icons-material/Face3"
const Face3_namespaceObject = require("@mui/icons-material/Face3");
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/pages/componentsSections/exampleStyle.js


const exampleStyle = {
    section: {
        paddingTop: "70px",
        background: "black",
        backgroundSize: "100% 100%"
    },
    container: {
        ...nextjs_material_kit/* containerFluid */.ah,
        textAlign: "center !important"
    },
    icon: {
        height: "80px",
        width: "75px",
        color: "white"
    },
    card: {
        background: "linear-gradient(to top, #800000 0%, #211a19 100%)",
        borderRadius: "27px",
        height: "570px"
    },
    ...imagesStyles/* default */.Z,
    link: {
        textDecoration: "none"
    }
};
/* harmony default export */ const componentsSections_exampleStyle = (exampleStyle);

;// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionDepoimentos.js


// react components for routing our app without refresh

// @material-ui/core components

// @material-ui/icons




// core components




const SectionDepoimentos_useStyles = (0,styles_.makeStyles)(componentsSections_exampleStyle);
function SectionExamples() {
    const classes = SectionDepoimentos_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                style: {
                    color: "white",
                    textAlign: "center",
                    paddingBottom: "20px",
                    fontSize: "22px"
                },
                className: classes.title,
                children: "DEPOIMENTOS"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.container,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                    spacing: 3,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                className: classes.card,
                                variant: "elevation",
                                sx: {
                                    maxWidth: 345
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/img/kaikevin.png",
                                                style: {
                                                    paddingTop: "20px"
                                                },
                                                height: "130px",
                                                className: classes.img
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Typography, {
                                            style: {
                                                color: "white",
                                                fontSize: "17px"
                                            },
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: [
                                                "O MISS\xc3O CONTADOR me trouxe diversos insights e muito networking com pessoas de mesmo objetivo que o meu. Experi\xeancia \xfanica, onde aprendi a me comportar nas redes sociais, mercado cont\xe1bil atual, gest\xe3o de pessoas e processos, como fechar contratos com celebridades e diversos outros aprendizados. ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " O evento me deu a vis\xe3o que eu precisava para o meu neg\xf3cio e foi essencial para o crescimento da minha empresa onde eu tive diversas viradas de chave, desde ent\xe3o minha empresa cresceu 98,07%. ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    children: "Kaique Furlan - KaiKevin Contabilidade"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                className: classes.card,
                                variant: "elevation",
                                sx: {
                                    maxWidth: 345
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/img/a7-safe.png",
                                                style: {
                                                    paddingTop: "20px"
                                                },
                                                height: "130px",
                                                className: classes.img
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Typography, {
                                            style: {
                                                color: "white",
                                                fontSize: "17px"
                                            },
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: [
                                                "Uma honra ser Membro Fundador, estou presente em todos e levo sempre meus l\xedderes. Somos um escrit\xf3rio com pouco mais de 2 anos, onde: ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " • Sa\xedmos de 60 mil por m\xeas e hoje faturamos em torno de 200 mil por m\xeas; ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " • Sa\xedmos de 11 colaboradores, hoje temos em m\xe9dia de 30; ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " • Conseguimos implantar nosso Mkt e comercial; ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " • Aumento do Networking; ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " • Implantamos nosso Ecossistema de produtos e v\xe1rios outros ganhos. ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " \xc9 claro, no pr\xf3ximo MISS\xc3O, estaremos em peso novamente. ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    children: "Samuel Modesto - A7 Safe Contabilidade"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                className: classes.card,
                                variant: "elevation",
                                sx: {
                                    maxWidth: 345
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/img/META.png",
                                                style: {
                                                    paddingTop: "20px"
                                                },
                                                height: "130px",
                                                className: classes.img
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Typography, {
                                            style: {
                                                color: "white",
                                                fontSize: "17px"
                                            },
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: [
                                                "Participamos do 1\xb0 MISS\xc3O CONTADOR e desde ent\xe3o estamos em todas as edi\xe7\xf5es. Entendemos que \xe9 um grande capacitador de equipe, de conhecimento do que j\xe1 \xe9 validado dentro do mercado cont\xe1bil. ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " L\xe1 conseguimos visualizar aspectos de marketing. tecnologia, opera\xe7\xf5es de RH, m\xe1quina de vendas e comercial. ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " O MISS\xc3O \xe9 sem d\xfavida um grande aprendizado e uma valida\xe7\xe3o do que a gente entende por caminho dentro do mercado cont\xe1bil. ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    children: "Marcio Goulart - Meta assessoria"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                className: classes.card,
                                variant: "elevation",
                                sx: {
                                    maxWidth: 345
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/img/diniz-e-diniz.png",
                                                style: {
                                                    paddingTop: "20px"
                                                },
                                                height: "130px",
                                                className: classes.img
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Typography, {
                                            style: {
                                                color: "white",
                                                fontSize: "17px"
                                            },
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: [
                                                "Eu quero come\xe7ar dizendo do meu sentimento de gratid\xe3o pelo SERAC. ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " Estou na segunda imers\xe3o e aprendemos que a gratid\xe3o \xe9 a semente da abund\xe2ncia. A minha empresa mudou muito, estamos implantando os conhecimentos adquiridos e cada vinda \xe9 uma coisa nova, \xe9 uma experi\xeancia \xfanica que s\xf3 agrega os neg\xf3cios.",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " Obrigado SERAC e MISSAO CONTADOR por essa experi\xeancia maravilhosa. ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    children: "Eduardo Diniz - Diniz e Diniz contabilidade"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                className: classes.card,
                                variant: "elevation",
                                sx: {
                                    maxWidth: 345
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/img/NSA-.png",
                                                style: {
                                                    paddingTop: "20px"
                                                },
                                                height: "130px",
                                                className: classes.img
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Typography, {
                                            style: {
                                                color: "white",
                                                fontSize: "17px"
                                            },
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: [
                                                "Hoje eu vim aqui pra falar com voc\xeas sobre o MISS\xc3O CONTADOR, foi literalmente uma virada de chave na minha vida. ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " Eu sou do interior do Rio de Janeiro e quando voltei da imers\xe3o depois daquele bombardeio de conte\xfado eu percebi que precisava virar a chave. Ent\xe3o, se voc\xea est\xe1 a\xed pensando ou est\xe1 em d\xfavida, n\xe3o tenha! ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " L\xe1 \xe9 fundamental para o crescimento da sua empresa e todo mundo deveria participar. ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    children: "Nicole Spacek - NSA Contabilidade"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                className: classes.card,
                                variant: "elevation",
                                sx: {
                                    maxWidth: 345
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/img/Os-contadores.png",
                                                style: {
                                                    paddingTop: "20px"
                                                },
                                                height: "130px",
                                                className: classes.img
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Typography, {
                                            style: {
                                                color: "white",
                                                fontSize: "17px"
                                            },
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: [
                                                "Depois do MISS\xc3O CONTADOR tivemos consci\xeancia que era necess\xe1rio sair do operacional e abrir nossa sede, tamb\xe9m percebemos que era essencial ter uma vis\xe3o clara e uma cultura forte para se destacar no mercado da contabilidade. ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " As orienta\xe7\xf5es que recebemos sobre relacionamento e vendas, transformou a forma que realizamos nossa abordagem, propostas e estrat\xe9gias de marketing. ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " Foi transformador, realmente um divisor de \xe1guas em nossa empresa. ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    children: "Juliano Topan - Os contadores"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/pages/componentsSections/downloadStyle.js

const downloadStyle = {
    section: {
        paddingTop: "70px",
        backgroundImage: "url('/img/BACK-3.jpg')",
        backGroundSize: "100% 100%",
        backgroundRepeat: "no-repeat"
    },
    container: nextjs_material_kit/* container */.nC,
    textCenter: {
        textAlign: "center"
    },
    icon: {
        color: "#FFD700",
        paddingTop: "2px"
    },
    sharingArea: {
        marginTop: "80px"
    },
    card: {
        background: "linear-gradient(to top, #800000 0%, #211a19 100%)",
        borderRadius: "27px",
        height: "650px"
    },
    icons: {
        height: "400px",
        width: "70px",
        marginLeft: "20px",
        color: "white"
    },
    Button: {
        marginLeft: `@media and screen (max-width: 800px){
      marginLeft: '500px'
    }`,
        height: "100px",
        borderRadius: "17px",
        fontSize: "22px",
        width: "280px",
        background: "#800000",
        color: "white"
    },
    price: {
        fontSize: "55px",
        fontWeight: "bold",
        paddingTop: "50px",
        textAlign: "center",
        color: "#FFD700"
    },
    socials: {
        maxWidth: "24px",
        marginTop: "0",
        width: "100%",
        transform: "none",
        left: "0",
        top: "0",
        height: "100%",
        fontSize: "20px",
        marginRight: "4px"
    }
};
/* harmony default export */ const componentsSections_downloadStyle = (downloadStyle);

;// CONCATENATED MODULE: ./pages-sections/Components-Sections/SectionDownload.js
/*eslint-disable*/ 

// @material-ui/core components





// @material-ui/icons



// core components

const SectionDownload_useStyles = (0,styles_.makeStyles)(componentsSections_downloadStyle);
const SectionDownload_styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: "20px",
    p: 4
};
const SectionDownload_pix = ()=>{
    window.location = "https://link.pagar.me/lSynZAA2Fs";
};
const SectionDownload_CreditCard = ()=>{
    window.location = "https://link.pagar.me/lB19tTR2Kj";
};
function SectionDownload() {
    const [open, setOpen] = external_react_default().useState(false);
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>setOpen(false);
    const classes = SectionDownload_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                style: {
                    color: "white",
                    fontSize: "32px",
                    textAlign: "center",
                    paddingBottom: "20px"
                },
                children: "FA\xc7A SUA INSCRI\xc7\xc3O AGORA"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                        spacing: 5,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                xs: 12,
                                sm: 12,
                                md: 4,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Card, {
                                    style: {
                                        backgroundColor: "transparent",
                                        borderRadius: "27px",
                                        border: "3px solid #FFD700"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Typography, {
                                            style: {
                                                color: "white",
                                                fontSize: "20px",
                                                textAlign: "left",
                                                lineHeight: "50px"
                                            },
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx((CheckCircle_default()), {
                                                    fontSize: "small",
                                                    className: classes.icon
                                                }),
                                                "Evento Presencial ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx((CheckCircle_default()), {
                                                    fontSize: "small",
                                                    className: classes.icon
                                                }),
                                                "Welcome Coffe ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx((CheckCircle_default()), {
                                                    fontSize: "small",
                                                    className: classes.icon
                                                }),
                                                "Coffe Break ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx((CheckCircle_default()), {
                                                    fontSize: "small",
                                                    className: classes.icon
                                                }),
                                                "19 e 20 de Maio ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx((CheckCircle_default()), {
                                                    fontSize: "small",
                                                    className: classes.icon
                                                }),
                                                "S\xe3o Paulo SP ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx((CheckCircle_default()), {
                                                    fontSize: "small",
                                                    className: classes.icon
                                                }),
                                                "Happy Hour"
                                            ]
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                xs: 12,
                                sm: 12,
                                md: 5,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Card, {
                                    className: classes.card,
                                    variant: "elevation",
                                    sx: {
                                        maxWidth: 345
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.CardContent, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                                style: {
                                                    borderRadius: "20px"
                                                },
                                                component: "img",
                                                alt: "green iguana",
                                                height: "200",
                                                image: "/img/FOTO-FUNDO-MISSAO (1).jpg"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Typography, {
                                                style: {
                                                    color: "white",
                                                    fontSize: "20px",
                                                    textAlign: "left"
                                                },
                                                variant: "body2",
                                                color: "text.secondary",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                                        style: {
                                                            textAlign: "center",
                                                            fontSize: "23px"
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                            children: "LOTE 1"
                                                        })
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((CheckCircle_default()), {
                                                        fontSize: "small",
                                                        className: classes.icon
                                                    }),
                                                    " ",
                                                    "Pagamento 100% seguro ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((CheckCircle_default()), {
                                                        fontSize: "small",
                                                        className: classes.icon
                                                    }),
                                                    " ",
                                                    " ",
                                                    "Parcelamento em at\xe9 10x ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((CheckCircle_default()), {
                                                        fontSize: "small",
                                                        className: classes.icon
                                                    }),
                                                    " ",
                                                    " ",
                                                    "Desconto no pix ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                        children: "Voc\xea vai levar tudo isso por apenas R$ 1.197,00 ou em at\xe9 10x de"
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                                        className: classes.price,
                                                        children: " R$ 119,70 "
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            paddingTop: "100px"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                onClick: handleOpen,
                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx((LocalFireDepartment_default()), {
                                    className: classes.icons,
                                    fontSize: "large"
                                }),
                                className: classes.Button,
                                children: "FAZER MINHA INSCRI\xc7\xc3O"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Modal, {
                                open: open,
                                onClose: handleClose,
                                "aria-labelledby": "modal-modal-title",
                                "aria-describedby": "modal-modal-description",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                                    sx: SectionDownload_styleModal,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                            style: {
                                                textAlign: "center",
                                                paddingBottom: "20px"
                                            },
                                            children: "ESCOLHA O M\xc9TODO DE PAGAMENTO"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid_GridContainer/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 12,
                                                    md: 6,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                                        onClick: SectionDownload_pix,
                                                        style: {
                                                            height: "175px",
                                                            cursor: "pointer"
                                                        },
                                                        variant: "elevation",
                                                        sx: {
                                                            maxWidth: 345
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Pix_default()), {
                                                                        fontSize: "large"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                                                    style: {
                                                                        textAlign: "center"
                                                                    },
                                                                    children: "Efetuar o pagamento com PIX"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Grid_GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 12,
                                                    md: 6,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                                        onClick: SectionDownload_CreditCard,
                                                        style: {
                                                            cursor: "pointer"
                                                        },
                                                        variant: "elevation",
                                                        sx: {
                                                            maxWidth: 345
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.CardMedia, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((CreditCard_default()), {
                                                                        fontSize: "large"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.CardContent, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                                                    style: {
                                                                        textAlign: "center"
                                                                    },
                                                                    children: "Efetuar o pagamento com Cart\xe3o de Cr\xe9dito"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: external "@mui/system"
const system_namespaceObject = require("@mui/system");
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/pages/components.js


const componentsStyle = {
    container: nextjs_material_kit/* container */.nC,
    sections: {
        padding: "70px 0",
        backgroundImage: "url('/img/BACK1-.jpg')",
        width: "100%"
    },
    brand: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center"
    },
    icons: {
        height: "400px",
        width: "70px",
        marginLeft: "20px",
        color: "white"
    },
    Button: {
        marginLeft: `@media and screen (max-width: 800px){
      marginLeft: '500px'
    }`,
        height: "100px",
        borderRadius: "17px",
        fontSize: "22px",
        width: "280px",
        background: "#800000",
        color: "white"
    },
    title: {
        fontSize: "4.2rem",
        fontWeight: "600",
        display: "inline-block",
        position: "relative"
    },
    subtitle: {
        fontSize: "1.313rem",
        maxWidth: "510px",
        margin: "10px 0 0"
    },
    main: {
        position: "relative",
        zIndex: "3",
        background: "#242424"
    },
    img: {
        marginTop: "60px",
        marginRight: "8px",
        display: "flex",
        justifyContent: "center",
        textAlign: "center"
    },
    video: {
        width: "100%",
        height: "500px"
    },
    mainRaised: {
        margin: "-30px 30px 0px",
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        "@media (max-width: 830px)": {
            marginLeft: "10px",
            marginRight: "10px"
        }
    },
    link: {
        textDecoration: "none"
    },
    textCenter: {
        textAlign: "center"
    }
};
/* harmony default export */ const components = (componentsStyle);

;// CONCATENATED MODULE: ./pages/components.js


// nodejs library that concatenates classes

// react components for routing our app without refresh

// @material-ui/core components

// sections for this page














const components_useStyles = (0,styles_.makeStyles)(components);
function Components(props) {
    const classes = components_useStyles();
    const { ...rest } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            background: "#242424"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.sections,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                        className: classes.video,
                        src: "https://www.youtube.com/embed/3CHci1sai_I",
                        title: "YouTube video player",
                        frameBorder: "0",
                        allow: "accelerometer; autoplay ; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: external_classnames_default()(classes.main, classes.mainRaised),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionCarousel, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionJhonny, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionBasics, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionTabs, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionNotifications, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionJavascript, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionPills, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionExamples, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionDownload, {})
                ]
            })
        ]
    });
};


/***/ }),

/***/ 8130:
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 8736:
/***/ ((module) => {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ 2610:
/***/ ((module) => {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ 7730:
/***/ ((module) => {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ 2217:
/***/ ((module) => {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ 5555:
/***/ ((module) => {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ 5811:
/***/ ((module) => {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ 3266:
/***/ ((module) => {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ 6491:
/***/ ((module) => {

module.exports = require("@material-ui/core/Grow");

/***/ }),

/***/ 6403:
/***/ ((module) => {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ 7886:
/***/ ((module) => {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ 3974:
/***/ ((module) => {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ 3302:
/***/ ((module) => {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ 2944:
/***/ ((module) => {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ 8190:
/***/ ((module) => {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ 5031:
/***/ ((module) => {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ 6256:
/***/ ((module) => {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ 8250:
/***/ ((module) => {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ 73:
/***/ ((module) => {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ 640:
/***/ ((module) => {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ 2767:
/***/ ((module) => {

module.exports = require("@material-ui/core/Popper");

/***/ }),

/***/ 2301:
/***/ ((module) => {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ 9033:
/***/ ((module) => {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ 5722:
/***/ ((module) => {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ 8308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 3386:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles/makeStyles");

/***/ }),

/***/ 1677:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Chat");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Email");

/***/ }),

/***/ 9899:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ 4176:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ 1075:
/***/ ((module) => {

module.exports = require("@material-ui/icons/People");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,270,664,365,714,266,341,990], () => (__webpack_exec__(672)));
module.exports = __webpack_exports__;

})();