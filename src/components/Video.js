import React,{useEffect,useState} from 'react'
import {Col,Row} from 'react-bootstrap'
import SingleVideos from './SingleVideos'
import Suggestion from './Suggestion'
import YouTube from 'simple-youtube-api';
const youtube = new YouTube('AIzaSyATzDbaaLDxcsnaqfHqOTRgIdLhLHkIBi4')





export default ({query})=> {

     const [videoList, setVideoList] = useState([])
     

    useEffect(() => {
        const callApi = async()=>{
        const result = await youtube.searchVideos(query,5);
        console.log(result)
        setVideoList(result)
    }
    callApi()
    }, [query])


    
    return (
        <React.Fragment>
            <Row>
                <Col xs={12} lg={8} style={{border:'2px solid black'}}> 
                    <SingleVideos 
                    Title={videoList[0]&&videoList[0].title}
                    id={videoList[0]&&videoList[0].id}
                    Description={videoList[0]&&videoList[0].description}
                    />
                </Col>
                <Col xs={12} lg={4} style={{border:'2px solid black'}}>
                    <Suggestion />
                </Col>
            </Row>
        </React.Fragment>
    )
}
