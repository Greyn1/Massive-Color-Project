import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from "./Navbar";
import PaletteFooter from './PaletteFooter';
import './Palette.css';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: "hex"
        };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(newLevel) {
        this.setState({
            level: newLevel
        });
    }

    changeFormat(val) {
        this.setState({
            format: val
        })
    }

    render() {
        const { colors, paletteName, emoji, id } = this.props.palette;
        const { level, format } = this.state;
        const ColorBoxes = colors[level].map(color => (
            <ColorBox
                key={color.id}
                background={color[format]}
                name={color.name}
                moreUrl={`/palette/${id}/${color.id}`}
                showLink={true} />
        ));
        return (
            <div className='palette' >
                {/* navbar */}
                <Navbar
                    level={level}
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                    showSlider={true}
                />
                <div className='palette-colors' >
                    {/* Bunch of colorboxes */}
                    {ColorBoxes}
                </div>
                {/* footer */}
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default Palette;