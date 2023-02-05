import { useFetchRepos } from "../hooks/useRepos"
import { useFavoriteReposStore } from "../store/favoriteRepos"

function Repos() {
    const { data, isLoading } = useFetchRepos("damiancanelles")
    const { favoriteReposIds, addFavoriteRepo, removeFavoriteRepo } = useFavoriteReposStore()

    if (isLoading) {
        return <div> ...Loading </div>
    }

    const toggleFavorite = (id: number) => {
        if (favoriteReposIds.includes(id)) {
        removeFavoriteRepo(id)
        return
        }
        addFavoriteRepo(id)
        return
    }

    return (
        <div className="grid grid-cols-2 py-10 px-20">
        {
            data?.map((repo) => (
            <div key={repo.name} className="card p-2 m-2 rounded border-2 border-slate-500">
                <div className="card-title p-2 justify-between">
                    <div>
                        {repo.name}
                    </div>
                    <a href={repo.html_url} className="link-primary">
                        Go to see in github
                    </a>
                </div>
                <div className="card-body">
                    <div>
                        {repo.description}
                    </div>
                    <div className="badge-primary w-fit p-1 rounded-lg">
                        {repo.language}
                    </div>
                </div>
                <div className="card-actions p-2 justify-end">
                    <button className="btn" onClick={() => toggleFavorite(repo.id)}>
                        {
                            (favoriteReposIds.includes(repo.id)) ? "Dislike" : "Like"
                        }
                    </button>
                </div>
            </div>
            ))
        }
        </div>
    )
    }

export default Repos