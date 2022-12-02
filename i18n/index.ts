import { EN } from './en';
import { ZH } from './zh';

export function t(locale: string | undefined, key: string) {
  const keys = key.split('.');

  let text = {} as { readonly [key: string]: { readonly [key: string]: string } };

  switch (locale) {
    case 'en':
      text = EN;
      break;
    case 'zh':
      text = ZH;
      break;
    default:
      text = ZH;
  }

  try {
    return text[keys[0]][keys[1]];
  } catch (error) {
    console.log(error);
    return '';
  }
}
