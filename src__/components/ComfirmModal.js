// src/components/ConfirmModal.js

import { Button, Modal, ModalBody } from "react-bootstrap";

//Confirm 모달 
function ConfirmModal({show, message, yes, no}) {
    /*
        <Modal show={} >
        Modal 의 show 속성은 react-bootstrap 에서 이미 정해진 속성이다
        show={true} 면 모달이 보여지고 show={false} 면 모달이 숨겨진다.
        해당 값을 부모 component 로 부터 전달받아서 사용하는 구조이다.
    */
    return (
        <Modal show={show}>
            <Modal.Header>알림</Modal.Header>
            <ModalBody>{message}</ModalBody>
            <Modal.Footer>
                <Button variant="success" onClick={()=>yes()}>확인</Button>
                <Button variant="danger" onClick={()=>no()}>취소</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmModal;