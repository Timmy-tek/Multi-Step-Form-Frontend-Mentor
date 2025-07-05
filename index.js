const steps = document.querySelectorAll(".sideBar-menu-item-btn");

const nextBtns = document.querySelectorAll('.nextBtn');
const backBtns = document.querySelectorAll('.backBtn');

console.log(nextBtns)
const stepPage = document.querySelectorAll('.stepPage');

const notValid = document.getElementById('notValid');
const name = document.getElementById
('name').value.trim();
const validName = document.getElementById('validName');
const email = document.getElementById('email').value.trim();
const validEmail = document.getElementById('validEmail');
const phone = document.getElementById('phone').value.trim();
const validPhone = document.getElementById('validPhone');
let validatedDetails = false;

const noPickedPlan = document.getElementById('noPickedPlan');
const planScts = document.querySelectorAll('.plan-sct');
const plan = document.getElementById('plan');
const planCost = document.getElementById('planCost');

const addonSects = document.querySelectorAll('.stepThree .addon');
const addonBoxes = document.querySelectorAll('.addon input')

const noPickedAddons = document.getElementById('noPickedAddons');
const addonConfim = document.querySelectorAll('.stepFour .addons');

const change = document.getElementById('change');
const months = document.querySelectorAll('.month');
const years = document.querySelectorAll('.year');

const mntyrBtn = document.getElementById('mntyrBtn');
const mntyrBtnW = document.getElementById('mntyrBtnW');
let mntyrBtnClicked = false;

const total = document.querySelector('.total .price');
let choicePlanPrice = 0;
let onlinePrice = 0;
let storagePrice = 0;
let profilePrice = 0;

let pickedPlan = false;

let pickedAddon = false;




function validDetails() {
    const name = document.getElementById('name').value.trim(); 
    const validName = document.getElementById('validName');
    const email = document.getElementById('email').value.trim();
    const validEmail = document.getElementById('validEmail');
    const phone = document.getElementById('phone').value.trim();
    const validPhone = document.getElementById('validPhone');

    let validatedName = false;
    if (name === "") {
        validName.textContent = "Put in a Valid Name";
        validatedName = false;
    } else {
        validName.textContent = "";
        validatedName = true;
    }

    let validatedEmail = false;
    const emailPattern = /\S+@\S+\.\S+/;
    if (emailPattern.test(email)) {
        validEmail.textContent = "";
        validatedEmail = true;
    } else {
        validEmail.textContent = "Put in a valid email!";
        validatedEmail = false;
    }

    let validatedPhone = false;
    if (isNaN(Number(phone)) || phone === "") {
        validPhone.textContent = 'Put in a valid number';
        validatedPhone = false;
    } else {
        validPhone.textContent = '';
        validatedPhone = true;
    }

    validatedDetails = validatedName && validatedEmail && validatedPhone;
}

function stepOneDisplay(){
    stepPage[0].style.display = "flex"
};
function stepTwoDisplay(){
    stepPage[1].style.display = "flex"
};
function stepThreeDisplay(){
    stepPage[2].style.display = "flex"
};
function stepFourDisplay(){
    stepPage[3].style.display = "flex"
};
function stepFiveDisplay(){
    stepPage[4].style.display = "flex"
};

function notDisplay(){ 
    stepPage.forEach(step => {
      step.style.display = 'none';
    });
}

function nextBtnClicked(){
    nextBtns.forEach(nextBtn =>{
        nextBtn.classList.add('clicked');
        setTimeout(() => {
            nextBtn.classList.remove('clicked')
        }, 100);
    })
}
function backBtnClicked(){
    backBtns.forEach(backBtn =>{
        backBtn.classList.add('clicked');
        setTimeout(() => {
            backBtn.classList.remove('clicked')
        }, 100);
    })
}

function planSctsDefault(){
    pickedPlan = false;
    planScts.forEach(plan =>{
        plan.classList.remove('activeChoice')
    });
};

function addonSectsDefault(){
    addonBoxes.forEach(addonBox => {
        addonBox.checked = false;
    })
}

function displayMonth(){
    addonSectsDefault();
    planSctsDefault();
    years.forEach(year =>{
        year.style.display = 'none';
    })
    months.forEach(month =>{
        month.style.display = 'flex';
    })
}
function displayYear(){
    addonSectsDefault();
    planSctsDefault();
    months.forEach(month =>{
        month.style.display = 'none';
    })
    years.forEach(year =>{
        year.style.display = 'flex';
    })
}

