import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import AreaIcon from 'assets/icons-components/area.svg';
import AvailabilityIcon from 'assets/icons-components/availability.svg';
import OfferTypeIcon from 'assets/icons-components/offer-type.svg';
import RoomsIcon from 'assets/icons-components/rooms.svg';
import BuildingTypeIcon from 'assets/icons-components/building-type.svg';
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

const OfferDetailsList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 50px 0;

	li {
		display: flex;
		margin: 20px 0;

		p {
			margin: 4px 10px;
		}

		p:first-child {
			font-weight: 700;
		}
	}
`;

const ContactDetails = styled.div`
	display: flex;
	margin-bottom: 50px;

	img {
		width: 100px;
		height: 100px;
		margin-right: 20px;
	}

	p {
		margin: 0;
	}

	p:first-child {
		font-weight: bold;
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
		<OfferDetailsList>
			<li>
				<BuildingTypeIcon />
				<div>
					<p>Typ budynku</p>
					<p>Blok</p>
				</div>
			</li>

			<li>
				<RoomsIcon />
				<div>
					<p>Pomieszczenia</p>
					<p>4 pokoje / 2 łazienki</p>
				</div>
			</li>
			<li>
				<AvailabilityIcon />
				<div>
					<p>Dostępność</p>
					<p>Styczeń 2022</p>
				</div>
			</li>
			<li>
				<AreaIcon />
				<div>
					<p>Powierzchnia</p>
					<p>95m2</p>
				</div>
			</li>
			<li>
				<OfferTypeIcon />
				<div>
					<p>Rodzaj oferty</p>
					<p>wynajem</p>
				</div>
			</li>
		</OfferDetailsList>
		<ContactDetails>
			<img src={data.avatar.publicURL} alt="" />
			<div>
				<p>Kontakt:</p>
				<p>Anna Żarczyńska</p>
				<p>ania@msnieruchomosci.pl</p>
				<p>730 026 439</p>
			</div>
		</ContactDetails>
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
