import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "../Modal";
import { FC } from "react";

interface Comment {
	userText: string;
	author: string;
}

interface CardProps {
	cardNum: number;
	name: string;
	author: string;
	openModal: () => void;
	deleteCard: (columnNum: number, cardNum: number) => void;
	isSetCardNumber: (CardNumber: number) => void;
	columnNum: number;
	description: string;
	comment: Comment[];

	setCurrentCard: React.Dispatch<
		React.SetStateAction<{
			name: string;
			author: string;
			description: string;
			comment: Comment[];
		}>
	>;
}

export const Card: FC<CardProps> = ({
	cardNum,
	name,
	author,
	openModal,
	setCurrentCard,
	deleteCard,
	columnNum,
	isSetCardNumber,
	description,
	comment,
}) => {
	const onCardClick = () => {
		setCurrentCard({
			name: name,
			author: author,
			description: description,
			comment,
		});
		openModal();
		isSetCardNumber(cardNum);
	};

	return (
		<Wrapper>
			<p onClick={onCardClick}>{name}</p>
			<button onClick={() => deleteCard(columnNum, cardNum)}>
				<img src="https://w7.pngwing.com/pngs/169/498/png-transparent-gray-trash-bin-art-computer-icons-icon-remove-s-miscellaneous-text-rectangle-thumbnail.png" />
			</button>{" "}
			<img src="https://cdn-icons-png.flaticon.com/512/25/25663.png" />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	img {
		width: 20px;
	}
	background-color: #fff;
	box-shadow: 5px 2px 5px black;

	cursor: pointer;
`;
