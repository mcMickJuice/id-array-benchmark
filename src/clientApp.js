(function(global) {
    var dataFetcher = global._mjNs.dataFetcher;

    var select = document.getElementById.bind(document);

    var getArrayButton = select('getArray')
    var arraySizeInput = select('arraySize');

    getArrayButton.addEventListener('click', function(evt) {
        console.log('button clicked');
        var arraySize = arraySizeInput.value;

        console.log('array size of ', arraySize)

        dataFetcher.fetchArray(arraySize)
            .then(function(body) {
                console.log('array', body);
            })
    })

    function sliceArray() {

    }

    function getArrayLength() {

    }
})(window)

