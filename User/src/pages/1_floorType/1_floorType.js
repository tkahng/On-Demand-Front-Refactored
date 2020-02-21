import React, { Component } from "react";
import { FloorTypeStyle, FloorTypeCard } from "./style";

import { Tab__FloorType } from "../../constant";
import { OndemandConsumer } from "../../context/OndemandContext";
import { Link } from 'react-router-dom';

class FloorType extends Component {
    
    handleTypeSelected = value => {
        if (value === Tab__FloorType.Residential) {
            this.props.next2Step();
        }
        if (value === Tab__FloorType.Commercial) {
            this.props.nextStep();
        }
    };

    render() {
        console.log(this.props.floorType);
        return (
            <OndemandConsumer>
                {value => (
                    <FloorTypeStyle>
                        {/* 닫기 버튼은 그냥 다시 Mainpage로 돌아가게끔 라우팅 */}
                        <Link to= "/">
                            <div
                                className="FloorType__BtnClose"
                                // onClick={e => {
                                //     value.handleOpenModal();
                                // }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
                                </svg>

                            </div>
                        </Link>

                        <main className="FloorTypeWrap">
                            <div className="FloorType__Title">
                                Choose Your Floor Plan Type
                            </div>
                            <div className="FloorType__Subtitle">
                                Tell us the purpose of your floor
                            </div>

                            <section className="FloorType__CardWrap">
                                <FloorTypeCard
                                    id="Residential"
                                    onClick={e => {
                                        this.handleTypeSelected(
                                            Tab__FloorType.Residential
                                        );
                                        this.props.handleFloorType(
                                            Tab__FloorType.Residential
                                        );
                                    }}
                                >
                                    <img
                                        className="FloorType__Img"
                                        src= { process.env.PUBLIC_URL+ "assets/floortype/Residential.jpg" }
                                        alt={"Residential"}
                                    />

                                    <div className="FloorType__Name">
                                        Residential
                                    </div>
                                    <div className="FloorType__Desc">
                                        Single, Multi-Family Homes, Dormatories,
                                        Townhouses and Condominiums
                                    </div>
                                </FloorTypeCard>

                                <FloorTypeCard
                                    id="Commercial"
                                    onClick={e => {
                                        this.handleTypeSelected(
                                            Tab__FloorType.Commercial
                                        );
                                        this.props.handleFloorType(
                                            Tab__FloorType.Commercial
                                        );
                                    }}
                                >
                                    <img
                                        className="FloorType__Img"
                                        src= { process.env.PUBLIC_URL+ "assets/floortype/Commercial.jpg" }
                                        alt={"Commercial"}
                                    />
                                    <div className="FloorType__Name">
                                        Commercial
                                    </div>
                                    <div className="FloorType__Desc">
                                        Offices, Restaurant/Cafes, Shops,
                                        Hotels, or special purpose buildings{" "}
                                        <br />
                                        (schools, hospitals and etc)
                                    </div>
                                </FloorTypeCard>
                            </section>

                                
                            <Link className= "FloorType__BackLink" to="/">
                                <div
                                    className="FloorType__BtnBack"
                                    onClick={value.handleOpenModal}
                                >
                                    Back to Tutorial
                                </div>
                            </Link>

                        </main>
                    </FloorTypeStyle>
                )}
            </OndemandConsumer>
        );
    }
}

export default FloorType;
