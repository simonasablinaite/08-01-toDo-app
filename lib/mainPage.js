import mysql from 'mysql2';

// cia bus viso puslapio logika

export default function renderMainPage(req, res) {
               const newNote = req.query.note;            
               const model = {}; 
               model.title = 'My To-do App';
      
               // if(newNote) {
               //    notes.push(newNote);
               // }
               connect().execute('SELECT note FROM notes;', (err, rows => {
                  if(err) throw err;
                  const notes = rows.map(row => row.note);
                  model.notes = notes;

                  res.render('index', {model})
               })
            )
               model.notes = notes;

               res.render('index', {model})
            }

            // SELECT note FROM notes;

            function connect() {
               return mysql.createConnection({
                  host: 'localhost',
                  port: 3306,
                  user: 'toDoApp',
                  password: 'bit',
                  database: 'toDoApp'
               })
            };