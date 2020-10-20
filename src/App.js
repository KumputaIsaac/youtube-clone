import React,{useState} from 'react'
import './app.css'
import { Container} from 'react-bootstrap';
import Video from './components/Video';
export default function App() {

  const [search,setSearch]=useState('')
  const [query,setQuery]=useState('food')

  onsubmit=(e)=>{
    e.preventDefault();
    setQuery(search)
  }
  
  onchange=(e)=>{
    setSearch(e.target.value)
  }

    return (
      <Container>
        <div>
          <form onSubmit={onsubmit} className='my-5'>
            <input  type="search" placeholder="Enter Video" onChange={onchange}/>
            <button type="">search</button>
          </form>
        </div>
        
        
        <Video query={query}/>
    </Container>
    )
  }

