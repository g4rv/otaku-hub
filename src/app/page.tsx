import { Sidebar } from "@/components";
import Card from "@/components/Card/Card";

const Home = async () => {
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

	const data = await res.json();

	return (
		<section className="container mx-auto grid grid-cols-3 gap-6 ">
			<ul className="col-start-1 col-end-3 grid grid-cols-3 gap-6">
				{data.data.Page.media.map((item: any) => (
					<li
						key={item.title.romaji}
						className="relative before:absolute before:h-full  before:w-full before:shadow-[inset_0_-100px_80px_-15px_rgba(0,0,0,0.75)] "
					>
						<Card item={item} />
					</li>
				))}
			</ul>
			<Sidebar />
		</section>
	);
};
export default Home;
