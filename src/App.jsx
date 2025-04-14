import './App.css'
// import Expense from "./Components/Expense"
import Header from "./Components/Header"
import Balance from "./Components/Balance"
import IncomeExpenses from './Components/IncomeExpenses'
import TransactionList from './Components/TransactionList'
import AddTransaction from './Components/AddTransaction'
import GlobalProvider from './context/GlobalState'

function App() {

  return (
    <>
    <GlobalProvider>
        {/* <Expense /> */}
        <Header />
        <div className='container'></div>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
    </GlobalProvider>
    </>
  )
}

export default App;