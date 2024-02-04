import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const navigate = useNavigate();
    function addMeetupHandler(meetupData){
        fetch(
            'https://react-new-96629-default-rtdb.firebaseio.com/meetups.json',
            {
                method : 'POST',
                body : JSON.stringify(meetupData),
                headers : {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate("/", { replace: true });
        }); //vanilla js funcn
    }

    return <section>
    <h1>New Meetup Page</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetupPage;