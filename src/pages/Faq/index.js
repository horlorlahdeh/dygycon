import React, { Component, Fragment } from 'react';
import NavBar from '../../components/NavBar';
import './assets/index.css';

export default class Faq extends Component {
  render() {
    const handleClick = (e) => {
      document.getElementsByClassName('faq-content').style.display = 'none';
      document.getElementById('faq' + e + 'Content').style.display = 'block';
    };
    return (
      <Fragment>
        {/* <NavBar /> */}
        {/* <div className='flex full-height'> */}
          <div className='about-wrapper'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='card my-card mt-5'>
                    <h1 className='text-center color-white text-uppercase'>
                      FAQ
                    </h1>
                    <p className='about-text text-center'>
                      Below are questions you may have about Dygycon
                    </p>

                    <section id='faq-section'>
                      <div className='faq-tabs' style={{ width: '100%' }}>
                        <div className='row'>
                          <div className='col-md-6'>
                            <ul className='faq-tabs-btns'>
                              <li style={{ padding: '0' }}>
                                <a
                                  href='#faq1'
                                  onClick={this.handleClick}
                                  className='faq-item1 faq-items'
                                  ype='button'
                                  data-toggle='collapse'
                                  data-target='#collapseOne'
                                  aria-expanded='true'
                                  aria-controls='collapseOne'
                                >
                                  What is DYGYCON?
                                </a>
                              </li>
                              <div
                                id='collapseOne'
                                class='collapse show'
                                aria-labelledby='headingOne'
                                data-parent='#accordionExample'
                              >
                                <div class='card-body light-gray-bg'>
                                  DYGYCON is a monthly virtual event that takes
                                  place in the DYGYCON Expo virtual conference
                                  center. Mini-events and activities hosted by
                                  our sponsors and partners all month will lead
                                  up to the live event.
                                </div>
                              </div>
                              <li style={{ padding: '0' }}>
                                <a
                                  href='#faq2'
                                  onClick={this.handleClick}
                                  className='faq-item2 faq-items'
                                >
                                  What is the DYGYCON Expo?
                                </a>
                              </li>
                              <li style={{ padding: '0' }}>
                                <a
                                  href='#faq3'
                                  onClick={this.handleClick}
                                  className='faq-item3 faq-items'
                                >
                                  What are the Technical Requirements to Attend?
                                </a>
                              </li>
                              <li style={{ padding: '0' }}>
                                <a
                                  href='#faq4'
                                  onClick={this.handleClick}
                                  className='faq-item4 faq-items'
                                >
                                  When is DYGYCON?
                                </a>
                              </li>
                              <li style={{ padding: '0' }}>
                                <a
                                  href='#faq4'
                                  onClick={this.handleClick}
                                  className='faq-item4 faq-items'
                                >
                                  What Kind of Companies Support DYGYCON?
                                </a>
                              </li>
                              <li style={{ padding: '0' }}>
                                <a
                                  href='#faq4'
                                  onClick={this.handleClick}
                                  className='faq-item4 faq-items'
                                >
                                  How Many People will Be There?
                                </a>
                              </li>
                              <li style={{ padding: '0' }}>
                                <a
                                  href='#faq4'
                                  onClick={this.handleClick}
                                  className='faq-item4 faq-items'
                                >
                                  What Makes DYGYCON Different?
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className='col-md-6'>
                            <ul className='faq-tabs-btns'>
                              <li style={{ padding: '0' }}>
                                <a
                                  href='#faq4'
                                  onClick={this.handleClick}
                                  className='faq-item4 faq-items'
                                >
                                  Why is Splinterlands Hosting DYGYCON?
                                </a>
                              </li>
                              <li style={{ padding: '0' }}>
                                <a
                                  href='#faq4'
                                  onClick={this.handleClick}
                                  className='faq-item4 faq-items'
                                >
                                  Who Do I Contact with Questions?
                                </a>
                              </li>
                              <li style={{ padding: '0' }}>
                                <a
                                  href='#faq4'
                                  onClick={this.handleClick}
                                  className='faq-item4 faq-items'
                                >
                                  Can I Support Without Extra Money?
                                </a>
                              </li>
                              <li style={{ padding: '0' }}>
                                <a
                                  href='#faq4'
                                  onClick={this.handleClick}
                                  className='faq-item4 faq-items'
                                >
                                  Will There be Free Stuff?
                                </a>
                              </li>
                              <li style={{ padding: '0' }}>
                                <a
                                  href='#faq4'
                                  onClick={this.handleClick}
                                  className='faq-item4 faq-items'
                                >
                                  Will There be Investors?
                                </a>
                              </li>
                              <li style={{ padding: '0' }}>
                                <a
                                  href='#faq4'
                                  onClick={this.handleClick}
                                  className='faq-item4 faq-items'
                                >
                                  Will There be Celebrity Headliners?
                                </a>
                              </li>
                              <li style={{ padding: '0' }}>
                                <a
                                  href='#faq4'
                                  onClick={this.handleClick}
                                  className='faq-item4 faq-items'
                                >
                                  Can I Display or Auction my NFT ART?
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                       </div>
                    </section>

                    <div class='accordion' id='accordionExample' style={{display: 'none'}}>
                      <div class='card'>
                        <div class='card-header' id='headingOne'>
                          <h2 class='mb-0'>
                            <button
                              class='btn btn-link btn-block text-left'
                              type='button'
                              data-toggle='collapse'
                              data-target='#collapseOne'
                              aria-expanded='true'
                              aria-controls='collapseOne'
                            >
                              Collapsible Group Item #1
                            </button>
                          </h2>
                        </div>

                        <div
                          id='collapseOne'
                          class='collapse show'
                          aria-labelledby='headingOne'
                          data-parent='#accordionExample'
                        >
                          <div class='card-body'>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </div>
                        </div>
                      </div>
                      <div class='card'>
                        <div class='card-header' id='headingTwo'>
                          <h2 class='mb-0'>
                            <button
                              class='btn btn-link btn-block text-left collapsed'
                              type='button'
                              data-toggle='collapse'
                              data-target='#collapseTwo'
                              aria-expanded='false'
                              aria-controls='collapseTwo'
                            >
                              Collapsible Group Item #2
                            </button>
                          </h2>
                        </div>
                        <div
                          id='collapseTwo'
                          class='collapse'
                          aria-labelledby='headingTwo'
                          data-parent='#accordionExample'
                        >
                          <div class='card-body'>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </div>
                        </div>
                      </div>
                      <div class='card'>
                        <div class='card-header' id='headingThree'>
                          <h2 class='mb-0'>
                            <button
                              class='btn btn-link btn-block text-left collapsed'
                              type='button'
                              data-toggle='collapse'
                              data-target='#collapseThree'
                              aria-expanded='false'
                              aria-controls='collapseThree'
                            >
                              Collapsible Group Item #3
                            </button>
                          </h2>
                        </div>
                        <div
                          id='collapseThree'
                          class='collapse'
                          aria-labelledby='headingThree'
                          data-parent='#accordionExample'
                        >
                          <div class='card-body'>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </Fragment>
    );
  }
}
