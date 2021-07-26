$(function () {
  $("#ham-icon").on("click", function () {
    $(this).toggleClass("open")
    $(".nav").toggleClass("showNav")
  })
})

