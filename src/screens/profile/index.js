import React, { useState, useRef } from 'react'
import { useAuth } from '../../context/authContext'
import {
  Wrapper,
  Inner,
  Check,
  Thumbnail,
  Name,
  Group,
  GroupButton,
  Input,
  Button,
  Error
} from './profile.style'
import { FaCheck, FaUser, FaPen } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Profile = () => {
  const {
    logout,
    updateDisplayName,
    updateEmail,
    updatePassword,
    user
  } = useAuth()
  const [editName, setEditName] = useState(false)
  const [editEmail, setEditEmail] = useState(false)
  const [editPassword, setEditPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const firstName = useRef()
  const lastName = useRef()
  const email = useRef()
  const password = useRef()
  const { t } = useTranslation()

  const handleLogout = async e => {
    e.preventDefault()
    logout()
  }

  const handleUpdateName = async e => {
    e.preventDefault()

    if (
      firstName.current.value.length === 0 &&
      lastName.current.value.length === 0
    ) {
      return setError('error_firstname_lastname')
    }

    setLoading(true)
    await updateDisplayName(
      firstName.current.value,
      lastName.current.value
    ).then(() => {
      setEditName(false)
      setLoading(false)
    })
  }

  const handleUpdateEmail = async e => {
    e.preventDefault()

    if (email.current.value.length === 0) {
      return setError('error_email')
    }

    setLoading(true)
    await updateEmail(email.current.value).then(() => {
      setEditEmail(false)
      setLoading(false)
    })
  }

  const handleUpdatePassword = async e => {
    e.preventDefault()

    if (password.current.value.length === 0) {
      return setError('error_password')
    }

    setLoading(true)
    await updatePassword(password.current.value).then(() => {
      setEditPassword(false)
      setLoading(false)
    })
  }

  const handleCancel = (e, type) => {
    e.preventDefault()
    switch (type) {
      case 'firstname_lastname':
        setEditName(false)
        break
      case 'email':
        setEditEmail(false)
        break
      case 'password':
        setEditPassword(false)
        break
      default:
        break
    }
    setError('')
  }

  return (
    <>
      <Wrapper>
        <Inner>
          <Thumbnail>
            {user.photoURL ? (
              <>
                <img src={user.photoURL} alt='' />
                {!user.emailVerified ? (
                  <Check>
                    <FaCheck style={{ fontSize: '10px' }} />
                  </Check>
                ) : null}
              </>
            ) : (
              <FaUser />
            )}
          </Thumbnail>

          {editName ? (
            <>
              {error && <Error>{t(error)}</Error>}
              <Group mt={20}>
                <label htmlFor='firstname'>{t('firstName')}</label>
                <Input type='text' name='firstName' ref={firstName} required />
              </Group>
              <Group>
                <label htmlFor='lastname'>{t('lastName')}</label>
                <Input type='text' name='lastName' ref={lastName} required />
              </Group>
              <GroupButton>
                <Button
                  type='submit'
                  onClick={e => handleUpdateName(e)}
                  disabled={loading}
                >
                  {t('save')}
                </Button>
                <Button
                  type='button'
                  onClick={e => handleCancel(e, 'firstname_lastname')}
                >
                  {t('cancel')}
                </Button>
              </GroupButton>
            </>
          ) : (
            <Name>
              {user.displayName}
              <a onClick={() => setEditName(true)}>
                <FaPen style={{ fontSize: '12px' }} />
              </a>
            </Name>
          )}

          {editEmail ? (
            <>
              {error && <Error>{t(error)}</Error>}
              <Group mt={20}>
                <label htmlFor='email'>{t('email')}</label>
                <Input type='email' name='email' ref={email} required />
              </Group>
              <GroupButton>
                <Button
                  type='submit'
                  onClick={e => handleUpdateEmail(e)}
                  disabled={loading}
                >
                  {t('save')}
                </Button>
                <Button type='button' onClick={e => handleCancel(e, 'email')}>
                  {t('cancel')}
                </Button>
              </GroupButton>
            </>
          ) : (
            <Name>
              {user.email}
              <a onClick={() => setEditEmail(true)}>
                <FaPen style={{ fontSize: '12px' }} />
              </a>
            </Name>
          )}

          {editPassword ? (
            <>
              {error && <Error>{t(error)}</Error>}
              <Group mt={20}>
                <label htmlFor='password'>{t('password')}</label>
                <Input
                  type='password'
                  name='password'
                  ref={password}
                  required
                />
              </Group>
              <GroupButton>
                <Button
                  type='submit'
                  onClick={e => handleUpdatePassword(e)}
                  disabled={loading}
                >
                  {t('save')}
                </Button>
                <Button
                  type='button'
                  onClick={e => handleCancel(e, 'password')}
                >
                  {t('cancel')}
                </Button>
              </GroupButton>
            </>
          ) : (
            <Name>
              {t('edit_password')}
              <a onClick={() => setEditPassword(true)}>
                <FaPen style={{ fontSize: '12px' }} />
              </a>
            </Name>
          )}
        </Inner>
      </Wrapper>
      <Button type='submit' onClick={e => handleLogout(e)}>
        {t('logout')}
      </Button>
    </>
  )
}

export default Profile
