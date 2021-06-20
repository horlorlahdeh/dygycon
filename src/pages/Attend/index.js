import React, {Fragment} from 'react'

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
                  <h1 className="section-header-text">Vendors</h1>
                  <p className="section-header-desc">
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
                    href="https://gamerjibe.crisp.help/en/article/help-my-event-isnt-loading-ctam42/"
                    target="_blank"
                    rel="noopener noreferrer"
                    type="submit"
                    className="btn contact1-form-btn"
                  >
                    Get System Requirements
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
}

export default Attend
