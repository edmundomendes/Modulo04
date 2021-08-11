module.exports = {
    age(timestamp){
            const today = new Date()
            const birthDate = new Date (timestamp)

            let age = today.getFullYear() - birthDate.getFullYear()
            const month = today.getMonth() - birthDate.getMonth()

            if (month < 0 || 
                month ==0 && 
                today.getDate() < 
                birthDate.getDate()){

                age = age - 1
            }

            return age
        },
    date(timestamp){
        const date = new Date(timestamp)
        const year = date.getUTCFullYear()
        const month =`0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return{
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        } 
    },
    graduation(value){

        switch(value){
            case 'high_school':
                return "Ensino Médio Completo";
            break
            case 'college':
                return "Ensino Superior Completo";
            break
            case 'master':
                return "Mestrado";
            break
            case 'doctorate':
                return "Doutorado";
            break
        }
    },
    grade(value){

        switch(value){
            case '5EF':
                return "5º ano do ensino fundamental";
            break
            case '6EF':
                return "6º ano do ensino fundamental";
            break
            case '7EF':
                return "7º ano do ensino fundamental";
            break
            case '8EF':
                return "8º ano do ensino fundamental";
            break
            case '9EF':
                return "9º ano do ensino fundamental";
            break
            case '1EM':
                return "1º ano do ensino médio";
            break
            case '2EM':
                return "2º ano do ensino médio";
            break
            case '2EM':
                return "3º ano do ensino médio";
            break
        }
    }
}