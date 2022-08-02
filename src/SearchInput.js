
import React, { Component } from 'react'

export default class SearchInput extends Component {
 

    constructor(props){
        super(props)
        this.state={entry: ''}
    }


 
 
 
    render() {
    return (
      <div className='ui segment'>

        <form className='ui form'>
            <div className='field'>
                <div className='ui massive icon input'>
                    {/* remind that we use onChange method. not onclick */}
                    {/* In here we setted our input to event */}
                <input type="text" 
                placeholder='Search...' 
                onChange={(event)=>this.setState({entry: event.target.value})}
                value={this.state.entry}
                />
                <i className='search icon'></i>
                </div>
            </div>
            
        </form>


      </div>
    )
  }
}


