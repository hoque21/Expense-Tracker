/* The code is exporting a default function that acts as a reducer for a Redux store. */
import { Transaction } from "../components/Transaction";

export default (state, action) => {
    switch (action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        };
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        };
      default:
        return state;
    }
  };
  
