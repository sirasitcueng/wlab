import { Col, Container, Row } from "react-bootstrap"
import Header from "../components/Header"


const EachPublication = props => {
    const { title, authors, image, journal } = props
    return (
        <>
            <div className="main-comp">
            <Row>
                <Col xs='4'><img src={image || 'PB_PAPER.png'} alt='' style={{width: '100%'}}/></Col>
                <Col xs='1' />
                <Col xs='7'>
                    <h5>{title || 'Journal Title'}</h5>
                    <div>{authors || 'name1, name2, name3, et al.'}</div>
                    <div>{journal || '<Journal>'}</div>
                    <div className="text-end">link</div>
                </Col>
            </Row>
            </div>
            <br />
        </>
    )
}

const PagePublication = () => {
    return (
        <div>
            <Header />
            <br />
            <Container>
                <Row>
                    <Col md='4' sm='12'>
                        <h3>Basic</h3>
                        <EachPublication />
                        <EachPublication />
                        <EachPublication />
                        <br />
                    </Col>
                    <Col md='4' sm='12'>
                        <h3>Core</h3>
                        <EachPublication />
                        <EachPublication />
                        <EachPublication />
                        <br />
                    </Col>
                    <Col md='4' sm='12'>
                        <h3>Translation</h3>
                        <EachPublication />
                        <EachPublication />
                        <EachPublication />
                        <br />
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default PagePublication