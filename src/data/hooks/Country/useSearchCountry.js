import { getData } from "@/data/apiUtils";
import { useQuery } from "@tanstack/react-query";

const useSearchCountry = (country) => {
    const endpoint = `/name/${country}`;

    return useQuery({
        queryKey: ['country-by-name', country],
        queryFn: () => getData(endpoint),
        enabled: !!country //  prevents empty or undefined calls
    });
};

export default useSearchCountry;
