import { useModal } from '../../hooks/useModal';
import ContactForm from '../formulario/ContactForm';
import Modal from './Modal';
import ModalPortal from './ModalPortal';

// REVIEW - Contenedor de modal

const AppModals = () => {
  const [isOpen1, openModal1, closeModal1] = useModal(false);
  const [isOpen2, openModal2, closeModal2] = useModal(false);
  const [modalForm, openModalForm, closeModalForm] = useModal(false);
  const [isOpenPortal, openPortal, closePortal] = useModal(false);

  return (
    <div className="AppModals">
      <h2 className="modal-title">Modales</h2>

      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpen1} closeModal={closeModal1}>
        <h3>Modal Chindren</h3>
        <p>Hola este es el contenido de mi modal children</p>
        <img src="https://placeimg.com/400/300/animals" alt="animals" />
      </Modal>

      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpen2} closeModal={closeModal2}>
        <h3>Otro Modal</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo debitis eum, temporibus quis suscipit
          quidem nobis, cumque aspernatur minima iure nostrum necessitatibus repellat dolorum recusandae vero
        </p>
        <img src="https://placeimg.com/400/300/nature" alt="animals" />
      </Modal>

      <button onClick={openModalForm}>Formulario Modal</button>
      <Modal isOpen={modalForm} closeModal={closeModalForm}>
        <ContactForm />
      </Modal>

      <button onClick={openPortal}>Modal en Portal</button>
      <ModalPortal isOpen={isOpenPortal} closeModal={closePortal}>
        <h3>Modal en Portal</h3>
        <p>
          Este es el contenido de un modal que carga en otro nodo del DOM, diferente a donde carga nuestra APP de React
          gracias a un React Portal
        </p>
        <img src="https://placeimg.com/400/300/tech" alt="Tech" />
      </ModalPortal>
    </div>
  );
};

export default AppModals;
