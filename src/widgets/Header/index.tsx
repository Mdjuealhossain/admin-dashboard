"use client";
import { FC, useState, useContext } from "react";
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Drawer from "@mui/material/Drawer";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@mui/material/styles";

import { HeaderProps } from "./Types";
import { ColorModeContext } from "src/theme";

const Header: FC<HeaderProps> = () => {
  const [open, setOpen] = useState(false);
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const mode =
    theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />;
  return (
    <Box>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Container maxWidth="xl" sx={{ display: "flex" }}>
            <Stack flex={1} justifyContent="center">
              <Typography variant="h5" color="primary.main">
                Dashboard
              </Typography>
            </Stack>
            <Box>
              <IconButton>
                <GitHubIcon />
              </IconButton>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
              <IconButton onClick={toggleColorMode}>{mode}</IconButton>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
