'use strict';

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_QUANTITY = 4;
var wizards = [];
var pickColor = 1;

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var userDialogOpen = document.querySelector('.setup-open-icon');
var userDialogClose = userDialog.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');

var wizardSetup = document.querySelector('.setup-wizard-appearance');
var wizardCoat = wizardSetup.querySelector('.wizard-coat');
var wizardCoatInput = wizardSetup.querySelector('input[name="coat-color"]');
var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
var wizardEyesInput = wizardSetup.querySelector('input[name="eyes-color"]');
var fireball = document.querySelector('.setup-fireball-wrap');
var fireballInput = fireball.querySelector('input[name="fireball-color"]');

var getRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var createWizards = function () {
  for (var i = 0; i < WIZARD_QUANTITY; i++) {
    var wizard = {
      name: getRandomElement(FIRST_NAMES) + ' ' + getRandomElement(LAST_NAMES),
      coatColor: getRandomElement(COAT_COLORS),
      eyesColor: getRandomElement(EYES_COLORS),
    };
    wizards.push(wizard);
  }
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizads = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

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
    closePopup();
  }
};

var onWizardCoatPress = function () {
  var pickedColor = COAT_COLORS[pickColor % COAT_COLORS.length];
  wizardCoat.style.fill = pickedColor;
  wizardCoatInput.value = pickedColor;
  pickColor = (pickColor + 1) % 100;
};

var onWizardEyesPress = function () {
  var pickedColor = EYES_COLORS[pickColor % EYES_COLORS.length];
  wizardEyes.style.fill = pickedColor;
  wizardEyesInput.value = pickedColor;
  pickColor = (pickColor + 1) % 100;
};

var onFireballPress = function () {
  var pickedColor = FIREBALL_COLORS[pickColor % FIREBALL_COLORS.length];
  fireball.style.backgroundColor = pickedColor;
  fireballInput.value = pickedColor;
  pickColor = (pickColor + 1) % 100;
};

var openPopup = function () {
  userDialog.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
  userDialogClose.addEventListener('click', onPopupCloseButtonPress);
  userDialogClose.addEventListener('keydown', onPopupCloseButtonEnter);
  wizardCoat.addEventListener('click', onWizardCoatPress);
  wizardEyes.addEventListener('click', onWizardEyesPress);
  fireball.addEventListener('click', onFireballPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
  userDialogClose.removeEventListener('click', onPopupCloseButtonPress);
  userDialogClose.removeEventListener('keydown', onPopupCloseButtonEnter);
  wizardCoat.removeEventListener('click', onWizardCoatPress);
  wizardEyes.removeEventListener('click', onWizardEyesPress);
  fireball.removeEventListener('click', onFireballPress);
};

createWizards();
renderWizads();
userDialog.querySelector('.setup-similar').classList.remove('hidden');

userDialogOpen.addEventListener('click', function () {
  openPopup();
});

userDialogOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});


