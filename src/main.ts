import vertexShader from './shader/vertexShader.glsl';
import fragmentShader from './shader/fragmentShader.glsl';
import { initVertexBuffer } from './lib/utils';

function main(){
    const cvs = document.querySelector<HTMLCanvasElement>('#webgl');

    if(!cvs) throw new Error('canvas not found!');

    const gl = getWebGLContext(cvs);

    if(!gl) throw new Error('cannot get webgl context!');

    initShaders(gl, vertexShader, fragmentShader);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.clear(gl.COLOR_BUFFER_BIT);

    let n = initVertexBuffer(gl);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0 ,n);
}

window.onload = main;