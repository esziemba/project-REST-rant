const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
            <div>
                <img height="900px" src="/images/marc-schaefer-LLCaj1W6EFo-unsplash.jpg" alt="Toilet" />
                <div>
                Photo by <a href='https://unsplash.com/@marcschaefer'>@marcschaefer on Unsplash</a>
                </div>
            </div>
        </Def>
    )
}



module.exports = error404