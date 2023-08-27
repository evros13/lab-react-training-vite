function Random(props) {

    const { min, max } = props
    const randomValue = Math.floor(Math.random() * (max - min + 1))

    return (
        <>
            <div className="oneLineContainer">
                <p>Random value between {min} and {max} is {randomValue}</p>
            </div>
        </>
    )
}

export default Random