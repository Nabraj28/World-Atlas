import { getData } from "@/data/apiUtils"
import { useQuery } from "@tanstack/react-query"


const useGetCountryByName = (country) => {

    const endpoint = `/countries${country ? `/${country}` : ''}
    `

    return useQuery({
        queryKey: ['country-by-continent', country],
        queryFn: () => getData(endpoint)
    })
}

export default useGetCountryByName