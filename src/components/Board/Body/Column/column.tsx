import { Card } from "./Card";
import styled from "styled-components";
import { FC, useRef, useState } from "react";
import { Comm } from "../Column/Modal/Comments/comments";
import { Modal } from "./Modal";
import { Form } from "../form";
import { Board } from "../../board";
import React from "react";
interface ColumnName {
	name: string;
	columnNum: number;
}

interface Comment {
	userText: string;
	author: string;
}

export interface CardProps {
	name: string;
	author: string;
	description: string;
	comment: Comment[];
}

interface BoardItem {
	id: number;
	name: string;

	isCardAdding: boolean;
	cards: CardProps[];
}

interface Boarding {
	// [key: number]: BoardItem;
	columnNum: number;
	columnName: string;
	cards: CardProps[];
	addCard: (columnNum: number, newCard: CardProps) => void;
	deleteCard: (columnNum: number, cardNum: number) => void;
	editColumnName: (columnNum: number, columnName: string) => void;
	editCardName: (columnNum: number, name: string, cardNum: number) => void;
	editDescription: (
		columnNum: number,
		description: string,
		cardNum: number
	) => void;
	AddComment: (columnNum: number, cardNum: number, newComment: Comm) => void;
}

export const Column: FC<Boarding> = ({
	columnName,
	columnNum,
	cards,
	addCard,
	deleteCard,
	editColumnName,
	editCardName,
	editDescription,
	AddComment,
}) => {
	const [isModalFormOpen, setIsModalFormOpen] = useState(false);

	const openModalForm = () => {
		setIsModalFormOpen(!isModalFormOpen);
	};

	const [isModalOpen, setIsModalOpen] = useState(false);

	const setModalOpen = () => {
		setIsModalOpen(!isModalOpen);
	};
	const setModalClose = () => {
		setIsModalOpen(false);
	};

	const [CardNumber, setCardNumber] = useState(0);
	const isSetCardNumber = (CardNumber: number) => {
		setCardNumber(CardNumber);
	};

	const setSubmitNameColumn = (
		event: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (event.code === "Enter") {
			editColumnName(columnNum, inputNameColumn);

			isInputNameColumnClose();
		}
	};

	const setSubmitNameCard = (
		event: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (event.code === "Enter") {
			addCard(columnNum, newCard);
			openModalForm();
		}
	};

	const [currentCard, setCurrentCard] = useState({
		name: "",
		author: "",
		description: "",
		comment: [
			{
				userText: "",
				author: "",
			},
		],
	});

	const [inputNameCard, setInputNameCard] = useState("");
	const [inputNameColumn, setInputNameColumn] = useState(columnName);
	const [inputFormNameColumn, setInputFormNameColumn] = useState(false);
	const isInputNameColumn = () => {
		setInputFormNameColumn(true);
	};
	const isInputNameColumnClose = () => {
		setInputFormNameColumn(false);
	};

	const newCard = {
		id: "",
		name: inputNameCard,
		author: "",
		description: "",
		comment: [
			{
				userText: "",
				author: "",
			},
		],
	};

	const textInput = React.createRef<HTMLInputElement>();

	const handleClick = () => {
		textInput.current?.focus();
	};

	const opMFHC = () => {
		handleClick();
		openModalForm();
	};

	return (
		<Block>
			<p onClick={isInputNameColumn}>
				{inputFormNameColumn ? (
					<input
						autoFocus
						value={inputNameColumn}
						onChange={(event) =>
							setInputNameColumn(event.target.value)
						}
						onBlur={isInputNameColumnClose}
						onKeyDown={setSubmitNameColumn}
					/>
				) : (
					<p>{columnName}</p>
				)}

				{/* {inputFormNameColumn && (
					<input
						value={inputNameColumn}
						onChange={(event) =>
							setInputNameColumn(event.target.value)
						}
						onKeyDown={setSubmitNameColumn}
					/>
				)} */}
			</p>
			<CarName>
				{cards.map((item, index) => (
					<Card
						cardNum={index}
						key={index}
						name={item.name}
						author={item.author}
						openModal={setModalOpen}
						setCurrentCard={setCurrentCard}
						deleteCard={deleteCard}
						columnNum={columnNum}
						isSetCardNumber={isSetCardNumber}
						description={item.description}
						comment={item.comment}
					/>
				))}
			</CarName>
			{isModalOpen && (
				<Modal
					columnName={columnName}
					name={currentCard.name}
					cardAuthor={currentCard.author}
					description={currentCard.description}
					onModalClose={setModalClose}
					editCardName={editCardName}
					columnNum={columnNum}
					cardNum={CardNumber}
					editDescription={editDescription}
					comment={currentCard.comment}
					deleteCard={deleteCard}
					AddComment={AddComment}
				/>
			)}
			<Button onClick={opMFHC}>
				{isModalFormOpen ? (
					<button
						onClick={() => {
							addCard(columnNum, newCard);
						}}
					>
						Add Card
					</button>
				) : (
					"+ Add new card"
				)}
			</Button>
			{isModalFormOpen && (
				<input
					ref={textInput}
					onChange={(event) => setInputNameCard(event.target.value)}
					onKeyDown={setSubmitNameCard}
					onBlur={openModalForm}
				/>
			)}{" "}
		</Block>
	);
};

const Block = styled.div`
	padding: 10px;
	font-family: "Times New Roman", Times, serif;
	font-weight: 700;
	min-width: 200px;
	height: 100%;
	background-color: #d8d0d0;
	border-radius: 10px;
`;
const CarName = styled.div``;

const Button = styled.div`
	padding-top: 15px;
	font-family: "Times New Roman", Times, serif;
	color: rgb(119, 119, 121);
	cursor: pointer;
`;
