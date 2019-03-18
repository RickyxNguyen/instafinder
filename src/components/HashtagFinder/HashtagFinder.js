import React from 'react';
import "./HashtagFinder.css";



class HashtagFinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:''}

    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
 } 

 handleChange(e) {
    this.setState({ value: e.target.value });
 }

 keyPress(e){
    if(e.keyCode === 13){
       console.log(e.target.value);
       // put the login here
       window.open('//www.instagram.com/explore/tags/'+ e.target.value,'_blank');
    }
 }

render(){

    return(
<div>

<div className = "hashtag">
  <strong>Enter the hashtag</strong> 
</div>

<div className = "inputcon " style={{display: 'flex', justifyContent: 'center'}}>
#<input className="input" value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange}/>
</div>

</div>

)}
}
export default HashtagFinder;