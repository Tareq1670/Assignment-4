const allBtn = document.getElementById("all_btn");
const interviewBtn = document.getElementById("interview_btn");
const rejectedBtn = document.getElementById("rejected_btn");

// Card Object
let interviewItems = [];
let rejectedItems = [];
let currentSelected = "all_btn";

// Default Button Set
document.addEventListener("DOMContentLoaded", () => {
    toggleButton("all_btn");
});

// Toggle Button Create
function toggleButton(id) {
    allBtn.classList.remove("bg-info", "text-base-300", "opacity-70");
    interviewBtn.classList.remove("bg-info", "text-base-300", "opacity-70");
    rejectedBtn.classList.remove("bg-info", "text-base-300", "opacity-70");

    allBtn.classList.add("text-text-base-300", "bg-white", "opacity-70");
    interviewBtn.classList.add("text-text-base-300", "bg-white", "opacity-70");
    rejectedBtn.classList.add("text-text-base-300", "bg-white", "opacity-70");

    const selected = document.getElementById(id);
    console.log(mainContainer.children.length);

    currentSelected = id;
    selected.classList.add(
        "bg-info",
        "text-base-300",
        "transition-all",
        "duration-300",
        "ease-in-out",
    );
    selected.classList.remove("text-text-base-300", "bg-white");
    if (id === "all_btn") {
        mainContainer.classList.remove("hidden");
        interviewSection.classList.add("hidden");
        rejectedSection.classList.add("hidden");
        checkNoItems(mainContainer);
    }

    if (id === "interview_btn") {
        interviewSection.classList.remove("hidden");
        mainContainer.classList.add("hidden");
        rejectedSection.classList.add("hidden");
        renderInterviewItems();
        checkNoItems(interviewSection);
    }
    if (id === "rejected_btn") {
        interviewSection.classList.add("hidden");
        mainContainer.classList.add("hidden");
        rejectedSection.classList.remove("hidden");
        renderRejected();
        checkNoItems(rejectedSection);
    }
    counterNumber();
    jobCounter();
}

// Name
const mainContainer = document.getElementById("main_container");

// Counter Number Name
const totalNumber = document.getElementById("total_count");
const interviewNumber = document.getElementById("interview_count");
const rejectedNumber = document.getElementById("rejected_count");
const interviewSection = document.getElementById("interview_container");
const rejectedSection = document.getElementById("rejected_container");
const noItems = document.getElementById("no_items");

// Counter
function counterNumber() {
    totalNumber.textContent = mainContainer.children.length;
    interviewNumber.textContent = interviewItems.length;
    rejectedNumber.textContent = rejectedItems.length;
}
counterNumber();
// Handle Event
interviewSection.addEventListener("click", handleEvent);
mainContainer.addEventListener("click", handleEvent);
rejectedSection.addEventListener("click", handleEvent);

