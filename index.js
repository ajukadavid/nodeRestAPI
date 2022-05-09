const express = require('express')

const app = express()

const port = 3000

//parse JSON using express

app.use(express.json())
app.use(express.urlencoded({extended: false}))

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

app.get('/movie', (req, res) => {
    res.json(movies)
})

//add movie to list

app.post('/movie', (req, res) => {
    const movie = req.body
    console.log(movie)
    movies.push(movie)
    res.send('Movie is added to the list!')
})
//set the server to listen at port
app.listen(port, () => console.log(`Server listening at port ${port}`))