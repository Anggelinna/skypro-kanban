import * as S from "./Main.styled.js";


export const Main = ({children}) => {
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