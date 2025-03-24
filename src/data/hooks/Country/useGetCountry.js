import { useQuery } from "@tanstack/react-query";
import { getData } from "@/data/apiUtils";

const useGetCountry = () => {

    const endPoint = `/countries`

    return useQuery({
        queryKey: ['country-list', endPoint],
        queryFn: () => getData(endPoint)
    })
}

export default useGetCountry