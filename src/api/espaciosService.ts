import api from "./axiosConfig";
import { showErrorToast } from "./toastHelper";

const handleError = (err: any) => {
  const msg = err.response?.data?.message || "Error al obtener los espacios";
  showErrorToast(msg);
};

export const obtenerEspacios = () => {
  return api.get("/espacios").catch((err) => {
    handleError(err);
    throw err;
  });
};

export const obtenerEspacioPorId = (id: string) => {
  return api.get(`/espacios/${id}`).catch((err) => {
    handleError(err);
    throw err;
  });
};
