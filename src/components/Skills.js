import React from "react";
import "./Skills.css";
import Skill from "./Skill";
import Interet from "./Interet";


function Skills() {

    return (
        <>
        <div className="skills">
                <h2 className="h2">Competences</h2>
            <Skill title="HTML" rating="4" />
            <Skill title="CSS" rating="2" />
            <Skill title="TYPESCRIPT" rating="3" />
            <Skill title="JAVA" rating="5" />
            <Skill title="ANGULAR" rating="3" />


            <div className="skills">
                <h2 className="h2">Langues</h2>
                <Skill title="FRANCAIS" rating="4" />
            <Skill title="ANGLAIS" rating="3" />
            <Skill title="ARABE" rating="4" />
            </div>
           <Interet />
        </div>
        </>
    )
}

export default Skills