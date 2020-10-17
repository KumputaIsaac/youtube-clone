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
        <div className="mx-auto">
          <Form onSubmit={onsubmit} className='mb-5'> 
            <Row>
              <Col>
                <Form.Control size="lg" type="text" placeholder="Search Video" onChange={onchange}/>
              </Col>
              <Col>
                <Button variant="primary" size="lg">Search </Button>
              </Col>
          </Row>
        </Form>
        </div>
        
        
        <Video query={query}/>
    </Container>
    )
  }

