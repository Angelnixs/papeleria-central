import { DetailedHTMLProps, HTMLAttributes, RefObject, ReactNode } from 'react';
import Container from 'react-bootstrap/Container';
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';

const GenericModal = (props: JSX.IntrinsicAttributes & Omit<Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: ReactNode; }) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton style={{border:'none'}}>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          {props.children}
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default GenericModal;