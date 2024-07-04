import React, { Dispatch, SetStateAction } from "react";
import { NavigationType } from "../../store/types/tour/navigation";
import { Button, Modal } from "react-bootstrap";

const TourNavigationModal = ({
  navigations,
  showModal,
  setShowModal
}: {
  navigations: NavigationType[] | null;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>
}) => {
  console.log("navigations", navigations);
  const handleClose = () => setShowModal(false);
  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TourNavigationModal;
