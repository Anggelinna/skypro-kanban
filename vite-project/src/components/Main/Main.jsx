import {Column} from '../../../../Column/Column.jsx';
import {Card} from '../Card/Card.jsx';

//export const Main = ({MainColumn}) => {
  //{MainColumn}

    //return (
        <main className="main">
          <div className="container">
            <div className="main__block">
              <div className="main__content">
              
                <Column title={"Без статуса"}
                  cards = {
                    <>
                      <Card
                        NameLesson={"Researh"}
                        CardThemeColor={"_green"}
                        CardTitle={"Новая задача"}
                      />
                      <Card
                        NameLesson={"Web design"}
                        CardThemeColor={"_orange"}
                        CardTitle={"Новая задача"}
                      />
                      <Card
                        NameLesson={"Copywriting"}
                        CardThemeColor={"_purple"}
                        CardTitle={"Новая задача"}
                      />
                      <Card
                        NameLesson={"Web design"}
                        CardThemeColor={"_orange"}
                        CardTitle={"Новая задача"}
                      />
                    </>
                  }
                />
                <Column title={"Нужно сделать"}
                  cards = {
                    <>
                      <Card
                        NameLesson={"Research"}
                        CardThemeColor={"_green"}
                        CardTitle={"Новая задача"}
                      />
                    </>                  }
                />
                <Column title={"В работе"}
                  cards = {
                    <>
                      <Card
                        NameLesson={"Researh"}
                        CardThemeColor={"_green"}
                        CardTitle={"Новая задача"}
                      />
                      <Card
                        NameLesson={"Copywriting"}
                        CardThemeColor={"_purple"}
                        CardTitle={"Новая задача"}
                      />
                      <Card
                        NameLesson={"Web design"}
                        CardThemeColor={"_orange"}
                        CardTitle={"Новая задача"}
                      />
                    </>
                  }
                />
                <Column title={"Теститрование"}
                  cards = {
                    <>
                      <Card
                        NameLesson={"Research"}
                        CardThemeColor={"_green"}
                        CardTitle={"Новая задача"}
                      />
                    </>
                  }
                />
                <Column title={ "Готово"}
                  cards = {
                    <>
                      <Card
                        NameLesson={"Research"}
                        CardThemeColor={"_green"}
                        CardTitle={"Новая задача"}
                      />
                    </> 
                  }
                />
              </div>
            </div>
          </div>
        </main>
   // )
//}