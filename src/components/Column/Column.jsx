import { Card } from "../Card/Card";
import * as S from "./Column.styled";

export const Column = ({ title, tasks }) => {
	return (
		<S.MainColumn>
		<S.ColumnTitle>
		  <p>{title}</p>
		</S.ColumnTitle>
		<S.StyledCard>
		  {tasks.map((card) =>
			  <Card
				topic={card.topic}
				title={card.title}
				date={card.date}
				key={card._id}
				id={card._id}
			  />)
		  }
		</S.StyledCard>
	  </S.MainColumn>
	)
}