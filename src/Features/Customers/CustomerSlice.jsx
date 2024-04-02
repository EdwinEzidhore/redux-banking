 export const CustomerAccount = {
    fullname: '',
    nationalId:''
  
}

//Customer Reducer function start
function CustomerReducer(state = CustomerAccount, action) {
    switch (action.type) {
        case 'customer/addcustomer': return {
            ...state,
            fullname: action.payload.name,
            nationalId:action.payload.id
        }
        case 'customer/updatecustomer': return {
            ...state,
            fullname:action.payload.fullname
        }
        default:return state
    }
}
//Customer Reducer function end


//Customer Action creators start
export function createCustomer(name,id) {
    return { type: 'customer/addcustomer', payload: {name,id}} 
}
export function updateCustomer(fullname) {
    return { type:'customer/updatename',payload:fullname}
}
//Customer Reducer function end


export default CustomerReducer;
