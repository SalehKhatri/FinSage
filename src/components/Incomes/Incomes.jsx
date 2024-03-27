import React, { useEffect } from 'react'
import './Incomes.css'
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { allIncomes, fetchAllIncomes } from '../../utilities/Redux/allIncome';
import TransactionItem from '../TransactionItem/TransactionItem';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
function Incomes() {
  const incomes = useSelector(allIncomes)?.allIncomes;
  const loading= useSelector(allIncomes)?.isLoading;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllIncomes());
  }, []);
  return (
    <div className="expenses">
      <div className="expense-heading">
        <p>Incomes</p>
        <CallReceivedIcon />
      </div>
      {loading ? (
        <ClipLoader
          color={"#37689A"}
          loading={loading}
          cssOverride={{
            display: "flex",
            margin: "50px auto",
          }}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        !incomes?.length ? <h4 style={{textAlign:"center"}}>Nothing to display Yet!</h4>:
        <div className="expense-body">
          <table className="transaction">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {incomes?.map((incomeItem, index) => (
                <TransactionItem key={index} {...incomeItem} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}


export default Incomes