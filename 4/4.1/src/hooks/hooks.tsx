import { useNavigate } from 'react-router-dom';

export function useHandlePost() {

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/post-page');
    };

    return handleRedirect
}
  
export function useHandleComments() {

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/comments-page');
    };

    return handleRedirect
}
