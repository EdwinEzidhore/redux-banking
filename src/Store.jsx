import { configureStore } from "@reduxjs/toolkit";
import Accountreducer from "./Features/Account/AccountSlice";
import CustomerReducer from "./Features/Customers/CustomerSlice";






const store = configureStore({
    reducer: {
        account: Accountreducer,
        customer:CustomerReducer
    }
})
 
export default store;


