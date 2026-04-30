//JSX
//Fragment
import './style.css'
const MyComponent = () => {
    return (
        <>
            <div>Hello world</div>
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