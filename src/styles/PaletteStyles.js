import sizes from './sizes';

export default {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    colors: {
        height: "90%"
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        opacity: 1,
        backgroundColor: "black",
        "& a": {
            color: "white",
            width: "80px",
            height: "27px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            left: "50%",
            marginLeft: "-40px",
            marginTop: "-15px",
            textAlign: "center",
            outline: "none",
            background: "rgba(255, 255, 255, 0.3)",
            fontSize: "1rem",
            lineHeight: "20px",
            textTransform: "uppercase",
            border: "none",
            textDecoration: "none",
            cursor: "pointer",
            paddingTop: "5.5px"
        },
        [sizes.down("xl")]: {
            width: "25%",
            height: "33.333%"
        },
        [sizes.down("lg")]: {
            width: "50%",
            height: "20%"
        },
        [sizes.down("sm")]: {
            width: "100%",
            height: "10%"
        }
    }
}