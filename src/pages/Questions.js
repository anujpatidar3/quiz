import { Box, Button, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import useAxios from '../hooks/useAxios';

const Questions = () => {
    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_question
    } = useSelector(state => state)
    let apiUrl = `/api.php?amount=${amount_of_question}`
    if (question_category) {
        apiUrl = apiUrl.concat(`&category=${question_category}`)
    }
    if (question_difficulty) {
        apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`)
    }
    if (question_type) {
        apiUrl = apiUrl.concat(`&type=${question_type}`)
    }
    const { response, loading } = useAxios({ url: apiUrl })
    console.log(response)

    if(loading){
        return(
            <Box mt={20}>
                <CircularProgress/>
            </Box>
        )
    }

    return (
        <Box>
            <Typography variant="h4"> Question 1</Typography>
            <Typography mt={5}> This is the Question</Typography>
            <Box mt={2}>
                <Button variant='contained'>Answer 1</Button>
            </Box>
            <Box mt={2}>
                <Button variant="contained">Answer 2</Button>
            </Box>
            <Box mt={5}>
                Score:2/5
            </Box>
        </Box>
    );
};

export default Questions;