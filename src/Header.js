// import React , {Component} from 'react';
import React from 'react';
const Header = function () {
    return (
        <div className="header">
            {/* difference in classname */}
            Phone directory
        </div>
    )
}
// this is a functional component.

// class Header extends Component{
//     render () {
//         return (
//             <div className="header">
//             Phone directory
//         </div>
//         )
//     }
// }
// this is a class component, it is static, so we dont need it now


export default Header;