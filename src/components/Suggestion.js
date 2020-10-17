import React from 'react'
import './suggestion.css'
import {ListGroup} from 'react-bootstrap'

export default ({videoList,changedselectedvideo})=> {

    const changedselected =(data)=>{
        changedselectedvideo(data)
    }

    return (
        <React.Fragment>
            {videoList.length>0 &&(
                videoList.map(data=>(
                <ListGroup.Item onClick={()=>{changedselected(data)}}>
                    <div className='flex'>
                        <div>
                            <img src={data.thumbnails.medium.url} alt="scfv"/>
                        </div>
                        <div>
                            {data.title}
                        </div>
                    </div>
                    
                </ListGroup.Item>))
            )}
        </React.Fragment>
    )
}