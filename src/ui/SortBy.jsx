import { useSearchParams } from "react-router-dom"
import Select from "./Select"

function SortBy({options}) {
  const [searchParams ,setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || "";

  function handleChange(e){
    searchParams.set('sortBy' , e.target.value);
    setSearchParams(searchParams); // update the URL with the new sort option.
  }


  return ( 
    <Select 
    options={options}
    type="white" 
    value={sortBy} 
    onChange={handleChange}
   />)
    
}

export default SortBy
