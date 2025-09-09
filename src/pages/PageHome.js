import { Col, Row } from "react-bootstrap"
import Header from "../components/Header"
import EventTable from "../components/EventTable"



const PageHome = () => {
    return (
        <div>
            <Header />
            <div className="bg-cover">
            <Row>
                <Col md='8'>
                    <h1>ω.LAB</h1>
                    <div>
                        “Keep your eyes open for unusual results. Luck is an ingredient in a scientific career but one needs to catch it when it passes by.”
                    </div>
                </Col>
                <Col md='4' sm='12' className="d-flex flex-column align-items-end justify-content-end">
                    <div><br />Nano Lett. 2019, 19, 9, 5853–5861.
                    </div>
                </Col>
            </Row>
            </div>
            <br /><br />
            <Row bsPrefix='row' hidden={true}>
                <Col sm='6' xs='12'>
                ..
                </Col>
                <Col sm='6'>
                    <h3>Introduction</h3>
                    <div>xxx</div>
                </Col>
            </Row>
            <br /><br />
            <div className="container-fluid" style={{maxWidth : '1200px'}} hidden={true}>
                <EventTable />
            </div>
        </div>
    )
}

export default PageHome