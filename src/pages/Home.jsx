import { Outlet } from "react-router-dom";
import Typography from "@mui/material/Typography";
import "./Home.css";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="container">
      <div>
        <Typography className="salutation">Hi I am</Typography>
        <Typography className="name">Mélanie Belliard</Typography>
      </div>
      <div>
        <Typography className="techno">JavaScript</Typography>
        <Typography className="dev">Developer</Typography>
      </div>
      <div className="presentationContainer">
        <Typography className="presentation">Passionnée par l'informatique depuis l'adolescence, j'ai entrepris une reconversion en développement d'applications web et mobile à la Wild Code School de Lyon.</Typography>
        <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#A37DF3",
                height: "2.5rem",
                mt: "0.7rem",
                mr: "1rem",
                ":hover": {
                  bgcolor: "#8061C3",
                  color: "white",
                },
              }}
            >
              Hire me
            </Button>
      </div>
    </div>
  );
}
