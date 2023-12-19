"use strict";
exports.id = 171;
exports.ids = [171];
exports.modules = {

/***/ 6356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__(9899);
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit.js
var nextjs_material_kit = __webpack_require__(6547);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit/components/footerStyle.js

const footerStyle = {
    block: {
        color: "inherit",
        padding: "0.9375rem",
        fontWeight: "500",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        textDecoration: "none",
        position: "relative",
        display: "block"
    },
    left: {
        float: "left!important",
        display: "block"
    },
    right: {
        padding: "15px 0",
        margin: "0",
        float: "right!important"
    },
    footer: {
        padding: "0.9375rem 0",
        textAlign: "center",
        display: "flex",
        zIndex: "2",
        position: "relative"
    },
    a: {
        color: nextjs_material_kit/* primaryColor */.lr,
        textDecoration: "none",
        backgroundColor: "transparent"
    },
    footerWhiteFont: {
        "&,&:hover,&:focus": {
            color: "#FFFFFF"
        }
    },
    container: nextjs_material_kit/* container */.nC,
    list: {
        marginBottom: "0",
        padding: "0",
        marginTop: "0"
    },
    inlineBlock: {
        display: "inline-block",
        padding: "0px",
        width: "auto"
    },
    icon: {
        width: "18px",
        height: "18px",
        position: "relative",
        top: "3px"
    }
};
/* harmony default export */ const components_footerStyle = (footerStyle);

;// CONCATENATED MODULE: ./components/Footer/Footer.js
/*eslint-disable*/ 

// nodejs library to set properties for components

// nodejs library that concatenates classes

// material-ui core components


// @material-ui/icons


const useStyles = (0,styles_.makeStyles)(components_footerStyle);
function Footer(props) {
    const classes = useStyles();
    const { whiteFont  } = props;
    const footerClasses = external_classnames_default()({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    const aClasses = external_classnames_default()({
        [classes.a]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: footerClasses,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.left,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.List, {
                        className: classes.list,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.ListItem, {
                                className: classes.inlineBlock,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.creative-tim.com/?ref=njsmk-footer",
                                    className: classes.block,
                                    target: "_blank",
                                    children: "Creative Tim"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.ListItem, {
                                className: classes.inlineBlock,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.creative-tim.com/presentation?ref=njsmk-footer",
                                    className: classes.block,
                                    target: "_blank",
                                    children: "About us"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.ListItem, {
                                className: classes.inlineBlock,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "http://blog.creative-tim.com/?ref=njsmk-footer",
                                    className: classes.block,
                                    target: "_blank",
                                    children: "Blog"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.ListItem, {
                                className: classes.inlineBlock,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.creative-tim.com/license?ref=njsmk-footer",
                                    className: classes.block,
                                    target: "_blank",
                                    children: "Licenses"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.right,
                    children: [
                        "\xa9 ",
                        1900 + new Date().getYear(),
                        " , made with",
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {
                            className: classes.icon
                        }),
                        " by",
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://www.creative-tim.com?ref=njsmk-footer",
                            className: aClasses,
                            target: "_blank",
                            children: "Creative Tim"
                        }),
                        " ",
                        "for a better web."
                    ]
                })
            ]
        })
    });
};
Footer.propTypes = {
    whiteFont: (external_prop_types_default()).bool
};


/***/ }),

/***/ 5017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HeaderLinks)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5031);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6256);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9641);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7886);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2105);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5652);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3974);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3743);
/* harmony import */ var _components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4286);
/* harmony import */ var _styles_jss_nextjs_material_kit_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9441);
/*eslint-disable*/ 


// @material-ui/core components





// @material-ui/icons



// core components



const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(_styles_jss_nextjs_material_kit_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z);
function HeaderLinks(props) {
    const classes = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default()), {
        className: classes.list,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default()), {
                className: classes.listItem,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    noLiPadding: true,
                    navDropdown: true,
                    buttonText: "Components",
                    buttonProps: {
                        className: classes.navLink,
                        color: "transparent"
                    },
                    buttonIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__.Apps,
                    dropdownList: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/components",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: classes.dropdownLink,
                                children: "All components"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar",
                            target: "_blank",
                            className: classes.dropdownLink,
                            children: "Documentation"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default()), {
                className: classes.listItem,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    href: "https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmk-navbar",
                    color: "transparent",
                    target: "_blank",
                    className: classes.navLink,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default()), {
                            className: classes.icons,
                            children: "unarchive"
                        }),
                        " Upgrade to PRO"
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default()), {
                className: classes.listItem,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    href: "https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-navbar",
                    color: "transparent",
                    target: "_blank",
                    className: classes.navLink,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__.CloudDownload, {
                            className: classes.icons
                        }),
                        " Download"
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default()), {
                className: classes.listItem,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default()), {
                    id: "instagram-twitter",
                    title: "Follow us on twitter",
                    placement: "top",
                    classes: {
                        tooltip: classes.tooltip
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        href: "https://twitter.com/CreativeTim?ref=creativetim",
                        target: "_blank",
                        color: "transparent",
                        className: classes.navLink,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: classes.socialIcons + " fab fa-twitter"
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default()), {
                className: classes.listItem,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default()), {
                    id: "instagram-facebook",
                    title: "Follow us on facebook",
                    placement: "top",
                    classes: {
                        tooltip: classes.tooltip
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        color: "transparent",
                        href: "https://www.facebook.com/CreativeTim?ref=creativetim",
                        target: "_blank",
                        className: classes.navLink,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: classes.socialIcons + " fab fa-facebook"
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default()), {
                className: classes.listItem,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default()), {
                    id: "instagram-tooltip",
                    title: "Follow us on instagram",
                    placement: "top",
                    classes: {
                        tooltip: classes.tooltip
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        color: "transparent",
                        href: "https://www.instagram.com/CreativeTimOfficial?ref=creativetim",
                        target: "_blank",
                        className: classes.navLink,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: classes.socialIcons + " fab fa-instagram"
                        })
                    })
                })
            })
        ]
    });
};


/***/ })

};
;