const fs = require('fs')
const data = require('./data.json')
const {age,date,graduation} = require('./utils.js')

//create
exports.post = function(req,res){
    const keys = Object.keys(req.body)

    for(key of keys){
        if(req.body[key] == '')
        return res.send("Please, don't let any empty fill")
    }

    let {avatar_url,name,birth,education_level,location,ocupation} = req.body

    birth = Date.parse(birth)
    const id = Number(data.teachers.length + 1)

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        education_level,
        ocupation,
        location
    })

    fs.writeFile('data.json',JSON.stringify(data,null,2),function(err){
        if(err) return res.send('Write File error')
        return res.redirect('/teachers')
    })
}

//show
exports.show = function(req,res){
    const {id} = req.params
    const foundTeacher = data.teachers.find(function(teachers){
        return teachers.id == id
    })
    if(!foundTeacher) return res.send('Teacher Not Found')

    const teacher = {
        ...foundTeacher,
        graduation:graduation(foundTeacher.education_level),
        age:age(foundTeacher.birth),
        ocupation:foundTeacher.ocupation.split(','),
        created_at:new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at),
    }

    return res.render('teachers/show',{ teacher })
}

//edit
exports.edit = function(req,res){
    const {id} = req.params
    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })
    if(!foundTeacher) return res.send('Teacher Not Found')

    const teacher = {
        ...foundTeacher,
        birth:date(foundTeacher.birth)
    }
    return res.render('teachers/edit',{teacher})
}