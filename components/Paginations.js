import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from 'react';

const Paginations = ({ pageNumbers,currentPage ,paginate,backPagination,nextPagination,firstPage,lastPage,plus }) => {
  const currentPagination = () =>{
    if (currentPage<4){
      return pageNumbers.slice(0, currentPage + 2)
    } else {
      return pageNumbers.slice(currentPage - 3, currentPage + 2)
    }
  }
  return (
    <div>
      <ul className="pagination">
         <li className="page-item">
          <button className="pagiButtonMenu" onClick={() => firstPage()}>
              First
            </button>
        </li>
        <li className="page-item">
          <button className="pagiButtonMenu" onClick={() => backPagination()}>
              <NavigateBeforeIcon />
            </button>
        </li>
            {
          currentPage <=3 ?
           <></>
        :
            <li className="page-item" >
            < button className = "pagiButtonSpace" >
              ...
            </button>
          </li>
        }
        
        {
        currentPagination().map((num) => (
            num === currentPage? 
          <li className="page-item" key={num}>
            <button className="pagiButtonCelect" onClick={() => paginate(num)}>
              {num}
            </button>
          </li> :
             <li className="page-item" key={num}>
            <button className="pagiButton" onClick={() => paginate(num)}>
              {num}
            </button>
          </li>
        ))}
        {
          currentPage + 2 < pageNumbers.length ?
          <li className="page-item" >
            < button className = "pagiButtonSpace" >
              ...
            </button>
          </li>:
           <></>
        }
          <li className="page-item">
          <button className="pagiButtonMenu" onClick={() => nextPagination()}>
              < NavigateNextIcon />
            </button>
        </li>
             <li className="page-item">
          <button className="pagiButtonMenu" onClick={() => lastPage()}>
              Last
            </button>
        </li>

         <li className="page-item">
          <button className="pagiButtonMenu" onClick={() => plus(10)}>
              +10
            </button>
        </li>
      </ul>
    </div>
  );
};

export default Paginations;
