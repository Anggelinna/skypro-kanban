import { Column } from "../Column";
export const Main = () => {
 return (
	<main className="main">
		<div className="container">
			<div className="main__block">
				<div className="main__content">
					<Column title="Без статуса" />
					<Column title="Нужно сделать" />
					<Column title="В работе" />
					<Column title="Тестирование" />
					<Column title="Готово" />
				</div>
			</div>
		</div>
	</main>
 );
};

//const Main = () => {
//    return (
//
//		<main className="main">
//			<div className="container">
//				
//				<div className="main__block">
//					<div className="main__content"></div>
//				</div>
//			</div>
//	    </main>

//	)
//}

export default Main;

