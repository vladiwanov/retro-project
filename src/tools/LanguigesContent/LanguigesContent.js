import { useSelector } from 'react-redux';
import LanguageContentSelector from 'tools/LanguageContentSelector';
import { getLanguageMemoised } from 'redux/language';

export default function LanguageContent(variable) {
  const language = useSelector(getLanguageMemoised);
  // const rezult = LanguageContentSelector(language);
  return LanguageContentSelector(language)[variable];
}
