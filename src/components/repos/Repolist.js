import React from 'react'
import Repoitem from './Repoitem'

function Repolist({repos}) {
  return (
    <div>
   {repos.map((repo)=>(
  <Repoitem key={repo.id} repo={repo} />
   ))}
    </div>
  )
}

export default Repolist
