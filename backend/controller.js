const {student} = require('./schema')

module.exports.create = async (req, res) => {
    const alreadystudent = await student.findOne({rollno: req.body.rollno})
    if(alreadystudent){
        return res.send('Student already exists')
    }
    console.log(req.body)
    const n = new student(req.body)
    await n.save()
    return res.send('Saved!')
}

module.exports.read = async (req, res) => {
    console.log(req.body)
    const findstudent = await student.findOne({rollno: req.body.rollno})
    if(findstudent) {
        console.log(findstudent)
        return res.send(findstudent)
    }
    return res.send('No Student Found!')
}

module.exports.update = async (req, res) => {
    const {rollno, details} = req.body
    const studentupdate = await student.findOneAndUpdate({rollno}, details)
    console.log(studentupdate)
    if(!studentupdate) {
        return res.send('Student not exists')
    }
    return res.send('Student updated')
}

module.exports.deletestud = async(req,res) => {
    const {rollno} = req.body
    const deletestudent = await student.deleteOne({rollno})
    console.log(deletestudent)
    return res.send(deletestudent)
}