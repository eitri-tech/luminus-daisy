/* eslint-disable @typescript-eslint/no-explicit-any */
interface Window {
    EITRI?: {
        connector?: {
          invokeMethod?: (method: string) => void;
        };
        miniAppConfigs: {
          superAppData:{
            safeAreaInsets: {
              top: number,
              bottom: number
            },
            platform: string
          }
        },
      },
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

  
