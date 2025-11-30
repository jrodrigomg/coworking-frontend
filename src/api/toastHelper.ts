import { enqueueSnackbar } from "notistack";

// Función simple para mostrar un toast de error
export const showErrorToast = (message: string) => {
  enqueueSnackbar(message, { variant: "error" });
};
