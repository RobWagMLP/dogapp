import React from "react";
import { BreedDescriptionWrapper, IconWrapper, ImageMed,  BreedBox, Subtitle, DogWrapper, BreedElementWrapper, CenterRowBox } from "./contentStyles";
import KeyValueComponent from "../components/keyValueComponent/keyValueComponent";
import { back } from "../components/svgs/svgs";
import { baseUrlImg } from "../config";
import { Breed } from "../logic/api/interfaces";
import { coalesce, valueFromNullableObject } from "../logic/utils";

interface IProps {
   breed: Breed;
   returnCallback: () => void;
}

export default class BreedComponent extends React.Component<IProps> {
    
    render()  {
        return (
            <DogWrapper>
                <CenterRowBox>
                    <IconWrapper 
                        onClick={() => this.props.returnCallback()}
                    >
                        {back()}
                    </IconWrapper>
                    <Subtitle> 
                        {this.props.breed.name} 
                    </Subtitle>
                </CenterRowBox>
                <BreedBox>
                    <BreedElementWrapper >
                        <BreedDescriptionWrapper>
                            <KeyValueComponent 
                                description={"Temperament"}
                                value={coalesce("Not set", this.props.breed.temperament) }
                            />
                            <KeyValueComponent 
                                description={"Bred for"}
                                value={coalesce("Not set", this.props.breed.bred_for) }
                            />
                            <KeyValueComponent 
                                description={"Life span"}
                                value={coalesce("Not set", this.props.breed.life_span) }
                            />
                            <KeyValueComponent 
                                description={"Height"}
                                value={coalesce("Not set", valueFromNullableObject(["metric", "imperial"], this.props.breed.height) ) }
                            />
                            <KeyValueComponent 
                                description={"Weight"}
                                value={coalesce("Not set", valueFromNullableObject(["metric", "imperial"], this.props.breed.weight) ) }
                            />
                        </BreedDescriptionWrapper>
                    </BreedElementWrapper>
                    <BreedElementWrapper>
                        <ImageMed src={baseUrlImg + this.props.breed.reference_image_id + ".jpg"}/>
                    </BreedElementWrapper>
                </BreedBox>
                
            </DogWrapper>);
    }
}