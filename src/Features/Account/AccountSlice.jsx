

export const initialstate = {
    balance: 0,
    loan: 0,
    loanpurpose: '',
    isloading:false
};

//Account Reducer function
function Accountreducer(state=initialstate, action) {
    switch (action.type) {
        case 'account/deposit': return {
            ...state, balance: state.balance + action.payload,isloading:false
        }

        case 'account/withdraw': return {
            ...state,balance: state.balance - action.payload
        }

        case 'account/requestloan': if (state.loan > 0) return state
            return {
                ...state, loan: action.payload.amount,
                loanpurpose: action.payload.purpose,
                balance:state.balance +action.payload.amount
            }
            
        case 'account/payloan': return {
            ...state,
            loan: 0,
            loanpurpose: '',
            balance: state.balance - state.loan
            
        };
        case 'account/convertingcurrency': return {
            ...state,
            isloading:true
        }
        default:return state
    }
};
//Account Reducer Function end


//Account Action creators start
export function deposit(amount,currency) {
    if (currency === 'INR') return { type: 'account/deposit', payload: amount };
    return async function (dispatch,getstate) {//async goes to thunk .dispatch and getstate is provided by thunk
        dispatch({type:'account/convertingcurrency'})
        const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=INR`);
        const data = await response.json();
        const convertedAmount = data.rates.INR;
        dispatch({ type: 'account/deposit', payload: convertedAmount });
    }
}

export function withdraw(amount) {
    return { type: 'account/withdraw', payload: amount };
}

export function requestloan(amount, purpose) {
    return {
        type: 'account/requestloan',
        payload: { amount: amount, purpose: purpose },
    };
}
export function payloan(amount) {
    return {
        type: 'account/payloan',
       
    }
}

//Account Action creators end

export default Accountreducer;