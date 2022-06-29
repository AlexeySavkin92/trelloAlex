import styled from "styled-components";
import { Header } from "./Header/header";
import { Body } from "../Board/Body";
import { useState } from "react";
import { boardState, CardProps } from "../../store/board/state";
export const Board = () => {
	const [state, setState] = useState(boardState);

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
	const AddCard = (columnNum: number, newCard: CardProps) => {
		setState({
			...state,
			[columnNum]: {
				...state[columnNum],
				cards: [...state[columnNum].cards, newCard],
			},
		});
	};

	const editCardName = (columnNum: number, name: string, cardNum:number) => {
		console.log(name);
		setState({
			...state,
			[columnNum]: {
				...state[columnNum],
				cards: [...state[columnNum].cards, [cardNum]:{...state[columnNum].cards[cardNum],  name}],
			}
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
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;

	background: linear-gradient(blue, 10%, pink);
`;
