import { useContext, useEffect, useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import supabase from "../contexts/db"; // adjust path to your Supabase client
import { AuthContext } from "../contexts/AuthContext";

const SignInModal = (props) => {
    const { isHidden, onClose } = props;
    const [username, setUsername] = useState('');
    const [userPass, setUserPass] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { setUserID } = useContext(AuthContext)

    useEffect(() => {
        if (!isHidden) {
            // reset form when modal opens
            setUsername('');
            setUserPass('');
            setError('');
        }
    }, [isHidden]);

    const handleSignIn = async () => {
        setLoading(true);
        setError('');

        const { data, error } = await supabase.auth.signInWithPassword({
            email: username,
            password: userPass,
        });

        if (error) {
            setError(error.message);
        } 
        else {
            console.log(data)
            setUserID(data.user.id)
            const userExist = await isMemberExist(data.user.id)
            console.log(userExist)
            if (!userExist){
                await addNewMember(data.user.id)
            }
            onClose(); // close modal on success
        }

        setLoading(false);
    };

    const isMemberExist = async (userID) => {
        try {
            const { error, data } = await supabase
                .from('members')
                .select('id')
                .eq('id', userID)
                .single();
            if (error && error.code === 'PGRST116') {
                console.error('Error checking member:', error.message);
                return false; // or throw error if you want it to fail
            }
    
            return !!data;
        } catch (err) {
            console.error('Unexpected error in isMemberExist:', err.message);
            return false;
        }
    };
    

    const addNewMember = async (userID) => {
        console.log((await supabase.auth.getUser()).data.user.id)
        const { error: insertError } = await supabase.from('members').insert([{ id: userID, created_at: new Date().toISOString(), email: username.trim() }]);
        
        if (insertError) {
            console.error('Failed to insert new member row:', insertError.message);
        } 
        else {
            console.log('New member row created!');
        }

    };
      

    return (
        <Modal show={!isHidden} onHide={onClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                type="email"
                placeholder="Enter email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Password"
                value={userPass}
                onChange={(e) => setUserPass(e.target.value)}
                disabled={loading}
                />
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onClose} disabled={loading}>
            Cancel
            </Button>
            <Button variant="primary" onClick={handleSignIn} disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
            </Button>
        </Modal.Footer>
        </Modal>
    );
};

export default SignInModal;
