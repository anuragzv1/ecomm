import React from 'react';
import '../assets/css/Navbar.css'
//this is the navbar component
class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="list-holder">
                    <div className="nav-list" onClick={()=>{
                        if(this.props.page===2){
                            this.props.changePage(1);
                        }
                    }}>
                        PRODUCTS
                </div>
                    <div className="nav-list" onClick={()=>{
                        if(this.props.page===1){
                            this.props.changePage(2);
                        }
                    }}>
                        ADD PRODUCT+
                </div>
                </div>
                <div className="user-dtls">
                    <img className="display-pic" src="https://lh3.googleusercontent.com/ogw/ADGmqu8dxp1qFgtEoMi7plPIirGeb0f5Vo68IMEStLHt=s192-c-mo" />
                    <div className="display-name">
                        <span className="display-name">Anurag</span>
                        <span className="display-name">Singh</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;