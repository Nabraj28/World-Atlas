import { useQuery } from "@tanstack/react-query";
import { getCountryData } from "../../apiUtils";

const useGetCountry = (url) => {

    const urlObj = url ? new URL(url) : null;
    const pageValue = urlObj ? urlObj.searchParams.get('page') : null;
    const endPoint = `/countries?${pageValue ? `page=${pageValue}&` : ''}per_page=8`;

    return useQuery({
        queryKey: ['country-list', endPoint],
        queryFn: () => getCountryData(endPoint)
    })
}

export default useGetCountry