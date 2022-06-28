import { FC } from "react";
import styled from "styled-components";
import { Board, boardState, CardProps } from "../../../store/board/state";
import { Column } from "./Column";

interface BodyProps {
	states: Board;
	addCard: (columnNum: number, newCard: CardProps) => void;
	del: (columnNum: number, cardNum: number) => void;
	edit: (columnNum: number, columnName: string) => void;
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
					del={props.del}
					edit={props.edit}
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
