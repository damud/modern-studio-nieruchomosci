import styled from 'styled-components';

export const Welcome = styled.div`
	${({ theme }) => theme.mq.desktop} {
		text-align: center;
		max-width: 500px;
		margin: 0 auto 40px;
	}
`;

export const FiltersList = styled.ul`
	margin: 0 0 50px;
	padding: 0;
	display: flex;
	flex-direction: column;
	list-style: none;
	width: 100%;
	justify-content: flex-start;

	li {
		padding: 10px 0;
		font-weight: 700;
	}
	li:first-child {
		text-decoration: underline;
	}

	${({ theme }) => theme.mq.desktop} {
		flex-direction: row;
		justify-content: center;
		align-items: center;
		li {
			padding: 20px 35px;
		}
	}
`;

export const Gallery = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 50px;

	${({ theme }) => theme.mq.tablet} {
		grid-template-columns: repeat(2, 1fr);
	}

	${({ theme }) => theme.mq.desktop} {
		grid-template-columns: repeat(3, 1fr);
	}
`;
