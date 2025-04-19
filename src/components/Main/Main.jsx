//import { Column } from "../Column/Column";
//import { statusList } from "../../data";
import * as S from "./Main.styled.js"
import { Container } from "../../lib/global.styled.js";


export const Main = ({ children }) => {
	return (
		<S.Main>
			<Container>
				<S.MainBlock>
					<S.MainContent>
						{children}
						
					</S.MainContent>
				</S.MainBlock>
			</Container>
		</S.Main>
	);
};