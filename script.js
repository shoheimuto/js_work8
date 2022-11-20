window.addEventListener('load', function() {
    const pullDownButton = document.getElementById("lists");

    pullDownButton.addEventListener('mouseover', function() {
        pullDownButton.setAttribute("style", "background-color:blue");
        console.log('乗った');
    
    })
    pullDownButton.addEventListener('click', function() {
        pullDownButton.setAttribute("style", "background-color:green");
        console.log('クリック');
    
    })
    pullDownButton.addEventListener('mouseout', function() {
        pullDownButton.removeAttribute("style", "background-color:red");
        console.log('離れた');
    
    })
})

