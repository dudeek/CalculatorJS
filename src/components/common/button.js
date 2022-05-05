import '../../styles/buttonStyles.scss'

export const Button = (text, buttonStyle, callback) => {
  const button = document.createElement('button');
  button.className = 'button';
  button.innerText = text;

  if(buttonStyle === 'normal') {
    button.className = 'button button--normal';
  } else if (buttonStyle === 'special') {
    button.className = 'button button--special';
  } else {
    button.className = 'button button--result';
  }

  button.addEventListener('click', callback)

  return button
}
