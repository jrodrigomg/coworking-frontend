const initialState = {
  total: 0,
  page: 1,
  size: 2,
  data: [],
  loading: false,
  error: null,
  successMessage: null,
};

const reservasReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "RESERVAS_LOADING":
      return { ...state, loading: true, error: null, successMessage: null };

    case "RESERVAS_ERROR":
      return { ...state, loading: false, error: action.payload };

    case "SET_RESERVAS":
      return { ...state, ...action.payload, loading: false };

    case "RESERVA_CREADA":
      return {
        ...state,
        successMessage: "Reserva creada correctamente 🎉",
        loading: false,
      };

    case "RESERVA_ELIMINADA":
      return {
        ...state,
        successMessage: "Reserva eliminada correctamente 🗑️",
        loading: false,
      };

    default:
      return state;
  }
};

export default reservasReducer;
