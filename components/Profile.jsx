import Textrows from "./Textrows";
import {usera} from "./Homea";
import {userv} from "./Homev";
import { useState } from 'react';
import {Helpers} from '../helpers/Helpers'
let user = {}
export default function Profile () {
const [user,setUser]=useState('')
    

if(usera.rol){
    setUser(usera)
}else{    
        let u = new Helpers()
     u.getUserId(userv.idvend)
     .then( d => setUser(userv))
    
}



const rol = (d) => {
    let r = ""
    if(d == true) {
        r = "Adiminstrador"
    }else{
        r = "Vendedor"
    }
    return r
};
 const comision = (rol) => {

     if(rol==false){
         return(
             <Textrows
         label="comision:"
         dato = {user.totalcomision}/>   
         )
     }
 };
    return(
        <>
            <Textrows
            label="Nombre:"
            dato = {user.nombre}
            />
            <Textrows
            label="correo:"
            dato = {user.correo}
            />
            <Textrows
            label="rol:"
            dato = {rol(user.rol)}
            /> 
            {
                comision(user.rol)
            }
        </>
        
    )


}