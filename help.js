function talk(){
    var know = {
    "Which crop type of cropes we have to grow from march-August" : "Follow Crop Calender",
    "What kind of pest control measures do you use?" : "Some farmers may not use pesticides on a regular basis, but only in special circumstances when there is an infestation or maybe at the beginning of the growing season.",
    "Do you provide updates on weather?" : "Yes, we provide regular updates on our website regarding weather-related farm activities.",
    "How do you ensure the quality of your store products?" : " We maintain strict quality control measures for our store products. Our team carefully selects and inspects each item to ensure it meets our high standards of freshness ",
    "What measures do you take to control pests and diseases?" : "We employ integrated pest management (IPM) techniques to control pests and diseases. This involves using natural predators, implementing crop rotation, and practicing good sanitation to minimize the use of pesticides. ",
    "Can I find seasonal products in your store? ": "Absolutely! We offer seasonal products in our store to provide you with the freshest and most flavorful options",
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    } 
    