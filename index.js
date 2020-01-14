// Code your solution here
function findMatching(array, name){
    
    return array.filter(driver => {return driver.toUpperCase() === name.toUpperCase()})
    
}


function fuzzyMatch(array, string){
    return array.filter(driver => {return driver.toLowerCase().indexOf(string.toLowerCase()) === 0})
} 


function matchName(array, string){
    return array.filter(driver => {return driver.name === string})
}