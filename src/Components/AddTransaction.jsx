import React, {useState, useContext} from 'react'
import { GlobalContext } from "../context/GlobalState"

export default function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();
    const {addTransaction} = useContext(GlobalContext)

    const onSubmit = e => {
      e.preventDefault()

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount, //passing it into a strin in an easier way otherwise could have used parse int
        
      }

      addTransaction(newTransaction)
    }

  return (
    <div>
        <h3>Add new transactions</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
            <label htmlFor="tetx">Text</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text...' />
        </div>
        <div className='form-control'>
            <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)
            </label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter  amount'/>
        </div>

        <button className='btn'>Add transaction</button>
      </form>
    </div>
  )
}