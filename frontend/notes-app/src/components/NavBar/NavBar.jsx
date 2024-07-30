/* eslint-disable react/prop-types */
import ProfileInfo from "../Cards/ProfileInfo"
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

const NavBar = ({userInfo, onSearchNote, handleClearSearch}) => {
  const [searchQuery, SetsearchQuery] = useState("")
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/login")
  }

  const handleSearch = () => { 
    if(searchQuery){
      onSearchNote(searchQuery)
    }
  };
  const onClearSearch = () => {
    SetsearchQuery("");
    handleClearSearch()
  }
  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
        <h2 className="text-xl font-medium text-black py-2">Notes</h2>
        {userInfo? <SearchBar
          value={searchQuery}
          onChange={(e) => {
            SetsearchQuery(e.target.value)
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        /> : <></>}
        
        <ProfileInfo userInfo={userInfo} onLogout={onLogout}/>
    </div>
  )
}

export default NavBar