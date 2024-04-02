import React from 'react'
import CreateCustomer from './Features/Customers/CreateCustomers'
import Customer from './Features/Customers/Customer'
import AccountOperations from './Features/Account/Accountoperations'
import BalanceDisplay from './Features/Account/BalanceDisplay'
import { useSelector } from 'react-redux'

function App() {

  return (
    <div>
      <h1>Welcome to Canara Bank</h1>
       <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay/>
    </div>
  )
}

export default App
