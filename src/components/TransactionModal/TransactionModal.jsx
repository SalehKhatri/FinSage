/* eslint-disable no-unused-vars */
import React from 'react'
import './TransactionModal.css'
// eslint-disable-next-line react/prop-types
function TransactionModal({closeModal}) {
  return (
    <>
    <div className='modal_wrapper' onClick={closeModal}></div>
    <div className='TransactionModal_container'>
    <div className='Modal_Fields'>
      <div className='modal_field'>
        <label htmlFor="Name">Name</label>
        <input type="text" placeholder='name' />
      </div>
      <div className='modal_field'>
        <label htmlFor="Name">Name</label>
        <input type="text" placeholder='name' />
      </div>
    </div>
    </div>
    </>
  )
}

export default TransactionModal