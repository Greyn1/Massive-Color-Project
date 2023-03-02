import chroma from "chroma-js";
import sizes from './sizes';

export default {
    ColorBox: {
        width: "20%",
        height: props => (props.showingFullPalette ? "25%" : "50%"),
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        "&:hover button": {
          opacity: 1,
          transition:"0.5sec"
        },
        [sizes.down("xl")]: {
          width: "25%",
          height: props => (props.showingFullPalette ? "20%" : "33.333%")
        },
        [sizes.down("lg")]: {
          width: "50%",
          height: props => (props.showingFullPalette ? "10%" : "20%")
        },
        [sizes.down("sm")]: {
          width: "100%",
          height: props => (props.showingFullPalette ? "5%" : "10%")
        }
      },
    copyText: {
        color: props =>
          chroma(props.background).luminance() >= 0.6 ? "black" : "white"
      },
      colorName: {
        color: props =>
          chroma(props.background).luminance() <= 0.2 ? "white" : "black"
      },
      seeMore: {
        color: props =>
          chroma(props.background).luminance() >= 0.6 ? "rgba(0,0,0,0.5)" : "white",
        background: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        border: "none",
        right: "0px",
        bottom: "0px",
        width: "50px",
        height: "22px",
        textAlign: "center",
        lineHeight: "22px",
        textTransform: "uppercase"
      },
      copyButton: {
        color: props =>
          chroma(props.background).luminance() >= 0.6 ? "rgba(0,0,0,0.5)" : "white",
        width: "80px",
        height: "30px",
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
        opacity: 0
      },
      boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "15px 15px 5px 5px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "10px"
      },
      copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out",
        transform: "scale(0.1)"
      },
      showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute"
      },
      copyMessage:{
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontSize: "2rem",
        transform: "scale(0.1)",
        opacity: "0",
        color: "white",
        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px black",
            background: "rgba(255, 255, 255, 0.3)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0",
            padding: "1rem",
            textTransform: "uppercase",
            [sizes.down("sm")]: {
              fontSize: "6rem"
            }
          },
          "& p": {
            fontSize: "1.2rem",
            fontWeight: "100"
          }
      },
      showMessage: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all 0.6s ease-in-out",
        transitionDelay: "0.3s"
      }
};