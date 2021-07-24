import React, {useState} from 'react'

const index = ({pageNumber}) => {
  /**
    @default currerntPage > skip the page number 1
   */
  const [currerntPage, setCurrerntPage] = useState(2);

  const paginate = (pageNumber) => setCurrerntPage(pageNumber);


  /**
    Pagination
    - show 7 number
    - show [...] in number 6
    - show total page number in number 7
  */
  return <div></div>;
}

export default index
