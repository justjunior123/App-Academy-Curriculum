document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const favoriteInput = document.getElementsByClassName("favorite-submit");
  favoriteInput.addEventListener("submit", event => {

    event.preventDefault();
    const submitInputEl = document.getElementsByTagName('submit');
    const submitValue = submitInputEl.value;
    submitInputEl.value = "";

    const ul = document.getElementById('sf-places');
    const li = document.createElement('li');

    li.textcontent = submitValue;
    ul.append(li);

  });


  // adding new photos

  // --- your code here!



});
