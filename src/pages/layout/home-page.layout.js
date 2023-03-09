import { useEffect, useState } from "react";

// Functional Component
const HomePageLayout = (props) => {
    //UseState is a hook which is used to manage state in functional component
    let [counter, setCounter] = useState(0);
    let [liked, setLiked] = useState(false);

    // UseEffect is a hook which is used to manage lifecycle methods in functional component
    useEffect(() => {
        // componentDidMount
        console.log('HomePageLayout: componentDidMount');
        return () => {
            // componentWillUnmount
            console.log('HomePageLayout: componentWillUnmount');
        }
    }, [counter]);

    useEffect(() => {

    }, [liked]);

    const counterIncrement = (e) => {
        setCounter(++counter);
        console.log(counter);
    }

    const likedProcess = (e) => {
        setLiked(!liked);
    }

    return (
        <div>
            <div className="container">
                I'm from functional component.
                <p>{props.name}</p>
                <p>{props.address}</p>
                <p>{counter}</p>
                <button onClick={counterIncrement}>Click Me</button>
                <button onClick={likedProcess}>{liked ? 'Liked' : 'Like'}</button>
            </div>
        </div>
    );
}

// Class Component
// import React, { Component } from 'react';

// class HomePageLayout extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             phone: '984-1234567'
//         }
//     }

//     render = () => {
//         console.log('HomePageLayout: render');
//         this.setState({
//             phone: '984-1234567'
//         }) // This will not cause re-render
//         // if component is changed then this will cause component re-render
//         // Component can go into infinite loop if we don't use it properly
//         return (
//             <div>
//                 <div className="container">
//                     I'm from Class component.
//                     <p>{this.props.name}</p>
//                     <p>{this.props.address}</p>
//                     <p>{this.state.phone}</p>
//                 </div>
//             </div>
//         );
//     }
// }

export default HomePageLayout;