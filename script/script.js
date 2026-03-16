document.addEventListener("DOMContentLoaded", async ()=>{
    const response = await fetch(" https://854b-151-59-82-154.ngrok-free.app/stats/active_users&schools");
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