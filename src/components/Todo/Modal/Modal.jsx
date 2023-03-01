import { createPortal } from 'react-dom';
import {
  Backdrop,
  ModalWindow,
  ModalBox,
  ModalHeader,
  ModalBtn,
  DescriptionHeader,
  Checkbox,
  DescriptionText,
  StatusHeader,
} from './ModalStyled';
import { useEffect } from 'react';
import { toggleCompleted } from 'components/Redux/taskSlice';
import { closeModal } from 'components/Redux/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from 'components/Redux/selectors';
const modalRoot = document.getElementById('modal');

export const Modal = ({ id }) => {
  const text = useSelector(selectTasks);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(closeModal());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(closeModal());
    }
  };

  return createPortal(
    <>
      <Backdrop onClick={handleBackdropClick}>
        <ModalWindow>
          {text &&
            text
              .filter(item => item.id === id)
              .map(({ text, description, id, completed }) => (
                <ModalBox key={id}>
                  <ModalHeader>{text}</ModalHeader>
                  <DescriptionHeader>Description:</DescriptionHeader>
                  <DescriptionText>{description}</DescriptionText>
                  <StatusHeader>
                    Status:{' '}
                    <span>
                      <Checkbox
                        onChange={() => dispatch(toggleCompleted(id))}
                        type="checkbox"
                        checked={completed}
                      />
                    </span>
                  </StatusHeader>
                </ModalBox>
              ))}
          <ModalBtn
            onClick={() => {
              handleClose();
            }}
          >
            Close
          </ModalBtn>
        </ModalWindow>
      </Backdrop>
    </>,
    modalRoot
  );
};
