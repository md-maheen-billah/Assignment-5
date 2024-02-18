const allTicketBtn = document.getElementsByClassName("add-btn");
let count = 0;
for (const ticketBtn of allTicketBtn) {
  ticketBtn.addEventListener("click", function (e) {
    count = count + 1;
    const placeName = e.target.innerText;
    const price = document.getElementById("ticket-price").innerText;
    const selectedContainer = document.getElementById(
      "selected-place-container"
    );

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = placeName;
    const p2 = document.createElement("p");
    p2.innerText = "Economy";
    const p3 = document.createElement("p");
    p3.innerText = price;
    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);
    li.className = "flex justify-between w-full text-left mb-4";
    selectedContainer.appendChild(li);

    const totalCost = document.getElementById("total-cost").innerText;
    const convertedTotalCost = parseInt(totalCost);
    document.getElementById("total-cost").innerText =
      convertedTotalCost + parseInt(price);
    setElementValueById("cart-count", count);
  });
}
