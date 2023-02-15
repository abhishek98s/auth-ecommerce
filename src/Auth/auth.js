import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const withAuth = (Component) => {

    const AuthenticatedComponent = () => {
        const router = useRouter();
        const [data, setData] = useState()

        useEffect(() => {
            const getUser = async () => {
                const response = sessionStorage.getItem("authedUser") || sessionStorage.getItem("authedAdmin") ;
                if (!response) {
                    router.push('/login');
                } 
                else {
                    setData(response);
                }  
            };
            getUser();
        }, []);

        return !!data ? <Component/> : null; // Render whatever you want while the authentication occurs
    };

    return AuthenticatedComponent;
};

export default withAuth;