export const StyledJsx = () => {
    return (
        <>
        <div className="container">
            <p className="titleStyle">styledJsx</p>
            <button className="buttonstyle">Fight!</button>
        </div>
        <style jsx="true">{`
        .container{
        border: solid 2px blue;
        border-radius: 20px;
        padding: 8px;
        margin:8px;
        display: flex;
        justify-content: space-around;
        align-items : center
        }

        .titleStyle {
        margin :o;
        color:yellow
        }

        .buttonstyle{
        background-color:green;
        border:none;
        padding: 8px;
        border-radius: 8px;

    };

        `}</style>
        </>
    )
}