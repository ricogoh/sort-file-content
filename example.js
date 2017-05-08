var sortFileContent = require('./')

try {
    var asc = sortFileContent('README.md')
    var desc = sortFileContent('README.md', 'desc')

    console.log('######### Ascending #########')
    console.log(asc)
    console.log('######### Descending #########')
    console.log(desc)
} catch (error) {
    console.log(error.message)
}