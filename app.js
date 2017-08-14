const controller = new ScrollMagic.Controller( {
  vertical: false
});

const scene = new ScrollMagic.Scene( {
  triggerElement: '#element',
  duration: 500,    // the scene should last for a scroll distance of 100px
  offset: 0        // start this scene after scrolling for 50px
})
.setPin("#element") // pins the element for the the scene's duration

controller.addScene( scene ); // assign the scene to the controller
