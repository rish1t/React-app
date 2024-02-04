import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";
  
  function AllMeetupsPage() {
    const[isLoading , setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://react-new-96629-default-rtdb.firebaseio.com/meetups.json'
        ).then((response) => {
            return response.json();
        }).then((data) => {
            const meetups = [];
            for( const key in data ){
                const meetup =  {
                    id : key,
                    ...data[key]
                };
                meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
    }, []);


    if(isLoading) { 
        return (
            <section>
                <p>
                    Loading...
                </p>
            </section>
        )
    }

    return (
      <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups}/>
      </section>
    );
  }
  
  export default AllMeetupsPage;