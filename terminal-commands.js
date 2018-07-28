const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file}`
    }, '')
    console.log(filesToString);
  });
}

module.exports.touch = () => {
  fs.writeFile('new-file.txt', 'New file was created.', 'utf-8', (err) => {
    if (err) throw err;
    console.log('New file created: new-file.txt')
  })
};

module.exports.mkdir = () => {
  fs.mkdir('./new-directory', (err) => {
    if (err) throw err;
    console.log('New directory created: ./new-directory')
  })
}
