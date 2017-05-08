# sort-file-content
Sort file content line ascending or descending

[![npm Package](https://img.shields.io/npm/v/sort-file-content.svg?style=flat-square)](https://www.npmjs.org/package/sort-file-content)
[![downloads per month](http://img.shields.io/npm/dm/sort-file-contenta.svg)](https://www.npmjs.org/package/sort-file-contenta)

### Installation
```
npm install --save sort-file-content
```
### Example
```javascript
var sortFileContent = require('sort-file-content')
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
```