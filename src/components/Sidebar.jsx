import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "./Siderbar.css";

import LanguageIcon from "@mui/icons-material/Language";
import PortraitIcon from "@mui/icons-material/Portrait";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AppsIcon from "@mui/icons-material/Apps";
import PagesIcon from "@mui/icons-material/Pages";
import SupportIcon from "@mui/icons-material/Support";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Avatar from "@mui/material/Avatar";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import MainBoard from "./MainBoard/MainBoard";

const drawerWidth = 260;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
    
      duration: theme.transitions.duration.leavingScreen,
      
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 10,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
      
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "space-between ",
}));

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="Siderbar_main">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="black"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 3, ...(open && { display: "none" }) }}>
              <MenuIcon />
            </IconButton>

            <div className="Header_Main">
              <div className="Header_left">
                <Paper
                  component="form"
                  sx={{
                    p: "9px 8px",
                    display: "flex",
                    alignItems: "center",
                    width: 400,
                  }}>
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search">
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Google Maps"
                    inputProps={{ "aria-label": "search google maps" }}
                  />

                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <IconButton
                    color="#757575"
                    sx={{ p: "10px" }}
                    aria-label="directions">
                    <DirectionsIcon />
                  </IconButton>
                </Paper>
              </div>

              <div className="Header_right">
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="#757575">
                  <Badge badgeContent={1} color="error">
                    <SettingsIcon />
                  </Badge>
                </IconButton>

                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="#757575">
                  <Badge badgeContent={10} color="error">
                    <ChatBubbleIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="#757575">
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </div>
              <Avatar
                sx={{ width: 30, height: 30 }}
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                onClick={() =>
                  enqueueSnackbar("Update Soon ", { variant: "error" })
                }
              />
              <SnackbarProvider
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                autoHideDuration={1000}
              />
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}>
          <DrawerHeader>
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/arcade/40/a.png"
              alt="a"
            />
            Artemis
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>

          <Divider />

          <div className="Man">Main</div>
          <List>
            {[
              "Dashboard",
              "Discover",
              "User",
              "Documents",
              "Application",
              "Pages",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 && <DashboardIcon />}
                    {index === 1 && <LanguageIcon />}
                    {index === 2 && <PortraitIcon />}
                    {index === 3 && <MenuBookIcon />}
                    {index === 4 && <AppsIcon />}
                    {index === 5 && <PagesIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <div className="Man">Secondary</div>
          <List>
            {["Support center", "Inbox", "File manger ", "Data List"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index == 0 && <SupportIcon />}
                      {index == 1 && <InboxIcon />}
                      {index == 2 && <FolderCopyIcon />}
                      {index == 3 && <FormatListBulletedIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
          <Divider />
          <List>
            {["Settings"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{index == 0 && <SettingsIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Main  open={open}>
          <DrawerHeader />
          <MainBoard/>
        </Main>
      </Box>
    </div>
  );
}
