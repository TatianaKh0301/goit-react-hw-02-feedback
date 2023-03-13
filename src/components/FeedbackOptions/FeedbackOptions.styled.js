import styled from "@emotion/styled";

export const ListWrapper = styled.ul`
    display: flex;
    margin-bottom: 50px;
    justify-content: center;
`;

export const ListItem = styled.li`
    &:not(:last-of-type) {
        margin-right: 20px;
    }    
`;

export const Button = styled.button`
    display: block;
    margin: 0 auto;
    width: 150px;
    height: 50px;
    font-size: 25px;
    font-weight: bold;
    border-radius: 5%;
`;