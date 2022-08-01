import React from 'react';
import { graphql } from 'gatsby';
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles';
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading';
import PhoneIcon from '../assets/icons-components/phone.svg';
import {
	ContactForm,
	StyledButton,
} from '../assets/styles/pages/homepage.styles';

const Kontakt = ({ data }) => (
	<ContentWrapper isSubpage>
		<div>
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
		</div>
		<ContactForm action="#">
			<label htmlFor="email">Adres e-mail</label>
			<input type="email" name="email" id="email" placeholder="Adres e-mail" />
			<label htmlFor="message">Treść</label>
			<textarea name="message" id="message" placeholder="Wiadomość" />
			<StyledButton>Wyślij</StyledButton>
		</ContactForm>
		<img src={data.hero.publicURL} alt="" />
	</ContentWrapper>
);

export const query = graphql`
	query {
		hero: file(relativePath: { regex: "/kontakt/0_hero.jpg/" }) {
			publicURL
		}
	}
`;

export default Kontakt;
