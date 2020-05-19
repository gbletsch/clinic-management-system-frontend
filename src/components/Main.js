import React from 'react'
import { useState, useEffect } from 'react'

import Card from './Card'

import db from '../db.json'


function Main() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const newData = db.map(item => item)
      setData(newData)
      setLoading(false)
    }, [])

    if (loading) {
      return (
        <div className="main">
          Loading...
        </div>
      )
    } else {
      return (
        <div className="main">
          {data.map(item => {
            return (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
              />
            )
          })}
        </div>
      )
    }
}

export default Main
