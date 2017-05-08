var sortFileContent = require('./')

try {
    var asc = sortFileContent('example.txt')
    var desc = sortFileContent('example.txt', 'desc')

    console.log('######### Ascending #########')
    console.log(asc)
    console.log('######### Descending #########')
    console.log(desc)
} catch (error) {
    console.log(error.message)
}