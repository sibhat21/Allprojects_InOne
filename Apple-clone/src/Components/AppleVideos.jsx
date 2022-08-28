import React, { useEffect, useState } from "react";
// import axios from "axios";
const AppleVideos = () => {
  const [appleDatas, setApple] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&channelId=${process.env.REACT_APP_CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
    )
      .then((response) => response.json())

      .then((data) => {
        const appledata = data.items;
        setApple(appledata);
      })
      .catch(() => console.log("somethings wrong"));
  }, []);

  return (
    <div className="allVidoosWrapper">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="title-wrapper">
              List Videos <br />
            </div>
          </div>
          {appleDatas?.map((data) => {
            let vidId = data.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
              <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumnail">
                    <a href={vidLink} target="_blank">
                      <img src={data.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoDesc">{data.snippet.escription}</div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </div>
  );
};

export default AppleVideos;
