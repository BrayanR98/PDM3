import { FlatList,View} from "react-native";
import { useState } from 'react';
import { Helpers } from "../helpers/Helpers";
import Textrows from './Textrows';
import { styleRProfile } from "../assets/style/style"



export default function ventasid ({navigation,route}) {
    const [data,setData]= useState([])
    let id = route.params.idvend;
    console.log('id : ', id)
    let objt = new Helpers(); 
     objt.getVentasUser(id)
     .then(d => { 
     setData(d) 
    })
    return(
        <FlatList
          data={data}
          //keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (     
                <View style = {{borderBottom:'1px solid gray'}}>
                    <View style={{flexDirection:"row"}}>
                        <Textrows
                        label = "fecha:"
                        dato = {item.fecha}
                        />
                         <Textrows
                            label = "Zona:"
                            dato = {item.zona}
                        />
                    </View>
                    
                    <View style={{flexDirection:"row"}}>
                       
                        <Textrows
                            label = "valor:"
                            dato = {item.ValorVenta}
                        />
                        <Textrows
                        label = "Comision:"
                        dato = {item.comision}
                        />
                    </View>
                </View>   
          )}
        />
    )
}