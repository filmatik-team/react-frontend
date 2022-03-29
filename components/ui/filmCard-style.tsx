import styled from "styled-components";
import {Link} from "@mui/material";

export const LinkStyled = styled(Link)`    
  position: relative;
  display: block;
  width: 100%;
  height: 100%;    
  border: solid 1px transparent;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(135deg, #586e7d 0%, #273037 100%);
  }
`;