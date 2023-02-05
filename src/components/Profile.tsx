import GitHubCalendar from 'react-github-calendar';
import { useFetchProfile } from '../hooks/useProfile';

function Profile () {
    const { data, isLoading } = useFetchProfile("damiancanelles")

    if (isLoading) {
        return <div> ...Loading </div>
    }

    return (
        <div className="pt-10 justify-center">
            <div className="card rounded border-2 border-slate-500 w-1/4 mx-auto">
                <figure className='rounded-full m-6'><img src={data?.avatar_url} alt="profile" /></figure>
                <div className="card-body text-center">
                    <div>
                        {data?.name}
                    </div>
                    <div>
                        {data?.bio} - {data?.location}
                    </div>
                    <a href={data?.html_url}>
                        Github User - {data?.login}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Profile