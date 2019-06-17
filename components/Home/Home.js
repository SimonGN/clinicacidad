import React from "react";
import { HomeStyle } from "./HomeStyle";

import FontTitle from "../../styles/fontsStyles/FontTitle";
import FontSubTitle from "../../styles/fontsStyles/FontSubTitle";
import Fontparagraph from "../../styles/fontsStyles/Fontparagraph"

import BotonTratamientos from "../Boton/BotonTratamientos"
import BotonExpertos from "../Boton/BotonExpertos"





const Home = props => {
    return (
        
        <HomeStyle>
            <div className="Part1">
                <FontTitle>Clinica Cidad</FontTitle>
                <FontSubTitle>odontología, ortodoncia y medicina estética.</FontSubTitle>
                <Fontparagraph>Calle Alcalá 590 1A – Calle Machupichu 25  |  Madrid</Fontparagraph>
            </div>
            <div className="Part2">
                <BotonTratamientos/>
                <FontSubTitle>Nuestros tratamientos</FontSubTitle>
            </div>
            <div className="Part3">
                <BotonExpertos/>
                <FontSubTitle>Nuestro equipo de expertos</FontSubTitle>

            </div>
            


            
        </HomeStyle>

    ); 
  };
  
  export default Home;