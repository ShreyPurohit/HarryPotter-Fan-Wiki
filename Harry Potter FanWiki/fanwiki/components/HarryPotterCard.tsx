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
        <div id='hpCard' className="flex flex-col md:min-w-80 min-w-72 rounded-t-2xl shadow-lg text-black m-2 border border-black">
            <div className="relative w-full h-56">
                {/* <Image
                    src={character.image}
                    alt={character.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                /> */}
                <Image
                    src={DummyImg}
                    alt={character.name}
                    sizes='100vw'
                    className="w-full h-auto rounded-t-2xl"
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