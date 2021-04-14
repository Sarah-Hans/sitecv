function menu_burger() {
    document.getElementById("myDropdown").classList.toggle("show");
}

const menu = document.querySelector('.menu-burger').addEventListener('click', this.menu_burger)

// ferme le sous menu si l'utilisateur clique dessus
window.onclick = function(event) {
    if (!event.target.matches('.menu-burger')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }