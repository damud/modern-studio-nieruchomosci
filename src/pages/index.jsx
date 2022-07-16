import * as React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
	font-family: ${({ theme }) => theme.font.family.montserrat};
`;

const H2 = styled.h2`
	font-family: ${({ theme }) => theme.font.family.cormorant};
	font-weight: 100;
`;

const IndexPage = () => (
	<main>
		<H1>Modern Studio</H1>
		<H2>Modern Studio</H2>
	</main>
);

export default IndexPage;
