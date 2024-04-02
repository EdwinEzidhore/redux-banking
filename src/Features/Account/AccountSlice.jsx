

const initialstate = {
    balance: 0,
    loan: 0,
    loanpurpose: ''
};

//Account Reducer function
function Accountreducer(state=initialstate, action) {
    switch (action.type) {
        case 'account/deposit': return {
            ...state, balance: state.balance + action.payload
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
        default:return state
    }
};
//Account Reducer Function end


//Account Action creators start
export function deposit(amount) {
    return { type: 'account/depossit', payload: amount };
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