/**
*  ........................................
*  . этот файл сгенерирован автоматически .
*  ........................................
*/

import type { Schemas } from './schemas';

export type Paths = {
  '/gw/orders/contracts': {
    get: {
      params?: {
        'cargoOwnerRequisitesId'?: string
        'dealId'?: string
      }
      headers: {
        'X-Authenticated-UserId': string
      }
      headers?: {
        'X-Branch'?: string
      }
      res: Schemas.ContractView
    }
  }
  '/gw/public/v1/orders/driver/map_route/by_deal': {
    get: {
      params?: {
        'deal_id'?: string
        'south_west_lat'?: number
        'south_west_lng'?: number
        'north_east_lat'?: number
        'north_east_lng'?: number
        'zoom'?: number
        'interval'?: number
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Schemas.DealRoutedMap
    }
  }
  '/gw/public/v1/orders/driver/map/history': {
    get: {
      params?: {
        'deal_id'?: string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/public/v1/orders/driver/map/route_info': {
    get: {
      params?: {
        'deal_id'?: string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/mobile/v1.2/orders/catalogs_copies/drivers': {
    get: {
      params?: {
        'cargoOwnerAtiId'?: string
      }
      headers: {
        'X-Authenticated-UserId': string
      }
      headers?: {
        'X-Branch'?: string
      }
    }
  }
  '/gw/mobile/v1.2/orders/catalogs_copies/trucks': {
    get: {
      headers: {
        'X-Authenticated-UserId': string
      }
      headers?: {
        'X-Branch'?: string
      }
    }
  }
  '/gw/mobile/v1.2/orders/docs/{documentId}/access': {
    put: {
      pathParams: {
        'documentId': string
      }
      headers: {
        'X-Authenticated-UserId': string
      }
      headers?: {
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.DealDocumentAccessDto
      >
    }
  }
  '/gw/mobile/v1.2/orders/files': {
    post: {
      headers: {
        'X-Authenticated-UserId': string
      }
      headers?: {
        'X-Branch'?: string
      }
      body?: unknown
      res: Schemas.DealFileView
    }
    get: {
      params?: {
        'dealId'?: string
      }
      headers: {
        'X-Authenticated-UserId': string
      }
      headers?: {
        'X-Branch'?: string
      }
      res: Schemas.DealFilesAndDocumentsView
    }
  }
  '/gw/mobile/v1.2/orders/files/{fileId}': {
    delete: {
      pathParams: {
        'fileId': string
      }
      headers: {
        'X-Authenticated-UserId': string
      }
      headers?: {
        'X-Branch'?: string
      }
    }
  }
  '/gw/mobile/v1.2/orders/files/{fileId}/access': {
    post: {
      pathParams: {
        'fileId': string
      }
      headers: {
        'X-Authenticated-UserId': string
      }
      headers?: {
        'X-Branch'?: string
      }
      body?: string
    }
    put: {
      pathParams: {
        'fileId': string
      }
      headers: {
        'X-Authenticated-UserId': string
      }
      headers?: {
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.DealFileAccessDto
      >
    }
  }
  '/gw/mobile/v1.2/orders/get_full_orders_info': {
    get: {
      params?: {
        'role'?: Schemas.OrderRole
        'tab'?: Schemas.OrderTab
        'contactId'?: number
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Schemas.OrdersInformationView
    }
  }
  '/gw/mobile/v1.2/orders/counters': {
    get: {
      params?: {
        'role'?: Schemas.OrderRole
        'contactId'?: number
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Record<string, unknown>
    }
    post: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.OrdersCountersDto
      >
      res: Record<string, unknown>
    }
  }
  '/gw/mobile/v1.2/orders/file_types': {
    get: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Array<
        Schemas.DealFileTypeInfo
      >
    }
  }
  '/gw/mobile/v1.2/orders/status_models': {
    get: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Array<
        Schemas.InWorkStatusModelInfo
      >
    }
  }
  '/gw/mobile/v1.2/orders/status_models/{model}/statuses': {
    get: {
      pathParams: {
        'model': number
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Record<string, unknown>
    }
  }
  '/gw/mobile/v1.2/orders/{dealId}': {
    get: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Schemas.FullOrderView
    }
    delete: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/mobile/v1.2/orders/{dealId}/finish': {
    put: {
      pathParams: {
        'dealId': string
      }
      params?: {
        'waitPayment'?: boolean
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/mobile/v1.2/orders/reserve/{loadId}': {
    put: {
      pathParams: {
        'loadId': string
      }
      params?: {
        'dealKind'?: Array<
          | Schemas.DealKinds
        >
        'inviteContactId'?: number
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Schemas.FullOrderView
    }
    delete: {
      pathParams: {
        'loadId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/mobile/v1.2/orders/driver': {
    put: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.ChangeDriverDto
      >
    }
  }
  '/gw/mobile/v1.2/orders/truck': {
    put: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.ChangeTruckDto
      >
    }
  }
  '/gw/mobile/v1.2/orders/rate': {
    put: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.ChangeRateDto
      >
    }
  }
  '/gw/mobile/v1.2/orders/unilateral': {
    post: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.SaveUnilateralOrderDto
      >
      res: Schemas.FullOrderView
    }
  }
  '/gw/mobile/v1.2/orders/takeload/{loadId}': {
    post: {
      pathParams: {
        'loadId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.LoadTakeInfoDto
      >
      res: Schemas.FullOrderView
    }
  }
  '/gw/mobile/v1.2/orders/{dealId}/pay_docs': {
    post: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.PayDocsDto
      >
    }
  }
  '/gw/mobile/v1.2/orders/{dealId}/inwork': {
    post: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.DealInWorkDto
      >
    }
  }
  '/gw/mobile/v1.2/orders/{dealId}/move_to_work': {
    post: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: number
    }
  }
  '/gw/mobile/v1.2/orders/full_orders_info': {
    post: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.FullOrdersInfoDto
      >
      res: Schemas.OrdersInformationView
    }
  }
  '/gw/mobile/v1.2/orders/{dealId}/delete_obsolete': {
    delete: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: boolean
    }
  }
  '/gw/mobile/v1.2/orders/init/transport_companies': {
    get: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Array<
        Schemas.TransportCompanyView
      >
    }
  }
  '/gw/mobile/v1.2/orders/invites/{loadId}': {
    delete: {
      pathParams: {
        'loadId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/v2/orders/unilateral': {
    post: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.SaveUnilateralOrderDtoNew
      >
      res: Schemas.UnilateralOrderViewOfFullDealView
    }
  }
  '/gw/v1.2/orders/documents/{parentDocumentId}/invoice': {
    post: {
      pathParams: {
        'parentDocumentId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Schemas.DocumentMinView
    }
  }
  '/gw/v1.2/orders/documents/{parentDocumentId}/act': {
    post: {
      pathParams: {
        'parentDocumentId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Schemas.DocumentMinView
    }
  }
  '/gw/v1.2/orders/documents/{parentDocumentId}/unilateral_dissolution': {
    post: {
      pathParams: {
        'parentDocumentId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Schemas.DocumentMinView
    }
  }
  '/gw/v1.2/orders/cargo_owner/{dealId}/driver_tracker_points': {
    post: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        Schemas.DriverTrackerPointDTO
      >
      res: Array<
        Schemas.DriverTrackerPointView
      >
    }
  }
  '/gw/v1.2/orders/carrier/{dealId}/driver_tracker_points': {
    get: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Array<
        Schemas.DriverTrackerPointView
      >
    }
    put: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        Schemas.DriverTrackerPointDTO
      >
      res: Array<
        Schemas.DriverTrackerPointView
      >
    }
    post: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        Schemas.DriverTrackerPointDTO
      >
      res: Array<
        Schemas.DriverTrackerPointView
      >
    }
    delete: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/v1.2/orders/carrier/map_route/by_deal': {
    get: {
      params?: {
        'deal_id'?: string
        'south_west_lat'?: number
        'south_west_lng'?: number
        'north_east_lat'?: number
        'north_east_lng'?: number
        'zoom'?: number
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Array<
        Schemas.DealMapView
      >
    }
  }
  '/gw/v1.2/orders/carrier/map/history': {
    get: {
      params?: {
        'deal_id'?: string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Array<
        Schemas.MapHistoryView
      >
    }
  }
  '/gw/v1.2/orders/carrier/{dealId}/tracker_access': {
    post: {
      pathParams: {
        'dealId': string
      }
      params?: {
        'value'?: Array<
          | Schemas.TrackerOwnerAccess
        >
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/v1.2/orders/docs/{documentId}/access': {
    put: {
      pathParams: {
        'documentId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.DealDocumentAccessDto
      >
    }
  }
  '/gw/v1.2/orders/files': {
    post: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: unknown
      res: Schemas.DealFileView
    }
  }
  '/gw/v1.2/orders/files/{fileId}': {
    delete: {
      pathParams: {
        'fileId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/v1.2/orders/files/{fileId}/access': {
    post: {
      pathParams: {
        'fileId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: string
    }
    put: {
      pathParams: {
        'fileId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.DealFileAccessDto
      >
    }
  }
  '/gw/v1.2/orders/{dealId}': {
    get: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Schemas.OrderViewOfFullDealView
    }
    delete: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: string
    }
  }
  '/gw/v1.2/orders/file_types': {
    get: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Array<
        Schemas.DealFileTypeInfo
      >
    }
  }
  '/gw/v1.2/orders/status_models': {
    get: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Array<
        Schemas.InWorkStatusModelInfo
      >
    }
  }
  '/gw/v1.2/orders/status_models/{model}/statuses': {
    get: {
      pathParams: {
        'model': number
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Record<string, unknown>
    }
  }
  '/gw/v1.2/orders/unilateral': {
    post: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.SaveUnilateralOrderDto2
      >
      res: Schemas.UnilateralOrderViewOfFullDealView
    }
  }
  '/gw/v1.2/orders/search': {
    post: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.OrderFilter2
      >
      res: Array<
        Schemas.OrderViewOfFullDealView
      >
    }
  }
  '/gw/v1.2/orders/get_orders_statuses': {
    post: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        string
      >
      res: Record<string, unknown>
    }
  }
  '/gw/v1.2/orders/{dealId}/inwork': {
    post: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.DealInWorkDto
      >
      res: boolean
    }
  }
  '/gw/v1.2/orders/{dealId}/pay_docs': {
    post: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.PayDocsDto
      >
    }
  }
  '/gw/v1.2/orders/{dealId}/move_to_work': {
    post: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.OrderToWorkDtoInbox
      >
    }
  }
  '/gw/v1.2/orders/{dealId}/accept': {
    post: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.DealAcceptFromLoadIntegratorsDtoInbox
      >
      res: Schemas.DocumentInfoShortView
    }
  }
  '/gw/v1.2/orders/{dealId}/accept_file': {
    post: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: unknown
      res: Schemas.DocumentInfoShortView
    }
  }
  '/gw/v1.2/orders/takeload/{loadId}': {
    post: {
      pathParams: {
        'loadId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.LoadTakeInfoIntegratorsDto
      >
      res: Schemas.OrderViewOfFullDealView
    }
  }
  '/gw/v1.2/orders/{dealId}/finish': {
    put: {
      pathParams: {
        'dealId': string
      }
      params?: {
        'waitPayment'?: boolean
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/v1.2/orders/driver': {
    put: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.ChangeDriverDto
      >
    }
  }
  '/gw/v1.2/orders/truck': {
    put: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.ChangeTruckDto
      >
    }
  }
  '/gw/v1.2/orders/rate': {
    put: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.ChangeRateDto
      >
    }
  }
  '/gw/v1.2/orders/contacts': {
    put: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.ChangeContactsDto
      >
    }
  }
  '/gw/v1.2/orders/{dealId}/decline': {
    delete: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.DeclineOrderIntegratorsDto
      >
    }
  }
  '/gw/v1.2/orders/{dealId}/delete_obsolete': {
    delete: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/v1.2/orders/invites': {
    post: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.PersonalInvitationDTO
      >
    }
  }
  '/gw/v1.2/orders/invites/counter_offer': {
    post: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.PersonalOfferInvitationDTO
      >
    }
  }
  '/gw/v1.2/orders/invites/{loadId}': {
    get: {
      pathParams: {
        'loadId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Array<
        Schemas.LoadPersonalInvitationView
      >
    }
  }
  '/gw/v1.2/orders/invites/{loadId}/{takerPersistentUserId}': {
    get: {
      pathParams: {
        'loadId': string
        'takerPersistentUserId': number
      }
      params?: {
        'dealId'?: string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Schemas.LoadPersonalInvitationView
    }
  }
  '/gw/v1.2/orders/invites/received/{loadId}': {
    get: {
      pathParams: {
        'loadId': string
      }
      params?: {
        'dealId'?: string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Schemas.PersonalInvitationView3
    }
  }
  '/gw/v1.2/orders/invites/my': {
    get: {
      params?: {
        'role'?: Schemas.OrderRole
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Array<
        Schemas.PersonalInvitationView3
      >
    }
  }
  '/gw/v1.2/orders/invites/{loadId}/{contactId}': {
    delete: {
      pathParams: {
        'loadId': string
        'contactId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/v1.2/orders/invites/by_taker_id/{loadId}/{takerAtiId}': {
    delete: {
      pathParams: {
        'loadId': string
        'takerAtiId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/v1.2/orders/redirect/to_deal/{dealId}': {
    get: {
      pathParams: {
        'dealId': string
      }
      params?: {
        'action'?: string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: string
    }
  }
  '/gw/webapi/orders/unilateral': {
    post: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.SaveUnilateralOrderDtoNew
      >
      res: Schemas.DealOrderView2
    }
  }
  '/gw/orders/documents/{parentDocumentId}/invoice': {
    post: {
      pathParams: {
        'parentDocumentId': string
      }
      params?: {
        'docSourceType'?: Schemas.DealDocumentSourceTypes
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/documents/{parentDocumentId}/act': {
    post: {
      pathParams: {
        'parentDocumentId': string
      }
      params?: {
        'docSourceType'?: Schemas.DealDocumentSourceTypes
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/documents/{parentDocumentId}/poa': {
    post: {
      pathParams: {
        'parentDocumentId': string
      }
      params?: {
        'docSourceType'?: Schemas.DealDocumentSourceTypes
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/documents/{parentDocumentId}/unilateral_dissolution': {
    post: {
      pathParams: {
        'parentDocumentId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/carrier/{dealId}/driver_tracker_points': {
    get: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Array<
        Schemas.DriverTrackerPointView
      >
    }
    put: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        Schemas.DriverTrackerPointDTO
      >
    }
    post: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        Schemas.DriverTrackerPointDTO
      >
    }
    delete: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/carrier/{dealId}/tracker_access': {
    post: {
      pathParams: {
        'dealId': string
      }
      params?: {
        'value'?: Array<
          | Schemas.TrackerOwnerAccess
        >
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/carrier/{dealId}/driver_data_expected': {
    post: {
      pathParams: {
        'dealId': string
      }
      params?: {
        'value'?: boolean
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/catalogs_copies/drivers': {
    get: {
      params?: {
        'cargoOwnerAtiId'?: string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/catalogs_copies/trucks': {
    get: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/order/points_doc/{dealId}': {
    get: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Array<
        Schemas.Point
      >
    }
  }
  '/gw/orders/docs/{documentId}/access': {
    post: {
      pathParams: {
        'documentId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: string
    }
    put: {
      pathParams: {
        'documentId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.DealDocumentAccessDto
      >
    }
  }
  '/gw/orders/files': {
    post: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: unknown
    }
    get: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/{dealId}/files': {
    post: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: unknown
    }
    get: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/files/{fileId}': {
    delete: {
      pathParams: {
        'fileId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/{dealId}/files/{fileId}': {
    delete: {
      pathParams: {
        'fileId': string
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/files/{fileId}/access': {
    post: {
      pathParams: {
        'fileId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: string
    }
    put: {
      pathParams: {
        'fileId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.DealFileAccessDto
      >
    }
  }
  '/gw/orders/{dealId}/files/{fileId}/access': {
    post: {
      pathParams: {
        'fileId': string
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: string
    }
    put: {
      pathParams: {
        'fileId': string
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.DealFileAccessDto
      >
    }
  }
  '/gw/orders/loads/{loadId}': {
    post: {
      pathParams: {
        'loadId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/limits/{atiId}/{contractorAtiId}/check': {
    get: {
      pathParams: {
        'atiId': string
        'contractorAtiId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/get_full_orders_info': {
    get: {
      params?: {
        'role'?: Schemas.OrderRole
        'tab'?: Schemas.OrderTab
        'contactId'?: number
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Schemas.OrdersInformation
    }
  }
  '/gw/orders/counters': {
    get: {
      params?: {
        'role'?: Schemas.OrderRole
        'contactId'?: number
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Record<string, unknown>
    }
    post: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.OrdersCountersDto
      >
      res: Record<string, unknown>
    }
  }
  '/gw/orders/{dealId}': {
    get: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
    delete: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: string
    }
  }
  '/gw/orders/form-view/{dealId}': {
    get: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Schemas.OrderFormView
    }
  }
  '/gw/orders/init': {
    get: {
      params?: {
        'excludeDictionaries'?: boolean
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/{loadId}/{takerAtiId}': {
    get: {
      pathParams: {
        'loadId': string
        'takerAtiId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/file_types': {
    get: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/status_models': {
    get: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/status_models/{model}/statuses': {
    get: {
      pathParams: {
        'model': number
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/reserve/{loadId}': {
    put: {
      pathParams: {
        'loadId': string
      }
      params?: {
        'dealKind'?: Array<
          Array<
            | Schemas.DealKinds
          >
        >
        'inviteContactId'?: number
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
    delete: {
      pathParams: {
        'loadId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/{dealId}/finish': {
    put: {
      pathParams: {
        'dealId': string
      }
      params?: {
        'waitPayment'?: boolean
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/finish': {
    put: {
      params?: {
        'waitPayment'?: boolean
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        string
      >
    }
  }
  '/gw/orders/driver': {
    put: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.ChangeDriverDto
      >
    }
  }
  '/gw/orders/truck': {
    put: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.ChangeTruckDto
      >
    }
  }
  '/gw/orders/rate': {
    put: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.ChangeRateDto
      >
    }
  }
  '/gw/orders/address': {
    put: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.ChangeAddressDto
      >
      res: Schemas.ChangeAddressDto
    }
  }
  '/gw/orders/contacts': {
    put: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.ChangeContactsDto
      >
    }
  }
  '/gw/orders/full_info_by_ids': {
    post: {
      params?: {
        'role'?: Schemas.OrderRole
        'tab'?: Schemas.OrderTab
        'contactId'?: number
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        Schemas.OrderIdWithType
      >
      res: Schemas.OrdersInformation
    }
  }
  '/gw/orders/full_orders_info_by_ids': {
    post: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.FullOrdersInfoByIdsDto
      >
      res: Schemas.OrdersInformationViewFrontend
    }
  }
  '/gw/orders/unilateral': {
    post: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.SaveUnilateralOrderDtoNew
      >
      res: Schemas.DealOrderView2
    }
  }
  '/gw/orders/takeload/{loadId}': {
    post: {
      pathParams: {
        'loadId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.TakeLoadRequest
      >
    }
  }
  '/gw/orders/{dealId}/in_work': {
    post: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.DealInWorkDto
      >
    }
  }
  '/gw/orders/{dealId}/pay_docs': {
    post: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.PayDocsDto
      >
    }
  }
  '/gw/orders/{dealId}/accept': {
    post: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.DealAcceptFromLoadDtoInbox
      >
    }
  }
  '/gw/orders/{dealId}/move_to_work': {
    post: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/{dealId}/accept_file': {
    post: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: unknown
    }
  }
  '/gw/orders/{dealId}/create_contract': {
    post: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.CreateContractDtoInbox
      >
    }
  }
  '/gw/orders/{dealId}/set_view': {
    post: {
      pathParams: {
        'dealId': string
      }
      params?: {
        'isFirstView'?: boolean
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/full_orders_info': {
    post: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.FullOrdersInfoDto
      >
      res: Schemas.OrdersInformationViewFrontend
    }
  }
  '/gw/orders/{dealId}/decline': {
    delete: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.DeclineOrderDto
      >
    }
  }
  '/gw/orders/{dealId}/delete_obsolete': {
    delete: {
      pathParams: {
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: boolean
    }
  }
  '/gw/orders/invites': {
    post: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.PersonalInvitationDTO2
      >
    }
  }
  '/gw/orders/invites/counter_offer': {
    post: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.PersonalOfferInvitationDTO2
      >
    }
  }
  '/gw/orders/invites/{loadId}': {
    get: {
      pathParams: {
        'loadId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
    delete: {
      pathParams: {
        'loadId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/invites/search': {
    post: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.InvitationSearchFilter
      >
      res: Schemas.LoadListInvitationsView
    }
  }
  '/gw/orders/invites/by_taker_id/{loadId}/{takerAtiId}': {
    delete: {
      pathParams: {
        'loadId': string
        'takerAtiId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/invites/{loadId}/{dealId}': {
    delete: {
      pathParams: {
        'loadId': string
        'dealId': string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/driver/map_route/by_deal': {
    get: {
      params?: {
        'deal_id'?: string
        'south_west_lat'?: number
        'south_west_lng'?: number
        'north_east_lat'?: number
        'north_east_lng'?: number
        'zoom'?: number
        'interval'?: number
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      res: Schemas.DealRoutedMap
    }
  }
  '/gw/orders/driver/map_route': {
    post: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.MapsFilterRequest
      >
      res: Array<
        Schemas.FirmsDealMap
      >
    }
  }
  '/gw/orders/driver/map/history': {
    get: {
      params?: {
        'deal_id'?: string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/driver/presence/by_deals': {
    post: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.DealIdsAndRoleRequestDto
      >
      res: Array<
        Schemas.DriverView3
      >
    }
  }
  '/gw/orders/driver/map/route_info': {
    get: {
      params?: {
        'deal_id'?: string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/redirect/{dealId}': {
    get: {
      pathParams: {
        'dealId': string
      }
      params?: {
        'hash'?: string
      }
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
    }
  }
  '/gw/orders/templates/access': {
    post: {
      headers?: {
        'X-Authenticated-UserId'?: string
        'X-Branch'?: string
      }
      body?: Array<
        | Schemas.DocumentTemplateDto
      >
    }
  }
}