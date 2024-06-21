import Image from "next/image";
import HomeWallpaper from '../images/HomeWallpaper.jpg'
import dynamic from "next/dynamic";
// import CharacterComponent from "@/components/Characters";
const CharacterComponent = dynamic(() => import('@/components/Characters'))
// import SearchBar from "@/components/SearchBar";
const SearchBar = dynamic(() => import('@/components/SearchBar'))
const Home = () => {
  return (
    <>
      <div className="flex flex-col xl:gap-3 mt-28 md:mt-16">
        {/* <div className="invisible 2xl:visible">
          <Image src={HomeWallpaper} alt="HomeWallpaper" placeholder="blur" quality={80} fill style={{ zIndex: "-1", opacity: "0.7", height: "100%" }} />
        </div> */}
        <SearchBar />
        <CharacterComponent />
      </div>
    </>
  );
}

export default Home
