import React from 'react'
import './suggestion.css'
import {ListGroup} from 'react-bootstrap'

export default ({videoList,changedselectedvideo,selectedVideo})=> {

    const changedselected =(data)=>{
        changedselectedvideo(data)
        console.log(selectedVideo)
    }

    return (
        <React.Fragment>
            <h6>Suggestions</h6>
            
            {videoList.length>0 &&(// eslint-disable-next-line
                videoList.map(data=>{
                    if(data.id!==selectedVideo){
                         return(
                            <ListGroup.Item
                                key={data.id}
                                onClick={()=>{changedselected(data)}}>
                                    <div className='flex'>
                                        <div>
                                            <img src={data.thumbnails.medium.url} alt="scfv"/>
                                        </div>
                                        <div>
                                            <div className='title'>
                                                {data.title}
                                            </div>
                                            <div className='channel'>
                                                {data.channel.title}
                                            </div>
                                        </div>
                                        
                                    </div>
                        
                            </ListGroup.Item>
                    )
                    }
                        
               })
            )}
        </React.Fragment>
    )
}