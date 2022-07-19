/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
const Navbar = () =>{

    return(
        <nav>
            <div className="nav--container">
              <div className="logo">
                    <img src="" alt='Logo' className="logo--image"/>
                    <div className="logo--name"><h3>MyDiary</h3></div>
              </div>
            
              <div className="ls--nav">
                    <ul>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Help</a> </li>
                        <li><a href="">Blog</a> </li>
                        <hr />
                        <li><button className="signIn--btn">Log In</button></li>
                        <li><button className="signUp--btn">Sign Up</button></li>
                    </ul>
              </div>

            </div>
            
            
        </nav>
    )
}
export default Navbar