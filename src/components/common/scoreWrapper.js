import { score } from './score';
import '../../styles/scoreWrapperStyles.scss'

export const scoreWrapper = () => {
  const scoreWrapper = document.createElement('div');
  scoreWrapper.className = 'scoreWrapper';

  scoreWrapper.appendChild(score())

  return scoreWrapper
}
