const btn = document.getElementById("manu-btn");
const overLay = document.getElementById("overLay");
const manu = document.getElementById("mobile");
const counters = document.querySelectorAll(".counter");
let scrollStarted = "false";
document.addEventListener("scroll", scrollPage);

btn.addEventListener("click", function () {
    btn.classList.toggle("open");
    overLay.classList.toggle("overLay-show");
    document.body.classList.toggle("stop-scrolling");
    manu.classList.toggle("show-manu");
});
function scrollPage() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (scrollPosition < 100 && scrollStarted) {
        reset();
        scrollStarted = false;
    }
}

function countUp() {
    counters.forEach((counter) => {
        counter.innerText = "0";

        const updateCounter = () => {
            // get count target
            const target = Number(counter.getAttribute("data-target"));

            // now we get the current counter numbers or values
            const c = +counter.innerText;

            //create an increment
            const increment = target / 100;

            //IF counter is less then , add increment
            if (c < target) {
                // Round up and set the counter value
                counter.innerText = `${Math.ceil(c + increment)}`;
            } else {
                counter.innerText = target;
            }

            setTimeout(updateCounter, 10);
        };
        updateCounter();
    });
}

function reset() {
    counters.forEach((counter) => (counter.innerHTML = "0"));
}
