import { useEffect, useState } from "react"
import Header from "../components/Header"
//import supabase from "../contexts/db"
import { useParams } from "react-router-dom";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { DropdownForm, TextArrayForm } from "../components/CustomForm";
//import ImageForm from "../components/ImageForm";


const defaultData = {
    dname: '',
    oname: '',
    nation: '',
    fields: [],
    description: '',
    image: '',
    type: '-'
}

const typeOptions = {
    PI: 'Principal Investigator',
    RF: 'Research Fellow',
    PhD: 'PhD Student',
    visitor: 'Visiting Scholar',
    alumni: 'Alumni'
};

const PageMemberOld = () => {

    const { emailPrefix } = useParams();
    const [member, setMember] = useState(null);
    const [loading, setLoading] = useState(true);
    const [eData, setEData] = useState({...defaultData})
    const [isEditMode, setEditMode] = useState(false)
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const fetchMember = async () => {
            /*const { data, error } = await supabase
                .from('members')
                .select('*')
                .ilike('email', `${emailPrefix}@%`)
                .single();
            
            

            if (!error) {
                setMember(data);
                console.log(data)
            }*/
            setLoading(false);
        };

        fetchMember();
    }, [emailPrefix]);

    

    if (loading) return <p>Loading...</p>;
    if (!member) return <p>Member not found.</p>;

    const handleSubmit = async (e) => {
        e.preventDefault();
        /*setSaving(true);
    
        try {
            const { error } = await supabase
                .from('members')
                .update(eData)
                .eq('id', (await supabase.auth.getUser()).data.user.id); // use the current member ID
    
            if (error) {
                console.error('Update failed:', error.message);
                alert('Failed to save changes.');
            } else {
                setEditMode(false);
                setMember(eData);
                alert('Changes saved successfully.');
            }
        } catch (err) {
            console.error('Unexpected error:', err.message);
            alert('An unexpected error occurred.');
        }
    
        setSaving(false);*/
    };
    
    const handleChange = e => {
        const { name, value } = e.target;
        setEData((prev) => ({ ...prev, [name]: value }));
    };
    const onCancel = () => {
        setEData({...defaultData})
        setEditMode(false)
    }

    

    return (
        <>
            <Header />
            <Container className="mt-3">
            
            </Container>
            <Container hidden={isEditMode} className="mt-3">
                <h4 className="mb-3">Member Profile</h4>

                <Row className="mb-3">
                    <Col md={4}><strong>Display Name:</strong></Col>
                    <Col>{member.dname || '-'}</Col>
                </Row>

                <Row className="mb-3">
                    <Col md={4}><strong>Official Name:</strong></Col>
                    <Col>{member.oname || '-'}</Col>
                </Row>

                <Row className="mb-3">
                    <Col md={4}><strong>Type:</strong></Col>
                    <Col>{Array.isArray(member.type) ? member.type.join(', ') : member.type || '-'}</Col>
                </Row>

                <Row className="mb-3">
                    <Col md={4}><strong>Nation:</strong></Col>
                    <Col>{member.nation || '-'}</Col>
                </Row>

                <Row className="mb-3">
                    <Col md={4}><strong>Research Fields:</strong></Col>
                    <Col>
                        {(member.fields && member.fields.length > 0)
                            ? member.fields.map((f, i) => <div key={i}>• {f}</div>)
                            : '-'}
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={4}><strong>Description:</strong></Col>
                    <Col>{member.description || '-'}</Col>
                </Row>

                <Row className="mb-3">
                    <Col md={4}><strong>Image:</strong></Col>
                    <Col>
                        {member.image
                            ? <img src={member.image} alt="member" style={{ maxHeight: '200px', borderRadius: '12px' }} />
                            : 'No image'}
                    </Col>
                </Row>
                <Button variant="primary" hidden={isEditMode} onClick={() => {setEData(member); setEditMode(true)}}>Edit</Button>
            </Container>

            <Container hidden={!isEditMode} className="mt-4">
                <h3>Edit Profile</h3>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Display Name</Form.Label>
                                <Form.Control
                                    name="dname"
                                    value={eData?.dname || ''}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Your own language name</Form.Label>
                                <Form.Control
                                    name="oname"
                                    value={eData?.oname || ''}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <DropdownForm
                                label="Member Type"
                                name="type"
                                options={typeOptions}
                                value={eData?.type || '-'}
                                onChange={(newValue) =>
                                    setEData(prev => ({ ...prev, type: newValue }))
                                }
                            />

                            <TextArrayForm 
                                label="Research Fields"
                                values={eData?.fields || []}
                                onChange={(updated) => setEData(prev => ({ ...prev, fields: updated }))}
                            />


                            <Form.Group className="mb-3">
                                <Form.Label>Nation</Form.Label>
                                <Form.Control
                                    name="nation"
                                    value={eData?.nation || ''}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    name="description"
                                    value={eData?.description || ''}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control
                                    name="image"
                                    value={eData?.image || ''}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="danger" hidden={!isEditMode} onClick={onCancel}>Cancel</Button>
                    <Button type="submit" variant="primary" disabled={saving}>
                        {saving ? 'Saving...' : 'Save Changes'}
                    </Button>
                </Form>
                
            </Container>
            
            
        </>
    );
};

export default PageMemberOld