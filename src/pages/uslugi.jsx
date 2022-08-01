import React from 'react';
import BlocksIcon from 'assets/icons-components/blocks.svg';
import ConsultancyIcon from 'assets/icons-components/consultancy.svg';
import HeartIcon from 'assets/icons-components/heart.svg';
import KeyIcon from 'assets/icons-components/key.svg';
import PeopleIcon from 'assets/icons-components/people.svg';
import SuitcaseIcon from 'assets/icons-components/suitcase.svg';
import { graphql } from 'gatsby';
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles';
import styled from 'styled-components';
import arrowIcon from 'assets/icons/arrow.svg';
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading';
import { StyledList } from '../components/StyledList/StyledList.styles';

const Hero = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 80vh;
	margin-bottom: 100px;
	h1 {
		margin: 0;
		font-size: ${({ theme }) => theme.font.size.heading};
	}

	${({ theme }) => theme.mq.tablet} {
		height: 40vh;
	}

	${({ theme }) => theme.mq.desktop} {
		height: ${({ theme }) => theme.size.desktopHeroHeight};
		justify-content: flex-end;

		h1 {
			max-width: 500px;
			margin-bottom: 380px;
		}
	}
`;
const HeroInfo = styled.div`
	a {
		color: black;
		font-weight: 700;
		position: relative;
		left: 30px;
		&::before {
			position: absolute;
			content: '';
			background-image: url('${arrowIcon}');
			background-repeat: no-repeat;
			background-size: contain;
			background-position: 0 50%;
			width: 20px;
			height: 20px;
			left: -30px;
			top: 50%;
			transform: translateY(-50%) rotate(90deg);
		}
	}

	${({ theme }) => theme.mq.desktop} {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-direction: row-reverse;

		&::before {
			content: '';
			height: 1px;
			width: 100%;
			position: absolute;
			background-color: ${({ theme }) => theme.color.steel};
			transform: translateY(-50px);
		}

		p {
			margin: 0;
			width: 460px;
		}
	}
`;

const HeroImage = styled.div`
	background-image: url('${({ imageSource }) => imageSource}');
	background-position: 50% 50%;
	background-size: cover;
	width: 90%;
	height: 60%;
	position: absolute;
	z-index: -1;
	top: 15%;
	right: 0;

	${({ theme }) => theme.mq.tablet} {
		width: 70%;
	}

	${({ theme }) => theme.mq.desktop} {
		top: 0;
		width: 75%;
		height: 75%;
	}
`;

const ServicesStyledList = styled(StyledList)`
	li {
		margin: 80px 0;
		max-width: 500px;
	}
	svg {
		margin-bottom: 25px;
	}

	${({ theme }) => theme.mq.desktop} {
		grid-template-rows: repeat(2, 300px);
	}
`;

const Uslugi = ({ data }) => (
	<ContentWrapper isSubpage>
		<Hero>
			<h1>Obsługę nieruchomości wymyśliliśmy na nowo</h1>
			<HeroImage imageSource={data.hero.publicURL} alt="" />
			<HeroInfo>
				<p>
					Poziom zaangażowania i zakres usług Modern Studio wykracza daleko poza
					to, co oferują inne biura nieruchomości – sprawdź, jak możemy Ci
					pomóc.
				</p>
				<a href="#szczegoly">Czytaj dalej</a>
			</HeroInfo>
		</Hero>
		<HighlightedHeading id="szczegoly">Jak możemy ci pomóc?</HighlightedHeading>
		<ServicesStyledList>
			<li>
				<PeopleIcon />
				<h3>Pośrednictwo w obrocie nieruchomościami</h3>
				<p>
					Profesjonalne i kompleksowe usługi pośrednictwa w sprzedaży, zakupie,
					wynajmie lub najmie nieruchomości.
				</p>
			</li>
			<li>
				<ConsultancyIcon />
				<h3>Kompleksowe doradztwo</h3>
				<p>
					Współpracujemy z najlepszymi kancelariami prawnymi i notarialnymi,
					zapewniamy fachowe doradztwo w zakresie kredytowania i ubezpieczeń.
				</p>
			</li>
			<li>
				<HeartIcon />
				<h3>Home staging</h3>
				<p>
					Profesjonalne przygotowanie nieruchomości niewielkim nakładem środków
					do szybkiej transakcji. Modna i funkcjonalna metamorfoza wnętrza
					mieszkania, domu czy biura.
				</p>
			</li>
			<li>
				<BlocksIcon />
				<h3>Współpraca z deweloperem</h3>
				<p>
					Pośrednictwo w zakresie sprzedaży inwestycji deweloperskiej (pełen
					zakres, znajomość lokalnych inwestycji/pewność wysokiej jakości
					wykonania)
				</p>
			</li>
			<li>
				<SuitcaseIcon />
				<h3>Współpraca z inwestorem</h3>
				<p>
					Kompleksowa obsługa klienta poszukującego nieruchomości w celach
					inwestycyjnych (lokata kapitału, analiza rynku).
				</p>
			</li>
			<li>
				<KeyIcon />
				<h3>Współpraca z architektem</h3>
				<p>
					Współpraca z zaprzyjaźnionym biurem architektonicznym w zakresie
					projektowania wnętrz (zarówno prywatnych jak i komercyjnych) i
					kompleksowej usługi wykończenie pod klucz.
				</p>
			</li>
		</ServicesStyledList>
	</ContentWrapper>
);

export const query = graphql`
	query {
		hero: file(relativePath: { regex: "/uslugi/0_hero.jpg/" }) {
			publicURL
		}
	}
`;

export default Uslugi;
