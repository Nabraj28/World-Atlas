import { useQuery } from "@tanstack/react-query";
import { getCountryData } from "../../apiUtils";

const useGetCountry = () => {
    const endpoint = '/countries?per_page=10'
    return useQuery({
        queryKey: ['country-list'],
        queryFn: () => getCountryData(endpoint)
    })
}

export default useGetCountry