function handleEvent(e) {
    // Interview Button
    if (e.target.classList.contains("interview_btn")) {
        const mainParent = e.target.parentNode.parentNode.parentNode;

        const setType = mainParent.querySelector(".set_type");
        setType.innerHTML = `                                <p
                                    class="apply_type bg-success/10 px-3 py-2 inline-block text-neutral/90 rounded-[8px] border border-success/20 font-medium"
                                >
                                    INTERVIEW
                                </p>`;
        mainParent.classList.remove("border-l-5", "border-error");
        mainParent.classList.add(
            "border-l-5",
            "border-success",
            "transition-all",
            "duration-200",
            "ease-in-out",
        );

        const header = mainParent
            .querySelector(".sub_title")
            .textContent.trim();
        const position = mainParent.querySelector(".text_1").textContent.trim();
        const place = mainParent.querySelector(".place").textContent.trim();
        const jobType = mainParent
            .querySelector(".job_type")
            .textContent.trim();
        const salary = mainParent.querySelector(".salary").textContent.trim();
        const applyType = mainParent
            .querySelector(".apply_type")
            .textContent.trim();
        const description = mainParent
            .querySelector(".description")
            .textContent.trim();

        const infoSet = {
            header,
            position,
            place,
            jobType,
            salary,
            applyType,
            description,
        };
        console.log(infoSet);

        const interViewExit = interviewItems.find(
            (items) =>
                items.header.toLowerCase() === infoSet.header.toLowerCase(),
        );

        if (!interViewExit) {
            interviewItems.push(infoSet);
        }

        rejectedItems = rejectedItems.filter(
            (item) => item.header !== infoSet.header,
        );
        if (currentSelected === "rejected_btn") {
            renderRejected();
        }
        counterNumber();
    }
    // Rejected Button
    if (e.target.classList.contains("rejected_btn")) {
        const mainParent = e.target.parentNode.parentNode.parentNode;

        const setType = mainParent.querySelector(".set_type");
        setType.innerHTML = `                                <p
                                    class="apply_type bg-error/10 px-3 py-2 inline-block text-neutral/90 rounded-[8px] border border-error/20 font-medium"
                                >
                                    REJECTED
                                </p>`;
        mainParent.classList.remove("border-l-5", "border-success");
        mainParent.classList.add(
            "border-l-5",
            "border-error",
            "transition-all",
            "duration-200",
            "ease-in-out",
        );

        const header = mainParent
            .querySelector(".sub_title")
            .textContent.trim();
        const position = mainParent.querySelector(".text_1").textContent.trim();
        const place = mainParent.querySelector(".place").textContent.trim();
        const jobType = mainParent
            .querySelector(".job_type")
            .textContent.trim();
        const salary = mainParent.querySelector(".salary").textContent.trim();
        const applyType = mainParent
            .querySelector(".apply_type")
            .textContent.trim();
        const description = mainParent
            .querySelector(".description")
            .textContent.trim();

        const infoSet = {
            header,
            position,
            place,
            jobType,
            salary,
            applyType,
            description,
        };
        console.log(infoSet);

        const interViewExit = rejectedItems.find(
            (items) =>
                items.header.toLowerCase() === infoSet.header.toLowerCase(),
        );

        if (!interViewExit) {
            rejectedItems.push(infoSet);
        }
        interviewItems = interviewItems.filter(
            (item) => item.header !== infoSet.header,
        );
        if (currentSelected === "interview_btn") {
            renderInterviewItems();
        }

        counterNumber();
        jobCounter();
    }
}

function renderInterviewItems() {
    interviewSection.innerHTML = "";
    // Condition
        noItems.classList.add("hidden");
        interviewItems.forEach((items) => {
            const div = document.createElement("div");
            div.innerHTML = ` <div
                    class=" flex justify-between bg-base-100 border border-l-5 border-success p-6 rounded-[8px]"
                >
                    <div class="left space-y-5">
                        <div class="heading space-y-1">
                            <h2
                                class="sub_title text-[18px] opacity-90 text-neutral text-[18px] font-semibold"
                            >
                                ${items.header}
                            </h2>
                            <p
                                class="text_1 text-neutral opacity-60 text-[16px]"
                            >
                                ${items.position}
                            </p>
                        </div>
                        <div
                            class="type flex text-neutral opacity-60 text-[14px] sm:text-[16px]"
                        >
                            <p class="place">${items.place}</p>
                            <ul class="list-disc list-outside pl-6 flex gap-7">
                                <li class="job_type">${items.jobType}</li>
                                <li class="salary">${items.salary}</li>
                            </ul>
                        </div>
                        <div class="apply space-y-2">
                            <div class="set_type">
                                <p
                                    class="apply_type bg-success/10 px-3 py-2 inline-block text-neutral/90 rounded-[8px] border border-success/20 font-medium"
                                >
                                    ${items.applyType}
                                </p>
                            </div>
                            <p class="description text-neutral opacity-60 text-[14px] sm:text-[16px]">
                                ${items.description}
                            </p>
                        </div>
                        <div class="button flex gap-2">
                            <button
                                class="interview_btn btn btn-success btn-outline border-2"
                            >
                                INTERVIEW
                            </button>
                            <button
                                class="rejected_btn btn btn-error btn-outline border-2"
                            >
                                REJECTED
                            </button>
                        </div>
                    </div>
                    <div class="right">
                        <div
                            class="w-8 h-8 circle rounded-full border-2 border-base-300 cursor-pointer flex items-center justify-center"
                        >
                            <i
                                class="text-neutral/50 fa-regular fa-trash-can"
                            ></i>
                        </div>
                    </div>
                </div>`;
            interviewSection.prepend(div);
        });
    }


