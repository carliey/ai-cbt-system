import {
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import ParticipantsTable from "./ParticipantsTable";
import { Participant } from "../../../types/participants";
import UploadParticipantsModal from "./UploadParticipantsModal";
import { FormData } from "./CreateTest";

type Props = {
  participants: Participant[];
  setParticipants: React.Dispatch<React.SetStateAction<Participant[]>>;
  formData: FormData;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Settings = ({
  formData,
  participants,
  setParticipants,
  handleChange,
}: Props) => {
  // const [checked, setChecked] = useState(["wifi"]);
  const [openUploadParticipants, setOpenUploadParticipants] = useState(false);

  // const handleToggle = (value: string) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  // };

  return (
    <div>
      <Card elevation={2} sx={{ my: 2 }}>
        <CardContent>
          <Grid container spacing={1} columnSpacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="standard"
                label="Test Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                variant="standard"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline
                minRows={2}
                fullWidth
                label="Instructions"
                variant="standard"
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="number"
                aria-valuemin={0}
                aria-valuemax={1000}
                label="Duration(minutes)"
                variant="standard"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="Duration"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: "11px", color: "grey" }}>
                Date
              </Typography>
              <TextField
                fullWidth
                type="date"
                variant="standard"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          {/* <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
            }}
          >
            <ListItem>
              <ListItemText primary="Show result at the end of test" />
              <Switch
                edge="end"
                onChange={handleToggle("wifi")}
                checked={checked.indexOf("wifi") !== -1}
              />
            </ListItem>
          </List> */}
        </CardContent>
      </Card>
      <ParticipantsTable
        rows={participants}
        setOpenUploadParticipants={setOpenUploadParticipants}
      />
      <UploadParticipantsModal
        open={openUploadParticipants}
        onClose={() => setOpenUploadParticipants(false)}
        setParticipants={setParticipants}
      />
    </div>
  );
};

export default Settings;
