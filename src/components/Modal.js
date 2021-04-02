import { useSelector } from 'react-redux'

import { getDate } from '../selectors'
import ModalForm from './Form'

const Modal = ({ show, closeModal }) => {

    const date = useSelector(getDate())

    return <>
        {
            show && <ModalForm closeModal={closeModal} date={date} edit={false} />
        }</>

}

export default Modal;
