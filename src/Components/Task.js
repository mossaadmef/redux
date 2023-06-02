import React from 'react'

export const Task = ({task}) => {
    const {description} = task ;
  return (
    <div>
        <h2>{description}</h2>
    </div>
  )
};
