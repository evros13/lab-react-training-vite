function IdCard(props) {

    const { lastName, firstName, gender, height, birth, picture } = props


    return (
        <>
            <div className="idCardContainer">
                <img src={picture} alt="Profile image" />
                <div className="innerIdCard">
                    <p><strong>First name: </strong>{firstName}</p>
                    <p><strong>Last name: </strong>{lastName}</p>
                    <p><strong>Gender: </strong>{gender}</p>
                    <p><strong>Height: </strong>{height}</p>
                    <p><strong>Birth: </strong>{birth.toLocaleDateString()}</p>
                </div>
            </div>
        </>
    )
}

export default IdCard