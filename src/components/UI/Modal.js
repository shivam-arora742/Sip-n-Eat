import classes from './Modal.module.css';
import { Fragment } from 'react/cjs/react.production.min';
import ReactDOM from 'react-dom';

// subcomponents for Modal:
const Backdrop=(props)=>{
    return(<div className={classes.backdrop}></div>);
}

const ModalOverlay=(props)=>{
    return (<div className={classes.modal}>{props.children}</div>)
}

const Modal=(props)=>{
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />,document.getElementById('overlays'))}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById('overlays'))}
        </Fragment>
    );
}
export default Modal;