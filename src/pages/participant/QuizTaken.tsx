import { Box, Paper, Typography } from "@mui/material";

function QuizTaken() {
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Box>
        <Typography variant="h1">You have already taken this quiz </Typography>
        <Typography>Please check your email for your score</Typography>
      </Box>
    </Paper>
  );
}

export default QuizTaken;
