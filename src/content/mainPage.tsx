import React from "react";
import { Main, RowBox, TitleBack, TitleFront } from "./contentStyles";
import { Breed, Dog } from "../logic/api/interfaces";
import BreedComponent from "./breedComponent";
import DogComponent from "./dogComponent";
import { imageSearch } from '../logic/api/api'

interface IProps {}

interface IState {
    selectedBreed?: Breed;
    dogData: Array<Dog>;
    currentPage: number;
    loading?: boolean;
}

export default class MainPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            dogData: [],
            currentPage: 0
        }
        this.getDogData = this.getDogData.bind(this);
    }

    componentDidMount() {
        this.getDogData(this.state.currentPage);
    }

    getDogData(page: number) {
        this.setState({
            loading: true
        }, async () => {
            const response = await  imageSearch(page);
            this.setState({
                dogData: response,
                loading: false
            })
        });
        
    }
    /**
     * decided to not use a router here, since its only 2 pages which are easily controlled by a single component
     */
    render()  {
        return (
            <Main>
                <RowBox>
                    <TitleFront>
                        Dog
                    </TitleFront>
                    <TitleBack>
                        App
                    </TitleBack>
                </RowBox>
                {
                    this.state.selectedBreed != null  ?
                    <BreedComponent breed={this.state.selectedBreed} 
                                    returnCallback={() => this.setState({selectedBreed: undefined}) }
                                    /> :
                    <DogComponent   dogData={this.state.dogData} 
                                    onPaging={this.getDogData} 
                                    onSelect={(breed: Breed) => this.setState({selectedBreed: breed}) }
                                    currentPage={this.state.currentPage}
                                    loading={this.state.loading}     
                                    />
                }
            </Main>);
    } 
}     