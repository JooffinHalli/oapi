/**
*  ........................................
*  . этот файл сгенерирован автоматически .
*  ........................................
*/

export const Enums = {
  OrderRole: {
    CargoOwner: 0,
    Carrier: 1
  },
  MapCarType: {
    Ok: 0,
    GpsDisabled: 1,
    GpsSpoof: 2,
    NoData: 3,
    PowerSaving: 4,
    Parking: 5
  },
  MethodAttributes: {
    PrivateScope: 0,
    ReuseSlot: 0,
    Private: 1,
    FamANDAssem: 2,
    Assembly: 3,
    Family: 4,
    FamORAssem: 5,
    Public: 6,
    MemberAccessMask: 7,
    UnmanagedExport: 8,
    Static: 16,
    Final: 32,
    Virtual: 64,
    HideBySig: 128,
    NewSlot: 256,
    VtableLayoutMask: 256,
    CheckAccessOnOverride: 512,
    Abstract: 1024,
    SpecialName: 2048,
    RTSpecialName: 4096,
    PinvokeImpl: 8192,
    HasSecurity: 16384,
    RequireSecObject: 32768,
    ReservedMask: 53248
  },
  MethodImplAttributes: {
    IL: 0,
    Managed: 0,
    Native: 1,
    OPTIL: 2,
    CodeTypeMask: 3,
    Runtime: 3,
    ManagedMask: 4,
    Unmanaged: 4,
    NoInlining: 8,
    ForwardRef: 16,
    Synchronized: 32,
    NoOptimization: 64,
    PreserveSig: 128,
    AggressiveInlining: 256,
    AggressiveOptimization: 512,
    InternalCall: 4096,
    MaxMethodImplVal: 65535
  },
  CallingConventions: {
    Standard: 1,
    VarArgs: 2,
    Any: 3,
    HasThis: 32,
    ExplicitThis: 64
  },
  MemberTypes: {
    Constructor: 1,
    Event: 2,
    Field: 4,
    Method: 8,
    Property: 16,
    TypeInfo: 32,
    Custom: 64,
    NestedType: 128,
    All: 191
  },
  EventAttributes: {
    None: 0,
    SpecialName: 512,
    RTSpecialName: 1024,
    ReservedMask: 1024
  },
  ParameterAttributes: {
    None: 0,
    In: 1,
    Out: 2,
    Lcid: 4,
    Retval: 8,
    Optional: 16,
    HasDefault: 4096,
    HasFieldMarshal: 8192,
    Reserved3: 16384,
    Reserved4: 32768,
    ReservedMask: 61440
  },
  FieldAttributes: {
    PrivateScope: 0,
    Private: 1,
    FamANDAssem: 2,
    Assembly: 3,
    Family: 4,
    FamORAssem: 5,
    Public: 6,
    FieldAccessMask: 7,
    Static: 16,
    InitOnly: 32,
    Literal: 64,
    NotSerialized: 128,
    HasFieldRVA: 256,
    SpecialName: 512,
    RTSpecialName: 1024,
    HasFieldMarshal: 4096,
    PinvokeImpl: 8192,
    HasDefault: 32768,
    ReservedMask: 38144
  },
  PropertyAttributes: {
    None: 0,
    SpecialName: 512,
    RTSpecialName: 1024,
    HasDefault: 4096,
    Reserved2: 8192,
    Reserved3: 16384,
    Reserved4: 32768,
    ReservedMask: 62464
  },
  SecurityRuleSet: {
    None: 0,
    Level1: 1,
    Level2: 2
  },
  DealDocumentAccess: {
    SharedWithCounterparty: 0,
    SharedWithAtiTrucker: 1
  },
  DealFileAccess: {
    OnlyYou: 0,
    SharedWithCounterparty: 1,
    SharedWithAtiTrucker: 2,
    SharedWithAtiTruckerAndCounterparty: 3
  },
  DealFileSourceTypes: {
    SimpleLoader: 0,
    Load: 1,
    Driver: 2,
    Truck: 3,
    Trailer: 4,
    SemiTrailer: 5,
    Tractor: 6,
    AtiTruckerPopupLoader: 7,
    FromAtiDriver: 8
  },
  DealFileSourceFileTypes: {
    None: 0,
    DriverLicense: 1,
    DriverPassport: 2,
    TruckTechPassport: 3,
    TruckPlasticTechPassport: 4,
    TruckPhoto: 5,
    FreeUse: 8
  },
  DealFileType: {
    OtherDoc: 0,
    ConsignmentNote: 1,
    PackingList: 2,
    WayBill: 3,
    WayBillGeneral: 4,
    Invoice: 5,
    InvoiceForPayment: 6,
    PaymentOrder: 7,
    CertificateOfCompletion: 8,
    Request: 9,
    RequestForOrder: 10,
    Order: 11,
    Contract: 12,
    SupplementaryAgreement: 13,
    Dealership: 14,
    Assignment: 15,
    InfoLetter: 16,
    AccidentAct: 17
  },
  DocumentType: {
    None: 0,
    Order: 1,
    Application: 2,
    ForwarderInstruction: 3,
    Act: 4,
    Invoice: 5,
    UnilateralDissolution: 6,
    PowerOfAttorney: 7,
    TableOrder: 8,
    TableApplication: 9
  },
  DealDocumentTemplateAccess: {
    OnlyYou: 0,
    SharedWithCounterparty: 1
  },
  DateType: {
    ReadyToLoading: 0,
    BetweenTwoDates: 1,
    AlwaysReady: 2,
    MissingLoad: 3
  },
  Periodicity: {
    None: 0,
    EveryDay: 1,
    OnlyWorkingDays: 100
  },
  LoadExtraPointType: {
    LoadingExtraPoint: 1,
    UnloadingExtraPoint: 2,
    CustomExtraPoint: 3,
    LoadingLargeCity: 4,
    UnloadingLargeCity: 5,
    DriverThrough: 8
  },
  Residency: {
    Russia: 1,
    Ukraine: 2,
    Belarus: 3,
    Kazakhstan: 10,
    International: 200
  },
  DayOfWeek: {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6
  },
  StockType: {
    Stock: 1,
    Office: 2,
    Store: 3
  },
  TimeslotsBindingStatus: {
    AwaitReaction: 0,
    Accepted: 1,
    Revoked: 2,
    Rejected: 3
  },
  DogruzType: {
    OnlyToSeparateCar: 1,
    DogruzPossible: 2,
    Dogruz: 3
  },
  AuctionFinishType: {
    Normal: 0,
    ByMinimalRate: 1,
    Force: 2
  },
  RateType: {
    None: 0,
    Common: 1,
    Nds: 2,
    WithoutNds: 3
  },
  DealState: {
    Reserve: 0,
    Taken: 1,
    TakenViewed: 2,
    DocumentSentByCargoOwner: 3,
    DocumentApprovedByTrucker: 4,
    Finished: 5,
    PersonalDealInvite: 7,
    AuctionWithPossibleWinner: 8,
    CancelAuto: 9,
    WaitPaymentAndDocuments: 10,
    BestRateFromOtherPassThroughAuction: 11,
    Deleted: -11,
    ReserveCanceled: -10,
    DenialInAuctionByDocExpired: -9,
    CancelInWorkByCargoOwner: -8,
    CancelInWorkByTrucker: -7,
    DenialBecauseDeleteAuction: -6,
    DenialInAuction: -4,
    DenialByCargoOwner: -3,
    DenialByTrucker: -2
  },
  DealKinds: {
    None: 0,
    OrdinaryDeal: 1,
    AuctionDeal: 2,
    PersonalDeal: 4,
    TruckInterDeal: 8,
    UnilateralDeal: 16,
    CounterOfferDeal: 32,
    ContractDeal: 64
  },
  DriverOrigin: {
    Unknown: 0,
    OrdersUiFromDealInProgress: 1,
    AtiDocs: 2
  },
  AutoparkDocumentType: {
    DriverLicense: 1,
    Passport: 2,
    TechPassport: 3,
    PlasticTechPassport: 4,
    TruckPhoto: 5,
    RentContract: 6,
    FreeUse: 8
  },
  SmsStatus: {
    Empty: 0,
    Created: 1,
    Error: 2,
    Sent: 3,
    Delivered: 4
  },
  TrackerOfferStatus: {
    None: 0,
    Sent: 1,
    AcceptedByDriver: 2,
    RejectedByDriver: 3
  },
  ExtendedDealInWorkStatus: {
    None: 0,
    CompletedByDriver: 100
  },
  TrackerRouteBadEvent: {
    GpsSpoof: 0,
    Accident: 1,
    Breakdown: 2,
    GpsOff: 3,
    NoData: 4
  },
  TruckOwnershipType: {
    Own: 0,
    Attracted: 1,
    Rent: 2,
    Leasing: 3,
    JointOwnershipSpouses: 4,
    FreeUse: 5
  },
  TruckType: {
    Truck: 1,
    Tractor: 2,
    Semitrailer: 4,
    Trailer: 8
  },
  TruckOrigin: {
    Unknown: 0,
    OrdersUiFromDealInProgress: 1,
    ATIDocs: 2
  },
  InWorkStatusModel: {
    Default: 0,
    FirstMile: 1,
    LastMile: 2,
    EmptyContainer: 3
  },
  InWorkStatus: {
    None: 0,
    GoToLoading: 1,
    ReadyToLoad: 2,
    Loading: 3,
    Loaded: 4,
    ReadyToUnload: 5,
    Unloading: 6,
    Unloaded: 7,
    Breakdown: 8,
    Accident: 9,
    Arrested: 10,
    ContainerReceivedToLoading: 11,
    ContainerOnLoading: 12,
    ContainerFinishedLoading: 13,
    ContainerSentFromLoading: 14,
    ContainerReceivedToUnloading: 15,
    ContainerOnUnloading: 16,
    ContainerFinishedUnloading: 17,
    ContainerSentFromUnloading: 18,
    EmptyContainerReceived: 19,
    EmptyContainerSent: 20
  },
  DealPointTypes: {
    Loading: 1,
    Unloading: 2,
    Customs: 3,
    GoThrough: 8
  },
  FirmStatus: {
    Gray: 0,
    Green: 1,
    Yellow: 2,
    Red: 3,
    AtiPartner: 4,
    AtiEmployee: 5,
    GosOrgan: 6,
    Odks: 7
  },
  OrderTab: {
    Reconciliation: 0,
    InProgress: 1,
    Completed: 2,
    Payments: 3
  },
  UnilateralLoadExtraPointType: {
    LoadingExtraPoint: 1,
    UnloadingExtraPoint: 2,
    CustomExtraPoint: 3
  },
  UnilateralPaymentType: {
    Cash: 0,
    CashlessWithoutNds: 1,
    CashlessWithNds: 2
  },
  PhoneOwnerType: {
    Driver: 0,
    Truck: 1
  },
  FirmAccessLevel: {
    NoAccess: 0,
    ReadOnly: 1,
    ReadWrite: 2,
    AddDelete: 3,
    Full: 4
  },
  TrackerOwnerAccess: {
    Hide: 0,
    Show: 1
  },
  DealFileActionStatus: {
    None: 0,
    Add: 1,
    Remove: 2,
    ChangeAccess: 3
  },
  DealAgentType: {
    Carrier: 0,
    CargoOwner: 1
  },
  DealDocumentActionStatus: {
    None: 0,
    ChangeAccess: 1
  },
  PaymentSource: {
    None: 0,
    CounterOffer: 1,
    Auction: 2,
    Load: 3,
    Invitation: 4,
    Contract: 5
  },
  AuctionPaymentType: {
    Cash: 1,
    Any: 22,
    OnCard: 23,
    CashlessWithNds: 24,
    CashlessWithoutNds: 25
  },
  AuctionRateState: {
    Undecided: 0,
    Winner: 1,
    CargoOwnerDeclineDocument: -8,
    WinnerDeclineDocument: -7,
    WinnerRefuseDeal: -6,
    CargoOwnerRefuseDeal: -5,
    WinnerRefused: -4,
    ExWinner: -3,
    Refused: -2,
    Loser: -1
  },
  RatePlaceType: {
    Direct: 0,
    Relative: 1,
    Foreign: 2
  },
  AuctionState: {
    OnAndNoRates: 0,
    OnAndHasRates: 1,
    FinishedWithoutOtherBetsAndNeedChooseAction: -8,
    FinishedWithOtherBetsAndNeedChooseAction: -7,
    AuctionFinishedWithWinnerFromOtherAuction: -6,
    FinishedAndAwaitingNextNextWinner: -5,
    FinishedAndAwaitingDocsFromNewWinner: -4,
    FinishedAndAwaitingNextWinner: -3,
    FinishedAndAwaitingDocs: -2,
    FinishedAndNoRates: -1
  },
  WinnerCriteria: {
    Rate: 0,
    RateAndLoadingDate: 1
  },
  UnilateralLoadPointType: {
    LoadingExtraPoint: 1,
    UnloadingExtraPoint: 2,
    CustomExtraPoint: 3,
    GoThrough: 8
  },
  WeightType: {
    Kilos: 0,
    Tons: 1
  },
  TrackerEventType: {
    NotSet: 0,
    Meta: 1,
    Status: 2
  },
  FinishActionIntegrators: {
    PublishLoad: 1,
    DeleteLoad: 2,
    SelectNewWinner: 3,
    RestartAuction: 4
  },
  PriceType: {
    Cash: 0,
    CashlessWithNds: 1,
    CashlessWithoutNds: 2
  },
  CopySource: {
    None: 0,
    Atrucks: 1
  },
  PhoneBindingStatus: {
    Employee: 0,
    Request: 1,
    Reject: 2,
    Fired: 3,
    Retired: 4
  },
  DealDocumentSourceTypes: {
    OrderDocumentsPopup: 0,
    AddEditDataForDriverPopup: 1,
    Integrators: 2
  },
  DealType: {
    None: 0,
    Deal: 1,
    Auction: 2
  },
  OrderIdTypes: {
    Deal: 0,
    Auction: 1,
    PersonalDealLoadId: 2
  },
  FinishActionFrontend: {
    Default: 0,
    PublishLoad: 1,
    DeleteLoad: 2,
    SelectNewWinner: 3,
    RestartAuction: 4,
    DoNothing: 5
  }
} as const;