function Rating (props) {

    const {number} = props

    const roundedNumber = Math.round(number)

    let finalRating;

    switch(roundedNumber) {
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
            finalRating =  <p>★★★☆☆</p>
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
        <div className="oneLineContainer">
            <p>{roundedNumber} - </p>
            <p>{finalRating}</p>
        </div>
        </>
    )
}

export default Rating