const Events = () => {

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const months = Array.from({ length: 12 }, (_, i) => {
        const month = (currentMonth + i) % 12;
        const year = currentYear + Math.floor((currentMonth + i) / 12);
        return new Date(year, month).toLocaleString('en-US', { month: 'long' });
    });

    const listItems = months.map((name, index) => <li key={index}>{name}</li>);

    return (

        <div>
            <h1>Months List:</h1>
            <ul>{listItems}</ul>
        </div>
    )

}
export default Events