import react from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";

export const VisitCard = () => {

    const { id } = useParams(); // ojo porque useParams siempre devuelve strings, hay que convertir el id a Number
    const { store, dispatch } = useGlobalReducer();

    const contacto = store.contactos.find(contact => contact.id == id);
    const contactoBase = store.contactosBase.find(contact => contact.id == id);

    console.log("ID del contacto:", id);
    console.log("Contacto encontrado:", contacto);


    return (
        <div>
            <h2>One Contact Card!</h2>
            <h4>{store.contacto?.name}</h4>
            <p>{contacto?.email}</p>
            <p>{contacto?.phone}</p>
            <p>{contacto?.address}</p>
            
            <h4>{store.contactoBase?.name}</h4>
            <p>{contactoBase?.email}</p>
            <p>{contactoBase?.phone}</p>
            <p>{contactoBase?.address}</p>
        </div>
    );
};
