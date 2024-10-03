import React from 'react'

function DataList({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item._id}>
          {item.name}: {item.value}
        </li>
      ))}
    </ul>
  )
}

export default DataList
