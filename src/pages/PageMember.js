import { useEffect, useState } from "react"
import Header from "../components/Header"
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchMembers, TypeName } from "../contexts/fetchData";


const PageMember = () => {

    const { name } = useParams();
    const [data, setData] = useState({})
    useEffect(() => {
        if (!name) return;
        const queryData = async () => {
            const json = await fetchMembers();
            const [firstName, lastName] = name?.split('_').map(m => m.toLowerCase())
            const member = json.find(m =>
                m?.firstname?.toLowerCase().includes(firstName.toLowerCase()) &&
                m?.lastname?.toLowerCase().includes(lastName.toLowerCase())
            );
            
            setData(member);
            console.log(member)
        }
        queryData()
    }, [name])

    const BlockData = props => {
        const { children, title } = props
        
        return (
            <>
                <h5 style={{marginLeft : '30px'}}>{title}</h5>
                <hr />
                <div style={{marginLeft : '30px'}}>{children}</div>
                <br />
            </>
        )
    }


    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col sm='4'>
                        <img alt='' src={`${process.env.PUBLIC_URL}/memberPic/${data?.index}.jpg`} style={{width: '100%'}}/>
                        <div style={{color: 'white', padding: '10px', background: 'black', textAlign: 'center'}}>
                            <span className="h4">{data?.title || ""}{data?.title?.length > 6 ? <br /> : <span>&nbsp;&nbsp;</span>}</span>
                            <span className="h1" hidden={!(data?.nationality === 'cn' || data?.nationality === 'vn')}>{data?.lastname?.toUpperCase()}&nbsp;&nbsp;&nbsp;{data.firstname}</span>
                            <span className="h1" hidden={data?.nationality === 'cn' || data?.nationality === 'vn'}>{data.firstname}&nbsp;&nbsp;&nbsp;{data?.lastname?.toUpperCase()}</span>
                            <div>{TypeName[data.type]}</div>
                        </div>
                        <br />
                    </Col>
                    <Col sm='1' />
                    <Col>
                        <BlockData title='Introduction'>
                            <div style={{textAlign: 'justify'}}>{data.description}</div>
                        </BlockData>
                        {data?.education && <BlockData title='Education Background'>
                            <ul>{data?.education?.map((f, i) => (
                                    <li key={i}>{f}</li>
                            ))}</ul>
                        </BlockData>}
                        <BlockData title='Research Field(s)'>
                            <ul>{data?.fields?.map((f, i) => (
                                    <li key={i}>{f}</li>
                            ))}</ul>
                        </BlockData>
                        {data?.awards && <BlockData title='Awards'>
                            <ul>{data?.awards?.map((f, i) => (
                                    <li key={i}>{f}</li>
                            ))}</ul>
                        </BlockData>}
                        <BlockData title='Contact'>
                            <img alt='' src={`${process.env.PUBLIC_URL}/icons/email.png`} style={{width: '32px'}} />{data?.email}
                        </BlockData>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default PageMember