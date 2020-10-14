import React, { Component, Fragment } from 'react';
import NavBar from '../../components/NavBar';
import './assets/index.css';

export default class About extends Component {
  render() {
    return (
      <Fragment>
        {/* <NavBar /> */}
        <div className='flex full-height'>
          <div className='about-us-wrapper'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='card my-about-card mt-5'>
                    <h1 className='text-center color-white text-uppercase'>
                      About Us
                    </h1>
                    <p className='about-text text-center'>
                      Dygycon is hosted by the Splinterlands team. Splinterlands
                      is the most widely used game in the blockchain space, and
                      often the most or one of the most used Dapps in the space.
                      We're reaching out to the rest of the crypto community to
                      share our audience, help the space grow, and give you a
                      forum to present your products and services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
