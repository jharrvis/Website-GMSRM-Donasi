"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link href="/" passHref>
          <Box
            component="a"
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src="/logo.webp"
              alt="Logo"
              style={{ height: "40px", marginRight: "10px" }}
            />
            <Typography
              variant="h6"
              component="span"
              sx={{ fontSize: "1.2rem" }}
            >
              GMSRM
            </Typography>
          </Box>
        </Link>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Link href="/" passHref>
            <Typography
              variant="button"
              component="a"
              className="hover:text-gray-400"
              sx={{ color: "black", marginRight: 2, textDecoration: "none" }}
            >
              Beranda
            </Typography>
          </Link>
          <Link href="/tentang-kami" passHref>
            <Typography
              variant="button"
              component="a"
              className="hover:text-gray-400"
              sx={{ color: "black", marginRight: 2, textDecoration: "none" }}
            >
              Tentang Kami
            </Typography>
          </Link>
          <Link href="/program" passHref>
            <Typography
              variant="button"
              component="a"
              className="hover:text-gray-400"
              sx={{ color: "black", marginRight: 2, textDecoration: "none" }}
            >
              Program
            </Typography>
          </Link>
          <Link href="/donasi" passHref>
            <Typography
              variant="button"
              component="a"
              className="hover:text-gray-400"
              sx={{ color: "black", marginRight: 2, textDecoration: "none" }}
            >
              Donasi
            </Typography>
          </Link>
          <Link href="/galeri" passHref>
            <Typography
              variant="button"
              component="a"
              className="hover:text-gray-400"
              sx={{ color: "black", marginRight: 2, textDecoration: "none" }}
            >
              Galeri
            </Typography>
          </Link>
          <Link href="/hubungi" passHref>
            <Typography
              variant="button"
              component="a"
              className="hover:text-gray-400"
              sx={{ color: "black", textDecoration: "none" }}
            >
              Hubungi
            </Typography>
          </Link>
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer(true)}
          sx={{ display: { md: "none" }, color: "black" }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <IconButton onClick={toggleDrawer(false)} sx={{ margin: "10px" }}>
            <CloseIcon />
          </IconButton>
          <List>
            <Link href="/" passHref>
              <ListItem button component="a">
                <ListItemText primary="Beranda" />
              </ListItem>
            </Link>
            <Link href="/tentang-kami" passHref>
              <ListItem button component="a">
                <ListItemText primary="Tentang Kami" />
              </ListItem>
            </Link>
            <Link href="/program" passHref>
              <ListItem button component="a">
                <ListItemText primary="Program" />
              </ListItem>
            </Link>
            <Link href="/donasi" passHref>
              <ListItem button component="a">
                <ListItemText primary="Donasi" />
              </ListItem>
            </Link>
            <Link href="/galeri" passHref>
              <ListItem button component="a">
                <ListItemText primary="Galeri" />
              </ListItem>
            </Link>
            <Link href="/hubungi" passHref>
              <ListItem button component="a">
                <ListItemText primary="Hubungi" />
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
