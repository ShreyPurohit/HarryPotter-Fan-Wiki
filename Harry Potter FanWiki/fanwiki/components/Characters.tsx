"use client"
import dynamic from 'next/dynamic';
const HarryPotterCard = dynamic(() => import('./HarryPotterCard'))
const Loader = dynamic(() => import('./Loader'))
import { useEffect, useState } from 'react';

import { ICharacters } from '@/models/charactersModel';
import { getCharacters } from '@/session-management/actions';

const CharacterComponent = () => {
    const [charactersList, setCharactersList] = useState<ICharacters[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCharacters(currentPage);
            if (data) {
                setCharactersList(data.characters);
                setTotalPages(data.totalPages);
            }
            setLoading(false);
        };
        fetchData();
    }, [currentPage]);

    if (loading) { return <Loader /> }

    const handlePreviousPage = () => {
        if (currentPage > 1) { setCurrentPage(currentPage - 1) }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) { setCurrentPage(currentPage + 1) }
    }

    return (
        <div>
            <div className='flex flex-wrap justify-center'>
                {charactersList.map((character) => (
                    <HarryPotterCard key={character.actor} character={character} />
                ))}
            </div>
            <div className="flex justify-center mb-10 xl:mb-0">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="bg-gray-700 text-white font-bold py-2 px-4 m-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="bg-gray-700 text-white font-bold py-2 px-4 m-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default CharacterComponent;