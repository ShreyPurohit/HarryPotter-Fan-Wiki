import dynamic from "next/dynamic";
const CharacterComponent = dynamic(() => import('@/components/Characters'))
const SearchBar = dynamic(() => import('@/components/SearchBar'))
const Home = () => {
  return (
    <>
      <div className="flex flex-col xl:gap-3 mt-28 md:mt-16">
        <SearchBar />
        <CharacterComponent />
      </div>
    </>
  );
}

export default Home
