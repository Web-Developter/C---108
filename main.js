function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ojAW0-31c/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error) {
     console.error("error");
    }
 else {
     console.log("Got result");
     random_number_r = Math.floor(Math.random() * 255) + 1;
     random_number_g = Math.floor(Math.random() * 255) + 1;
     random_number_b = Math.floor(Math.random() * 255) + 1;
 
     document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
     document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2)+"%";
     document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
     document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
 
     dog = document.getElementById('dog_still');
     cat = document.getElementById('cat_still');
     lion = document.getElementById('lion_still');
     wolf = document.getElementById('wolf_still');
 
     if (results[0].label == "Dog Barking") {
         dog.src = 'Dog_barking.gif';
         cat.src = 'BLANK.jpg';
         lion.src = 'BLANK.jpg';
         wolf.src = 'BLANK.jpg';
     }
     else if (results[0].label == "Cat Meowing") {
        dog.src = 'BLANK.jpg';
        cat.src = 'Cat_meowing.gif';
        lion.src = 'BLANK.jpg';
        wolf.src = 'BLANK.jpg';
     }
     else if (results[0].label == "Lion roaring") {
        dog.src = 'BLANK.jpg';
        cat.src = 'BLANK.jpg';
        lion.src = 'Lion_roaring.gif';
        wolf.src = 'BLANK.jpg';
     }
     else if (results[0].label == "Wolf Howling") {
        dog.src = 'BLANK.jpg';
        cat.src = 'BLANK.jpg';
        lion.src = 'BLANK.jpg';
        wolf.src = 'Wolf_howling.gif';
     }
 }
 }
 