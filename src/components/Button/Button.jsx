export const Button = ({ text }) => {
    //const text = "Начать тренировку";
    return <button className="button">{text}</button>;
};


// Создание компонента с чилдреном

// export const Button = ({ type, children }) => {
//    return <button type={type}>{children}</button>
// };