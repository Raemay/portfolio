import { Outlet } from "react-router-dom";
import Typography from "@mui/material/Typography";
import "./Home.css";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="container">
      <div style={{display: "flex", justifyContent:"space-around"}}>
        <div style={{display:"block"}}>
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
      <div>
        <Button
              variant="contained"
              size="small"
              sx={{
                marginTop: "16px",
                backgroundColor: "#A37DF3",
                height: "2.5rem",
                width:"100px",
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
      </div>
      <img src="/src/assets/avatar.png" height={500} style={{borderRadius:"200px", border:"solid #8061C3 2px", marginTop: "auto"}}/>
      </div>
    </div>
  );
}
