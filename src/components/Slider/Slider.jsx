import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}`;
}

export default function RangeSlider(props) {
    const {
        valor, 
        setValor
    } = props
    const handleChange = (event, newValue) => {
        setValor(newValue);
    };

    return (
        <Box sx={{ width: 105, paddingLeft: '1rem'}}>
            <Slider
                getAriaLabel={() => 'Level'}
                value={valor}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0}
                max={12}
                step={1}
            />
        </Box>
    );
}
