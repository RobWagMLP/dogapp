import React, { ReactElement } from "react";
import { pagingFields } from "../../config";
import { pagingArrowLeft, pagingArrowRight } from "../svgs/svgs";
import { PagingArrow, PagingBox, PagingDots, PagingEntry } from "./pagingstyles";

interface IProps {
    onPaging: (index: number) => void;
    pages: number;
    page: number;
}

interface IState {
    currentPage: number
}

export default class Paging extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            currentPage: props.page
        }
    }

    generatePagingView(): Array<ReactElement> {
        const out: Array<ReactElement> = [];
        const idx = this.state.currentPage;
        const cor = this.props.pages%2 === 0 ? 1 : 0; // correction factor in case of even pagingfields to display

        out.push(
            <PagingArrow 
                key="pagingArrowLeft"
                onClick={() => this.prev()}> 
                { pagingArrowLeft() } 
            </PagingArrow>
        );
        out.push(
                <PagingEntry 
                        key={`pagingEntry${0}`}
                        selected={idx === 0}
                        onClick={() => this.set(0)} > { "1" } 
                </PagingEntry>
            );
        if(idx < pagingFields) {
            this.generatePagingBlock(1, pagingFields + 1, idx, out );
            out.push(
                <PagingDots key="pagingDots1"> ... </PagingDots>
            );
        } else {
            out.push(
                <PagingDots key="pagingDots1"> ... </PagingDots>
            );
            
            if( idx < this.props.pages - pagingFields) {
                this.generatePagingBlock(idx - ( Math.floor(pagingFields/2)), idx + ( Math.floor(pagingFields/2) + cor), idx, out );
                out.push(
                    <PagingDots key={"pagingDots2"}> ... </PagingDots>
                );
            } else {
                this.generatePagingBlock(this.props.pages - pagingFields - 1, this.props.pages  - 1, idx, out );
            }
        }
        out.push(
            <PagingEntry 
                key={`pagingEntry${this.props.pages}`}
                selected={idx ===  this.props.pages - 1}
                onClick={() => this.set( this.props.pages - 1)} > 
                    {  this.props.pages } 
            </PagingEntry>
        );

        out.push(
            <PagingArrow 
                key="pagingArrowRight"
                onClick={() => this.next()} > 
                { pagingArrowRight() } 
            </PagingArrow>
        );
        return out;
    }

    generatePagingBlock(startIdx: number, endIdx: number, currIdx: number,  toPush: Array<ReactElement>) {
        for(let i = startIdx; i <  endIdx; i++) {
            toPush.push(
                <PagingEntry 
                        key={`pagingEntry${i}`}
                        selected={currIdx === i}
                        onClick={() => this.set(i)} > { i + 1 } 
                </PagingEntry>
            );
        }
    }

    next() {
        if(this.state.currentPage === this.props.pages - 1) {
            return
        } else {
            this.setState({
                currentPage: this.state.currentPage + 1
            }, () => this.props.onPaging(this.state.currentPage))
        }
    }

    prev() {
        if(this.state.currentPage === 0 ) {
            return
        } else {
            this.setState({
                currentPage: this.state.currentPage - 1
            }, () => this.props.onPaging(this.state.currentPage))
        }
    }

    set(index: number) {
        this.setState({
            currentPage: index
        }, () => this.props.onPaging(this.state.currentPage))
    }

    render()  {
        return (
            <PagingBox> 
                { this.generatePagingView() }
            </PagingBox>);
    }
}