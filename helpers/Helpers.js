import axios from 'axios';
import { useState,useEffect } from 'react';
//const [data,setData] = useState([]);
const PORT='172.18.81.161';
//useEffect(() => getUsers(),[])
export class Helpers { 
    
    async saveUser (data) {
        try {
    
            const response = await axios.post(`http://${PORT}:3000/api/user` , 
            data);
    
        }catch (eroor){
            console.log(error)
        }
    };
    
    async getUsers () {//then son peresosos, no les gusta usar el then.
        //Async se usa para peticiones asincronas (que no esta dentro del tiempo de ejecucion, se puede demorar 1 hora
        //y el usuario puede seuir interactuando con la app)
        //ejemplo: 
        // el await se usa para obligar al codigo, que espere hasta que se resuelva la peticion, quiere decir que el programa se bloquea
        //esperando hasta que por fin de un resuntado.

        try{ 
            const response  = await axios.get(`http://${PORT}:3000/api/users`)//un minuto
                    return response.data
        }catch (error){
            console.log(error.message)
        }
    };
    
    async getUserId(id){
        try{
            const response = await axios.get(`localhost:3000/api/user/${id}`)
            return response.data;
        }catch (error){
            console.log(error.message)
        }
    };
    async getUsersv(){
        try{
            
            const response = await axios.get(`http://${PORT}:3000/api/usersv/${false}`)
            return response.data

        }catch(error){
            console.log(error.message)
        }
    }
    async updateUser (id,data){
       try{
        await axios.put(`http://${PORT}:3000/api/user/${id}`,data)
       }catch (error){
        console.log(error)
       }
    };
    async saveVenta (data){
        try{
            const response = await axios.post(`http://${PORT}:3000/api/Venta`,data)
        }catch (error){
            console.log(error)
        }
    };
    async getVentas()  {
        try{
            const response = await axios.get(`http://${PORT}:3000/api/Ventas`)
            return response.data
        }catch(error){
            console.log(error)
        }
    };
    
    async getVentasUser(id){
        try {
            const response = await axios.get(`http://${PORT}:3000/api/Venta/${id}`)
            return response.data
        }catch(error){
            console.log(error.message)
        }
    };
}
