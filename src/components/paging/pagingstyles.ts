
import styled from 'styled-components';
import { RowBox } from '../../content/contentStyles';
import { theme } from '../../config';

export const PagingDots = styled.div`
    width: 32px;
    height: 32px;
    margin: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.secondaryColor};
    @media only screen and (max-width: 640px) {
        min-width: 24px;
        margin: 2px;
    }
`;

export const PagingArrow = styled(PagingDots)`
    :hover {
        cursor: pointer
    }
`;

export const PagingEntry = styled(PagingArrow)<{ selected?: boolean }>`
   border: ${props => props.selected === true ? `2px solid ${theme.secondaryColor}` : `1px solid ${theme.primaryColor}` };
   color: ${theme.backgroundColor };
   border-radius: 10%;
   box-shadow: ${theme.boxShadow};
   box-sizing: border-box;
   background-color: ${props => props.selected === true ? theme.primaryColor : theme.secondaryColor };
   :hover {
       cursor: pointer;
       background-color: ${theme.primaryColor};
       color: ${theme.secondaryColor};
       border:  ${theme.secondaryColor};
   };
`;

export const PagingBox = styled(RowBox)`
    width: 100%;
    justify-content: flex-end;
    @media only screen and (max-width: 640px) {
        justify-content: center;
        margin-top: 4px;
        margin-bottom: 4px;
    }
`;