var renderCloud = function(ctx, x, y, color, cloudWidth=410, cloudHeight=270) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, cloudWidth, cloudHeight);
}


window.renderStatistics = function(ctx,names,times) {
    renderCloud(ctx,110,20,"rgba(0, 0, 0, 0.7)");
    renderCloud(ctx,100,10,"#fff");

    

    ctx.fillStyle = "#000";
    ctx.fillText('Вы',100,75);

    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!',100,45);
    ctx.fillText('Список результатов',100,60);
}