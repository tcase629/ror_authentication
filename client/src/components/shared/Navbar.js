import { Link, withRouter } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';

const Navbar = ({ user, handleLogout, history }) => {

  const rightNavItems = () => {
    if (user) {
      // links if the user is logged in
      return (
        <>
          <li onClick={() => handleLogout(history)}>
            Logout
          </li>
          <Link to="/dash">
            <li>Dashboard</li>
          </Link>
        </>
      )
    } else {
      // links if there is no user logged in 
      return(
        <>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/register">
            <li>Register</li>
          </Link>
        </>
      )
    }
  }
  return(
    <>
      <nav>
        <ul>
          {/* links regardless of login status */}
          <Link to="/">
            <li>
              Home
            </li>
          </Link>
          { rightNavItems() }
        </ul>
      </nav>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <Navbar {...value}  {...props}/>}
  </AuthConsumer>
)

export default withRouter(ConnectedNavbar)