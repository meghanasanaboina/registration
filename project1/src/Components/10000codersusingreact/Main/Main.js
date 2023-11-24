import React, { Component } from 'react';
import Content1 from './Content1/Content1';
import Content2 from './Content2/Content2';
import Content3 from './Content3/Content3';
import Content4 from './Content4/Content4';
import Content5 from './Content5/Content5';
import Content6 from './Content6/Content6';
import Content7 from './Content7/Content7';

export default class Main extends Component{

    render(){
        return(
            <React.Fragment>
                <Content1 />
                <Content2 />
                <Content3 />
                <Content4 />
                <Content5 />
                <Content6 />
                <Content7 />
            </React.Fragment>
        )
    }
}