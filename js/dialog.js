'use strict';

(function () {
  var userDialogOpen = document.querySelector('.setup-open-icon');
  var userDialog = document.querySelector('.setup');
  var userDialogClose = userDialog.querySelector('.setup-close');
  var userNameInput = userDialog.querySelector('.setup-user-name');

  var userDialogInitialTop = userDialog.style.top;
  var userDialogInitialLeft = userDialog.style.left;

  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape' && (userNameInput !== document.activeElement)) {
      evt.preventDefault();
      closePopup();
    }
  };

  var onPopupCloseButtonPress = function () {
    closePopup();
  };

  var onPopupCloseButtonEnter = function (evt) {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      closePopup();
    }
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
    userDialogClose.addEventListener('click', onPopupCloseButtonPress);
    userDialogClose.addEventListener('keydown', onPopupCloseButtonEnter);
    window.colorizeWizard.wizardCoat.addEventListener('click', window.colorizeWizard.onWizardCoatPress);
    window.colorizeWizard.wizardEyes.addEventListener('click', window.colorizeWizard.onWizardEyesPress);
    window.colorizeWizard.fireball.addEventListener('click', window.colorizeWizard.onFireballPress);
  };

  var closePopup = function () {
    userDialog.style.top = userDialogInitialTop;
    userDialog.style.left = userDialogInitialLeft;

    userDialog.classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);
    userDialogClose.removeEventListener('click', onPopupCloseButtonPress);
    userDialogClose.removeEventListener('keydown', onPopupCloseButtonEnter);
    window.colorizeWizard.wizardCoat.removeEventListener('click', window.colorizeWizard.onWizardCoatPress);
    window.colorizeWizard.wizardEyes.removeEventListener('click', window.colorizeWizard.onWizardEyesPress);
    window.colorizeWizard.fireball.removeEventListener('click', window.colorizeWizard.onFireballPress);
  };

  userDialogOpen.addEventListener('click', function () {
    openPopup();
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });
})();
