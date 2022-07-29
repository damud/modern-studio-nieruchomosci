import React from 'react';
import styled from 'styled-components';
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles';
import { graphql } from 'gatsby';

const Hero = styled.div`
	width: 100wh;
	height: 90vh;
	margin: 0 -20px;
	background-image: url('${({ imageSource }) => imageSource}');
	background-size: cover;
	background-position: 10% 0;
	display: flex;
	justify-content: flex-end;
	text-align: center;
	flex-direction: column;
	padding-bottom: 50px;

	h1 {
		font-size: ${({ theme }) => theme.font.size.heading};
		margin: 0;
	}

	h1,
	p {
		color: white;
		text-shadow: 0 0 20px black;
	}
`;

const Zespol = ({ data }) => (
	<ContentWrapper isSubpage>
		<Hero imageSource={data.hero0.publicURL}>
			<h1>Zespoł</h1>
			<p>
				Razem tworzymy wyjątkowy zespół. Zobacz, dlaczego warto z nami
				współpracować.
			</p>
		</Hero>
	</ContentWrapper>
);

export const query = graphql`
	query {
		hero0: file(relativePath: { regex: "/zespol/0_hero.jpg/" }) {
			publicURL
		}
		ania1: file(relativePath: { regex: "/zespol/1_ania.jpg/" }) {
			publicURL
		}
		amanda2: file(relativePath: { regex: "/zespol/2_amanda.jpg/" }) {
			publicURL
		}
		kamila3: file(relativePath: { regex: "/zespol/3_kamila.jpg/" }) {
			publicURL
		}

		marta4: file(relativePath: { regex: "/zespol/4_marta.jpg/" }) {
			publicURL
		}
		patrycja5: file(relativePath: { regex: "/zespol/5_patrycja.jpg/" }) {
			publicURL
		}
	}
`;

export default Zespol;
