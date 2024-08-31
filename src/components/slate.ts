export function generateSlate(
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  toolbarHeight: number
) {
  // add background color of slate
  context.fillStyle = "rgb(255 255 255)";
  context.fillRect(0, toolbarHeight, width, height);
}

export function handleMouseMoving(
  event: MouseEvent,
  bounding,
  context: CanvasRenderingContext2D,
  tool: string
) {
  const x = event.clientX - bounding.left;
  const y = event.clientY - bounding.top;

  if (y > 76) {
    if (tool === "draw") {
      drawOnSlate(event, bounding, context);
    }

    if (tool === "erase") {
      eraseOnSlate(event, bounding, context);
    }
  }
}

export function handleMouseClicking(
  event: MouseEvent,
  bounding,
  context: CanvasRenderingContext2D,
  tool: string,

) {
  const x = event.clientX - bounding.left;
  const y = event.clientY - bounding.top;

  if (tool === "type" && y > 76) {
    typeOnSlate(event, bounding, context);
  }
}

function drawOnSlate(
  event: MouseEvent,
  bounding,
  context: CanvasRenderingContext2D
) {
  const x = event.clientX - bounding.left;
  const y = event.clientY - bounding.top;

  context.fillStyle = "rgb(0 0 0)";
  context.fillRect(x, y, 2, 2);
}

export function typeOnSlate(
  event: MouseEvent,
  bounding,
  context: CanvasRenderingContext2D
) {
  const x = event.clientX - bounding.left;
  const y = event.clientY - bounding.top;

  context.fillStyle = "rgb(0 0 0)";
  context.font = "48px serif";
  context.fillText("Hello world", x, y);
}

function eraseOnSlate(
  event: MouseEvent,
  bounding,
  context: CanvasRenderingContext2D
) {
  const x = event.clientX - bounding.left;
  const y = event.clientY - bounding.top;

  context.fillStyle = "rgb(255 255 255)";
  context.fillRect(x, y, 2, 2);
}
