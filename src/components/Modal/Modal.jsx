import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ open, closable, footer, children, onClose }) => {
  return open && (
    <div className="modal">
      <div className="modal__backdrop" onClick={ closable ? onClose : () => null }/>
      <div className="modal__inner">
        { children }
        { footer && <div className={"modal__footer"}>{ footer }</div> }
        { closable && <div className="modal__close" onClick={ onClose }/>}
      </div>
    </div>
  )
}

Modal.defaultProps = {
  closable: true
}

Modal.propTypes = {
  open: PropTypes.bool,
  closable: PropTypes.bool,
  footer: PropTypes.node,
  children: PropTypes.node,
  onClose: PropTypes.func
}

export default Modal;
