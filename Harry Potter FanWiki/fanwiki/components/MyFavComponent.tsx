"use client"
import { ICard } from "./HarryPotterCard"
import dynamic from 'next/dynamic';
const HarryPotterCard = dynamic(() => import('./HarryPotterCard'))

const MyFavsComponent = ({ data }: { data: { characterArr: ICard[] } }) => {
    const { characterArr } = data

    return (
        <div className="flex flex-col w-max m-auto flex-wrap md:flex-row">
            {characterArr.map((character) => (
                <HarryPotterCard character={character} key={character._id} />
            ))}
        </div>
    )
}
export default MyFavsComponent