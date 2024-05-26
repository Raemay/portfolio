import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Image } from "@mui/icons-material";

const pages = ["Home", "About me", "Projects", "Testimonials", "Contact"];

function ResponsiveAppBar({ routePaths }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img src="src/assets/logo.png" alt="Logo Mélanie Belliard" width={300} />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "flex-end", alignItems:"flex-start", height:"100%" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={routePaths[page]}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
                <a href="/CV_Melanie_Belliard.pdf" download="CV_Melanie_Belliard" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#A37DF3",
                height: "2.5rem",
                mt: "0.7rem",
                ml: "1rem",
                ":hover": {
                  bgcolor: "#8061C3",
                  color: "white",
                },
              }}
            >
              Download CV
            </Button>
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
