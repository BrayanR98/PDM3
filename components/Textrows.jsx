import {View,Text} from "react-native"
import { styleRProfile } from "../assets/style/style"


export default function Textrows ({label,dato}){

    return(
        <>
            <View style={styleRProfile.rowsProfile}>
                <Text style = {styleRProfile.label}>{label}</Text>
                <Text style = { styleRProfile.dato}>{dato}</Text>
            </View>
        </>
       
    )
}