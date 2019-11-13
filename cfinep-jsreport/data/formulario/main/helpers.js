var moment = require('moment')
function formatDate(date) {
    return moment.utc(String(date)).format('DD/MM/YYYY')
}

function formatProjetoUFV(value) {
    if(value == true)
        return 'Sim'
    else
        return 'Não'
}

function formatProjetoFinanciado(value, value2) {
    if(value == true)
         return 'Sim, ' + value2 
    else
        return 'Não'
}