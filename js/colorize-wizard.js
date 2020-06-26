'use strict';

(function () {
  var pickColor = 1;

  var wizardSetup = document.querySelector('.setup-wizard-appearance');
  var wizardCoat = wizardSetup.querySelector('.wizard-coat');
  var wizardCoatInput = wizardSetup.querySelector('input[name="coat-color"]');
  var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
  var wizardEyesInput = wizardSetup.querySelector('input[name="eyes-color"]');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var fireballInput = fireball.querySelector('input[name="fireball-color"]');

  var colors = {
    coatColor: 'rgb(101, 137, 164)',
    eyesColor: 'black',
  };

  var sortWizardsOnCoatChange = window.debounce(function (color) {
    colors.coatColor = color;
    window.renderWizards.sortWizards(window.loadedWizards);
  });

  var sortWizardsOnEyesChange = window.debounce(function (color) {
    colors.eyesColor = color;
    window.renderWizards.sortWizards(window.loadedWizards);
  });

  var onWizardCoatPress = function () {
    var pickedColor = window.wizardsDescription.COAT_COLORS[pickColor % window.wizardsDescription.COAT_COLORS.length];
    wizardCoat.style.fill = pickedColor;
    wizardCoatInput.value = pickedColor;
    pickColor = (pickColor + 1) % 100;
    sortWizardsOnCoatChange(pickedColor);
  };

  var onWizardEyesPress = function () {
    var pickedColor = window.wizardsDescription.EYES_COLORS[pickColor % window.wizardsDescription.EYES_COLORS.length];
    wizardEyes.style.fill = pickedColor;
    wizardEyesInput.value = pickedColor;
    pickColor = (pickColor + 1) % 100;
    sortWizardsOnEyesChange(pickedColor);
  };

  var onFireballPress = function () {
    var pickedColor = window.wizardsDescription.FIREBALL_COLORS[pickColor % window.wizardsDescription.FIREBALL_COLORS.length];
    fireball.style.backgroundColor = pickedColor;
    fireballInput.value = pickedColor;
    pickColor = (pickColor + 1) % 100;
  };

  window.colorizeWizard = {
    wizardCoat: wizardCoat,
    wizardEyes: wizardEyes,
    fireball: fireball,
    onWizardCoatPress: onWizardCoatPress,
    onWizardEyesPress: onWizardEyesPress,
    onFireballPress: onFireballPress,
    colors: colors,
  };
})();
