import sizes from './sizes';

export default {
    Navbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      height: "7vh"
    },
    logo: {
      marginRight: "15px",
      padding: "0 10px",
      fontSize: "18px",
      backgroundColor: "#eceff1",
      fontFamily: "Roboto",
      height: "100%",
      display: "flex",
      alignItems: "center",
      "& a": {
        textDecoration: "none",
        color: "black"
      },
      [sizes.down("sm")] : {
        display: "none"
      }
    },
    slider: {
      width: "240px",
      margin: "0 10px",
      display: "inline-block",
      "& .rc-slider-track": {
        backgroundColor: "transparent"
      },
      "& .rc-slider-rail": {
        height: "7px"
      },
      "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover": {
        backgroundColor: "green",
        outline: "none",
        border: "2px solid green",
        boxShadow: "none !important",
        marginTop: "-4px"
      },
      [sizes.down("lg")] : {
        width: "150px"
      }
    },
    selectContainer: {
      marginLeft: "auto",
      marginRight: "1rem"
    }
  };

