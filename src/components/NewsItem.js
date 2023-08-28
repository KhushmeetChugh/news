import React from 'react'

export const NewsItem=(props)=> {

    let {title,description,imageUrl,newsUrl,author,date,source}=props 
    return (
      <div>
        <div className="card" >
  <img src={imageUrl?imageUrl:"https://www.livemint.com/lm-img/img/2023/08/14/600x338/Jio_1692012320366_1692012320469.jpg"}className="card-img-top" alt="..."/>
  <div className="card-body">
    <div>
  <span className="badge rounded-pill bg-danger">
    {source}</span>
    </div>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
  <div className="card-footer text-body-secondary">
    By {author?author:"Unknown"} on {new Date(date).toGMTString()}
  </div>
</div>

      </div>
    )
    
  
}

export default NewsItem