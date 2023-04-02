import { githubApiResponses } from "../../github_api_responses";

const isoToReadableDate = (lastUpdate: string): string => {
	const lastUpdateDate = new Date(lastUpdate);
	const currentDate = new Date();
	const diffDays = Math.abs(currentDate.getDate() - lastUpdateDate.getDate());
	if (diffDays === 0) {
		return "today";
	}
	if (diffDays > 30) {
		return "more than a month ago";
	}

	return `${diffDays} days ago`;
};

export function Dashboard() {
	const title = "DevDash_";

	return (
		<>
			<header>
				<h1>{title}</h1>
			</header>
			<section>
				{githubApiResponses.map((widget) => (
					<article key={widget.repositoryData.id}>
						<header>
							<a
								href={widget.repositoryData.html_url}
								target="_blank"
								title={`${widget.repositoryData.organization.login}/${widget.repositoryData.name}`}
								rel="noreferrer"
							>
								{widget.repositoryData.organization.login}/{widget.repositoryData.name}
							</a>
							{widget.repositoryData.private ? "Private" : "Publico"}
						</header>
						<p>Last update {isoToReadableDate(widget.repositoryData.updated_at)}</p>
						{widget.CiStatus.workflow_runs.length > 0 && (
							<div>
								{widget.CiStatus.workflow_runs[0].status === "completed" ? "Check" : "Error"}
							</div>
						)}
					</article>
				))}
			</section>
		</>
	);
}
