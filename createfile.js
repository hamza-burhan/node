const {writeFileSync} = require('fs')


for(let i=0; i<=10000; i++){
    const text = writeFileSync('./assets/file.txt',`hello world${i}\n `, {flag: 'a'})
}