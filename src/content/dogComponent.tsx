import { PureComponent } from "react";
import { DogField, ImageSmall, FirstBreed, CenterColumnBox, RowBox, DogWrapper, DogPicWrapper, Subtitle, Spinner, SpinnerWrapper } from "./contentStyles";
import Paging from "../components/paging/pagingComponent";
import { defaultPageNumber } from "../config";
import { Dog, Breed } from "../logic/api/interfaces";

interface IProps {
    onSelect: (breed: Breed) => void;
    onPaging: (page: number) => void;
    dogData: Array<Dog>;
    currentPage: number;
    loading?: boolean;
}

export default class DogComponent extends PureComponent<IProps> {

    render()  {
        return (
            <DogWrapper>
                <RowBox>
                    <Subtitle> 
                        Doglist 
                    </Subtitle>
                </RowBox>
                <Paging 
                    pages={defaultPageNumber} 
                    onPaging={this.props.onPaging} 
                    page={this.props.currentPage}
                />
                <CenterColumnBox>
                    { 
                        this.props.loading === true ?
                            <SpinnerWrapper>
                                <Spinner />
                            </SpinnerWrapper>      :
                        this.props.dogData.map((dog: Dog) => {
                            return (
                                <DogField 
                                    key={dog.id}
                                    onClick={() => {
                                    if(dog.breeds.length > 0) {
                                        this.props.onSelect(dog.breeds[0])
                                    }
                                }}>
                                    <DogPicWrapper>
                                        <ImageSmall src={dog.url} alt="No Image set"/>
                                    </DogPicWrapper>
                                    <FirstBreed>
                                        {dog.breeds.length > 0 ?
                                            dog.breeds[0].name :
                                            "No Breed set"   }
                                    </FirstBreed>
                                </DogField>
                            )
                        }) }
                </CenterColumnBox>
            </DogWrapper>);
    }
}