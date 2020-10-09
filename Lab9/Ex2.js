// Make a robot move around the grid
while (true)
{   
    await sleep(200);
    if (controller.move() == false)
    {
        controller.rotate();
    }
}