import dynamic from "next/dynamic";
const HarryPotterCard = dynamic(() => import('@/components/HarryPotterCard'))

interface IParams {
    slug: string[]
}

const CharacterPage = ({ params }: { params: IParams }) => {
    console.log("params", params);

    const character = {
        _id: params.slug[1],
        name: params.slug[0].replace("%20", " "),
        image: ""
    }
    return (
        <div className="mt-24 flex justify-center">
            <HarryPotterCard character={character} />
        </div>
    )
}

export default CharacterPage
