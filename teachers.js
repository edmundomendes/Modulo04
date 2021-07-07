const fs = require('fs')
const data = require('./data.json')

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