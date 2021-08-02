let sum = prompt('Pul miqdorini kiriting ')
let usd = sum / 10654
let eur = sum / 12674

let resu = Math.round(usd)
let rese = Math.round(eur)
alert(`${sum} SUM = ~ ${resu}$ USD`)
alert(`${sum} SUM = ~ ${rese}$ EUR`)

