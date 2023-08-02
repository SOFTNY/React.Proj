import React, {Suspense} from 'react';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

//page import 
import Layout from './layouts/Layout';
import Main from "./pages/Main";
import Login from "./pages/Login";
import Logout from './components/Logout';
import SignUp from "./pages/SignUp";
import Temp from './components/Temp';
import PrivateRoute from './components/PrivateRoute';
import Search_Pw from './components/Search_Pw';
import ItQuiz from './pages/ItQuiz';
import Error from './pages/ErrorPost/Error';
import Post from './pages/Post/Post';
import PostView from './pages/ErrorPost/E-PostView';
import PostEditor from './pages/Post/PostEditor';
import ItQuiz_01 from './ITQuiz_start/ItQuiz_01';


//Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {

  return (
<Layout>
      <BrowserRouter>
        <Suspense fallback={<div>Loading..</div>}> 
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/temp" element={<Temp />} />
            </Route>
            <Route>
              <Route path="/" element={<Main />} />
              <Route path='/ItQuiz'>
                <Route index element={<ItQuiz />} />
                <Route path=":num" element={<ItQuiz_01 />} />
              </Route>
              <Route path="/error" element={<Error />} />
              <Route path='/post'>
                <Route index element={<Post />} />
                <Route path='add' element={<PostEditor />} />
                <Route path=':num' element={<PostView />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element= {<Logout />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/search_pw" element={<Search_Pw />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Layout>
  );
}

export default App;