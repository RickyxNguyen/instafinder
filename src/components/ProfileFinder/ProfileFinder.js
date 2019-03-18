import React from 'react';
import "./ProfileFinder.css";



class ProfileFinder extends React.Component {
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
       window.open('//www.instagram.com/'+ e.target.value,'_blank');
    }
 }

render(){

    return(
<div>

<div className = "profile">
  <strong>Enter the profile handle</strong> 
</div>
<div className = "sub">
    <i>...only works for non-private accounts</i>
</div>

<div className = "inputcon " style={{display: 'flex', justifyContent: 'center'}}>
@<input className="input" value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange}/>
</div>

</div>

)}
}
export default ProfileFinder;