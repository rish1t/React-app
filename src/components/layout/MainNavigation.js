import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
//classes is a JS object, can be any name
import FavouritesContext from '../../store/favourite-context';
function MainNavigation() {
    const favouritesCtx = useContext(FavouritesContext);
    return <header className={classes.header}>
    <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>New Meetups</Link>
                </li>
                <li>
                    <Link to='/favourites'>My Favourites
                    <span className={classes.badge}>{favouritesCtx.totalFavourites}</span></Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;