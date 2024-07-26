import ProfileInfo from "../Cards/ProfileInfo"
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

const NavBar = () => {
  const [searchQuery, SetsearchQuery] = useState("")
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login")
  }

  const handleSearch = () => { };
  const onClearSearch = () => {
    SetsearchQuery("");
  }
  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
        <h2 className="text-xl font-medium text-black py-2">Notes</h2>
        <SearchBar
          value={searchQuery}
          onChange={(e) => {
            SetsearchQuery(e.target.value)
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
        <ProfileInfo onLogout={onLogout}/>
    </div>
  )
}

export default NavBar