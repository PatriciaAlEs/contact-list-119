import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import "../styles/home.css";
import apiServices from "../services/apiServices.js";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();


	useEffect(() => {
		apiServices.getContacts().then(response => {
			dispatch({ type: "GET_CONTACTS", payload: response });
			console.log("Contactos de la API", response);
			console.log("Contactos del store", store.contactos);
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
				{store.contactosBase.map((contacto) => {
					return <li className="contact" key={contacto.id}>
						<div className="meta">
							<h3 className="name">{contacto.name}</h3>
							<p className="email">{contacto.email} </p>
						</div>
						<span className="tag">{contacto.phone}</span>
						<span className="tag">{contacto.address}</span>
						<Link to={`/contactBase/${contacto.id}`}>
							<button type="button" className="btn btn-info">Visit Card!</button>
						</Link>


					</li>

				})}
				{store.contactos.map((contacto) => {
					return <li className="contact" key={contacto.id}>
						<div className="meta">
							<h3 className="name">{contacto.name}</h3>
							<p className="email">{contacto.email} </p>
						</div>
						<span className="tag">{contacto.phone}</span>
						<span className="tag">{contacto.address}</span>
						<Link to={`/contact/${contacto.id}`}>
							<button type="button" className="btn btn-info">Visit Card!</button>
						</Link>

					</li>

				})}

			</ul>
			<button type="button" className="btn btn-info" onClick={handleSaludo}>Change Language!</button>
			<h2>{store.saludoEnIngles == true ? "Hola Feyre querida!" : "Hello Feyre Darling!"}</h2>
		</div>
	);
};
