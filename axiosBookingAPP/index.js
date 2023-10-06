//Fetch data from crudcrud when the page loads
window.addEventListener('load', () => {
    fetchDataFromCrudCrud();
});

const fetchDataFromCrudCrud = () => {
    axios.get("https://crudcrud.com/api/5a686f9ce74446b58cf80cf3780ae54c/appointmentData")
    .then((res) => {

        for(var i=0;i<res.data.length;i++){
            showUserOnScreen(res.data[i])           
        }
    })
    .catch((err) => {
        console.log(err);
    })
}


function crudcrudoperation(event){
    event.preventDefault();
    const name =event.target.username.value;
    const email=event.target.emailId.value;
    const phone=event.target.phone.value;

    const obj={
         name,
        email,
        phone
    }

    axios.post("https://crudcrud.com/api/5a686f9ce74446b58cf80cf3780ae54c/appointmentData",obj)
        .then((res) => {
           showUserOnScreen(res.data)
        })
        .catch((err) => {
            console.log(err);
        })

    }

   

    function showUserOnScreen(obj){

    const parentElem =document.getElementById('ul1')
    const childElem = document.createElement('li')
    childElem.textContent=`${obj.name} ${obj.email} ${obj.phone}`
    parentElem.appendChild(childElem)

    const deletebtn=document.createElement('input')
    deletebtn.value='Delete';
    deletebtn.type= 'button';
    deletebtn.addEventListener('click', ()=>{
        //Handle delete action
        parentElem.removeChild(childElem);
        deleteDataFromCrudCrud(obj._id);
    });
    
    const editbtn=document.createElement('input')
    editbtn.type='button'
    editbtn.value='Edit'
    editbtn.addEventListener('click',()=>{
        //Handle edit action here
        parentElem.removeChild(childElem)
        deleteDataFromCrudCrud(obj._id);
        document.getElementById('userNameInputTag').value=obj.name
        document.getElementById('emailInputTag').value =obj.email
        document.getElementById('phoneInputTag').value=obj.phone
        parentElem.removeChild(childElem);
        editDataFromCrudCrud(obj._id);
    });
    childElem.appendChild(deletebtn)
    childElem.appendChild(editbtn)
    parentElem.appendChild(childElem)
}

function deleteDataFromCrudCrud(id) {
    axios.delete(`https://crudcrud.com/api/5a686f9ce74446b58cf80cf3780ae54c/appointmentData/${id}`)
        .catch((err) => {
            console.log(err);
        });
    }

function editDataFromCrudCrud(id){
    const updateName = document.getElementById('userNameInputTag').value;
    const updateEmail = document.getElementById('emailInputTag').value;
    const updatePhone =document.getElementById("phoneInputTag").value;

    const updateObj = {
        name : updateName,
        email: updateEmail,
        phone: updatePhone
    };

    axios.put(`https://crudcrud.com/api/5a686f9ce74446b58cf80cf3780ae54c/appointmentData/${id}`,)
    .then( (res) => {
        showUserOnScreen(res.data);
    })
    .catch( (err) => {
        console.log(err);
    });
}