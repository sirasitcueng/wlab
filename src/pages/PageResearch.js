import { Button, Col, Row } from "react-bootstrap"
import Header from "../components/Header"
import { Link } from 'react-router-dom';

//import { useState } from "react";

// const DirectionComponent = props => {

//     const { title, des, children, image } = props
//     const [showModal, setShowModal] = useState(false);

//     return (
//         <div className="main-comp">
//             <div className="text-center"><img src={image} alt="" style={{maxWidth: '300px', width: '100%', padding: '20px', borderRadius: '40px'}}/></div>
//             <h4>{title}</h4>
//             <div className="d-none d-md-block d-lg-none" style={{minHeight: '220px'}}>{des}</div>
//             <div className="d-none d-lg-block d-xl-none" style={{minHeight: '170px'}}>{des}</div>
//             <div className="d-none d-xl-block" style={{minHeight: '130px'}}>{des}</div>
//             <div className="d-xs-block d-md-none">{des}</div>
//             <br />
//             <div className="text-end"><Button onClick={() => setShowModal(true)}>more..</Button></div>
//             <br />
//             <br />
//             <Modal size='lg' show={showModal} onHide={() => setShowModal(false)} centered>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{title}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     {children}
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <div className="d-flex"><Button className="ms-auto" variant="primary" onClick={() => setShowModal(false)}>
//                         ok
//                     </Button></div>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     )
// }


const DirectionComp2 = props => {
    //const [isExpanded, setIsExpanded] = useState(false);
    const { title, image, text, isReverse, index } = props

    //const previewLength = 160;
    return (
        <div className="main-comp">
            <Row  style={{minHeight: '250px'}}>
                <Col xs={{order: 2, span: 12}} sm={{order: isReverse ? 2 : 1, span: 6}}>
                    <h5>{title}</h5>
                    <div>
                        {text}
                        {/* {isExpanded ? text : `${text.slice(0, previewLength)}...`}
                        <div>
                            <Button variant="link" onClick={() => setIsExpanded(!isExpanded)} style={{ padding: 0 }}>
                                {isExpanded ? 'Read less' : 'Read more'}
                            </Button>
                        </div> */}
                    </div>
                </Col>
                <Col className='text-center' xs={{order: 2, span: 12}} sm={{order: isReverse ? 1 : 2, span: 6}}>
                    <img src={image} alt="" style={{height: '200px', padding: '20px', borderRadius: '40px'}} />
                </Col>
            </Row>
            <div className="text-end">
                {/* <Button variant="link" onClick={() => {}} style={{ padding: 0 }}>
                    Read More
                </Button> */}
                <Link to={`/research${index || ""}`} style={{ textDecoration: 'none' }}>
                    <Button variant="link" style={{ padding: 0 }}>
                        Read More
                    </Button>
                </Link>
            </div>
            
            
        </div>
    )
}


