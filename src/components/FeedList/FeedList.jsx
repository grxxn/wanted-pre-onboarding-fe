import React, { useEffect, useState } from 'react';
import Feed from '../Feed/Feed';
import './css/index.css';

const FeedList = () => {
  const [feedData, setFeedData] = useState([]);

  // fetch를 이용한 data 요청
  useEffect(() => {
    (async () => {
      await fetch('./data/feedData.json')
        .then((response) => response.json())
        .then((data) => setFeedData(data))
        .catch((error) => console.log('error: ' + error));
    })();
  }, []);

  return (
    <div className="feed-list-container">
      <ul className="feed-list">
        {feedData.map((feed) => {
          return <Feed key={feed.postId} feed={feed} />;
        })}
      </ul>
    </div>
  );
};

export default FeedList;
