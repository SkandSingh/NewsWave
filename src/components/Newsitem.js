import React from 'react'

const Newsitem = (props) => {
 
    let {title,description,imageUrl,newsUrl,author,date}=props;
    return (
      <div>
        <div className='mt-2 mb-2 min-height container-fluid min-vh-70 mh-100'>
          <img src={imageUrl?imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/The_Indianapolis_Star%2C_2011.jpg/330px-The_Indianapolis_Star%2C_2011.jpg"} className="card-img-top" alt="..." />
            <div className="card-body p-3 rounded-bottom"  style={{backgroundColor: props.mode==='dark'?'rgb(24 24 31)':'rgb(248 249 250)', color: props.mode==='dark'?'white':'black'}}>
              <h5 className="card-title">{title}...</h5>
              <p className="card-text mt-2">{description}...</p>
              <p className="card-text" ><small className="" >By {author} on {new Date (date).toGMTString()}</small></p>
              <a href={newsUrl} target="blank" className="btn btn-sm btn-primary"> Read More</a>
            </div>
        </div>
      </div>
    )
  
}

export default Newsitem
