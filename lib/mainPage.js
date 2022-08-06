// cia bus viso puslapio logika

export default function renderMainPage(req, res) {
               const model = {};
               model.title = 'My To-do App';
               const notes = [
                  'Example note text',
                  'Another note',
                  'And another note'
               ];
               
               model.notes = notes;

               res.render('index', {model})
            }