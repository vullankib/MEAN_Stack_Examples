import { addNewContact,getContacts, getContactWithID, updateContact,deleteContact } from "../controllers/egController";

const routes = (app) => {
    // route for Contact
    app.route('/contact')
    
    // GET endpoint
    .get(getContacts)
    
    // POST endpoint
    .post(addNewContact);

    // route for specific contactId
    app.route('/contact/:contactId')
    // GET contact with ID
    .get(getContactWithID)

    .put(updateContact)

    .delete(deleteContact);
}
export default routes;