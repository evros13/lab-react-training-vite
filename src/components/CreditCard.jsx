function CreditCard(props) {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    let logo;
    if (type === "Visa") {
        logo = "./../../public/visa.png"
    }
    else {
        logo = "./../../public/mastercard.png"
    }

    const lastFourNumbers = number.slice(-4)

    return (
        <>
            <div className="creditCardContainer" style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
                <div className="logoDiv">
                    <img style={{ height: "25px" }} src={logo} alt="Logo" />
                </div>
                <div className="numberDiv">
                    <p>**** **** **** {lastFourNumbers}</p>
                </div>
                <div className="expirationDiv">
                    <p>Expires{expirationMonth}/{expirationYear}</p>
                    <p>{bank}</p>
                </div>
                <div className="ownerDiv">
                    {owner}
                </div>
            </div>
        </>
    )
}

export default CreditCard