import { buttonWrapper } from './common/buttonWrapper';
import { scoreWrapper }  from './common/scoreWrapper';
import { headerWrapper } from './common/headerWrapper';

export const App = () => {
  const appBody = document.querySelector('#calc-app');


  appBody.appendChild(headerWrapper());
  appBody.appendChild(scoreWrapper());
  appBody.appendChild(buttonWrapper());
};
