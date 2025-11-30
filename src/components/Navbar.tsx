import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Coworking Reservas
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Espacios
        </Button>
        <Button color="inherit" component={Link} to="/reservas">
          Reservas
        </Button>
      </Toolbar>
    </AppBar>
  );
}
