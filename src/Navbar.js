import React, { Component } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Slider from "rc-slider";
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open:false
    };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }

  handleFormatChange(e) {
    this.setState({
      format: e.target.value,
      open : true
    });
    this.props.handleChange(e.target.value);
  }

  closeSnackBar(){
    this.setState({
      open:false
    });
  }

  render() {
    const { level, changeLevel } = this.props;
    const { format, open } = this.state;
    return (
      <header className='Navbar'>
        <div className='logo'>
          <a href='#'>Reactcolorpicker</a>
        </div>
        <div className='slider-container'>
          <span>Level: {level}</span>
          <div className='slider'>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container" >
          <Select
            value={format}
            label="Age"
            onChange={this.handleFormatChange}
          >
            <MenuItem value="hex">Hex - #ffffff</MenuItem>
            <MenuItem value="rgb">rgb - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">rgba - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{vertical:"bottom", horizontal:"left"}}
          open={open}
          autoHideDuration={3000}
          message={<span id="message-id" >Format Changed to {format.toUpperCase()}</span>}
          ContentProps={{
            "aria-describedby":"message-id"
          }}
          action={[
            <IconButton onClick={this.closeSnackBar} >
              <CloseIcon />
            </IconButton>
          ]}
          onClose={this.closeSnackBar}
        />
      </header>
    );
  }
}
export default Navbar;

