import { createPortal } from 'react-dom';
import { Backdrop, ModalWindow } from './ModalStyled';
import { useEffect } from 'react';
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
          <button
            onClick={() => {
              handleClose();
            }}
          >
            Close
          </button>
          <ul>
            {text &&
              text
                .filter(item => item.id === id)
                .map(({ text, description, id }) => (
                  <li key={id}>
                    <p>{id}</p>
                    <p>{text}</p>
                    <p>{description}</p>
                  </li>
                ))}
          </ul>
        </ModalWindow>
      </Backdrop>
    </>,
    modalRoot
  );
};
