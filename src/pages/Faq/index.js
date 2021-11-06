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
                                DYGYCON is an ongoing virtual event that takes
                                place in the DYGYCON Expo virtual conference
                                center.
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
                                The Expo is the name of the virtual conference
                                center powered by Gamerjibe.com where DYGYCON is
                                held. Booth holders and sponsors are given the
                                exclusive ability to schedule mini-events in the
                                Expo for their own communities.
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
                                DYGYCON promotes and hosts large live events
                                every two months, or as often as the demand of
                                our sponsors dictates. To be sure that you do
                                not miss the next DYGYCON event, follow @DYGYCON
                                on Twitter, check DYGYCON.com regularly for the
                                countdown and subscribe to our mailing list at
                                (link).
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
                                DYGYCON was built for anyone looking to make
                                solid connections and good relationships in the
                                blockchain space, which is notorious for
                                tribalism and lots of noise. If you support us,
                                your success in making these connections will
                                become part of our mission at DYGYCON.
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
                                event, as many as 2 or 3 thousand guests could
                                attend.
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
                                of business cards, name tags and rolodexes with
                                the cutting edge convenience of modern
                                conference calls and virtual presentations,
                                giving you the very best of the 21st century
                                conference experience.
                              </div>
                            </div>
                            <li style={{ padding: '0' }}>
                              <a
                                href='#faq4'
                                // onClick={handleClick}
                                className='faq-item4 faq-items'
                                type='button'
                                data-toggle='collapse'
                                data-target='#collapseSeventeen'
                                aria-expanded='true'
                                aria-controls='collapseSeventeen'
                              >
                                Can I Give Away NFTs?
                              </a>
                            </li>
                            <div
                              id='collapseSeventeen'
                              class='collapse'
                              aria-labelledby='headingSeventeen'
                              data-parent='#accordionExample'
                            >
                              <div class='card-body light-gray-bg'>
                                Of course! Even if you do not with to purchase a
                                booth or table sponsorship (which is highly
                                recommended), you can offer NFTs to be
                                distributed to our guests through the DYGYCON
                                SWAG booth. This is an excellent way to get new
                                attention to your NFT project, regardless of
                                genre, blockchain or utility.
                              </div>
                            </div>
                            <li style={{ padding: '0' }}>
                              <a
                                href='#faq4'
                                // onClick={handleClick}
                                className='faq-item4 faq-items'
                                type='button'
                                data-toggle='collapse'
                                data-target='#collapseEighteen'
                                aria-expanded='true'
                                aria-controls='collapseEighteen'
                              >
                                What Blockchains do DYGYCON Support?
                              </a>
                            </li>
                            <div
                              id='collapseEighteen'
                              class='collapse'
                              aria-labelledby='headingEighteen'
                              data-parent='#accordionExample'
                            >
                              <div class='card-body light-gray-bg'>
                                Our main blockchains of focus are HIVE (where
                                Splinterlands lives), WAX and Ethereum, because
                                the majority of our communities transact with
                                them, but we are always open to learning about
                                and integrating different blockchains into our
                                routines. Here are some of the other cryptos we
                                support, each connected to strong communities
                                that we have befriended.
                                <ul className='blockchains'>
                                  <li className='supported-blockchain'>
                                    - ENJ
                                  </li>
                                  <li className='supported-blockchain'>
                                    - ARK
                                  </li>
                                  <li className='supported-blockchain'>
                                    - GALA
                                  </li>
                                  <li className='supported-blockchain'>
                                    - ENT
                                  </li>
                                  <li className='supported-blockchain'>
                                    - GAME
                                  </li>
                                  <li className='supported-blockchain'>
                                    - STEEM
                                  </li>
                                  <li className='supported-blockchain'>
                                    - TRX
                                  </li>
                                  <li className='supported-blockchain'>
                                    - LTC
                                  </li>
                                  <li className='supported-blockchain'>
                                    - DAI
                                  </li>
                                  <li className='supported-blockchain'>
                                    - EOS
                                  </li>
                                  <li className='supported-blockchain'>
                                    - BAT
                                  </li>
                                  <li className='supported-blockchain'>
                                    - SAND
                                  </li>
                                  <li className='supported-blockchain'>
                                    - KCS
                                  </li>
                                </ul>
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
                                grows, so does our potential to help others with
                                similar missions to achieve the same goals. We
                                are all stronger together.
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
                                Email {' '}
                                <a href='mailto:sarah@splinterlands.com'>
                                  Sarah Nguyen
                                </a>{' '}
                                (DYGYCON Event Coordinator) is the main
                                organizer of DYGYCON. She will have the answers
                                to all your questions.
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
                                Please feel free to{' '}
                                <a href='mailto:sarah@splinterlands.com'>
                                  reach out to us
                                </a>{' '}
                                if you would like to be involved with DYGYCON in
                                any way.
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
                                Absolutely there will. There will be all sorts
                                of goodies for those who spawn in the DYGYCON
                                space during the event, as well as NFT swag bags
                                and spawn prizes! Space will fill quickly, so
                                arrive early!
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
                                the Blockchain Founders’ Fund{' '}
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
                                capitalists in the industry. They are only one
                                of the many investment communities whose
                                attention Splinterlands has captured in the
                                course of their success.
                              </div>
                            </div>
                            {/* <li style={{ padding: '0' }}>
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
                                Initially, DYGYCON stage time will be reserved
                                to the most supportive partners and sponsors of
                                the event, and additional time will be sold.
                                Once DYGYCON is fully established and has a
                                larger community of its own, we will be able to
                                invite crowd-gathering names and important
                                figures who will then be happy to participate.
                              </div>
                            </div> */}
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
                                Will I Meet People I can Work With?
                              </a>
                            </li>
                            <div
                              id='collapseFourteen'
                              class='collapse'
                              aria-labelledby='headingFourteen'
                              data-parent='#accordionExample'
                            >
                              <div class='card-body light-gray-bg'>
                                This is your responsibility alone. All we can do
                                is assure you they will be there. Like in real
                                life, making the first move will be up to you.
                                It is our hope that through the fun and gamified
                                DYGYCON space, connecting with others in this
                                disconnected world will be easy and enjoyable.
                              </div>
                            </div>
                            {/* <li style={{ padding: '0' }}>
                              <a
                                href='#faq4'
                                // onClick={handleClick}
                                className='faq-item4 faq-items'
                                type='button'
                                data-toggle='collapse'
                                data-target='#collapseSixteen'
                                aria-expanded='true'
                                aria-controls='collapseSixteen'
                              >
                                Can I sell NFTs there?
                              </a>
                            </li>
                            <div
                              id='collapseSixteen'
                              class='collapse'
                              aria-labelledby='headingSixteen'
                              data-parent='#accordionExample'
                            >
                              <div class='card-body light-gray-bg'>
                                One of the most exciting features of DYGYCON for
                                NFT collectors and dealers is the DYGYCON
                                Auction House. It’s a real live auction (the
                                kind with an auctioneer), specializing in
                                in-game assets, collectibles and NFT art. <br />
                                <br /> Do you have something you would like to
                                auction in the Auction House? You decide on the
                                starting bid and increase increments. When the
                                item sells, DYGYCON will facilitate the exchange
                                and take a 20% listing fee from the final sale
                                amount. It’s a fun and easy way to get attention
                                to your NFT items in whale-rich waters.
                              </div>
                            </div> */}
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
