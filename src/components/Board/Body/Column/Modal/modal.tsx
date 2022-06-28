import styled from "styled-components";
import React, { FC, useState } from "react";

interface ModalProps {
	cardName: string;
	cardAuthor: string;
	onModalClose: () => void;
}
export const Modal: FC<ModalProps> = ({
	cardName,
	cardAuthor,
	onModalClose,
}) => {
	return (
		<ModWin>
			<Header>
				{" "}
				<Name>{cardName}</Name>{" "}
				<CloseIcon onClick={onModalClose}>+</CloseIcon>
			</Header>
			<p>{cardAuthor}</p>
		</ModWin>
	);
};
const ModWin = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 10px;
	font-family: "Times New Roman", Times, serif;
	font-weight: 700;
	width: 500px;
	height: 400px;
	background-color: #eee3e3;
	border-radius: 10px;
`;
const Name = styled.div`
	font-family: Arial, Helvetica, sans-serif;
	font-weight: 700;
	font-size: 14px;
	padding: 15px;
`;

const Header = styled.div`
	position: relative;
	padding: 15px;
`;

const CloseIcon = styled.span`
	position: absolute;
	top: 0;
	right: 0;
	transform: rotate(45deg);
	font-size: 24px;
	cursor: pointer;
`;
