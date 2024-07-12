const $progress = $("#progress");
const $prev = $("#prev");
const $next = $("#next");
const $circles = $(".circle");

let currentActive = 1;

$next.on("click", () => {
  currentActive++;

  if (currentActive > $circles.length) {
    currentActive = $circles.length;
  }

  update();
});

$prev.on("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  $circles.each(function (index) {
    if (index < currentActive) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });

  const actives = $(".circle.active");

  $progress.css(
    "width",
    ((actives.length - 1) / ($circles.length - 1)) * 100 + "%"
  );

  if (currentActive === 1) {
    $prev.prop("disabled", true);
  } else if (currentActive === $circles.length) {
    $next.prop("disabled", true);
  } else {
    $prev.prop("disabled", false);
    $next.prop("disabled", false);
  }
}
