import { useEffect, useState } from "react";
import { Table, Spinner, Container } from "react-bootstrap";
import { fetchEvents } from "../contexts/fetchData";
//import supabase from "../contexts/db";

const EventTable = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    /*useEffect(() => {
        const fetchEvents = async () => {
        const { data, error } = await supabase
            .from("events")
            .select("*")
            .order("start", { ascending: true });

        if (error) {
            console.error("Error fetching events:", error.message);
        } else {
            const now = new Date();

            // Filter events to only show those <= now
            const filtered = data.filter(event => new Date(event.start) > now);

            setEvents(filtered);
        }

        setLoading(false);
        };

        fetchEvents();
    }, []);*/

    useEffect(() => {
        const fetchEventFunction = async () => {
            const json = await fetchEvents()
            console.log(json)
            setEvents(json)
            setLoading(false)
        }
        fetchEventFunction()
    }, [])

    return (
        <Container className="mt-4">
        <h3>Upcoming events</h3>

        {loading ? (
            <div className="text-center my-4">
            <Spinner animation="border" />
            </div>
        ) : (
            <Table striped bordered hover responsive className="mt-3">
            <thead>
                <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Speaker</th>
                <th>Description</th>
                <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {events?.map((event, index) => {
                const excelDate = event.date; // e.g. 45772
                //const excelTime = event.time; // e.g. 0.583333
            
                // Excel dates start from Jan 1, 1900, but JavaScript starts from Jan 1, 1970
                const jsEpochOffset = (excelDate - 25569) * 86400 * 1000;
                const dateObj = new Date(jsEpochOffset);

                
                
                const dateStr = dateObj.toLocaleDateString();
                const timeStr = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' , hour12: false, timeZone: 'UTC' });
                
                
                return (
                    <tr key={index}>
                    <td>{dateStr}</td>
                    <td>{timeStr}</td>
                    <td>{event.speaker}</td>
                    <td>{event.description}</td>
                    <td>{event.location}</td>
                    </tr>
                );
                })}
            </tbody>
            </Table>
        )}
        </Container>
    );
};

export default EventTable;
