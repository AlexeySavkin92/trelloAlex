import styled from "styled-components";

interface FormProps {
	CloseEsc: () => void;
}

export const Form = () => {
	return <FormWin />;
};

const FormWin = styled.div`
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
