import styled, { css } from "styled-components";

const Row = styled.div`
     display: flex;
     ${(props) => props.type === "horizontal" && css`
        justify-content: space-between;
        align-items: center;
      gap: 19rem;
     `}

     ${(props) => props.type === "Vertical" && css`
        flex-direction: column;
        gap: 3rem;
     `}
`


Row.defaultProps ={
    type: "Vertical"
}
export default Row;