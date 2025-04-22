import { Card } from "../Card/Card";
import * as S from "./Column.styled";

export const Column = ({ title, tasks }) => {
    return (
        <S.MainColumn>
			<S.ColumnTitle>
				<p>{title}</p>
			</S.ColumnTitle>
			<S.Cards>
				{tasks.map((card) => (
					<Card 
						key={card.id} 
						title={card.title} 
						theme={card.theme} 
						date={card.date}
					/>
				))}
			</S.Cards>
		</S.MainColumn>		
    )
}