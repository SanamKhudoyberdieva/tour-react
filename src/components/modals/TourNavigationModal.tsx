import React, { Dispatch, SetStateAction } from "react";
import { NavigationType } from "../../store/types/tour/navigation";
import { Button, Modal } from "react-bootstrap";
import { formatDateToInputValue } from "../../utils";

const TourNavigationModal = ({
  navigations,
  showModal,
  setShowModal,
}: {
  navigations: NavigationType[] | null;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  console.log("navigations", navigations);
  if (!navigations) return <div></div>;
  const handleClose = () => setShowModal(false);
  return (
    <Modal show={showModal} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Состав пакета</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="nav flex-column">
          {navigations.map((x, idx) => (
            <div
              className="nav-item d-flex"
              key={"tour-navigation-item-index-" + idx}
            >
              <div className="me-2">{formatDateToInputValue(x.from)}</div> -
              <div className="ms-2 me-3">{formatDateToInputValue(x.to)}</div>
              <div>{x.description_ru}</div>
            </div>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default TourNavigationModal;
