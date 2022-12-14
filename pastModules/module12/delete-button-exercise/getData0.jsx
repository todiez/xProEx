const App = () => {
    const { useState } = React;
    let [state, setState] = useState([1, 2, 3, 4, 5])
    const handler = index => {
        // code to update state and remove destroyed button
        console.log(state);
        let newState = state.filter(blub => blub != index);
        console.log(newState);
       
        // [1,3,4]
        setState(newState)
    }
    let list = state.map((item, index) => {
        return <MyButton onClick={() => handler(item)} key={index}></MyButton>
    })
    return <div>{list}</div>
};

const MyButton = ({ onClick }) => {
    let { Button } = ReactBootstrap
    return <Button onClick={onClick}>Click Me</Button>
}

ReactDOM.render(<App />, document.getElementById("root"));