import { ICharacters } from "@/models/charactersModel";
import Image from "next/image";
import DummyImg from '../images/DummyImg.jpeg'


interface CharacterCardProps {
    character: ICharacters;
}

const DetailCard: React.FC<CharacterCardProps> = ({ character }) => {
    return (
        <div className="flex flex-col xl:pt-14 pt-24 p-1 sm:h-full md:mb-8 xl:gap-4">
            <h1 className="self-center text-5xl text-wrap text-center xl:mt-1">{character.name}</h1>
            {/* <Image src={character.image} alt={character._id} width={200} height={300} /> */}
            <div className="self-center mt-2 xl:mt-0 border border-t-black border-b-black">
                <Image src={DummyImg} alt={character._id} quality={100} width={400} height={500} />
            </div>
            <div className="sm:flex sm:justify-evenly ml-2 text-2xl md:justify-around">
                <div className="mt-1 xl:mt-0">
                    <h2 className="text-stone-700 text-4xl xl:text-5xl">Character Details</h2>
                    <p className="xl:text-3xl">House: <span className="text-stone-600 text-xl xl:text-2xl">{character.house}</span></p>
                    <p className="xl:text-3xl">Wizard: <span className="text-stone-600 text-xl xl:text-2xl">{character.wizard ? "Yes" : "No"}</span></p>
                    <p className="xl:text-3xl">Alternate Names:
                        <span className="text-stone-600 text-xl">
                            <ul className="ml-5">
                                {character.alternate_names.length > 0 ? character.alternate_names.map((name) => (
                                    <ul key={name}>{name}</ul>
                                )) : "No Alternate"}
                            </ul>
                        </span>
                    </p>
                    <p className="xl:text-3xl">Ancestry: <span className="text-stone-600 text-xl  xl:text-2xl">{character.ancestry}</span></p>
                    <p className="xl:text-3xl">Hogwarts Staff: <span className="text-stone-600 text-xl xl:text-2xl">{character.hogwartsStaff ? "Yes" : "No"}</span></p>
                    <p className="xl:text-3xl">Hogwarts Student: <span className="text-stone-600 text-xl xl:text-2xl">{character.hogwartsStudent ? "Yes" : "No"}</span></p>
                    <p className="xl:text-3xl">Species: <span className="text-stone-600 text-xl">{character.species}</span></p>
                    <p className="xl:text-3xl">Wand:
                        <span className="text-stone-600 text-xl xl:text-2xl">
                            <ul className="ml-5">
                                <li>Wood: {character.wand.core}</li>
                                <li>Core: {character.wand.wood}</li>
                                <li>Length: {character.wand.length} inches</li>
                            </ul>
                        </span>
                    </p>
                    <p className="xl:text-3xl">Patronus: <span className="text-stone-600 text-xl">{character.patronus}</span></p>
                </div>
                <div className="mt-1 xl:mt-0">
                    <h2 className="text-stone-700 text-4xl xl:text-5xl">Personal Details</h2>
                    <p className="xl:text-3xl">Actor: <span className="text-stone-600 text-xl xl:text-2xl">{character.actor}</span></p>
                    <p className="xl:text-3xl">Gender: <span className="text-stone-600 text-xl xl:text-2xl">{character.gender}</span></p>
                    <p className="xl:text-3xl">Eye Colour: <span className="text-stone-600 text-xl xl:text-2xl">{character.eyeColour}</span></p>
                    <p className="xl:text-3xl">Hair Colour: <span className="text-stone-600 text-xl xl:text-2xl">{character.hairColour}</span></p>
                    <p className="xl:text-3xl">Alive: <span className="text-stone-600 text-xl xl:text-2xl">{character.alive ? 'Yes' : 'No'}</span></p>
                </div>
            </div>
        </div >
    )
}

export default DetailCard