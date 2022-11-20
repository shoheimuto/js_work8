window.addEventListener('load', function() {
    const pullDownButton = document.getElementById("lists");

    pullDownButton.addEventListener('mouseover', function() {
        console.log('乗った');
    
    })
    pullDownButton.addEventListener('click', function() {
        console.log('クリック');
    
    })
    pullDownButton.addEventListener('mouseout', function() {
        console.log('離れた');
    
    })
})

