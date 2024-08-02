"use client"
import { ICard } from "./HarryPotterCard"
import dynamic from 'next/dynamic';
const HarryPotterCard = dynamic(() => import('./HarryPotterCard'))

const MyFavsComponent = ({ data }: { data: { characterArr: ICard[] } }) => {
    const { characterArr } = data

    return (
        <div className="flex flex-wrap justify-center pb-7">
            {characterArr?.map((character) => (
                <HarryPotterCard character={character} key={character._id} />
            ))}
        </div>
    )
}
export default MyFavsComponent