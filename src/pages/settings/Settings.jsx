import SideBar from '../../components/sidebar/SideBar'
import './settings.css'

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="https://xeecovers.com/wp-content/uploads/2013/06/Blossoms.png" alt=""/>
            <label htmlFor="fileInput">
              <i class="far fa-user-circle settingsPPicon"></i>
            </label>
            <input type="file" id="fileInput" style={{display:'none'}} />
          </div>
        
          <label>Username</label>
          <input type="text" placeholder="Jenny" />
          <label>Email</label>
          <input type="email" placeholder="jenny@gmail.com" />
          <label>Password</label>
          <input type="password" />
          
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar/>

    </div>
  )
}
