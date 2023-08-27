function DriverCard(props) {

    const { name, rating, img } = props
    const { model, licensePlate } = props.car

    const roundedRating = Math.round(rating)

    let finalRating;

    switch (roundedRating) {
        case 0:
            finalRating = <p>☆☆☆☆☆</p>
            break;
        case 1:
            finalRating = <p>★☆☆☆☆</p>
            break;
        case 2:
            finalRating = <p>★★☆☆☆</p>
            break;
        case 3:
            finalRating = <p>★★★☆☆</p>
            break;
        case 4:
            finalRating = <p>★★★★☆</p>
            break;
        case 5:
            finalRating = <p>★★★★★</p>
            break;
        default:
            finalRating = <p>Rating not found</p>
            break;
    }

    return (
        <>
            <div className="driverCard">
                <div>
                    <img src={img} alt="Driver's picture" />
                </div>
                <div className="driverCard2">
                    <h3>{name}</h3>
                    <p>{finalRating}</p>
                    <p>{model} - {licensePlate}</p>
                </div>
            </div>
        </>
    )
}

export default DriverCard