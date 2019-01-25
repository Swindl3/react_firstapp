import React,{Component} from 'react' ;

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {date :new Date()}
        setInterval(()=>{this.tick()},1000)
    } 
    componentDidMount(){
        console.log('componentDidMount');
        
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    tick(){
        // this.state = {date :new Date()} เปลี่ยนข้อมูลใน state แบบนี้ไม่ได้   
        this.setState({date:new Date()})
    }
    render(){
       return (
           <div>{this.state.date.toLocaleTimeString()}</div>
       )
    }
}
export default Header;  