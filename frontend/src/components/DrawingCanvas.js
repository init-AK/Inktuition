import React, { useRef, useEffect } from 'react';

function DrawingCanvas() {
    const canvasRef = useRef(null);
    let ctx = null; // Holds the 2D drawing context of canvas.
    let drawing = false; // Boolean to track if drawing or not.

    useEffect(() => {
        const canvas = canvasRef.current;
        ctx = canvas.getContext('2d');
    }, []);

    const startDrawing = (e) => {
        drawing = true;
        draw(e);
    };

    const stopDrawing = () => {
        drawing = false;
        ctx.beginPath();
    };

    const draw = (e) => {
        if (!drawing) return;
        
        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        ctx.strokeStyle = "black";  // choose color
        
        ctx.lineTo(e.clientX - canvasRef.current.offsetLeft, e.clientY - canvasRef.current.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvasRef.current.offsetLeft, e.clientY - canvasRef.current.offsetTop);
    };

    return (
        <canvas
            ref={canvasRef}
            width="800"
            height="600"
            onMouseDown={startDrawing}
            onMouseUp={stopDrawing}
            onMouseMove={draw}
        />
    );
}

export default DrawingCanvas;
