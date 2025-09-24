import * as React from "react";

import Modal from "@mui/material/Modal";

const ModalCard = React.memo(({ setOpen, open }) => {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="w-full sm:max-w-md bg-white p-6 rounded-2xl shadow-2xl absolute min-h-[30vh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2>Hello</h2>
        </div>
      </Modal>
    </div>
  );
});

export default ModalCard;
