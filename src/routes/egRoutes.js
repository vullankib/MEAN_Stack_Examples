import { addNewContact,getContacts } from "../controllers/egController";

const routes = (app) => {
    // route for Contact
    app.route('/contact')
    
    // GET endpoint
    .get(getContacts)
    
    // POST endpoint
    .post(addNewContact);

    // route for specific contactId
    app.route('/contact/:contactId')
    
    .put((req,res) =>
    res.send('GET request successful!!'))

    .delete((req,res)=>
    res.send('POST request successful!'));
}
export default routes;