import React,{useEffect,useState} from 'react'
import {Col,Row,ListGroup} from 'react-bootstrap'
import SingleVideos from './SingleVideos'
import Suggestion from './Suggestion'
import YouTube from 'simple-youtube-api';
const youtube = new YouTube('AIzaSyATzDbaaLDxcsnaqfHqOTRgIdLhLHkIBi4')





export default ({query})=> {

     const [videoList, setVideoList] = useState([])
     const [selectedVideo, setselectedVideo] = useState([])
    //  const [error, seterror] = useState(false)
     

    useEffect(() => {
        const callApi = async()=>{
        const result = await youtube.searchVideos(query,10);
        setVideoList(result)
        console.log(result)
        setselectedVideo(result[0])
    }
    callApi()
    }, [query])

    const selectedVideoCallback = (videoDetails) =>{
        setselectedVideo(videoDetails)
    }


    
    return (
        <React.Fragment>
            <Row>
                <Col xs={12} lg={8} style={{border:'2px solid black'}}> 
                    <SingleVideos  
                    Title={selectedVideo.title}
                    id={selectedVideo.id}
                    Description={selectedVideo.description}
                    />
                </Col>
                <Col xs={12} lg={4} style={{border:'2px solid black'}}>
                <ListGroup>
                    <Suggestion videoList={videoList} changedselectedvideo={selectedVideoCallback} selectedVideo={selectedVideo.id}/>
                    
                </ListGroup>
                </Col>
            </Row>
        </React.Fragment>
    )
}
