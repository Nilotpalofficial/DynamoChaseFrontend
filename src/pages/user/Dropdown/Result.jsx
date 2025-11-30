import React from 'react'
import{Link} from  'react-router-dom';
const Result = () => {
  const matchData = {
    matchId: "12345",
    date: "2024-05-20",
    player1: { name: "Alice", rank: "1500", id: "P1", score: "1" },
    player2: { name: "Bob", rank: "1450", id: "P2", score: "0" },
    winner: "Alice",
    totalMoves: 40,
    timePlayer1: "30 mins",
    timePlayer2: "35 mins",
    mistakes: 2,
    blunders: 1,
    accuracy: "85%",
  };
  return (
   
    
      <div className="ms-60 max-sm:ms-0">
     <div className='w-full '>
        <div className=' mx-6 bg-white rounded-2xl max-sm:mx-3 '>
          <div className='text-center  shadow-lg rounded-2xl mt-2 mb-1 py-4'>
            <h1 className=' font-bold text-2xl text-[#16884d]'>Tournament Results</h1>
          </div>
        </div>
      </div>
      <div className='w-full px-6 py-3 mx-auto'>
         {/* table      */}
          <div className='flex flex-wrap -mx-4'>
          <div className='flex-none w-full max-w-full px-3 max-sm:px-1'> 
          <div className=' flex flex-col  min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border'>
          
                <div className='flex-auto py-2 px-0 '>
                <div className='p-0 overflow-x-auto'>
                <table className='items-center w-full  mb-0 align-top border-gray-200 text-slate-500'>
                  <thead className='align-bottom'>
                    <tr>
                      <th className='text-left uppercase max-sm:text-xs border-t  py-3 pl-4'>Tournament Name
                      </th>
                      <th className='text-center uppercase max-sm:text-xs border-t  py-3 '>Type
                      </th>
                      <th className='text-center uppercase max-sm:text-xs border-t px-2 py-3 '>Vanue
                      </th>
                      <th className='text-center    uppercase align-middle px-2 max-sm:text-xs py- border-t'> Date
                      </th>
                      <th className='text-center uppercase max-sm:text-xs py-3 px-2 border-t'> Time duration
                      </th>
                      <th className='text-center uppercase max-sm:text-xs py-3 px-2 border-t'> Status
                      </th>
                    </tr>
                  </thead>
                    <tbody>
                    <tr>
                      <td className='text-left  max-sm:text-xs border-t py-2 pl-4 hover:text-[#16884d]'>
                      <Link to='/admin/Leaderboard'>Grandmaster tournament</Link>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span className='bg-gradient-to-tl from-green-600 to-lime-400   rounded-sm p-1 inline-block whitespace-nowrap text-center align-baseline font-semibold  leading-none text-white'>Under 19</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span>India</span>
                      </td>
                      <td className='border-t text-center py-2 text-sm max-sm:text-xs align-middle '>
                        <span > 03/06/2024</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span>1h 12m 10s</span>
                      </td>
                      <td className='border-t py-2 font-bold text-center px-2 text-[#16884d]'>
                        <span>Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td className='text-left  max-sm:text-xs border-t py-2 pl-4 hover:text-[#16884d]'>
                      <Link to='/admin/Leaderboard'>Deal with the Devil</Link>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span className='bg-gradient-to-tl from-green-600 to-lime-400   rounded-sm p-1 inline-block whitespace-nowrap text-center align-baseline font-semibold  leading-none text-white'>Adult</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span>India</span>
                      </td>
                      <td className='border-t text-center py-2 text-sm max-sm:text-xs align-middle '>
                        <span > 03/06/2024</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span>1h 12m 10s</span>
                      </td>
                      <td className='border-t py-2 font-bold text-center px-2 text-[#16884d]'>
                        <span>Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td className='text-left  max-sm:text-xs border-t py-2 pl-4 hover:text-[#16884d]'>
                      <Link to='/admin/Leaderboard'>Grandmaster tournament</Link>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span className='bg-gradient-to-tl from-green-600 to-lime-400   rounded-sm p-1 inline-block whitespace-nowrap text-center align-baseline font-semibold  leading-none text-white'>Under 19</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span>India</span>
                      </td>
                      <td className='border-t text-center py-2 text-sm max-sm:text-xs align-middle '>
                        <span > 03/06/2024</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span>1h 12m 10s</span>
                      </td>
                      <td className='border-t py-2 font-bold text-center px-2 text-[#16884d]'>
                        <span>Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td className='text-left  max-sm:text-xs border-t py-2 pl-4 hover:text-[#16884d]'>
                      <Link to='/admin/Leaderboard'>Grandmaster tournament</Link>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span className='bg-gradient-to-tl from-green-600 to-lime-400   rounded-sm p-1 inline-block whitespace-nowrap text-center align-baseline font-semibold  leading-none text-white'>Under 13</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span>India</span>
                      </td>
                      <td className='border-t text-center py-2 text-sm max-sm:text-xs align-middle '>
                        <span > 03/06/2024</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span>1h 12m 10s</span>
                      </td>
                      <td className='border-t py-2 font-bold text-center px-2 text-[#16884d]'>
                        <span>Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td className='text-left  max-sm:text-xs border-t py-2 pl-4 hover:text-[#16884d]'>
                      <Link to='/admin/Leaderboard'>Grandmaster tournament</Link>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span className='bg-gradient-to-tl from-green-600 to-lime-400   rounded-sm p-1 inline-block whitespace-nowrap text-center align-baseline font-semibold  leading-none text-white'>Under 19</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span>India</span>
                      </td>
                      <td className='border-t text-center py-2 text-sm max-sm:text-xs align-middle '>
                        <span > 03/06/2024</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span>1h 12m 10s</span>
                      </td>
                      <td className='border-t py-2 font-bold text-center px-2 text-[#16884d]'>
                        <span>Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td className='text-left  max-sm:text-xs border-t py-2 pl-4 hover:text-[#16884d]'>
                      <Link to='/admin/Leaderboard'>Grandmaster tournament</Link>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span className='bg-gradient-to-tl from-green-600 to-lime-400   rounded-sm p-1 inline-block whitespace-nowrap text-center align-baseline font-semibold  leading-none text-white'>Under 13</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span>India</span>
                      </td>
                      <td className='border-t text-center py-2 text-sm max-sm:text-xs align-middle '>
                        <span > 03/06/2024</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span>1h 12m 10s</span>
                      </td>
                      <td className='border-t py-2 font-bold text-center px-2 text-[#16884d]'>
                        <span>Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td className='text-left  max-sm:text-xs border-t py-2 pl-4 hover:text-[#16884d]'>
                      <Link to='/admin/Leaderboard'>Grandmaster tournament</Link>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span className='bg-gradient-to-tl from-green-600 to-lime-400   rounded-sm p-1 inline-block whitespace-nowrap text-center align-baseline font-semibold  leading-none text-white'>Under 19</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span>India</span>
                      </td>
                      <td className='border-t text-center py-2 text-sm max-sm:text-xs align-middle '>
                        <span > 03/06/2024</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span>1h 12m 10s</span>
                      </td>
                      <td className='border-t py-2 font-bold text-center px-2 text-[#16884d]'>
                        <span>Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td className='text-left  max-sm:text-xs border-t py-2 pl-4 hover:text-[#16884d]'>
                      <Link to='/admin/Leaderboard'>Grandmaster tournament</Link>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span className='bg-gradient-to-tl from-green-600 to-lime-400   rounded-sm p-1 inline-block whitespace-nowrap text-center align-baseline font-semibold  leading-none text-white'>Under 19</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span>India</span>
                      </td>
                      <td className='border-t text-center py-2 text-sm max-sm:text-xs align-middle '>
                        <span > 03/06/2024</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span>1h 12m 10s</span>
                      </td>
                      <td className='border-t py-2 font-bold text-center px-2 text-[#16884d]'>
                        <span>Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td className='text-left  max-sm:text-xs border-t py-2 pl-4 hover:text-[#16884d]'>
                      <Link to='/admin/Leaderboard'>Grandmaster tournament</Link>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span className='bg-gradient-to-tl from-green-600 to-lime-400   rounded-sm p-1 inline-block whitespace-nowrap text-center align-baseline font-semibold  leading-none text-white'>Under 19</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span>India</span>
                      </td>
                      <td className='border-t text-center py-2 text-sm max-sm:text-xs align-middle '>
                        <span > 03/06/2024</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span>1h 12m 10s</span>
                      </td>
                      <td className='border-t py-2 font-bold text-center px-2 text-[#16884d]'>
                        <span>Completed</span>
                      </td>
                    </tr>
                    <tr className='border-y'>
                      <td className='text-left  max-sm:text-xs  py-2 pl-4 hover:text-[#16884d]'>
                      <Link to='/admin/Leaderboard'>Grandmaster tournament</Link>
                      </td>
                      <td className=' py-2 text-center px-2'>
                        <span className='bg-gradient-to-tl from-green-600 to-lime-400   rounded-sm p-1 inline-block whitespace-nowrap text-center align-baseline font-semibold  leading-none text-white'>Under 19</span>
                      </td>
                      <td className=' py-2 text-center px-2'>
                        <span>India</span>
                      </td>
                      <td className=' text-center py-2 text-sm max-sm:text-xs align-middle '>
                        <span > 03/06/2024</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span>1h 12m 10s</span>
                      </td>
                      <td className=' py-2 font-bold text-center px-2 text-[#16884d]'>
                        <span>Completed</span>
                      </td>
                    </tr>
                    </tbody>
                </table>
                </div>
                
                </div>
          </div>

          </div>

     </div>
           
     </div>
    {/* <div className='w-full px-6 py-6 mx-auto'>
      <h1 className="text-2xl font-bold mb-4">Match Result</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <p><strong>Match ID:</strong> {matchData.matchId}</p>
          <p><strong>Date:</strong> {matchData.date}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Player Information</h2>
          <div className="flex justify-between">
            <div>
              <p><strong>Player 1:</strong> {matchData.player1.name}</p>
              <p><strong>Rank:</strong> {matchData.player1.rank}</p>
              <p><strong>ID:</strong> {matchData.player1.id}</p>
              <p><strong>Score:</strong> {matchData.player1.score}</p>
            </div>
            <div>
              <p><strong>Player 2:</strong> {matchData.player2.name}</p>
              <p><strong>Rank:</strong> {matchData.player2.rank}</p>
              <p><strong>ID:</strong> {matchData.player2.id}</p>
              <p><strong>Score:</strong> {matchData.player2.score}</p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Result</h2>
          <p><strong>Winner:</strong> {matchData.winner}</p>
          <p><strong>Final Score:</strong> {matchData.player1.score} - {matchData.player2.score}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Game Statistics</h2>
          <p><strong>Total Moves:</strong> {matchData.totalMoves}</p>
          <p><strong>Time Taken by Player 1:</strong> {matchData.timePlayer1}</p>
          <p><strong>Time Taken by Player 2:</strong> {matchData.timePlayer2}</p>
          <p><strong>Mistakes:</strong> {matchData.mistakes}</p>
          <p><strong>Blunders:</strong> {matchData.blunders}</p>
          <p><strong>Accuracy:</strong> {matchData.accuracy}</p>
        </div>
        <div className="flex justify-end space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit Result</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Delete Match</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">View Full Analysis</button>
        </div>
      </div>
    </div> */}
    
    </div>
  )
}

    

export default Result
