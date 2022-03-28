import { createStore } from "redux";
import { rootReducers } from "./reducer/index";

export const store = createStore(rootReducers);
