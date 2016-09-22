var _mjNs = _mjNs || {}

_mjNs.dataFetcher = (function () {
    var url = '/array'

    function fetchArray(size) {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        
        var body = {
            arrayLength: size
        }
        return fetch(url, {
            headers: headers,
            body: JSON.stringify(body),
            method: 'POST'
        })
            .then(function(response) {
                return response.json()
            })
    }

    return {
        fetchArray: fetchArray
    }
})()
