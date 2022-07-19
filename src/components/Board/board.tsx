import styled from "styled-components";
import { Header } from "./Header/header";
import { Body } from "../Board/Body";
import { useState } from "react";
import { boardState, CardProps } from "../../store/board/state";
import { Comm } from "./Body/Column/Modal/Comments/comments";
export const Board = () => {
	const [state, setState] = useState(boardState);

	const editDescription = (
		columnNum: number,
		description: string,
		cardNum: number
	) => {
		console.log(editDescription);
		setState({
			...state,
			[columnNum]: {
				...state[columnNum],
				cards: state[columnNum].cards.map((item, index) => {
					if (index === cardNum) return { ...item, description };
					return item;
				}),
			},
		});
	};

	const deleteCard = (columnNum: number, cardNum: number) => {
		setState({
			...state,
			[columnNum]: {
				...state[columnNum],
				cards: [
					...state[columnNum].cards.slice(0, cardNum),
					...state[columnNum].cards.slice(cardNum + 1),
				],
			},
		});
	};
	const AddComment = (
		columnNum: number,
		cardNum: number,
		newComment: Comm
	) => {
		setState({
			...state,
			[columnNum]: {
				...state[columnNum],
				cards: [
					state[columnNum].cards.map((item, index) => {
						if (index === cardNum) return { ...item, newComment };
						return item;
					}),
				],
			},
		});
	};
	const AddCard = (columnNum: number, newCard: CardProps) => {
		setState({
			...state,
			[columnNum]: {
				...state[columnNum],
				cards: [...state[columnNum].cards, newCard],
			},
		});
	};

	const editCardName = (columnNum: number, name: string, cardNum: number) => {
		console.log(name);
		setState({
			...state,
			[columnNum]: {
				...state[columnNum],
				cards: state[columnNum].cards.map((item, index) => {
					if (index === cardNum) return { ...item, name };
					return item;
				}),
			},
		});
	};

	const editColumnName = (columnNum: number, columnName: string) => {
		console.log({ columnName });
		setState({
			...state,
			[columnNum]: { ...state[columnNum], columnName },
		});
	};
	return (
		<Wrapper>
			<Header />
			<Body
				states={state}
				addCard={AddCard}
				deleteCard={deleteCard}
				editColumnName={editColumnName}
				editCardName={editCardName}
				editDescription={editDescription}
				AddComment={AddComment}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 100vh;
	background: linear-gradient(blue, 10%, pink);
`;
