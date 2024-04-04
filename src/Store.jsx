import { createStore ,combineReducers, applyMiddleware} from "redux";
import Accountreducer from "./Features/Account/AccountSlice";
import CustomerReducer from "./Features/Customers/CustomerSlice";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const RootReducer = combineReducers({
    customer: CustomerReducer,
    account: Accountreducer,
})


const store = createStore(RootReducer,
    composeWithDevTools( applyMiddleware(thunk)));

export default store;


