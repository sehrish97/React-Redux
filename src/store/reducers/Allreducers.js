import { combineReducers } from "redux";
import reducer from "./index";

const Reducer = combineReducers({
    amount: reducer
})
export default Reducer;