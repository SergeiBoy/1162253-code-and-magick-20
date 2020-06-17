'use strict';

(function () {

  var userDialog = document.querySelector('.setup');
  var dialogHandle = userDialog.querySelector('.upload');

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoordinates = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoordinates.x - moveEvt.clientX,
        y: startCoordinates.y - moveEvt.clientY
      };

      startCoordinates = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var userDialogStyleTop = ((userDialog.offsetTop - shift.y) < 0) ? 0 : (userDialog.offsetTop - shift.y);
      if (userDialogStyleTop > (window.innerHeight - userDialog.offsetHeight)) {
        userDialogStyleTop = window.innerHeight - userDialog.offsetHeight;
      }
      var userDialogStyleLeft = ((userDialog.offsetLeft - shift.x) < userDialog.offsetWidth / 2) ? (userDialog.offsetWidth / 2) : (userDialog.offsetLeft - shift.x);
      if (userDialogStyleLeft > (window.innerWidth - userDialog.offsetWidth / 2)) {
        userDialogStyleLeft = window.innerWidth - userDialog.offsetWidth / 2;
      }
      // Выше делим userDialog.offsetWidth пополам ввиду CSS свойства transform: translateX(-50%).

      userDialog.style.top = userDialogStyleTop + 'px';
      userDialog.style.left = userDialogStyleLeft + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
