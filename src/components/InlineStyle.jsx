export const InlineStyle = () => {
    const containerStyle = {
        border: "solid 2px blue",
        borderRadius: "20px",
        padding: "8px",
        margin:"8px",
        display: "flex",
        justifyContent: "space-around",
        alignItems : "center"
    };
    const titleStyle = {
        margin :"o",
        color:"yellow"
    };
    const buttonstyle = {
        backgroundColor:"green",
        border:"none",
        padding: "8px",
        borderRadius: "8px"
    };

    return (
        <div style={containerStyle}>
        <p style={titleStyle}>Inline Styles</p>
        <button style={buttonstyle}>Fight!</button>
        </div>
    )
}