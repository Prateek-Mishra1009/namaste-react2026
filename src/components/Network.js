import React from 'react'
import usenetwork from './utils/useNetwork'

const Network = () => {

    const isOnline=usenetwork()

    console.log("my network is ", isOnline)

  return(
    <div>

        My network is currently working
        {isOnline ? "🟢" : "🔴"}
    </div>
  )
}

export default Network