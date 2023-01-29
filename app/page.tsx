import Image from 'next/image'
import Button from '@/components/Button/Button'

export default async function Home() {
	const games = await getAllGames()
	return (
		<main className="min-h-screen">
			<ul>
				{games.map(game => (
					<li
						className="mx-auto my-3 flex w-1/3 rounded-xl bg-white"
						key={game.id}>
						<Image
							className="rounded-xl"
							src={game.image}
							width={273}
							height={365}
							alt={game.name}
						/>
						<div className="ml-3 flex flex-col">
							<h2 className="text-2xl font-bold">{game.name}</h2>
							<p>{game.description}</p>
							<div className="justify-self-end">
								<Button>See more</Button>
							</div>
						</div>
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
