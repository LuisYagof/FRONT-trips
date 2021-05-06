import Modal from './Modal'
import useModal from "../../hooks/useModal"

const Modals = () => {
    const [isOpenModal1, OpenModal1, closeModal1] = useModal(false);
    return (
        <div>
            <h2>Modales</h2>
            <button onClick={OpenModal1}>Modal 1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>Modal1</h3>
                <p>Contenido</p> 
                <img src="https://placeimg.com/400/400/animals" alt="Animals" />
            </Modal>
        </div>
    );
};

export default Modals
