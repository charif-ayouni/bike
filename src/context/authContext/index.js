import React, { useContext, useState, useEffect, createContext } from 'react'
import { auth, firestore } from '../../services/firebase'

const AuthContext = createContext()

const useAuth = () => {
  return useContext(AuthContext)
}

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  const signup = data => {
    return auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(registeredUser => {
        firestore.collection('users').doc(registeredUser.user.uid).set({
          firstName: data.firstName,
          lastName: data.lastName
        })
      })
      .then(() => {
        auth.currentUser.updateProfile({
          displayName: `${data.firstName} ${data.lastName}`,
          photoURL: data.photoURL
        })
      })
  }

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const logout = () => {
    return auth.signOut()
  }

  const resetPassword = email => {
    return auth.sendPasswordResetEmail(email)
  }

  const updateEmail = email => {
    return user.updateEmail(email)
  }

  const updatePhoto = url => {
    return user.updateProfile({
      photoURL: url
    })
  }

  const updateDisplayName = (firstName, lastName) => {
    return user
      .updateProfile({
        displayName: `${firstName} ${lastName}`
      })
      .then(() => {
        firestore.collection('users').doc(user.uid).update({
          firstName: firstName,
          lastName: lastName
        })
      })
  }

  const updatePassword = password => {
    return user.updatePassword(password)
  }

  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      setUser(user)
      setLoading(false)
    })
  }, [])

  const value = {
    user,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    updatePhoto,
    updateDisplayName
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, useAuth }
