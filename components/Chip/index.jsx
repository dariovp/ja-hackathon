import { useState } from 'react';
import styled from 'styled-components';
import { colors } from 'styles/theme';


const StyledChip = styled.div`
	background-color: ${props => props.active ? colors.primary : 'white'};
	border-width: 1px;
	border-color: ${colors.primary};
	border-radius: 40px;
	color: ${props => props.active ? 'white' : colors.primary};
	font-size: 1rem;
	cursor: pointer;
	border-style: solid;
	padding: 0.3rem 1rem;
	width: min-content;
	margin: 0.5rem 0.2rem;
`;

export const Chip = ({children}) => {
	const [active, setActive] = useState(false);

	return (
		<StyledChip active={active} onClick={() => {setActive(!active)}}>
			{children}
		</StyledChip>
	);
}