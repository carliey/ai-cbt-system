import React, { useMemo } from "react";
import { Button, Paper, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TabSwitcher from "../../components/TabSwitcher";
import Published from "./Published";
import Unpublished from "./Unpublished";
import { useGetQuizzesQuery } from "./testApiSlice";
import { Quiz } from "../../types/test";

const Tests = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState(0);
  const tabs = ["Published", "Unpublished"];

  const { data: quizzes } = useGetQuizzesQuery();

  console.log(quizzes);

  const unpublished: Quiz[] = useMemo(() => {
    return (
      quizzes?.data?.filter((quiz: Quiz) => quiz.is_published !== true) || []
    );
  }, [quizzes]);

  const published = useMemo(() => {
    return (
      quizzes?.data?.filter((quiz: Quiz) => quiz.is_published === true) || []
    );
  }, [quizzes]);

  return (
    <Paper sx={{ p: 2 }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6">Tests</Typography>
        <Button variant="outlined" onClick={() => navigate("create")}>
          Create New
        </Button>
      </Stack>
      <TabSwitcher
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />
      {activeTab == 0 && <Published quizzes={published} />}
      {activeTab == 1 && <Unpublished quizzes={unpublished} />}
    </Paper>
  );
};

export default Tests;
