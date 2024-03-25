import React from "react";
import "./TransactionItem.css";
import formatDate from "../../utilities/FormatDate";
import { Delete } from "@mui/icons-material";
import toast from "react-hot-toast";
import RefreshData from "../../utilities/RefreshData";
import { useDispatch } from "react-redux";
const TransactionItem = (props) => {
  const dispatch = useDispatch()
  const handleDelete = async (id) => {
    const toastId = toast.loading("Deleting...");
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/transaction/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    );
    if (res.status >= 200) {
      toast.success("Deleted Successfully!", {
        id: toastId,
      });
      RefreshData(dispatch)
    } else {
      toast.error("Error deleting!", {
        id: toastId,
      });
    }
  };
  return (
    <tr>
      <td>
        <div className="transaction-name">
          <p className="name">{props.description}</p>
          <p className="date">{formatDate(props.date)}</p>
        </div>
      </td>
      <td className="transaction-category">{props.category}</td>
      <td className="amount">&#8377; {props.amount}</td>
      <td
        style={{ cursor: "pointer" }}
        onClick={() => {
          handleDelete(props._id);
        }}
      >
        <Delete />
      </td>
    </tr>
  );
};

export default TransactionItem;
