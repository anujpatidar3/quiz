import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleAmountChange, handleScoreChange } from '../redux/actions';

const FinalScreen = () => {

    const { score } = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleBackToSettings = () => {
        dispatch(handleScoreChange(0))
        dispatch(handleAmountChange(10))
        navigate("/")
    }

    return (
        <Box mt={30}>
            <Typography variant="h3" fontWeight="bold" mb={3}>
                Final Score: {score}
            </Typography>
            <Button variant='outlined' onClick={handleBackToSettings}>Back to Settings?</Button>
        </Box>
    );
};

export default FinalScreen;         