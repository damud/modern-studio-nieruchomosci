import React from 'react';
import { graphql } from 'gatsby';
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading';
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles';

export const Thumbnail = ({ imageSource }) => {
	return (
		<div>
			<img src={imageSource} alt="" />

			<p>Polna 20</p>
			<p>Nowoczesny apartament z klasą</p>
		</div>
	);
};

const Oferty = ({ data }) => (
	<ContentWrapper isSubpage>
		<HighlightedHeading>Nasza oferta</HighlightedHeading>
		<p>
			Nieustannie poszukujemy nowych ofert nieruchomości. Wybierz typ
			nieruchomości, który Cię interesuje.
		</p>

		<Thumbnail imageSource={data.thumbnail.publicURL} />
	</ContentWrapper>
);

export const query = graphql`
	query {
		thumbnail: file(
			relativePath: { regex: "/oferty/temporary-thumbnail.jpg/" }
		) {
			publicURL
		}
	}
`;

export default Oferty;
