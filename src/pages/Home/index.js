import React from "react";
import Header from "../../components/Header";
import "./assets/index.css";

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
                    <h5 className="speaker-name text-center">Andrew Prell</h5>
                    <p className="speaker-title text-center">
                      CEO, Silica neXus{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrapper">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h1 className="section-header-text">Past Sponsors</h1>
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
              <div className="col-md-3">
                <div className="sponsors-card">
                  <div className="sponsors-card-image">
                    <img
                      src="https://lh3.googleusercontent.com/fife/AAWUweVc4VEvWvuVHi16mAkd9ILHDJtu8yqkML3_klLzb5vg7PqxdpeJ9bxFdx0QkaFZi0UIg4cp-r8NBiwLipNhrA7o0zhyMbwvp9o5rjh_1U8Xve-VMw2wAAr3Awoc7Mgy6XdYeO7pcRHdO9PUyT3FIiqk2lNfkpGXOzZ2VY8oVQLRqJ1XNb7vjOi-l3p5xc2g5ZLzhBrLM2bS9M_8hgA4kQoQv2kXAYEXZytDVUttR8PLcXHuATE9WiN2AVDiOJ6fQsEjcHPNj_R9PGvRrvxeHd3an80VpzIpjSrYrYyuswdgEJ2bGS_sXH9C2sJ4g8GJkuhOiJOIc-EmLcy7QhJCtSnqeYbpbtn5Z-2hJh7FcQPdt6kWChQiDHkENpQbD9rhr7KY_daqAnqEmrbD7w1-fdaXAbxShBa6h6BIVmWqNYuUyA3molQvYq4IysFfiARYmMRT0nPINxWiSNTtJi4KhHnnK9OTmrtmLn2PJeMZF_Vm8iE8KGRI969KYeTsdNte92rElq-xXxDdEEKBzN-m7IcowH4zpIW7aJYuXQ2w2enSFQtkWOHF2ofjVjbjMmyytKDr_rd1fNpYWlzKIsh78ZlxRUZn_GFjOtBCgVPmHPw0TYZCbSdhuyKbnHVAW1nlvPMnAEphZmrtWJsqyGNoCxEfZdHxlw07wU5LhBzGXtlPH8_YC7nuSE_c9wYsXqN_yCBK3gAf9wqlFYsgrNFNSv9bF8Xuiv74Yw=w2818-h1458-ft"
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
              <div className="col-md-3">
                <div className="sponsors-card">
                  <div className="sponsors-card-image">
                    <img
                      src="https://lh3.googleusercontent.com/fife/AAWUweWsTogVk9l-lqkkuZkY_Ynvkhzu1PkGDhB8yLmCTwoMt_o261lLmDu6talU-Nw1enhVwResBDad_CXVjYQWflNlStFOYonKFKg1rfBH7BHC0G_aOzZSTUv4PWf5RjTACTeSHU9BvLT4HZv5Hy3ZI46-h3vM6oEPRUIbB43sVtvVsRx1qreiq-xaMiHqDIzHkJ18yCODf3QCj2-SK3Q63Xhts4ptBw3Pisc3JxM4W5CegqAh0-qpyvAUJMA4REx8_ExK14HsM-tozaRJVXJwMgBWje0GTaW2DZoh3SXHmU4QNjWp0A38zR1SOzmitTqEShHD8Bw908m2J2Nj3W_UnX7X1fEczX3WB0rvyrsfgccp2ojI-q5vL4iaxiqk0NOv3zRO8f8-loOU_gpazmZGAMH3IaY4kWSqQqB7NcdaT55eKM8JuFPyf_4-oHOSRn4jbDEztDFVZTTRbHiQ5B9rj5i0ZEeaabVsPzdZk3AeYcEaUuYP8V8kBW0gb7WI2mg3nUqFrnCeG-8WGYo9IbjaGkxpaJWsPUFqw17kAxnANNYFJuglmf51v6AbVSoejJkXz11pqWN0Tr6kHfb8Btfe5WR98W2pqaI57RtTLmqsJ-coaN-WKF1kfhvFz3JnbHyzbRevkE1i-97ubeE3lzkzQ7Q4EBoMpskiOVQLjsD0v-zbTjYffIxFumNE6XobItoUGFk6wFgZQ3oA9EpReBc_2QFI3k_GICo8YQ=w2818-h474-ft"
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
                      src="https://lh3.googleusercontent.com/fife/AAWUweXtBzHQClRkWxSNo0paszF_J28YZgOy8DOZwA-AG6N8cFblKOaVw-zBBvaS6skQQFOS4oY_MNMi8XtiZWZ0zOVjmB3LA7r4hNTS-5arJX2QGkhKWSLHycSDio4vUcQAZm2PjSxiMBfjaJ9TFvGlvoOQEjoJJ0Gc_0mIJ8Jvjh4ViLrAuJwpH7UtNB8V2kgmPiWHO8TOj5C7pmF6vhf00nEed_e-7rVy_ZROPZCmD9mdx_nKijQWpbtVe0SqHOkALtDtMLhkhxRpL7m7cKfbRACIqyocn0hYIp0MkkD4yQ5-6QnsbuqxwkU7Apkf0DzZIQNcgiCae1CB9t6F8R7RFYHA8ForHJ1otaPPmgLH8OVZ9jr3BjR1IYvsY_8RzUUroCLfowxsG-ipYjjYzqwSyYr4Jh_d0mDs1V2BP2dV6CT9e3raOBu6GTL4HDDdxKd0LJpF-b-xNRtxFhu5PJxGDCn9stqkbtMIAnZjfJXoObp6_zjWnfp8bY7H4dp3pg9k3pEhGdebAv9LYlO3LYseuAiLLbjwxq9M3_qBLPDAKbLlYH2GvGNSMom3Wii6cGzfFw0_3R_ftlkP58cWO-huLzC47Ei4yVkCMoOiD2lSS_71WMMXt5nu52xvChT6jiHBaj34tsS_1JfDae0cvdynpmLlAqpOdMzJ_owfGVgW_deQSgIPTFS4ZrusZPX4tnuPIHXMKNNa9ykPqpY_tjbTYBh5_dmSNKGpiA=w2818-h954-ft"
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
                      src="https://lh3.googleusercontent.com/fife/AAWUweUW_FXC_EXOLVGbZJvnC7BANWuoCOdrf3-Nd5NbvZDOdZWulWdtCyedZI1RtDbOS70frm52LD-L2EdAXlDP6iu3RlVCYteQwhNcNGjZTGp1n2yoQRkS79Bisf4wp7v9-ufY8KOXcPgwOFPoFiSDKxMVRJcrD5dxy-HeB9WHX0Y795k8sL3W9IHK3R1nspSEqpuxtWFiqSb_xyBFjhNM4XkuEN9jZcWxUJdbEHO7gdX2LeUShdG2mfxSyafSIQkXrwKEEUMTGfyuNtAS-w5-1zDD4Vp8P05ltG0eqXetyMyIT0BpxrRfWg8WpjPSAhoYCGc08W05Qd-vLsbTdTM36XX7B5bpU13pQ__sC9cD6YhZbu8FyvxM3n7xT1uRrJ2K9hwXZAglA4Zaysn_Rh_HggCkMYnuyXMBEUlxtUIBNB-ugNyDZyIJuEsf3Bd6GdGy1pJkqBcw1RxD6uVtzVBYtvR199GjmSX_KRLulkuG4dD9cKzZH3zZDm0u44P3S3LNrH92iM4ubrN2ryjAcwdtZiXDbOjsEvRp1mfQRyZgXak_DS2gsJyACwHhjoPTMgipokyX3Jx5Ncig9M9wc2dzm6FyjNbY_qCg06dks-nYD3ehLsfvUnFqCVjK4wD4zzoDZBsxU-n4HsoMDVQXHg8Kh5GgYeb4a6oUr6gIH5cdWy-vxFcl06DLaXRUW7eDcFfymAzyxOkGpTmb93kAWWU5ibN41YjY9Bw18Q=w2818-h954-ft"
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
                      src="https://lh3.googleusercontent.com/fife/AAWUweUw8kcWBg6iEv6UstfGxEzOZkoQIzxAfxw-hORDPx7bpvs0fAvSrxwDRZZTviZHm5VMHpzW2whUhKPmZMpXqMCW8vpGjkhKhMn6SnUI1c5mNgSB91eQ9YMxCcOtvNxZsliClMDzSP8y698uDo1XbNGePTrhFeDZsqollC4rX1Hlnmb0TC-oPdN6oSzp7xZvuUvNdX6Vb_BjjdU6kpw5wXlFnlWsRbTj3V7pvGZlS35mJtb10iI2XgQii-WWd1Oy7u-8X8LshpmI1WzUXENHz4_SsheNBK17jAwDUBt_aKHTYqayXgYU92wC6R4KVy7BCwovse8WZXEeVBatbuxtnXcCq1o2UugrLIA6ol6yUbwb4gEJWzbGiZKkFw_rZK5vRldN4jrVB5JbnA-VJqQWFA9eSxIoXl6D3E3sag8K55sw7GITQ6_MRX7DKO74lJ6xTLZ9TCdEotPTzPf7jT8VDIgLuUHD5YXnHS45atNBtXNwEwToU4I_LoPJ9tdrqbpKrgvcwGKAtp0r-QRJZG893_zXtJZX2zEI6SMwveet0_t33K9WrDpJZdfydd5miklNJ2ZF7iAvMufWo5RrqWehAbKeMzIgxEtL4mGXSsnC39J_NmpEwqVFh6hOF_PIbLSwXWnIXKoZA2JrcWPPwDeXQ68UVKOSKDXb2ODK8k6D6U3n-EeXSdZhuksVEuYIPKaHAhR9_JhOZJhXI8aS0fihfe-f9-eNSqiFzg=w2818-h954-ft"
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
                      src="https://lh3.googleusercontent.com/fife/AAWUweVRiZ9yp_ZJ8ljF0V96y6eaqAORPjSpNxb-I2PnuDN-EaMeMwwPIzEDCOpZhKWhnVcEYRS5lFaNNARVX3BTnkzmdZk6S2CHVjavZwLKKf5CR1TY1a4W13H35cWup86LxET0eC7c9TK_uHeolsFoE-gTbWbECS2mQBBTbTrsYbU8E8lcAoQPNjcSdM-JP3nktsY4RZdzGb9fonoUGm_qzXMYJTPNNy8hbZGsR7U3vnMTtHf4FbxCLHJ9u_3VnLZggjkXUT1WPt7zrUXC52NBe5Qf6n_5TwqaBKPJOl6cpct-TFFjX3WI_OpIndDWi8BHAlQAY7F5qcWo6A6L5QLJcxSDsNXZDryqZKcemx3x7hPY03TPnCRRYdG1sVUBthRPTlZixrtX12w3NDwUS3MJOzR--M1e_o7fWP0icxdOliMJDCT47Bk176aYaiXYoE4HKJ19huVjGqwDq019k3NVHgkrpCyN_t1WAN2YFLUGF_ZclYcx2U-HKYt6GGSWvr_CnmzMrnaBC8pmvBvIUHN-W7DzgJwSTmTHuXXc4NjFt1KpPr13sVt4Y7gIOLd5uTvq0RdZvg48ykubfWhaKx4Zw4esnNc_G1A71aLKoxF9WRQLyqWNwFHAYJLcOUs1Ysw2FEz7gyHvG1LQxEX7PlUKKzYpSKBjC_sbcn-n532FoADnSaRIepnCj5qoQnDzGgACP1hsoMLwx5WTnJhRV3ZSrkRPoUmVMjG8TA=w2818-h954-ft"
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
                      src="https://lh3.googleusercontent.com/fife/AAWUweX9B-ozhRh-4mgELAqwIWM44rHatvtZrYADpvXU8OmOc7JIh3LO3M-erd-uIGnAQbzFjK4OV9wZsXH2HvtWfUgRDpsBjpqwpBz0WLgNIKUG2relR89iPT_4iHre-VxL76ElDzVjDhrmxfBJ5VLmgY6Cv-U9nUtXe3r1O9_KZBdJOl6dbcmC3BFxjVABWpIYjHdH2BJNle8QbxLt2CEvdk8lkQ_mRbhYNmJe64M_gex6k7lupV1SgL08v3eTqROiYtm_DF1Z2ha8W16dbwCZYR_2sRZuWeXsd3adGexwfePJiMjlW8buaufeQvENiIkxCSUbCwONcpv3tCkW53_3hUjDXABHwPluYPzCGo0OatmizOywpQT4egyuFmzlwo0Am04bXK0IZaPpGLO79g2VEwcKH9yOvdMIHVpicJdyuVQzsUArWsp0iqEGpnEJhAI1a68eL0kTjc0t8f4OgzelDwr0IiQrduah_BPxej_giaSIgrObAa4L9Cxee8X-ITrc18Khm4Hg8Dn2ssr9qIyvFyfW31BVXf3_dmej-payECalAHbR4JyTs0oFGok1oXiVSeYYbPT5v90BC28axpnSvM66-W_rKXvwimfgqYGcTTz_K1Blqy3IUX011Lr7dHmglZclba4wqTQBloCRVOdob2FMsAI2TlLaLzvWEIzfddw1bo22zD_BcLzEbME_TT6HSi5rHaGLD7nR5BeiA9ENNTZnoqwYEg0m1w=w2818-h954-ft"
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
                      src="https://lh3.googleusercontent.com/fife/AAWUweWtI8hGhpJzm0qlgLB9kh0d9LlFsx8V45gnZ8ouE0PoUVdUnWG1QyDynX-HzOlXvz0TDKwqDeKsDm2tEUyV0wTUlJo6iVxpkK6q4KBxf2iVAJSYOSNOtIFhjHmHK6GwmyA-valUDjvEpUKb6fodmQbqxZkvEaJYWq5iKAPD9C75NBHv2gZKkyH59k0LmWN0C59Y7hBlqDFGLYQLbvOCgbJL0ZVAHeL6PNP7IU4MQ43sSFPVR700zrldFSwW-BEs-5z3U6SRRZLhIPAP5XPeM2FtieKb0N2WCnK3n2DZnP0hhSPKqz3kDmesvsBk9u-UwzFk6YqyR5dcL_IwEKzSes7eOtuX4-yGZuq4gvjqM9huYl9HtQEPU4Uk1kkaWa5pI5asQ-T07QtREOpVY0BJYa6h8LleXwliUx064vWQ5iSsp5IBdfZ2-YdDc9B-czB_CRuVjdm9IO5Z9-pb_MLJWk_cPyy-4aI0eK4-QDMMTiRekkrdsOqqfOvtePn6GfricjwXowuDfakVoqUGFSBIfHfHcq6Jvz0xd4YD_ML9DWE9rkrWubol__zlerOyA7S5inhKP8DibaAf99hVhZ3w9n2AfVtcpIrVqBo5_hgGiCUShdm5_Hyaz7NUL72fbiMgHnFNYpw8yaZNMtSQ7oJGrUi4WB-hc-uNqYgYSghimnW6pmEsDYntXSiUuRrcAci8-g8sGc0-lWZNfeyny42dobFWE4V9_amRAQ=w2818-h954-ft"
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
                      src="https://lh3.googleusercontent.com/fife/AAWUweXiVt-m276cKZGy73BUhwwOHXJE1LOaS45b_691K-03h8HD8RV78Bmh1YkCADzzO1SMXkH_Ei49Wss8xJv_KS7-kPV0a3vIkPc-cql5cI79pTn586IY7ms9-0x_E-Dl3YTXLRHUDwu2SP0IrdAJbwm4yFC1DgiW-N2jNMRvLe8Ig3PIoyl9IgVm7ZlHPwNuiV7LOHy6LYCwBU0zmMXvgRxlTs6lCH7wum2UCyABoXRQ5e7lYPMGBw6QVpZ6pX_qT56oWpgcWcWNtfuPFQF81XhB4zGqnXaQQ1XEcGBVgvm_tp9UHCuGGbkDmRor4Ff-qIlfdQlPDB1W17Ky9b4isWpJhchYt1FTTN-VqvaLUK3q_sUKPbbGugqn3jyGxNJCXaeAL5D1DF3e5LnzCD6r9dFR8q7hjYU-kCfB1cn85qWNnZguvIdNH0NUiVlPIjKnCIP6AthViJaX3GIv_P6PdMY-PguuuNRxZ0dhAGcCkpf6LWswelQv-zkbf7c5rmD2iF-0WtDRsLYCGfcyN2jjgV0twA1x1-K5Y8xFuXIqJt40SpjrtpTwfO0cNf7YjgXgPn3MmQsO2t71Gjsm7yHiyuPk0FyUgZi_g7TnBSj6M877J05kDPX2lEc0Prs5vVnGXi0M8qfrqYzlTWZeJgqUNJx-XKuoqQQh4BY9ivXEEOIk3YswSYt8A3uKnoW-M8swlxsIPoeRUhHOdOkHihaCy9qccgrHTJo9mw=w2818-h954-ft"
                      alt="sponsor"
                      className="sponsors-img text-center d-block m-auto"
                    />
                  </div>
                </div>
              </div>
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

      <section className="section-wrappers">
        <div className="get-started-wrapper">
          <div className="container">
            <div className="section-header">
              <h1 className="section-header-text text-center get-started-header-text">
                Join the DYGYCON experience
              </h1>
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <form className="text-center">
                  <div className="mb-3">
                    {/* <input
                      style={{ fontSize: "18px", textTransform: "capitalize" }}
                      type="email"
                      className="form-control text-center"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="chat with carrie"
                    /> */}
                    <div id="emailHelp" className="form-text hint-text">
                      <h3 className="m-0"> Get in touch with Sarah</h3>
                    </div>
                  </div>

                  <a
                    href="https://calendly.com/sarah-at-splinterlands"
                    target="_blank"
                    rel="noopener noreferrer"
                    type="submit"
                    className="btn contact1-form-btn"
                  >
                    Get Involved
                  </a>
                </form>
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
    </div>
  );
};

export default Home;
