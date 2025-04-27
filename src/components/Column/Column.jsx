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
					    topic={card.topic}
						//theme={card.theme} 
						title={card.title}
						date={card.date}
						key={card._id}
						id={card._id}
					/>
				))}
			</S.Cards>
		</S.MainColumn>		
    )
}