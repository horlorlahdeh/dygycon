import React from 'react';
import Header from '../../components/Header';
import './assets/index.css';

const Home = () => {
  return (
    <div className="landing-wrapper">
      <Header />
      <section className="section-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center">
                <h1 className="section-header-text">What Is Dygycon?</h1>
                <p className="section-header-desc">
                  DYGYCON is a virtual event that takes place in the DYGYCON
                  Expo virtual conference center. Mini-events and activities
                  hosted by our sponsors and partners all month will lead up to
                  the live event.
                  <br />
                  <br />
                  <hr />
                  <hr />
                  <br />
                  DYGYCON is an ongoing event brought to you by the creators of
                  Splinterlands, the hit blockchain trading card game in which
                  players really own their cards and play for real money
                  rewards. Thanks to our huge network of good friends,
                  innovative partners and visionary communities found in the
                  course of our years of success, DYGYCON is your chance to make
                  your own life-changing connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-wrapper">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h1 className="section-header-text">Speakers</h1>
            <p className="section-header-desc">
              Our speakers are experts and influencers in their various spheres
              of influence.
            </p>
          </div>
          <div className="sponsors-section-cards">
            <div className="row justify-content-center">
              <div className="col-md-3">
                <div className="speaker-card">
                  <div className="speaker-card-image-1">
                    {/* <img
                      src='https://cdn.discordapp.com/attachments/606640715564318782/809147575357014126/avatar_aggroed_v2.png'
                      alt='Jesse Reich'
                      className='speaker-img text-center d-block m-auto'
                    /> */}
                  </div>
                  <div className="speaker-card-desc">
                    <h5 className="speaker-name text-center">Jesse Reich</h5>
                    <p className="speaker-title text-center">
                      Co-Founder, SPLINTERLANDS{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="speaker-card">
                  <div className="speaker-card-image-2">
                    {/* <img
                      src="https://cdn.discordapp.com/attachments/764174276890722357/841690891658854410/Jason_Brink_headshot.jpg"
                      alt="Jesse Reich"
                      className="speaker-img text-center d-block m-auto"
                    /> */}
                  </div>
                  <div className="speaker-card-desc">
                    <h5 className="speaker-name text-center">Jason Brink</h5>
                    <p className="speaker-title text-center">
                      CMO, GALA GAMES{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="speaker-card">
                  <div className="speaker-card-image-4">
                    {/* <img
                      src='https://cdn.discordapp.com/attachments/764174276890722357/813458188685803560/Adrian_-_womplay.png'
                      alt='Adrian Krion'
                      className='speaker-img text-center d-block m-auto'
                    /> */}
                  </div>
                  <div className="speaker-card-desc">
                    <h5 className="speaker-name text-center">Adrian Krion</h5>
                    <p className="speaker-title text-center">
                      CEO, WOMANPLAY.io{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="speaker-card">
                  <div className="speaker-card-image-5">
                    {/* <img
                      src='https://cdn.discordapp.com/attachments/764174276890722357/813458188685803560/Adrian_-_womplay.png'
                      alt='Adrian Krion'
                      className='speaker-img text-center d-block m-auto'
                    /> */}
                  </div>
                  <div className="speaker-card-desc">
                    <h5 className="speaker-name text-center">
                      Hrish Lotlikar -
                    </h5>
                    <p className="speaker-title text-center">
                      Superworld, Co-founder and CEO{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="see-more text-center">
            <a
              href="https://app.gamerjibe.com/events/601f0a2c6b14638694b62f94"
              target="_blank"
              rel="noopener noreferrer"
              className="m-4 text-center btn contact1-form-btn goto-link"
            >
              View All
            </a>
          </div>
        </div>
      </section>
      <section className="section-wrapper">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h1 className="section-header-text">Our Sponsors</h1>
            <p className="section-header-desc">
              We have the backing or a vast array of prominent projects and
              companies in the digital space.
            </p>
          </div>
          <div className="sponsors-section-cards">
            <div className="row">
              <div className="col-md-3">
                <div className="sponsors-card">
                  <div className="sponsors-card-image">
                    <img
                      src="https://cdn.discordapp.com/attachments/764174276890722357/810189798098468884/Horizontal-Lockup_gala.png"
                      alt="sponsor"
                      className="sponsors-img text-center d-block m-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sponsors-card">
                  <div className="sponsors-card-image">
                    <img
                      src="https://cdn.discordapp.com/attachments/764174276890722357/810190033692393523/brave_black_-_Copy.png"
                      alt="sponsor"
                      className="sponsors-img text-center d-block m-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sponsors-card">
                  <div className="sponsors-card-image">
                    <img
                      src="https://cdn.discordapp.com/attachments/764174276890722357/810190184490336296/blockchain_founders_fund.png"
                      alt="sponsor"
                      className="sponsors-img text-center d-block m-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sponsors-card">
                  <div className="sponsors-card-image">
                    <img
                      src="https://cdn.discordapp.com/attachments/764174276890722357/810190321425186826/sandbox-logo-colour.png"
                      alt="sponsor"
                      className="sponsors-img text-center d-block m-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sponsors-card">
                  <div className="sponsors-card-image">
                    <img
                      src="https://cdn.discordapp.com/attachments/764174276890722357/810190502137299014/2_-_splinterlands_logo_410x200.png"
                      alt="sponsor"
                      className="sponsors-img text-center d-block m-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sponsors-card">
                  <div className="sponsors-card-image">
                    <img
                      src="https://cdn.discordapp.com/attachments/764174276890722357/810190700603506728/hive_engine.png"
                      alt="sponsor"
                      className="sponsors-img text-center d-block m-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sponsors-card">
                  <div className="sponsors-card-image">
                    <img
                      src="https://cdn.discordapp.com/attachments/764174276890722357/810190841062752296/marketsquare.png"
                      alt="sponsor"
                      className="sponsors-img text-center d-block m-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sponsors-card">
                  <div className="sponsors-card-images">
                    <img
                      src="https://cdn.discordapp.com/attachments/764174276890722357/810190951137542164/mazer_gaming.png"
                      alt="sponsor"
                      className="sponsors-img text-center d-block m-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sponsors-card">
                  <div className="sponsors-card-image">
                    <img
                      src="https://cdn.discordapp.com/attachments/764174276890722357/810191089805557790/womplay-1.png"
                      alt="sponsor"
                      className="sponsors-img text-center d-block m-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sponsors-card">
                  <div className="sponsors-card-image">
                    <img
                      src="https://cdn.discordapp.com/attachments/764174276890722357/810191164778872832/ultrarare.uk_logo.jpg"
                      alt="sponsor"
                      className="sponsors-img text-center d-block m-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sponsors-card">
                  <div className="sponsors-card-image">
                    <img
                      src="https://cdn.discordapp.com/attachments/764174276890722357/810191295364071464/dcity.png"
                      alt="sponsor"
                      className="sponsors-img text-center d-block m-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sponsors-card">
                  <div className="sponsors-card-image">
                    <img
                      src="https://cdn.discordapp.com/attachments/764174276890722357/810191376452812880/cropped-cryptomonkeys_logo_letters.png"
                      alt="sponsor"
                      className="sponsors-img text-center d-block m-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <div className="sponsors-card">
                  <div className="sponsors-card-image">
                    <img
                      src="https://cdn.discordapp.com/attachments/764174276890722357/810191469738065970/nftshowroom.png"
                      alt="sponsor"
                      className="sponsors-img text-center d-block m-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sponsors-card">
                  <div className="sponsors-card-image">
                    <img
                      src="https://cdn.discordapp.com/attachments/764174276890722357/810191918859812964/blockchain_game_alliance.png"
                      alt="sponsor"
                      className="sponsors-img text-center d-block m-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
            <div className="sponsor-btn text-center">
              <a href="/sponsor" className="btn contact1-form-btn">
                Become a Sponsor
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section-wrappers">
        <div className="get-started-wrapper">
          <div className="container">
            <div className="section-header">
              <h1 className="section-header-text text-center get-started-header-text">
                Get Started
              </h1>
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <form className="text-center">
                  <div className="mb-3">
                    <input
                      style={{ fontSize: "18px", textTransform: "capitalize" }}
                      type="email"
                      className="form-control text-center"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="chat with carrie"
                    />
                    <div id="emailHelp" className="form-text hint-text">
                      Get in touch with Carrie Allen
                    </div>
                  </div>

                  <button type="submit" className="btn contact1-form-btn">
                    Contact Carrie
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-wrapper">
        <div className="text-center">
          <h6 className="m-0" style={{ fontSize: "12px" }}>
            &#169; Copyright 2021 Splinterlands All right reserved
          </h6>
        </div>
      </section>
    </div>
  );
};

export default Home;
