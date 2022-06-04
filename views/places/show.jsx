const React = require('react')
const Def = require('../default')

function show(data) {
  let comments = (
    <h3 className='inactive'>
      No Comments yet!
    </h3>
  )
  if (data,data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 🥰'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
  )}
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <img src={data.place.pic} alt={data.place.name} width="400" height="400" />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <h2>Rating</h2>
            {rating}
            <h2>
              Description
            </h2>
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
            <div>
              <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                Edit
              </a>
              <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <h2>Comments</h2>
          <a href={`/places/${data.place.id}/rant`}>
            Add a comment
          </a>
          {comments}
        </div>
      </main>
    </Def>

  )
}

module.exports = show