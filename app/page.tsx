import Image from 'next/image'

export default async function Home() {
	const games = await getAllGames()
	return (
		<main>
			<ul>
				{games.map(game => (
					<li key={game.id}>
						<h2>{game.name}</h2>
						<p>{game.description}</p>
						<Image src={game.image} width={273} height={365} alt={game.name} />
					</li>
				))}
			</ul>
		</main>
	)
}

interface Game {
	id: number
	name: string
	description: string
	image: string
	genre: Genre[]
}

interface Genre {
	id: number
	name: string
}

async function getAllGames(): Promise<Game[]> {
	const games = await fetch('http://localhost:3000/game')
	return games.json()
}
