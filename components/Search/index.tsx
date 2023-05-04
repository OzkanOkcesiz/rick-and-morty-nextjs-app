import usePrevious from '@/hooks/usePrevious';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Search = () => {
  const [filter, setFilter] = useState("");
  const prevFilter: string = usePrevious<string>(filter);
  const router = useRouter();
  const page = router.query.page || 1


  const handleSearch = () => {
    router.push({
      pathname: `/${prevFilter===filter? page : "1"}`,
      query: {
        filterName: filter.toLocaleLowerCase("tr")
      }
    });
  };

  return (
    <div className='md:ml-auto md:w-1/2 lg:ml-auto lg:w-1/3 w-full flex mr-4 mb-4'>
      <input type="text" name="search" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Search" className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-cyan-500 focus:ring-cyan-500 focus:ring-2 sm:text-sm' />
      <button className='bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded ml-4' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search


