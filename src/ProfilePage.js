import React from "react"
import ReactDOM from 'react-dom/client' ;
function Background() {
    return (
       <div id="Background"></div>
      )
  }
function Avatar() {
  return(
    <div id="BlockFromleft">
    <div id="Avatar"></div>
    <p id="Profilepage-title">03 Profile Page</p>
    <a id="ChangeAvatar" href="*" >Thay ảnh đại diện</a>
    </div>
  )
} 

function Information() { 
    return(
      <>
      <ul id="Infor">
          <li ><p className="Username">Tên :</p><label for="Username"></label><input type="text" id="Username" name="Username"></input></li>
          <li><p className="Sex">Giới Tính :</p><label for="Sex"></label><input type="text" id="Sex" name="Sex"></input></li>
          <li><p className="BirthDate">Ngày sinh :</p><label for="BirthDate"></label><input type="text" id="BirthDate" name="BirthDate"></input></li>
          <li><p className="Email">Email :</p><label for="Email"></label><input type="text" id="Email" name="Email"></input></li>
          <li><p className="PhoneNumber">SĐT :</p><label for="PhoneNumber"></label><input type="text" id="PhoneNumber" name="PhoneNumber"></input></li>
          <li>Tài khoản thanh toán :</li>
          <li>Liên kết :</li>
      </ul>
      <button id="Button-Savechange" type='text'>Lưu thay đổi</button>
    </>
    )
}
function ProfilePage() {
    return (
        <>
      <Background/>
      <Avatar/>
      <Information/>
        </>
    )
}
export default ProfilePage
