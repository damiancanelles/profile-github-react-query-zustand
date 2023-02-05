import api from "../api/github";
import { useQuery, QueryFunctionContext } from "@tanstack/react-query"
import { Repos } from "./types";

async function fetchRepos (ctx: QueryFunctionContext) {
    const [_,username] = ctx.queryKey
    const { data } = await api.get<Repos[]>(`/users/${username}/repos`)
    return data
}

export function useFetchRepos (username: string) {
    return useQuery(["repos", username], fetchRepos)
}