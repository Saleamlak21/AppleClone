import React, { useState, useEffect } from "react";

function YouTubeVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    //AIzaSyB23n_QCPGV1NsrDhrQBNVa220aWrWo-fU

    //AIzaSyBk2kB-ivn9IwbvMmko8fYY4UiatRP-syA
    fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyB23n_QCPGV1NsrDhrQBNVa220aWrWo-fU"
    )
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items);
      });
    // .catch((error) => console.log("There is error"));
  }, []);
  return (
    <div className="youtube">
      <div>
        <div>
          <div className="text-center">
            <h1>
              <b>Leatest videos</b>
            </h1>
          </div>
        </div>
        <div>
          <div className="layout carrosel-container boody">
            {videos.map((singleVideo, i) => {
              let vedioId = singleVideo.id.videoId;
              let vedioLink = `https://www.youtube.com/watch?v=${vedioId}`;
              let contentWarpper = (
                <div key={i} className=" carrosel ">
                    <div className="container">
                  <a
                    // style={{ color: "black", textDecoration: "none" }}
                    href={vedioLink}
                  >
                    <div className="card">
                      <div imgBox>
                        <img
                          className="vImage"
                          src={singleVideo.snippet.thumbnails.high.url}
                        />
                      </div>
                      <div className="content">
                          <h5>{singleVideo.snippet.title}</h5>
                           <p>{singleVideo.snippet.description}</p>
                      </div>
                    </div>   
                  </a>
                  </div>
                </div>
              );
              return contentWarpper;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouTubeVideos;
