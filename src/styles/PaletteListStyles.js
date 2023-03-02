import sizes from './sizes';
import bg from './bg.svg';

export default {
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#591EFF",
        backgroundImage: `url(${bg})`
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("xl")]: {
            width: "70%"
        },
        [sizes.down("lg")]: {
            width: "75%"
        },
        [sizes.down("md")]: {
            width: "60%"
        },
        [sizes.down("sm")]: {
            width: "55%"
        },
        [sizes.down("xs")]: {
            width: "70%"
        }
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        "& a": {
            color: "white"
        },
        [sizes.down("sm")]: {
            fontSize: "0.9rem"
        },
        [sizes.down("xs")]: {
            fontSize: "0.8rem"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%",
        // gridGap: "2.5rem",
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(2, 50%)",
            gridGap: "1.5rem"
        },
        [sizes.down("sm")]: {
            gridTemplateColumns: "repeat(1, 100%)",
            // gridGap: "1rem"
        }
    }
};