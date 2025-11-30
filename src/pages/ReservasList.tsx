import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  obtenerReservas,
  eliminarReserva,
  crearReserva,
} from "../api/reservasService";
import {
  Container,
  Typography,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import type { RootState } from "../store/store";
import ReservaForm from "../components/ReservaForm";

export default function ReservasList() {
  const dispatch = useDispatch();
  const { data, page, size, total } = useSelector(
    (state: RootState) => state.reservas
  );

  const [open, setOpen] = useState(false);

  const borrar = (id: number) => {
    eliminarReserva(String(id)).then(() => {
      const nuevas = data.filter((r: any) => r.id !== id);

      dispatch({
        type: "SET_RESERVAS",
        payload: {
          data: nuevas,
          total: total - 1,
          page,
          size,
        },
      });
    });
  };

  const guardarReserva = (formData: any) => {
    crearReserva(formData).then((res) => {
      const nueva = res.data;

      dispatch({
        type: "SET_RESERVAS",
        payload: {
          data: [nueva, ...data],
          total: total + 1,
          page,
          size,
        },
      });

      setOpen(false);
    });
  };

  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    obtenerReservas(currentPage, size).then((res) => {
      dispatch({ type: "SET_RESERVAS", payload: res.data });
    });
  }, [currentPage, size, dispatch]);

  const siguiente = () => {
    const totalPaginas = Math.ceil(total / size);
    if (currentPage < totalPaginas) {
      setCurrentPage(currentPage + 1);
    }
  };

  const anterior = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      {/* HEADER */}
      <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
        <Typography variant="h4">Reservas</Typography>

        <Button variant="contained" onClick={() => setOpen(true)}>
          Crear Reserva
        </Button>
      </Stack>

      <Typography sx={{ mb: 2 }}>
        Total: {total} — Página actual: {page}
      </Typography>

      {/* LISTA */}
      {data.length === 0 && <Typography>No hay reservas</Typography>}

      <Stack spacing={2}>
        {data.map((r: any) => (
          <Card key={r.id} variant="outlined">
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Reserva #{r.id}
              </Typography>

              <Typography>
                <strong>Email:</strong> {r.emailCliente}
              </Typography>

              <Typography>
                <strong>Fecha:</strong> {r.fechaReserva}
              </Typography>
              <Typography>
                <strong>Hora inicio:</strong> {r.horaInicio}
              </Typography>
              <Typography>
                <strong>Hora fin:</strong> {r.horaFin}
              </Typography>

              <Typography sx={{ mt: 2 }}>
                <strong>Espacio:</strong> {r.espacio?.nombre ?? "—"}
              </Typography>
              <Typography>
                <strong>Ubicación:</strong> {r.espacio?.ubicacion ?? "—"}
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                variant="outlined"
                color="error"
                onClick={() => borrar(r.id)}
              >
                Eliminar
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>

      {/* PAGINACIÓN */}
      <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
        <Button variant="contained" onClick={anterior} disabled={page === 1}>
          Anterior
        </Button>

        <Button
          variant="contained"
          onClick={siguiente}
          disabled={page >= Math.ceil(total / size)}
        >
          Siguiente
        </Button>
      </Stack>

      {/* DIALOGO PARA CREAR RESERVA */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Crear Reserva</DialogTitle>
        <DialogContent>
          <ReservaForm onSubmit={guardarReserva} />
        </DialogContent>
      </Dialog>
    </Container>
  );
}
