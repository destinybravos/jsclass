// let students = ['Amaka','Jude','Grace'];
// students.pop();
// students.push('Gift');
// console.log(students[0]); // Access array using indexes

// let student = {name:'Amaka', regno: '19E/0012/EE', age: 20, admitted:true}
// console.log(student.name);

// Grocery List
let ItemList = [];
document.getElementById('btnAddItem').addEventListener('click', function(){
    let item = document.getElementById('item_input').value; // Got the item from the input box
    if (item != '') {
        ItemList.push(item);
        document.getElementById('item_input').value = ''; // Clear (Empty ) the content of the input box
        displayList();
    }
});



let displayList = () => {
    let list = '';
    let array_size = ItemList.length; // Geting the size(lenght) of the array.
    for(let i = 0; i < array_size; i++){
        // list = list + '<li>' + ItemList[i] + '</li>'
        // list += '<li>' + ItemList[i] + '</li>'
        list += `<li> 
                    <span>${ItemList[i]}</span> 
                    <button class="btnEdit">Edit</button> 
                    <button class="btnDel">Trash</button> 
                </li>`;
    }
    document.getElementById('ui_list').innerHTML = list;
}