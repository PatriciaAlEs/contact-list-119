// aqui iran mis funciones que hacen llamadas a la API
const apiServices = { }
const USER = 'Calenine_Archeron' 
const API_URL = `https://playground.4geeks.com/contact/`


// funcion para crear una usuario (que irá ligado a una agenda)
apiServices.createUserAgenda = async () => {
    
}

//funcion para obtener los contactos de la agenda
apiServices.getContacts = async () => {
    try {
        const response = await fetch(`${API_URL}agendas/${USER}/contacts`);
        if (!response.ok) {
            console.warn("Agenda no encontrada, creando una nueva...");
            await apiServices.createUserAgenda();
            return []; // Retornar un array vacío si la agenda no existe y asi no da error en el front
        }  
        const data = await response.json();
        return data.contacts // 'data' es un objeto { contacts: [...] }, accedemos a su propiedad 'contacts' para obtener directamente el array, de esta forma en el front trabajamos ya con el array y podemos mapearlo
    } catch (error) {
        console.log("Error trayendo los contacts:", error); 
        throw error
    }
    
}

// funcion para agregar un contacto a la agenda
apiServices.creteContact = async () => {

}

// funcion para editar un contacto de la agenda
apiServices.editContact = async () => { 
}

// funcion para eliminar un contacto de la agenda
apiServices.deleteContact = async () => {  
}

export default apiServices;