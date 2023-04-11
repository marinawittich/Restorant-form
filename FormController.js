const FormModal = require('./FormModal');

module.exports.getForm = async (req, res) => {
    res.sendFile(__dirname + "/index.html")
}

module.exports.newForm = async (req, res) => {
    let newMessage = new FormModal ({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
        menu: req.body.menu,
        date: req.body.date,
        time: req.body.time,
        guests: req.body.guests,
        card: req.body.card,
        cardName: req.body.cardName,
        cardNumber: req.body.cardNumber,
        expiryDate: req.body.expiryDate
    })
    newMessage.save()
    res.sendFile(__dirname + "/Answer.html")
}