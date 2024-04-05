import { createSlice } from "@reduxjs/toolkit";

const AccountState = {
    balance: 0,
    loan: 0,
    loanpurpose: '',
    isloading:false
};

const AccountSlice = createSlice({
    name: 'account',
    initialState: AccountState,
    reducers: {
        deposit(state, action) {
            state.balance = state.balance + action.payload;

        },
        withdraw(state, action) {
            state.balance -= action.payload;
        },
        requestloan(state, action) {
            if (state.loan > 0) return;
            state.loan = action.payload.amount;
            state.loanpurpose = action.payload.purpose;
            state.balance = state.balance + action.payload.amount;
        },
        payloan(state, action) {
            state.loan = 0;
            state.loanpurpose = '';
            state.balance = state.balance - state.loan;
        }

    }
})

export const{deposit,withdraw,requestloan,payloan}=AccountSlice.actions;


export default AccountSlice.reducer;//reducer is a keyword


//Account Action creators start
// export function deposit(amount,currency) {
//     if (currency === 'INR') return { type: 'account/deposit', payload: amount };
//     return async function (dispatch,getstate) {//async goes to thunk .dispatch and getstate is provided by thunk
//         dispatch({type:'account/convertingcurrency'})
//         const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=INR`);
//         const data = await response.json();
//         const convertedAmount = data.rates.INR;
//         dispatch({ type: 'account/deposit', payload: convertedAmount });
//     }
// }


//Account Action creators end

