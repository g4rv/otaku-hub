import Image from "next/image";
import { Fragment } from "react";

export default async function Home() {
	let query = `#graphql
        query {
            Page {
                media {
                    title {
                        romaji
                        native
                        english
                    }
                    coverImage {
                        color
                        large
                    }
                }
            }
        }
    `;
	const res = await fetch("https://graphql.anilist.co", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({
			query: query,
			variables: {
				id: 15125,
			},
		}),
	});

    const data = await res.json() 

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
            {data.data.Page.media.length}
			{data.data.Page.media.map((item: any) => (
                <Fragment key={item.title.romaji}>
                    {item.title.romaji}
                    <Image src={item.coverImage.large} width={400} height={600} alt={item.title.native}/>
                </Fragment>
            ))}
		</main>
	);
}
