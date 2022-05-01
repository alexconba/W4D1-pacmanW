/** @format */

// Your CODE goes here/** @format */

let pacmanMap = `
WWWWWWWWWWWWWWWWWWWWWWWWWWWW
W............WW............W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W*WWWW.WWWWW.WW.WWWWW.WWWW*W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W..........................W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W......WW....WW....WW......W
WWW.WW.WWWWW.WW.WWWWW.WW.WWW
WWW.WW.WWWWW.WW.WWWWW.WW.WWW
WWW.WW.WW..........WW.WW.WWW
WWW.WW.WW.WWW--WWW.WW.WW.WWW
WWW.WW.WW.WooooooW.WW.WW.WWW
..........WooooooW..........
WWWWWW.WW.WooooooW.WW.WWWWWW
WWWWWW.WW.WWWWWWWW.WW.WWWWWW
WWWWWW.WW..........WW.WWWWWW
WWWWWW.WW.WWWWWWWW.WW.WWWWWW
WWWWWW.WW.WWWWWWWW.WW.WWWWWW
W............WW............W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W*WWWW.WWWWW.WW.WWWWW.WWWW*W
W...WW................WW...W
WWW.WW.WW.WWWWWWWW.WW.WW.WWW
WWW.WW.WW.WWWWWWWW.WW.WW.WWW
W......WW....WW....WW......W
W.WWWWWWWWWW.WW.WWWWWWWWWW.W
W.WWWWWWWWWW.WW.WWWWWWWWWW.W
W..........................W
WWWWWWWWWWWWWWWWWWWWWWWWWWWW
`
  .split("\n")
  .map((f) => f.split(""));

class Map {
  constructor() {
    /* Fill the code */
  }

  keyboard_event() {}
  update() {}
  draw(delta, ctx) {
    /* Fill the code */
    const totalRadio = 1024 / pacmanMap.length;
    for (let y = 0; y < pacmanMap.length; y++) {
      for (let x = 0; x < pacmanMap[y].length; x++) {
        ctx.beginPath();
        const mapCharter = pacmanMap[y][x];
        if (mapCharter === "W") {
          ctx.rect(x * totalRadio, y * totalRadio, totalRadio, totalRadio);
          ctx.fillStyle = "green";
          // ctx.closePath();
          ctx.fill();
          //ctx.stroke();
        }
        if (mapCharter === ".") {
          ctx.arc(
            (x * totalRadio + totalRadio) / 2,
            (y * totalRadio + totalRadio) / 2,
            7,
            0,
            2 * Math.PI
          );
          ctx.strokeStyle = "orange";
          ctx.fillStyle = "yellow";
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
      }
    }
  }
}
