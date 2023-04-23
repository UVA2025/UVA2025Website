const Events = () => {

    const months = Array.from({length: 12}, (item, i) => {
        return new Date(0, i).toLocaleString('en-US', {month: 'long'})
      });


    return (

        <>
            This is the Events page
        </>
    )

}
export default Events