## CLIENT6.5 Wildfire

### Skills

*   Bootstrap buttons
*   Event Handling
*   DOM Traversal
*   Timers

### Resources

*   [Bootstrap Buttons](http://getbootstrap.com/css/#buttons)
*   [jQuery Traversing](http://api.jquery.com/category/traversing/) (esp. [next](http://api.jquery.com/next/), [prev](http://api.jquery.com/prev/), [parent](http://api.jquery.com/parent/), [children](http://api.jquery.com/children/))

### Requirements

1.  Copy the [starter code](https://github.com/RefactorU/refactoru-exercise-starters/tree/master/client-js/wildfire) from the refactoru-exercise-starters repo.
    Do not modify the HTML.

2.  When the user clicks on the Lake, it should become selected. Then, when the user clicks on any
piece of #land, the clicked button should become blue. Use the Bootstrap button class that makes
buttons blue.![](/public/img/screenshots/wildfire/water.png)
3.  When the user clicks on the Campfire, it should become selected. Then, when the user clicks on any
piece of #land, the clicked button should become red. Use the Bootstrap button class that makes
buttons red.![](/public/img/screenshots/wildfire/fire.png)
4.  When the user sets a piece of #land on fire, it should begin burning. Surrounding parcels will first
turn orange, and then red. Orange parcels spread at a rate of 2 parcels per second. Red parcelsspread at a rate of 1 parcel per second.![](/public/img/screenshots/wildfire/burning.png)
5.  Making parcels into water should contain the fire. Water can't catch on fire, and fire can't jump water.![](/public/img/screenshots/wildfire/final.png)
6.  Add your own piece of functionality! Replace the buttons with graphical icons? Make the color of the
fire increase in intensity over time? Add houses that take longer
to burn down? Use your imagination and challenge yourself.
