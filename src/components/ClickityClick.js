// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component{
    state = {
        hasBeenClicked: false
    }
    
    handleClick = () => {
        this.setState(previouseStata =>{
            return {
                hasBeenClicked: !previouseStata.hasBeenClicked
            }
        })
    }
    // handleClick = () =>{
    //     this.setState({
    //         hasBeenClicked: true,
    //     },()=> console.log(this.state.hasBeenClicked))
        
    // }
    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>{this.state.hasBeenClicked ? "ON" : "OFF"}</button>
            </div>
        )
    }
}
export default ClickityClick

