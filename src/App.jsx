import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Sidebar from './components/sidebar'
import Header from './components/header'
import Contentmanagement from './pages/user/Contentmanagement'
import Bannermanagement from './pages/user/Bannermanagement'
import Membership from './pages/user/Membership'
import Blogmanagement from './pages/user/Blogmanagement'
import Aboutus from './pages/user/Dropdown5/Aboutus'
import Abouttournament from './pages/user/Dropdown5/Abouttournament'
import Rules from './pages/user/Rules'


import Footer from './components/footer'
import { Routes, Route, useLocation } from 'react-router-dom'
import Users from './pages/user/users'
// import Dashboard from './pages/dashboard'
import Dashboard2 from './pages/dashboard2'
// import Test from './components/test'
// import Product from './pages/products'
import { ProductThree } from './pages/product2'
import SalerProduct from './pages/salerProduct'
import AddProduct from './pages/addproduct'
// import MyComponent from './pages/test/mycomponents'
import Signin from './pages/user/signin'
import SignUp from './pages/user/signup'
import Profile from './pages/user/profile'
import Upcomingmatch from './pages/user/Dropdown/Upcomingmatch'
import Completematch from './pages/user/Dropdown/Completematch'
import Matches from './pages/user/Dropdown/Matches'
import Ongoingmatch from './pages/user/Dropdown/Ongoingmatch'
import Playerslist1 from './pages/user/Dropdown/Playerslist1'
import Result from './pages/user/Dropdown/Result'
import Leaderboard from './pages/user/Dropdown/Leaderboard'
import Creattournament from './pages/user/Dropdown/Creattournament'
import Gamelive from './pages/user/Dropdown2/Gamelive'
import Tournamentlivegame from './pages/user/Dropdown2/Tournamentlivegame'
import Timemanagement from './pages/user/Dropdown2/Timemanagement'
import Trainer from './pages/user/Dropdown4/Trainer'
// import game from './pages/user/Game'
// import Game from './pages/user/Game'
import { QueryClient, QueryClientProvider } from 'react-query'
import ProtectRoute from "./components/auth/ProtectRoute"
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import RoundList from './pages/user/Dropdown/RoundList'
import RoundDetails from './pages/user/Dropdown/RoundDetails'
import Timer from './components/Timer'
import { getApiwithtoken } from './utils/api'
// import CustomSelect from './pages/test/mycomponents'
// import Test2 from './pages/test/icons'



let admin
if (localStorage.getItem('chess-admin-token')) {
  admin = true
} else {
  admin = false
}

console.log(admin, "admin auth");

const queryClient = new QueryClient();
const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_GET_TODAYTOURNAMENT}`;
function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getApiwithtoken(url);
        console.log(result);
        
        setData(result.data?.data); // Adjust based on the structure of your response
      } catch (error) {
        // Handle error if needed
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 2000); // Polling every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [url]);

  // Use the data as needed
  console.log(data, "upcoming tournament");

  const location = useLocation();
  let pathname = location.pathname;
  console.log(pathname)

  // console.log(pathname!=='/signin'||pathname!=='/signup')

  return (
    <>
      <QueryClientProvider client={queryClient}>


        {pathname !== '/admin/signin' && pathname !== '/admin/signup' && (<div className='sticky top-0 z-50'>
          <div className='float-left '>
            <Sidebar />
            {/* <Sidebar2/> */}
          </div>
          <div className='  bg-[#334155]'>
            <Header />
          </div>
        </div>

        )}
        {/* {data?.map((item, index) => (
          <Timer
            key={index}
            data={item.time}
            id={item._id}
            gameTime={item.gameTimeDuration}
            currentRound={1}
            noOfRounds={item.noOfRounds}
            delayTime={item.delayTime}
          />
        ))} */}


        <Routes>
          <Route element={<ProtectRoute admin={admin} />}>


            <Route path='/' element={<Dashboard2 />} />
            <Route path='/admin/user' element={<Users />} />
            <Route path='/admin/allproduct' element={<ProductThree />} />
            <Route path='/admin/salerproduct' element={<SalerProduct />} />
            <Route path='/admin/addproduct' element={<AddProduct />} />
            {/* <Route path='/admin/signin' element={  <Signin/>}/>
      <Route path='/admin/signup' element={  <SignUp/>}/> */}
            <Route path='/admin/profile' element={<Profile />} />
            <Route path='/admin/upcomingmatch' element={<Upcomingmatch data={data} />} />
            <Route path='/admin/completematch' element={<Completematch />} />
            <Route path='/admin/matches' element={<Matches />} />
            <Route path='/admin/ongoingmatch' element={<Ongoingmatch />} />
            <Route path='/admin/result' element={<Result />} />
            <Route path='/admin/creattournament' element={<Creattournament />} />
            <Route path='/admin/playerslist/:id' element={<Playerslist1 />} />
            <Route path='/admin/Roundlist/:id' element={<RoundList />} />
            <Route path='/admin/Rounddetails/:id/:no' element={<RoundDetails />} />
            <Route path='/admin/Leaderboard' element={<Leaderboard />} />
            {/* <Route path='/game' element={  <Game/>}/> */}
            <Route path='/admin/Gamelive' element={<Gamelive />} />
            <Route path='/admin/Tournamentlivegame' element={<Tournamentlivegame />} />
            <Route path='/admin/Timemanagement' element={<Timemanagement />} />
            <Route path='/admin/Contentmanagement' element={<Contentmanagement />} />
            <Route path='/admin/Bannermanagement' element={<Bannermanagement />} />
            <Route path='/admin/Rules' element={<Rules />} />
            <Route path='/admin/trainer' element={<Trainer />} />
            <Route path='/admin/membership' element={<Membership />} />
            <Route path='/admin/blogmanagement' element={<Blogmanagement />} />
            <Route path='/admin/aboutus' element={<Aboutus />} />
            <Route path='/admin/abouttournament' element={<Abouttournament />} />
          </Route>
          {/* <Route path='/test' element={ < Test2/>} /> */}

          <Route path='/admin/signin' element={
            <ProtectRoute admin={!admin} redirect='/'>
              <Signin />
            </ProtectRoute>
          } />
          <Route path='/admin/signin' element={<Signin />} />
        </Routes>




        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <ToastContainer />
    </>
  )
}

export default App
