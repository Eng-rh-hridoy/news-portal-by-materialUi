import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './News.css';

const News = (props) => {
    const { title, description, urlToImage } = props.news
    console.log(props)
    return (
        <div className="news-container">
            <Card sx={{ maxWidth: 600 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="400"
                        image={urlToImage}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        See more..
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default News;