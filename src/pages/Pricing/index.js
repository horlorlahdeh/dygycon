import React, { Component, Fragment } from 'react';

import './assets/index.css';

export default class Pricing extends Component {
  render() {
    return (
      <Fragment>
        

        <div className='flex full-height hide-lg'>
          <div className='about-wrapper'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='card main-card mt-5'>
                    <h1 className='text-center color-white text-uppercase'>
                      Pricing
                    </h1>
                    <div className='row'>
                      <div className='col-md-3'>
                        <button className='pricing-card'>
                          <section className='m-auto'>
                            <img
                              className='avatar'
                              src='https://www.flaticon.com/svg/static/icons/svg/2000/2000643.svg'
                              alt='Airdrop'
                            />

                            <h6 className='pack-name'>
                              GOLD FOIL LEGENDARY EXCLUSIVE PARTNER
                            </h6>
                            <span className='pack-price'>$30000</span>
                          </section>
                        </button>
                      </div>

                      <div className='col-md-3'>
                        <button className='pricing-card'>
                          <section className='m-auto'>
                            <img
                              className='avatar'
                              src='https://www.flaticon.com/svg/static/icons/svg/636/636197.svg'
                              alt='Airdrop'
                            />

                            <h6 className='pack-name'>DIAMOND LEVEL PARTNER</h6>
                            <span className='pack-price'>$15000</span>
                          </section>
                        </button>
                      </div>

                      <div className='col-md-3'>
                        <button className='pricing-card'>
                          <section className='m-auto'>
                            <img
                              className='avatar'
                              src='https://www.flaticon.com/svg/static/icons/svg/3533/3533543.svg'
                              alt='Airdrop'
                            />

                            <h6 className='pack-name'>GOLD LEVEL PARTNER</h6>
                            <span className='pack-price'>$6000</span>
                          </section>
                        </button>
                      </div>

                      <div className='col-md-3'>
                        <button className='pricing-card'>
                          <section className='m-auto'>
                            <img
                              className='avatar'
                              src='https://www.flaticon.com/svg/static/icons/svg/2502/2502698.svg'
                              alt='Airdrop'
                            />

                            <h6 className='pack-name'>SILVER LEVEL PARTNER</h6>
                            <span className='pack-price'>$3000</span>
                          </section>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex full-height hide-sm'>
          <div className='about-wrapper'>
            <div className='container'>
              <div className='ro'>
                <div className='col-md-12'>
                  <h1 className='text-center color-white text-uppercase'>
                    Pricing
                  </h1>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='card main-card mt-5'>
                    <div className='mini-header'>
                      <h2>12-month Partner Support Levels</h2>
                    </div>
                    <div className='row'>
                      <div className='col-sm-12 text-center'>
                        <button className='pricing-card'>
                          <section className='m-auto mobile-pricing-section'>
                            <img
                              className='avatar'
                              src='https://www.flaticon.com/svg/static/icons/svg/2000/2000643.svg'
                              alt='Airdrop'
                            />
                            <div className='card-details'>
                              <h6 className='pack-name'>
                                GOLD FOIL LEGENDARY EXCLUSIVE PARTNER
                              </h6>
                              <span className='pack-price'>$30000</span>
                            </div>
                          </section>
                        </button>
                      </div>

                      <div className='col-sm-12 text-center'>
                        <button className='pricing-card'>
                          <section className='m-auto mobile-pricing-section'>
                            <img
                              className='avatar'
                              src='https://www.flaticon.com/svg/static/icons/svg/636/636197.svg'
                              alt='Airdrop'
                            />
                            <div className='card-details'>
                              <h6 className='pack-name'>
                                DIAMOND LEVEL PARTNER
                              </h6>
                              <span className='pack-price'>$15000</span>
                            </div>
                          </section>
                        </button>
                      </div>

                      <div className='col-sm-12 text-center'>
                        <button className='pricing-card'>
                          <section className='m-auto mobile-pricing-section'>
                            <img
                              className='avatar'
                              src='https://www.flaticon.com/svg/static/icons/svg/3533/3533543.svg'
                              alt='Airdrop'
                            />

                            <div className='card-details'>
                              <h6 className='pack-name'>GOLD LEVEL PARTNER</h6>
                              <span className='pack-price'>$6000</span>
                            </div>
                          </section>
                        </button>
                      </div>

                      <div className='col-sm-12 text-center'>
                        <button className='pricing-card'>
                          <section className='m-auto mobile-pricing-section'>
                            <img
                              className='avatar'
                              src='https://www.flaticon.com/svg/static/icons/svg/2502/2502698.svg'
                              alt='Airdrop'
                            />
                            <div className='card-details'>
                              <h6 className='pack-name'>
                                SILVER LEVEL PARTNER
                              </h6>
                              <span className='pack-price'>$3000</span>
                            </div>
                          </section>
                        </button>
                      </div>
                    </div>
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
