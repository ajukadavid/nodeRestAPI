const express = require('express')

const app = express()

const port = 3000

let movies = [
    {
        id: '1',
        title: 'Inception',
        director: 'Christopher Nolan',
        release_date: '2010-07-16'
    },
    {
        id: '2',
        title: 'The irishman',
        director: 'Martin Scorsese',
        release_date: '2019-09-27'
    }
]

//get the movie list in form of JSON

app.get('/movies', (req, res) => {
    res.json(movies)
})

//set the server to listen at port
app.listen(port, () => console.log(`Server listening at port ${port}`))