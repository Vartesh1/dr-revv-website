
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BlogPostPage = () => {
  const { slug } = useParams();

  // In a real application, you would fetch the blog post content based on the slug
  const blogPosts = {
    'future-of-remapping': {
      title: 'The Future of ECU Remapping',
      content: 'This is a blog post about the future of ECU remapping. We will discuss the latest trends and innovations in the world of automotive performance tuning.',
      image: 'https://images.unsplash.com/photo-1614026480209-5cb8a7c24503?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    'fuel-efficiency': {
      title: '5 Ways to Boost Your Car\'s Fuel Efficiency',
      content: 'This is a blog post about 5 ways to boost your car\'s fuel efficiency. We will discuss how our remapping services can help you save money at the pump.',
      image: 'https://images.unsplash.com/photo-1580475426293-3488b5184b35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    'mobile-remapping': {
      title: 'Why Choose a Mobile Remapping Service?',
      content: 'This is a blog post about why you should choose a mobile remapping service. We will discuss the convenience and benefits of having our experts come to you.',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  };

  const post = blogPosts[slug];

  if (!post) {
    return <Container className="mt-5"><h2>Post not found</h2></Container>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8} className="mx-auto">
          <h1 className="text-center mb-4">{post.title}</h1>
          <img src={post.image} alt={post.title} className="img-fluid rounded mb-4" />
          <p>{post.content}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPostPage;
