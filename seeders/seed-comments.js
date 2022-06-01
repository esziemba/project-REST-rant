const db = require('../models')

// to use await, we need an async function
async function seed() {
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })
    place.comments.push(comment.id)
    console.log(await place.save())
    process.exit()
}

seed()