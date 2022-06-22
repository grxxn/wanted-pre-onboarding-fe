import React, { useState, useEffect } from 'react';
import './css/index.css';

import { FiSmile } from 'react-icons/fi';
import { BsThreeDots } from 'react-icons/bs';
import FeedImg from './FeedImg';
import FeedTxt from './FeedTxt';
import LoadingFeed from './LoadingFeed';

const Feed = ({ feed }) => {
  const [replyNum, setReplyNum] = useState(0);
  const [reply, setReply] = useState([]);
  const [replyInput, setReplyInput] = useState({
    replyId: replyNum,
    replyUser: 'grxxn',
    replyContent: '',
  });
  const [imgLoading, setImgLoading] = useState(true);
  const [txtFeed, setTxtFeed] = useState(false);

  const handleReply = (e) => {
    setReplyInput({
      replyId: replyNum,
      replyUser: 'grxxn',
      replyContent: e.target.value,
    });
  };
  const handleReplySubmit = (e) => {
    e.preventDefault();

    let replyArr = [...reply];
    replyArr.push(replyInput);
    setReplyNum((replyNum) => replyNum + 1);
    setReplyInput({
      replyId: replyNum,
      replyUser: 'grxxn',
      replyContent: '',
    });
    setReply(replyArr);
  };

  useEffect(() => {
    imgLoading ? console.log('로딩중') : setTxtFeed(true);
  });

  return (
    <li className="feed">
      <div className="feed-user-box">
        <div className="feed-user-info">
          <div className="feed-user-img"></div>
          <span className="feed-user-id">{feed.userId}</span>
        </div>
        <span className="feed-user-menu">
          <BsThreeDots />
        </span>
      </div>
      <div className="feed-content-box">
        <FeedImg
          src={feed.imgUrl}
          alt={feed.imgAlt}
          setImgLoading={setImgLoading}
        />
        {/* img가 로딩되면 FeedTxt를 보이도록 함 */}
        {txtFeed ? <FeedTxt reply={reply} /> : <LoadingFeed />}
      </div>
      <div className="feed-reply-box">
        <form action="" className="feed-form" onSubmit={handleReplySubmit}>
          <button type="button" className="feed-form-emoji">
            <FiSmile />
          </button>
          <input
            type="text"
            name="reply"
            id="feedReplyInput"
            placeholder="댓글달기..."
            onChange={handleReply}
            value={replyInput.replyContent}
          />
          <button className="feed-form-submit">게시</button>
        </form>
      </div>
    </li>
  );
};

export default Feed;
