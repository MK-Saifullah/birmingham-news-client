import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button, Image } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const News = () => {
    const news = useLoaderData();
    console.log(news);
    const {details, author, rating, title, category_id, image_url} = news;
    return (
        <Card className="">
            <Image
                src={image_url}
            ></Image>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                    <div className='d-flex justify-content-between'>
                        <p><span className='fw-bold'>Author:</span> {author?.name}</p>
                        <p><span className='fw-bold'>Published Date:</span> {author?.published_date}</p>
                    <div>
                        <FaStar className='text-warning'></FaStar>
                        <span>{rating?.number}</span>
                    </div>
                    </div>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">All news in this category</Button>
                </Link>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        // <div>
        //     {/* <h2>This is news component: {news.length}</h2> */}
        //     <p>This is news: {details}</p>
        //     <h4>{title}</h4>
        // </div>
    );
};

export default News;