export default async function Home() {
	let query = `
        query ($id: Int) {
            Media (id: $id, type: ANIME) {
                id
                title {
                    romaji
                    english
                    native
                }
            }
        }
    `;
	const data = await fetch('https://graphql.anilist.co', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify({
			query: query,
			variables: {
                id: 15125
            },
		}),
	});

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
            {JSON.stringify(await data.json())}
        </main>
	);
}
