// Node.js code to read JSON file
const fs = require('fs');

function readJSONFile(filename) {
    try {
        const data = fs.readFileSync(filename, 'utf8');
        return JSON(data);
    } catch (err) {
        console.error('Error reading JSON file:', err);
        throw err;
    }
}

module.exports = readJSONFile;
