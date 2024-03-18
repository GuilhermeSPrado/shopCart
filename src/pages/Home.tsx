import  { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export function Home() {
    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, []);

    const images = ["/imgs/banner.png", "/imgs/banner2.png", "/imgs/banner3.png", "/imgs/banner4.png"]; 
    const [currentImageIndex, setCurrentImageIndex] = useState(0); 

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <Container fluid className="p-0">
            <Row className="justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
                    <h1 className="display-4">Tech Haven: Explore Our Smartphone Collection!</h1>
                    <p className="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Col>
                <Col xs={12} md={6} className='text-center'>
                    <img src={images[currentImageIndex]} alt="Banner" className="img-fluid rounded"/>
                </Col>
            </Row>
        </Container>
    );
}
