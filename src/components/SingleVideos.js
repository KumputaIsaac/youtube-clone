import React from 'react'

export default ({id,Title,Description})=> {
    return (
        <div>
            <div>
            <iframe 
                title="My Daily Marathon Tracker" 
                width="100%" height="315" 
                src={`https://www.youtube.com/embed/${id}` }
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            </div>
            <div>
                <h1>{Title}</h1>
                <div>{Description}</div>
            </div>
        </div>
    )
}
