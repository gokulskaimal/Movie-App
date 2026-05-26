import { NavLink } from "react-router-dom"

export default function NavBar(){
    return (
        <nav style ={{display : "flex" , gap : '20px' , marginBottom : '30px'}}>
            <NavLink to ='/' style ={({isActive}) => ({textDecoration : 'none' , fontWeight : isActive ? 'bold ': 'normal' , color : 'black'})}>
            Search
            </NavLink>
            <NavLink to='/favorites' style={({isActive}) => ({textDecoration : 'none' , fontWeight : isActive ? 'bold ': 'normal' , color : 'black'})}>
                Favorites
            </NavLink>
        </nav>
    )
}