import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import Rotunda from '../images/Rotunda.jpeg';

const Events = () => {

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const months = Array.from({ length: 12 }, (_, i) => {
        const month = (currentMonth + i) % 12;
        const year = currentYear + Math.floor((currentMonth + i) / 12);
        return new Date(year, month).toLocaleString('en-US', { month: 'long' }).toLocaleUpperCase();
    });

    const listItems = months.map((name, index) => <li key={index}>{name}</li>);

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
                            TEXT
                        </h1>
                    </Typography>
                </div>
                {/* Your content goes here */}
            </div>
            <Container>
                <Typography><h1 style={{ listStyle: "none", color: "#26365A" }}>{listItems}</h1></Typography>
            </Container>



        </div>
    )

}
export default Events