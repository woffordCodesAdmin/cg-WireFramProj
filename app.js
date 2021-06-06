console.log($);

const addData = () =>{
    f = prompt("Flow?")
    asv = prompt("ASV Ref ID?")
    req = prompt("Requestor Email ID")
    mj_s = prompt("Major Status?")
    a2 = prompt("Assigned To?")

    $('#flow').append(`<div class="organizer">${f}</div>`)
    $('#asv').append(`<div class="organizer">${asv}</div>`)
    $('#req').append(`<div class="organizer">${req}</div>`)
    $('#mjs').append(`<div class="organizer">${mj_s}</div>`)
    $('#a2').append(`<div class="organizer">${a2}</div>`)
    $('#run').append('<button>Run</button>')
}