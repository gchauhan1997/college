const counterRef = firebase.database().ref('totalVisitors');

// Enforce minimum of 1000 before incrementing
counterRef.once('value').then(snapshot => {
  let current = snapshot.val() || 0;
  if (current < 1000) {
    counterRef.set(1000).then(() => {
      counterRef.transaction(n => (n || 1000) + 1);
    });
  } else {
    counterRef.transaction(n => (n || 1000) + 1);
  }
});

// Display count
counterRef.on('value', snapshot => {
  document.getElementById('visitor-count').innerText = snapshot.val();
});
// slider
$(document).ready(function () {
  $('.testimonial-slider-info-2').slick({
    dots: true,
    infinite: true,
    arrows:false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

