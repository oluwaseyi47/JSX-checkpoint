import React, {Component} from 'react'
import img1 from './photo-1539683255143-73a6b838b106.jpg'

class About extends Component{
    render(){
        return(
            <div>
                <h1>About Component</h1>
                <img src={img1} width ='500' alt='image' />
            </div>
        )
    }
}





export default About