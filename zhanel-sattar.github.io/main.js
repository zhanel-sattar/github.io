document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault()
    const form = this
    alert('Your name is: ' + form.elements[0].value + '\n' + 'Your comment: ' + form.elements[1].value)
})