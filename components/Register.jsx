import {Text,View,TextInput,TouchableOpacity,Switch, Alert } from 'react-native'
import {useForm,Controller} from 'react-hook-form'
import {styles} from '../assets/style/style'
import { useState } from 'react';
import { Helpers } from '../helpers/Helpers';


export default function Register({navigation}){
  let objt = new Helpers()

    const {control,handleSubmit,formState:{errors}}=useForm({
        defaultValues:{
            idvend:'',
            nombre:'',
            correo:'',
            rol:''
        }
    })
    const  onSubmit =  (data) => {

      let user = {idvend : data.idvend ,nombre: data.nombre ,correo: data.correo ,rol: isfourth}
      try{
         objt.saveUser(user);
        console.log('exito guardando');
        navigation.navigate('Login')
        }catch(error){
          console.log(error.message);
        }
      };

    const [isfourth, setIsfourth] = useState(false);
    const toggleSwitch = () => setIsfourth(isActive => !isActive);
    

    return(
        <View style={styles.container}>
        <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^[0-9{8,12}]+$/g,
          maxLength:30,
          minLength:3
        }}
        render={({field:{onChange,onBlur,value}})=>(
          <TextInput
          style={[styles.inputs,{borderColor:errors.idvend?.type == "required"||errors.idvend?.type == "maxLength"
          ||errors.idvend?.type == "minLength"||errors.idvend?.type == "pattern"?'#e33d35':'#58e126'}]}
          placeholder="identificacion"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          
          />
        )}
        name='idvend'
      />
      {errors.idvend?.type=='required'&&<Text style={{color:'red'}}> La identificacion es obligatoria</Text>}
      {errors.idvend?.type=='maxLength'&&<Text style={{color:'red'}}> La identificacion debe tener 12 numeros</Text>}
      {errors.idvend?.type=='minLength'&&<Text style={{color:'red'}}> La identificacion debe tener minimo 8 numeros</Text>}
      {errors.idvend?.type=='pattern'&&<Text style={{color:'red'}}> La identificacion solo puede contener numeros</Text>}
      
      <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g,
          maxLength:30,
          minLength:8
        }}
        render={({field:{onChange,onBlur,value}})=>(
          <TextInput
          style={[styles.inputs,{borderColor:errors.nombre?.type == "required"||errors.nombre?.type == "maxLength"
          ||errors.nombre?.type == "minLength"||errors.nombre?.type == "pattern"?'#e33d35':'#58e126'}]}
          placeholder="nombre "
          onChange={onChange}
          onBlur={onBlur}
          value={value}   
          />
        )}
        name='nombre'
      />
      {errors.nombre?.type=='required'&&<Text style={{color:'red'}}> El Nombre es obligatorio</Text>}
      {errors.nombre?.type=='maxLength'&&<Text style={{color:'red'}}> El Nombre debe tener almenos 30 chars</Text>}
      {errors.nombre?.type=='minLength'&&<Text style={{color:'red'}}> El Nombre debe tener minimo 8 chars</Text>}
      {errors.nombre?.type=='pattern'&&<Text style={{color:'red'}}> El Nombre debe tener solo letras y espacios</Text>}
      

<Controller
        control={control}
        rules={{
          required:true,
          pattern: /^([da-zA-Z_.-]+)@([da-zA-Z.-]+).([a-z.]{2,6})$/,
          maxLength:50,
          minLength:15
        }}
        render={({field:{onChange,onBlur,value}})=>(
          <TextInput
          style={[styles.inputs,{borderColor:errors.correo?.type == "required"||errors.correo?.type == "maxLength"
          ||errors.correo?.type == "minLength"||errors.correo?.type == "pattern"?'#e33d35':'#58e126'}]}
          placeholder="correo"
          onChange={onChange}
          onBlur={onBlur}
          value={value}  
          />
        )}
        name='correo'
      />

    {errors.correo?.type=='required'&&<Text style={{color:'red'}}>El correo es obligatorio</Text>}
    {errors.correo?.type=='pattern'&&<Text style={{color:'red'}}>El correo de tener @ y dominio finalizado en .com</Text>}
    {errors.correo?.type=='maxLength'&&<Text style={{color:'red'}}>debe tener maximo 50 caracteres</Text>}
    {errors.correo?.type=='minLength'&&<Text style={{color:'red'}}>debe tener minimo 15 caracteres</Text>}
     
    <View style={{flexDirection:'row',marginTop:20,marginBottom:20}}>
  
            <Text> es Admin? </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#58e126" }}
              //thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}       
              onValueChange={toggleSwitch}
              value={isfourth}
            />
 
      </View>
    
    

    <TouchableOpacity 
    style={styles.butons}
    onPress={handleSubmit(onSubmit)}
    >
        <Text style={{color:'white', fontFamily:'Kanit', paddingLeft: '15px',paddingRight: '15px',letterSpacing:'1px',fontSize:'20px',borderRadius:'.4em'}}>Registrarse</Text>
    </TouchableOpacity>
      
        </View>
    )
}