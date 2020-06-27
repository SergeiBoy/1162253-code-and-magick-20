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
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderWizards = function (wizards) {
    similarListElement.innerHTML = '';
    var fragment = document.createDocumentFragment();
    var wizardsNumber = (wizards.length < WIZARD_QUANTITY) ? wizards.length : WIZARD_QUANTITY;
    for (var i = 0; i < wizardsNumber; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    similarElement.classList.remove('hidden');
  };

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === window.colorizeWizard.colors.coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.colorizeWizard.colors.eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var sortWizards = function (wizards) {
    renderWizards(wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }
      return rankDiff;
    }));
  };

  /*
  createWizards();
  renderWizards();
  */

  window.renderWizards = {
    sortWizards: sortWizards,
  };
})();
