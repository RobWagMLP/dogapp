import styled from 'styled-components';
import { theme } from '../config';

//general
export const RowBox = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ColumnBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Main = styled(ColumnBox)`
    justify-content: center;
    margin: 32px;
    border-radius: 5px;
    padding: 16px;
    min-width: 300px;
    background-color: ${theme.backgroundColor};
    border: 4px solid ${theme.primaryColor};
    @media only screen and (max-width: 540px) {
        margin: 4px;
    }
`;

export const TitleFront = styled.div`
    font-size: 42px;
    color:  ${theme.secondaryColor};
    font-weight: 550;
`;

export const TitleBack = styled(TitleFront)`
    color:  ${theme.primaryColor};
`;

export const Subtitle = styled(TitleFront)`
    font-size: 28px;
    color:  ${theme.secondaryColor};
    font-weight: 550;
`;

export const SpinnerWrapper = styled.div`
    margin: auto;
    text-align: center;
    margin-top: 64px;
    padding: 6px;
`;

export const Spinner = styled.div`
    width: 16px;
    height: 16px;
    background-clip: content-box;
    border: 48px solid ${theme.primaryColor};
    border-color: ${theme.primaryColor} transparent ${theme.primaryColor} transparent;
    border-radius: 50%;
    animation: spinner 2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    margin: auto;
    @keyframes spinner {
        0% {
            transform: rotate(0);
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
          }
          50% {
            transform: rotate(900deg);
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }
          100% {
            transform: rotate(1800deg);
          }
    }
`;

//dogComponent

export const DogWrapper = styled(ColumnBox)`
    margin: 16px
`;

export const CenterRowBox = styled(RowBox)`
    align-items: center;
`;

export const DogPicWrapper = styled(CenterRowBox)`
    min-width: 30%;
    margin: auto;
    justify-content: center;
    @media only screen and (max-width: 540px) {
        min-width: 100px;
    }
`;

export const DogField = styled(RowBox)`
    border: 2px solid ${theme.primaryColor};
    border-radius: 5px;
    padding: 4px;
    box-shadow: ${theme.boxShadow};
    margin: 8px;
    width: 90%;
    align-items: center;
    flex-wrap: wrap;
    background-color: ${theme.secondaryColor};
    color: ${theme.backgroundColor};
    :hover {
        border: 2px solid ${theme.secondaryColor};
        background-color:  ${theme.primaryColor};
        cursor: pointer;
    }
`;

export const FirstBreed = styled.div`
    font-size: 24px;
    font-color:  ${theme.secondaryColor};
    font-weight: 550;
    margin: 16px;
    min-width: 65%;
    margin: auto;
    text-align: center;
`;

export const ImageSmall = styled.img`
    border-radius: 50%;
    height: 96px;
    border: 1px solid ${theme.secondaryColor};
    margin: 4px;
`;

export const IconWrapper = styled.div`
    margin-right: 16px;
    display: flex;
    align-items: center;
    :hover {
        cursor: pointer;
    }
`;

//Breed

export const CenterColumnBox = styled(ColumnBox)`
    align-items: center
`;

export const BreedBox = styled(RowBox)`
    justify-content: center;
    @media only screen and (max-width: 796px) {
        flex-wrap: wrap;
    }
`;

export const BreedDescriptionWrapper = styled(ColumnBox)`
    width: 90%;
`;

export const ImageMed = styled.img`
    border-radius: 10%;
    max-width: 80%;
    border: 2px solid ${theme.primaryColor};
    margin: 16px;
    @media only screen and (max-width: 540px) {
        margin: auto;
        height: auto;
    }
`;

export const BreedElementWrapper = styled(RowBox)`
    min-width: 45%;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media only screen and (max-width: 540px) {
        margin: auto;
        margin-top: 16px;
    }
`;