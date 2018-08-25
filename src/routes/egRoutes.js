const routes = (app) => {
    app.route('/contact')
    
    .get((req,res) =>
    res.send('GET request successful!!'))

    .post((req,res)=>
    res.send('POST request successful!'));
}