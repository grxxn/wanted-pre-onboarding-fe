import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { BiBookmark } from 'react-icons/bi';

const FeedTxt = ({ reply }) => {
  return (
    <div>
      <div className="feed-content-infobox">
        <div className="feed-content-info-top">
          <ul className="feed-content-res">
            <li>
              <AiOutlineHeart />
            </li>
            <li>
              <FaRegCommentDots />
            </li>
            <li>
              <IoPaperPlaneOutline />
            </li>
          </ul>
          <span className="feed-content-bookmark">
            <BiBookmark />
          </span>
        </div>
        <p className="feed-content-info-mid">
          좋아요 <span>10개</span>
        </p>
        <ul className="feed-reply-list">
          {reply.map((reply) => {
            return (
              <li className="feed-reply" key={reply.replyId}>
                <span className="reply-user">{reply.replyUser}</span>
                <span className="reply-content">{reply.replyContent}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FeedTxt;