function computeTotal (){
    if(mntyrBtnClicked){
        total.textContent = `+$${choicePlanPrice + onlinePrice + storagePrice + profilePrice}/yr`;
    }
    else{
        total.textContent = `+$${choicePlanPrice + onlinePrice + storagePrice + profilePrice}/mo`;
    }
}







steps.forEach(step => {
    step.addEventListener('click', () =>{
        steps.forEach(step =>
            step.classList.remove('activeStep')
        );
        step.classList.add('clicked')
        setTimeout(() => {
            step.classList.remove('clicked')
        }, 100);
        step.classList.add('activeStep')
    });
});


steps[0].addEventListener('click', ()=>{
    notDisplay();
    stepOneDisplay();
});
steps[1].addEventListener('click', ()=>{
    validDetails();
    if(validatedDetails){
        notDisplay();
        stepTwoDisplay();
        steps.forEach(step =>
            step.classList.remove('activeStep')
        );
        steps[1].classList.add('activeStep');
    }else{
        steps.forEach(step =>
            step.classList.remove('activeStep')
        );
        steps[0].classList.add('activeStep');
        notValid.style.display = 'flex';
    } 
});
steps[2].addEventListener('click', ()=>{
    validDetails();
    if(!validatedDetails){
        steps.forEach(step =>
            step.classList.remove('activeStep')
        );
        steps[0].classList.add('activeStep');
        notValid.style.display = 'flex';
    }else if(!pickedPlan){
        notDisplay();
        stepTwoDisplay();
        steps.forEach(step =>
            step.classList.remove('activeStep')
        );
        steps[1].classList.add('activeStep');
        noPickedPlan.style.display = 'flex';
    }else{
        notDisplay();
        stepThreeDisplay();
        
        steps.forEach(step =>
            step.classList.remove('activeStep')
        );
        steps[2].classList.add('activeStep');
        notValid.style.display = 'none';
        noPickedPlan.style.display = 'none';
    }

});
steps[3].addEventListener('click', ()=>{
    validDetails();
    if(!validatedDetails){
        steps.forEach(step =>
            step.classList.remove('activeStep')
        );
        steps[0].classList.add('activeStep');
        notValid.style.display = 'flex';
    }else if(!pickedPlan){
        notDisplay();
        stepTwoDisplay();
        steps.forEach(step =>
            step.classList.remove('activeStep')
        );
        steps[1].classList.add('activeStep');
        noPickedPlan.style.display = 'flex';
    }else{
        noPickedAddons.style.display = 'none';
        notValid.style.display = 'none';
        noPickedPlan.style.display = 'none';
        notDisplay();
        stepFourDisplay();
        steps.forEach(step =>
            step.classList.remove('activeStep')
        );
        steps[3].classList.add('activeStep');
    }

    if(addonBoxes[0].checked || addonBoxes[1].checked || addonBoxes[2].checked ){
        noPickedAddons.style.display = 'none';
    }else{
        noPickedAddons.style.display = 'flex';
    }
});


nextBtns[0].addEventListener('click', () =>{
    validDetails();
    nextBtnClicked();
    if(validatedDetails){
        notDisplay();
        stepTwoDisplay();
        steps.forEach(step =>
            step.classList.remove('activeStep')
        );
        steps[1].classList.add('activeStep');
        notValid.style.display = 'none';
    }else{
        steps.forEach(step =>
            step.classList.remove('activeStep')
        );
        steps[0].classList.add('activeStep');
        notValid.style.display = 'flex';
    }

})
nextBtns[1].addEventListener('click', () =>{
    if(pickedPlan){
        notDisplay();
        stepThreeDisplay();
        
        steps.forEach(step =>
            step.classList.remove('activeStep')
        );
        steps[2].classList.add('activeStep');
        noPickedPlan.style.display = 'none';
    }else{
        steps.forEach(step =>
            step.classList.remove('activeStep')
        );
        steps[1].classList.add('activeStep');
        noPickedPlan.style.display = 'flex';
    }
    nextBtnClicked();
})
nextBtns[2].addEventListener('click', () =>{
    if(addonBoxes[0].checked || addonBoxes[1].checked || addonBoxes[2].checked ){
        noPickedAddons.style.display = 'none';
    }else{
        noPickedAddons.style.display = 'flex';
    }
    nextBtnClicked();
    notDisplay();
    stepFourDisplay();
    computeTotal();

    steps.forEach(step =>
        step.classList.remove('activeStep')
    );
    steps[3].classList.add('activeStep');
    nextBtnClicked();
})
nextBtns[3].addEventListener('click', () =>{
    nextBtnClicked();
    notDisplay();
    stepFiveDisplay();

    steps.forEach(step =>
        step.classList.remove('activeStep')
    );
    steps[4].classList.add('activeStep')
})

