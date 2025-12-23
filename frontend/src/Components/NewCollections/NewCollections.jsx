import React from 'react'
import './NewCollections.css'
import new_coll

const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collections.map()}
        </div>
    </div>
  )
}

export default NewCollections