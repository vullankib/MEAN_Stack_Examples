import { addNewContact } from "../controllers/egController";

const routes = (app) => {
    // route for Contact
    app.route('/contact')
    .get((req,res) =>
    res.send('GET request successful!!'))
    
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