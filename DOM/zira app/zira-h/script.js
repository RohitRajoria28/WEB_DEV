let TC = $(".ticket-container");
let allFilters = $(".filter");
let modalVisible = false;

function loadTTickets(color) {
    let allTasks = localStorage.getItem("allTasks");
    if (allTasks != null) {
        allTasks = JSON.parse(allTasks);
        if (color) {
            allTasks = allTasks.filter(function (data) {
                return data.priority == color;
            })
        }
        for (let i = 0; i < allTasks.length; i++) {
            let ticket = $("<div></div>");
            ticket.addClass("ticket")
            ticket.html(
                ticket.innerHTML = `<div class="ticket-color ticket-color-${allTasks[i].priority}"></div>
                                <div class="ticket-id">#${allTasks[i].ticketId}</div>
                                <div class="task">${allTasks[i].task}</div>`);

            TC.append(ticket);
            ticket.click(() => {
                $(this).toggleClass(".active");
            })

        }
    }
}

loadTTickets();

for (let i = 0; i < allFilters.length; i++) {
    allFilters[i].click(filterHandler);
    // allFilters[i].addEventListener("click", filterHandler);
}

function filterHandler(e) {
    TC.empty();
    if ($(this).contains("active")) {
        $(this).removeClass("active");
        loadTTickets();
    } else {
        let activeFIlter = $(".filter.active");
        if (activeFIlter) {
            activeFIlter.removeClass("active");
        }
        $(this).addClass("active");
        ticketPriority =  e.currentTarget.children[0].classList[0].split("-")[0];
        loadTTickets(ticketPriority);
    }

//    else {
//         let activeFIlter = document.querySelector(".filter.active");
//         if (activeFIlter) {
//             activeFIlter.classList.remove("active");
//         }
//         e.currentTarget.classList.add("active");
//         let ticketPriority = e.currentTarget.children[0].classList[0].split("-")[0];
//         loadTTickets(ticketPriority);
//     }
}
let addBtn = $(".add");
let deleteBtn = $(".delete");

deleteBtn.click(() => {
    let selectedTickets = $(".ticket.active");
    let allTasks = JSON.parse(localStorage.getItem("allTasks"));
    for (let i = 0; i < selectedTickets.length; i++) {
        selectedTickets[i].remove();
        let ticketID = selectedTickets[i].$(".ticket-id").text();
        allTasks = allTasks.filter(function (data) {
            return (("#" + data.ticketId) != ticketID);
        });
    }
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
})
addBtn.click(showModal);

let selectedPriority;

function showModal(e) {
    if (!modalVisible) {
        let modal = $("<div></div>");
        modal.addClass("modal");
        modal.html(`<div class="task-to-be-added" data-typed="false" contenteditable="true">Enter your task here</div>
        <div class="modal-priority-list">
            <div class="modal-pink-filter modal-filter active"></div>
            <div class="modal-blue-filter modal-filter"></div>
            <div class="modal-green-filter  modal-filter"></div>
            <div class="modal-yellow-filter  modal-filter"></div>
        </div>`);
        TC.append(modal);
        modalVisible = true;
        let taskModal = $(".task-to-be-added");
        taskModal.click(() => {
            if ($(this).attr("data-typed", "false")) {
                $(this).empty();
                $(this).attr("data-typed", "true");
            }
        })

        taskModal.keypress(addTicket);
        modalFilters = $(".modal-filter");
        for (let i = 0; i < modalFilters.length; i++) {
            modalFilters[i].click(selectPriority);
        }
    }

}


function selectPriority(taskModal, e) {
    let activeFIlter = $(".modal-filter.active");
    activeFIlter.removeClass("active");
    selectedPriority = e.currentTarget.classList[0].split("-")[1];
    e.currentTarget.classList.add("active");
    taskModal.click();
    taskModal.focus();
}


function addTicket() {

    if ($(this).key == "Enter" && $(this).shiftKey == false && $(this).text().trim() != "") {
        let task = $(this).text();
        let id = uid();
        let ticket = $("<div></div>").addClass("ticket");
        ticket.html(`<div class="ticket-color ticket-color-${selectedPriority}"></div>
        <div class="ticket-id">#${id}</div>
        <div class="task">${task}</div>`)

        $(".modal").remove();
        modalVisible = false;
        TC.append(ticket);
        ticket.click(() => {
            $(this).toggleClass("active");
        })
        // ticket.addEventListener("click", function(e) {
        //     if(e.currentTarget.classList.contains("active")) {
        //         e.currentTarget.classList.remove("active");
        //     } else {
        //         e.currentTarget.classList.add("active");
        //     }
        // });

        let allTasks = localStorage.getItem("allTasks");

        if (allTasks == null) {
            let data = [{
                "ticketId": id,
                "task": task,
                "priority": selectedPriority
            }];
            localStorage.setItem("allTasks", JSON.stringify(data));
        } else {
            let data = JSON.parse(allTasks);
            data.push({
                "ticketId": id,
                "task": task,
                "priority": selectedPriority
            });
            localStorage.setItem("allTasks", JSON.stringify(data));
        }

        let activeFilter =$(".filter.active");
        TC.empty();
        if (activeFilter) {
            let priority = activeFilter.children[0].classList[0].split("-")[0];
            loadTTickets(priority);
        } else {
            loadTTickets();
        }
    } else if (e.key == "Enter" && e.shiftKey == false) {
        $(this).preventDefault();
        alert("Error! you have not type anything in task.")
    }
}