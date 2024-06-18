const {TechnicianModal} = require("../models/registration")
 

const addTechnician = async (req, res) => {

    try {
        let body = req.body;
        let data=new TechnicianModal(body);
        await data.save();
        res.json({ status: true, msg: "Technician   Added" });
    } catch (err) {
        res.status(400).send(err);
    }

};

const getAllTechnician = async (req, res) => {
    try {
        let data = await TechnicianModal.find({}).sort({ _id: -1 });
        res.send(data);
    } catch (err) {
        res.status(400).send(err);
    }
}
const getTechnicianById = async (req, res) => {
    try {
        let _id = req.params.id;
        let data = await TechnicianModal.findById(_id);
        res.send(data);
    } catch (err) {
        res.status(400).send(err);
    }
}

const editTechnician = async (req, res) => {
    try {
        let _id = req.params.id;
        let body = req.body;
        let data = await TechnicianModal.findByIdAndUpdate(_id, body);
        res.json({ status: true, msg: "Technician Updated" });
    } catch (err) {
        res.status(500).send(err);
    }
}
const deleteTechnician = async (req, res) => {
    try {
        let _id = req.params.id;
        let data = await TechnicianModal.findByIdAndDelete(_id);
        res.json({ status: true, msg: "Technician Deteled" });
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = { addTechnician, getAllTechnician, getTechnicianById, editTechnician, deleteTechnician };
