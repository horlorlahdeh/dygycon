import React, { Component, Fragment } from "react";
import "./assets/index.css";

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <div className="flex full-height">
          <div
            className="about-us-wrapper"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "100px",
            }}
          >
            <h1 className="text-center color-white text-uppercase">About Us</h1>
          </div>
        </div>
        <section className="section-wrapper">
          <div className="container">
            <div className="section-header text-center mb-5">
              <h1 className="section-header-text">About Dygycon</h1>
              <p className="">
                DYGYCON is a new kind of virtual event, hosted by the
                Splinterlands team and designed to facilitate all the
                connections that are so urgently needed in this space. The lead
                innovators of blockchain, NFTs, DeFi, and play-to-earn gaming
                have accomplished truly incredible things, but they’re busy.
                Without a networking space in which they can form alliances and
                collaborate, they all run the risk of being steamrolled by big
                corporations What’s happening in the blockchain space is nothing
                short of a revolution that puts ownership and control into the
                hands of those who deserve it. The decentralization tide is
                rising. If we all jump in together, it will rise higher and more
                quickly than we could imagine.
              </p>
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
                {/* <a href="/sponsor" className="btn contact1-form-btn">
                Become a Sponsor
              </a> */}
              </div>
            </div>
          </div>
          <div className="see-more text-center">
            <a
              href="mailto:sarah@splinterlands.com?subject=SPONSOR INQUIRY AT DYGYCON"
              target="_blank"
              rel="noopener noreferrer"
              className="m-4 text-center btn contact1-form-btn goto-link"
            >
              Become A Sponsor
            </a>
          </div>
        </section>

        <section className="section-wrapper">
          <div className="container">
            <div className="section-header text-center mb-5">
              <h1 className="section-header-text">Splinterlands</h1>
              <p className="section-header-desc">
                Splinterlands is a digital, collectible card game built on
                blockchain technology. It is similar in concept to games like
                Magic the Gathering and Hearthstone where you build up a
                collection of cards, which all have various different stats and
                abilities, and use them to battle other players in skill-based
                matches. By using blockchain technology, players can buy, sell,
                and trade their digital assets freely just as if they were
                physical cards, and all transactions are recorded publicly and
                immutably.
              </p>
              <img
                src="https://d36mxiodymuqjm.cloudfront.net/website/home/splinterlands_logo_fx_1000.png"
                alt="splinterlands-logo"
              />
            </div>
          </div>
          <div className="see-more text-center">
            <a
              href="https://splinterlands.com?ref=dygycon-loot"
              target="_blank"
              rel="noopener noreferrer"
              className="m-4 text-center btn contact1-form-btn goto-link"
            >
              Play Splinterlands
            </a>
          </div>
        </section>
        <section className="footer-wrapper">
          <div className="text-center d-flex justify-content-center">
            <h6>Social Links:</h6>
            <a
              className="px-1"
              href="https://twitter.com/dygycon?ref_src=twsrc%5Etfw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <span></span>

            <a
              className="px-1"
              href="https://discord.gg/VqAMqxuQDP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-discord"></i>
            </a>
          </div>
          <div className="text-center border-top pt-2">
            <h6 className="m-0" style={{ fontSize: "12px" }}>
              &#169; Copyright 2021 Splinterlands All right reserved
            </h6>
          </div>
        </section>
      </Fragment>
    );
  }
}
