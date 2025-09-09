import { useEffect, useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import supabase from '../contexts/db';

const ImageForm = ({ onUpload }) => {
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [isExists, setExists] = useState(false)

    const isImageExists = async (fileName) => {
        try {
            const { data } = await supabase.storage.from('members').list('', { search: fileName });
            return data?.some(f => f.name === fileName);
        }
        catch (e) {
            return false
        }
    }

    const removeImage = async () => {
        try {
            const authID = (await supabase.auth.getUser()).data.user.id
            const isExists = await isImageExists(authID)
            if (isExists) {
                await supabase.storage.from('members').remove(authID)
                alert('Successfully removed the file')
                setImageUrl('')
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    const getImageUrl = (fileName) => {
        try {
            const { data, error } = supabase.storage.from('members').getPublicUrl(fileName);
            if (error) {
                console.error('Error retrieving image URL:', error.message);
                return "";
            }
            return data.publicUrl
        }
        catch (e) {
            console.log(e)
            return ''
        }
    };

    const onFileChange = async (e) => {
        const file = e.target.files[0];
        setError('');

        if (!file) return;

        if (!file.type.startsWith('image/')) {
            setError('Only image files are allowed.');
            return;
        }

        if (file.size > 20 * 1024 * 1024) {
            setError('File size exceeds 20 MB.');
            return;
        }
        setImageFile(file)

    };

    const handleUpload = async () => {
        const authID = (await supabase.auth.getUser()).data.user.id
        setUploading(true);
        await removeImage()
        const { error: uploadError } = await supabase.storage.from('members')
            .upload(authID, imageFile, {
                contentType: imageFile.type,
                cacheControl: '3600',
                upsert: true
            });
        if (uploadError) {
            setError(uploadError.message);
        } else {
            const { data } = supabase
                .storage
                .from('members')
                .getPublicUrl(authID);
            setImageUrl(data.publicUrl);
            setExists(true)
        }
        setUploading(false);
    }
    

    useEffect(() => {
        const setUrl = async () => {
            const authID = (await supabase.auth.getUser()).data.user.id
            const url = getImageUrl(authID) 
            if (url) {
                setExists(true)
                setImageUrl(url)
            }
        }
        setUrl()
        return () => {
            setImageUrl('')
            setImageFile(null)
            setUploading(false)
            setExists(false)
        }
    }, [])

    useEffect(() => {
        console.log(imageUrl)
        const check = async () => {
            const authID = (await supabase.auth.getUser()).data.user.id
            const exists = await isImageExists(authID);
            setExists(exists);
        };
        if (imageUrl) check();
    }, [imageUrl])


    return (
        <>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Image (Max 20 MB)</Form.Label>
                <Form.Control type="file" accept="image/*" onChange={onFileChange} disabled={uploading} />
            </Form.Group>
            <Button disabled={!imageFile} onClick={() => handleUpload()}>Upload</Button>
            <Button variant='danger' onClick={() => removeImage()}>Remove</Button>

            {uploading && <Spinner animation="border" size="sm" className="me-2" />}
            {error && <Alert variant="danger">{error}</Alert>}
            {isExists && (
                <div className="mt-2">
                    <strong>Uploaded Image Preview:</strong>
                    <div>
                        <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '250px', borderRadius: '8px' }} />
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageForm;
