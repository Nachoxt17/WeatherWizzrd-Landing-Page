import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './style.css'
// Images
import logo from '../images/logo.png'
import wrapper__svg from '../images/hero__svg.svg'
import phone from '../images/phone.png'
import coin__svg from '../images/coin__svg.svg'
import coin__img from '../images/coin__img.png'
import how__svg from '../images/how__svg.svg'
import how1 from '../images/how-1.png'
import how2 from '../images/how-2.png'
import how3 from '../images/how-3.png'
import vision__svg from '../images/vision__svg.svg'
import vision__svg2 from '../images/vision__svg-2.svg'
import vision__img from '../images/vision__img.png'
import contacts__svg from '../images/contacts__svg.svg'
import footer__logo from '../images/footer__logo.png'

export const LandingPage = () => {
	const form = useRef()
	const [showMobileMenu, setShowMobileMenu] = useState(false)

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
			.sendForm(
				'service_p16mb8j',
				'template_tzuea01',
				form.current,
				'jEIRxeQ7zUBtuZhJb'
			)
			.then(
				(result) => {
					console.log(result.text)
				},
				(error) => {
					console.log(error.text)
				}
			)
		e.target.reset()
	}

	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	})

	const {firstName, lastName, email, message} = data;

	const handleChange  = (e) => {
		setData({...data, [e.target.name]: e.target.value });
	}

	const handleSubmit  = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("https://v1.nocodeapi.com/anzairutechnical/google_sheets/cWQltESnQdxnEDUF?tabId=Sheet1", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			body: JSON.stringify([[firstName, lastName, email, message/*, new Date.toLocaleString()*/]]),
			});
			await response.json();
			setData({...data, firstName: "", lastName: "", email: "", message: "" });
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<React.Fragment>
			<div className="wrapper">
				<img src={wrapper__svg} alt="img" className="wrapper__svg" />
				<header>
					<div className="header">
						<div className="container">
							<div className="navbar">
								<div className="logo">
									<a href="/" rel="noopener noreferrer">
										<img src={logo} alt="logo" />
									</a>
								</div>
								<nav>
									<ul className={showMobileMenu ? 'menu active' : 'menu'}>
										<li className="menu__item">
											<a href="#how" className="menu__item-link">
												How It Works
											</a>
										</li>
										<li className="menu__item">
											<a href="#contacts" className="menu__item-link">
												Contact
											</a>
										</li>
										<li className="menu__item">
											<a
												href="https://app.willotalent.com/invite/tkZbgs/"
												target="_blank"
												rel="noopener noreferrer"
												className="menu__item-link btn"
											>
												Survey
											</a>
										</li>
									</ul>
								</nav>

								<button
									className={showMobileMenu ? 'burger active' : 'burger'}
									onClick={() => setShowMobileMenu(!showMobileMenu)}
								>
									<span></span>
								</button>
							</div>
						</div>
					</div>
				</header>

				<section className="section__hero">
					<div className="container">
						<div className="hero">
							<h1 className="hero__title">
								Bet on the Weather.
								<span>Earn Crypto.</span>
								Empower Science.
							</h1>
							<p className="hero__text">
								Gambling has never been THIS good for the planet.
							</p>

							<img src={phone} alt="img" className="hero__phone" />
						</div>
					</div>
				</section>
			</div>
			<main>
				<section className="section__coin">
					<img src={coin__svg} alt="img" className="coin__svg" />
					<div className="container">
						<div className="coin">
							<div className="coin__item">
								<img className="coin__img" src={coin__img} alt="img" />
							</div>
							<div className="coin__item">
								<h2 className="section__title coin__title">
									Win a Collectible Coin!
								</h2>
								<p className="section__text coin__text">
									Join our exclusive pre-launch survey, answer a few questions
									on video, and win an ANZAIRU collectible coin after the
									project is live!
								</p>
								<a
									href="https://app.willotalent.com/invite/tkZbgs/"
									target="_blank"
									rel="noopener noreferrer"
									className="btn coin__btn"
								>
									Survey
								</a>
							</div>
						</div>
					</div>
				</section>

				<section className="section__how" id="how">
					<div className="container">
						<h2 className="section__title how__title">How It Works?</h2>
						<div className="how">
							<img src={how__svg} alt="img" className="how__svg" />
							<div className="how__item">
								<div className="how__img">
									<img src={how1} alt="img" />
								</div>
								<div className="how__name">Forecast</div>
								<div className="how__text">
									Use any and all tools available to place the most accurate
									bet. AI models, weather stations, statistical
									analysis—everything is fair in the battle for the most
									accurate forecast!
								</div>
							</div>
							<div className="how__item">
								<div className="how__img">
									<img src={how2} alt="img" />
								</div>
								<div className="how__name">Mint</div>
								<div className="how__text">
									Mint your forecast bet as an NFT scorecard. It will be fully
									transparent and immutable on the blockchain.
								</div>
							</div>
							<div className="how__item">
								<div className="how__img">
									<img src={how3} alt="img" />
								</div>
								<div className="how__name">Redeem</div>
								<div className="how__text">
									The weather oracle automatically grades every scorecard. The
									top 3 most accurate bets can be redeemed for stablecoin
									against the smart contract!
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section__vision">
					<img src={vision__svg} alt="img" className="vision__svg" />
					<div className="container">
						<div className="vision">
							<img
								src={vision__svg2}
								alt="img"
								className="vision__svg-ornament"
							/>
							<div className="vision__item">
								<h2 className="section__title">Our Vision</h2>
								<p className="section__text">
									The goal of Anzairu is to empower weather science and
									forecasting, especially in underserved regions. By
									incentivizing the forecasts with monetary prizes paid in
									stablecoin to the three most accurate forecasts minted on the
									blockchain, we hope to bring together public attention,
									resources, talents and technology to reinvent the way of how
									we interact with weather data. 
								</p>
								<p className="section__text">
									And of course, we want to make the whole process fun and
									lucrative for the top forecasters!
								</p>
							</div>
							<div className="vision__item">
								<img src={vision__img} alt="img" className="vision__img" />
							</div>
						</div>
					</div>
				</section>

				<section className="section__contacts" id="contacts">
					<div className="container">
						<div className="contacts">
							<img src={contacts__svg} alt="img" className="contacts__svg" />
							<div className="contacts__item">
								<h2 className="contacts__title">Are You With Us?</h2>
								<p className="contacts__text">
									Join our pre-launch survey to win a collectible metal coin!
								</p>
								<a
									href="https://app.willotalent.com/invite/tkZbgs/"
									target="_blank"
									rel="noopener noreferrer"
									className="btn contacts__btn"
								>
									Survey
								</a>
							</div>
							<div className="contacts__item">
								<h3 className="contacts__subtitle">Get In Touch</h3>
								<form
									/*onSubmit={sendEmail}*/
									onSubmit={handleSubmit}
									ref={form}
									className="contacts__form"
								>
									<div className="contacts__row">
										<input
											placeholder="First Name"
											type="text"
											id="first-name"
											name="firstName"
											value={firstName}
											onChange={handleChange}
											required
											className="contacts__input"
										/>
										<input
											placeholder="Last Name"
											type="text"
											id="last-name"
											name="lastName"
											value={lastName}
											onChange={handleChange}
											required
											className="contacts__input"
										/>
										<input
											placeholder="Email"
											type="email"
											id="email"
											name="email"
											value={email}
											onChange={handleChange}
											required
											className="contacts__input"
										/>
									</div>
									<textarea
										className="contacts__textarea"
										placeholder="Write Message"
										id="message"
										name="message"
										value={message}
										onChange={handleChange}
										required
									></textarea>
									<button className="btn" type="submit">
										Contact
									</button>
								</form>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer>
				<div className="container">
					<div className="footer">
						<a href="/" className="footer__logo">
							<img src={footer__logo} alt="img" />
						</a>

						<ul className="footer__menu">
							<li>
								<a href="#how" className="footer__link">
									How It Works
								</a>
							</li>
							<li>
								<a href="#contacts" className="footer__link">
									Contact
								</a>
							</li>
							<li>
								<a
									href="https://twitter.com/ANZAIRUforecast"
									target="_blank"
									rel="noopener noreferrer"
									className="footer__link"
								>
									<svg
										width="35"
										height="35"
										viewBox="0 0 35 35"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M32.3927 8.24835C31.2798 8.74068 30.0996 9.06411 28.8912 9.20793C30.1644 8.44542 31.1171 7.24609 31.5716 5.83335C30.3758 6.54501 29.0648 7.04376 27.6998 7.31356C26.7819 6.33148 25.5653 5.68017 24.2391 5.46087C22.9129 5.24157 21.5513 5.46656 20.3662 6.10088C19.181 6.7352 18.2387 7.7433 17.6856 8.96846C17.1325 10.1936 16.9996 11.5672 17.3077 12.8756C14.8824 12.7543 12.5097 12.1242 10.3438 11.0263C8.17781 9.92835 6.26699 8.38714 4.73539 6.50272C4.19331 7.4338 3.90845 8.49222 3.90997 9.5696C3.90997 11.6842 4.98768 13.5523 6.62247 14.6461C5.65416 14.6155 4.70717 14.354 3.86039 13.8833V13.9577C3.86035 15.3663 4.34752 16.7315 5.23929 17.8218C6.13106 18.9122 7.37251 19.6605 8.7531 19.9398C7.85424 20.1837 6.91165 20.2196 5.99685 20.0448C6.38611 21.2573 7.14487 22.3176 8.16685 23.0773C9.18882 23.8369 10.4228 24.2579 11.696 24.2813C10.4307 25.275 8.98189 26.0097 7.43244 26.4431C5.883 26.8765 4.26331 27.0002 2.66602 26.8071C5.45394 28.5999 8.69929 29.5518 12.0139 29.5488C23.2343 29.5488 29.3681 20.2548 29.3681 12.1946C29.3681 11.9321 29.3623 11.6667 29.3506 11.4056C30.5441 10.5428 31.5742 9.47271 32.3927 8.24835Z"
											fill="#414141"
										/>
									</svg>
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/company/anzairu/"
									target="_blank"
									rel="noopener noreferrer"
									className="footer__link"
								>
									<svg
										width="35"
										height="35"
										viewBox="0 0 35 35"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.1209 7.29166C10.1205 8.06521 9.81288 8.80692 9.26563 9.35363C8.71837 9.90034 7.97635 10.2073 7.20281 10.2069C6.42926 10.2065 5.68755 9.89882 5.14084 9.35157C4.59413 8.80431 4.28721 8.06229 4.2876 7.28874C4.28798 6.5152 4.59565 5.77348 5.1429 5.22678C5.69016 4.68007 6.43217 4.37315 7.20572 4.37354C7.97927 4.37392 8.72098 4.68158 9.26769 5.22884C9.8144 5.77609 10.1213 6.51811 10.1209 7.29166ZM10.2084 12.3667H4.3751V30.625H10.2084V12.3667ZM19.4251 12.3667H13.6209V30.625H19.3668V21.0437C19.3668 15.7062 26.323 15.2104 26.323 21.0437V30.625H32.0834V19.0604C32.0834 10.0625 21.7876 10.3979 19.3668 14.8167L19.4251 12.3667Z"
											fill="#414141"
										/>
									</svg>
								</a>
							</li>
						</ul>
					</div>
					<div className="copy">© Anzairu 2023</div>
				</div>
			</footer>
		</React.Fragment>
	)
}
