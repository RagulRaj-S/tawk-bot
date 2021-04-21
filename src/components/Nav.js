import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'


class Nav extends React.Component{
    

    render(){
        return(
                <div class="navbar-fixed">
                    <nav class="red">
                    <div class="container">
                    <div class="nav-wrapper">
                        <a href="#" class="brand-logo center">FAQ tawk-bot</a>
                        <ul class="right hide-on-med-and-down">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    </nav>
                    </div>
        );
    }
}

export default Nav