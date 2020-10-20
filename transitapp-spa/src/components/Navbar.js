import React, { PureComponent, Fragment } from 'react';

class NavBar extends PureComponent {

  render() {
  return (
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
  <div class="container">
    <a class="navbar-brand" >King County Transit App</a>

    <ul class="navbar-nav mr-auto">
      <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" >Saved Bus Stops</a>
      </li>
      <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" > Search For a Stop</a>
      </li>
    </ul>

    <div class="dropdown" dropdown>
      <a class="dropdown-toggle text-light" dropdownToggle>
        Welcome
      </a>

      <div class="dropdown-menu mt-3">
        <a class="dropdown-item" ><i class="fa fa-user"></i>Edit Profile</a>
        <div class="dropdown divider"></div>
        <a class="dropdown-item" ><i class="fa fa-sign-out"></i>Logout</a>
      </div>
    </div>

    <form class="form-inline my-2 my-lg-0" >
      <input class="form-control mr-sm-2" type="text" name="username" placeholder="Username" required />
      <input class="form-control mr-sm-2" type="password" name="password" placeholder="Password" required/>
      <button class="btn btn-success my-2 my-sm-0" type="submit">
        Login
      </button>
    </form>
  </div>
</nav>
  )
  }
}

export default NavBar;