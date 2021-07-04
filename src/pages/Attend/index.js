import React, { Fragment } from "react";
import "./assets/index.css";

const Attend = () => {
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
          <h1 className="text-center color-white text-uppercase">Attend</h1>
        </div>
      </div>
      {/* Vendonrs Section */}
      <section className="section-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center">
                <h1 className="section-header-text">You're invited!</h1>
                <p className="section-header-desc vendors-para">
                  Join a vast community of people who are members and founders
                  of prominent crypto projects
                </p>
                <a
                  href="https://app.gamerjibe.com/events/60c3dc08af4ff7979c460901/"
                  target="_blank"
                  rel="noopener noreferrer"
                  type="submit"
                  className="btn contact1-form-btn px-4 text-center"
                >
                  RSVP Now
                </a>
              </div>
              <br />
              <br />
              <div className="d-flex">
                <iframe
                  className="text-center m-auto"
                  style={{ textAlign: "center", margin: "auto" }}
                  title="video content"
                  src="https://drive.google.com/file/d/1zkPvSMWZYw4VBOgBn2I9cSNYOd0EcyQ0/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center">
                <h1 className="section-header-text">Vendors</h1>
                <p className="section-header-desc vendors-para">
                  If you’d like to be a part of the DYGYCON experience as a
                  sponsor, vendor, or partner then find Sarah to get started!
                  Event space is limited and spots are filling up fast.
                </p>
                <a
                  href="https://calendly.com/sarah-at-splinterlands"
                  target="_blank"
                  rel="noopener noreferrer"
                  type="submit"
                  className="btn contact1-form-btn"
                >
                  Contact Sarah
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Requirements */}
      <section className="section-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center">
                <h1 className="section-header-text">Know before you go</h1>
                <p className="section-header-desc w-75 m-auto my-2">
                  Kindly visit the link below to know the minimum system
                  specification to ensure a seamless and perfect experience at
                  DYGYCON
                </p>
                <a
                  href="https://gamerjibe.crisp.help/en/article/what-are-the-system-requirements-1o480y7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  type="submit"
                  className="btn contact1-form-btn attend-button"
                >
                  Get System Requirements
                </a>
              </div>
            </div>
          </div>
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
};

export default Attend;
