import { ICharacters } from "@/models/charactersModel";

interface CharacterCardProps {
    character: ICharacters;
}

const DetailCard: React.FC<CharacterCardProps> = ({ character }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">{character.name}</div>
            <p className="text-gray-700 mb-2"><strong>Species:</strong> {character.species}</p>
            <p className="text-gray-700 mb-2"><strong>Gender:</strong> {character.gender}</p>
            <p>House: {character.house}</p>
            <p className="text-gray-700 mb-2"><strong>Date of Birth:</strong> {String(character.dateOfBirth)}</p>
            <p className="text-gray-700 mb-2"><strong>Ancestry:</strong> {character.ancestry}</p>
            <p className="text-gray-700 mb-2"><strong>Eye Colour:</strong> {character.eyeColour}</p>
            <p className="text-gray-700 mb-2"><strong>Hair Colour:</strong> {character.hairColor}</p>
            <p className="text-gray-700 mb-2"><strong>Wand:</strong> {character.wand.wood}, {character.wand.core}, {character.wand.length} inches</p>
            <p className="text-gray-700 mb-2"><strong>Patronus:</strong> {character.patronus}</p>
            <p>Actor: {character.actor}</p>
            <p className="text-gray-700 mb-2"><strong>Alive:</strong> {character.alive ? 'Yes' : 'No'}</p>
        </div >
    )
}

export default DetailCard