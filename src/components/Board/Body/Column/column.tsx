import { Card } from "./Card";
import styled from "styled-components";
import { FC, useState } from "react";

import { Modal } from "./Modal";
import { Form } from "../form";
import { Board } from "../../board";
interface ColumnName {
	name: string;
	columnNum: number;
}

interface Comment {
	userText: string;
	author: string;
}

interface CardProps {
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
}

export const Column: FC<Boarding> = ({
	columnName,
	columnNum,
	cards,
	addCard,
	deleteCard,
	editColumnName,
	editCardName,
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

	const [CardNumber, setCardNumber] = useState("");
	const isSetCardNumber = () => {
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

	const [currentCard, setCurrentCard] = useState({
		name: "",
		author: "",
		description: "",
		comment: {
			userText: "",
			author: "",
		},
	});

	const [inputNameCard, setInputNameCard] = useState("");
	const [inputNameColumn, setInputNameColumn] = useState("");
	const [inputFormNameColumn, setInputFormNameColumn] = useState(false);
	const isInputNameColumn = () => {
		setInputFormNameColumn(!inputFormNameColumn);
	};
	const isInputNameColumnClose = () => {
		setInputFormNameColumn(!inputFormNameColumn);
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

	/*	const AddCard = (columnNum: number) => {
		setState({
			...state,
			[columnNum]: {
				...state[columnNum],
				cards: [...state[columnNum].cards, newCard],
			},
		});
	};
	/*	const [cards, setCard] = useState([
		{
			name: "",
			author: "",
		},
	]);
	const AddCard = () => {
		const newCard = {
			name: inputNameCard,
			author: "",
		};
		setCard([...cards, newCard]);
	};  */

	/*onClick={openModalForm}>
				{isModalFormOpen ? <input /> : "+ Add new card"}*/

	return (
		<Block>
			<p onClick={isInputNameColumn}>
				{inputFormNameColumn ? (
					<input
						value={inputNameColumn}
						onChange={(event) =>
							setInputNameColumn(event.target.value)
						}
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
					/>
				))}
			</CarName>
			{isModalOpen && (
				<Modal
					name={currentCard.name}
					cardAuthor={currentCard.author}
					onModalClose={setModalClose}
					editCardName={editCardName}
					columnNum={columnNum}
					cardNum={CardNumber}
				/>
			)}
			<Button onClick={openModalForm}>
				{isModalFormOpen ? "close card" : "+ Add new card"}
			</Button>
			{isModalFormOpen && (
				<input
					value={inputNameCard}
					onChange={(event) => setInputNameCard(event.target.value)}
				/>
			)}
			{isModalFormOpen && (
				<input
					type="submit"
					value="добавить"
					onClick={() => {
						addCard(columnNum, newCard);
					}}
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
