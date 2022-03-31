import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
    render() {
        const ColorBoxes = this.props.colors.map(color => (
            <ColorBox key={color.name} background={color.color} name={color.name} />
        ));
        return (
            <div className='palette' >
                {/* navbar */}
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