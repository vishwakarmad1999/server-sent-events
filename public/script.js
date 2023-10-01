const rootEl = document.getElementById("root")
const abortBtn = document.getElementById("abortbtn")

const eventSrc = new EventSource("http://localhost:4000/stream")

eventSrc.addEventListener("ping", (event) => {
    const { message, timestamp} = JSON.parse(event.data);
    const elText = `${timestamp} - ${message}`
    const liEl = document.createElement("li")
    liEl.innerHTML = elText;
    rootEl.appendChild(liEl)
})

abortBtn.addEventListener("click", () => {
    eventSrc.close()
})
