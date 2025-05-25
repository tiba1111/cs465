/* GET Homepage */

const travel =(req, res) => {
res.render('travel', { title: 'Travlr Getaways', trips});
};

module.exports = {
   travel   
};