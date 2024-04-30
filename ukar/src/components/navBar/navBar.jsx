import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './navBar.css'
function NavBar() {
    return (
        <nav>
             <Link to ="/" className='title'>U'kar Food</Link>
            <ul>
                
                <li>
                    <NavLink to = "/ingredient">Ingrédient</NavLink>
                </li>
                <li>
                    <NavLink to  = '/Categorie'>Catégorie</NavLink>
                </li>
                <li>
                    <NavLink to='/achat'>Achat</NavLink>
                </li>
                <li>
                    <NavLink to ='/stockage'>Stockage</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
