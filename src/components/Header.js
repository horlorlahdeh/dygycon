import React from 'react';
import './Assets/index.css';
import './Assets/index.scss';
import LogoLg from './Assets/logo_dygycon_lg.png';
import SplinterlandsLogo from './Assets/splinterlands_logo_fx_400.png';
import Countdown from './Countdown';

const Header = () => {
  return (
    <div className="header-section m0">
      <div className="header-overlay">
        <div className="header-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12 flex flex-column">
                <img
                  src={SplinterlandsLogo}
                  alt="Splinterlands"
                  className="m-auto splinterlands-logo"
                />
                <h2 className="presents-text m-auto">Presents</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="header-image-wrapper flex">
                  <img src={LogoLg} alt="" className="header-image" />
                </div>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-12 flex flex-column">
                <h2 className="next-event-text mb-5">Next Event In March</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 flex">
                <Countdown targetDate="May 22, 2021" targetTime="09:00:00" />
              </div>
            </div>
            <div className="row text-center mt-3">
              <div className="col-md-12">
                <a
                  href="https://app.gamerjibe.com/events/60871cb3f191af9ddb506f6a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn contact1-form-btn goto-link"
                >
                  GOTO EVENT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
