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
  const handleFavoriteSubmit = (e) => {
    e.preventDefault();

    const favoriteInput = document.querySelector(".favorite-input");
    const favorite = favoriteInput.value;
    favoriteInput.value = "";

    const newListLi = document.createElement("li");
    newListLi.textContent = favorite;

    const favoritesList = document.getElementById("sf-places");
    favoritesList.appendChild(newListLi);
  };

  const listSubmitButton = document.querySelector(".favorite-submit");
  listSubmitButton.addEventListener("click", handleFavoriteSubmit);



  // adding new photos

  // --- your code here!

  const handlePhotoForm = (event) => {

    const photoFormDiv = document.querySelector('.photo-form-container');

      if (photoFormDiv.className === "photo-form-container hidden") {
        photoFormDiv.className = "photo-form-container";
      }
      else {
        photoFormDiv.className = "photo-form-container hidden";
      }
    };

  const togglePhotoForm = document.querySelector('.photo-show-button');
  togglePhotoForm.addEventListener("click",handlePhotoForm);

// ------- Handle the photo submission -------
  const submitUrlPhoto = (event) => {
    event.preventDefault();

    const photoUrlInput = document.querySelector(".photo-url-input");
    const photoUrl = photoUrlInput.value;
    photoUrlInput.value = "";

    const newImg = document.createElement("img");
    newImg.src = photoUrl;

    const newli = document.createElement("li");
    newli.appendChild(newImg);

    const dogPhotoList = document.querySelector(".dog-photos");
    dogPhotoList.appendChild(newli);
  };
// ----------- Event Handler For Add photo button -------

const submitPhotoButton = document.querySelector(".photo-url-submit");
submitPhotoButton.addEventListener("click",submitUrlPhoto);

});
