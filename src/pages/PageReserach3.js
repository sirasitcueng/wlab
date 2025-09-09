import { Button, Col, Row } from "react-bootstrap"
import Header from "../components/Header"
import { research3Txt } from "../contexts/researchData"
import { Link } from "react-router-dom"

const PageResearch3 = () => {

    const reserachTxt = research3Txt;

    return (
        <div>
            <Header />
            
            <Row style={{padding: '20px'}}>
                <Col lg={{span: 10, offset: 1}} xs='12'>
                    <div className="main-comp">
                        <h4>{reserachTxt.title}</h4>
                        <div>{reserachTxt.description}</div>
                        
                        <br />
                        <Row>
                            {/* {reserachTxt.images.map((item, i) => {
                                const colSize = Math.floor(12 / reserachTxt.images.length); // ensure it fits within 12
                                return (
                                    <Col key={i} xs={12} md={colSize}>
                                        <img src={item} alt="" style={{ width: '100%' }} />
                                    </Col>
                                );
                            })} */}
                            <Col xs={12} md={4}>
                                <img src={reserachTxt.images[0]} alt="" style={{ width: '100%' }} />
                            </Col>
                            <Col xs={12} md={8}>
                                <img src={reserachTxt.images[1]} alt="" style={{ width: '100%' }} />
                            </Col>
                        </Row>
                        <br />
                        <div>
                            Resources
                            {reserachTxt.references.map((item, index) => (
                                <div key={index}>
                                    [{index + 1}]&nbsp;&nbsp;&nbsp;{item}
                                </div>
                            ))}
                        </div>
                        <br />
                        <div className="text-end">

                            <Link to={`/research`} style={{ textDecoration: 'none' }}>
                                <Button variant="link" style={{ padding: 0 }}>
                                    Back
                                </Button>
                            </Link>
                        </div>
                    </div>
                    
                </Col>

            </Row>
        </div>
    )
}

export default PageResearch3