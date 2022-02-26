// Code your solution here
function findMatching(array, string) {
    let names = array.filter(obj => obj.toLowerCase() === string.toLowerCase())
    if (names) {
        return names;
    }
}
function fuzzyMatch(array, string) {
    let names = array.filter(obj => obj.startsWith(string))
    if (names) {
        return names;
    }
}
function matchName(array, string) {
    let names = array.filter(obj => obj.name === string)
    if (names) {
        return names;
    }
}