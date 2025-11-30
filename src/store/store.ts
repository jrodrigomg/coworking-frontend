import { legacy_createStore as createStore, combineReducers } from "redux";
import espaciosReducer from "./espaciosReducer";
import reservasReducer from "./reservasReducer";

const rootReducer = combineReducers({
  espacios: espaciosReducer,
  reservas: reservasReducer,
});

const store = createStore(rootReducer);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
