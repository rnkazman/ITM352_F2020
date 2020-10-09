for (steps=0; steps<50; steps++)
{   
    await sleep(200);
    if (Math.floor((Math.random() * 4) + 1) == 2)
        controller.rotate();
    if (controller.move() == false)
    {
        controller.rotate();
    }
}