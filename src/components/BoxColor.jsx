function BoxColor (props) {

    const {r, g, b} = props


    return (
        <>
            <div className="boxColor" style={{backgroundColor: `rgb(${r},${g},${b})`}}> RGB({r},{g},{b})</div>
        </>
    )
}

export default BoxColor 