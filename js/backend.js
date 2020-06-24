'use strict';

(function () {
  var saveURL = 'https://javascript.pages.academy/code-and-magick';
  var loadURL = 'https://javascript.pages.academy/code-and-magick/data';
  var StatusCode = {
    OK: 200,
  };
  var TIMEOUT_IN_MS = 10000;

  var sendRequest = function (onLoad, onError, data) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    if (data) {
      xhr.open('POST', saveURL);
      xhr.send(data);
    } else {
      xhr.open('GET', loadURL);
      xhr.send();
    }
  };

  window.backend = {
    save: function (data, onLoad, onError) {
      sendRequest(onLoad, onError, data);
    },
    load: function (onLoad, onError) {
      sendRequest(onLoad, onError);
    },
  };
})();
