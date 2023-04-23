import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import Rotunda from '../images/Rotunda.jpeg';
import EventCard from './EventCard';

const Events = () => {

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const months = Array.from({ length: 12 }, (_, i) => {
        const month = (currentMonth + i) % 12;
        const year = currentYear + Math.floor((currentMonth + i) / 12);
        return new Date(year, month).toLocaleString('en-US', { month: 'long' }).toLocaleUpperCase();
    });

    const eventItems = ["HeadshotsApril", "Sunset SeriesMarch", "BasketballJanuary", "SoccerJuly", "FinalsMay", "VacationJune", "SeattleJune"];

    const listItems = months.map((month, index) => {
        const filteredEventItems = eventItems.filter((event) => {
            console.log("event", event);
            console.log("month", month);
            return event.toLocaleUpperCase().includes(month);
        });

        return (
            <li key={index}>
                <h2>{month}</h2>
                <ul>
                    {filteredEventItems.map((event, eventIndex) => (
                        <li key={eventIndex} style={{ listStyle: "none" }}>
                            <EventCard eventName={event} />
                        </li>
                    ))}
                </ul>
            </li>
        );
    });


    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${Rotunda})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw',
                    height: '60vh',
                }}
                className="front-page-image"
            >
                <div style={{ textAlign: "center", color: "white" }}>
                    <Typography>
                        <h1 style={{ margin: "0" }}>EVENTS</h1>
                    </Typography>
                </div>
            </div>
            <Container>
                <Typography>
                    <h2 style={{ listStyle: "none", color: "#26365A" }}>
                        {listItems}
                    </h2>
                </Typography>
                <EventCard />
            </Container>
        </div>
    )

}
export default Events