import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function displayMessage(
  message,
  color,
  position = 'topRight',
  timeout = 5000
) {
  iziToast.show({
    message,
    color,
    position,
    timeout,
  });
}

export function displayError(message) {
  displayMessage(message, 'red');
}

export function displayInfo(message) {
  displayMessage(message, 'green');
}
