import React, { Component, Fragment } from 'react';
import NavBar from '../../components/NavBar';
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
    e.preventDefault()
   console.log(this.state)
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
        {/* <NavBar /> */}
        <div className='flex full-height'>
          <div className='about-wrapper'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='card main-card mt-5'>
                    <h1 className='text-center color-white text-uppercase'>
                      How To Support Us
                    </h1>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='container-contact1'>
                          <form
                            className='contact1-form validate-form'
                            id={this.props.id}
                            name={this.props.name}
                            method='post'
                            action='/'
                          >
                            <div
                              className='wrap-input1 validate-input'
                              data-validate='Name is required'
                            >
                              <input
                                className='input1'
                                type='text'
                                name='name'
                                onChange={this.handleInputChange.bind(this)}
                                value={this.state.name}
                                placeholder='Name'
                              />
                              <span className='shadow-input1'></span>
                            </div>

                            <div
                              className='wrap-input1 validate-input'
                              data-validate='Valid email is required: ex@abc.xyz'
                            >
                              <input
                                className='input1'
                                type='text'
                                name='email'
                                onChange={this.handleInputChange.bind(this)}
                                value={this.state.email}
                                placeholder='Email'
                              />
                              <span className='shadow-input1'></span>
                            </div>

                            <div
                              className='wrap-input1 validate-input'
                              data-validate='Subject is required'
                            >
                              <input
                                className='input1'
                                type='text'
                                name='subject'
                                onChange={this.handleInputChange.bind(this)}
                                value={this.state.subject}
                                placeholder='Subject'
                              />
                              <span className='shadow-input1'></span>
                            </div>

                            <div
                              className='wrap-input1 validate-input'
                              data-validate='Message is required'
                            >
                              <textarea
                                className='input1'
                                name='message'
                                onChange={this.handleInputChange.bind(this)}
                                value={this.state.message}
                                placeholder='Message'
                              ></textarea>
                              <span className='shadow-input1'></span>
                            </div>

                            <div className='container-contact1-form-btn'>
                              <button
                                className='contact1-form-btn'
                                onClick={this.sendMessage.bind(this)}
                                value='Send'
                                type='submit'
                              >
                                <span>
                                  Send Email
                                  <i
                                    className='fa fa-long-arrow-right'
                                    aria-hidden='true'
                                  ></i>
                                </span>
                              </button>
                            </div>
                          </form>
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
