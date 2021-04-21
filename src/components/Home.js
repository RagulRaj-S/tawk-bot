import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import JAS from '../images/JAS.jpg'
import tawk from '../images/tawk.png'
import M from 'materialize-css'
import Faq from "./FAQ"

class Home extends React.Component{
    

    render(){
        return(
                <div className="home">
                <ul class="slides">
                <li>
                <div class="container">
                  <div class="row">
                    <div class="col s1"><img class="responsive-img response" src = {tawk} width="300"/> </div>
                    <div class="col s11"><h5><blockquote>This is a Simple website with the 'FAQ' component. A simple chat-bot from tawt.to is integrated as a widget in this website.This website is hosted using Herokuapp
                      </blockquote></h5></div>
                    </div>
                    </div>
                </li>
              </ul>
              <div class="video-container container">
                    <iframe width="100" height="100" src="https://youtube.com/embed/f0KsdPXGzzY" frameborder="0"></iframe>
                </div>
                <Faq />
                <footer class="section red white-text center">
                  <p class="flow-text">FAQ tawk-bot &copy; 2021</p>
                </footer>
              </div>
        );
    }
}

export default Home