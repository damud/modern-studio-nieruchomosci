import React from 'react';
import { graphql } from 'gatsby';
import AreaIcon from 'assets/icons-components/area.svg';
import AvailabilityIcon from 'assets/icons-components/availability.svg';
import OfferTypeIcon from 'assets/icons-components/offer-type.svg';
import RoomsIcon from 'assets/icons-components/rooms.svg';
import BuildingTypeIcon from 'assets/icons-components/building-type.svg';
import {
	Address,
	OfferDescription,
	OfferDetailsList,
	OfferTitle,
	StyledContentWrapper,
	Gallery,
} from 'assets/styles/pages/Oferta.styles';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import { ContactDetails } from 'components/ContactDetails/ContactDetails';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const galleryOptions = {
	showStatus: false,
	showThumbs: false,
	infiniteLoop: true,
};

const OfertaTemplate = ({ data: { oferta } }) => (
	<StyledContentWrapper isSubpage>
		<OfferTitle>
			<Address>{oferta.adres}</Address>
			<HighlightedHeading>{oferta.tytul}</HighlightedHeading>
		</OfferTitle>
		<Gallery>
			<Carousel {...galleryOptions}>
				{oferta.galeria.map((item) => (
					<img src={item.file.url} key={item.file.url} alt="" />
				))}
			</Carousel>
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
		<ContactDetails contact={oferta.kontakt} />
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
