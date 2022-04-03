import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from "./Navbar";
import './Palette.css';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500
        };
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(newLevel) {
        this.setState({
            level: newLevel
        });
    }

    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;
        const ColorBoxes = colors[level].map(color => (
            <ColorBox key={color.name} background={color.hex} name={color.name} />
        ));
        return (
            <div className='palette' >
                {/* navbar */}
                <Navbar level={level} changeLevel={this.changeLevel} />
                <div className='palette-colors' >
                    {/* Bunch of colorboxes */}
                    {ColorBoxes}
                </div>
                {/* footer */}
            </div>
        );
    }
}

export default Palette;