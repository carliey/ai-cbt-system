import { Box, Stack, Typography } from "@mui/material";
import { Quiz, Test } from "../../types/test";
import { useNavigate } from "react-router-dom";

interface Props {
  quizzes: Quiz[];
}

const Completed = ({ quizzes }: Props) => {
  const navigate = useNavigate();

  if (!quizzes.length || quizzes.length === 0) {
    return (
      <div>
        <h4>No result found</h4>
      </div>
    );
  }

  return (
    <div>
      {quizzes.map((test: Quiz, index) => (
        <Box
          key={index}
          sx={{
            my: 3,
            p: 2,
            border: "2px solid #F5F5F5",
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{
              cursor: "pointer",
            }}
            onClick={() =>
              navigate("completed", {
                state: test,
                preventScrollReset: true,
              })
            }
          >
            <Typography variant="h5" flex={1} component="h2">
              {test.title} {index === 0}
            </Typography>
            <Typography variant="subtitle1" flex={1}>
              Participants: {test.participants?.length}
            </Typography>
            <Typography variant="subtitle1" sx={{ width: "220px" }}>
              Date: {test.date}
            </Typography>
          </Stack>
        </Box>
      ))}
    </div>
  );
};

export default Completed;
