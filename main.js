$(function() {


  function selectFireWater() {
    //** lake */
    $("#lake").on('click', function () {
      //** selects the lake button */
      $(this).addClass("selected-power")
      //** deselects the campfire button */
      $("#campfire").removeClass("selected-power")
    $(".btn-default").on('click', function() {
      //** adds the blue color to button **/
      $(this).addClass("btn-danger"); 
      $(this).addClass("btn-info"); 
      })
    })

    //** fire */
    $("#campfire").on('click', function () {
      //** selects the lake button */
      $(this).addClass("selected-power")
      //** deselects the campfire button */
      $("#lake").removeClass("selected-power")
    $(".btn-default").on('click', function() {
      //** finds the parent index */
      var butttonIndex = $(this).parent().index()
      //** adds the red color to button **/
      $(this).removeClass("btn-info")
      //** passes parent index to the letItBurn function)
      $(this).addClass('btn-danger') 
      letItBurn(butttonIndex) 
      })
    })
    //** possibly combine the last two functions?? */
}
  //** burn it down */
  function letItBurn(indexValue) {
    //** adds the orange color to button (fire) **/
     $("li:nth-child(" + (indexValue+1) + ") a").addClass("btn-warning")
  }

  //** run code */
  selectFireWater()

})