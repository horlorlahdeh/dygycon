import React, { Component, Fragment } from 'react';
import './assets/index.css';

export default class Support extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      toMail: 'carrie@splinterlands.com',
      message: '',
    };
  }
  sendMessage(e) {
    e.preventDefault();
    console.log(this.state);
  }
  handleInputChange(e) {
    e.preventDefault();
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    // const mailAddress = 'mailto:carrie@splinterlands.com'
    return (
      <Fragment>
        <div className='flex full-height'>
          <div className='about-wrapper'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='card main-card mt-5'>
                    <h1 className='text-center color-white text-uppercase'>
                      How To Contact Us
                    </h1>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='mail-carrie'>
                          <div className='mail-carrie-icon'>
                            <img
                              src='data:image/png;base64,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'
                              alt='mail-carrie'
                            />
                          </div>
                          <a
                            href='mailto:carrie@splinterlands.com?subject=INQUIRY ABOUT DYGYCON'
                            className='contact1-form-btn'
                          >
                            Mail Carrie
                          </a>
                        </div>
                        <div className='row'>
                          <div className='col-md-2'></div>
                          <div className='col-md-8'>
                            <div className='container-contact1'>
                              <div className='row'>
                                <div className='col-md-5'>
                                  <p className='contact-link-title'>
                                    General Interest Form:{' '}
                                  </p>
                                </div>
                                <div className='col-md-7'>
                                  <a
                                    className='contact-links'
                                    href=' https://forms.gle/576SZkqGNB9j1oJLA'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                  >
                                    https://forms.gle/576SZkqGNB9j1oJLA
                                  </a>
                                </div>
                              </div>
                              <div className='row'>
                                <div className='col-md-5'>
                                  <p className='contact-link-title'>
                                    Artist Whitelist Application:{' '}
                                  </p>
                                </div>
                                <div className='col-md-7'>
                                  <a
                                    className='contact-links'
                                    href='https://forms.gle/LuAfP6a3sv9N51nm8'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                  >
                                    https://forms.gle/LuAfP6a3sv9N51nm8
                                  </a>
                                </div>
                              </div>
                              <div className='row'>
                                <div className='col-md-5'>
                                  <p className='contact-link-title'>
                                    Sales Team Application:{' '}
                                  </p>
                                </div>
                                <div className='col-md-7'>
                                  <a
                                    className='contact-links'
                                    href='https://forms.gle/KqPiMqHL6AoE3DMC7'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                  >
                                    https://forms.gle/KqPiMqHL6AoE3DMC7
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-2'></div>
                        </div>
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
