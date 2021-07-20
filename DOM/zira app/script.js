let TC = document.querySelector(".ticket-container");
let allFilters = document.querySelectorAll(".filter")

let alltasks = localStorage.getItem("alltasks");


if (alltasks != null) {
    alltasks = JSON.parse(alltasks);
    for (let i = 0; i < alltasks.length; i++) {
        let ticket = document.createElement("div");
        ticket.classList.add("ticket");

        ticket.innerHTML = ` <div class="ticket-color ticket-color-${alltasks[i].priority}"></div>
                             <div class="ticket-id">#${alltasks[i].ticketId}</div>
                            <div class="task">${alltasks[i].task}</div>`;
        
        ticket.addEventListener("click", function (e) {
            if (e.currentTarget.classList.contains("active")) {
                e.currentTarget.classList.remove("active");
            } else {
                e.currentTarget.classList.add("active");
            }
        });
    }
}
// for (let i = 0; i < allFilters.length; i++) {
//     allFilters[i].addEventListener("click", filterHandler)
// }

// function filterHandler(e) {
//     //  let filtercolor=e.currentTarget.children[0].classList[0].split("-")[0];
//     let span = e.currentTarget.children[0]; /*it finds span onluy */
//     let style = getComputedStyle(span); /* getComputedStyle:- it will give all the CSS of element */
//     // console.log(style.backgroundColor);
//     TC.style.backgroundColor = style.backgroundColor;
// }
let addbtn = document.querySelector(".add");
let deletebtn = document.querySelector(".delete")
deletebtn.addEventListener("click", function (e) {
    let selectedTickets = document.querySelectorAll(".ticket.active");
    let alltasks = JSON.parse(localStorage.getItem("alltasks"));
    for (let i = 0; i < selectedTickets.length; i++) {
        selectedTickets[i].remove();
        let tickedID = selectedTickets[i].querySelector(".ticket-id").innerText;
        console.log(tickedID);
        alltasks = alltasks.filter(function (data) {
            return (("#" + data.ticketId) != tickedID);
        });
    }
    localStorage.setItem("alltasks", JSON.stringify(alltasks));
});

addbtn.addEventListener("click", showModal);
let modelvisible;

function showModal(e) {
    if (!modelvisible) {
        let modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = ` 
        <div class="task-to-be-added" data-typed="false" contenteditable="">Enter Text Here</div>
        <div class="modal-priority-list">
           
                <div class="modal-pink-filter modal-filter active"></div>
                <div class="modal-green-filter modal-filter"></div>
                <div class="modal-blue-filter modal-filter"></div>
                <div class="modal-black-filter modal-filter"></div>
             
        </div>
    `
        TC.appendChild(modal);
        // TC.innerHTML = TC.innerHTML + modal;
        let taskmodal = document.querySelector(".task-to-be-added");
        taskmodal.addEventListener("click", function (e) {
            if (e.currentTarget.getAttribute("data-typed") == "false") {
                e.currentTarget.innerText = "";
                e.currentTarget.setAttribute("data-typed", true);
            }
        });
        taskmodal.addEventListener("keypress", addTicket.bind(this, taskmodal))
        modelvisible = true;
        selectedPriority = "pink" //by default
        let modalfilters = document.querySelectorAll(".modal-filter");
        for (let i = 0; i < modalfilters.length; i++) {
            modalfilters[i].addEventListener("click", selectPriority.bind(this, taskmodal));
        }
    }


}

function selectPriority(taskmodal, e) {
    let activefilter = document.querySelector(".modal-filter.active");
    activefilter.classList.remove("active");
    selectedPriority = e.currentTarget.classList[0].split("-")[1];
    e.currentTarget.classList.add("active");
    taskmodal.click();
    taskmodal.focus();
}

function addTicket(taskmodal, e) {
    if (e.key == "Enter" && e.shiftKey == false && taskmodal.innerText.trim() != "") {
        let task = taskmodal.innerText;
        let id = uid();
        let ticket = document.createElement("div");
        ticket.classList.add("ticket");

        ticket.innerHTML = ` <div class="ticket-color ticket-color-${selectedPriority}"></div>
                             <div class="ticket-id">#${id}</div>
                            <div class="task">${task}</div>`;
        document.querySelector(".modal").remove();
        modelvisible = false;
        TC.appendChild(ticket)
        ticket.addEventListener("click", function (e) {
            if (e.currentTarget.classList.contains("active")) {
                e.currentTarget.classList.remove("active");
            } else {
                e.currentTarget.classList.add("active");
            }
        });
        let alltasks = localStorage.getItem("alltasks");
        if (alltasks == null) {
            let data = [{
                "ticketid": id,
                "task": task,
                "priority": selectedPriority
            }];
            localStorage.setItem("alltasks", JSON.stringify(data));
        } else {
            let data = JSON.parse(alltasks);
            data.push({
                "ticketId": id,
                "task": task,
                "priority": selectedPriority
            });
            localStorage.setItem("alltasks", JSON.stringify(data));
        }
    } else if (e.key == "Enter" && e.shiftKey == false) {
        e.preventDefault();
        alert("Error! you have not type anything in task.")
    }
}

 
 

// FILTER DIV SELECTOR for tickets 
let colorDiv = document.querySelectorAll(".filter");
for (let i = 0; i < colorDiv.length; i++) {
    colorDiv[i].addEventListener("click", AddTickes);
    colorDiv[i].addEventListener("click", function(e){
        
        e.currentTarget.classList.add("hoverstop"); 
        for(let j=0;j<colorDiv.length;j++){
            if(j!=i){
                colorDiv[j].classList.remove("hoverstop");  
            }
        } 
    });
   

}

function AddTickes(e) {
    let spanclass = e.currentTarget.querySelector(".clr");

    let color = spanclass.classList[0].split("-")[0];
    let selectedtasks = alltasks.filter(function (data) {
        return (data.priority) == color;
    });
    showSelectedTickets(selectedtasks);
}

function showSelectedTickets(selectedtasks) {
    TC.innerHTML = "";
    for (let i = 0; i < selectedtasks.length; i++) {
        let ticket = document.createElement("div");
        ticket.classList.add("ticket");

        ticket.innerHTML = ` <div class="ticket-color ticket-color-${selectedtasks[i].priority}"></div>
                             <div class="ticket-id">#${selectedtasks[i].ticketId}</div>
                            <div class="task">${selectedtasks[i].task}</div>`;
        TC.appendChild(ticket)
        ticket.addEventListener("click", function (e) {
            if (e.currentTarget.classList.contains("active")) {
                e.currentTarget.classList.remove("active");
            } else {
                e.currentTarget.classList.add("active");
            }
        });
    }

}
// function spothover(e){
//     e.currentTarget.classList.add("hoverstop");
//     let click=document.querySelectorAll(".filter");
//     for(let i=0;i<click.length;i++){
//         if(click[0].classList.contains("hoverstop")){
//             click[0].classList.remove("hoverstop");
//         }else{
//             click[0].classList.add("hoverstop");
//         }
//     }
    
// }