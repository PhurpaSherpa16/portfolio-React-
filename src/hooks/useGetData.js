import { useQuery } from "@tanstack/react-query"
import { getData } from "../api/getData"

export const useGetData = (from) => {
    return useQuery({
        queryKey: [from],
        queryFn : () => getData(from),
        keepPreviousData: true,
        // 5 minutes
        staleTime : 5 * 60 * 1000,
    })
}