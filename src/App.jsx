import React from 'react'
import CreateCustomers from './Features/Customers/CreateCustomers'
import Customer from './Features/Customers/Customer'
import AccountOperations from './Features/Account/Accountoperations'
import BalanceDisplay from './Features/Account/BalanceDisplay'
import { useSelector } from 'react-redux'

function App() {
  const fullName = useSelector((store) => store.customer);
  // console.log(fullName);
  return (
    <div>
      <h1>Welcome to Canara Bank</h1>
      <CreateCustomers/>
       
      <Customer />
      <AccountOperations />
      <BalanceDisplay/>
    </div>
  )
}

export default App
