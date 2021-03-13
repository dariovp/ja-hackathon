import { TextField } from "@material-ui/core";
import styled from 'styled-components';
import MainSection from "components/Login/MainSection";
import LoginNav from "components/Login/NavBar";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { colors } from "styles/theme";
import { Button } from "react-bootstrap";
import { Chip } from "components/Chip";
import Draw from "../public/Adjust.svg";


export default function Skills () {

	const { query: { name } } = useRouter();

	const StyledAlias = styled.div`
		text-align: center;
		font-size: 2rem;
		color: black;
		font-family: 'Open Sans', sans-serif;
		margin: 2rem;
	`;

	const StyledText = styled.div`
		text-align: center;
		font-size: 1.4rem;
		color: black;
		font-family: 'Open Sans', sans-serif;
		margin: 1rem;
	`;

	const StyledInput = styled(TextField)`
		margin: 1rem;
		width: 80%;
	`;

	const StyledButton = styled(Button)`
		background-color: ${colors.primary};
		margin: 1.5rem;
		width: 80%;
	`;

	const StyledImg = styled.img`
		max-width: 85%;
	`;

	const StyledList = styled.div`
		display: flex;
		flex-wrap: wrap;
		width: 80%;
	`;

	return (
		<div className={styles.container}>
			<Head>
				<title>JA Hackathon</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainSection>
				<StyledImg src={Draw} />
				<StyledAlias>
					Bienvenido {name}! 
				</StyledAlias>
				<StyledText>
					¿Cuáles son tus intereses?
				</StyledText>
				<StyledList>
					<Chip>Programacion</Chip>
					<Chip>Cripto</Chip>
					<Chip>Emprendedurismo</Chip>
					<Chip>Finanzas</Chip>
				</StyledList>
				<StyledButton variant="success">
					Aceptar
				</StyledButton>

			</MainSection>
		</div>
	);
}