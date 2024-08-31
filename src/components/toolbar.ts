export default function generateToolbar(context: CanvasRenderingContext2D, width: number, height: number) {
    // add background color of toolbar
    context.fillStyle = "rgb(200 200 200)";
    context.fillRect(0, 0, width, 75);

    // add border of toolbar
    context.fillStyle = "rgb(0 0 0)";
    context.fillRect(0, 75, width, 1);

    // add tools

    return {
        TOOLBAR_HEIGHT: 76
    };
}
