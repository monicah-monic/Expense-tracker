import React, {useContext} from "react";
import { GlobalContext } from '../context/GlobalState'
                                    // Destructuring indtead of props
export default function Transaction({transaction}) {
  const {deleteTransaction} = useContext(GlobalContext)
  // ternary operater
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}KSH: {Math.abs(transaction.amount)}
        </span>
        <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">X</button>
      </li>
    </div>
  );
}