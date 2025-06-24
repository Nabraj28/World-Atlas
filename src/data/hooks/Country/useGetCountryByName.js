import { getData } from "@/data/apiUtils"
import { useQuery } from "@tanstack/react-query"


const useGetCountryDataByName = (country) => {

    const endpoint = `/name/${country}`

    return useQuery({
        queryKey: ['country-by-name', country],
        queryFn: () => getData(endpoint)
    })
}

export default useGetCountryDataByName