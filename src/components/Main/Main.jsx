import { Column } from "../Column/Column";
import { statusList } from "../../data";
import * as S from "./Main.styled.js"
import { Container } from "../../global.styled.js";


export const Main = ({cards}) => {
	return (
		<S.Main>
			<Container>
				<S.MainBlock>
					<S.MainContent>
						{statusList.map((status, i) => (
							<Column 
								key={i}
								title={status} 
								cards={cards.filter((card) => card.status === status)}
							/>
						))}
						
					</S.MainContent>
				</S.MainBlock>
			</Container>
		</S.Main>
	);
};