export interface DevDashConfig {
	github_access_token: string;
	widgets: {
		id: string;
		repository_url: string;
	}[];
}

export const config: DevDashConfig = {
	github_access_token: process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN as string,
	widgets: [
		{
			id: "40e3e457-60fc-4926-9e4d-85da247ae9e5",
			repository_url: "https://github.com/Anderson-Angulo/react-avanzado-ob",
		},
		{
			id: "fb236666-36bc-419d-ae53-f0f8cc8d7d26",
			repository_url: "https://github.com/Anderson-Angulo/laboratorio-mydayapp-js",
		},
		{
			id: "0181b290-537a-41b9-83a4-abace82ba34f",
			repository_url: "https://github.com/Anderson-Angulo/GIP_TEST",
		},
	],
};
