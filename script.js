
let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
let snoInput = document.querySelector('#sno');
let first_nameInput = document.querySelector('#first_name');
let last_nameInput = document.querySelector('#last_name');
let cityInput = document.querySelector('#city');
let countryInput = document.querySelector('#country');
btnAdd.addEventListener('click', () => {
    let sno = snoInput.value;
    let first_name = first_nameInput.value;
    let last_name = last_nameInput.value;
    let city = cityInput.value;
    let country = countryInput.value;
    let template = `
                <tr>
                    <td>${sno}</td>
                    <td>${first_name}</td>
                    <td>${last_name}</td>
                    <td>${city}</td>
                    <td>${country}</td>
                </tr>`;
    table.innerHTML += template;
});


function myFunction(){
    
    var sno = document.getElementById('sno').value;
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;

    
    var table = `<tr>
                   <td>${sno}</td>
                   <td>${first_name}</td>
                   <td>${last_name}</td>
                   <td>${city}</td>
                   <td>${country}</td>
                   </tr>`;
        document.getElementById('tbl').innerHTML += table;           

    // var table = document.getElementById("row");
    // var row = table.insertRow(1);
    // row.insertCell(0).text=''
    // row.insertCell(1).text= ''   
    // row.insertCell(2).text = ''
    // row.insertCell(3).text = ''
    // row.insertCell(4).text = ''
  

}