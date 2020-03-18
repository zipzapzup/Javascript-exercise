// Re-creating HTTP API using Fetch API

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getText);
document.getElementById('button3').addEventListener('click', getText);


function getText() {
    fetch('test1.txt')
        .then(function(res){
            return res.text();

        })
        .then(function(data){
            console.log(data);
        })
        .catch(function(err){
            console.log(err);
        });
}