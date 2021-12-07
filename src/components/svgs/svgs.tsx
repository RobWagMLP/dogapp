import { ReactElement } from "react";

export const pagingArrowRight = (): ReactElement  => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
        </svg>
    );
}

export const pagingArrowLeft = (): ReactElement => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
        </svg>
    );
}

export const back = (): ReactElement =>  {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
            <rect fill="none" height="24" width="24"/>
            <g>
                <polygon points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12"/>
            </g>
        </svg>
    );
}