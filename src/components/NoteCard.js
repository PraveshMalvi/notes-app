import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { blue, green, pink, yellow } from "@material-ui/core/colors";

const useStyle = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.category == "Work") {
        return yellow[700];
      }
      if (note.category == "Money") {
        return green[500];
      }
      if (note.category == "Todos") {
        return pink[500];
      }
      return blue[500];
    },
  },
});

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyle(note);

  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
