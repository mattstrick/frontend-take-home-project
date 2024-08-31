export default function generateToolbar(
  context: CanvasRenderingContext2D,
  width: number,
  height: number
) {
  // add background color of toolbar
  context.fillStyle = "rgb(200 200 200)";
  context.fillRect(0, 0, width, 75);

  // add border of toolbar
  context.fillStyle = "rgb(0 0 0)";
  context.fillRect(0, 75, width, 1);

  // add tool icons
  const img1 = new Image();
  img1.crossOrigin = "anonymous";
  img1.src = "./draw.png";
  img1.onload = () => {
    context.drawImage(img1, 0, 15);
  };

  const img2 = new Image();
  img2.crossOrigin = "anonymous";
  img2.src = "./type.png";
  img2.onload = () => {
    context.drawImage(img2, 150, 15);
  };

  const img3 = new Image();
  img3.crossOrigin = "anonymous";
  img3.src = "./erase.png";
  img3.onload = () => {
    context.drawImage(img3, 300, 15);
  };

  return {
    TOOLBAR_HEIGHT: 76,
  };
}
