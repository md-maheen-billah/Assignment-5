const allTicketBtn = document.getElementsByClassName("add-btn");
let count = 0;
let count2 = 40;
for (const ticketBtn of allTicketBtn) {
  ticketBtn.addEventListener("click", function (e) {
    if (count <= 3) {
      count2 = count2 - 1;
      count = count + 1;
      totalCost(
        "total-cost",
        document.getElementById("ticket-price").innerText
      );
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
      e.target.classList.add("text-white");
      e.target.classList.add("bg-[#1DD100]");
      e.target.classList.add("pointer-events-none");
    } else {
      alert("Cannot book more than 4 seats");
    }

    setElementValueById("cart-count", count);
    setElementValueById("seats-left", count2);
    grandTotal();

    const seat = parseInt(document.getElementById("cart-count").innerText);
    if (seat > 3) {
      document.getElementById("discount-btn").removeAttribute("disabled");
    } else {
      document.getElementById("discount-btn").setAttribute("disabled", true);
    }

    document
      .getElementById("number-phone")
      .addEventListener("keyup", function (event) {
        const text = event.target.value.toString().length;
        const button = document.getElementById("modal-btn");
        if (text > 0 && seat > 0) {
          button.removeAttribute("disabled");
        } else {
          button.setAttribute("disabled", true);
        }
      });
  });
}

function grandTotal() {
  const totalCost = document.getElementById("total-cost").innerText;
  const convertedTotalCost = parseInt(totalCost);
  setElementValueById("grand-total", convertedTotalCost);
}

const btn2 = document.getElementById("discount-btn");
btn2.addEventListener("click", function () {
  const couponElement = getInputValueById("input-f");
  if (couponElement === "NEW15") {
    const grandTotal = document.getElementById("total-cost").innerText;
    const convertedTotalCost = parseInt(grandTotal);
    const discount = convertedTotalCost * 0.15;
    const newGrandTotal = convertedTotalCost - discount;
    setElementValueById("grand-total", newGrandTotal);
    document.getElementById("gayeb").className = "hidden";
  } else if (couponElement === "Couple 20") {
    const grandTotal = document.getElementById("total-cost").innerText;
    const convertedTotalCost = parseInt(grandTotal);
    const discount = convertedTotalCost * 0.2;
    const newGrandTotal = convertedTotalCost - discount;
    setElementValueById("grand-total", newGrandTotal);
    document.getElementById("gayeb").className = "hidden";
  } else {
    alert("Invalid Coupon");
  }
});
