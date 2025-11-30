import React, { useEffect, useState } from 'react'
import Playerslist from '../../../components/Playerslist'
import { getApi, getApiwithtoken } from '../../../utils/api';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { formatDate, formatTime } from '../../../utils/userdata';
import Timer from '../../../components/Timer1';
const RoundList = () => {
    let { id } = useParams();
    const tournamentsuUrl = `${import.meta.env.VITE_URL}${import.meta.env.VITE_GET_MY_TOURNAMENT_BY_ID}${id}`;
    const PAIREDLISTURL = `${import.meta.env.VITE_URL}${import.meta.env.VITE_GET_PAIRED_LIST}${id}`;
    const ScoreDataURL = `${import.meta.env.VITE_URL}${import.meta.env.VITE_userScoreDataForAdmin}${id}`;
    const resultUrl = `${import.meta.env.VITE_URL}${import.meta.env.VITE_GET__TOURNAMENT_RESULT}${id}`;
    const matchDataUrl = `${import.meta.env.VITE_URL}${import.meta.env.VITE_GET__TOURNAMENT_MATCH_DATA}${id}`;
    const [BoardData, setBoardData] = useState([])
    const [CombinedData, setCombinedData] = useState([]);
    const [result, setResult] = useState({});
    const queryGetTournamentById = useQuery("GetTournamentById", () => getApiwithtoken(tournamentsuUrl), {
        refetchOnWindowFocus: false,
        refetchInterval: 2000,    // 30 seconds
        enabled: !!tournamentsuUrl,
    });
    // console.log(queryGetTournamentById?.data?.data?.data, "ffff");
    const tournament = queryGetTournamentById?.data?.data?.data;
    const roundId = queryGetTournamentById?.rounds || 0
    const noOfRounds = queryGetTournamentById?.data?.data?.data?.noOfRounds || 0;
    const tournamentData = queryGetTournamentById?.data?.data?.data || {};
    const totalRounds = tournamentData?.rounds?.length || 0;
    const tournamentStatus = tournament?.status;
    const gameStart = async (noRounds, data) => {
        // game start logic here
        // console.log("game start", noRounds,data);
        const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_GET_TOURNAMENT_START}${data?._id}/${data?.gameTimeDuration}/${noRounds}/${data?.noOfRounds}`;
        // console.log(url, "fffffff");

        const res = await getApiwithtoken(url);
        // console.log('API response:', res);
    }

    const UpcomingRound = queryGetTournamentById?.data?.data?.data?.upComingRound;
    const TotalRounds = queryGetTournamentById?.data?.data?.data?.noOfRounds;

    const queryGETPAIREDLIST = useQuery(
        ["GetPAIREDLIST", PAIREDLISTURL],
        () => getApiwithtoken(PAIREDLISTURL),
    );

    const queryGETScoreData = useQuery(
        ["GetScoreData", ScoreDataURL],
        () => getApiwithtoken(ScoreDataURL),
    );


    const PAIREDLISTDATA = queryGETPAIREDLIST?.data?.data?.data
    const ScoreData = queryGETScoreData?.data?.data?.data

    useEffect(() => {
        const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_GET_BOARD_DATA}${id}`;
        // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&",url,roundId[roundId.length-1]);
        const fetch = async () => {
            try {
                const data = await getApi(url)
                setBoardData(data?.data?.data)
                // console.log(data, "&&&&&&&&&&&&&&&&&&");
            } catch (error) {
                console.log(error);

            }

        }
        fetch();
    }, [roundId])

    // console.log(queryGETPAIREDLIST, "GETPAIREDLIST");

    // console.log(PAIREDLISTDATA, BoardData, "ooooooooooo=>>>>>");


    useEffect(() => {
        // Combine the data when both are available
        if (PAIREDLISTDATA && BoardData.length > 0) {
            // Filter out items that don't have a boardNumber
            const combined = BoardData
                .filter((boardItem) => boardItem.boardNumber) // Keep only items with boardNumber
                .map((boardItem, index) => ({
                    ...PAIREDLISTDATA[index], // Combine with corresponding PAIREDLISTDATA item
                    boardData: boardItem, // Add the corresponding boardData
                }));

            setCombinedData(combined);
        }
    }, [PAIREDLISTDATA, BoardData]);



    // console.log(queryGETScoreData, "fesawereeeeeeeeeeeeeeeeeeeeee");


    async function fetchTournamentResult() {

        try {
            // console.log("Fetching tournament result...");

            // Conditionally fetch results based on tournament status
            const resultPromise = tournamentStatus === "completed" || totalRounds > 0
                ? getApiwithtoken(resultUrl)
                : Promise.resolve({ data: { data: null } });

            const matchDataPromise = tournamentStatus === "ongoing" || totalRounds > 0
                ? getApiwithtoken(matchDataUrl)
                : Promise.resolve({ data: { data: null } });

            // Wait for all promises to resolve
            const [GetTournamentResult, GetOngoingResult] = await Promise.all([resultPromise, matchDataPromise]);

            setResult({
                Result: GetTournamentResult?.data?.data || null,
                OngoingResult: GetOngoingResult?.data?.data || null
            })

            // console.log("Fetched data:", result);
            // return result;
        } catch (error) {
            console.error("Error fetching tournament result:", error);
            // setError(error);
            return null;
        }
    }

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            if (queryGetTournamentById.isSuccess && (tournamentStatus === "ongoing" || tournamentStatus === "completed")) {
                // console.log("Query successful, fetching tournament result...");
                try {
                    // Conditionally fetch results based on tournament status
                    const resultPromise = tournamentStatus === "completed" || totalRounds > 0
                        ? getApiwithtoken(resultUrl)
                        : Promise.resolve({ data: { data: null } });

                    const matchDataPromise = tournamentStatus === "ongoing" || totalRounds > 0
                        ? getApiwithtoken(matchDataUrl)
                        : Promise.resolve({ data: { data: null } });

                    // Wait for all promises to resolve
                    const [GetTournamentResult, GetOngoingResult] = await Promise.all([resultPromise, matchDataPromise]);

                    setResult({
                        Result: GetTournamentResult?.data?.data || null,
                        OngoingResult: GetOngoingResult?.data?.data || null
                    })


                } catch (error) {
                    console.error("Error fetching tournament result:", error);
                }

                // Call fetchData again after 10 seconds
                if (isMounted) {
                    setTimeout(fetchData, 10000); // Recursively call after 10 seconds
                }
            }
        };

        // Initial call to fetch data
        fetchData();

        return () => {
            isMounted = false;
            // console.log("Cleanup, component unmounted");
        };
    }, [queryGetTournamentById.isSuccess, tournamentStatus, fetchTournamentResult]);
    // Aggregate Scores
    const ongoingResult = result?.Result || [];

    // console.log(ongoingResult, "aggregate scores");

    // bye users
    const byeUsers = ongoingResult
        .filter(user => user.receivedBye === true) // Filter users who received a bye
        .map((user, index) => {
            // Extract the round number from roundWiseScore
            const roundNumber = user.roundWiseScore.length > 0 ? user.roundWiseScore[user.roundWiseScore.length - 1].roundNumber : 'N/A';
            return {
                username: user.userData.name,
                roundNumber: roundNumber
            };
        });


    return (
        <div>
            <div className='w-full px-6 py-4 mx-auto'>

                {/* table      */}
                <div className='flex flex-wrap -mx-3'>

                    <div className='flex-none w-full max-w-full px-3 max-sm:px-1'>

                        <div className=' flex flex-col  min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border'>
                            <div className=" p-4 pb-2 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent flex ">
                                <h6 className='font-bold text-[#16884d] text-2xl'>Round List</h6>

                            </div>
                            <div className='flex-auto px-0 py-2'>
                                <div className='p-0 overflow-x-auto'>
                                    <div className='ml-5 flex'>

                                        <p>{UpcomingRound > TotalRounds ? TotalRounds : UpcomingRound}/{TotalRounds} rounds</p>
                                        {/* {Array.from({ length: noOfRounds }, (_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => gameStart(i + 1, queryGetTournamentById?.data?.data?.data)}  // Pass the round number to the handler
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                                            >
                                                Game Start Round {i + 1}
                                            </button>
                                        ))} */}
                                        {
                                            UpcomingRound <= TotalRounds &&
                                            <div className='ml-2 flex'>
                                                <p>Timer: </p>
                                                <div className='ml-2'>
                                                    <Timer data={tournament?.time} id={tournament?._id} gameTime={tournament?.gameTimeDuration} currentRound={tournament?.upComingRound} noOfRounds={tournament?.noOfRounds} delayTime={tournament?.delayTime} />

                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <table className='items-center w-full  mb-0 align-top border-gray-200 text-slate-500'>
                                        <thead className='align-bottom'>
                                            <tr>
                                                <th className='text-center uppercase text-sm max-sm:text-xs border-t  py-3 pl-4'>Sl no.
                                                </th>
                                                <th className='text-center uppercase text-sm max-sm:text-xs border-t px-2 py-3 '>Game Room Id
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                tournament?.rounds?.map((item, i) => (
                                                    <tr key={i}>

                                                        <td className='text-center  max-sm:text-xs border-t py-2 pl-3'>{i + 1}</td>
                                                        <td className='border-t py-2 text-center px-2'>
                                                            <Link to={`/admin/Rounddetails/${id}/${i + 1}`}><span>{item}</span> </Link>
                                                        </td>



                                                    </tr>
                                                )
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <div className=" sm:ms-56 bg-gray-800 p-4 rounded-lg text-center overflow-auto h-80">
                    {tournamentStatus === "completed" ? (
                        <>
                            {/* <div className="flex justify-around items-center">
                                {ScoreData && ScoreData.length > 0 && (
                                    <>
                                        {ScoreData[1]?.userData?.username && (
                                            <div className="flex flex-col items-center">
                                                <div className="mb-2">
                                                    <img
                                                        src={second}
                                                        alt="Silver Medal"
                                                        className="w-12 h-17 object-cover"
                                                    />
                                                </div>
                                                <p className="text-lg font-semibold">{ScoreData[1]?.userData?.username || 'Username not available'}</p>
                                            </div>
                                        )}
                                        {ScoreData[0]?.userData?.username && (
                                            <div className="flex flex-col items-center">
                                                <div className="mb-2">
                                                    <img
                                                        src={fast}
                                                        alt="Gold Medal"
                                                        className="w-18 h-20 object-cover"
                                                    />
                                                </div>
                                                <p className="text-lg font-semibold">{result?.Result[0]?.userData?.username || 'Username not available'}</p>
                                            </div>
                                        )}
                                        {ScoreData?.userData?.username && (
                                            <div className="flex flex-col items-center">
                                                <div className="mb-2">
                                                    <img
                                                        src={thard}
                                                        alt="Bronze Medal"
                                                        className="w-12 h-17 object-cover"
                                                    />
                                                </div>
                                                <p className="text-lg font-semibold">{result?.Result[2]?.userData?.username || 'Username not available'}</p>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div> */}
                            <div>
                                {/* Search and Pagination Controls */}
                                {/* <div className="flex flex-col md:flex-row justify-center items-center bg-gray-600 p-4 rounded-lg mt-3">
                                    <div className="flex items-center w-full md:w-auto mb-3 md:mb-0">
                                        <FaSearch className="text-gray-400 w-5 h-5 mr-3 cursor-pointer" />
                                        <input
                                            type="text"
                                            className="text-gray-400 bg-transparent border-b border-gray-400 p-2 focus:outline-none w-full md:w-auto"
                                            placeholder="Search player"
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                    </div>

                             
                                    <div className="flex items-center space-x-3 mt-3 md:mt-0">
                                        <button
                                            className="text-gray-400 hover:text-white disabled:opacity-50"
                                            onClick={() => setCurrentPage(1)}
                                            disabled={currentPage === 1}
                                        >
                                            <FaAngleDoubleLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            className="text-gray-400 hover:text-white disabled:opacity-50"
                                            onClick={prevPage}
                                            disabled={currentPage === 1}
                                        >
                                            <FaAngleLeft className="w-5 h-5" />
                                        </button>
                                        <span className="text-white text-sm md:text-base">{`${currentPage}/${pageCount}`}</span>
                                        <button
                                            className="text-gray-400 hover:text-white disabled:opacity-50"
                                            onClick={nextPage}
                                            disabled={currentPage === pageCount}
                                        >
                                            <FaAngleRight className="w-5 h-5" />
                                        </button>
                                        <button
                                            className="text-gray-400 hover:text-white disabled:opacity-50"
                                            onClick={() => setCurrentPage(pageCount)}
                                            disabled={currentPage === pageCount}
                                        >
                                            <FaAngleDoubleRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div> */}

                                {/* Table with Players and Scores */}
                                <div className="overflow-x-auto mt-1">
                                    <table className="min-w-full bg-gray-800 text-white border border-gray-700 rounded-lg">
                                        <thead>
                                            <tr className="bg-gray-700 text-gray-400">
                                                <th className="py-2 px-4 text-left">#</th>
                                                <th className="py-2 px-4 text-left">Player</th>
                                                {/* Dynamically create columns for the rounds */}
                                                {Array.from({ length: ScoreData?.[0]?.[Object.keys(ScoreData?.[0])[0]]?.scores.length || 0 }, (_, index) => (
                                                    <th key={index} className="py-2 px-4 text-center">Round {index + 1}</th>
                                                ))}
                                                <th className="py-2 px-4 text-center">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ScoreData?.length > 0 ? (
                                                ScoreData.map((playerData, index) => {
                                                    const userId = Object.keys(playerData)[0]; // Extracting userId from the object
                                                    const userInfo = playerData[userId]; // Getting user info

                                                    // Calculate the sum of scores
                                                    const scoreSum = userInfo.scores.reduce((acc, score) => acc + score, 0);

                                                    return (
                                                        <tr key={userId} className="border-t border-gray-700">
                                                            <td className="py-2 px-4">{index + 1}</td>
                                                            <td className="py-2 px-4">
                                                                {`${userInfo.name}`} <span className="text-gray-400">{userInfo.rating.toFixed(0)}</span>
                                                            </td>
                                                            {userInfo.scores.map((score, i) => (
                                                                <td key={i} className={`py-2 px-4 text-center ${score > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                                                    {score}
                                                                </td>
                                                            ))}
                                                            {/* Display the sum of scores */}
                                                            <td className="py-2 px-4 text-center">{scoreSum}</td>
                                                        </tr>
                                                    );
                                                })
                                            ) : (
                                                <tr>
                                                    <td colSpan={5} className="py-4 text-center"> {/* Adjust the colspan based on your actual columns */}
                                                        No results found
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>

                                    </table>
                                </div>

                            </div>
                        </>
                    ) : null}
                </div>

                <div className={`sm:ms-56 mt-4 bg-gray-700 p-4 rounded-lg space-y-4 overflow-auto ${byeUsers.length > 0 && 'h-40 p-4 '}`}>
                    {byeUsers?.map((user, index) => {
                        // Check if boardData and users are valid
                        // const { boardData } = combinedData;
                        // const hasValidUsers = boardData?.user1 && boardData?.user2 && combinedData.player1Name && combinedData.player2Name;

                        return (
                            <div key={index} className="relative bg-gray-800 p-6 rounded-lg">
                                {/* Round Title - centered at the top */}
                                <div
                                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-600 px-2 py-1 rounded-full"
                                    style={{ maxWidth: "90%", textAlign: "center" }}
                                >
                                    <h3 className="text-white text-xs sm:text-xs md:text-base font-semibold">
                                        Round {index + 1 || 'N/A'} - Bye
                                    </h3>
                                </div>

                                {/* Player 1 vs Player 2 Section */}
                                <div className="  mt-2">
                                    {/* Player 1 Section */}
                                    <div className={`text-white mb-4 sm:mb-0 font-bold  order-1`}>
                                        <h2 className="text-lg font-semibold text-center">
                                            {user.username || 'Player 1'}
                                        </h2>
                                        {/* <p className="text-sm">{boardData.user1Color === 'w' ? 'White' : 'Black'}</p> */}
                                    </div>

                                </div>
                            </div>
                        )// Return null if user data is invalid
                    })}
                </div>

                <div className=" sm:ms-56 mt-4 bg-gray-700 p-4 rounded-lg space-y-4 overflow-auto h-80">
                    {CombinedData?.map((combinedData, index) => {
                        // Check if boardData and users are valid
                        const { boardData } = combinedData;
                        const hasValidUsers = boardData?.user1 && boardData?.user2 && combinedData.player1Name && combinedData.player2Name;

                        return hasValidUsers ? (
                            <div key={index} className="relative bg-gray-800 p-6 rounded-lg">
                                {/* Round Title - centered at the top */}
                                <div
                                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-600 px-4 py-1 rounded-full"
                                    style={{ maxWidth: "90%", textAlign: "center" }}
                                >
                                    <h3 className="text-white text-xs sm:text-xs md:text-base font-semibold">
                                        Round {combinedData.roundNumber || 'N/A'} - Board {boardData.boardNumber || 'N/A'}
                                    </h3>
                                </div>

                                {/* Player 1 vs Player 2 Section */}
                                <div className="flex flex-col sm:flex-row justify-between items-center mt-2">
                                    {/* Player 1 Section */}
                                    <div className={`text-white mb-4 sm:mb-0 font-bold ${boardData.user1Color === 'w' ? 'order-1' : 'order-3'}`}>
                                        <h2 className="text-lg font-semibold">
                                            {combinedData.player1Name || 'Player 1'}
                                        </h2>
                                        {/* <p className="text-sm">{boardData.user1Color === 'w' ? 'White' : 'Black'}</p> */}
                                    </div>

                                    <span className="text-white font-bold mb-4 sm:mb-0 order-2">VS</span>

                                    {/* Player 2 Section */}
                                    <div className={`text-white font-bold ${boardData.user2Color === 'w' ? 'order-1' : 'order-3'}`}>
                                        <h2 className="text-lg font-semibold">
                                            {combinedData.player2Name || 'Player 2'}
                                        </h2>
                                        {/* <p className="text-sm">{boardData.user2Color === 'w' ? 'White' : 'Black'}</p> */}
                                    </div>
                                </div>
                            </div>
                        ) : null; // Return null if user data is invalid
                    })}
                </div>
            </div>

        </div>
    )
}

export default RoundList
