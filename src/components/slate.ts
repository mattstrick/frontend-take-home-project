export default function generateSlate(context: CanvasRenderingContext2D, width: number, height: number, toolbarHeight: number) {
    // add background color of toolbar
    context.fillStyle = "rgb(255 255 255)";
    context.fillRect(0, toolbarHeight, width, height);
}
