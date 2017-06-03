
function setTitle() {

  switch (location.pathname) {

    case "/":
      $('title').text('Halcyon');
      break;

    case "/local":
      $('title').text('Local / Halcyon');
      break;

    case "/federated":
      $('title').text('Federated / Halcyon');
      break;

    case "/notifications":
      $('title').text('Notifications / Halcyon');
      break;

    case "/404":
      $('title').text('404 / Halcyon');
      break;

    default:
      break;

  }
}