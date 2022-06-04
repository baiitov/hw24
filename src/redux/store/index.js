import { createStore } from "redux";
import { reducerFunc } from "../reducers/reduces";

export const store = createStore(reducerFunc)