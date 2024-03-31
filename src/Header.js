import React , {Component} from 'react';
// import React from 'react';
import "./Header.css";

// A functional component accepts a parameter called props from the parent component. This parameter is an object that holds all the properties passed from the parent component to the child component. In place of props, you can use any other parameter name too.
// const Header = function (props) {
//     return (
//         <div className="header">
//             {/* difference in classname */}
//             {props.heading}  {/*Dynamic accessing heading property of props*/}
//         </div>
//     )
// }
// this is a functional component.


class Header extends Component{
    render () {
        return (
            <div className="header">
            {this.props.heading}  /* this.props is necessary to use in the class component while accessing properties as it a keyword*/
        </div>
        )
    }
}
// this is a class component, it is static, so we dont need it now

/* Props are used to make a header dynamic, When react sees a user defined component, it passes JSX attributes to this component as a single object
this object is called Props, i.ie., Properties and helps us to pass down values from parent to child component, Can define the value in the parent
access in child. We can use Props inside functional and class components.
*/

export default Header;