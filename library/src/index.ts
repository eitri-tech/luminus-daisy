/* eslint-disable @typescript-eslint/no-explicit-any */
import './index.css';

declare global {
    interface Window {
      EITRI: any
      TOKEN_TABLE: any,
      __eitriAppConf: {
        "name": string,
        "title": string,
        "slug": string,
        "organization": any,
        "id": string,
        "public-key": string,
        "organizationId": string,
        "applicationId": string,
        "version": string,
        "eitri-luminus": string,
        "eitri-bifrost": string,
        "application": string
    },
      SuperAppConnector: any
      google: any
      dropdownListenner: any
      ameHistory: any
      localStorage: any
      __miniAppConf: any
      __WORKSPACE_USER_ID: string
      miniappComponentsVersion: string
      ReactNativeWebView?: any // Presente quando o SuperApp é RN
      webkit?: {
        messageHandlers?: {
          eitriBridge?: any // eitri-player para iOS
        }
      }
      EitriAndroidBridge?: {
        postMessage: () => void
      } // eitri-player para Android
    }
  }

export { default as Page } from './components/Page/page';
export { default as Button } from './components/Button/Button';
export { default as View } from './components/View';
export { default as Text } from './components/Text';
