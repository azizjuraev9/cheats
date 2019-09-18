jdis = 110;
r = new Runner();
r.clearCanvas = function(){
    if(r.horizon.obstacles.length > 0){
        jdis = 110 + (r.currentSpeed * 2);
        if( (r.tRex.xPos + jdis) >= (r.horizon.obstacles[0].xPos + 1) && !(r.horizon.obstacles[0].typeConfig.type == "PTERODACTYL" && r.horizon.obstacles[0].yPos < 75) )
            r.tRex.startJump(r.currentSpeed);
    }
    r.canvasCtx.clearRect(0, 0, r.dimensions.WIDTH, r.dimensions.HEIGHT);
};
