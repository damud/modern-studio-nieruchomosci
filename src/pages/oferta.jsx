import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading';
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles';

const Address = styled.p`
	font-weight: 700;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		width: 40%;
		height: 1px;
		background-color: black;
		bottom: -10px;
		left: 0;
	}
`;
const Oferta = ({ data }) => (
	<ContentWrapper isSubpage>
		<div>
			<Address>Marynarska 21</Address>
			<HighlightedHeading>
				Magiczna przestrzeń dla dużej rodziny
			</HighlightedHeading>
			<img src={data.oferta.publicURL} alt="" />
			<p>
				Pomimo braku dostępu do morza w Poznaniu, jak widać za oknem, dla nas
				nie ma rzeczy niemożliwych. Wyjątkowe mieszkanie z widokiem, którego nie
				da się zapomnieć.
			</p>
		</div>
		<ul>
			<li>Typ budynku</li>
			<li>Pomieszczenia</li>
			<li>Dostępność</li>
			<li>Powierzchnia</li>
			<li>Rodzaj oferty</li>
		</ul>
		<div>
			<img src={data.avatar.publicURL} alt="" />
			<div>
				<p>Kontakt:</p>
				<p>Anna Żarczyńska</p>
				<p>ania@msnieruchomosci.pl</p>
				<p>730 026 439</p>
			</div>
		</div>
	</ContentWrapper>
);

export const query = graphql`
	query {
		oferta: file(relativePath: { regex: "/oferta/temporary-oferta.jpg/" }) {
			publicURL
		}
		avatar: file(relativePath: { regex: "/oferta/temporary-avatar.jpg/" }) {
			publicURL
		}
	}
`;

export default Oferta;
