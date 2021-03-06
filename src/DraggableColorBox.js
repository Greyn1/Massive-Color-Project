import React from 'react';
import { SortableElement } from "react-sortable-hoc";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@mui/icons-material/Delete";

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.3)"
        }
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
        fontSize: "10px",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out"
    }
};

const DraggableColorBox = SortableElement(props => {
    const { classes, handleClick, name, color } = props;
    return (
        <div className={classes.root} style={{ backgroundColor: color }} >
            <div className={classes.boxContent}>
                <span> {name}</span>
                <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
            </div>
        </div>
    );
});

export default withStyles(styles)(DraggableColorBox);   