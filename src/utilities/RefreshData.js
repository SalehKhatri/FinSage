import { fetchAllExpenses } from "./Redux/allExpense";
import { fetchAllIncomes } from "./Redux/allIncome";
import { fetchUserBudget } from "./Redux/budgetSlice";
import { fetchCategoryWiseExpense } from "./Redux/categoryWiseExpense";
import { fetchUserTotalBalance } from "./Redux/totalBalanceSlice";
import { fetchUserWeeklyExpense } from "./Redux/weeklyExpenseSlice";

const RefreshData = (dispatch)=>{
  dispatch(fetchAllExpenses())
  dispatch(fetchAllIncomes())
  dispatch(fetchUserBudget())
  dispatch(fetchCategoryWiseExpense())
  dispatch(fetchUserTotalBalance())
  dispatch(fetchUserWeeklyExpense())
}
 
export default RefreshData