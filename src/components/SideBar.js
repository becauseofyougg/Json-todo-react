import React from 'react'
import { BsListUl } from 'react-icons/bs'
import { Navbar } from 'react-bootstrap'

const SideBar = () => {
    return (
        <div className='left-side'>
          <Navbar expand={false}>
            <div className='sidebar-icon'><BsListUl color="white" size={52}  /></div>
          </Navbar>
        </div>
    )
}

export default SideBar
