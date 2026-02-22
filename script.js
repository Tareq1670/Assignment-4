const allBtn = document.getElementById("all_btn");
const interviewBtn = document.getElementById("interview_btn");
const rejectedBtn = document.getElementById("rejected_btn");

// Default Button Set
document.addEventListener("DOMContentLoaded",()=>{
    toggleButton("all_btn")
})

// Toggle Button Create
function toggleButton(id){
    allBtn.classList.remove("bg-info","text-base-300", "opacity-70")
    interviewBtn.classList.remove("bg-info","text-base-300", "opacity-70")
    rejectedBtn.classList.remove("bg-info","text-base-300", "opacity-70")

    
    allBtn.classList.add("text-text-base-300","bg-white", "opacity-70");
    interviewBtn.classList.add("text-text-base-300","bg-white", "opacity-70");
    rejectedBtn.classList.add("text-text-base-300","bg-white", "opacity-70");

    const selected = document.getElementById(id);
    selected.classList.add("bg-info","text-base-300","transition-all", "duration-300", "ease-in-out");
    selected.classList.remove("text-text-base-300","bg-white");

}

// Card Object
const interviewItems = [];
const rejectedItems = [];




// Name
const mainContainer = document.getElementById("main_container");



// Counter Number Name
const totalNumber = document.getElementById("total_count")
const interviewNumber = document.getElementById("interview_count")
const rejectedNumber = document.getElementById("rejected_count")



// Counter
function counterNumber(){
    totalNumber.textContent = mainContainer.children.length;
    interviewNumber.textContent = interviewItems.length;
    rejectedNumber.textContent = rejectedItems.length;
}
counterNumber()




// Handle Event
mainContainer.addEventListener("click",handleEvent)

function handleEvent(e){
    // Interview Button
    if(e.target.classList.contains("interview_btn")){
        const mainParent = e.target.parentNode.parentNode.parentNode;

        const setType = mainParent.querySelector(".set_type")
        setType.innerHTML = `                                <p
                                    class="apply_type bg-success/10 px-3 py-2 inline-block text-neutral/90 rounded-[8px] border border-success/20 font-medium"
                                >
                                    INTERVIEW
                                </p>`
        mainParent.classList.add("border-l-5", "border-success","transition-all", "duration-200", "ease-in-out")

        const header = mainParent.querySelector(".sub_title").textContent.trim();
        const position = mainParent.querySelector(".text_1").textContent.trim();
        const place = mainParent.querySelector(".place").textContent.trim();
        const jobType = mainParent.querySelector(".job_type").textContent.trim();
        const salary = mainParent.querySelector(".salary").textContent.trim()
        const applyType = mainParent.querySelector(".apply_type").textContent.trim();
        const description = mainParent.querySelector(".description").textContent.trim();
        

        const infoSet = {
            header,position,place,jobType,salary,applyType,description
        }
        console.log(infoSet);

        const interViewExit = interviewItems.find((items)=> items.header.toLowerCase() ===infoSet.header.toLowerCase() )

        if(!interViewExit){
            interviewItems.push(infoSet);
        }
        counterNumber()
    }
    // Rejected Button
    if(e.target.classList.contains("rejected_btn")){
        const mainParent = e.target.parentNode.parentNode.parentNode;

        const setType = mainParent.querySelector(".set_type")
        setType.innerHTML = `                                <p
                                    class="apply_type bg-error/10 px-3 py-2 inline-block text-neutral/90 rounded-[8px] border border-error/20 font-medium"
                                >
                                    REJECTED
                                </p>`
        mainParent.classList.add("border-l-5", "border-error","transition-all", "duration-200", "ease-in-out")

        const header = mainParent.querySelector(".sub_title").textContent.trim();
        const position = mainParent.querySelector(".text_1").textContent.trim();
        const place = mainParent.querySelector(".place").textContent.trim();
        const jobType = mainParent.querySelector(".job_type").textContent.trim();
        const salary = mainParent.querySelector(".salary").textContent.trim()
        const applyType = mainParent.querySelector(".apply_type").textContent.trim();
        const description = mainParent.querySelector(".description").textContent.trim();
        

        const infoSet = {
            header,position,place,jobType,salary,applyType,description
        }
        console.log(infoSet);

        const interViewExit = rejectedItems.find((items)=> items.header.toLowerCase() ===infoSet.header.toLowerCase() )

        if(!interViewExit){
            rejectedItems.push(infoSet);
        }
        counterNumber()
    }
    console.log(rejectedItems);
}