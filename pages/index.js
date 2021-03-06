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
  const [allPosts,setAllPosts] = useState(0)

  const fetchPostsOnPage = () =>{
    fetch(`http://api.interview.michaelknyazev.com/api/v1/content?page=${currentPage}&limit=${cardsPerPage}`, {
        headers: {
          "x-access-token": state.user
        },
        method: "GET"
      })
      .then(res => res.json())
      .then(data => dispatch({
        type: 'SHOW_POSTS',
        payload: data
      }))
    }

  const fetchPostsAll = () => {
    fetch(`http://api.interview.michaelknyazev.com/api/v1/content/total`, {
        headers: {
          "x-access-token": state.user
        },
        method: "GET"
      })
      .then(res => res.json())
      .then(data => setAllPosts(data.result.count))
  }
    useEffect(() => {
      if (Object.keys(state?.user).length !== 0){
        fetchPostsOnPage()
        fetchPostsAll()
       }
  }, [state?.user, currentPage])
  
       const pageNumbers = [];
    for (let i = 1; i <= Math.floor(allPosts / cardsPerPage); i++) {
      pageNumbers.push(i);
    }
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const plus = (plusNumbet) => setCurrentPage((prevState) => pageNumbers.length > prevState ? prevState += plusNumbet : prevState)
    const backPagination = () => setCurrentPage((prevState) => prevState > 1 ? prevState -= 1 : prevState)
    const nextPagination = () => setCurrentPage((prevState) => pageNumbers.length > prevState ? prevState += 1 : prevState)
    const firstPage = () => setCurrentPage(1);
    const lastPage = () => setCurrentPage(pageNumbers.length);
 
    

  return (
     <context.Provider value={{state,dispatch}}>
    <MainLayout>
      {Object.keys(state?.user).length == 0 ? <></> :
      <>
      <div className="allCards">
     {state?.posts?.map(post=> <PostCard key={post._id} post={post}/>)}
     </div>
       <Paginations
       pageNumbers={pageNumbers}
        paginate={paginate}
        plus={plus}
        currentPage={currentPage}
        backPagination={backPagination}
        nextPagination={nextPagination}
        firstPage={firstPage}
        lastPage={lastPage}
      /> 
      </>} 
    </MainLayout>
  </context.Provider>
  );
}

export default index;
