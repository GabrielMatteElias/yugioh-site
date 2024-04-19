import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}`;
}

export default function RangeSlider() {
    const [value, setValue] = React.useState([0, 12]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: 125, paddingLeft: '1rem'}}>
            <Slider
                getAriaLabel={() => 'Level'}
                value={value}
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
