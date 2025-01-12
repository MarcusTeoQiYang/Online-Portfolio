import ReactLogo from '../../images/ReactLogo.png'
import VsCode from '../../images/VsCode.png'
import HTML from '../../images/HTML.png'
import CSS from '../../images/CSS.png'
import JS from '../../images/JS.png'

const particleConfig = {
  "particles": {
      "number": {
          "value": 6,
          "density": {
              "enable": true,
              "value_area": 800
          }
      },
      "line_linked": {
          "enable": false
      },
      "move": {
          "speed": 1,
          "out_mode": "out",
          "enable": true
      },
      "shape": {
          "type": [
              "image"
          ],
          "image": [
              {
                  "src": `${ReactLogo}`,
                  "height": 20,
                  "width": 20
              },
              {
                  "src": `${VsCode}`,
                  "height": 20,
                  "width": 20
              },
              {
                  "src": `${HTML}`,
                  "height": 20,
                  "width": 20
              },
              {
                "src": `${CSS}`,
                "height": 20,
                "width": 20
            },
            {
              "src": `${JS}`,
              "height": 20,
              "width": 20
          }
          ]
      },
      "color": {
          "value": "#CCC"
      },
      "size": {
          "value": 30,
          "random": false,
          "anim": {
              "enable": true,
              "speed": 4,
              "size_min": 10,
              "sync": false
          }
      }
  },
  "retina_detect": false
}
 
export default particleConfig;