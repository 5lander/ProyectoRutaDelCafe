import React from "react";  
import { Button, Form } from "semantic-ui-react"
import { useFormik } from "formik"; 
import * as Yup from "yup";
import { toast } from "react-toastify"
import "./Loginform.scss"

export function Loginform(){

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async(formValue)=>{
            try{
                console.log("Salida")
            }catch(error){
                toast.error.apply(error.message);
            }
        }
    })

    return(
        <Form className="login-formadmin" onSubmit={formik.handleSubmit}>
            <Form.Input
                name="email"
                placeholder="Correo electronico"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.errors.email}
                />
                <Form.Input name="password" type="password"
                    placeholder="Contraseña"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                />
                <Button type="submit" content="Iniciar Sesion" primary fluid/>
        </Form>
    )

}

function initialValues(){
    return{
        email: " ",
        password: "",
    };
}

function validationSchema(){
    return{
        email: Yup.string().email(true).required(true),
        password: Yup.string().required(true),
    };
}




