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
        }, () => {
            imageSearch(page).then((response: Array<Dog>) => {
                this.setState({
                    dogData: response,
                    currentPage: page,
                    loading: false
                });
            }).catch((error: any) => {
                console.log(error);
            }); });
    }

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
    } // decided here to make it as a single-component, so i do not lose the already fetched data between breed-view and returning to dogview. Could have used a store too, but this seems kinda overtuned then
}     