"use client";

import { useEffect, useState } from "react";
import { getCharacterNames } from "@/session-management/actions";
import Link from "next/link";

interface ICharacterName {
    _id: string;
    name: string;
}

const SearchBar = () => {
    const [name, setName] = useState("");
    const [dbNames, setDbNames] = useState<ICharacterName[]>([]);
    const [selectedCharacterId, setSelectedCharacterId] = useState<string>("");

    useEffect(() => {
        const fetchNames = async () => {
            if (name.trim() === "") {
                setDbNames([]);
                return;
            }

            const { characterNames } = await getCharacterNames(name);
            setDbNames(characterNames);

            const selectedCharacter = characterNames.find(
                (character: any) => character.name === name
            );
            setSelectedCharacterId(selectedCharacter ? selectedCharacter._id : "");
        };

        const timeoutId = setTimeout(fetchNames, 500);

        return () => clearTimeout(timeoutId);
    }, [name]);

    return (
        <div className="flex justify-center sticky">
            <input
                list="characters"
                name="searchbarname"
                className="rounded-l w-3/5 px-2 md:w-2/4 lg:w-1/4 md:px-4 placeholder:text-lg py-2 border-t border-b border-l border-black outline-none"
                placeholder="Search Your Favorite Character"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
            />
            <datalist id="characters">
                {dbNames.map(({ _id, name }) => (
                    <option value={name} key={_id} />
                ))}
            </datalist>
            <Link href={selectedCharacterId ? `/characterpage/${name}/${selectedCharacterId}` : "#"} className={`py-2 bg-slate-200 px-3 rounded-r hover:bg-slate-400 border-t border-b border-r border-black ${!selectedCharacterId ? 'cursor-not-allowed' : ''}`}>Search</Link>
        </div>
    )
}

export default SearchBar