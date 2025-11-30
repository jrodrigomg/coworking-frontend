import api from "./axiosConfig";
import { showErrorToast } from "./toastHelper";

const handleError = (err: any) => {
  const msg =
    err.response?.data?.message || "Error en la operación de reservas";
  showErrorToast(msg);
};

export const obtenerReservas = (page = 1, size = 10) => {
  return api.get(`/reservas?page=${page}&size=${size}`).catch((err) => {
    handleError(err);
    throw err;
  });
};

export const crearReserva = (data: any) => {
  return api.post("/reservas", data).catch((err) => {
    handleError(err);
    throw err;
  });
};

export const eliminarReserva = (id: string) => {
  return api.delete(`/reservas/${id}`).catch((err) => {
    handleError(err);
    throw err;
  });
};
