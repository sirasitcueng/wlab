import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';
//import SignInModal from './SignInModal';
// import { AuthContext } from '../contexts/AuthContext';
//import supabase from '../contexts/db';

const Header = () => {
    const navigate = useNavigate()
    // const [showModal, setShowModal] = useState(false);
    // const [isSI, setSI] = useState(false)
    const expand = 'md'

    // const { isSignIn, setUserID } = useContext(AuthContext)

    /*const SignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Sign out error:', error.message);
        } else {
            setUserID(null)
            console.log('Signed out successfully');
        }
    };

    useEffect(() => {
        const isSignInRight = async () => {
            const user = await supabase.auth.getUser().catch(e => false)
            if (!user) return false
            return !!user.data.user.id
        }
        setSI(isSignInRight())
    }, [])*/


    return (
        <>
            <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                <Container fluid>
                    <Navbar.Brand href="#">ω lab</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            ω lab
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link onClick={() => navigate("/")}>HOME</Nav.Link>
                            <Nav.Link onClick={() => navigate("/member/lin_wu")}>PI</Nav.Link>
                            <Nav.Link onClick={() => navigate("/members")}>MEMBERS</Nav.Link>
                            <Nav.Link onClick={() => navigate("/research")}>RESEARCH</Nav.Link>
                            {/* <Nav.Link onClick={() => navigate("/publications")}>PUBLICATIONS</Nav.Link> */}
                            <Nav.Link onClick={() => navigate("/gallery")}>GALLERY</Nav.Link>
                            <Nav.Link onClick={() => navigate("/joinus")}>JOIN US</Nav.Link>
                            {/* <Button variant="outline-primary" hidden={isSI} onClick={() => setShowModal(true)}>Sign In</Button>
                            <Button variant="outline-danger" hidden={!isSI} onClick={() => {}}>Sign Out</Button> */}
                        </Nav>

                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            {/*<SignInModal
                isHidden={!showModal}
                onClose={() => setShowModal(false)}
            />*/}
        </>
    )
}

export default Header;