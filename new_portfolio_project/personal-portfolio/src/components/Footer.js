import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import emailIcon from "../assets/img/email.png"; // 你的 Email 图标
import phoneIcon from "../assets/img/phone.png"; // 你的 Phone 图标
import wechatIcon from "../assets/img/wechat.png"; // 你的 WeChat 图标
import locationIcon from "../assets/img/location.png"; // 你的 Location 图标

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* 左侧 Logo */}
          <Col sm={4} className="text-center text-sm-start">
            <img src={logo} alt="Logo" className="footer-logo" />
          </Col>

          {/* 中间的联系方式（两列排列） */}
          <Col sm={4} className="contact-info">
            <Row className="gx-5"> {/* 使用 Bootstrap 自动间距 */}
              {/* 左列 */}
              <Col xs={6} sm={6} className="contact-column">
                <div className="contact-item">
                  <img src={emailIcon} alt="Email" className="contact-icon" />
                  <div>
                    <strong>Email</strong>
                    <p>huang@rin.contact</p>
                  </div>
                </div>
                <div className="contact-item">
                  <img src={phoneIcon} alt="Phone" className="contact-icon" />
                  <div>
                    <strong>Phone</strong>
                    <p>+61 450 270 703</p>
                  </div>
                </div>
              </Col>

              {/* 右列 */}
              <Col xs={6} sm={6} className="contact-column">
                <div className="contact-item">
                  <img src={wechatIcon} alt="WeChat" className="contact-icon" />
                  <div>
                    <strong>WeChat</strong>
                    <p>+86 138 8533 0703</p>
                  </div>
                </div>
                <div className="contact-item">
                  <img src={locationIcon} alt="Location" className="contact-icon" />
                  <div>
                    <strong>Location</strong>
                    <p>Melbourne</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>


          {/* 右侧社交媒体 */}
          <Col sm={4} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/huiming-zhang-henry/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/Henryzhm" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/henryzhmz/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};