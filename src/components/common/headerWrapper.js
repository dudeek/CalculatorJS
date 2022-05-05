import { toggleTheme } from './toggleTheme';
import '../../styles/headerWrapper.scss'

export const headerWrapper = () => {
  const headerWrapper = document.createElement('div');
  headerWrapper.className = 'headerWrapper';

  const title = document.createElement('span');
  title.innerText = 'calc';
  title.className = 'headerWrapper__title';


  headerWrapper.appendChild(title);
  headerWrapper.appendChild(toggleTheme());

  return headerWrapper;
}
