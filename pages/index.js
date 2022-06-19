import { useEffect, useReducer, useState } from "react";
import MainLayout from "../components/MainLayout";
import { reducer } from "../Reducer/reducer";
import context from "../Context/context"
import PostCard from "../components/PostCard";
import Paginations from "../components/Paginations";


function index() {
  const [state, dispatch] = useReducer(reducer,{user:{},posts:[]})
  const [cardsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
       fetch("http://api.interview.michaelknyazev.com/api/v1/content", {
          headers: {
            "x-access-token": state.user
          },
          method: "GET"
       })
      .then(res => res.json())
      .then(data => dispatch({ type: 'SHOW_POSTS', payload: data }))
  }, [state.user])

    const lastCardIndex = currentPage * cardsPerPage;
    const firstCardIndex = lastCardIndex - cardsPerPage;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(state?.posts?.length / cardsPerPage); i++) {
      pageNumbers.push(i);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const backPagination = () => setCurrentPage((prevState) => prevState > 1 ? prevState -= 1 : prevState)
    const nextPagination = () => setCurrentPage((prevState) => pageNumbers.length > prevState ? prevState += 1 : prevState)
    const firstPage = () => setCurrentPage(1);
    const lastPage = () => setCurrentPage(pageNumbers.length);
    const plus = (plusNumbet) => setCurrentPage((prevState) => pageNumbers.length > prevState ? prevState += plusNumbet : prevState)
    

  return (
     <context.Provider value={{state,dispatch}}>
    <MainLayout>
      {Object.keys(state?.user).length == 0 ? <></> :
      <>
      <div className="allCards">
     {state?.posts?.slice(firstCardIndex, lastCardIndex).map(post=> <PostCard key={post._id} post={post}/>)}
     </div>
       <Paginations
       pageNumbers={pageNumbers}
        paginate={paginate}
        backPagination={backPagination}
        nextPagination={nextPagination}
        firstPage={firstPage}
        lastPage={lastPage}
        plus={plus}
      /> 
      </>} 
    </MainLayout>
  </context.Provider>
  );
}

export default index;
