"use client";

import styles from "./page.module.css";
import React from "react";
import generateToolbar from "@/components/toolbar";
import { generateSlate, handleMouseClicking, handleMouseMoving } from "@/components/slate";

const CANVAS_WIDTH = 450;
const CANVAS_HEIGHT = 350;

type TOOLS = "type" | "draw" | "erase";

export default function Home() {
    const [tool, setTool] = React.useState<TOOLS>("type");

  React.useEffect(() => {
    function draw() {
      const canvas = document.getElementById("canvasTool") as HTMLCanvasElement;
      
      if (canvas?.getContext) {
        const ctx = canvas?.getContext("2d");

        if (ctx) {
            const toolbarProps = generateToolbar(ctx, CANVAS_WIDTH, CANVAS_HEIGHT);
            generateSlate(ctx, CANVAS_WIDTH, CANVAS_HEIGHT, toolbarProps.TOOLBAR_HEIGHT);
            canvas.addEventListener("mousemove", (event) => handleMouseMoving(event, canvas.getBoundingClientRect(), ctx, tool));
            canvas.addEventListener('click', (event) => handleMouseClicking(event, canvas.getBoundingClientRect(), ctx, tool));
        } else {
            // TODO: Throw an error
        }
      } else {
        // Handle non-canvas support
        alert(
          "Canvas is not supported on your browser, but is required for our tool. Please upgrade your browser or try another browser."
        );
      }
    }

    draw();
  }, [tool]);

  return (
      <div className={styles.center}>
        <canvas id="canvasTool" width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
      </div>
  );
}
