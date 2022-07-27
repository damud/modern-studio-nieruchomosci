import styled from 'styled-components';
import { Link } from 'gatsby';
import arrowIcon from 'assets/styles/arrow.svg';

export const Hero = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-image: url('${({ imageSource }) => imageSource}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 30%;
	padding: 35px;
`;

export const HeroHeading = styled.h1`
	font-size: ${({ theme }) => theme.font.size.headingMobile};
	margin: 0;
	text-shadow: ${({ theme }) => theme.font.shadow};

	${({ theme }) => theme.mq.desktop} {
		font-size: ${({ theme }) => theme.font.size.heading};
		max-width: 500px;
		text-align: center;
	}
`;

export const HeroParagraph = styled.p`
	font-size: ${({ theme }) => theme.font.size.paragraph};
	text-shadow: ${({ theme }) => theme.font.shadow};
`;

export const ContentWrapper = styled.div`
	padding: 0 20px;

	${({ theme }) => theme.mq.desktop} {
		max-width: 1600px;
		margin: 0 auto;
		padding: 0 100px;
	}
`;

const StyledSection = styled.section`
	margin: 100px 0;

	${({ theme }) => theme.mq.desktop} {
		margin: 10 0px 0;
	}
`;

export const WelcomeSection = styled(StyledSection)`
	padding: 0 20px;

	${({ theme }) => theme.mq.desktop} {
		margin-bottom: 180px;
		width: 100%;
		position: relative;
		display: flex;
		justify-content: space-between;
	}
`;

export const WelcomeSectionContent = styled.div`
	background-color: ${({ theme }) => theme.color.dark};
	padding: 30px 20px;
	position: relative;

	h2 {
		margin: 0 0 20 px 0;
		font-size: 2.5rem;
		font-weight: 400;
		color: white;
	}

	p {
		font-size: ${({ theme }) => theme.font.size.paragraph};
		font-weight: 300;
		color: white;
	}

	&::after {
		position: absolute;
		width: 70px;
		height: 70px;
		content: '';
		clip-path: polygon(0 16%, 0 0, 100% 0, 100% 100%, 84% 100%, 84% 16%);
		background-color: ${({ theme }) => theme.color.dark};
		right: -20px;
		top: -20px;
	}
	${({ theme }) => theme.mq.desktop} {
		position: absolute;
		width: 55%;
		top: 10vh;
		height: auto;
		padding: 50px;
		right: 20px;

		h2 {
			font-size: ${({ theme }) => theme.font.size.headingSmall};
		}
	}
`;

export const WelcomeSectionImage = styled.div`
	margin-top: 10px;
	width: 90%;
	height: 170px;
	position: relative;
	background-image: url('${({ imageSource }) => imageSource}');
	background-repeat: no-repeat;
	background-size: cover;
	&::after {
		position: absolute;
		width: 70px;
		height: 70px;
		content: '';
		clip-path: polygon(0 0, 16% 0, 16% 84%, 100% 84%, 100% 100%, 0 100%);
		background-color: ${({ theme }) => theme.color.beige};
		left: -20px;
		bottom: -20px;
	}
	${({ theme }) => theme.mq.desktop} {
		z-index: -1;
		left: 0;
		height: 400px;
		width: 80%;
	}
`;
export const AdvantagesSection = styled(StyledSection)`
	${({ theme }) => theme.mq.desktop} {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;
export const ServicesSection = styled(StyledSection)``;

export const StyledList = styled.ul`
	padding: 0;
	list-style: none;
	li {
		margin: 30px 0;
		h3 {
			font-family: ${({ theme }) => theme.font.family.montserrat};
			font-weight: 700;
			margin: 0;
		}
	}

	${({ theme }) => theme.mq.desktop} {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 50px;
	}
`;

export const StyledButton = styled.button`
	border: 1px solid ${({ theme }) => theme.color.black};
	background-color: transparent;
	font-size: ${({ theme }) => theme.font.size.button};
	font-family: ${({ theme }) => theme.font.family.montserrat};
	padding: 10px 15px;
	font-weight: 500;
	text-transform: uppercase;
	display: block;
	margin: ${({ isCentered }) => (isCentered ? '15px auto' : '15px:0')};
`;

export const StyledLinkButton = styled(Link)`
	font-family: ${({ theme }) => theme.font.family.montserrat};
	font-size: ${({ theme }) => theme.font.size.paragraph};
	color: ${({ theme }) => theme.color.dark};
	text-decoration: underline;
	position: relative;
	&::after {
		position: absolute;
		content: '';
		background-image: url('${arrowIcon}');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: 0 50%;
		width: 20px;
		height: 20px;
		right: -35px;
		top: 50%;
		transform: translateY(-50%);
	}
`;

export const ShowcaseSection = styled(StyledSection)`
	h2 {
		font-size: ${({ theme }) => theme.font.size.headingMobile};
		text-align: center;
		margin: 30px 0;

		${({ theme }) => theme.mq.desktop} {
			h2 {
				margin: 0;
			}
		}
	}
`;

export const ShowcaseGallery = styled.div`
	margin: 50px 0;

	${({ theme }) => theme.mq.desktop} {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		grid-gap: 25px;
		position: relative;

		${({ theme }) =>
			theme.effect.corner({
				position: 'topRight',
				distance: '30px',
				size: '80px',
				pseudoelement: 'after',
			})};
		${({ theme }) =>
			theme.effect.corner({
				position: 'bottomLeft',
				distance: '30px',
				size: '80px',
				pseudoelement: 'before',
				color: theme.color.beige,
			})};

		img:nth-child(1) {
			grid-row: 1/2;
		}

		img:nth-child(2) {
			grid-row: 1/3;
		}

		img:nth-child(3) {
			grid-row: 2/4;
		}

		img:nth-child(4) {
			grid-row: 3/4;
		}
	}
`;

export const ShowcaseImage = styled.img`
	width: 100%;
	height: ${({ isBig }) => (isBig ? '250px' : '125px')};
	object-fit: cover;
	margin: 10px 0;

	${({ theme }) => theme.mq.desktop} {
		height: 100%;
		margin: 0;
	}
`;

export const TeamSection = styled(StyledSection)``;

export const TeamImage = styled.div`
	margin-top: 30px;
	width: 90%;
	height: 300px;
	position: relative;
	background-image: url('${({ imageSource }) => imageSource}');
	background-repeat: no-repeat;
	background-size: cover;
	${({ theme }) => theme.effect.corner({ position: 'bottomRight' })};
`;
export const ReviewsSection = styled(StyledSection)``;

export const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	margin-bottom: 100px;

	label {
		font-family: ${({ theme }) => theme.font.family.montserrat};
		font-weight: 300;
		margin: 40px 0 0;
	}

	textarea {
		min-height: 200px;
	}

	input,
	textarea {
		font-family: ${({ theme }) => theme.font.family.montserrat};
		margin: 5px 0;
		resize: none;
		padding: 5px;
	}
`;
