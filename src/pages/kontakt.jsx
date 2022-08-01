import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles';
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading';
import PhoneIcon from '../assets/icons-components/phone.svg';
import {
	ContactForm,
	StyledButton,
} from '../assets/styles/pages/homepage.styles';

const ContactInfoWrapper = styled.section`
	a {
		color: black;
		display: flex;
		align-items: center;
		margin: 5px 0 10px -7px;
	}
`;

const ContactPhoto = styled.div`
	display: none;

	${({ theme }) => theme.mq.desktop} {
		display: initial;
		position: relative;
		background-image: url('${({ imageSource }) => imageSource}');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 0 80%;

		${({ theme }) =>
			theme.effect.corner({
				position: 'bottomLeft',
				size: '100px',
				distance: '30px;',
				color: theme.color.steel,
			})};
	}
`;

const ContactContentWrapper = styled(ContentWrapper)`
	${({ theme }) => theme.mq.desktop} {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 0 100px;

		${ContactForm} {
			width: 100%;
			margin: 0;
		}

		${ContactForm}, ${ContactInfoWrapper} {
			grid-column: 1 / 2;
		}

		${ContactPhoto} {
			grid-column: 2 / 3;
			grid-row: 1 / 3;
		}
	}
`;

const Kontakt = ({ data }) => (
	<ContactContentWrapper isSubpage>
		<ContactInfoWrapper>
			<HighlightedHeading>Kontakt</HighlightedHeading>
			<p>
				Szukasz nieruchomości dla siebie? A może potrzebujesz fachowej pomocy
				przy sprzedaży własnej nieruchomości? Chętnie odpowiemy na Twoje
				pytania. Napisz lub zadzwoń.
			</p>
			<a href="tel:730026439">
				<PhoneIcon />
				730 026 439
			</a>
		</ContactInfoWrapper>
		<ContactForm action="#">
			<label htmlFor="email">Adres e-mail</label>
			<input type="email" name="email" id="email" placeholder="Adres e-mail" />
			<label htmlFor="message">Treść</label>
			<textarea name="message" id="message" placeholder="Wiadomość" />
			<StyledButton>Wyślij</StyledButton>
		</ContactForm>
		<ContactPhoto imageSource={data.hero.publicURL} />
	</ContactContentWrapper>
);

export const query = graphql`
	query {
		hero: file(relativePath: { regex: "/kontakt/0_hero.jpg/" }) {
			publicURL
		}
	}
`;

export default Kontakt;
