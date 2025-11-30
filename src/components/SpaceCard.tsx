import { Card, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function SpaceCard({ e }: any) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5">{e.nombre}</Typography>
        <Typography>Ubicación: {e.ubicacion}</Typography>
        <Typography>Capacidad: {e.capacidad}</Typography>

        <Button
          variant="contained"
          sx={{ mt: 2 }}
          component={Link}
          to={`/espacios/${e.id}`}
        >
          Ver Detalle
        </Button>
      </CardContent>
    </Card>
  );
}
