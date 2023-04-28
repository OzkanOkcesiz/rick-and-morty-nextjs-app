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
        filterName: filter
      }
    });
  };

  return (
    <div>
      <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search


