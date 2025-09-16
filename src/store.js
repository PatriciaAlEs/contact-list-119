export const initialStore=()=>{
  return{
    agenda: "",
    contactos: [
      { id: "f1", name: "Feyre Archeron", email: "feyre@velaris.com", phone: "Corte Noche", address: "Velaris" },
      { id: "f2", name: "Rhysand", email: "rhysand@velaris.com", phone: "Alto Lord", address: "Palacio Nocturno" },
      { id: "f3", name: "Morrigan", email: "mor@velaris.com", phone: "Espía", address: "Velaris" }
    ],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){

    case 'GET_CONTACTS':
      return {
        ...store,
        contactos: action.payload
      };



    default:
      throw Error('Unknown action.');
  }    
}
