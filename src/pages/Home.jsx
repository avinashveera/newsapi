// src/pages/NewsHomePage.js
import React, { useEffect, useState } from 'react';
import { Container, TextField, Grid } from '@mui/material';
import NewsCard from '../component/Card';
import Pagnat from '../component/Pagination'


let startIndex=0;
let lastIndex=4;

const NewsHomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newsArticles, setNewsArticles] = useState([]);
  const [count ,setCount]=useState(3)
  const [tBtn,setTbtn]=useState(10)


  const getData=async(a,b)=>{
         await   fetch(`https://newsdata.io/api/1/latest?apikey=pub_5009d36f62eb5608c166b35b5841e59f0e51&q=joe%20biden&country=us&domainurl=news.google.com`

         ).then(res=>res.json()).then(res=>{
            console.log(a,b)
           setNewsArticles(res.results.slice(a,b)) 

        }).catch((err)=>{
          if(err){
            alert(err)
          }
        })
  }

  useEffect(()=>{
        getData(0,count)

    },[])


  const filteredNews = newsArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container sx={{ padding: '50px' }}>
      <TextField
        fullWidth
        label="Search by Title"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{marginBottom:'20px'}}
      />
      <Grid container spacing={4}>
        {filteredNews.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <NewsCard 
              title={article.title}
              description={article.description}
              imageUrl={article.urlToImage}
              date={article.date}
              key={article.article_id}
              _id={article.article_id}
              newArt={newsArticles}
              
            />
          </Grid>
        ))}
      </Grid>
      <Pagnat  total={tBtn} fucn={getData} count={count} />
    </Container>
  );
};

export default NewsHomePage;
