import { useEffect, useState } from "react"
import Header from "../components/Header"
import { fetchMembers } from "../contexts/fetchData"
import { Button, Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
//import supabase from "../contexts/db"



const PageMembers = () => {

    const [rfs, setRfs] = useState([])
    const [phds, setPhds] = useState([])
    const [alumnis, setAlumnis] = useState([])
    const [visitors, setVisitors] = useState([])
    const [pi, setPI] = useState()
    
    const navigate = useNavigate()

    /*useEffect(() => {
        const fetchTestData = async () => {
            const { data, error } = await supabase
                .from('test')         // your table name
                .select('*')          // fetch all columns
        
            if (error) {
                console.error('Error fetching data:', error);
            } else {
                setData(data);
                console.log(data)
            }
        };
    
        fetchTestData();
    }, []);*/

    useEffect(() => {
        const fetchMemberData = async () => {
            const json = await fetchMembers();
            setPhds(json.filter(m => m.type === 'PhD'))
            setRfs(json.filter(m => m.type === 'RF'))
            setAlumnis(json.filter(m => m.type === 'alumni'))
            setVisitors(json.filter(m => m.type === 'visitor'))
            setPI(json.filter(m => m.type === 'PI')[0])
        }
        fetchMemberData()
    }, [])

    const PIData = props => {
        return pi && (
            <>
                <Row>
                    <Col className="d-none d-md-block" md='2' />
                    <Col xs='4' md='2'>
                        <img alt='' src={`${process.env.PUBLIC_URL}/memberPic/0-zoom.jpg`} style={{width: '100%'}}/>
                    </Col>
                    <Col xs='8' md='6'>
                        <h5>{pi.title} {pi.lastname?.toUpperCase()} {pi.firstname}</h5>
                        <div>{pi.ownlanguage}</div>
                        <ul>{pi.fields?.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))}</ul>
                        <div className="text-end">
                            <Button variant="dark" 
                                onClick={() => navigate(`/member/${pi.firstname?.toLowerCase()}_${pi.lastname?.toLowerCase()}`)}>more</Button>
                        </div>
                    </Col>
                    <Col className="d-none d-md-block" md='2' />
                </Row>
                
                <br />
            </>
        )
    }

    const MappingData = props => {
        const { data } = props
        return data?.map((member, index) => (
            member?.hidden ? <></> : (<Col sm='12' md='6' key={index} hidden={member?.hidden || false}>
                <Row>
                    <Col xs='4'>
                        <img alt='' src={`${process.env.PUBLIC_URL}/memberPic/${member.index}.jpg`} onError={(e) => (e.currentTarget.src = `${process.env.PUBLIC_URL}/memberPic/${member.index}.png`)} style={{maxWidth: '100%', maxHeight: '170px'}}/>
                    </Col>
                    <Col xs='8'>
                        <h5>{member.title} {member.lastname.toUpperCase()} {member.firstname}</h5>
                        <div>{member.ownlanguage}</div>
                        {/* <div>{member.description}</div> */}
                        <ul>{member.fields?.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))}</ul>
                        <div className="text-end">
                            <Button variant="dark" 
                                onClick={() => navigate(`/member/${member.firstname.toLowerCase()}_${member.lastname.toLowerCase()}`)}>more</Button>
                        </div>
                    </Col>
                </Row>
                
                <br />
            </Col>)
        ))
    }

    return (
        <div>
            <Header />
            <Container >
            <br />
                <div className="main-comp">
                    <h3>Principal Investigator</h3>
                    <hr />
                    <PIData />
                    
                </div>
                <br />
                <div className="main-comp">
                    <h3>Research Fellows</h3>
                    <hr />
                    <Row>
                        <MappingData data={rfs} />
                    </Row>
                </div>
                <br />
                <div className="main-comp">
                    <h3>PhD Students</h3>
                    <hr />
                    <Row>
                        <MappingData data={phds} />
                    </Row>

                </div>
                <br />
                <div className="main-comp" hidden={true}>
                    <h3>Visitors</h3>
                    <hr />
                    <Row>
                        <MappingData data={visitors} />
                    </Row>

                </div>
                <br />
                <div className="main-comp" hidden={true}>
                    <h3>Alumni</h3>
                    <hr />
                    <Row>
                        <MappingData data={alumnis} />
                    </Row>
                    <hr />

                </div>
                <br />
            </Container>
            
        </div>
    )
}

export default PageMembers