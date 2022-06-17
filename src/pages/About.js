import React, { Component } from 'react'
import NavbBar from '../components/NavbBar'

export default class About extends Component {
  render() {
    return (
      <div>
        <NavbBar />
        <h1 className='text-center mt-20 font-bold '>This is the about</h1>
      </div>
    )
  }
}
