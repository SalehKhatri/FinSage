import React, { useEffect, useState } from "react";
import "./ShowModal.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import TransactionModal from "../TransactionModal/TransactionModal";
import { useLocation, useNavigate } from "react-router-dom";
function ShowModal() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const closeModal = () => {
    setShowModal(false);
  }
  useEffect(() => {
    // Close modal when route changes
    setShowModal(false);
  }, [location]);
  return (
    <div className="ShowModal_container" >
      <AddOutlinedIcon  onClick={() => setShowModal(true)} />
      {showModal && <TransactionModal closeModal={closeModal} />}
    </div>
  );
}

export default ShowModal;
