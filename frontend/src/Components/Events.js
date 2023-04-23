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

    const eventItems = ["HeadshotsApril", "Sunset SeriesMarch", "BasketballJanuary"];

    // const listItems = months.map((month, index) => (
    //     <li key={index}>
    //         <h2>{month}</h2>
    //         <ul>
    //             {eventItems.map((event, eventIndex) => (
    //                 <li key={eventIndex}>
    //                     <EventCard eventName={event} />
    //                 </li>
    //             ))}
    //         </ul>
    //     </li>
    // ));

    const listItems = months.map((month, index) => {
        const filteredEventItems = eventItems.filter((event) => {
            if (month.length < 7) {
                return event.includes("Series");
            } else {
                return event.includes("Basketball");
            }
        })
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
                <div
                    style={{
                        textAlign: "center",
                        color: "White"
                    }}
                    className="front-page-image">
                    <Typography>
                        <h1>
                            EVENTS
                        </h1>
                    </Typography>
                </div>
                {/* Your content goes here */}
            </div>
            <Container>
                <Typography>
                    <li key={index}>
                        <h2>{month}</h2>
                        <ul>
                            {filteredEventItems.map((event, eventIndex) => (
                                <li key={eventIndex}>
                                    <EventItem eventName={event} />
                                </li>
                            ))}
                        </ul>
                    </li>
                </Typography>
                <EventCard />
            </Container>
        </div>
    )

}
export default Events