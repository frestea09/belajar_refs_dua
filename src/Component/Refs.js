import React from 'react'

class Refs extends React.Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
        this.clickHandle = this.clickHandle.bind(this)
    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    clickHandle(){
        alert(this.inputRef.current.value)
    }
    render(){
        return(
            <div className='Refs'>
               <input id='inputName' name='inputName' type='text' ref={this.inputRef}/>
                <button onClick={this.clickHandle}>Show</button>
                     
            </div>
        )
    }
}

export default Refs