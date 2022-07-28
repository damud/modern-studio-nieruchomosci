import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading';
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles';

const ThumbnailWarpper = styled.div`
	width: 100%;
	height: 450px;
	position: relative;
	display: flex;
	align-items: flex-end;
`;

const ThumbnailImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: left bottom;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
`;

const ThumbnailInfo = styled.div`
	width: 100%;
	padding: 20px;

	p:first-child {
		font-size: ${({ theme }) => theme.font.size.thumbnailSmall};
		font-weight: 700;
		text-transform: uppercase;
		color: white;
		position: relative;
	}
	p:first-child::after {
		content: '';
		position: absolute;
		width: 40%;
		height: 1px;
		background-color: white;
		bottom: -10px;
		left: 0;
	}
	p:last-child {
		font-size: ${({ theme }) => theme.font.size.thumbnailSmall};
		font-weight: 700;
		color: white;
	}
`;

export const Thumbnail = ({ imageSource }) => {
	return (
		<ThumbnailWarpper>
			<ThumbnailImage src={imageSource} alt="" />
			<ThumbnailInfo>
				<p>Polna 20</p>
				<p>Nowoczesny apartament z klasą</p>
			</ThumbnailInfo>
		</ThumbnailWarpper>
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
