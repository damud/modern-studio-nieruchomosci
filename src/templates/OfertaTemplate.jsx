import React from 'react';
import { graphql } from 'gatsby';
import AreaIcon from 'assets/icons-components/area.svg';
import AvailabilityIcon from 'assets/icons-components/availability.svg';
import OfferTypeIcon from 'assets/icons-components/offer-type.svg';
import RoomsIcon from 'assets/icons-components/rooms.svg';
import BuildingTypeIcon from 'assets/icons-components/building-type.svg';
import {
	Address,
	ContactDetails,
	OfferDescription,
	OfferDetailsList,
	OfferTitle,
	StyledContentWrapper,
} from 'assets/styles/pages/Oferta.styles';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import { Gallery } from 'assets/styles/pages/Oferty.styles';

const OfertaTemplate = ({ data: { oferta, avatar } }) => (
	<StyledContentWrapper isSubpage>
		<OfferTitle>
			<Address>{oferta.adres}</Address>
			<HighlightedHeading>{oferta.tytul}</HighlightedHeading>
		</OfferTitle>
		<Gallery>
			<img src={oferta.galeria[0].file.url} alt="" />
		</Gallery>
		<OfferDescription>{oferta.opis.opis}</OfferDescription>
		<OfferDetailsList>
			<li>
				<BuildingTypeIcon />
				<div>
					<p>Typ budynku</p>
					<p>{oferta.typBudynku}</p>
				</div>
			</li>

			<li>
				<RoomsIcon />
				<div>
					<p>Pomieszczenia</p>
					<p>{oferta.pomieszczenia}</p>
				</div>
			</li>
			<li>
				<AvailabilityIcon />
				<div>
					<p>Dostępność</p>
					<p>{oferta.dostepnosc}</p>
				</div>
			</li>
			<li>
				<AreaIcon />
				<div>
					<p>Powierzchnia</p>
					<p>{oferta.powierzchnia}</p>
				</div>
			</li>
			<li>
				<OfferTypeIcon />
				<div>
					<p>Rodzaj oferty</p>
					<p>{oferta.rodzajOferty}</p>
				</div>
			</li>
		</OfferDetailsList>
		<ContactDetails>
			<img src={avatar.publicURL} alt="" />
			<div>
				<p>Kontakt:</p>
				<p>Anna Żarczyńska</p>
				<p>ania@msnieruchomosci.pl</p>
				<p>730 026 439</p>
			</div>
		</ContactDetails>
	</StyledContentWrapper>
);

export const query = graphql`
	query {
		oferta: contentfulOferta(
			id: { eq: "fae3385c-d0fc-56c1-859e-fa0bfc7db2a4" }
		) {
			tytul
			typBudynku
			rodzajOferty
			powierzchnia
			pomieszczenia
			kontakt
			dostepnosc
			opis {
				opis
			}
			galeria {
				file {
					url
				}
			}
			adres
		}
		avatar: file(relativePath: { regex: "/oferta/temporary-avatar.jpg/" }) {
			publicURL
		}
	}
`;

export default OfertaTemplate;
