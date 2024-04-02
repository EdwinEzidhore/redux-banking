import { createStore ,combineReducers} from "redux";
import Accountreducer from "./Features/Account/AccountSlice";
import CustomerReducer from "./Features/Customers/CustomerSlice";


const RootReducer = combineReducers({
    customer: CustomerReducer,
    Account: Accountreducer,
})


const store = createStore(RootReducer);

export default store;


