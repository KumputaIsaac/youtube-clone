import React,{useState} from 'react'
import './app.css'
import { Container, Row, Col,Form,Button} from 'react-bootstrap';
import Video from './components/Video';
export default function App() {

  const [search,setSearch]=useState('')
  const [query,setQuery]=useState('')

  onsubmit=(e)=>{
    e.preventDefault();
    setQuery(search)
  }
  
  onchange=(e)=>{
    setSearch(e.target.value)
  }

    return (
      <Container>
        <Form onSubmit={onsubmit}> 
            <Row>
              <Col>
                <Form.Control size="lg" type="text" placeholder="Search Video" onChange={onchange}/>
              </Col>
              <Col>
                <Button variant="primary" size="lg">Search </Button>
              </Col>
          </Row>
        </Form>
        
        <Video query={query}/>
    </Container>
    )
  }
