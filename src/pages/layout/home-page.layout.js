// Functional Component
// const HomePageLayout = (props) => {
//     return (
//         <div>
//             <div className="container">
//                 I'm from functional component.
//                 <p>{props.name}</p>
//                 <p>{props.address}</p>
//             </div>
//         </div>
//     );
// }

// Class Component
import React, { Component } from 'react';

class HomePageLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '984-1234567'
        }
    }

    render = () => {
        console.log('HomePageLayout: render');
        this.setState({
            phone: '984-1234567'
        }) // This will not cause re-render
        // if component is changed then this will cause component re-render
        // Component can go into infinite loop if we don't use it properly
        return (
            <div>
                <div className="container">
                    I'm from Class component.
                    <p>{this.props.name}</p>
                    <p>{this.props.address}</p>
                    <p>{this.state.phone}</p>
                </div>
            </div>
        );
    }
}

export default HomePageLayout;