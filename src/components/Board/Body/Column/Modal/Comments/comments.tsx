import React, { FC, useState } from "react";

export interface Comm {
	userText: string;
	author: string;
}
export const Comments: FC<Comm> = ({ userText, author }) => {
	return (
		<>
			<p>{userText}</p>
			<p>{author}</p>
		</>
	);
};
