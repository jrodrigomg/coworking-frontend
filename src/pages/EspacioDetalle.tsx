import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerEspacioPorId } from "../api/espaciosService";
import type { RootState } from "../store/store";
import { Container, Typography } from "@mui/material";

export default function EspacioDetalle() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const espacio = useSelector(
    (state: RootState) => state.espacios.seleccionado
  );

  useEffect(() => {
    if (id) {
      obtenerEspacioPorId(id).then((res) => {
        dispatch({ type: "SET_ESPACIO_DETALLE", payload: res.data });
      });
    }
  }, [id]);

  if (!espacio) return <div>Cargando...</div>;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">{espacio.nombre}</Typography>
      <Typography>Ubicación: {espacio.ubicacion}</Typography>
      <Typography>Capacidad: {espacio.capacidad}</Typography>
      <Typography sx={{ mt: 2 }}>{espacio.descripcion}</Typography>
    </Container>
  );
}
