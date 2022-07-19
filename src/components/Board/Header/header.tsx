import React, { FC } from "react";
import styled from "styled-components";

export const Header = () => {
	return <Title> Trello Alexey </Title>;
};

const Title = styled.div`
	display: flex;
	justify-content: center;
	font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
	font-size: 25px;
	color: red;
	padding: 10px;
`;
