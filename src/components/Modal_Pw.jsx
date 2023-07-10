import React, { useState } from 'react'
import {Modal, Button, FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Modal_Pw = ({show, onHide}) => {
      
      //이메일
      const [email, setEmail] = useState('');
      //휴대전화
      const [phone, setPhone] = useState('');

      //오류메세지 상태저장
      const [emailMessage, setEmailMessage] = useState('');
      const [PhoneMessage, setPhoneMessage] = useState('');

      //유효성검사
      const [isEmail, setIsEmail] = useState(false);
      const [isPhone, setIsPhone] = useState(false);

      const handleSubmit = async (event) => {
        try{
          const response = await fetch('http://localhost:8080/member/exist',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({email, phone}),
          });
          if(response.status == 404){
            alert("이메일 또는 전화번호가 일치하지 않습니다.");
          }
          else if (response.ok) {
            const data = await response.json();
            const access = JSON.parse(JSON.stringify(data)).accessToken;
            localStorage.setItem('accessToken', access);
            window.location.href = "/";
          }
        }catch (error){
          console.log(error);
        }
      };
      
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
    
          //폰 유효성검사
          const onChangePhone = async(e) => {
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
          };

    
    // SearchPw 페이지로 이동하려면 경로를 수정하세요.
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/search_pw');
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
      <Modal.Body onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="이메일 주소"
          className="mb-3"
        >
          <Form.Control variant="standard" type="email" name="email" value={email} onClick={(e) => setEmail(e.target.value)} onChange={onChangeEmail} />
          {email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`} style={{color: isEmail? 'blue' : 'red'}}>{emailMessage}</span>}
          </FloatingLabel>

          <FloatingLabel
          controlId="floatingInput"
          label="휴대전화('-' 없이 번호만 입력해주세요)"
          className="mb-3"
        >
          <Form.Control variant="standard" type="text" name="phone" value={phone} onClick={(e) => setPhone(e.target.value)} onChange={onChangePhone} />
          {phone.length > 0 && (
          <span className={`message ${isPhone ? 'success' : 'error'}`} style={{ color: isPhone? 'blue' : 'red' }}> {PhoneMessage} </span>)}
        </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="button" onClick={handleClick} disabled={!email && !phone}>
          Click
        </Button>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Modal_Pw;