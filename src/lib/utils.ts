export function cvsPos2WebGLPos(cvs: HTMLCanvasElement, x: number, y: number): {x: number, y: number} {
    let cvsBound = cvs.getBoundingClientRect();
    let l = cvsBound.left, t = cvsBound.top, h = cvsBound.height, w = cvsBound.width;
    let mouseL = x - l, mouseT = y - t;
    return {
        x: (mouseL * 2 - w)/w,
        y: (h - mouseT * 2)/h
    }
}

export function initVertexBuffer(gl: WebGLRenderingContext): number {
    let points = new Float32Array([
        0.5, 0.5, 1.0, 1.0, 0.0,
        -0.5, 0.5, 0.0, 1.0, 1.0,
        0.5, -0.5, 1.0, 1.0, 1.0,
        -0.5, -0.5, 1.0, 0.0, 1.0
    ]);
    const n = 4;
    const FSIZE = points.BYTES_PER_ELEMENT;

    let VertexBuffer = gl.createBuffer();

    if(!VertexBuffer) {
        throw new Error('fail to create buffer!');
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, VertexBuffer);

    gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW);

    let a_Position = gl.getAttribLocation((gl as any).program, 'a_Position');
    let a_Color = gl.getAttribLocation((gl as any).program, 'a_Color');

    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 5, 0);
    gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, FSIZE * 5, FSIZE * 2);

    gl.enableVertexAttribArray(a_Position);
    gl.enableVertexAttribArray(a_Color);

    return n;
}

export function loadImage(url: string): Promise<HTMLImageElement> {
    let img = new Image();
    img.src = url;
    return new Promise((res, rej) => {
        img.onload = () => {
            res(img);
        };
        img.onerror = rej;
    });
}