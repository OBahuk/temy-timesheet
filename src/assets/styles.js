import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
    palette: {
        primary: {
            main: "#3366FF",
            contrastText: "#fff"
        },
        secondary: {
            main: "#9E2300"
        },
        error: {
            main: "#b00020"
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 620,
            md: 960,
            lg: 1280,
            xl: 1920
        }
    },
    typography: {
        useNextVariants: true,
        fontSize: 16
    },
    overrides: {
        MuiContainer: {
            root: {
                "& .untracked": {
                    display: "flex",
                    flexWrap: "wrap",
                    maxWidth: "19em",
                    justifyContent: "space-between",
                    alignContent: "start",
                    minHeight: "10em"
                },
                "& .DayPicker": {
                    "&-wrapper": {
                        border: "1px solid rgba(151, 151, 151, 0.2)"
                    },
                    "&-Day": {
                        borderRadius: "0",
                        border: "10px solid white",
                        fontSize: ".75em",
                        "&--tracked": {
                            backgroundColor: "#CEF5D1"
                        },
                        "&--untracked": {
                            backgroundColor: "rgba(218, 85, 47, .2)",
                            color: "#DA552F"
                        }
                    },
                    "&-NavButton--prev": {
                        right: "auto",
                        left: "1em"
                    },
                    "&-Caption": {
                        textAlign: "center",
                        padding: "0 1.5em"
                    }
                }
            }
        },
        MuiChip: {
            root: {
                borderRadius: "4px",
                margin: ".675em 0;",
                fontSize: ".75em",
                width: "90px"
            },
            sizeSmall: {
                height: "30px"
            },
            labelSmall: {
                paddingLeft: "0",
                paddingRight: "0"
            }
        },
        MuiButton: {
            root: {
                width: "162px",
                height: "46px",
                padding: 0
            }
        }
    }
});
