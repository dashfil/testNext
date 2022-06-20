import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const Paginations = ({ pageNumbers,paginate,plus,currentPage }) => {


  return (
    < Container 
    className = 'pagination' >
    <Stack spacing={2}>
      <Pagination count={pageNumbers} page={currentPage} onChange={(e,num)=>paginate(num)}/>
       </Stack>
       <Button variant="contained" onClick={() => plus(10)}>  +10 </Button>
       </Container>
  );
};

export default Paginations;
