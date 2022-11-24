import React from 'react';
import './Home.css';
import {
  FaMotorcycle,
  FaFilter,
  FaGithub,
  FaJs,
  FaReact,
  FaHtml5,
  FaInstagram,
} from 'react-icons/fa';
import video from '../../assets/videos/video.mp4';

export const Home = () => {
  return (
    <section className="home">
      <div className="over"></div>
      <video src={video} type="video/mp4" muted autoPlay loop></video>

      <div className="homebox container">
        <div className="textbox">
          <span className="small">Our Packages</span>
          <p className="home-title">Search Your Shoose</p>
        </div>

        <div className="card">
          <div className="input-city">
            <label htmlFor="city">가고싶은 도시 검색</label>
            <div className="inputbox city">
              <input type="text" placeholder="입력해주세요,,," />
              <FaMotorcycle className="icon" />
            </div>
          </div>

          <div className="input-date">
            <label htmlFor="date">날짜를 선택 해주세요 DATE</label>
            <div className="inputbox">
              <input type="date" />
            </div>
          </div>

          <div className="input-price">
            <div className="total">
              <label htmlFor="price">총가격 :</label>
              <p className="price">$5000</p>
            </div>
            <div className="inputbox">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="option">
            <FaFilter className="icon" />
            <span>MORE CLICK</span>
          </div>
        </div>

        <div className="homeIcon">
          <div className="left-icon">
            <FaHtml5 className="icon" />
            <FaJs className="icon" />
            <FaReact className="icon" />
          </div>
          <div className="right-icon">
            <FaGithub className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

// 35분 25초
