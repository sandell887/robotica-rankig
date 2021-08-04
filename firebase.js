var firebaseConfig = {
    apiKey: "AIzaSyBJwjQ8GowAUtrRz8ay_bVk4Xq4sfAf_Gc",
    authDomain: "ranking-64dcf.firebaseapp.com",
    databaseURL: "https://ranking-64dcf-default-rtdb.firebaseio.com",
    projectId: "ranking-64dcf",
    storageBucket: "ranking-64dcf.appspot.com",
    messagingSenderId: "422700748618",
    appId: "1:422700748618:web:cabcf09904bf89dd42bbb3",
    measurementId: "G-FQG11S6YCE"
};

firebase.initializeApp(firebaseConfig);

let tbody = document.querySelector('#tbody')

var db = firebaseRef = firebase.database().ref("equipe").orderByChild('nota');
db.on('child_added', function (snapshot) {
    var equipe = snapshot.val();

    console.log(equipe)

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td')
    td1.innerText = equipe.nome;
    td2.innerText = equipe.nota;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.prepend(tr);
})