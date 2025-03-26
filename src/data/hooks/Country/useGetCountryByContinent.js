import { getData } from "@/data/apiUtils"
import { useQuery } from "@tanstack/react-query"


const useGetCountryByContinent = (continent) => {

    const endpoint = `/countries${continent ? `?continent=${continent}` : ''}`

    return useQuery({
        queryKey: ['country-by-continent', continent],
        queryFn: () => getData(endpoint)
    })
}

export default useGetCountryByContinent