backBtns[0].addEventListener('click', ()=>{
    backBtnClicked()
    notDisplay();
    stepOneDisplay();

    steps.forEach(step =>
        step.classList.remove('activeStep')
    );
    steps[0].classList.add('activeStep')
})
backBtns[1].addEventListener('click', ()=>{
    backBtnClicked()
    notDisplay();
    stepTwoDisplay();

    steps.forEach(step =>
        step.classList.remove('activeStep')
    );
    steps[1].classList.add('activeStep')
})
backBtns[2].addEventListener('click', ()=>{
    backBtnClicked()
    notDisplay();
    stepThreeDisplay();

    steps.forEach(step =>
        step.classList.remove('activeStep')
    );
    steps[2].classList.add('activeStep')
})


planScts[0].addEventListener('click', ()=>{
    planSctsDefault();
    pickedPlan = true;
    planScts[0].classList.add('activeChoice');
    if(mntyrBtnClicked){
        plan.textContent = "Arcade (Yearly)";
        planCost.textContent = "$90/yr";
        choicePlanPrice = 90;
    }else{
        plan.textContent = "Arcade (Monthly)";
        planCost.textContent = "$9/mo";
        choicePlanPrice = 9;
    }
});
planScts[1].addEventListener('click', ()=>{
    planSctsDefault();
    pickedPlan = true;
    planScts[1].classList.add('activeChoice');
    if(mntyrBtnClicked){
        plan.textContent = "Advanced (Yearly)";
        planCost.textContent = "$120/yr";
        choicePlanPrice = 120;
    }else{
        plan.textContent = "Advanced (Monthly)";
        planCost.textContent = "$12/mo";
        choicePlanPrice = 12;
    }
});
planScts[2].addEventListener('click', ()=>{
    planSctsDefault();
    pickedPlan = true;
    planScts[2].classList.add('activeChoice');
    if(mntyrBtnClicked){
        plan.textContent = "Pro (Yearly)";
        planCost.textContent = "$150/yr";
        choicePlanPrice = 150;
    }else{
        plan.textContent = "Pro (Monthly)";
        planCost.textContent = "$15/mo";
        choicePlanPrice = 15;
    }
});


addonSects[0].addEventListener('click', ()=>{
  if (addonBoxes[0].checked) {
    addonSects[0].classList.add('activeChoice')
    addonConfim[0].style.display = 'flex';
    if(mntyrBtnClicked){
        onlinePrice = 10;
    }else{
        onlinePrice = 1;
    }
  } else{
    addonSects[0].classList.remove('activeChoice')
    addonConfim[0].style.display = 'none';
    onlinePrice = 0;
  }
})
addonSects[1].addEventListener('click', ()=>{
  if (addonBoxes[1].checked) {
    addonSects[1].classList.add('activeChoice')
    addonConfim[1].style.display = 'flex';
    if(mntyrBtnClicked){
        storagePrice = 20;
    }else{
        storagePrice = 2;
    }
  } else{
    addonSects[1].classList.remove('activeChoice')
    addonConfim[1].style.display = 'none';
    storagePrice = 0;
  }
})
addonSects[2].addEventListener('click', ()=>{
  if (addonBoxes[2].checked) {
    addonSects[2].classList.add('activeChoice')
    addonConfim[2].style.display = 'flex';
    if(mntyrBtnClicked){
        profilePrice = 20;
    }else{
        profilePrice = 2;
    }
  } else{
    addonSects[2].classList.remove('activeChoice')
    addonConfim[2].style.display = 'none';
    profilePrice = 0;
  }
})



change.addEventListener('click', ()=>{
    notDisplay();
    stepTwoDisplay();

    steps.forEach(step =>
        step.classList.remove('activeStep')
    );
    steps[1].classList.add('activeStep');
});



mntyrBtn.addEventListener('click', () => {
    mntyrBtnClicked = !mntyrBtnClicked;
    console.log(`CLicked iss ${mntyrBtnClicked}`);
    if(mntyrBtnClicked){
        console.log('shi was clicked', mntyrBtnClicked);
        displayYear();
    }else{
        console.log('shi wasnt', mntyrBtnClicked);
        displayMonth();
    }
    mntyrBtnW.classList.toggle("switch");
    console.log("Clicked");
})