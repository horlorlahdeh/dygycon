import React from 'react'
import './Assets/index.css'
import './Assets/index.scss'
import LogoLg from './Assets/logo_dygycon_lg.png'
import SplinterlandsLogo from './Assets/splinterlands_logo_fx_400.png'
import Countdown from './Countdown'

const Header = () => {
    return (
      <div className='header-section m0'>
        <div className='header-overlay'>
          <div className='header-content'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-12 flex flex-column">
                        <img src={SplinterlandsLogo} alt="Splinterlands" className='m-auto splinterlands-logo'/>
                        <h2 className='presents-text m-auto'>Presents</h2>
                    </div>
                </div>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='header-image-wrapper flex'>
                    <img src={LogoLg} alt='' className='header-image' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12 flex'>
                  <Countdown targetDate='Oct 31, 2020' targetTime='18:00:00' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header