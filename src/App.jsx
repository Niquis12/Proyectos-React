import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {
  const users = [
    {
      userName : 'Renezzbro',
      name: 'Rene ZZ',
      isFollowing : false
    },
    {
      userName : 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing : true
    },
    {
      userName : 'nategentile7',
      name: 'Nate Gentile',
      isFollowing : false
    },
    {
      userName : 'MoureDev',
      name: 'Brais Moure',
      isFollowing : true
    },
  ]

  return (
    <section className='App'>
      {
        users.map(user => {
          const {userName, name, isFollowing} = user
          return (
          <TwitterFollowCard  
            key={userName}
            userName={userName} 
            initialIsfollowing={isFollowing}
          > 
            {name}
          </TwitterFollowCard>
          )
        })
      }
    
    </section>
  )
}

export default App
