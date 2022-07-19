import { FC } from "react";
import styled from "styled-components";
import { Board, boardState, CardProps } from "../../../store/board/state";
import { Column } from "./Column";
import { Comm } from "../Body/Column/Modal/Comments/comments";

interface BodyProps {
	states: Board;
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
export const Body: FC<BodyProps> = (props) => {
	return (
		<Main>
			{Object.keys(props.states).map((item, index) => (
				<Column
					key={index}
					columnNum={+item}
					columnName={props.states[item].columnName}
					cards={props.states[item].cards}
					addCard={props.addCard}
					deleteCard={props.deleteCard}
					editColumnName={props.editColumnName}
					editCardName={props.editCardName}
					editDescription={props.editDescription}
					AddComment={props.AddComment}
				/>
			))}
		</Main>
	);
};

const Main = styled.div`
	display: flex;
	justify-content: space-around;
	opacity: 0.7;
`;
