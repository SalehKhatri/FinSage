import React, { useState } from "react";
import "./ShowModal.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import TransactionModal from "../TransactionModal/TransactionModal";
function ShowModal() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className="ShowModal_container" >
      <AddOutlinedIcon  onClick={() => setShowModal(true)} />
      {showModal && <TransactionModal closeModal={closeModal} />}
    </div>
  );
}

export default ShowModal;
