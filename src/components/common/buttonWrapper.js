import '../../styles/buttonWrapperStyles.scss'
import { Button } from './button'

export const buttonWrapper = () => {
  const btnWrapper = document.createElement('div');
  btnWrapper.className = 'buttonWrapper';

  let operandSign = '';
  let result = '';
  let sum = 0;
  const score = document.querySelector('.score');
  score.innerText = sum;

  const resetScore = () => {
    sum = 0;
    result = '';
    score.innerText = sum;
  }

  const backspaceScore = () => {
    if(result.length > 1) {
      result = result.slice(0, -1);
      score.innerText = score.textContent.slice(0,-1);
    } else if ( result.length === 1) {
      result = '';
      score.innerText = 0;
    }
  }

  const addToDisplay = (number) => {
    result += number;
    score.innerText = result;
  }

  const addNumbers = (num) => {
    result = '';
    sum += Number(num);
    score.innerText = sum;
    operandSign = '';
    operandSign = '+';

    return sum;
  }

  const substractNumbers = (num) => {
    result = '';
    if(sum === 0 ) {
      sum = Number(num);
    } else {
      sum -= Number(num);
    }

    score.innerText = sum;
    operandSign = '';
    operandSign = '-';

    return sum;
  }

  const multipleNumbers = (num) => {
    if(sum === 0) {
      sum = Number(num);
    } else {
      if(result !== '') {
        sum *= Number(num);
      }
    }

    operandSign = '';
    operandSign = '*';
    result = '';
    score.innerText = sum;

    return sum;
  }

  const divideNumbers = (num) => {
    if(sum === 0) {
      sum = Number(num);
    } else {
      if(result !== '') {
        sum /= Number(num);
      }
    }
    operandSign = '';
    operandSign = '/';
    result = '';
    score.innerText = sum;

    return sum;
  }

  const displaySum = (num, operand) => {
    if(result !== '') {
      switch (operand) {
        case '+':
          sum += Number(num);
          break;
        case '-':
          sum -= Number(num);
          break;
        case '/':
          sum /= Number(num);
          break;
        case '*':
          sum *= Number(num);
      }
    }

    result = '';
    score.innerText = sum;
  }

  btnWrapper.appendChild(Button('7', 'normal', () => {
    addToDisplay(7);
  }))
  btnWrapper.appendChild(Button('8', 'normal', () => {
    addToDisplay(8);
  }))
  btnWrapper.appendChild(Button('9', 'normal', () => {
    addToDisplay(9);
  }))
  btnWrapper.appendChild(Button('DEL', 'special', () => {
    backspaceScore();
  }))



  btnWrapper.appendChild(Button('4', 'normal', () => {
    addToDisplay(4);
  }))
  btnWrapper.appendChild(Button('5', 'normal', () => {
    addToDisplay(5);
  }))
  btnWrapper.appendChild(Button('6', 'normal', () => {
    addToDisplay(6);
  }))
  btnWrapper.appendChild(Button('+', 'normal', () => {
    addNumbers(result)
  }))



  btnWrapper.appendChild(Button('1', 'normal', () => {
    addToDisplay(1);
  }))
  btnWrapper.appendChild(Button('2', 'normal', () => {
    addToDisplay(2);
  }))
  btnWrapper.appendChild(Button('3', 'normal', () => {
    addToDisplay(3);
  }))
  btnWrapper.appendChild(Button('-', 'normal', () => {
    substractNumbers(result)
  }))




  btnWrapper.appendChild(Button('.', 'normal', () => {
    if(!result.includes('.')) {
      result = result.concat('.');
      score.innerText = result;
    }
  }))
  btnWrapper.appendChild(Button('0', 'normal', () => {
    addToDisplay(0);
  }))
  btnWrapper.appendChild(Button('/', 'normal', () => {
    divideNumbers(result)
  }))
  btnWrapper.appendChild(Button('x', 'normal', () => {
    multipleNumbers(result)
  }))



  btnWrapper.appendChild(Button('RESET', 'special', () => {
    resetScore();
  }))
  btnWrapper.appendChild(Button('=', 'result', () => {
    displaySum(result, operandSign);
  }))

  return btnWrapper
}
