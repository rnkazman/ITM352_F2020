// Make a robot move around the grid
for (steps=0; steps<50; steps++)
{   
    await sleep(200);
    if (controller.move() == false)
    {
        controller.rotate();
    }
}