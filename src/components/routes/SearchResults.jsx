import '../../index.css'
import { useFetchSearch } from '../hooks/useFetchSearch';
import { useLocation } from 'react-router-dom';
import { CardResult } from '../cards/CardResult';
import { Navigation } from '../navigation/Navigation';
import { useFetchMenubar } from "../hooks/useFetchMenubar.js";
import { SearchDropdown } from '../dropdown/SearchDropdown';

export function SearchResults() {
    const { isMobile } = useFetchMenubar();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('name');
    const { data, loading } = useFetchSearch(searchTerm);

    return (
        <>
            <div className="flex-shrink-0 fixed top-0 left-0 z-10 h-full">
                <Navigation />
            </div>

            <main className="flex flex-col lg:px-12 px-5 transition-all duration-500"
                style={{
                    marginLeft: isMobile ? '0px' : '80px',
                }}>

                <div className="flex pt-4 justify-between">
                    <h1 className="font-black text-3xl lg:text-4xl mt-2">ESCAPE</h1>
                    <SearchDropdown />
                </div>

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className='lg:mt-20 mt-10 justify-center grid grid-cols-1 gap-8'>
                        {data && data.length > 0 ? (
                            data.map((result, index) => (
                                <CardResult
                                    key={index}
                                    image={result.image}
                                    name={result.name}
                                    city={result.district_name}
                                    followers={result.followers_count}
                                    description={result.description}
                                />
                            ))
                        ) : (
                            <p className="text-lg font-semibold mt-5">No results found</p>
                        )}
                    </div>
                )}
            </main>
        </>


    );
}