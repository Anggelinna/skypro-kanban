import { Card } from "../Card";
export const Column = ({ title }) => {
    return (
        <div className="main__column column">
							<div className="column__title">
								<p>{title}</p>
							</div>
							<div className="cards">
								<Card title="Research" />
								<Card title="Web Design" />
								<Card title="Copywriting" />
							
							</div>
						</div>		
    )
}

//const Column = () => {
//    return (
//
//    <div className="main__column">
//		<div className="column__title">
//			<p>Нужно сделать</p>
//		</div>
 //   

//        <div className="main__column column">
//	    	<div className="column__title">
//	    		<p>Без статуса</p>
//	    	</div>
//	    </div>				
						
//	    <div className="main__column">
//	    	<div className="column__title">
//	    		<p>В работе</p>
//	        </div>
//	    </div>
//
//	    <div className="main__column">
//	    	<div className="column__title">
//	    	    <p>Тестирование</p>
//	    	</div>
//        </div>

//        <div className="main__column">
//	    	<div className="column__title">
//	    		<p>Готово</p>
//	    	</div>
//        </div>
//	</div>

//	);
//}

export default Column;