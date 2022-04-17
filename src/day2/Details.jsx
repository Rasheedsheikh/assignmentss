import React from 'react'

export const Details = (props) => {
    const {date,Name,title,type,use,logo} = props
  return (
      <div calssName={Style.card}>
    <div className="left">
        <h1>{date}</h1>
        <h1>{Name}</h1>
        <h1>{title}</h1>
        <h1>{type}</h1>
        <h1>{use}</h1>
        </div>
        <div className="right">
            <img src={data.logo}/>
        </div>

        </div>
  )
}
