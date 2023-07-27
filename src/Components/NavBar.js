import React from 'react'
import '../styles/NavBar.css'

export function NavBar () {
  return (
    <div className='NavBar'>
      <aside>
        <div className='toggle'>
          <div className='logo'>
            <a href='/'><img src='https://i.imgur.com/2d4JQ6Q.png' alt='logo' /></a>
            <h2>Admin <span className='danger'>Page</span></h2>
          </div>
          <div className='close' id='close-btn'>
            <span class='material-symbols-sharp'>
              close
            </span>
          </div>
        </div>
        <div className='sidebar'>
          <a href='#'>
            <span class='material-symbols-sharp'>
              dashboard
            </span>
            <h3>Dashboard</h3>
          </a>
          <a href='#'>
            <span class='material-symbols-sharp'>
              person
            </span>
            <h3>Users</h3>
          </a>
          <a href='#' className='active'>
            <span class='material-symbols-sharp'>
              receipt_long
            </span>
            <h3>History</h3>
          </a>
          <a href='#'>
            <span class='material-symbols-sharp'>
              insights
            </span>
            <h3>Analitycs</h3>
          </a>
          <a href='#'>
            <span class='material-symbols-sharp'>
              mail_outline
            </span>
            <h3>Tickets</h3>
            <span className='message-count'>27</span>
          </a>

          <a href='#'>
            <span class='material-symbols-sharp'>
              inventory
            </span>
            <h3>Sale List</h3>
          </a>
          <a href='#'>
            <span class='material-symbols-sharp'>
              report_gmailerrorred
            </span>
            <h3>Reports</h3>
          </a>
          <a href='#'>
            <span class='material-symbols-sharp'>
              settings
            </span>
            <h3>Settings</h3>
          </a>
          <a href='#'>
            <span class='material-symbols-sharp'>
              add
            </span>
            <h3>New Login</h3>
          </a>
          <a href='#'>
            <span class='material-symbols-sharp'>
              logout
            </span>
            <h3>logout</h3>
          </a>
        </div>
      </aside>
    </div>
  )
}

export default NavBar
