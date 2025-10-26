import React, {Component} from 'react';
interface CounterProps{

}
interface CounterStatee{
    count:number
}
class ClassCounter extends Component  <CounterProps,CounterStatee>{
    constructor(props:CounterProps){
        super(props);
        this.state={count:0,};
    
}
//method to handle increment 
//  arrow finction need
increment =()=>{
    this.setState({count:this.state.count+1});

};
decrement =()=>{
    this.setState({count:this.state.count>0?this.state.count-1:0})
};
reset =()=>{
    this.setState({count:0})

};
render(){
    return(
        <div style={{textAlign:"center"}}>
            <h2>{this.state.count}</h2>
            <button onClick ={this.increment}>Increment</button>
            <button onClick ={this.decrement}>Decrement</button>
            <button onClick ={this.reset}>Reset</button>
        </div>
    )
}
}

export default ClassCounter