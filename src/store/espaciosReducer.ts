const initialState = {
  lista: [],
  seleccionado: null,
};

export default function espaciosReducer(state = initialState, action: any) {
  switch (action.type) {
    case "SET_ESPACIOS":
      return { ...state, lista: action.payload };

    case "SET_ESPACIO_DETALLE":
      return { ...state, seleccionado: action.payload };

    default:
      return state;
  }
}
