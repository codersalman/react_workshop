
import './StudentCard.css'
import StudentList from "./StudentList";

    const url = "http://localhost:3000";


    function ServerConnecttion() {
        return (
            <div>
                <h1 className="Heading">Server Connection</h1>
                <p className="Heading">Server URL : {url}</p>

                <hr></hr>
                <h1 className="Heading">Student List From Server</h1>

                <StudentList></StudentList>

            </div>
        )
    }

export default ServerConnecttion;
