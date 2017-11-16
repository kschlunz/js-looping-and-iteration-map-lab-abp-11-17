// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map(function(e){
    return e.toLowerCase()
  })
}

function nameToAttributes(names){
  return names.map(function(name){
    let fName=name.split(" ")[0]
    let lName=name.split(" ")[1]
    return {firstName: fName, lastName: lName}

  })
}

function attributesToPhrase(names, hometowns){
  return names.map(function(name,hometown){
     let fName= name
     let fHometown=hometown
     return {NAME: fname, HOMETOWN:fHometown}
  })

  return `${name} is from ${hometown}`
}
