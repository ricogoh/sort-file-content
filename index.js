var fs = require('fs')
var ascending = require('sort-asc');
var descending = require('sort-desc');

/**
 * Sort file content line order ascending or descending
 */
module.exports = sortFileContent

/**
 * Sort file content
 * @param {string} file File name and path
 * @param {string} order asc or desc
 * @return {array} sorted array
 */
function sortFileContent(file, order = 'asc') {
    fileExists(file)

    // read content from file
    var content = readFile(file)
        .replace(/\r\n/g, '\n')
        .replace(/[\n]{2,}/g, '\n')
        .trim()

    // split content to array then sort it
    let sorted = content.split('\n')

    if (order === 'desc') {
        sorted.sort(descending)
    } else {
        sorted.sort(ascending)
    }

    // join sorted array to string before return
    return sorted.join('\n')
}

/**
 * Read file and return content
 */
function readFile(file) {
    return fs.readFileSync(file, 'utf8')
}

/**
 * Check file exists
 */
function fileExists(file) {
    fs.open(file, 'r', (err, fd) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return
            }

            throw err
        }
    })
}