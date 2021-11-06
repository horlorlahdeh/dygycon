import React, { useState } from 'react';
import Header from '../../components/Header';
import './assets/index.css';
import { sponsors } from '../../constants/sponsors';

const Home = () => {
  const [limit, setLimit] = useState(8);
  return (
    <div className='landing-wrapper'>
      <Header />
      <section className='section-wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-header text-center'>
                <h1 className='section-header-text'>What Is Dygycon?</h1>
                <p className='section-header-desc'>
                  DYGYCON is a virtual event that takes place in the DYGYCON
                  Expo virtual conference center. Mini-events and activities
                  hosted by our sponsors and partners all month will lead up to
                  the live event. DYGYCON is an ongoing event brought to you by
                  the creators of Splinterlands, the hit blockchain trading card
                  game in which players really own their cards and play for real
                  money rewards. Thanks to our huge network of good friends,
                  innovative partners and visionary communities found in the
                  course of our years of success, DYGYCON is your chance to make
                  your own life-changing connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-wrapper'>
        <div className='container'>
          <div className='section-header text-center mb-5'>
            <h1 className='section-header-text'>Speakers</h1>
            <p className='section-header-desc'>
              Our speakers are experts and influencers in their various spheres
              of influence.
            </p>
          </div>
          <div className='sponsors-section-cards'>
            <div className='row justify-content-center'>
              <div className='col-md-3'>
                <div className='speaker-card'>
                  <div className='speaker-card-image-1'>
                    {/* <img
                      src='https://cdn.discordapp.com/attachments/606640715564318782/809147575357014126/avatar_aggroed_v2.png'
                      alt='Jesse Reich'
                      className='speaker-img text-center d-block m-auto'
                    /> */}
                  </div>
                  <div className='speaker-card-desc'>
                    <h5 className='speaker-name text-center'>Jesse Reich</h5>
                    <p className='speaker-title text-center'>
                      Co-Founder, SPLINTERLANDS{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='speaker-card'>
                  <div className='speaker-card-image-2'>
                    {/* <img
                      src="https://cdn.discordapp.com/attachments/764174276890722357/841690891658854410/Jason_Brink_headshot.jpg"
                      alt="Jesse Reich"
                      className="speaker-img text-center d-block m-auto"
                    /> */}
                  </div>
                  <div className='speaker-card-desc'>
                    <h5 className='speaker-name text-center'>Jason Brink</h5>
                    <p className='speaker-title text-center'>
                      CMO, GALA GAMES{' '}
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className='col-md-3'>
                <div className='speaker-card'>
                  <div className='speaker-card-image-5'>
                    
                  </div>
                  <div className='speaker-card-desc'>
                    <h5 className='speaker-name text-center'>Hrish Lotlikar</h5>
                    <p className='speaker-title text-center'>
                      Superworld, Co-founder and CEO{' '}
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='speaker-card'>
                  <div className='speaker-card-image-4'>
                    
                  </div>
                  <div className='speaker-card-desc'>
                    <h5 className='speaker-name text-center'>Andrew Prell</h5>
                    <p className='speaker-title text-center'>
                      CEO, Silica neXus{' '}
                    </p>
                  </div>
                </div>
              </div> */}
              <div className='col-md-3'>
                <div className='speaker-card'>
                  <div className='speaker-card-image-5'>
                    {/* <img
                      src='https://cdn.discordapp.com/attachments/764174276890722357/813458188685803560/Adrian_-_womplay.png'
                      alt='Adrian Krion'
                      className='speaker-img text-center d-block m-auto'
                    /> */}
                  </div>
                  <div className='speaker-card-desc'>
                    <h5 className='speaker-name text-center'>Skyler Ramsey</h5>
                    <p className='speaker-title text-center'>CMO, Dogira </p>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='speaker-card'>
                  <div className='speaker-card-image-6'>
                    {/* <img
                      src='https://cdn.discordapp.com/attachments/764174276890722357/813458188685803560/Adrian_-_womplay.png'
                      alt='Adrian Krion'
                      className='speaker-img text-center d-block m-auto'
                    /> */}
                  </div>
                  <div className='speaker-card-desc'>
                    <h5 className='speaker-name text-center'>Adrian Krion</h5>
                    <p className='speaker-title text-center'> Womanplay </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section-wrapper'>
        <div className='container'>
          <div className='section-header text-center mb-5'>
            <h1 className='section-header-text'>Past Sponsors</h1>
            <p className='section-header-desc'>
              We have the backing or a vast array of prominent projects and
              companies in the digital space.
            </p>
          </div>
          <div className='sponsors-section-cards'>
            <div className='row'>
              {sponsors.slice(0, limit).map((sponsor, index) => (
                <div className='col-md-3 sponsor-card-column' style={{display: 'block', margin: 'auto'}} key={index}>
                  <div className='sponsors-card'>
                    <div className='sponsors-card-image'>
                      <img
                        src={sponsor}
                        alt='sponsor'
                        className='sponsors-img text-center d-block m-auto'
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {limit < sponsors.length && (
              <div className='text-center'>
                <button
                  onClick={() => setLimit(limit + 4)}
                  className='m-4 text-center btn  goto-link more-button'
                >
                  see more
                </button>
              </div>
            )}
          </div>
        </div>
        <div className='see-more text-center'>
          <a
            href='mailto:sarah@splinterlands.com?subject=SPONSOR INQUIRY AT DYGYCON'
            target='_blank'
            rel='noopener noreferrer'
            className='m-4 text-center btn contact1-form-btn goto-link'
          >
            Become A Sponsor
          </a>
        </div>
      </section>

      <section className='section-wrappers'>
        <div className='get-started-wrapper'>
          <div className='container'>
            <div className='section-header'>
              <h1 className='section-header-text text-center get-started-header-text'>
                Join the DYGYCON experience
              </h1>
            </div>
            <div className='row'>
              <div className='col-md-2'></div>
              <div className='col-md-8'>
                <form className='text-center'>
                  <div className='mb-3'>
                    {/* <input
                      style={{ fontSize: "18px", textTransform: "capitalize" }}
                      type="email"
                      className="form-control text-center"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="chat with carrie"
                    /> */}
                    <div id='emailHelp' className='form-text hint-text'>
                      <h3 className='m-0'> Get in touch with Sarah</h3>
                    </div>
                  </div>

                  <a
                    href='https://calendly.com/sarah-at-splinterlands'
                    target='_blank'
                    rel='noopener noreferrer'
                    type='submit'
                    className='btn contact1-form-btn'
                  >
                    Get Involved
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='footer-wrapper'>
        <div className='text-center d-flex justify-content-center'>
          <h6>Social Links:</h6>
          <a
            className='px-1'
            href='https://twitter.com/dygycon?ref_src=twsrc%5Etfw'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-twitter'></i>
          </a>
          <span></span>

          <a
            className='px-1'
            href='https://discord.gg/VqAMqxuQDP'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-discord'></i>
          </a>
        </div>
        <div className='text-center border-top pt-2'>
          <h6 className='m-0' style={{ fontSize: '12px' }}>
            &#169; Copyright 2021 Splinterlands All right reserved
          </h6>
        </div>
      </section>
    </div>
  );
};

export default Home;
