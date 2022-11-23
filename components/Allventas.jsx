import { FlatList,View} from "react-native";
import { useState } from 'react';
import { Helpers } from "../helpers/Helpers";
import Textrows from './Textrows';
import { styleRProfile } from "../assets/style/style"


export default function Allventas ({navigation,route}) {
    const [data,setData]= useState([])
    let objt = new Helpers(); 
     objt.getVentas()
     .then(d => {
     setData(d) 
    })
    return(
        <FlatList
          data={data}
          //keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (     
                <View>
                    <View style={{flexDirection:"row",borderBottom:'1px solid gray'}}>
                        <Textrows
                        label = "fecha:"
                        dato = {item.fecha}
                        />
                        <Textrows
                        label = "identificacion:"
                        dato = {item.idvend}
                        />
                    </View> 
                    <View style={{flexDirection:"row"}}>
                        <Textrows
                            label = "Zona:"
                            dato = {item.zona}
                        />
                        <Textrows
                            label = "valor:"
                            dato = {item.ValorVenta}
                        />
                    </View>
                    <Textrows
                        label = "Comision:"
                        dato = {item.comision}
                    />
                </View>   
          )}
        />
    )
}