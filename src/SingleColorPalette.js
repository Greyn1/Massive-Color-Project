import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    }

    gatherShades(palette, colorToFilterBy){
        let shades =[];
        let allColors = palette.colors;
        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            );
        }
        return shades.slice(1);
    }
    
    render() {
        const colorBoxes = this._shades.map( color => (
            <ColorBox 
            key={color.id}
            background={color.hex}
            name={color.name}
            showLink={false} />
        ));
        return (
            <div className='palette' >
                <h1>Single color Palette!</h1>
                <div className='palette-colors' >
                    {colorBoxes}
                </div>
            </div>
        );
    }
}

export default SingleColorPalette;