import { Text,View,TextInput,TouchableOpacity,Picker, Alert } from 'react-native';
import { styles } from '../assets/style/style.js';
import {useForm,Controller} from 'react-hook-form';
import { useState } from 'react';
import {userv} from './Homev.jsx'
import {Helpers} from '../helpers/Helpers.js'


export default function RegistroVenta(){
    const [valorZona, setValorZona] = useState('')

    const {control,handleSubmit,formState:{errors}}=useForm({
            valorVenta:''
    })

    const calcularComision = (valZona,valVenta) => {
        let comision = 0
        let porcentaje = 0
        if(valZona === ''){
            alert("Debe seleccionar la zona de la venta")
        }
        if(valZona === 'sur'){
            porcentaje = 0.03 
        }
        else if(valZona === 'norte') {
            porcentaje = 0.02
        }
        comision = porcentaje * valVenta
        return comision;
    }

    const registrarVenta = (data) => {
        let fecha = new Date()
        let valorVenta = data.valorVenta

       if(calcularComision(valorZona,valorVenta)>0){
        const venta = {
            idvend:userv.idvend,
            zona:valorZona,
            fecha:fecha.toDateString(),
            ValorVenta:valorVenta,
            comision:calcularComision(valorZona,valorVenta)
        }

        const vendedor = {
            idvend:userv.idvend,
            nombre:userv.nombre,
            correo:userv.correo,
            rol:userv.rol,
            totalcomision:userv.totalcomision!=null?userv.totalcomision+= venta.comision:venta.comision
        }

        let ayuda = new Helpers()
        ayuda.saveVenta(venta)
        ayuda.updateUser(userv.idvend,vendedor)
        alert("exito en el registro!");
        
       }else{
        alert("error");
       }
    }


    return(
        <View style={styles.container}>
            <Picker
                style={[styles.inputs,{borderColor:'green'}]}
                selectedValue={valorZona}
                onValueChange={(itemValue, itemIndex) => setValorZona(itemValue)}
            >
                <Picker.Item label="Seleccione la zona" value="" />
                <Picker.Item label="Sur" value="sur" />
                <Picker.Item label="Norte" value="norte" />
            </Picker>

           <Controller
                control={control}
                rules={{
                    required:true,
                    pattern:/([2-9][0-9]00000)/,
                    maxLength:12,
                    minLength:7
                }}
                render={({field:{onChange,onBlur,value}})=>(
                    <TextInput
                        style={[styles.inputs,{borderColor:errors.valorVenta ?.type == 'required' ||
                        errors.valorVenta ?.type == 'pattern' || errors.valorVenta ?.type == 'maxLength' ||
                        errors.valorVenta ?.type == 'minLength' ? 'red' : 'green' }]}
                        placeholder='Valor de venta'
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                    />
                )}
                name='valorVenta'
           />

           {errors.valorVenta ?.type == 'required' && <Text style={{color:'red'}}> El campo es requerido </Text>}
           {errors.valorVenta ?.type == 'pattern' && <Text style={{color:'red'}}> la venta debe ser entre 2 y 40 millones </Text>}
           {errors.valorVenta ?.type == 'maxLength' && <Text style={{color:'red'}}> Debe contener maximo 12 caracteres</Text>}
           {errors.valorVenta ?.type == 'minLength' && <Text style={{color:'red'}}>Debe contener minimo 7 caracteres</Text>} 

            <TouchableOpacity
                onPress={handleSubmit(registrarVenta)}
                style={styles.butons}
            >
                <Text style={{color:'white'}}>Añadir</Text>
            </TouchableOpacity>
        </View>
    )
}