const fs = require('fs')
const data = require('../data.json')
const {age,date,grade} = require('../utils.js')

//index
exports.index = function(req,res){
    return res.render('students/index',{ students:data.students})
}
//create
exports.create = function(req,res){
    return res.render('students/create')
}
//create POST
exports.post = function(req,res){
    const keys = Object.keys(req.body)

    for(key of keys){
        if(req.body[key] == '')
        return res.send("Please, don't let any empty fill")
    }

    birth = Date.parse(req.body.birth)

    let id = 1
    const lastStudent = data.students[data.students.length - 1]
    if(lastStudent){
        id = lastStudent.id + 1
    }

    data.students.push({
        id,
        ...req.body,
        birth,
        grade:grade(req.body.school)
    })

    fs.writeFile('data.json',JSON.stringify(data,null,2),function(err){
        if(err) return res.send('Write File error')
        return res.redirect('/students')
    })
}
//show
exports.show = function(req,res){
    const {id} = req.params
    const foundstudent = data.students.find(function(students){
        return students.id == id
    })
    if(!foundstudent) return res.send('student Not Found')

    const student = {
        ...foundstudent,
        birth:date(foundstudent.birth).birthDay
    }

    return res.render('students/show',{ student })
}
//edit
exports.edit = function(req,res){
    const {id} = req.params
    const foundstudent = data.students.find(function(student){
        return student.id == id
    })
    if(!foundstudent) return res.send('student Not Found')

    const student = {
        ...foundstudent,
        birth:date(foundstudent.birth).iso
    }
    return res.render('students/edit',{student})
}
//update
exports.put = function(req,res){
    const {id} = req.body
    let index = 0 

    const foundstudent = data.students.find(function(student, foundIndex){
        if(id == student.id){
            index = foundIndex
            return true
        }
    })
    if(!foundstudent) return res.send('student not found!')

    const student = {
        ...foundstudent,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.students[index] = student
    
    fs.writeFile('data.json',JSON.stringify(data,null,2),function(err){
        if(err)return res.send('Write File Error!')
        return res.redirect(`/students/${id}`)
    })
}
//delete
exports.delete = function(req,res){
    const {id} = req.body
    
    const filteredstudents = data.students.filter(function(student){
        return student.id != id
    })

    data.students = filteredstudents

    fs.writeFile('data.json',JSON.stringify(data,null,2),function(err){
        if(err) return res.send('Write File Error!')
    })
    return res.redirect('/students')
}