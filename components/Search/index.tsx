import { useRouter } from 'next/router';
import { useState } from 'react';

const Search = () => {
  const [filter, setFilter] = useState({filterName:""});
  const router = useRouter();
  const page = router.query.page || 1


  const handleSearch = () => {
    router.push({
      pathname: `/${page}`,
      query: router.query.filterName? {filterName: router.query.filterName}: filter,
    });
  };
  
  return (
    <div>
      <input type="text" onChange={(e) => setFilter({filterName:e.target.value})} />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search


