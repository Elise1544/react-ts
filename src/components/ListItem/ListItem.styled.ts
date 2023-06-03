import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListItemLink = styled(Link)`
    text-decoration: none;
    padding: 10px;
    
    &.done {
        color: green;
    }
    
    &.notDone {
        color: red;
    }
`