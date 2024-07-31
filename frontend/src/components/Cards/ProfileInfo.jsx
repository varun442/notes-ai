/* eslint-disable react/prop-types */
import { getInitials } from "../../utils/helper"

const ProfileInfo = ({userInfo, onLogout}) => {
  // Early return if userInfo is null or undefined
  if (!userInfo) {
    return null; // or return a loading state, or some default UI
  }
  console.log(userInfo);
  return (
    <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
            {userInfo?.fullname ? getInitials(userInfo.fullname) : ''}
        </div>
        <p className="text-sm">{userInfo.fullname || 'User'}</p>
        <button className="text-sm text-slate-700 underline" onClick={onLogout}>Logout</button>
    </div>
  )
}

export default ProfileInfo