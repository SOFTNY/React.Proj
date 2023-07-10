import React, { useState } from 'react'
import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap';

const Modal_Id = ({ show, onHide }) => {

  //휴대전화
  const [phone, setPhone] = useState('');

  //오류메세지 상태저장
  const [PhoneMessage, setPhoneMessage] = useState('');

  //유효성검사
  const [isPhone, setIsPhone] = useState(false);


  const handleSubmit = async (event) => {
    try {
      const response = await fetch('http://localhost:8080/member/exist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });
      if (response.status == 404) {
        alert("폰 번호가 일치하지 않습니다.");
      }
      else if (response.ok) {
        const data = await response.json();
        const access = JSON.parse(JSON.stringify(data)).accessToken;
        localStorage.setItem('accessToken', access);
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };



  //폰 유효성검사
  const onChangePhone = async (e) => {
    e.preventDefault();
    const phoneRegex = /^\d{3}\d{3,4}\d{4}$/;
    const phoneCurrent = e.target.value;
    setPhone(phoneCurrent);

    if (!phoneRegex.test(phoneCurrent)) {
      setPhoneMessage('핸드폰 번호 형식이 올바르지 않습니다!');
      setIsPhone(false);
    } else {
      setPhoneMessage('올바른 핸드폰 번호 형식입니다.');
      setIsPhone(true);
    }
    return phoneRegex.test(phone);
  };


  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          아이디 찾기
        </Modal.Title>
      </Modal.Header>
      <Modal.Body onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="휴대전화('-' 없이 번호만 입력해주세요)"
          className="mb-3"
        >
          <Form.Control variant="standard" type="text" name="phone" value={phone} onClick={(e) => setPhone(e.target.value)} onChange={onChangePhone} />
          {phone.length > 0 && (
            <span className={`message ${isPhone ? 'success' : 'error'}`} style={{ color: isPhone ? 'blue' : 'red' }}> {PhoneMessage} </span>)}
          <div>여기에 이메일 주소 보여주기</div>
        </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="button" onClick={handleSubmit} disabled={!isPhone}>
          Click
        </Button>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Modal_Id;