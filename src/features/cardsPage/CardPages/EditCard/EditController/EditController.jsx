import React from "react";
import { EditControler } from "../EditCard.style";
import { ButtonNewCard } from "../../NewCard/NewCardPlans/NewCardPlans.style";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCardEdit } from "../../../../../state-management/Dashboard/cards/cards.selector";
import { setErrorMsg } from "../../../../../state-management/Dashboard/cards/cards.action";
import { selectCurrentCardEdit } from "../../../../../state-management/Dashboard/cards/cards.selector";
import { asyncSaveChanges } from "../../../../../state-management/Dashboard/cards/cards.action";
import { selectCardArr } from "../../../../../state-management/Dashboard/cards/cards.selector";

import { useState } from "react";
import Modal from "../../../../../components/Modal/Modal";
import CardsModal from "../../../CardsModal/CardsModal";

function EditController({ ...props }) {
  const [type, setType] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpenSave = (id) => {
    setModalOpen(true);
    setType("save");
  };

  const handleModalOpenDelete = (id) => {
    setModalOpen(true);
    setType("delete");
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <EditControler>
      <ButtonNewCard
        label="Save Changes"
        size="xl"
        primary="primary"
        type="button"
        onClick={handleModalOpenSave}
      />
      <ButtonNewCard
        label="Delete Account"
        size="xl"
        primary="primary"
        type="button"
        onClick={handleModalOpenDelete}
      />
      <Modal opened={modalOpen} handleClick={handleModalClose}>
        <CardsModal type={type} />
      </Modal>
    </EditControler>
  );
}

export default EditController;
