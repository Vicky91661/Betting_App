import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function useSendingAuthData() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
     const navigate = useNavigate();
    const fetchSendingAuthData = async (url, sendData) => {
        setError("")
        setLoading(true);
        try {
            const response = await axios.post(url, sendData);
            const authorization = response.data.token;
            localStorage.setItem('authorization', authorization);
            navigate("/games")
        } catch (error) {
            console.log("error is ",error)
            setError(error.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    return [fetchSendingAuthData, loading, error];
}

export default useSendingAuthData;