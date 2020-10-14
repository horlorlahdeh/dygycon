import React, { Component, Fragment } from 'react';
import './assets/index.css';

export default class Faq extends Component {
  render() {
    // const handleClick = (e) => {
    //   document.getElementsByClassName('faq-content').style.display = 'none';
    //   document.getElementById('faq' + e + 'Content').style.display = 'block';
    // };
    return (
      <Fragment>
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
                                // onClick={handleClick}
                                className='faq-item1 faq-items'
                                type='button'
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
                                center. Mini-events and activities hosted by our
                                sponsors and partners all month will lead up to
                                the live event.
                              </div>
                            </div>
                            <li style={{ padding: '0' }}>
                              <a
                                href='#faq2'
                                // onClick={handleClick}
                                className='faq-item2 faq-items'
                                type='button'
                                data-toggle='collapse'
                                data-target='#collapseTwo'
                                aria-expanded='true'
                                aria-controls='collapseTwo'
                              >
                                What is the DYGYCON Expo?
                              </a>
                            </li>
                            <div
                              id='collapseTwo'
                              class='collapse'
                              aria-labelledby='headingTwo'
                              data-parent='#accordionExample'
                            >
                              <div class='card-body light-gray-bg'>
                                DYGYCON is a monthly virtual event that takes
                                place in the DYGYCON Expo virtual conference
                                center. Mini-events and activities hosted by our
                                sponsors and partners all month will lead up to
                                the live event.
                              </div>
                            </div>
                            <li style={{ padding: '0' }}>
                              <a
                                href='#faq3'
                                // onClick={handleClick}
                                className='faq-item3 faq-items'
                                type='button'
                                data-toggle='collapse'
                                data-target='#collapseThree'
                                aria-expanded='true'
                                aria-controls='collapseThree'
                              >
                                What are the Technical Requirements to Attend?
                              </a>
                            </li>
                            <div
                              id='collapseThree'
                              class='collapse'
                              aria-labelledby='headingThree'
                              data-parent='#accordionExample'
                            >
                              <div class='card-body light-gray-bg'>
                                Attending the virtual event is easy with any
                                standard PC browser as long as you have a good
                                internet connection. Mobile is not available at
                                this time, but plans are being made for future
                                mobile integration.
                              </div>
                            </div>
                            <li style={{ padding: '0' }}>
                              <a
                                href='#faq4'
                                // onClick={handleClick}
                                className='faq-item4 faq-items'
                                type='button'
                                data-toggle='collapse'
                                data-target='#collapseFour'
                                aria-expanded='true'
                                aria-controls='collapseFour'
                              >
                                When is DYGYCON?
                              </a>
                            </li>
                            <div
                              id='collapseFour'
                              class='collapse'
                              aria-labelledby='headingFour'
                              data-parent='#accordionExample'
                            >
                              <div class='card-body light-gray-bg'>
                                While the DYGYCON Expo is open 24/7 (except for
                                TBD dark times), the DYGYCON event will always
                                take place on the last Saturday of the month.
                              </div>
                            </div>
                            <li style={{ padding: '0' }}>
                              <a
                                href='#faq4'
                                // onClick={handleClick}
                                className='faq-item4 faq-items'
                                type='button'
                                data-toggle='collapse'
                                data-target='#collapseFive'
                                aria-expanded='true'
                                aria-controls='collapseFive'
                              >
                                What Kind of Companies Support DYGYCON?
                              </a>
                            </li>
                            <div
                              id='collapseFive'
                              class='collapse'
                              aria-labelledby='headingFive'
                              data-parent='#accordionExample'
                            >
                              <div class='card-body light-gray-bg'>
                                DYGYCON is a monthly virtual event that takes
                                place in the DYGYCON Expo virtual conference
                                center. Mini-events and activities hosted by our
                                sponsors and partners all month will lead up to
                                the live event.
                              </div>
                            </div>
                            <li style={{ padding: '0' }}>
                              <a
                                href='#faq4'
                                // onClick={handleClick}
                                className='faq-item4 faq-items'
                                type='button'
                                data-toggle='collapse'
                                data-target='#collapseSix'
                                aria-expanded='true'
                                aria-controls='collapseSix'
                              >
                                How Many People will Be There?
                              </a>
                            </li>
                            <div
                              id='collapseSix'
                              class='collapse'
                              aria-labelledby='headingSix'
                              data-parent='#accordionExample'
                            >
                              <div class='card-body light-gray-bg'>
                                The DYGYCON Expo is limited (in its current
                                form) to 500 concurrent guests. Throughout the
                                2-hour event, as many as 2 or 3 thousand guests
                                could attend.
                              </div>
                            </div>
                            <li style={{ padding: '0' }}>
                              <a
                                href='#faq4'
                                // onClick={handleClick}
                                className='faq-item4 faq-items'
                                type='button'
                                data-toggle='collapse'
                                data-target='#collapseSeven'
                                aria-expanded='true'
                                aria-controls='collapseSeven'
                              >
                                What Makes DYGYCON Different?
                              </a>
                            </li>
                            <div
                              id='collapseSeven'
                              class='collapse'
                              aria-labelledby='headingSeven'
                              data-parent='#accordionExample'
                            >
                              <div class='card-body light-gray-bg'>
                                DYGYCON will remind you of the old days, when
                                events were in person. We merge the quaint charm
                                of business cards and rolodexes with the cutting
                                edge convenience of virtual presentations,
                                giving you the best of the conference
                                experience.
                              </div>
                            </div>
                          </ul>
                        </div>
                        <div className='col-md-6'>
                          <ul className='faq-tabs-btns'>
                            <li style={{ padding: '0' }}>
                              <a
                                href='#faq4'
                                // onClick={handleClick}
                                className='faq-item4 faq-items'
                                type='button'
                                data-toggle='collapse'
                                data-target='#collapseEight'
                                aria-expanded='true'
                                aria-controls='collapseEight'
                              >
                                Why is Splinterlands Hosting DYGYCON?
                              </a>
                            </li>
                            <div
                              id='collapseEight'
                              class='collapse'
                              aria-labelledby='headingEight'
                              data-parent='#accordionExample'
                            >
                              <div class='card-body light-gray-bg'>
                                One of Splinterlands’ chief goals has always
                                been to be the first blockchain game to reach
                                mass adoption. While we are on track to
                                accomplish this, we have added a new mission: To
                                facilitate, create and enhance connections in
                                the blockchain space. Each day as Splinterlands
                                grows, so does our potential to help others
                                achieve the same goals. We are all stronger
                                together.
                              </div>
                            </div>
                            <li style={{ padding: '0' }}>
                              <a
                                href='#faq4'
                                // onClick={handleClick}
                                className='faq-item4 faq-items'
                                type='button'
                                data-toggle='collapse'
                                data-target='#collapseNine'
                                aria-expanded='true'
                                aria-controls='collapseNine'
                              >
                                Who Do I Contact with Questions?
                              </a>
                            </li>
                            <div
                              id='collapseNine'
                              class='collapse'
                              aria-labelledby='headingNine'
                              data-parent='#accordionExample'
                            >
                              <div class='card-body light-gray-bg'>
                                <a href='mailto:carrie@splinterlands.com'>
                                  Carrie Allen
                                </a>{' '}
                                (Splinterlands’ Marketing Director) is the main
                                organizer of DYGYCON. She will have the answers
                                (or get them) to all your questions.
                              </div>
                            </div>
                            <li style={{ padding: '0' }}>
                              <a
                                href='#faq4'
                                // onClick={handleClick}
                                className='faq-item4 faq-items'
                                type='button'
                                data-toggle='collapse'
                                data-target='#collapseTen'
                                aria-expanded='true'
                                aria-controls='collapseTen'
                              >
                                Can I Support Without Extra Money?
                              </a>
                            </li>
                            <div
                              id='collapseTen'
                              class='collapse'
                              aria-labelledby='headingTen'
                              data-parent='#accordionExample'
                            >
                              <div class='card-body light-gray-bg'>
                                Please feel free to reach out to us if you would
                                like to be involved with DYGYCON in any way, or
                                apply for a free High-Top Conversation Table at
                                this link:{' '}
                                <a
                                  href='https://forms.gle/V8XMR3fQjfDhQYxL7'
                                  target='_blank'
                                  rel='noopener noreferrer'
                                >
                                  https://forms.gle/V8XMR3fQjfDhQYxL7
                                </a>
                              </div>
                            </div>
                            <li style={{ padding: '0' }}>
                              <a
                                href='#faq4'
                                // onClick={handleClick}
                                className='faq-item4 faq-items'
                                type='button'
                                data-toggle='collapse'
                                data-target='#collapseEleven'
                                aria-expanded='true'
                                aria-controls='collapseEleven'
                              >
                                Will There be Free Stuff?
                              </a>
                            </li>
                            <div
                              id='collapseEleven'
                              class='collapse'
                              aria-labelledby='headingEleven'
                              data-parent='#accordionExample'
                            >
                              <div class='card-body light-gray-bg'>
                                Absolutely there will. There will be goodie bags
                                for those who spawn in the DYGYCON space during
                                the event, as well as NFT swag bags and spawn
                                prizes! Space will fill quickly, so arrive
                                early!
                              </div>
                            </div>
                            <li style={{ padding: '0' }}>
                              <a
                                href='#faq4'
                                // onClick={handleClick}
                                className='faq-item4 faq-items'
                                type='button'
                                data-toggle='collapse'
                                data-target='#collapseTwelve'
                                aria-expanded='true'
                                aria-controls='collapseTwelve'
                              >
                                Will There be Investors?
                              </a>
                            </li>
                            <div
                              id='collapseTwelve'
                              class='collapse'
                              aria-labelledby='headingTwelve'
                              data-parent='#accordionExample'
                            >
                              <div class='card-body light-gray-bg'>
                                Yes. One of Splinterlands’ oldest Partners is
                                the Blockchain Founders’ Fund
                                <a
                                  href='https://blockchainff.com/'
                                  target='_blank'
                                  rel='noopener noreferrer'
                                >
                                  {' '}
                                  (https://blockchainff.com/)
                                </a>
                                , who in addition to their own fund, has
                                connections to a wide variety of venture
                                capitalists in the industry.
                              </div>
                            </div>
                            <li style={{ padding: '0' }}>
                              <a
                                href='#faq4'
                                // onClick={handleClick}
                                className='faq-item4 faq-items'
                                type='button'
                                data-toggle='collapse'
                                data-target='#collapseThirteen'
                                aria-expanded='true'
                                aria-controls='collapseThirteen'
                              >
                                Will There be Celebrity Headliners?
                              </a>
                            </li>
                            <div
                              id='collapseThirteen'
                              class='collapse'
                              aria-labelledby='headingThirteen'
                              data-parent='#accordionExample'
                            >
                              <div class='card-body light-gray-bg'>
                                Initially, DYGYCON stage time will be given to
                                the most supportive Partners and Sponsors of the
                                event. Once DYGYCON is fully established and has
                                a larger community of its own, we will be able
                                to invite crowd-gathering names who will be
                                happy to participate.
                              </div>
                            </div>
                            <li style={{ padding: '0' }}>
                              <a
                                href='#faq4'
                                // onClick={handleClick}
                                className='faq-item4 faq-items'
                                type='button'
                                data-toggle='collapse'
                                data-target='#collapseFourteen'
                                aria-expanded='true'
                                aria-controls='collapseFourteen'
                              >
                                Can I Display or Auction my NFT ART?
                              </a>
                            </li>
                            <div
                              id='collapseFourteen'
                              class='collapse'
                              aria-labelledby='headingFourteen'
                              data-parent='#accordionExample'
                            >
                              <div class='card-body light-gray-bg'>
                                Art will always be an important part of DYGYCON.
                                Each event will have an art auction, as well as
                                dozens of community art pieces displayed on a
                                walking tour. Technical capabilities (in terms
                                of display) may be limited at the inaugural
                                event. If you would like to submit art, please
                                fill out this form
                                <a href='https://forms.gle/LuAfP6a3sv9N51nm8'>
                                  (https://forms.gle/LuAfP6a3sv9N51nm8)
                                </a>
                                .
                              </div>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <div
                    class='accordion'
                    id='accordionExample'
                    style={{ display: 'none' }}
                  ></div>
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
