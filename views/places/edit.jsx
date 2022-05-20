const React = require('react')
const Def = require('../default.jsx')

function edit_form(data) {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                    <div className='form-group'>
                        <label htmlFor="name">Place Name</label>
                        <input className='form-control' id='name' name='name' value={data.place.name} required />
                    </div>
                    <div className='form-group'> 
                        <label htmlFor="pic">Place Picture</label>
                        <input className='form-control' type="url" id='pic' name='pic' />
                        
                    </div>
                    <div className='form-group'>
                        <label htmlFor="city">City</label>
                        <input className='form-control' id="city" name='city' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="state">State</label>
                        <input className='form-control' id="state" name="state" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="cuisines">cuisines</label>
                        <input className='form-control' id="cuisines" name='cuisines' required />
                    </div>
                    <input className='btn btn-primary' type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form