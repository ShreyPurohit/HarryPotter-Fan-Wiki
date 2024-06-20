import Image from 'next/image';
import DummyImg from '../images/DummyImg.jpeg'
import LikeDetailButtons from './LikeDetailButtons';
export interface ICard {
    _id: string
    name: string,
    image: string
}

const HarryPotterCard = ({ character }: { character: ICard }) => {
    return (
        <div className="flex flex-col md:min-w-80 min-w-72 rounded shadow-lg bg-stone-200 hover:bg-stone-300 text-black m-2 border border-black">
            <div className="relative h-56 self-center">
                <Image
                    src={DummyImg}
                    alt={character.name}
                    className="rounded-t mt-3"
                />
            </div>
            <h2 className="md:p-4 p-2 xl:pb-2 text-center tracking-wider">
                {character.name}
            </h2>
            <LikeDetailButtons _id={character._id} />
        </div>
    );
};

export default HarryPotterCard;