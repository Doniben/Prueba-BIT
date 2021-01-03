require('./database')
const app = require('./app')

app.listen(app.get('port'));
console.log('running on port ', app.get('port'));