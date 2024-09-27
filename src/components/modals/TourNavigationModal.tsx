import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction } from "react";
import { formatDateToInputValue, getName } from "../../utils";
import { NavigationType } from "../../store/types/tour/navigation";
import i18n from "../../utils/i18n";

const TourNavigationModal = ({
  navigation,
  showModal,
  setShowModal,
}: {
  navigation: NavigationType[] | null;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const { t } = useTranslation();
  const handleClose = () => setShowModal(false);
  return (
    <Modal show={showModal} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{t("package-contents")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="nav flex-column">
          {navigation &&
            navigation.map((x, idx) => (
              <div
                className="nav-item d-flex"
                key={"tour-navigation-item-index-" + idx}
              >
                <div className="me-2">{formatDateToInputValue(x.from)}</div> -
                <div className="ms-2 me-3">{formatDateToInputValue(x.to)}</div>
                <div>{getName(x, i18n.language)}</div>
              </div>
            ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default TourNavigationModal;
