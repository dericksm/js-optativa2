$(document).ready(function () {
  const arr = numberGenerator()
  $("#btnGerar").click(() => {
    const arr = numberGenerator()

    arr.forEach((element, index) => {
     $("#phones").append(
       `<div id="phone-${index}" class="input-group phoneNumber">
       <input type="text" class="form-control" value="${element}" readonly>
       <div class="input-group-append">
         <button class="btn btn-outline-success" id="btnOn" type="button">Ligar</button>
         <button class="btn btn-outline-danger" id="btnOff" type="button">Desligar</button>
       </div>
     </div>`
     )
    })


    $(".btn").click(function() {
      let currentClick = $(this).parent().parent().attr('id')

      arr.forEach((element, index) => {
        $("#btnOn-" + index).attr("disabled", true)
      })      
      $("#"+currentClick).children().children().attr("disabled", false)

      $(".progress").toggleClass('d-none d-inline');

    })

    $("#btnOff").click(function() {
             $("#btnOn" + index).attr("disabled", false)
      
    })


  })

  
})


function numberGenerator() {
  return Array(4).fill(null).map((u, i) => Math.floor(Math.random() * 1000000000))
}

