import styled from "styled-components";

export const StyledComponent = () => {
    return (
        <div>
            <p>styled Component</p>
            <button>Fight!</button>
        </div>
    )
}

const Container = styled.div`
        border: solid 2px blue;
        border-radius: 20px;
        padding: 8px;
        margin:8px;
        display: flex;
        justify-content: space-around;
        align-items : center
`;
// const TitleStyle = styled.p`
//         margin :o;
//         color:yellow
// `;

// const Buttonstyle = styled.button`
//         background-color:green;
//         border:none;
//         padding: 8px;
//         border-radius: 8px;
// `;