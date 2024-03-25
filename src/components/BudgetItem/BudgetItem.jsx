import React from "react";
import "./BudgetItem.css";
import DeleteIcon from "@mui/icons-material/Delete";
import formatDate from "../../utilities/FormatDate";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { fetchUserBudget } from "../../utilities/Redux/budgetSlice";
import RefreshData from "../../utilities/RefreshData";
const BudgetItem = ({
  category,
  createdAt,
  remainingAmount,
  originalAmount,
  _id,
}) => {
  const dispatch = useDispatch();
  const handleDelete = async (id) => {
    const toastId = toast.loading("Deleting...");
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/budget/deleteBudget/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    );
    if (res.status >= 200) {
      RefreshData(dispatch)
      toast.success("Deleted Successfully!", {
        id: toastId,
      });
    } else {
      toast.error("Error deleting!", {
        id: toastId,
      });
    }
  };

  return (
    <div className="budget">
      <div className="heading">
        <p>{category}</p>
      </div>
      <div className="budget-body">
        <div className="total-money">
          <progress
            id="file"
            value={originalAmount - remainingAmount}
            max={originalAmount}
          ></progress>
          <div className="progressMarks">
            <p className="amount">&#8377;0</p>
            <p className="amount">&#8377;{originalAmount}</p>
          </div>
        </div>
        <div className="budgetItems_utils">
          <p>{formatDate(createdAt)}</p>
          <div
            className="Budget_icon_delete_button"
            onClick={() => handleDelete(_id)}
          >
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetItem;
