"use client"

import { useEffect, useRef } from "react"

export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl")
    if (!gl) return

    const vs = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `
    const fs = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        float d = length(p) * 0.06;
        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);
        float r = 0.05 / abs(p.y + sin((rx + time) * 1.0) * 0.45);
        float g = 0.05 / abs(p.y + sin((gx + time) * 1.0) * 0.45);
        float b = 0.05 / abs(p.y + sin((bx + time) * 1.0) * 0.45);
        gl_FragColor = vec4(r, g, b, 1.0);
      }
    `

    function compile(src: string, type: number) {
      const s = gl!.createShader(type)!
      gl!.shaderSource(s, src)
      gl!.compileShader(s)
      return s
    }

    const prog = gl.createProgram()!
    gl.attachShader(prog, compile(vs, gl.VERTEX_SHADER))
    gl.attachShader(prog, compile(fs, gl.FRAGMENT_SHADER))
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const verts = new Float32Array([
      -1, -1, 0,
       1, -1, 0,
      -1,  1, 0,
       1, -1, 0,
      -1,  1, 0,
       1,  1, 0,
    ])
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW)

    const pos = gl.getAttribLocation(prog, "position")
    gl.enableVertexAttribArray(pos)
    gl.vertexAttribPointer(pos, 3, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(prog, "resolution")
    const uTime = gl.getUniformLocation(prog, "time")

    let animId: number
    let t = 0

    function resize() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
      gl!.viewport(0, 0, canvas!.width, canvas!.height)
      gl!.uniform2f(uRes, canvas!.width, canvas!.height)
    }

    function frame() {
      t += 0.008
      gl!.uniform1f(uTime, t)
      gl!.drawArrays(gl!.TRIANGLES, 0, 6)
      animId = requestAnimationFrame(frame)
    }

    window.addEventListener("resize", resize)
    resize()
    frame()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
      gl.deleteProgram(prog)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "block",
        zIndex: 0,
      }}
    />
  )
}

export default WebGLShader