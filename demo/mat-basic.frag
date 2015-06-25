precision mediump float;

varying vec2 vUv;
varying vec3 vNormal;
uniform sampler2D iChannel0;

void main() {
  gl_FragColor = texture2D(iChannel0, vUv * vec2(4.0, 1.0));
  #ifdef WEBGL2
    gl_FragColor.rgb = vec3(1.0, 0.0, 0.0);
  #endif
}