const PageResearch = () => {

    const titles = [
        "I. Quantum Nanophotonics: Forward & Inverse Design",
        "II. Multiscale Particle-in-Cell (PIC) Simulations for Next-Gen. Plasmonics & Optoelectronics",
        "III. Electron-Matter Interactions ",
        "IV. Symmetry-Broken Metaphotonics"
    ]

    const text1 = "We explore advanced ways to control how light and matter interact at extremely small scales, aiming to develop next-generation technologies for quantum photonics."
    const text2 = "We use a powerful simulation method called Particle-in-Cell (PIC) to better understand how electrons behave in tiny structures important for future optical and quantum technologies."
    const text3 = "This research explores how fast-moving free electrons interact with different kinds of light-controlling materials to uncover new physical effects that go beyond well-known radiation types like Cherenkov and Smith–Purcell radiation."
    const text4 = "Our research explores Symmetry-Broken Metaphotonics—an emerging direction that leverages in-plane and out-of-plane symmetry breaking in metasurfaces and twist-enabled photonic structures to unlock new regimes of light control."

    return (
        <div>
            <Header />
            <Row style={{padding: '20px'}}>
                <Col lg={{span: 5, offset: 1}} xs='12'>
                    <DirectionComp2 
                        title={titles[0]}
                        text={text1}
                        image={`directions/${1}/1.png`}
                        isReverse={false}
                        index={1}
                    />
                    <br />
                </Col>
                
                <Col lg={{span: 5}} xs='12'>
                    <DirectionComp2 
                        title={titles[1]}
                        text={text2}
                        image={`directions/${2}/1.png`}
                        isReverse={true}
                        index={2}
                    />
                </Col>
            </Row>
            <Row style={{padding: '20px'}}>
                <Col lg={{span: 5, offset: 1}} xs='12'>
                    <DirectionComp2 
                        title={titles[2]}
                        text={text3}
                        image={`directions/${3}/1.png`}
                        index={3}
                    />
                    <br />
                </Col>
                <Col lg={{span: 5}} xs='12'>
                    <DirectionComp2 
                        title={titles[3]}
                        text={text4}
                        image={`directions/${4}/1.png`}
                        isReverse={true}
                        index={4}
                    />
                </Col>
            </Row>

            {/* <div>
                <Row style={{padding: '20px'}}>
                    <Col style={{width: '30px'}} className="d-none d-md-block" />
                    <Col md='3' sm='12'>
                        <DirectionComponent title='Basic' image='RS_BASIC.png' des={(<ul>
                            <li>New theoretical and modelling techniques and platforms</li>
                            <li>Example: Quantum computing in solving many-body physics problems in quantum optics</li>
                        </ul>)}>
                            <div>
                                1. NRF QEP2.0 Advancing cavity QED: materials and algorithms | Dario Poletti (SUTD), Kwek Leong Chuan (CQT, NUS), Ricky Ang (SUTD), Koh Enshan, Dax (IHPC, A*STAR), Khoo Jun Yong (IHPC, A*STAR), Wu Chunfeng (SUTD)​
                            </div>
                            <div>
                                2. SUTD Kickstarter Initiative (SKI) – Next-generation modeling of optoelectronics with the particle-in-cell method 
                            </div>
                        </DirectionComponent>
                    </Col>
                    <Col md='3' sm='12'>
                        <DirectionComponent title='Core' image='RS_CORE.png' des={(<ul>
                            <li>Nanoplasmonics / nanophotonics and quantum optics</li>
                            <li>Multiphysics modelling platforms to explain experiments & discover underlying mechanisms</li>
                        </ul>)}>
                            <div>
                            NRF CRP26 Advanced infrared optoelectronics and applications with emerging quantum materials | Teng Jinghua (IMRE, A*STAR), Qiu Cheng-Wei (NUS), Liu Zheng (NTU)​

SUTD Kickstarter Initiative (SKI) Few-photon-level plexcitonics with perovskite nanocrystals | Joel Yang (SUTD)​

MOE Tier2 Engineering superballistic electron flow in double-layer graphene | Michel Bosman (NUS)​

NRF CRP31 Hot-electron integrated nano-devices: a versatile electromagnetic synthesising technology from THz to EUV (Hot INVEST) | Nikoo (NTU), Ricky (SUTD), Zhaogang (SUTD), Hiroshi Amano (Physics Nobel Laureate 2014)
                            </div>
                        </DirectionComponent>
                    </Col>
                    <Col md='3' sm='12'>
                        <DirectionComponent title='Translation' image='RS_TRANSITION.png' des={(<ul>
                            <li>Technology adoption</li>
                            <li>Dynamic direction</li>
                            <li>Sensing & healthcare</li>
                            <li>Example: Tunneling approached based genomic sequencing</li>
                        </ul>)}>
                            <div>SUTD Start-Up Research Grant (SRG) Integrated plexcitonics for quantum sensing​

​

NRF QEP2.0 Sensor Pillar Plasmonic nanopore: Toward on-chip quantum-based genome sequencing | Dong Zhaogang (IMRE, A*STAR), Gao Weibo (NTU), Qiu Cheng-Wei (NUS)​

National Quantum Sensor Programme NRF QEP3.0 Quantum bioimaging with entangled photon pairs: advancing two-photon fluorescence microscopy with A*STAR Skin Research Labs (A*SRL)​

National Quantum Sensor Programme NRF QEP3.0 Electrically tunable valleytronic quantum metasurfaces for μ-LiDAR remote sensing with Q. InC, A*STAR</div>
                        </DirectionComponent>
                    </Col>
                    <Col style={{width: '50px'}} className="d-none d-md-block" />
                </Row>
            </div> */}
        </div>
    )
}

export default PageResearch