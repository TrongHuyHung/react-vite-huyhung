//JSX
//Fragment
import './style.css'
const MyComponent = () => {
    // const name = "Huy Hung"; //String
    // const name = [1, 2, 3]; //Array
    // const name = true; //String
    const name = { name: "Hi", age: 26 }; //object
    // const name = "Huy Hung"; //String
    // const name = 25; //Number
    return (
        <>
            <div>{JSON.stringify(name)} && </div>
            <div>{console.log("Hi")}</div>
            <div className="child">Child</div>
        </>
    );
}
const FakeComponent = () => {
    return (
        <div>Fake Hello world</div>
    );
}

export default MyComponent;