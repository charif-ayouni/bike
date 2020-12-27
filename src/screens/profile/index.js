import React from 'react'
import { useAuth } from '../../context/authContext'
import { Wrapper, Picture, Check, Thumbnail, Name } from './profile.style'
import { FaCheck, FaUser, FaEdit } from 'react-icons/fa'

const Profile = () => {
  const { logout, user } = useAuth()

  console.log(user)
  const handleLogout = async e => {
    e.preventDefault()
    logout()
  }
  return (
    <>
      <Wrapper>
        <Picture>
          {user.photoURL ? (
            <>
              <Thumbnail>
                <img src={user.photoURL} alt='' />
              </Thumbnail>
            </>
          ) : (
            <Thumbnail>
              <FaUser />
            </Thumbnail>
          )}
          {user.emailVerified ? (
            <Check>
              <FaCheck style={{ fontSize: '10px' }} />
            </Check>
          ) : null}
          <Name>
            {user.displayName}
            <FaEdit />
          </Name>
        </Picture>
      </Wrapper>
      <button onClick={e => handleLogout(e)}>logout</button>
    </>
  )
}

export default Profile
