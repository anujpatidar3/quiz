import { FormControl, InputLabel, Menu, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleCategoryChange, handleDifficultyChange, handleTypeChange } from '../redux/actions';

const SelectField = (props) => {
    const { label, options } = props
    const dispatch = useDispatch();
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
        switch (label) {
            case "Category":
                dispatch(handleCategoryChange(e.target.value))
                break;
            case "Difficulty":
                dispatch(handleDifficultyChange(e.target.value))
                break;
            case "Type":
                dispatch(handleTypeChange(e.target.value))
                break;
            default:
                return;
        }

    }

    return (
        <div>
            <Box mt={3} width="100%">
                <FormControl size='small' fullWidth>
                    <InputLabel>{label}</InputLabel>
                    <Select value={value} label={label} onChange={handleChange}>
                        {
                            options.map(({ id, name }) => {
                                return (
                                    <MenuItem value={id} key={id}>{name}</MenuItem>
                                )
                            })
                        }
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
};

export default SelectField;