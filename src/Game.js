import React, { Component } from 'react';

class Game extends Component {
    state = {
        gravity: 0.8,
        lift: -20,
        bird: {
            x: 50,
            y: 100,
            velocity: 0,
            radius: 10
        },
        bullet: {
          x: 50,
          y:100
        },
        cuadro: {
          x: 100,
          y: 100
        }
    }
draw = () => {
        const ctx = this.refs.canvas.getContext("2d");
        ctx.canvas.width  = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        ctx.fillStyle = "#f2f2f2";
        ctx.fillRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);           
        ctx.beginPath();
        ctx.fillStyle = "#000000"; //red
        ctx.arc(this.state.bird.x, this.state.bird.y, this.state.bird.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = "#111111"; //red
        ctx.fillRect(this.state.bullet.x, this.state.bullet.y - 2, 150, 5);
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(this.state.cuadro.x - 200, 0, 150, 150);
    }
update = () => {
        let newV = (this.state.bird.velocity + this.state.gravity) * 0.9
        this.setState({
          bird: {
            x: 50,
            y: Math.max(
              Math.min(
                this.state.bird.y + newV,
                this.refs.canvas.height - this.state.bird.radius
              ),
              0
            ),
            velocity: newV,
            radius: 40
          },
          bullet: {
            x: Math.max(
              Math.min(
                this.state.bullet.y - newV,
                this.refs.canvas.height + this.state.bird.radius
              ),
              0
            ),
            y: 100
          },
          cuadro: {
            x: Math.max(
              Math.min(
                this.state.bird.y + newV,
                this.refs.canvas.width + this.state.bird.radius
              ),
              0
            ),
          }
        });
    }
componentDidMount() {
        setInterval(() => {
          this.update();
          this.draw();
        }, 1000 / 60);
       document.addEventListener("keydown", e =>
          e.keyCode === 32 ? this.setState({ 
            bird: {
              x: 50,
              y: this.state.bird.y,
              velocity: this.state.bird.velocity + this.state.lift,
              radius: 10
              }
            }) : null
        );
    }
render() {
        return (
            <div>
                <canvas ref="canvas" width={450} height={650} />
            </div>
        );
    }
}
export default Game;