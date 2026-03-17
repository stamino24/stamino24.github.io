document.addEventListener("DOMContentLoaded", async ()=>{
    const response = await fetch("https://b3d2-151-59-83-160.ngrok-free.app/stats/active_users_and_schools", {
        method: "get",
        headers: {"Content-Type": "application/json"}
    });
    const data = await response.json();
    console.log(data)
    const students_label = document.getElementById("active_users");
    const schools_label = document.getElementById("active_schools");

    write_with_effect(students_label, data.data[0].students, "studenti attivi", 600);
    write_with_effect(schools_label, data.data[0].schools, "scuole registrate", 600);
});

async function write_with_effect(container, value, text, time){
    const delay = time/value;
    for(let i = 1; i<=value; i++){
        container.textContent = `${i} ${text}`;
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}