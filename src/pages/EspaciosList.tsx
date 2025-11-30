import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerEspacios } from "../api/espaciosService";
import SpaceCard from "../components/SpaceCard";
import type { RootState } from "../store/store";
import { Container, Typography } from "@mui/material";

export default function EspaciosList() {
  const dispatch = useDispatch();
  const espacios = useSelector((state: RootState) => state.espacios.lista);

  useEffect(() => {
    obtenerEspacios().then((res) => {
      dispatch({ type: "SET_ESPACIOS", payload: res.data });
    });
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Espacios disponibles
      </Typography>

      {espacios.map((e: any) => (
        <SpaceCard key={e.id} e={e} />
      ))}
    </Container>
  );
}
