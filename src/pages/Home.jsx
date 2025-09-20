import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import "../styles/home.css";
import apiServices from "../services/apiServices.js";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();


	useEffect(()=> {

		apiServices.getContacts().then(response => {
			dispatch({ type: "GET_CONTACTS", payload:  [...store.contactos, ...response] });
			console.log(response);
		})
		// const fetchGetContactos = async () => {
		// 	const response = await apiServices.getContacts();
		// 	dispatch({ type: "GET_CONTACTS", payload:  [...store.contactos, ...response] });
		// 	console.log(response);
			
		// }
		// fetchGetContactos();

	}, [])

	const handleSaludo = () => {
		console.log(store.saludoEnIngles);
		return dispatch({ type: "SALUDO" });
	}

	return (
		<div className="text-center mt-5">
			<div className="moon" aria-hidden="true"></div>
			<h1 className="title">Agenda de la Corte Nocturna</h1>
			<p className="subtitle">
				To the stars who listen — and the dreams that are answered.
			</p>

			<ul className="contacts" role="list" aria-label="Lista de contactos">
				{store.contactos.map((contacto) => {
					return <li className="contact" key={contacto.id}>
					<div className="meta">
						<h3 className="name">{contacto.name}</h3>
						<p className="email">{contacto.email} </p>
					</div>
					<span className="tag">{contacto.phone}</span>
					<span className="tag">{contacto.address}</span>
				</li>
				})}

			</ul>
			<button type="button" className="btn btn-info" onClick={handleSaludo}>Change Language!</button>
			<h2>{store.saludoEnIngles == true ? "Hola Feyre querida!" : "Hello Feyre Darling!"}</h2>
		</div>
	);
};
