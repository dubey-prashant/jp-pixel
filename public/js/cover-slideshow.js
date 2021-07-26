// CHANGE THE IMAGES LIST AS PER REQUIREMMENTS
// You can use the resources in 'PUBLIC' folder by 
// directly referring to '/anyFileNameInPublicFolder'
//  no need to give full path
// You can also use image urls in the list
const imageList = ['/images/cover-bg.jpg', '/images/cover-bg2.jpg', '/images/cover-bg3.jpg', '/images/cover-bg4.jpg']

// DON'T CHANGE THE CODE BELOW
$(document).ready(function () {
  $('.cover').mkinfinite({
    maxZoom: 1.4,
    animationTime: 3000,
    imagesRatio: (1200 / 720),
    isFixedBG: true,
    zoomIn: true,
    imagesList: imageList
  })
})