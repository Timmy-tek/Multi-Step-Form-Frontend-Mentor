const steps = document.querySelectorAll(".sideBar-menu-item-btn");

const nextBtns = document.querySelectorAll('.nextBtn');
const backBtns = document.querySelectorAll('.backBtn');

console.log(nextBtns)
const stepPage = document.querySelectorAll('.stepPage');

const planScts = document.querySelectorAll('.plan-sct');

const plan = document.getElementById('plan');
const planCost = document.getElementById('planCost');

const addonSects = document.querySelectorAll('.stepThree .addon');
const addonBoxes = document.querySelectorAll('.addon input')

const addonConfim = document.querySelectorAll('.stepFour .addons')

const online = document.getElementById('online');
const larger = document.getElementById('larger');
const profile = document.getElementById('profile');

const change = document.getElementById('change');
const months = document.querySelectorAll('.month');
const years = document.querySelectorAll('.year');

const mntyrBtn = document.getElementById('mntyrBtn');
const mntyrBtnW = document.getElementById('mntyrBtnW');
let mntyrBtnClicked = false;

let total = document.querySelector('.total .price');
let choicePrice = 0;
let addonPrice = 0;


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

function planSctsDefault(){
    planScts.forEach(plan =>{
        plan.classList.remove('activeChoice')
    });
};

function nextBtnClicked(){
    nextBtns.forEach(nextBtn =>{
        nextBtn.classList.add('clicked')
    })
}
function backBtnClicked(){
    backBtns.forEach(backBtn =>{
        backBtn.classList.add('clicked')
    })
}



planScts[0].addEventListener('click', ()=>{
    planSctsDefault();
    planScts[0].classList.add('activeChoice');
    if(mntyrBtnClicked){
        plan.textContent = "Arcade (Yearly)";
        planCost.textContent = "$90/yr";
    }else{
        plan.textContent = "Arcade (Monthly)";
        planCost.textContent = "$9/mo";
    }
});
planScts[1].addEventListener('click', ()=>{
    planSctsDefault();
    planScts[1].classList.add('activeChoice');
    if(mntyrBtnClicked){
        plan.textContent = "Advanced (Yearly)";
        planCost.textContent = "$120/yr";
    }else{
        plan.textContent = "Advanced (Monthly)";
        planCost.textContent = "$12/mo";
    }
});
planScts[2].addEventListener('click', ()=>{
    planSctsDefault();
    planScts[2].classList.add('activeChoice');
    if(mntyrBtnClicked){
        plan.textContent = "Pro (Yearly)";
        planCost.textContent = "$150/yr";
    }else{
        plan.textContent = "Pro (Monthly)";
        planCost.textContent = "$15/mo";
    }
});

console.log(total)


addonSects[0].addEventListener('click', ()=>{
  if (addonBoxes[0].checked) {
    addonSects[0].classList.add('activeChoice')
    addonConfim[0].style.display = 'flex';
  } else{
    addonSects[0].classList.remove('activeChoice')
    addonConfim[0].style.display = 'none'
  }
})
addonSects[1].addEventListener('click', ()=>{
  if (addonBoxes[1].checked) {
    addonSects[1].classList.add('activeChoice')
    addonConfim[1].style.display = 'flex';
  } else{
    addonSects[1].classList.remove('activeChoice')
    addonConfim[1].style.display = 'none';
  }
})
addonSects[2].addEventListener('click', ()=>{
  if (addonBoxes[2].checked) {
    addonSects[2].classList.add('activeChoice')
    addonConfim[2].style.display = 'flex';
  } else{
    addonSects[2].classList.remove('activeChoice')
    addonConfim[2].style.display = 'none';
  }
})



steps.forEach(step => {
    step.addEventListener('click', () =>{
        steps.forEach(step =>
            step.classList.remove('activeStep')
        );
        step.classList.add('activeStep')
    });
});


steps[0].addEventListener('click', ()=>{
    notDisplay();
    stepOneDisplay();
});
steps[1].addEventListener('click', ()=>{
    notDisplay();
    stepTwoDisplay();
});
steps[2].addEventListener('click', ()=>{
    notDisplay();
    stepThreeDisplay();
});
steps[3].addEventListener('click', ()=>{
    notDisplay();
    stepFourDisplay();
});


nextBtns[0].addEventListener('click', () =>{
    nextBtnClicked();
    notDisplay();
    stepTwoDisplay();

    steps.forEach(step =>
        step.classList.remove('activeStep')
    );
    steps[1].classList.add('activeStep')
})
nextBtns[1].addEventListener('click', () =>{
    nextBtnClicked();
    notDisplay();
    stepThreeDisplay();

    steps.forEach(step =>
        step.classList.remove('activeStep')
    );
    steps[2].classList.add('activeStep')
})
nextBtns[2].addEventListener('click', () =>{
    nextBtnClicked();
    notDisplay();
    stepFourDisplay();

    steps.forEach(step =>
        step.classList.remove('activeStep')
    );
    steps[3].classList.add('activeStep')
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

change.addEventListener('click', ()=>{
    notDisplay();
    stepTwoDisplay();

    steps.forEach(step =>
        step.classList.remove('activeStep')
    );
    steps[1].classList.add('activeStep');
});

function displayMonth(){
    planSctsDefault();
    years.forEach(year =>{
        year.style.display = 'none';
    })
    months.forEach(month =>{
        month.style.display = 'flex';
    })
}
function displayYear(){
    planSctsDefault();
    months.forEach(month =>{
        month.style.display = 'none';
    })
    years.forEach(year =>{
        year.style.display = 'flex';
    })
}




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