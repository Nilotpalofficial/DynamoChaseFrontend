import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Avatar from "../../assets/Avatar.jpeg";
import { useQuery } from "react-query";
import { getApiwithtoken } from "../../utils/api";
import LoadingBar from "react-top-loading-bar";
import { toastSuccess, toastError } from "../../utils/notifyCustom";

const Users = () => {
  const loadingBar = useRef(null);

  // Environment variables
  const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_ALL_USER}`;
  const url1 = `${import.meta.env.VITE_URL}${import.meta.env.VITE_ALL_ADMIN}`;

  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [userStatuses, setUserStatuses] = useState({}); // Manage block status locally

  // Fetch users and admins
  const queryGetUSER = useQuery("USER", () => getApiwithtoken(url), {
    onError: (error) => console.error("Error fetching users:", error),
  });

  const queryGetADMINUSER = useQuery("ADMINUSER", () => getApiwithtoken(url1), {
    onError: (error) => console.error("Error fetching admins:", error),
  });

  // Search handler
  const searchHandler = async (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (!query) {
      setUsers([]); // Clear search results if input is empty
      return;
    }

    try {
      const response = await axios.get(
        `https://chess.dynamochess.in/searchUser?name=${query}`
      );
      setUsers(response?.data?.trainerData || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  // Toggle block/unblock functionality
  const handleBlockToggle = async (userId, currentStatus) => {
    try {
      const newStatus = !currentStatus;
  
      const response = await axios.post(
        `https://chess.dynamochess.in/block/${userId}`, // Dynamic userId
        { blocked: newStatus },
        {
          headers: {
            Authorization: `${JSON.parse(localStorage.getItem("chess-admin-token"))}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response,"ttttttttttttttttt")
  
      if (response?.data?.success) {
        toastSuccess(response.data.message || "User status updated successfully");

        // Refetch the user list to get updated data
        queryGetUSER.refetch();
      }
    } catch (error) {
      console.error("Error toggling block status:", error);
      toastError(
        error.response?.data?.message ||
          "An error occurred while updating user status"
      );
    }
  };
  

  const startLoading = () => loadingBar.current?.continuousStart();
  const finishLoading = () => loadingBar.current?.complete();

  useEffect(() => {
    if (queryGetUSER.isLoading || queryGetADMINUSER.isLoading) {
      startLoading();
    } else {
      finishLoading();
    }
  }, [queryGetUSER.isLoading, queryGetADMINUSER.isLoading]);

  return (
    <div>
      <LoadingBar color="#F11946" ref={loadingBar} />
      <div className="w-full px-6 py-6 mx-auto">
        {/* Users Table */}
        <div className="flex flex-wrap -mx-3">
          <div className="w-full max-w-full px-3">
            <div className="flex flex-col min-w-0 mb-6 bg-white shadow-soft-xl rounded-2xl">
              <div className="flex justify-between">
                <div className="p-6 text-xl border-b-transparent rounded-t-2xl">
                  <h6>Users</h6>
                </div>
                <div className="relative mt-4 me-8">
                  <input
                    type="text"
                    placeholder="Search users here"
                    className="w-full py-1.5 pl-7 pr-20 text-gray-900 rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm"
                    onChange={searchHandler}
                    value={searchTerm}
                  />
                </div>
              </div>
              <div className="flex-auto px-0 pt-0 pb-2 overflow-auto max-h-72">
                <table className="w-full text-slate-500">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left uppercase bg-transparent border-b text-slate-400">
                        Image
                      </th>
                      <th className="px-6 py-3 text-center uppercase bg-transparent border-b text-slate-400">
                        Username
                      </th>
                      <th className="px-6 py-3 text-center uppercase bg-transparent border-b text-slate-400">
                        Status
                      </th>
                      <th className="px-6 py-3 text-center uppercase bg-transparent border-b text-slate-400">
                        Joining Date
                      </th>
                      <th className="px-6 py-3 text-center uppercase bg-transparent border-b text-slate-400">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(searchTerm ? users : queryGetUSER.data?.data?.data || []).map(
                      (user, index) => (
                        <tr key={index}>
                          <td className="p-2 bg-transparent border-b">
                            <img
                              src={user.avatar || Avatar}
                              className="w-9 h-9 rounded-xl"
                              alt={user.name || "User Avatar"}
                            />
                          </td>
                          <td className="p-2 text-center bg-transparent border-b">
                            <h6 className="text-sm">{user.name}</h6>
                          </td>
                          <td className="p-2 text-center bg-transparent border-b">
                            <span
                              className={`px-2.5 py-1 text-xs font-bold rounded ${
                                user.online ? "bg-green-500" : "bg-gray-400"
                              }`}
                            >
                              {user.online ? "Online" : "Offline"}
                            </span>
                          </td>
                          <td className="p-2 text-center bg-transparent border-b">
                            {user.joiningDate || "N/A"}
                          </td>
                          <td className="p-2 text-center bg-transparent border-b">
                            <button
                              onClick={() =>
                                handleBlockToggle(
                                  user._id,
                                  userStatuses[user._id] ?? user.blocked
                                )
                              }
                              className={`px-3 py-1 rounded text-white font-medium ${
                                userStatuses[user._id] ?? user.blocked
                                  ? "bg-red-500 hover:bg-red-600"
                                  : "bg-green-500 hover:bg-green-600"
                              }`}
                            >
                              {userStatuses[user._id] ?? user.blocked
                                ? "Unblock"
                                : "Block"}
                            </button>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
