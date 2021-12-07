
import styled from 'styled-components';
import { RowBox } from '../../content/contentStyles';
import { theme } from '../../config';

export const KeyField = styled.div`
    font-weight: 550;
    font-size: 18px;
    margin: 16px;
    width: 50%;
    color: ${theme.primaryColor}
`;

export const ValueField = styled(KeyField)`
    font-weight: 400;
    color: ${theme.secondaryColor};
    @media only screen and (max-width: 540px) {
       text-align: left;
    }
`;

export const KeyValueField = styled(RowBox)`
    border-bottom: 1px solid ${theme.primaryColor};
    width: 100%;
`;