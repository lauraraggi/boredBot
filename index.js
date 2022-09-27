const container = document.querySelector(".container");
const cta = document.querySelector(".btnTrigger");

cta.addEventListener("click", getApi);

function getApi() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then(
      ({ activity, type, participants, price, link, key, accessibility }) => {
        container.innerHTML = `<div id="${key}" class="activity">
    
  <div class="title">
    <h2 class="activity__title">${activity}</h2>
    
  </div>
  <div class="info">
    <div class="activity__type">${type}</div>
    <div class="participants">Participants: ${participants}</div>
    <div class="price">Price: €${Math.round(price)}</div>
  </div>
</div>`;
      }
    );
}
