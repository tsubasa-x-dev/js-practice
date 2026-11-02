const searchInput = document.getElementById("searchInput");

const searchButton = document.getElementById("searchButton");

const itemList = document.getElementById("itemList");

const items = itemList.getElementsByTagName("li");

searchButton.addEventListener("click", function () {
  const keyword = searchInput.value;

  for (let i = 0; i < items.length; i++) {
    const itemName = items[i].textContent;

    if (itemName.includes(keyword)) {
      items[i].style.display = "list-item";
    } else {
      items[i].style.display = "none";
    }
  }
});
