import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./style.css";

export const LandingPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p16mb8j', 'template_tzuea01', form.current, 'jEIRxeQ7zUBtuZhJb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className="landingPage">
      <div className="div">
        <div className="overlap">
          <div className="bg">
            <div className="group">
              <div className="overlap-group">
                <div className="rectangle" />
                <div className="rectangle-2" />
                <div className="rectangle-3" />
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <div className="rectangle-4" />
                <div className="rectangle-5" />
                <div className="rectangle-6" />
              </div>
            </div>
          </div>
          <div className="our-vision">
            <div className="text-wrapper">Our Vision</div>
            <p className="the-goal-of-anzairu">
              The goal of Anzairu is to empower weather science and forecasting,
              especially in underserved regions. By incentivizing the forecasts
              with monetary prizes paid in stablecoin to the three most accurate
              forecasts minted on the blockchain, we hope to bring together
              public attention, resources, talents and technology to reinvent
              the way of how we interact with weather data. 
              <br />
              <br />
              And of course, we want to make the whole process fun and lucrative
              for the top forecasters!
            </p>
            <div className="overlap-3">
              <img
                className="wavy-tech-single"
                alt="Wavy tech single"
                src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/wavy-tech-24-single-07-1.png"
              />
              <img
                className="ornament"
                alt="Ornament"
                src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/ornament-1.png"
              />
            </div>
          </div>
          <div className="how-it-works">
            <div className="overlap-4">
              <div className="text-wrapper-2" id="how-it-works">
                How It Works?
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper-3">Forecast</div>
                  <img
                    className="sunny"
                    alt="Sunny"
                    src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/sunny-1@2x.png"
                  />
                  <p className="p">
                    Use any and all tools available to place the most accurate
                    bet. AI models, weather stations, statistical
                    analysis—everything is fair in the battle for the most
                    accurate forecast!
                  </p>
                </div>
              </div>
              <div className="div-wrapper">
                <div className="overlap-5">
                  <div className="text-wrapper-4">Redeem</div>
                  <img
                    className="gift"
                    alt="Gift"
                    src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/gift-1@2x.png"
                  />
                  <p className="text-wrapper-5">
                    The weather oracle automatically grades every scorecard. The
                    top 3 most accurate bets can be redeemed for stablecoin
                    against the smart contract!
                  </p>
                </div>
              </div>
              <div className="group-2">
                <div className="overlap-6">
                  <div className="group-3">
                    <div className="overlap-group-3">
                      <div className="text-wrapper-6">Mint</div>
                      <p className="text-wrapper-7">
                        Mint your forecast bet as an NFT scorecard. It will be
                        fully transparent and immutable on the blockchain.
                      </p>
                    </div>
                  </div>
                  <img
                    className="card"
                    alt="Card"
                    src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/card-1@2x.png"
                  />
                </div>
              </div>
              <img
                className="img"
                alt="Ornament"
                src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/ornament-74.png"
              />
            </div>
          </div>
          <div className="win-a-collectible">
            <div className="text-wrapper-8">Win a Collectible Coin!</div>
            <p className="text-wrapper-9">
              Join our exclusive pre-launch survey, answer a few questions on
              video, and win an ANZAIRU collectible coin after the project is
              live!
            </p>
            <div className="overlap-7">
              <div className="rectangle-7" />
              <img
                className="rectangle-8"
                alt="Rectangle"
                src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/rectangle-8.png"
              />
              <img
                className="ornament-2"
                alt="Ornament"
                src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/ornament-11.png"
              />
              <img
                className="ornament-3"
                alt="Ornament"
                src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/ornament-38.png"
              />
            </div>
            <div className="overlap-8">
              <a
                href="https://app.willotalent.com/invite/tkZbgs/"
                target="_blank"
              >
                <div className="text-wrapper-10">Survey</div>
              </a>
            </div>
          </div>
          <header className="header">
            <div className="overlap-9">
              <div className="rectangle-9" />
              <img
                className="rectangle-10"
                alt="Rectangle"
                src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/rectangle-3.png"
              />
              <img
                className="ornament-4"
                alt="Ornament"
                src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/ornament-13.png"
              />
              <h1 className="bet-on-the-weather">
                <span className="span">
                  Bet on the Weather.
                  <br />
                </span>
                <span className="text-wrapper-11">
                  Earn Crypto.
                  <br />
                </span>
                <span className="text-wrapper-12">Empower Science.</span>
              </h1>
              <p className="text-wrapper-13">
                Gambling has never been THIS good for the planet.
              </p>
              <img
                className="ellipse"
                alt="Ellipse"
                src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/ellipse-2.svg"
              />
              <div
                className="mobile"
                style={{
                  backgroundImage:
                    "url(https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/digital-money-copy-1.png)"
                }}
              >
                <img
                  className="mask-group"
                  alt="Mask group"
                  src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/mask-group-1@2x.png"
                />
              </div>
              <img
                className="ornament-5"
                alt="Ornament"
                src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/ornament-31.png"
              />
              <div className="london">
                <div className="overlap-group-4">
                  <img
                    className="ellipse-2"
                    alt="Ellipse"
                    src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/ellipse-1@2x.png"
                  />
                  <div className="text-wrapper-14">London</div>
                  <div className="text-wrapper-15">Max 32</div>
                  <div className="text-wrapper-16">°C</div>
                  <div className="text-wrapper-17">Min 17</div>
                  <div className="text-wrapper-18">°C</div>
                  <div className="WIN-USDT">
                    <span className="text-wrapper-19">WIN:</span>
                    <span className="text-wrapper-20">&nbsp;</span>
                    <span className="text-wrapper-21">$5000 USDT</span>
                  </div>
                  <img
                    className="fluent-up"
                    alt="Fluent up"
                    src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/fluent-mdl2-up-1.svg"
                  />
                  <img
                    className="fluent-mdl-up"
                    alt="Fluent up"
                    src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/fluent-mdl2-up.svg"
                  />
                </div>
              </div>
              <div className="navigation">
                <div className="overlap-10">
                  <a
                    href="https://app.willotalent.com/invite/tkZbgs/"
                    target="_blank"
                  >
                    <div className="text-wrapper-22">Survey</div>
                  </a>
                </div>
                <p className="how-it-works-contact">
                  <a href="#how-it-works">
                    <span className="text-wrapper-23">
                      How It
                      Works&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </a>
                  <a href="#contact">
                    <span className="text-wrapper-23">Contact</span>
                  </a>
                </p>
              </div>
              <div
                className="logo"
                style={{
                  backgroundImage:
                    "url(https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/image-2@2x.png)"
                }}
              >
                <img
                  className="mask-group-2"
                  alt="Mask group"
                  src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/mask-group@2x.png"
                />
              </div>
            </div>
          </header>
        </div>
        <footer className="footer">
          <img
            className="group-4"
            alt="Group"
            src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/group-7@2x.png"
          />
          <a href="#how-it-works">
            <p className="how-it-works-contact-2">
              How It Works&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
          </a>
          <div className="rectangle-11" />
          <div className="text-wrapper-24">© Anzairu 2023</div>
          <a href="https://www.linkedin.com/company/anzairu/" target="_blank">
            <img
              className="ri-linkedin-fill"
              alt="Ri linkedin fill"
              src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/ri-linkedin-fill.svg"
            />
          </a>
          <a href="https://twitter.com/ANZAIRUforecast" target="_blank">
            <img
              className="ri-twitter-fill"
              alt="Ri twitter fill"
              src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/ri-twitter-fill.svg"
            />
          </a>
        </footer>
        <div className="are-you-with-us">
          <div className="overlap-11">
            <div className="rectangle-12" />
            <img
              className="rectangle-13"
              alt="Rectangle"
              src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/rectangle-25.png"
            />
            <div className="text-wrapper-25" id="contact">
              Get In Touch
            </div>
            <div className="text-wrapper-26">Are You With Us?</div>
            <p className="text-wrapper-27">
              Join our pre-launch survey to win a collectible metal coin!
            </p>
            <img
              className="ornament-6"
              alt="Ornament"
              src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/ornament-2.png"
            />
            <div className="rectangle-14" />
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                id="first-name"
                name="first_name"
                className="rectangle-15"
                placeholder="  First Name"
                required
              />
              <input
                type="text"
                id="last-name"
                name="last_name"
                className="rectangle-17"
                placeholder="  Last Name"
                required
              />
              <input
                type="email"
                id="email"
                name="user_email"
                className="rectangle-18"
                placeholder="  Email"
                required
              />
              <textarea
                id="message"
                name="message"
                className="rectangle-16"
                placeholder="  Write Message"
                required
              />
              <button className="rectangle-19" type="submit" >Contact</button>
            </form>
            <img
              className="ornament-7"
              alt="Ornament"
              src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/ornament-3.png"
            />
            <img
              className="ornament-8"
              alt="Ornament"
              src="https://generation-sessions.s3.amazonaws.com/e5c13403aa44f281ed66670a951e8984/img/ornament-4.png"
            />
            <div className="rectangle-20" />
            <a
              href="https://app.willotalent.com/invite/tkZbgs/"
              target="_blank"
            >
              <div className="text-wrapper-33">Survey</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
