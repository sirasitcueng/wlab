import { Button, Col, Row } from "react-bootstrap"
import Header from "../components/Header"
import { MEMBER_INDEX, research1Txt } from "../contexts/researchData"
import { Link } from "react-router-dom"


const PageResearch1 = () => {
    
    const reserachTxt = research1Txt;
    
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
                            {reserachTxt.images.map((item, i) => {
                                const colSize = Math.floor(12 / reserachTxt.images.length); // ensure it fits within 12
                                return (
                                    <Col key={i} xs={12} md={colSize}>
                                        <img src={item} alt="" style={{ width: '100%' }} />
                                    </Col>
                                );
                            })}
                        </Row>
                        <br />
                        <div>
                            {reserachTxt.members.map((item, index) => (
                                <span key={index}>
                                <Link to={`/member/${MEMBER_INDEX[item]}`} style={{ textDecoration: 'none' }}>
                                    <Button variant="link" style={{ padding: 0 }}>
                                        {MEMBER_INDEX[item]}
                                    </Button>
                                </Link>, 
                                </span>
                            ))}
                        </div>
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

export default PageResearch1