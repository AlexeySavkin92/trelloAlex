import styled from "styled-components";
import { Header } from "./Header/header";
import { Body } from "../Board/Body";
import { useState } from "react";
import { boardState, CardProps } from "../../store/board/state";
export const Board = () => {
	const [state, setState] = useState(boardState);

	const del = (columnNum: number, cardNum: number) => {
		console.log(cardNum);
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
	const AddCard = (columnNum: number, newCard: CardProps) => {
		setState({
			...state,
			[columnNum]: {
				...state[columnNum],
				cards: [...state[columnNum].cards, newCard],
			},
		});
	};
	const editName = (columnNum: number, columnName: string) => {
		console.log({ columnName });
		setState({
			...state,
			[columnNum]: { ...state[columnNum], columnName },
		});
	};
	return (
		<Wrapper>
			<Header />
			<Body states={state} addCard={AddCard} del={del} edit={editName} />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;

	background: linear-gradient(blue, 10%, pink);
`;
