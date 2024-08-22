// src/pages/NewsHomePage.js
import React, { useEffect, useState } from 'react';
import { Container, TextField, Grid } from '@mui/material';
import NewsCard from '../component/Card';
import {useLocation} from 'react-router-dom'



const NewsHomePage = () => {
    const location=useLocation()
  

    const _id=location.state;

  const [searchTerm, setSearchTerm] = useState('');
  const [newsArticles, setNewsArticles] = useState([]);




  const getData=async()=>{
         await   fetch(`https://newsdata.io/api/1/latest?apikey=pub_5009d36f62eb5608c166b35b5841e59f0e51&q=joe%20biden&country=us&domainurl=news.google.com`

         ).then(res=>res.json()).then(res=>{


         const dt= res.results.filter((data)=>{
  
                if(data.article_id===_id){
                  return  data
                } 
                

               
              })
        
             setNewsArticles(dt)   
            

        }).catch((err)=>{
          if(err){
            alert(err)
          }
        })
  }

  useEffect(()=>{
        getData()

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
     
    </Container>
  );
};

export default NewsHomePage;
