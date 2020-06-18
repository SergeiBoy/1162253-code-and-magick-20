'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = 16;
  var BAR_WIDTH = 40;
  var BAR_GAP = 50;
  var MAX_BAR_HEIGHT = 150;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', CLOUD_X + 2 * GAP, CLOUD_Y + 2 * GAP);
    ctx.fillText('Список результатов:', CLOUD_X + 2 * GAP, CLOUD_Y + 2.5 * GAP + FONT_GAP);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      var barHeight = MAX_BAR_HEIGHT * times[i] / maxTime;
      ctx.fillStyle = '#000';
      ctx.fillText(players[i], CLOUD_X + 4 * GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP);
      ctx.fillText(Math.round(times[i]), CLOUD_X + 4 * GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP - GAP - barHeight - 0.5 * GAP - FONT_GAP);
      ctx.fillStyle = (players[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + Math.random() * 100 + '%, 50%)';
      ctx.fillRect(CLOUD_X + 4 * GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP - GAP - barHeight, BAR_WIDTH, barHeight);
    }
  };
})();
