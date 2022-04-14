import React from 'react';
import './Palette.css';

function PaletteFooter(props) {
    const {paletteName, emoji} = props;
    return (
        <footer className='palette-footer' >
            {paletteName}
            <span className='emoji' >{emoji}</span>
        </footer>
    );
}

export default PaletteFooter;