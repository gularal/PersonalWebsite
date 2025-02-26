import React from 'react';
import "./Profile.css";

export const Profile = () => {
  return (
    <div className='profile'>
      <h2 className="profile-title">Profile</h2>
      <div className="profile-container">
        <div className="profile-info">
          <h4>Profile</h4>
          <ul>
            <li><strong>Doğum Tarihi:</strong> 17.08.1936</li>
            <li><strong>İkamet Yeri:</strong> ABD</li>
            <li><strong>Eğitim Durumu:</strong> Michigan Üniversitesi</li>
            <li><strong>Lisans,</strong> 1954</li>
            <li><strong>Tercih Ettiği Rol:</strong> Yazılım Mühendisi</li>
          </ul>
        </div>

        <div className="profile-about">
          <h4>About Me</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, 
            odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <p>
            Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt 
            quam temporibus cumque magnam!
          </p>
        </div>
      </div>
      <div className="profile-bottom-line"></div>
    </div>
  );
};

export default Profile;