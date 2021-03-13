import styled from 'styled-components'

const StyledSection = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export default function MainSection ({ children }) {
	return (
		<StyledSection>
			{children}
		</StyledSection>
	);
}