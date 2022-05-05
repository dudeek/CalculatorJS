import '../../styles/toggleTheme.scss'

export const toggleTheme = () => {
  const toggleTheme = document.createElement('div');
  const themeOptions = document.createElement('div');
  const inputsWrapper = document.createElement('div');
  const labelsWrapper = document.createElement('div');
  const caption = document.createElement('span');

  const option1 = document.createElement('input');
  const option2 = document.createElement('input');
  const option3 = document.createElement('input');

  const label1 = document.createElement('label');
  const label2 = document.createElement('label');
  const label3 = document.createElement('label');

  label1.innerText = '1';
  label2.innerText = '2';
  label3.innerText = '3';

  option1.setAttribute('type', 'radio');
  option2.setAttribute('type', 'radio');
  option3.setAttribute('type', 'radio');

  option1.setAttribute('id', 'one');
  option2.setAttribute('id', 'two');
  option3.setAttribute('id', 'three');

  option1.setAttribute('name', 'options');
  option2.setAttribute('name', 'options');
  option3.setAttribute('name', 'options');

  label1.setAttribute('for', 'one');
  label2.setAttribute('for', 'two');
  label3.setAttribute('for', 'three');

  option1.setAttribute('checked', '')

  toggleTheme.className = 'toggleWrapper';
  themeOptions.className = 'toggleWrapper__themeOptions';
  inputsWrapper.className = 'toggleWrapper__inputsWrapper';
  labelsWrapper.className = 'toggleWrapper__labelWrapper';

  label1.className = 'toggleWrapper__label';
  label2.className = 'toggleWrapper__label';
  label3.className = 'toggleWrapper__label';

  option1.className = 'toggleWrapper__input';
  option2.className = 'toggleWrapper__input';
  option3.className = 'toggleWrapper__input';
  caption.className = 'toggleWrapper__caption';

  caption.innerText = 'THEME';


  labelsWrapper.append(label1, label2, label3)
  inputsWrapper.append(option1, option2, option3);
  themeOptions.append(labelsWrapper, inputsWrapper);
  toggleTheme.append(caption, themeOptions);

  return toggleTheme
}
