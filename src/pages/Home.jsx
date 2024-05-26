import { animated, useSpring } from 'react-spring';
import { Outlet } from "react-router-dom";
import Typography from "@mui/material/Typography";
import "./Home.css";
import { Button } from "@mui/material";

export default function Home() {
  const AnimatedButton = animated(Button)

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  const bounce = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.05)' },
    config: { tension: 200, friction: 3 },
    delay: 500,
  });

  return (
    <div className="container">
      <div className="content">
        <div style={{ display: "block" }}>
          <div>
            <Typography className="salutation">Hi I am</Typography>
            <Typography className="name">Mélanie Belliard</Typography>
          </div>
          <animated.div style={fade}>
            <Typography className="techno">JavaScript</Typography>
            <Typography className="dev">Developer</Typography>
          </animated.div>
          <div className="presentationContainer">
            <Typography className="presentation">I've been passionate about IT since I was a teenager, so I decided to retrain in web and mobile application development at the Wild Code School in Lyon. I have 7 month of experience in fullstack development.</Typography>
            <div>
              <a href="https://www.linkedin.com/in/melanie-belliard/">
                <AnimatedButton
                  style={bounce}
                  variant="contained"
                  size="small"
                  sx={{
                    marginTop: "16px",
                    backgroundColor: "#A37DF3",
                    height: "2.5rem",
                    width: "100px",
                    ":hover": {
                      bgcolor: "#8061C3",
                      color: "white",
                    },
                    '@media (max-width: 768px)': {
                      width: '80%', // Button width is more responsive
                      fontSize: '0.875rem', // Smaller font size on small screens
                    }
                  }}
                >
                  Hire me
                </AnimatedButton>
              </a>
            </div>
          </div>
        </div>
        <img src="/src/assets/avatar.png" height={500} style={{ borderRadius: "200px", border: "solid #8061C3 2px", marginTop: "auto" }} />
      </div>
    </div>
  );
}
