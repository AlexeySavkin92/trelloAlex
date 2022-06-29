import styled from "styled-components";
import React, { FC, useState } from "react";

interface ModalProps {
	name: string;
	cardAuthor: string;
	onModalClose: () => void;
	editCardName: (columnNum: number, name: string) => void;
	columnNum: number;
}
export const Modal: FC<ModalProps> = ({
	name,
	cardAuthor,
	onModalClose,
	editCardName,
	columnNum,
}) => {
	const [inputEditNameCard, setinputEditNameCard] = useState("");
	const [inputFormEditNameCard, setInputFormEditNameCard] = useState(false);
	const isinputFormEditNameCard = () => {
		setInputFormEditNameCard(!inputFormEditNameCard);

		const setModalCloseEsc = (
			event: React.KeyboardEvent<HTMLInputElement>
		) => {
			if (event.code === "Esc") {
				{
					onModalClose();
				}
			}
		};

		return (
			<ModWin>
				<Header onKeyDown={setModalCloseEsc}>
					{" "}
					<Name onClick={isinputFormEditNameCard}>
						{name}
						{inputFormEditNameCard && (
							<input
								value={inputEditNameCard}
								onChange={(event) =>
									setinputEditNameCard(event.target.value)
								}
							></input>
						)}
						{inputFormEditNameCard && (
							<input
								value="edit"
								onClick={() => {
									editCardName(columnNum, name);
								}}
							></input>
						)}
					</Name>
					<CloseIcon onClick={onModalClose}>+</CloseIcon>
				</Header>
				<p>{cardAuthor}</p>
			</ModWin>
		);
	};
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
