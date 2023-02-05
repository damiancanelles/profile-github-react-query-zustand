import GitHubCalendar from 'react-github-calendar';

function Calendar () {
    return (
        <div className="pt-10">
            <div className="card rounded border-2 border-slate-500 w-fit mx-auto">
                <div className="card-body">
                    <GitHubCalendar username="damiancanelles"></GitHubCalendar>
                </div>
            </div>
        </div>
    )
}

export default Calendar