import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Paginations = ({ pageNumbers, paginate,backPagination,nextPagination,firstPage,lastPage,plus }) => {


  return (
    <div>
      <ul className="pagination">
         <li>
          <button className="pagiButton" onClick={() => firstPage()}>
              First
            </button>
        </li>
        <li>
          <button className="pagiButton" onClick={() => backPagination()}>
              <NavigateBeforeIcon />
            </button>
        </li>
        {pageNumbers.map((num) => (
          <li className="page-item" key={num}>
            <button className="pagiButton" onClick={() => paginate(num)}>
              {num}
            </button>
          </li>
        ))}
          <li>
          <button className="pagiButton" onClick={() => nextPagination()}>
              < NavigateNextIcon />
            </button>
        </li>
             <li>
          <button className="pagiButton" onClick={() => lastPage()}>
              Last
            </button>
        </li>
          
         <li>
          <button className="pagiButton" onClick={() => plus(2)}>
              +2
            </button>
        </li>
      </ul>
    </div>
  );
};

export default Paginations;
