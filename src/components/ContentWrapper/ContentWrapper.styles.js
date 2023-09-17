import styled from 'styled-components';

export const ContentWrapper = styled.div`
	margin-top: ${({ isSubpage }) => (isSubpage ? '130px' : '90px')};
	padding: 0 20px;

	${({ theme }) => theme.mq.desktop} {
		max-width: 1920px;
		margin: ${({ isSubpage }) => (isSubpage ? '180px' : '80px')} auto 0 auto;
		padding: 0 100px;
	}
`;
