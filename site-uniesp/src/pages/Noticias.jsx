import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Noticias = () => {

    const [noticias, setNoticias] = useState([])
    const urlBase = "http://localhost:3000"

    useEffect(() => {
        axios.get(`${urlBase}/noticias`)
        .then(response => setNoticias(response.data))
        .catch(error => console.error("Erro ao carregar a lista de notícias: ", error))
    }, []) 

  return (
    <Container className="py-4">

        <h2 className="mb-4">Notícias</h2>

        { /* Linha com 3 colunas (para os cards ficarem lado a lado) */}
        <Row className="g-4">

            {
                noticias.map(noticia => (
                    
                    <Col xs={12} sm={6} md={4} key={noticia.id}>
                        
                        <Card className="h-100 shadow-sm">
                            <Card.Img
                                variant="top" 
                                src={noticia.imagem}
                                alt="Imagem da Notícia"
                                style={{ objectFit: 'cover', height: '480px' }}
                            /> 
                            <Card.Body>
                                <Card.Title>
                                    {noticia.titulo}   
                                </Card.Title>
                                <Link
                                to={`/visualiza-noticia/${noticia.id}`} className="text-decoration-none text-primary">
                                    <small>Ler mais</small>
                                </Link>
                                
                            </Card.Body>   
                        </Card>
                    </Col>
                
                ))
            }

        </Row>

    </Container>
  )
}

export default Noticias