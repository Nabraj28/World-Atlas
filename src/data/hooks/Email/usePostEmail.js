import { postContactData } from "@/data/apiUtils";
import { useMutation } from "@tanstack/react-query";


const usePostEmail = () => {
    const endPoint = 'https://api.web3forms.com/submit';

    return useMutation({
        mutationFn: (payload) => postContactData(endPoint, payload)
    })
}

export default usePostEmail