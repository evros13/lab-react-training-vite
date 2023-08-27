function Greetings(props) {

    const { lang, children } = props

    const greetings = {
        de: "Hallo",
        en: "Hello",
        es: "Hola",
        fr: "Bonjour",
    };

    const greeting = greetings[lang]

    return (
        <>
            <div className="oneLineContainer">
                <p>{greeting}, {children}!</p>
            </div>
        </>
    )
}

export default Greetings