function renderRejected() {
    rejectedSection.innerHTML = "";

        noItems.classList.add("hidden");
        rejectedItems.forEach((items) => {
            const div = document.createElement("div");
            div.innerHTML = ` <div
                    class=" flex justify-between bg-base-100 border border-l-5 border-error p-6 rounded-[8px]"
                >
                    <div class="left space-y-5">
                        <div class="heading space-y-1">
                            <h2
                                class="sub_title text-[18px] opacity-90 text-neutral text-[18px] font-semibold"
                            >
                                ${items.header}
                            </h2>
                            <p
                                class="text_1 text-neutral opacity-60 text-[16px]"
                            >
                                ${items.position}
                            </p>
                        </div>
                        <div
                            class="type flex text-neutral opacity-60 text-[14px] sm:text-[16px]"
                        >
                            <p class="place">${items.place}</p>
                            <ul class="list-disc list-outside pl-6 flex gap-7">
                                <li class="job_type">${items.jobType}</li>
                                <li class="salary">${items.salary}</li>
                            </ul>
                        </div>
                        <div class="apply space-y-2">
                            <div class="set_type">
                                <p
                                    class="apply_type bg-error/10 px-3 py-2 inline-block text-neutral/90 rounded-[8px] border border-error/20 font-medium"
                                >
                                    ${items.applyType}
                                </p>
                            </div>
                            <p class="description text-neutral opacity-60 text-[14px] sm:text-[16px]">
                                ${items.description}
                            </p>
                        </div>
                        <div class="button flex gap-2">
                            <button
                                class="interview_btn btn btn-success btn-outline border-2"
                            >
                                INTERVIEW
                            </button>
                            <button
                                class="rejected_btn btn btn-error btn-outline border-2"
                            >
                                REJECTED
                            </button>
                        </div>
                    </div>
                    <div class="right">
                        <div
                            class="w-8 h-8 circle rounded-full border-2 border-base-300 cursor-pointer flex items-center justify-center"
                        >
                            <i
                                class="text-neutral/50 fa-regular fa-trash-can"
                            ></i>
                        </div>
                    </div>
                </div>`;
            rejectedSection.prepend(div);
        });
    }

// Delete Button
mainContainer.addEventListener("click", deleteBtn);
interviewSection.addEventListener("click", deleteBtn);
rejectedSection.addEventListener("click", deleteBtn);
// Delete Function
function deleteBtn(e) {
    const subTitle = e.target.parentNode.parentNode.parentNode
        .querySelector(".sub_title")
        .textContent.trim();
    if (e.target.classList.contains("fa-trash-can")) {
        e.target.parentNode.parentNode.parentNode.remove();
        // InterView And Rejected Item Remove
        interviewItems = interviewItems.filter(
            (items) => items.header !== subTitle,
        );
        rejectedItems = rejectedItems.filter(
            (items) => items.header !== subTitle,
        );
        counterNumber();
        jobCounter();
        if(currentSelected === "interview_btn") {
            checkNoItems(interviewSection);
        }
        if(currentSelected === "rejected_btn") {
            checkNoItems(rejectedSection);
        }
        if(currentSelected === "all_btn") {
            checkNoItems(mainContainer);
        }
    }
}

// Job Counter Section
const jobCounterNumber = document.getElementById("jobs_count");

function jobCounter() {
    if (currentSelected === "interview_btn") {
        jobCounterNumber.textContent = `${interviewItems.length} jobs of ${mainContainer.children.length}`;
    } else if (currentSelected === "rejected_btn") {
        jobCounterNumber.textContent = `${rejectedItems.length} of ${mainContainer.children.length}`;
    } else {
        jobCounterNumber.textContent = `${mainContainer.children.length} Jobs`;
    }
}




function checkNoItems(container) {
    const cardItems = container.querySelectorAll(".sub_title");
    if(cardItems.length === 0) {
        noItems.classList.remove("hidden");
    } else {
        noItems.classList.add("hidden");
    }
}
