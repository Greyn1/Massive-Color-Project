import sizes from './sizes';

export default {
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        }
    },
    colors: {
        backgroundColor: "#dae1e4",
        height: "8rem",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden",
        [sizes.down("sm")]: {
            height: "9rem"
        }
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.3rem",
        paddingBottom: "1rem",
        fontSize: "0.85rem",
        position: "relative",
        [sizes.down("md")]: {
            fontSize: "0.75rem",
            paddingBottom: "0.4rem",
        }
    },
    emoji: {
        // marginLeft: "0.5rem",
        fontSize: "1rem"
    },
    miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-4px"
      }
};