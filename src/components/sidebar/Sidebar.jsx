import './sidebar.css'

export default function Sidebar() {
    return (

        <div className='sidebar'>

            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span><img width="300px" 
                src='https://images.pexels.com/photos/9768803/pexels-photo-9768803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=" "/>

                <p>
                    <h4>ADVENTURE GOERS WHO LOVE TO SHARE THEIR JOURNEY</h4>
                    Adventurous spirits with an insatiable appetite for exploration, who embark on thrilling journeys 
                    and meticulously curate enchanting tales to inspire and captivate a wide-eyed world. 
                    </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                    <li className="sidebarListItem">Travel</li>
                    <li className="sidebarListItem">Food</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>

        </div>
    )
}
