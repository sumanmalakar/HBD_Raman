
const myForm = document.querySelector('#channel-form');
const nameInput = document.querySelector('#name');
const name1 = "yes"
const name2 = "Yes"
const name3 = "No"
const name4 = "no"

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

        
        if (nameInput.value === name1 || nameInput.value === name2) {

            // alert('please enter field');
            // msg.classList.add('error');
        // msg.innerHTML = 'OK Good';
            // window.location.assign("https://www.youtube.com/")
            window.location.assign("/ajax.html")
            
            // setTimeout(() => msg.remove(), 3000
            
            // );
            nameInput.value = '';
            
        }
        else if (nameInput.value === name3 || nameInput.value === name4) {
            // msg.classList.add('error');
            // msg.innerHTML = 'Please enter the fields';
            window.location.assign("/nikal.html")
            // window.location.assign("/ajax.html")
        // setTimeout(() => msg.remove(), 3000
        // );
        nameInput.value = '';

    }
    else if (nameInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter the fields';
        
        // setTimeout(() => msg.remove(), 3000
        
        // );
        nameInput.value = '';

    }
    else {
        
        msg.classList.add('error');
        msg.innerHTML = 'Abe yes or No bol';
        
        setTimeout(() => msg.remove(), 3000

        );


        //clear the feilds
        nameInput.value = '';
       
    }}