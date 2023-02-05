import api from "../api/github";
import { useQuery, QueryFunctionContext } from "@tanstack/react-query"
import { Profile, Repos } from "./types";

async function fetchProfile (ctx: QueryFunctionContext) {
    const [_,username] = ctx.queryKey
    const { data } = await api.get<Profile>(`/users/${username}`)
    return data
}

export function useFetchProfile (username: string) {
    return useQuery(["profile", username], fetchProfile)
}