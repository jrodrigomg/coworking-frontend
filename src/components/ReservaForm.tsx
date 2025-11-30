import { useState, useEffect } from "react";
import { TextField, Button, Stack, MenuItem } from "@mui/material";
import { obtenerEspacios } from "../api/espaciosService";

export default function ReservaForm({
  onSubmit,
}: {
  onSubmit: (data: any) => void;
}) {
  const [espacios, setEspacios] = useState<any[]>([]);

  const [espacioId, setEspacioId] = useState<number | "">("");
  const [emailCliente, setEmail] = useState("");
  const [fechaReserva, setFecha] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFin, setHoraFin] = useState("");

  useEffect(() => {
    obtenerEspacios().then((res) => setEspacios(res.data));
  }, []);

  const enviar = (e: any) => {
    e.preventDefault();

    onSubmit({
      espacioId: Number(espacioId),
      emailCliente,
      fechaReserva,
      horaInicio,
      horaFin,
    });
  };

  return (
    <form onSubmit={enviar}>
      <Stack spacing={2}>
        <TextField
          select
          label="Espacio"
          value={espacioId}
          onChange={(e) =>
            setEspacioId(e.target.value === "" ? "" : Number(e.target.value))
          }
          fullWidth
        >
          <MenuItem value="">Seleccione un espacio</MenuItem>

          {espacios.map((esp) => (
            <MenuItem key={esp.id} value={esp.id}>
              {esp.nombre}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Email Cliente"
          fullWidth
          value={emailCliente}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Fecha"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={fechaReserva}
          onChange={(e) => setFecha(e.target.value)}
        />

        <TextField
          label="Hora Inicio"
          type="time"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={horaInicio}
          onChange={(e) => setHoraInicio(e.target.value)}
        />

        <TextField
          label="Hora Fin"
          type="time"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={horaFin}
          onChange={(e) => setHoraFin(e.target.value)}
        />

        <Button type="submit" variant="contained">
          Guardar
        </Button>
      </Stack>
    </form>
  );
}
