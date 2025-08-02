import ReactDom from "react-dom";
import "./Modal.css";

/**
 * IMPORTANT - To use this component:
 *
 * ModalPortal Component
 * Utiliza ReactDom.createPortal() para renderizar un modal en un nodo del DOM fuera del árbol principal de React.
 *
 * Props:
 * - children: Contenido del modal.
 * - isOpen: Booleano que indica si el modal está abierto.
 * - closeModal: Función para cerrar el modal.
 *
 * Uso:
 * 1. Asegúrate de que exista un elemento en el archivo index.html con el ID "modal".
 *    Ejemplo: <div id="modal"></div>
 * 2. Importa este componente en tu aplicación.
 * 3. Usa el componente ModalPortal y pasa las props necesarias.
 *    Ejemplo:
 *    <ModalPortal isOpen={isOpen} closeModal={closeModal}>
 *      <h3>Contenido del Modal</h3>
 *    </ModalPortal>
 *
 * Nota:
 * - El elemento con ID "modal" debe estar fuera del contenedor principal de React (por ejemplo,
 * fuera de <div id="root"></div>).
 */

const ModalPortal = ({ children, isOpen, closeModal }) => {
	const handleStopPropagation = (e) => e.stopPropagation();

	return ReactDom.createPortal(
		<div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
			<div className="modal-container" onClick={handleStopPropagation}>
				<button className="modal-close" onClick={closeModal}>
					X
				</button>
				{children}
			</div>
		</div>,
		document.getElementById("modal")
	);
};

export default ModalPortal;

