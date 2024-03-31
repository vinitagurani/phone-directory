// import React , {Component} from 'react';
import React from 'react';
const Header = function () {
    const headerStyle = {
        textAlign: 'center',
        padding: 20,
        background: '#000',
        color: '#fff',
        textTransform: 'uppercase'
    };
    return (
        <div className="header" style={headerStyle}>
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