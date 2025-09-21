import react from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";

export const VisitCard = () => {

    // con useParams capturo el valor de la url dinamica
    const { id } = useParams(); // ojo porque useParams devuelve strings, convertimos id a Number o que la comparacion sea tipo o valor ==
    const { store, dispatch } = useGlobalReducer();

    // buscamos el contacto en el store por el id que nos llega por la url (con el useParams)
    const contacto = store.contactos.find(contact => contact.id == id);
    const contactoBase = store.contactosBase.find(contact => contact.id == id);

    console.log("Contacto Dinamico de la API --> ", contacto);
    console.log("Contacto Dinamico de la base hardcodeada --> ", contactoBase);


    return (
        <div>
            {/* si el contacto viene de la api, mostramos  el primer bloque, y si no, mostramos el segundo bloque */}
            {/* si viene del array contactos muestra el primer bloque, si el array es contactosBase muestra el segundo bloque */}
            { contacto == true ? (
                <div>
                    <h2>One Contact Card from to the API!</h2>
                    <h4>{store.contacto?.name}</h4>
                    <p>{contacto?.email}</p>
                    <p>{contacto?.phone}</p>
                    <p>{contacto?.address}</p>
                </div>
            ) : <div>
                <h2>One Contact Card from to contactBase!</h2>
                <h4>{store.contactoBase?.name}</h4>
                <p>{contactoBase?.email}</p>
                <p>{contactoBase?.phone}</p>
                <p>{contactoBase?.address}</p>
            </div>
            }
        </div>
    );
};
