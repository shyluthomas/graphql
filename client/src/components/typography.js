import styled from 'styled-components';


export const Title = styled.h1`
font-size: 1.5em;
color: ${(props) => props.colors} ;
&:hover {
    color: blue;
    border: 1px solid yellow;
}
`;
