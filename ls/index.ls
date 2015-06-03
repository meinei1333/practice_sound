/*intro-sound = new Howl {
  src: [\sound/intro_animation_transition.mp3],
}

gb-sound = new Howl {
  src: [\sound/bg.mp3],
  loop: true
}

intro-sound.play!

do
  <-! set-timeout _, 5000ms
  gb-sound.play!

btn = new button!*/

const bg = \bg
const intro = \intro

assets-path = \sound/
sounds = [ {src: \bg.mp3, id: bg}, {src: \intro_animation_transition.mp3, id: intro} ]

createjs.Sound.alternate-extensions = [\mp3]
createjs.Sound.add-event-listener \fileload, play-sound
createjs.Sound.register-sounds(sounds, assets-path)

!function play-sound event
  instance = createjs.Sound.play intro
  instance.on \complete, handle-complete, this 


!function handle-complete target
  <-! set-timeout _, 1000ms
  createjs.Sound.play bg, loop: -1  
