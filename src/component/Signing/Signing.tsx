import React from 'react'
import { type Auth } from '../../App'
import { useLocalStorage } from '../../hooks/useApp'

export default function Signing () {
  const [user] = useLocalStorage<Auth | undefined>('User', Object)
  console.log(user)
  return <div>Signing</div>
}
