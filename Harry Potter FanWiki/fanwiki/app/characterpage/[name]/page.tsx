import dynamic from "next/dynamic"
import { ICard } from "@/components/HarryPotterCard"
const HarryPotterCard = dynamic(() => import('@/components/HarryPotterCard'))

const CharacterPage = ({ params }: { params: ICard }) => {
    const name = params.name.replace("%20", " ")
    const character = {
        _id: params._id,
        name,
        image: params.image
    }
    return (
        <div className="mt-24 flex justify-center">
            <HarryPotterCard character={character} />
        </div>
    )
}

export default CharacterPage