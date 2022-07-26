import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const Hero = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-image: url('${({ imageSource }) => imageSource}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 30%;
	padding: 35px;
`;

const HeroHeading = styled.h1`
	font-size: ${({ theme }) => theme.font.size.headingMobile};
	margin: 0;
	text-shadow: ${({ theme }) => theme.font.shadow};
`;

const HeroParagraph = styled.p`
	font-size: ${({ theme }) => theme.font.size.paragraph};
	text-shadow: ${({ theme }) => theme.font.shadow};
`;

const ContentWrapper = styled.div`
	padding: 0 20px;
`;

const WelcomeSection = styled.section`
	margin: 70px 0;
	padding: 0 20px;
`;

const WelcomeSectionContent = styled.div`
	background-color: ${({ theme }) => theme.color.dark};
	padding: 30px 20px;
	position: relative;

	h2 {
		margin: 0 0 20 px 0;
		font-size: 2.5rem;
		font-weight: 400;
		color: white;
	}

	p {
		font-size: ${({ theme }) => theme.font.size.paragraph};
		font-weight: 300;
		color: white;
	}

	&::after {
		position: absolute;
		width: 70px;
		height: 70px;
		content: '';
		clip-path: polygon(0 16%, 0 0, 100% 0, 100% 100%, 84% 100%, 84% 16%);
		background-color: ${({ theme }) => theme.color.dark};
		right: -20px;
		top: -20px;
	}
`;

const WelcomeSectionImage = styled.div`
	margin-top: 10px;
	width: 90%;
	height: 170px;
	position: relative;
	background-image: url('${({ imageSource }) => imageSource}');
	background-repeat: no-repeat;
	background-size: cover;
	&::after {
		position: absolute;
		width: 70px;
		height: 70px;
		content: '';
		clip-path: polygon(0 0, 16% 0, 16% 84%, 100% 84%, 100% 100%, 0 100%);
		background-color: ${({ theme }) => theme.color.beige};
		left: -20px;
		bottom: -20px;
	}
`;

const HighLightedHeading = styled.h2`
	font-size: ${({ theme }) => theme.font.size.headingSmall};
	position: relative;
	&::before {
		z-index: -1;
		position: absolute;
		content: '';
		width: 100%;
		height: calc(${({ theme }) => theme.font.size.headingSmall} * 1.5);
		top: calc(-${({ theme }) => theme.font.size.headingSmall} / 6);
		left: -50%;
		background-color: ${({ theme }) => theme.color.beige};
	}
`;

const StyledList = styled.ul`
	padding: 0;
	list-style: none;
	li {
		margin: 30px 0;
		h3 {
			font-family: ${({ theme }) => theme.font.family.montserrat};
			font-weight: 700;
			margin: 0;
		}
	}
`;

const Homepage = ({ data }) => (
	<main>
		<Hero imageSource={data.hero.publicURL}>
			<HeroHeading>Biuro nieruchomości, którego potrzebujesz</HeroHeading>
			<HeroParagraph>
				Sprawdź, co oznacza dla nas bezkonkurencyjność.
			</HeroParagraph>
		</Hero>
		<ContentWrapper>
			<WelcomeSection>
				<WelcomeSectionContent>
					<h2>Obsługę nieruchomości wymyśliliśmy na nowo</h2>
					<p>
						Modern Studio to nowoczesne biuro nieruchomości z profesjonalnym i
						innowacyjnym podejściem do tematu nieruchomości i inwestycji.
					</p>
					<p>
						Klienci wybierają nas, ponieważ zakres naszych usług wykracza poza
						to, co jest w stanie zaoferować konkurencja.
					</p>
				</WelcomeSectionContent>
				<WelcomeSectionImage imageSource={data.welcome.publicURL} />
			</WelcomeSection>
			<div>
				<HighLightedHeading>Dlaczego szukasz właśnie nas?</HighLightedHeading>
				<StyledList>
					<li>
						<h3> Kompleksowa obsługa</h3>
						<p>
							Kupujesz, sprzedajesz lub chcesz wynająć nieruchomość? Zajmiemy
							się Twoją sprawą od A do Z, aby zaoszczędzić Twój czas.
						</p>
					</li>
					<li>
						<h3>Agent na wyłączność</h3>
						<p>
							W powierzane nam zlecenia angażujemy się w 100% – dzięki nam
							zaoszczędzisz maksimum czasu, zachowując przy tym pełną kontrolę.
						</p>
					</li>
					<li>
						<h3>Zgrany zespół</h3>
						<p>
							Doskonale rozumiemy Twoje potrzeby. Jesteśmy zespołem o
							zróżnicowanych kompetencjach, dzięki którym świetnie się
							uzupełniamy.
						</p>
					</li>
				</StyledList>
			</div>
			<div>
				<h2>Oferta</h2>
				<div>
					<button>Bieżące oferty</button>
					<button>Nasze realizacje</button>
				</div>
				<div>
					<img src="#" alt="#" />
					<img src="#" alt="#" />
					<img src="#" alt="#" />
					<img src="#" alt="#" />
				</div>
			</div>
			<div>
				<HighLightedHeading>Twój komfort ponad wszystko</HighLightedHeading>
				<p>
					To, co dla innych biur nieruchomości wykracza poza zakres usług, dla
					nas jest standardem. Wyróżnia nas bezkompromisowa troska o interes
					klienta.
				</p>
				<button>Sprawdź pełen zakres naszych usług</button>
				<StyledList>
					<li>
						<h3>Pośrednictwo</h3>
						<p>
							Profesjonalne i kompleksowe usługi pośrednictwa w sprzedaży,
							zakupie, wynajmie lub najmie nieruchomości
						</p>
					</li>
					<li>
						<h3>Doradztwo</h3>
						<p>
							Współpracujemy z najlepszymi kancelariami prawnymi i notarialnymi,
							zapewniamy fachowe doradztwo w zakresie kredytowania i
							ubezpieczeń.
						</p>
					</li>
					<li>
						<h3>Home staging</h3>
						<p>
							Modna i funkcjonalna metamorfoza wnętrza mieszkania, domu czy
							biura podnosi atrakcyjność oferty na rynku.
						</p>
					</li>
					<li>
						<h3>Współpraca z najlepszymi</h3>
						<p>
							Poznański rynek znamy jak własną kieszeń – współpracując z nami
							wybierasz najlepszych deweloperów, prawników i architektów.
						</p>
					</li>
				</StyledList>
			</div>
			<div>
				<HighLightedHeading>Poznaj nasz zespół</HighLightedHeading>
				<p>
					Dzięki doskonałej współpracy i przyjacielskiej atmosferze udało nam
					się stworzyć zespół dokosnały.
				</p>
				<button>Sprawdź, kim jesteśmy</button>
			</div>
			<div>
				<h2>Co mówią o nas nasi klienci?</h2>
				<p>
					Bezkompromisowo wspieramy naszych klientów a ich satysfakcja jest dla
					nas najważniejszym celem.
				</p>
				<div>
					<div>
						<p>
							Udało się znaleźć kupca na nasze mieszkanie w jedne dzień! Cały
							proces był przeprowadzony bardzo sprawnie, profesjonalnie i dla
							nas jako klientów bezboleśnie. Ania ma prawdziwy dar tłumaczenia
							zawiłości i dopinania detali.
						</p>
						<p>Katarzyna</p>
					</div>
					<div>
						<p>
							Współpraca na najwyższym poziomie. Jeśli zależy Wam na szybkiej,
							bezproblemowej sprzedaży czy zakupie mieszkania/ domu to nie ma
							lepszego miejsca.
						</p>
						<p>Kamila</p>
					</div>
				</div>
			</div>
			<form action="#">
				<h2>Napisz do nas</h2>
				<input
					type="email"
					name="emial"
					id="email"
					placeholder="Adres e-mail"
				/>
				<textarea name="message" id="message" placeholder="Wiadomość" />
				<button>Wyślij</button>
			</form>
		</ContentWrapper>
	</main>
);

export const query = graphql`
	query {
		hero: file(relativePath: { regex: "/homepage/0_hero.jpg/" }) {
			publicURL
		}
		welcome: file(relativePath: { regex: "/homepage/1_welcome.jpg/" }) {
			publicURL
		}
	}
`;

export default Homepage;
