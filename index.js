
document.getElementById('btn').addEventListener('click', function(){
    const colors = ["red","blue","pink","violet","coral","yellow","orange","orangered"];
    const number = Math.floor(Math.random() * colors.length);
    document.getElementById('inner').style.background = colors[number];

});