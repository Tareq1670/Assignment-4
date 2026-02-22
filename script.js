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
    selected.classList.add("bg-info","text-base-300");
    selected.classList.remove("text-text-base-300","bg-white");

}
