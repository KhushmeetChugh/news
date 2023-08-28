import React,{useState,useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from 'react-router-dom';

const News=(props)=> {

  const {id}=useParams();
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  //states are changed dynamically
  //props are read only they cant be changed
  const capitalize=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1)
  }
  document.title= `${capitalize(props.category)}-NewsMonkey`
 const updateNews= async()=>{
    props.setProgress(10) 
    console.log(page)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    props.setProgress(40) 
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    setLoading(false)
    props.setProgress(60) 
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100)
 }
  useEffect(()=>{
    updateNews();
  },[])
  
  const fetchMoreData =async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e0f2a2a1bcd047a48021896ce56b3600&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page+1)
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    setLoading(false)

    setArticles(articles.concat(parsedData.articles))
    setLoading(false)
    setTotalResults(parsedData.totalResults)
  };

    console.log("renen")
    return (
      <>
        
          <h2 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}}> NewsMonkey-Top  {props.category} HeadLines </h2>
          {loading&&<Spinner/>}
          <InfiniteScroll
  dataLength={articles.length} //This is important field to render the next data
  next={fetchMoreData}
  hasMore={articles.length!==totalResults}
  loader={<Spinner/>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  // below props only if you need pull down functionality
>   <div className="container">
          < div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) + "..." : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
          </div>
          </InfiniteScroll>

        
      </>
    )
  
}
News.defaultProps={
  country:"in",
  pageSize:8,
  category:"general"
}
News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
    }

export default News 