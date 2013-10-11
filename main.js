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
      $(this).addClass("btn-info").text("X")
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
      $(this).addClass('btn-danger').text("X")
      return butttonIndex 
      })
    })
  }
  
  // ** burn it down */



  function letItBurn(indexValue) {
    // pass in index value, add orange color to the right, left, up, down on the grid
    // make sure to take the lake constraints into account

    // after adding organge, then add orange in all directions (add two oranges each from each orange square
    // and one orange each from each red square

    }


})










    






// $(function() {



// //Selecting 4 directions for fire spread
// var fireStarter = function(starter){
//   var fireParent = (starter.parent());

//   var fireNext = fireParent.next();
//   var firePrev = fireParent.prev();
//   var fireLeft = firePrev.children('a')
//   var fireRight = fireNext.children('a')

//   // var fireBot = fireParent.next().next().next().next().next().next().next().next().next();
//   // var fireTop = fireParent.prev().prev().prev().prev().prev().prev().prev().prev().prev();

//   setInterval (function (){
//     var fireNextChild = fireNext.children('a')
//     var firePrevChild = firePrev.children('a')
//     if(fireNextChild.hasClass('btn-default')){
//     fireNextChild.addClass('btn-warning').removeClass('btn-default');
//     setTimeout( function() {
//         if(fireNextChild.hasClass('btn-warning')){
//            fireNextChild.addClass('btn-danger')
//           }
//         }, 2000);
//   };
//     if(firePrevChild.hasClass('btn-default')){
//     firePrevChild.addClass('btn-warning').removeClass('btn-default');
//     setTimeout( function() {
//         if(firePrevChild.hasClass('btn-warning')){
//            firePrevChild.addClass('btn-danger')
//           }
//         }, 2000);
//   };
//   // var fireBotChild = fireBot.children('a').addClass('btn-warning').removeClass('btn-default');
//   // var fireTopChild = fireTop.children('a').addClass('btn-warning').removeClass('btn-default');
//   fireSpread( starter.parent().prev().children('a') , starter.parent().next().children('a'));}, 500);

// }
// //recursion? //looped function
// var fireSpread = function(leftFire, rightFire) {

//     setInterval( function() {
//       if(leftFire.hasClass('btn-warning') && !leftFire.hasClass('btn-info')){
//       var newLeft = leftFire.parent().prev().children('a').addClass('btn-warning').removeClass('btn-default')
//       setTimeout( function() {
//         if(leftFire.hasClass('btn-warning')){
//            newLeft.addClass('btn-danger')
//           }
//         }, 2000);

//       leftFire = newLeft
//       }
//       else {
//         clearInterval()
//       }
//     }, 500);

//     setInterval( function() {
//       if(rightFire.hasClass('btn-warning') && !rightFire.hasClass('btn-info')){
//       var newRight = rightFire.parent().next().children('a').addClass('btn-warning').removeClass('btn-default')
//         setTimeout( function() {
//         if(rightFire.hasClass('btn-warning')){
//            newRight.addClass('btn-danger').text("!")
//           }
//         }, 2000);

//       rightFire = newRight
//       }
//       else{
//         clearInterval()
//       }
//     }, 500);

// };



// });