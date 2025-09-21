// aqui iran mis funciones que hacen llamadas a la API
const apiServices = {}
const USER = 'Calenine_Archeron'
const API_URL = `https://playground.4geeks.com/contact/`


// funcion para crear una usuario (que irá ligado a una agenda)
apiServices.createUserAgenda = (slug) => {
    return fetch(`${API_URL}agendas/${slug}`, { method: "POST" })
        .then((resp) => {
            if (resp.ok) {
                console.log("Agenda creada con exito--->", resp);
                return true};
            return resp.json().then((data) => {
                if (data?.detail?.includes("already exists")) {
                    console.log("Agenda ya existente.");
                    return true;
                }
                console.log("No se pudo crear agenda:", data);
                return false;
            });
        })
        .catch((error) => {
            console.warn("Error creando agenda:", error);
            return false;
        });
};


//funcion para obtener los contactos de la agenda
// apiServices.getContacts = async () => {
//     try {
//         const response = await fetch(`${API_URL}agendas/${USER}/contacts`);
//         if (!response.ok) {
//             console.warn("Agenda no encontrada, creando una nueva...");
//             await apiServices.createUserAgenda();
//             return []; // Retornar un array vacío si la agenda no existe y asi no da error en el front
//         }  
//         const data = await response.json();
//         return data.contacts // 'data' es un objeto { contacts: [...] }, accedemos a su propiedad 'contacts' para obtener directamente el array, de esta forma en el front trabajamos ya con el array y podemos mapearlo
//     } catch (error) {
//         console.log("Error trayendo los contacts:", error); 
//         throw error
//     }

// }

apiServices.getContacts = (slug) => {
    return fetch(`${API_URL}agendas/${USER}/contacts`)
        .then((resp) => {
            if (resp.status === 404) {
                console.info("Agenda no encontrada, creando…");
                return apiServices.createUserAgenda(USER).then(() => []);
            }
            if (!resp.ok) {
                console.warn("GET contacts not work:", resp.status);
                return [];
            }
            return resp.json();
        })
        .then((data) => {
            return data.contacts || [];  // aseguramos un array
        })
        .catch((error) => {
            console.warn("Error trayendo contactos:", error);
            return [];
        });
};



// funcion para agregar un contacto a la agenda
apiServices.creteContact = async () => {
    return fetch(`${API_URL}agendas/${USER}/contacts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    })
        .then(response => response.json() || [])
        .then(data => {
            console.log('Contacto creado:', data);
            return data.contacts || [];
        })
        .catch(error => {
            console.error('Error creando contacto:', error);
            throw error;
        });
}

// funcion para editar un contacto de la agenda
apiServices.editContact = async () => {
}

// funcion para eliminar un contacto de la agenda
apiServices.deleteContact = async () => {
}

export default apiServices;