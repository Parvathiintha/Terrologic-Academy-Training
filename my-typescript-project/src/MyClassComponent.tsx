import React, {Component} from 'react';
import First from './First';
import Second from './Second';
class MyClassComponent extends Component {
    render(){
        return(
            <div>
                <First />
                <Second/>
        

            </div>
        )
    }
}

export default MyClassComponent