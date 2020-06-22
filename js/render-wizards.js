'use strict';

(function () {
  var WIZARD_QUANTITY = 4;
  /*
  var wizards = [];
  */

  var userDialog = document.querySelector('.setup');
  var similarElement = userDialog.querySelector('.setup-similar');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  /*
  var getRandomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var createWizards = function () {
    for (var i = 0; i < WIZARD_QUANTITY; i++) {
      var wizard = {
        name: getRandomElement(window.wizardsDescription.FIRST_NAMES) + ' ' + getRandomElement(window.wizardsDescription.LAST_NAMES),
        colorCoat: getRandomElement(window.wizardsDescription.COAT_COLORS),
        colorEyes: getRandomElement(window.wizardsDescription.EYES_COLORS),
      };
      wizards.push(wizard);
    }
  };
  */

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEeyes;

    return wizardElement;
  };

  var renderWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < WIZARD_QUANTITY; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    similarElement.classList.remove('hidden');
  };

  /*
  createWizards();
  renderWizards();
  */

  window.renderWizards = {
    renderWizards: renderWizards,
  };
})();
