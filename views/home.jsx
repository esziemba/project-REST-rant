const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
            </main>
            <div>
                <img height="500px" src="/images/mikhail-vasilyev-gGC63oug3iY-unsplash.jpg" alt="bird" />
                <div>
                    Photo by <a href='https://unsplash.com/@miklevasilyev'>@miklevasilyev on Unsplash</a>
                </div>
            </div>
            <a href="/places">
                        <button className="btn-primary">Places Page</button>
                    </a>
        </Def>
    )
}

module.exports = home