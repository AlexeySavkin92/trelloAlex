import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "../Modal";
import { FC } from "react";

interface CardProps {
	cardNum: number;
	name: string;
	author: string;
	openModal: () => void;
	del: (columnNum: number, cardNum: number) => void;

	columnNum: number;

	setCurrentCard: React.Dispatch<
		React.SetStateAction<{
			name: string;
			author: string;
			description: string;
			comment: {
				userText: string;
				author: string;
			};
		}>
	>;
}

export const Card: FC<CardProps> = ({
	cardNum,
	name,
	author,
	openModal,
	setCurrentCard,
	del,
	columnNum,
}) => {
	const onCardClick = () => {
		setCurrentCard({
			name: name,
			author: author,
			description: "Hi!",
			comment: {
				userText: "",
				author: "",
			},
		});
		openModal();
	};

	return (
		<Wrapper>
			<p onClick={onCardClick}>{name}</p>
			<p> {cardNum}</p>
			<button onClick={() => del(columnNum, cardNum)}>
				<img src="https://w7.pngwing.com/pngs/169/498/png-transparent-gray-trash-bin-art-computer-icons-icon-remove-s-miscellaneous-text-rectangle-thumbnail.png" />
			</button>

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
