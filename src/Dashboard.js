import * as React from "react";

import { alpha } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppNavbar from "./components/AppNavbar";
import Header from "./components/Header";
import MainGrid from "./components/MainGrid";
import SideMenu from "./components/SideMenu";
import AppTheme from "./shared-theme/AppTheme";
import { Routes, Route } from "react-router-dom";

import Analytics from "./pages/Analytics";
import Clients from "./pages/clients";
import Tasks from "./pages/Tasks";
import AccountsList from "./pages/AccountsList";
export default function Dashboard(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" }}>
        <SideMenu />
        <AppNavbar />
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: "auto",
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />

            <Routes>
              <Route path="/insights" element={<MainGrid />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/clients" element={<Clients />}>
               
              </Route>
              <Route path="/clients/accounts" element={<AccountsList />} />
              <Route path="/tasks" element={<Tasks />} />
             
            </Routes>
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
