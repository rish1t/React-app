import { useContext } from "react";

import FavouritesContext from "../store/favourite-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritesPage() {
    const favouriteCtx = useContext(FavouritesContext);

    let content;
    if(favouriteCtx.totalFavourites === 0){
        content = <h2>You got no favourites yet</h2>;
    } else {
        content = <MeetupList meetups={favouriteCtx.favourites} />;
    }
    return <section>
        <h1>My Favourites</h1>
        {content}
    </section>
}

export default FavouritesPage;