import React, {Component} from "react";
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer'

import style from './wrapper.module.css';

class Wrapper extends Component{
    render(){
        return(
        <div className={style.Container}>
            <Header></Header>
            <div className={style.Children}>{this.props.children}</div>
            <Footer></Footer>
        </div>
        )
    }
};

export default Wrapper;