import React, { useState } from 'react'
import {Modal, Button, FloatingLabel, Form } from 'react-bootstrap';

const Modal_Pw = ({show, onHide}) => {
      
      //이메일
      const [email, setEmail] = useState('');

      //오류메세지 상태저장
      const [emailMessage, setEmailMessage] = useState('');

      //유효성검사
      const [isEmail, setIsEmail] = useState(false);

      //폰 유효성검사
    //이메일 유효성 검사
    const onChangeEmail = async(e) => {
      e.preventDefault();
      const emailRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      const emailCurrent = e.target.value;
      setEmail(emailCurrent);
  
      if (!emailRegex.test(emailCurrent)) {
        setEmailMessage('이메일 형식이 틀렸어요!');
        setIsEmail(false);
      } else {
        setEmailMessage('올바른 이메일 형식이에요');
        setIsEmail(true);
      }
    };

  return (
    <Modal
      show = {show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          비밀번호 찾기
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FloatingLabel
          controlId="floatingInput"
          label="이메일 주소"
          className="mb-3"
        >
          <Form.Control variant="standard" type="email" name="email" value={email} onClick={(e) => setEmail(e.target.value)} onChange={onChangeEmail} />
          {email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`} style={{color: isEmail? 'blue' : 'red'}}>{emailMessage}</span>}
          <div>여기에 비밀번호 나오거나 비밀번호재설정</div>
        </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="button">
          Click
        </Button>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Modal_Pw;