/**
*  ........................................
*  . этот файл сгенерирован автоматически .
*  ........................................
*/

/** локаль */
type Locale = 'ru' | 'en' | 'kk' | 'ky' | 'uz' | 'hy'
    
/** куки */
type Cookies = {
  lf_branch?: string
  uicult2?: Locale
} & Record<string, string>
    
interface Window {
  OWNLOADS_APP_CONFIG: {
    apiFirmsUrlPrefix: string
    apiUrlPrefix: string
    atiDocsUrl: string
    baseDomain: string
    billingSiteUrl: string
    chatUrl: string
    filesUrl: string
    gwApiUrlPrefix: string
    gwUrlPrefix: string
    helpSiteUrl: string
    loadsSiteUrl: string
    ordersPageUrl: string
    sentryDsn: string
    sentryRelease: string
    traceSiteUrl: string
    webApiUrlPrefix: string
    wssUrlPrefix: string
  }
  showMessage(
    level: AlertLevel,
    text?: string,
    options?: Record<string, string>
  ): void
}

type AlertLevel = 'info' | 'alert' | 'success'
    