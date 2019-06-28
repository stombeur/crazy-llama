const icon =
  'data:image/png;base64,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';
class LlamaKun {
  constructor() {}

  getInfo() {
    return {
      id: 'crazyllama',
      name: 'Crazy Llama',

      colour: '#FF33CC',
      colourSecondary: '#7CB342',
      colourTertiary: '#689F38',

      menuIconURI: icon,

      blocks: [
        {
          opcode: 'penUp',

          blockType: Scratch.BlockType.COMMAND,

          text: 'Pen up'
          //arguments: {}
        },
        {
          opcode: 'penDown',

          blockType: Scratch.BlockType.COMMAND,

          text: 'Pen Down'
          // arguments: {}
        },
        {
          opcode: 'moveSpeed',

          blockType: Scratch.BlockType.COMMAND,

          text: 'Set move speed to [SPEED]',
          arguments: {
            SPEED: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            }
          }
        },
        {
          opcode: 'goTo',

          blockType: Scratch.BlockType.COMMAND,

          text: 'Go to [X] [Y]',
          arguments: {
            X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            },
            Y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        },
        {
          opcode: 'moveToward',

          blockType: Scratch.BlockType.COMMAND,

          text: 'Move Toward [X] [Y]',
          arguments: {
            X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            },
            Y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        },
        {
          opcode: 'moveForward',

          blockType: Scratch.BlockType.COMMAND,

          text: 'Move Forward [AMOUNT]',
          arguments: {
            AMOUNT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        }
        ,
        {
          opcode: 'face',

          blockType: Scratch.BlockType.COMMAND,

          text: 'Face [ANGLE] degrees',
          arguments: {
            ANGLE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 90
            }
          }
        },
        {
          opcode: 'turnLeft',

          blockType: Scratch.BlockType.COMMAND,

          text: 'Turn LEFT [ANGLE] degrees',
          arguments: {
            ANGLE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 90
            }
          }
        },
        {
          opcode: 'turnRight',

          blockType: Scratch.BlockType.COMMAND,

          text: 'Turn RIGHT [ANGLE] degrees',
          arguments: {
            ANGLE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 90
            }
          }
        },
        {
          opcode: 'goToNamed',

          blockType: Scratch.BlockType.COMMAND,

          text: 'Move to [NAME1] [NAME2]',
          arguments: {
            NAME1: {
              type: Scratch.ArgumentType.STRING,
              menu: 'namedGoTo',
              defaultValue: 'top'
            },
            NAME2: {
              type: Scratch.ArgumentType.STRING,
              menu: 'namedGoTo',
              defaultValue: 'left'
            }
          }
        }
      ],
      menus: {
        'namedGoTo': {
          acceptReporters: true,
          items: [{text: 'top', value: 'top'},{text: 'bottom', value: 'bottom'},{text: 'left', value: 'left'},{text: 'right', value: 'right'},{text: 'center', value: 'center'}]
        }
      }
    };
  }
  penUp() {
    return this.fetchUrl('pen.up');
  }

  penDown() {
    return this.fetchUrl('pen.down');
  }

  moveSpeed({ SPEED }) {
    return this.fetchUrl('move.speed/' + SPEED);
  }

  goTo({ X, Y }) {
    return this.fetchUrl('coord/' + X + '/' + Y);
  }

  moveToward({ X, Y }) {
    return this.fetchUrl('move.toward/' + X + '/' + Y);
  }

  moveForward({ AMOUNT }) {
    return this.fetchUrl('move.forward/' + AMOUNT);
  }

  goToNamed({ NAME1, NAME2 }) {
    return this.fetchUrl('coord/' + NAME1 + '/' + NAME2);
  }

  face({ANGLE}) {
    return this.fetchUrl('move.absturn/' + ANGLE);    
  }

  turnLeft({ANGLE}) {
    return this.fetchUrl('move.left/' + ANGLE);    
  }

  turnRight({ANGLE}) {
    return this.fetchUrl('move.right/' + ANGLE);    
  }

  fetchUrl(command, host) {
    let fetchme = host ? host + command : 'http://localhost:4242/' + command;
    return new Promise(resolve => {
      fetch(fetchme)
        .then(res => res.text())
        .then(resolve)
        .catch(err => resolve(''));
    });
  }

}

Scratch.extensions.register(new LlamaKun());
