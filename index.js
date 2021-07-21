
//Start a class 
class Hello extends React.Component{
    render() {//Must have a render 
        return <h1>Hi there! </h1>//must have a return 
    }
}

class HelloThree extends React.Component{
    render(){
        return <div>
            <h1>Hi</h1>
            <h1>There</h1>
            <h1>Three times</h1>
        </div>
    }
}

ReactDOM.render(<Hello/>, document.getElementById('root')); //calls up the #id in our div 
ReactDOM.render(<HelloThree/>, document.getElementById('three')); 