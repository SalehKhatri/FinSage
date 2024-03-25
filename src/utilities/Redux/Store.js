import { configureStore } from '@reduxjs/toolkit'
import LoadingReducer from './loadingSlice'
import UserReducer from './userSlice'
import BudgetReducer from './budgetSlice'
import WeeklyExpenseReducer from './weeklyExpenseSlice'
import CategoryWiseExpenseReducer from './categoryWiseExpense'
import TotalBalanceReducer from './totalBalanceSlice'
import AllExpensesReducer from './allExpense'
import AllIncomeReducer from './allIncome'
export default configureStore({
  reducer: {
    loader:LoadingReducer,
    user:UserReducer,
    budget:BudgetReducer,
    weeklyExpense:WeeklyExpenseReducer,
    categoryWiseExpense:CategoryWiseExpenseReducer,
    totalBalance:TotalBalanceReducer,
    allExpenses:AllExpensesReducer,
    allIncomes:AllIncomeReducer
  }
})

