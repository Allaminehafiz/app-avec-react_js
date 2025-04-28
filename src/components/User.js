import React from "react";
import "./User.css";


function User() {

    return (
        <div className="user">
            <img src="./images/alle.jpg" alt="My image" className="user__avatar"/>
        <h1 className="user__name">Allamine Mahamat Hafiz</h1>
        <p className="user__profession">Profession : <b>Etudiant</b></p>
        <div className="user__infos">
            <p className="user__info">Quartier : Ecole de poste 0001 Yaounde</p>
            <p className="user__info">
                <a href="tel :655 099 680">Tel : 655 099 680</a></p>
            <p className="user__info">
                <a href="mailto:allaminhafiz68@gmail.com">Adresees : allaminhafiz68@gmail.com</a></p>
            <p className="user__info">Date de naissance : 05 janvier 2002</p>
            <p className="user__info">Lieu de naissance : N'djamena</p>
        
        </div>
        </div>
    )
}

export default User