import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/index.css';

const Login = () => {
  const navigation = useNavigate();
  const [emailValue, setEmailValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [emailVd, setEmailVd] = useState(false);
  const [pwVd, setPwVd] = useState(false);
  const [emailInputStyle, setEmailInputStyle] = useState('login-email-input');
  const [pwInputStyle, setPwInputStyle] = useState('login-pw-input');
  const [submitStyle, setSubmitStyle] = useState('login-submit-btn');
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // user의 로그인 정보가 담긴 파일을 불러옴
    fetch('./data/userData.json')
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage에 email과 pw를 저장
    localStorage.setItem('userEmail', JSON.stringify(emailValue));
    localStorage.setItem('userPw', JSON.stringify(pwValue));

    // 입력한 email와 pw가 userData에 담긴 정보와 일치하면 페이지 이동
    let emailAccord = userData.some((data) => {
      return data.id === emailValue;
    });
    let pwAccord = userData.some((data) => {
      return data.pw === pwValue;
    });
    emailAccord && pwAccord
      ? navigation('/home')
      : alert('아이디와 비밀번호가 일치하지 않습니다.');
  };

  const validation = {
    // 유효성 검사 관련 함수를 객체로 저장
    emailValidation: () => {
      const emailReg = /\w+@\w+\.\w+(\.\w+)?/;
      if (emailReg.test(emailValue)) {
        // 형식 일치하면 emailVd에 true 저장
        setEmailVd(true);
        setEmailInputStyle('login-email-input');
      } else {
        // false 저장 & border color => red
        setEmailVd(false);
        setEmailInputStyle('login-email-input false');
      }
      // 두 함수가 모두 true를 리턴하면 로그인버튼 색상 변경 (on class 추가)
      setSubmitStyle(
        emailVd && pwVd ? 'login-submit-btn on' : 'login-submit-btn'
      );
    },
    pwValidation: () => {
      const pwReg =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{7,}$/;
      if (pwReg.test(pwValue)) {
        // 형식 일치하면 pwVd에 true 저장
        setPwVd(true);
        setPwInputStyle('login-pw-input');
      } else {
        // false 저장 & border color => red
        setPwVd(false);
        setPwInputStyle('login-pw-input false');
      }
      // 두 함수가 모두 true를 리턴하면 로그인버튼 색상 변경 (on class 추가)
      setSubmitStyle(
        emailVd && pwVd ? 'login-submit-btn on' : 'login-submit-btn'
      );
    },
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-box-title">Instagram</h1>
        <form
          action=""
          method="POST"
          className="login-form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="userEmail" className="blind">
            이메일 입력
          </label>
          <input
            type="text"
            name="userEmail"
            id="userEmail"
            placeholder="이메일"
            value={emailValue}
            className={emailInputStyle}
            onChange={(e) => {
              setEmailValue(e.target.value);
              validation.emailValidation();
            }}
          />
          <label htmlFor="userPw" className="blind">
            비밀번호 입력
          </label>
          <input
            type="password"
            name="userPw"
            id="userPw"
            placeholder="비밀번호"
            value={pwValue}
            className={pwInputStyle}
            onChange={(e) => {
              setPwValue(e.target.value);
              validation.pwValidation();
            }}
          />
          <button className={submitStyle}>로그인</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
