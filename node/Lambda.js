/* Quick utils for lambda function */

module.exports.success = ( payload, message, cors ) => {
    
    console.log('Request success!', { payload, message, cors })

    return {
        statusCode : 200,
        headers: cors && {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
			'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
			'Access-Control-Allow-Credentials': true,
		},
        body : JSON.stringify(
            message ? { message, payload } : payload
        )
    }
}

module.exports.failure = ( code, message, cors ) => {
    
    console.log('Request failed!', { code, message, cors })

    return {
        statusCode : code,
        headers: cors && {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
			'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
			'Access-Control-Allow-Credentials': true,
		},
        body : JSON.stringify({message})
    }
}