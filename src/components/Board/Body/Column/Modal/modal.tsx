import styled from "styled-components";
import React, { FC, useEffect, useState } from "react";
import { CardProps } from "../column";
import { createReadStream } from "fs";
import { Comments } from "./Comments";
import { Comm } from "../Modal/Comments/comments";

interface Comment {
	userText: string;
	author: string;
}

interface ModalProps {
	name: string;
	cardAuthor: string;
	onModalClose: () => void;
	editCardName: (columnNum: number, name: string, cardNum: number) => void;
	editDescription: (
		columnNum: number,
		description: string,
		cardNum: number
	) => void;
	columnNum: number;
	cardNum: number;
	columnName: string;
	description: string;
	comment: Comment[];
	deleteCard: (columnNum: number, cardNum: number) => void;
	AddComment: (columnNum: number, cardNum: number, newComment: Comm) => void;
}

export const Modal: FC<ModalProps> = ({
	name,
	cardAuthor,
	onModalClose,
	editCardName,
	columnNum,
	cardNum,
	columnName,
	editDescription,
	description,
	comment,
	deleteCard,
	AddComment,
}) => {
	const [inputEditNameCard, setinputEditNameCard] = useState("");
	const [inputFormEditNameCard, setInputFormEditNameCard] = useState(false);
	const isinputFormEditNameCard = () => {
		setInputFormEditNameCard(!inputFormEditNameCard);
	};
	const [inputComments, setInputComments] = useState("");
	const [inputFormComments, setInputFormComments] = useState(false);
	const isInputFormComments = () => {
		setInputFormComments(!inputFormComments);
	};

	const setModalCloseEsc = (event: KeyboardEvent) => {
		console.log("hi");
		if (event.code === "Escape") {
			{
				onModalClose();
			}
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", (e) => setModalCloseEsc(e));
		return window.removeEventListener("keydown", (e) =>
			setModalCloseEsc(e)
		);
	}, []);
	const [inputDescription, setInputDescription] = useState("");
	const [inputFormDescription, setInputFormDescription] = useState(false);
	const isinputFormDescription = () => {
		setInputFormDescription(!inputFormDescription);
	};

	const isDeletedCard = () => {
		console.log("hi");
		deleteCard(columnNum, cardNum);
		onModalClose();
	};

	const newComment = {
		userText: inputComments,
		author: "",
	};

	return (
		<ModWin>
			<Header>
				{columnName}
				<Name>
					<p onClick={isinputFormEditNameCard}>{name}</p>
					{inputFormEditNameCard && (
						<input
							value={inputEditNameCard}
							onChange={(event) =>
								setinputEditNameCard(event.target.value)
							}
						></input>
					)}
					{inputFormEditNameCard && (
						<button
							onClick={() => {
								editCardName(
									columnNum,
									inputEditNameCard,
									cardNum
								);
							}}
						>
							Edit
						</button>
					)}
				</Name>
				<Description>
					<p
						onClick={() => {
							isinputFormDescription();
						}}
					>
						Description
					</p>
					{description}{" "}
					{inputFormDescription && (
						<input
							value={inputDescription}
							onChange={(event) =>
								setInputDescription(event.target.value)
							}
						></input>
					)}
					{inputFormDescription && (
						<button
							onClick={() => {
								editDescription(
									columnNum,
									inputDescription,
									cardNum
								);
							}}
						>
							Add description
						</button>
					)}
					{!inputFormDescription && <p>{inputDescription}</p>}
				</Description>

				<CloseIcon onClick={onModalClose}>+</CloseIcon>
				<Comment>
					<p onClick={() => isInputFormComments()}> Comments</p>
					{inputFormComments && (
						<input
							value={inputComments}
							onChange={(event) =>
								setInputComments(event.target.value)
							}
						></input>
					)}
					{inputFormComments && (
						<button
							onClick={() => {
								AddComment(columnNum, cardNum, newComment);
							}}
						></button>
					)}

					{comment.map((item, index) => (
						<Comments
							key={index}
							userText={item.userText}
							author={item.author}
						/>
					))}
				</Comment>
				<p>{cardAuthor} create this card</p>
			</Header>
			<DeleteCard>
				<button onClick={() => isDeletedCard()}>
					<img src="https://w7.pngwing.com/pngs/169/498/png-transparent-gray-trash-bin-art-computer-icons-icon-remove-s-miscellaneous-text-rectangle-thumbnail.png" />
				</button>
			</DeleteCard>
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

const Name = styled.div``;
const Description = styled.div`
	padding: 20px 0;
`;

const Header = styled.div`
	position: relative;

	padding: 15px 15px;
`;

const CloseIcon = styled.span`
	position: absolute;
	top: 0;
	right: 0;
	transform: rotate(45deg);
	font-size: 24px;
	cursor: pointer;
`;
const Comment = styled.div`
	margin-bottom: 50px;
`;
const DeleteCard = styled.div`
	position: absolute;
	top: 90%;
	right: 10px;

	font-size: 24px;
	cursor: pointer;
	img {
		width: 20px;
	}
`;
