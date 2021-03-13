import Head from "next/head";
import NavBar from "../components/NavBar";
import { Section } from "../components/Section";
import styles from "../styles/Home.module.css";
import Intro from "../components/Section/Intro";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import WhatIs from "../components/Section/WhatIs.jsx";
import Footer from "../components/Footer";
import LoginNav from "components/Login/NavBar";
import MainSection from "components/Login/MainSection";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { colors } from "styles/theme";
import { Button } from "react-bootstrap";
import Draw from "../public/SignUp.svg";
import { useRouter } from "next/router";


const StyledAlias = styled.div`
	text-align: center;
	font-size: 2rem;
	color: black;
	font-family: 'Open Sans', sans-serif;
	margin: 2rem;
`;

const StyledInput = styled(TextField)`
	margin: 1rem;
	width: 80%;
`;

const StyledButton = styled(Button)`
	margin: 1.5rem;
	width: 80%;
`;

const StyledImg = styled.img`
	max-width: 100%;
`;

export default function Home() {
	const [name, setName] = useState("");

	const router = useRouter();

	return (
		<div className={styles.container}>
			<Head>
				<title>JA Hackathon</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<LoginNav />
			<MainSection>
				<StyledImg src={Draw} />
				<StyledAlias>
					Ingresa tu Alias
				</StyledAlias>
				
				<StyledInput id="standard-basic" label="Nombre" onChange={(e) => { setName(e.target.value) }} />
				<StyledButton variant="success" onClick={() => {router.push(`/sender?name=${name}`)}} >Aceptar</StyledButton>{' '}
			</MainSection>
		</div>
	)

}
