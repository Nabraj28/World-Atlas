import { useQuery } from "@tanstack/react-query";
import { getData } from "@/data/apiUtils";

const useGetCountry = () => {

    const endPoint = `/all/?fields=name,continents,capital,population,area,currencies,idd,flags`

    return useQuery({
        queryKey: ['country-list', endPoint],
        queryFn: () => getData(endPoint)
    })
}

export default useGetCountry