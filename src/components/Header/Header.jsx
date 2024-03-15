import Blogs from "../Blogs/Blogs"
import profile from "../../assets/images/profile.png"

const Header = () =>{
    return(
        <div className="flex justify-between items-center py-4 border-b-2">
            <h1 className="text-4xl font-bold">Knowledge cafe</h1>
            <img src={profile} alt="Profile Image" />
        </div>
    )
}

export default Header