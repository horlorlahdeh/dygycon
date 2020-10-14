import React, { Component, Fragment } from 'react';
import './assets/index.css';

export default class About extends Component {
  render() {
    return (
      <Fragment>
        
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
                      DYGYCON is a new kind of virtual event, hosted by the
                      Splinterlands team and designed to facilitate all the
                      connections that are so urgently needed in this space. The
                      lead innovators of blockchain, NFTs, DeFi, and
                      play-to-earn gaming have accomplished truly incredible
                      things, but they’re busy. Without a networking space in
                      which they can form alliances and collaborate, they all
                      run the risk of being steamrolled by big corporations
                      <br />
                      <br />
                      What’s happening in the blockchain space is nothing short
                      of a revolution that puts ownership and control into the
                      hands of those who deserve it.
                      <br />
                      <br />
                      The decentralization tide is rising. If we all jump in
                      together, it will rise higher and more quickly than we
                      could imagine.
                      <br />
                      <br />
                      If you would like us to reach out to you about Sponsorship
                      and Partnership opportunities, please fill out this form.
                      <br />
                      <br />
                      <a href='https://forms.gle/576SZkqGNB9j1oJLA' target='_blank'>
                        (https://forms.gle/576SZkqGNB9j1oJLA)
                      </a>
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
