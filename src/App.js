import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import PostSearchForm from "./components/PostSearchForm";

function App() {
  return (
      <div className='container pt-4'>
          <h1 className='text-center text-uppercase'>Услуги сервиса</h1>
          <PostSearchForm/>
        <div className="row mt-5">
          <div className="col">
           <PostForm/>
          </div>
        </div>
        <div className="row">
          <div className="col-6 mt-4">
            <Posts/>
          </div>
        </div>
      </div>
  );
}

export default App;
