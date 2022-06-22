import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import './css/index.css';
import { MdHomeFilled } from 'react-icons/md';
import { IoPaperPlaneOutline } from 'react-icons/io5';

const Gnb = () => {
  let navigate = useNavigate();
  const logoutFnc = () => {
    // 로그아웃 함수
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPw');
    // 로그인 페이지로 이동
    navigate('/');
  };
  return (
    <div className="gnb">
      <div className="wrap">
        <h1 className="gnb-title">
          <Link to="/home">Instagram</Link>
        </h1>
        <input type="text" className="gnb-search-input" placeholder="검색" />
        <ul className="util-list">
          <li>
            <Link to="/home">
              <MdHomeFilled className="util-icon" />
            </Link>
          </li>
          <li>
            <Link to="/home">
              <IoPaperPlaneOutline className="util-icon" />
            </Link>
          </li>
          <li onClick={logoutFnc}>logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Gnb;
