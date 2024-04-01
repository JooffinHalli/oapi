/**
*  ........................................
*  . этот файл сгенерирован автоматически .
*  ........................................
*/

import type { AllOf } from './utilTypes';

export namespace Schemas {
  export type ContractView = {
    contract_number?: null | string
    contract_start_date?: null | Date
  }
  export type OrderContractorLimit = {
    firm_id?: number
    contractor_firm_id?: number
    limit_count?: OneOf<null | 
      | Schemas.LimitCount
    >
  }
  export type LimitCount = {
    limit?: number
    count?: number
    exceeded?: boolean
  }
  export type DealRoutedMap = {
    goals?: null | unknown
    predicted_route?: null | unknown
    rotation_angle?: null | unknown
    role?: OneOf<null | 
      | Schemas.OrderRole
    >
    traces?: null | Array<
      Schemas.RoutedTrace
    >
  }
  export type OrderRole = '0' | '1'
  export type RoutedTrace = {
    car?: OneOf<null | 
      | Schemas.RoutedCar
    >
    first_action?: null | Date
    last_action?: null | Date
    gps_source?: OneOf<null | 
      | Schemas.GpsSource
    >
    points?: null | unknown
  }
  export type RoutedCar = {
    car_status?: OneOf<
      | Schemas.MapCarType
    >
    driver_phone?: null | string
    transportation_info?: OneOf<null | 
      | Schemas.TransportationInfoForMap
    >
  }
  export type MapCarType = '0' | '1' | '2' | '3' | '4' | '5'
  export type TransportationInfoForMap = {
    driver?: OneOf<null | 
      | Schemas.DriverViewForMap
    >
    truck?: OneOf<null | 
      | Schemas.TruckViewForMap
    >
    load?: OneOf<null | 
      | Schemas.LoadViewForMap
    >
  }
  export type DriverViewForMap = {
    phone?: null | string
    first_name?: null | string
    second_name?: null | string
    patronymic?: null | string
    messenger_token?: null | string
  }
  export type TruckViewForMap = {
    truck_model?: null | string
    trailer_model?: null | string
    semitrailer_model?: null | string
    truck_number?: null | string
    phone?: null | string
  }
  export type LoadViewForMap = {
    weight?: number
    volume?: number
    cargo_type_name?: null | string
    pack_type_name?: null | string
  }
  export type GpsSource = {
    type?: null | string
    device_name?: null | string
    device_id?: null | string
  }
  export type DealNotFoundException = AllOf<
    | Schemas.NotFoundException
    | {
      deal_id?: string
    }
  >
  export type NotFoundException = AllOf<
    | Schemas.FinalException
    | Record<string, unknown>
  >
  export type FinalException = AllOf<
    | Schemas.Exception
    | {
      error_code?: null | string
      http_error_code?: number
      reason?: null | string
    }
  >
  export type Exception = {
    target_site?: OneOf<null | 
      | Schemas.MethodBase
    >
    has_been_thrown?: boolean
    serialization_watson_buckets?: null | unknown
    message?: string
    data?: Array<
      any
    >
    inner_exception?: OneOf<null | 
      | Schemas.Exception
    >
    help_link?: null | string
    source?: null | string
    h_result?: number
    stack_trace?: null | string
    serialization_stack_trace_string?: null | string
  }
  export type MethodBase = AllOf<
    | Schemas.MemberInfo
    | {
      attributes?: Schemas.MethodAttributes
      method_implementation_flags?: Schemas.MethodImplAttributes
      calling_convention?: Schemas.CallingConventions
      is_abstract?: boolean
      is_constructor?: boolean
      is_final?: boolean
      is_hide_by_sig?: boolean
      is_special_name?: boolean
      is_static?: boolean
      is_virtual?: boolean
      is_assembly?: boolean
      is_family?: boolean
      is_family_and_assembly?: boolean
      is_family_or_assembly?: boolean
      is_private?: boolean
      is_public?: boolean
      is_constructed_generic_method?: boolean
      is_generic_method?: boolean
      is_generic_method_definition?: boolean
      contains_generic_parameters?: boolean
      method_handle?: Schemas.RuntimeMethodHandle
      is_security_critical?: boolean
      is_security_safe_critical?: boolean
      is_security_transparent?: boolean
    }
  >
  export type MethodAttributes = '0' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '16' | '32' | '64' | '128' | '256' | '256' | '512' | '1024' | '2048' | '4096' | '8192' | '16384' | '32768' | '53248'
  export type MethodImplAttributes = '0' | '0' | '1' | '2' | '3' | '3' | '4' | '4' | '8' | '16' | '32' | '64' | '128' | '256' | '512' | '4096' | '65535'
  export type CallingConventions = '1' | '2' | '3' | '32' | '64'
  export type RuntimeMethodHandle = {
    value?: Schemas.IntPtr
  }
  export type IntPtr = {
    size?: number
    max_value?: Schemas.IntPtr
    min_value?: Schemas.IntPtr
    system._numerics._i_additive_identity<nint,nint>._additive_identity?: Schemas.IntPtr
    system._numerics._i_binary_number<nint>._all_bits_set?: Schemas.IntPtr
    system._numerics._i_min_max_value<nint>._min_value?: Schemas.IntPtr
    system._numerics._i_min_max_value<nint>._max_value?: Schemas.IntPtr
    system._numerics._i_multiplicative_identity<nint,nint>._multiplicative_identity?: Schemas.IntPtr
    system._numerics._i_number_base<nint>._one?: Schemas.IntPtr
    system._numerics._i_number_base<nint>._radix?: number
    system._numerics._i_number_base<nint>._zero?: Schemas.IntPtr
    system._numerics._i_signed_number<nint>._negative_one?: Schemas.IntPtr
  }
  export type MemberInfo = {
    member_type?: Schemas.MemberTypes
    name?: string
    declaring_type?: null | string
    reflected_type?: null | string
    module?: Schemas.Module
    custom_attributes?: Array<
      Schemas.CustomAttributeData
    >
    is_collectible?: boolean
    metadata_token?: number
  }
  export type MemberTypes = '1' | '2' | '4' | '8' | '16' | '32' | '64' | '128' | '191'
  export type Module = {
    assembly?: Schemas.Assembly
    fully_qualified_name?: string
    name?: string
    md_stream_version?: number
    module_version_id?: string
    scope_name?: string
    module_handle?: Schemas.ModuleHandle
    custom_attributes?: Array<
      Schemas.CustomAttributeData
    >
    metadata_token?: number
  }
  export type Assembly = {
    defined_types?: Array<
      Schemas.TypeInfo
    >
    exported_types?: Array<
      string
    >
    code_base?: null | string
    entry_point?: OneOf<null | 
      | Schemas.MethodInfo
    >
    full_name?: null | string
    image_runtime_version?: string
    is_dynamic?: boolean
    location?: string
    reflection_only?: boolean
    is_collectible?: boolean
    is_fully_trusted?: boolean
    custom_attributes?: Array<
      Schemas.CustomAttributeData
    >
    escaped_code_base?: string
    manifest_module?: Schemas.Module
    modules?: Array<
      Schemas.Module
    >
    global_assembly_cache?: boolean
    host_context?: number
    security_rule_set?: Schemas.SecurityRuleSet
  }
  export type TypeInfo = AllOf<
    | string
    | {
      generic_type_parameters?: Array<
        string
      >
      declared_constructors?: Array<
        Schemas.ConstructorInfo
      >
      declared_events?: Array<
        Schemas.EventInfo
      >
      declared_fields?: Array<
        Schemas.FieldInfo
      >
      declared_members?: Array<
        Schemas.MemberInfo
      >
      declared_methods?: Array<
        Schemas.MethodInfo
      >
      declared_nested_types?: Array<
        Schemas.TypeInfo
      >
      declared_properties?: Array<
        Schemas.PropertyInfo
      >
      implemented_interfaces?: Array<
        string
      >
    }
  >
  export type ConstructorInfo = AllOf<
    | Schemas.MethodBase
    | {
      member_type?: Schemas.MemberTypes
    }
  >
  export type EventInfo = AllOf<
    | Schemas.MemberInfo
    | {
      member_type?: Schemas.MemberTypes
      attributes?: Schemas.EventAttributes
      is_special_name?: boolean
      add_method?: OneOf<null | 
        | Schemas.MethodInfo
      >
      remove_method?: OneOf<null | 
        | Schemas.MethodInfo
      >
      raise_method?: OneOf<null | 
        | Schemas.MethodInfo
      >
      is_multicast?: boolean
      event_handler_type?: null | string
    }
  >
  export type EventAttributes = '0' | '512' | '1024' | '1024'
  export type MethodInfo = AllOf<
    | Schemas.MethodBase
    | {
      member_type?: Schemas.MemberTypes
      return_parameter?: Schemas.ParameterInfo
      return_type?: string
      return_type_custom_attributes?: Schemas.ICustomAttributeProvider
      generic_parameter_count?: number
    }
  >
  export type ParameterInfo = {
    attributes?: Schemas.ParameterAttributes
    member?: Schemas.MemberInfo
    name?: null | string
    parameter_type?: string
    position?: number
    is_in?: boolean
    is_lcid?: boolean
    is_optional?: boolean
    is_out?: boolean
    is_retval?: boolean
    default_value?: null | unknown
    raw_default_value?: null | unknown
    has_default_value?: boolean
    custom_attributes?: Array<
      Schemas.CustomAttributeData
    >
    metadata_token?: number
  }
  export type ParameterAttributes = '0' | '1' | '2' | '4' | '8' | '16' | '4096' | '8192' | '16384' | '32768' | '61440'
  export type CustomAttributeData = {
    attribute_type?: string
    constructor?: Schemas.ConstructorInfo
    constructor_arguments?: Array<
      Schemas.CustomAttributeTypedArgument
    >
    named_arguments?: Array<
      Schemas.CustomAttributeNamedArgument
    >
  }
  export type CustomAttributeTypedArgument = {
    argument_type?: string
    value?: null | unknown
  }
  export type CustomAttributeNamedArgument = {
    argument_type?: string
    member_info?: Schemas.MemberInfo
    typed_value?: Schemas.CustomAttributeTypedArgument
    member_name?: string
    is_field?: boolean
  }
  export type ICustomAttributeProvider = Record<string, unknown>
  export type FieldInfo = AllOf<
    | Schemas.MemberInfo
    | {
      member_type?: Schemas.MemberTypes
      attributes?: Schemas.FieldAttributes
      field_type?: string
      is_init_only?: boolean
      is_literal?: boolean
      is_not_serialized?: boolean
      is_pinvoke_impl?: boolean
      is_special_name?: boolean
      is_static?: boolean
      is_assembly?: boolean
      is_family?: boolean
      is_family_and_assembly?: boolean
      is_family_or_assembly?: boolean
      is_private?: boolean
      is_public?: boolean
      is_security_critical?: boolean
      is_security_safe_critical?: boolean
      is_security_transparent?: boolean
      field_handle?: Schemas.RuntimeFieldHandle
    }
  >
  export type FieldAttributes = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '16' | '32' | '64' | '128' | '256' | '512' | '1024' | '4096' | '8192' | '32768' | '38144'
  export type RuntimeFieldHandle = {
    value?: Schemas.IntPtr
  }
  export type PropertyInfo = AllOf<
    | Schemas.MemberInfo
    | {
      member_type?: Schemas.MemberTypes
      property_type?: string
      attributes?: Schemas.PropertyAttributes
      is_special_name?: boolean
      can_read?: boolean
      can_write?: boolean
      get_method?: OneOf<null | 
        | Schemas.MethodInfo
      >
      set_method?: OneOf<null | 
        | Schemas.MethodInfo
      >
    }
  >
  export type PropertyAttributes = '0' | '512' | '1024' | '4096' | '8192' | '16384' | '32768' | '62464'
  export type SecurityRuleSet = '0' | '1' | '2'
  export type ModuleHandle = {
    md_stream_version?: number
  }
  export type FinalExceptionModelOfFileAccessDeniedException = {
    reason?: null | string
    error?: null | string
  }
  export type FinalExceptionModelOfFileNotFoundException = {
    reason?: null | string
    error?: null | string
  }
  export type DealDocumentAccessDto = {
    access?: OneOf<
      | Schemas.DealDocumentAccess
    >
    timeslots_warehouse_ids?: null | Array<
      number
    >
  }
  export type DealDocumentAccess = '0' | '1'
  export type DealFileView = {
    id?: string
    storage_file_id?: null | string
    access?: OneOf<
      | Schemas.DealFileAccess
    >
    add_date?: Date
    deal_id?: string
    is_counterparty_file?: boolean
    file_name?: null | string
    size?: number
    link?: null | string
    file_id?: null | string
    source_type?: OneOf<
      | Schemas.DealFileSourceTypes
    >
    source_file_type?: OneOf<
      | Schemas.DealFileSourceFileTypes
    >
    file_type?: OneOf<
      | Schemas.DealFileType
    >
    timeslots_warehouse_ids?: null | Array<
      number
    >
  }
  export type DealFileAccess = '0' | '1' | '2' | '3'
  export type DealFileSourceTypes = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
  export type DealFileSourceFileTypes = '0' | '1' | '2' | '3' | '4' | '5' | '8'
  export type DealFileType = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17'
  export type FinalExceptionModelOfFileWrongException = {
    reason?: null | string
    error?: null | string
  }
  export type FinalExceptionModelOfDealAccessDeniedException = {
    reason?: null | string
    error?: null | string
  }
  export type FinalExceptionModelOfDealNotFoundException = {
    reason?: null | string
    error?: null | string
  }
  export type FinalExceptionModelOfFinalException = {
    reason?: null | string
    error?: null | string
  }
  export type DealFileAccessDto = {
    access?: OneOf<
      | Schemas.DealFileAccess
    >
    timeslots_warehouse_ids?: null | Array<
      number
    >
  }
  export type DealFilesAndDocumentsView = {
    files?: null | Array<
      Schemas.DealFileView
    >
    documents?: null | Array<
      Schemas.DocumentInfoView
    >
    document_templates?: null | Array<
      Schemas.DocumentTemplatesView
    >
  }
  export type DocumentInfoView = {
    id?: null | string
    old_id?: null | string
    editor?: null | string
    url?: null | string
    old_url?: null | string
    name?: null | string
    reason?: null | string
    actor?: OneOf<null | 
      | Schemas.SimpleUser
    >
    is_signed?: boolean
    document_type?: OneOf<
      | Schemas.DocumentType
    >
    is_from_file?: boolean
    access?: OneOf<
      | Schemas.DealDocumentAccess
    >
    timeslots_warehouse_ids?: null | Array<
      number
    >
  }
  export type SimpleUser = {
    firm_id?: number
    contact_id?: number
  }
  export type DocumentType = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  export type DocumentTemplatesView = {
    organization_name?: null | string
    ownership?: null | string
    organization_address?: null | string
    templates?: null | Array<
      Schemas.DocumentTemplateView
    >
  }
  export type DocumentTemplateView = {
    add_date?: Date
    access?: OneOf<
      | Schemas.DealDocumentTemplateAccess
    >
    timeslots_warehouse_ids?: null | Array<
      number
    >
    deal_id?: string
    deal_point_id?: string
    owner_firm_id?: number
    cargoes_ids_hash?: number
    contact_id?: number
    file_name?: null | string
    file_id?: null | string
    id?: string
    size?: number
    link?: null | string
  }
  export type DealDocumentTemplateAccess = '0' | '1'
  export type OrdersInformationView = {
    orders?: null | Array<
      Schemas.DealOrderView
    >
    personal_invites?: null | Array<
      Schemas.PersonalInvitationOrderView
    >
    auctions_without_winners?: null | Array<
      Schemas.AuctionWithPossibleWinnersOrderView
    >
    accounts?: null | Record<string, unknown>
    counters?: OneOf<null | 
      | Schemas.CountersView
    >
    cities?: null | Record<string, unknown>
    comments?: null | Record<string, unknown>
  }
  export type DealOrderView = {
    load?: OneOf<null | 
      | Schemas.LoadView
    >
    deal?: OneOf<null | 
      | Schemas.DealView
    >
    is_red?: boolean
    custom_settings?: null | Record<string, unknown>
  }
  export type LoadView = {
    id?: string
    load_number?: null | string
    parent_id?: null | string
    firm_id?: null | string
    contact_id1?: number
    contact_id2?: null | number
    department_id?: null | number
    ati_id?: null | string
    updated_at?: Date
    added_at?: Date
    distance?: number
    distance_type?: number
    insured_min_tariff?: number
    note?: null | string
    date_type?: Schemas.DateType
    periodicity_id?: Schemas.Periodicity
    order_number?: null | string
    krugoreis?: boolean
    loading?: OneOf<null | 
      | Schemas.LoadPointViewForOrder
    >
    extra_points?: null | Array<
      Schemas.LoadExtraPoint
    >
    unloading?: OneOf<null | 
      | Schemas.LoadPointViewForOrder
    >
    cargo?: OneOf<null | 
      | Schemas.LoadCargo
    >
    transport?: OneOf<null | 
      | Schemas.LoadTransport
    >
    boards?: null | Array<
      string
    >
    auction?: OneOf<null | 
      | Schemas.AuctionView
    >
    route?: OneOf<null | 
      | Schemas.RouteInfoView
    >
    cargo_source?: null | string
  }
  export type DateType = '0' | '1' | '2' | '3'
  export type Periodicity = '0' | '1' | '100'
  export type LoadPointViewForOrder = {
    city_id?: number
    latitude?: null | number
    longitude?: null | number
    street?: null | string
    organization_id?: null | string
    address_id?: null | string
    time_start?: null | Date
    time_end?: null | Date
    first_date?: null | Date
    last_date?: null | Date
    is_round_the_clock?: boolean
    large_cities_ids?: null | Array<
      number
    >
    loading_cargos?: null | Array<
      Schemas.LoadingCargo
    >
  }
  export type LoadingCargo = {
    cargo_id?: number
    name_id?: number
    name?: null | string
    packaging_type?: null | number
    packaging_quantity?: null | number
    weight?: null | number
    volume?: null | number
    sizes?: OneOf<null | 
      | Schemas.LoadSize
    >
    packaging_type_name?: null | string
  }
  export type LoadSize = {
    length?: null | number
    width?: null | number
    height?: null | number
    diameter?: null | number
    length_highlight?: boolean
    width_highlight?: boolean
    height_highlight?: boolean
  }
  export type LoadExtraPoint = {
    route_point_id?: string
    id?: string
    city_id?: number
    point_type?: Schemas.LoadExtraPointType
    ordinal_id?: number
    distance?: number
    street?: null | string
    latitude?: null | number
    longitude?: null | number
    organization_id?: null | string
    address_id?: null | string
    loading_date_start?: null | Date
    loading_date_end?: null | Date
    loading_time_start?: null | string
    loading_time_end?: null | string
    is_round_the_clock?: boolean
    city_name?: null | string
    loading_cargos?: null | Array<
      Schemas.LoadingCargo
    >
    unloading_cargos?: null | Array<
      Schemas.UnloadingCargo
    >
    organization?: OneOf<null | 
      | Schemas.Organization
    >
  }
  export type LoadExtraPointType = '1' | '2' | '3' | '4' | '5' | '8'
  export type UnloadingCargo = {
    cargo_id?: number
    weight?: null | number
    volume?: null | number
    packaging_quantity?: null | number
    is_defined_by_ttn?: boolean
  }
  export type Organization = {
    organization_id?: string
    firm_id?: number
    name?: null | string
    ownership?: number
    residency?: OneOf<null | 
      | Schemas.Residency
    >
    inn?: null | string
    phone?: null | string
    extra_phone?: null | number
    docs_address?: OneOf<null | 
      | Schemas.OrganizationDocsAddress
    >
    stocks?: null | Array<
      Schemas.Stock
    >
    contact_persons?: null | Array<
      Schemas.ContactPerson
    >
    ownership_name?: null | string
  }
  export type Residency = '1' | '2' | '3' | '10' | '200'
  export type OrganizationDocsAddress = {
    postcode?: null | string
    city_id?: null | number
    street_name?: null | string
    house_no?: null | string
    office_no?: null | string
  }
  export type Stock = {
    stock_id?: string
    address?: null | string
    address_city_id?: number
    address_latitude?: number
    address_longitude?: number
    note?: null | string
    work_schedules?: null | Array<
      Schemas.StockSchedule
    >
    breaks_schedules?: null | Array<
      Schemas.StockSchedule
    >
    contact_persons?: null | Array<
      Schemas.ContactPerson
    >
    schedule_summary?: null | string
    stock_type?: Schemas.StockType
    timeslots_binding?: OneOf<null | 
      | Schemas.TimeslotsBinding
    >
  }
  export type StockSchedule = {
    stock_schedule_id?: string
    day_of_week?: Schemas.DayOfWeek
    start_time?: string
    end_time?: string
  }
  export type DayOfWeek = '0' | '1' | '2' | '3' | '4' | '5' | '6'
  export type ContactPerson = {
    contact_person_id?: string
    name?: null | string
    phone?: null | string
    email?: null | string
  }
  export type StockType = '1' | '2' | '3'
  export type TimeslotsBinding = {
    warehouse_id?: number
    status?: Schemas.TimeslotsBindingStatus
  }
  export type TimeslotsBindingStatus = '0' | '1' | '2' | '3'
  export type LoadCargo = {
    weight?: number
    volume?: number
    adr?: number
    cargo_type_id?: number
    cargo_type?: null | string
    pack_type?: number
    pallet_count?: number
    belt_count?: number
    dogruz_type?: Schemas.DogruzType
    sbor_gruz?: boolean
    size?: OneOf<null | 
      | Schemas.LoadSize
    >
  }
  export type DogruzType = '1' | '2' | '3'
  export type LoadTransport = {
    car_type?: number
    car_type_string?: null | string
    loading_type?: number
    loading_logical_operator?: null | string
    unloading_type?: number
    unloading_logical_operator?: null | string
    trucks_quantity?: number
    temperature_from?: null | number
    temperature_to?: null | number
    truck_attribs?: null | number
    stsepka?: boolean
    pnevmohod?: boolean
    koniki?: boolean
    tir?: boolean
    cmr?: boolean
    t1?: boolean
    san_passport?: boolean
    is_tracking?: boolean
    required_capacity?: null | number
  }
  export type AuctionView = {
    auction_id?: string
    finished?: boolean
    win_date?: null | Date
    milliseconds_left_to_provide_documents?: null | number
    finish_type?: Schemas.AuctionFinishType
  }
  export type AuctionFinishType = '0' | '1' | '2'
  export type RouteInfoView = {
    country?: null | string
    distance?: number
    distance_type?: number
  }
  export type DealView = {
    deal_load_id?: string
    taker_ati_id?: null | string
    taker_contact_id?: number
    taker_department_id?: null | number
    department_id?: null | number
    rate_type?: OneOf<
      | Schemas.RateType
    >
    updated_at?: Date
    started_at?: null | Date
    finished_at?: null | Date
    status?: Schemas.DealState
    deal_kind?: Schemas.DealKinds
    denial_reason?: null | string
    denial_document_reason?: null | string
    is_viewed?: boolean
    deal_note?: null | string
    deal_id?: string
    load_id?: string
    signer_id?: null | string
    driver?: OneOf<null | 
      | Schemas.DriverView
    >
    truck?: OneOf<null | 
      | Schemas.TruckView
    >
    trailer?: OneOf<null | 
      | Schemas.TruckView
    >
    semi_trailer?: OneOf<null | 
      | Schemas.TruckView
    >
    document_info?: OneOf<null | 
      | Schemas.DocumentInfoView2
    >
    rate?: number
    currency?: number
    money_type?: number
    documents?: null | Array<
      Schemas.DocumentInfoView2
    >
    files?: null | Array<
      Schemas.DealFileView
    >
    document_templates?: null | Array<
      Schemas.DocumentTemplatesView
    >
    in_work_status_model?: OneOf<
      | Schemas.InWorkStatusModel
    >
    in_work?: OneOf<null | 
      | Schemas.DealInWorkView
    >
    data_for_driver?: OneOf<null | 
      | Schemas.DataForDriverView
    >
    points?: null | Array<
      Schemas.DealPointView
    >
    payment?: OneOf<null | 
      | Schemas.DealPaymentView
    >
    pay_docs?: OneOf<null | 
      | Schemas.PayDocsView
    >
    taker_requisites?: OneOf<null | 
      | Schemas.RequisiteView
    >
    millis_until_end_of_reservation?: null | number
    auction_id?: null | string
    denial_actor?: OneOf<null | 
      | Schemas.SimpleUser
    >
  }
  export type RateType = '0' | '1' | '2' | '3'
  export type DealState = '0' | '1' | '2' | '3' | '4' | '5' | '7' | '8' | '9' | '10' | '11' | '-11' | '-10' | '-9' | '-8' | '-7' | '-6' | '-4' | '-3' | '-2'
  export type DealKinds = '0' | '1' | '2' | '4' | '8' | '16' | '32' | '64'
  export type DriverView = {
    driver_id?: string
    parent_id?: null | string
    first_name?: null | string
    ati_id?: null | string
    second_name?: null | string
    patronymic?: null | string
    phone_number?: null | string
    driver_license_number?: null | string
    passport_series?: null | string
    passport_number?: null | string
    passport_issued_by?: null | string
    passport_when_issued?: Date
    registration?: null | string
    is_attracted_driver?: boolean
    last_deal_related_id?: null | string
    related_id?: null | string
    description?: null | string
    attracted_from?: null | string
    modification_restricted?: boolean
    origin?: OneOf<
      | Schemas.DriverOrigin
    >
    date_of_birth?: null | Date
    department_code_in_passport?: null | string
    driver_inn?: null | string
    in_cargo_owner_black_list?: boolean
    external_id?: null | string
    black_list_reasons?: null | Array<
      string
    >
    scans?: null | Array<
      Schemas.ScanView
    >
    tracker_presence?: OneOf<null | 
      | Schemas.TrackerPresenceView
    >
  }
  export type DriverOrigin = '0' | '1' | '2'
  export type ScanView = {
    owner_id?: string
    scan_id?: string
    scan_path?: null | string
    scan_name?: null | string
    file_id?: null | string
    scan_type?: OneOf<
      | Schemas.AutoparkDocumentType
    >
  }
  export type AutoparkDocumentType = '1' | '2' | '3' | '4' | '5' | '6' | '8'
  export type TrackerPresenceView = {
    phone?: null | string
    initial_phone?: null | string
    last_active?: null | Date
    has_tracker?: null | boolean
    sms_invite_status?: OneOf<null | 
      | Schemas.SmsInviteStatusView
    >
    tracker_offer_status?: Schemas.TrackerOfferStatus
    reason_changing_offer_status?: null | string
    extended_status?: Schemas.ExtendedDealInWorkStatus
    tracker_finished_at?: null | Date
    photo_attach_request?: boolean
    progressbar_percent?: number
    gps_status?: Schemas.MapCarType
    gps_status_date?: null | Date
    bad_events?: null | Array<
      Schemas.TrackerRouteBadEvent
    >
    finished_by_counterpart_date?: null | Date
    messenger_token?: null | string
  }
  export type SmsInviteStatusView = {
    invite_sent?: boolean
    contact_name?: null | string
    firm_id?: null | number
    contact_id?: null | number
    sms_status?: Schemas.SmsStatus
    when?: null | Date
  }
  export type SmsStatus = '0' | '1' | '2' | '3' | '4'
  export type TrackerOfferStatus = '0' | '1' | '2' | '3'
  export type ExtendedDealInWorkStatus = '0' | '100'
  export type TrackerRouteBadEvent = '0' | '1' | '2' | '3' | '4'
  export type TruckView = {
    truck_info_id?: string
    parent_truck_id?: null | string
    ati_id?: null | string
    related_id?: null | string
    ownership_type?: OneOf<
      | Schemas.TruckOwnershipType
    >
    type?: OneOf<
      | Schemas.TruckType
    >
    car_type_id?: number
    description?: null | string
    brand_id?: null | number
    model?: null | string
    number?: null | string
    capacity?: null | number
    volume?: null | number
    length?: null | number
    width?: null | number
    height?: null | number
    last_deal_related_id?: null | string
    manufacture_year?: null | number
    modification_restricted?: boolean
    hidden_in_firm_info?: boolean
    vin?: null | string
    vrc?: null | string
    body_number?: null | string
    dimension?: null | number
    truck_passport_number?: null | string
    can_refrigerator?: null | boolean
    has_gen_set?: null | boolean
    truck_owner_name?: null | string
    can_carry_heavy_container?: null | boolean
    can_carry_tall_container?: null | boolean
    external_id?: null | string
    verified?: boolean
    scans?: null | Array<
      Schemas.ScanView
    >
    photos?: null | Array<
      Schemas.ScanView
    >
    drivers?: null | Array<
      Schemas.DriverView
    >
    origin?: OneOf<
      | Schemas.TruckOrigin
    >
  }
  export type TruckOwnershipType = '0' | '1' | '2' | '3' | '4' | '5'
  export type TruckType = '1' | '2' | '4' | '8'
  export type TruckOrigin = '0' | '1' | '2'
  export type DocumentInfoView2 = {
    id?: null | string
    old_id?: null | string
    editor?: null | string
    url?: null | string
    old_url?: null | string
    name?: null | string
    extension?: null | string
    number?: null | number
    string_number?: null | string
    reason?: null | string
    actor?: OneOf<null | 
      | Schemas.SimpleUser
    >
    is_signed?: boolean
    document_type?: OneOf<
      | Schemas.DocumentType
    >
    access?: OneOf<
      | Schemas.DealDocumentAccess
    >
    timeslots_warehouse_ids?: null | Array<
      number
    >
  }
  export type InWorkStatusModel = '0' | '1' | '2' | '3'
  export type DealInWorkView = {
    deal_id?: string
    in_work_status?: OneOf<
      | Schemas.InWorkStatus
    >
    in_work_date?: null | Date
    ati_id?: null | string
    contact_id?: null | number
    tracker_phone?: null | number
  }
  export type InWorkStatus = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20'
  export type DataForDriverView = {
    id?: string
    deal_id?: string
    tracker_phone?: number
    revoked?: boolean
    points?: null | Array<
      Schemas.DriverTrackerPointView
    >
    updated_at?: Date
    sent?: boolean
  }
  export type DriverTrackerPointView = {
    deal_point_id?: string
    ordinal_id?: number
    time?: null | string
    date?: null | string
    time_to?: null | string
    date_to?: null | string
    lat?: null | number
    lon?: null | number
    address?: null | string
    city_id?: number
    region_id?: number
    country_id?: number
    point_type?: OneOf<
      | Schemas.DealPointTypes
    >
    contact_persons?: null | Array<
      Schemas.ContactPerson2
    >
    note?: null | string
    timeslots_warehouse_id?: null | number
  }
  export type DealPointTypes = '1' | '2' | '3' | '8'
  export type ContactPerson2 = {
    name?: null | string
    phone?: null | string
    ordinal_id?: number
  }
  export type DealPointView = {
    deal_point_id?: string
    ordinal_id?: number
    point_type?: OneOf<
      | Schemas.DealPointTypes
    >
    city_id?: number
    lat?: null | number
    lon?: null | number
    address?: null | string
    participant_name?: null | string
    region_id?: number
    contact_name?: null | string
    organization_id?: null | string
    stock_id?: null | string
    stock?: OneOf<null | 
      | Schemas.PointStockDocView
    >
    organization?: OneOf<null | 
      | Schemas.OrganizationView
    >
  }
  export type PointStockDocView = {
    stock_id?: string
    address?: null | string
    address_city_id?: number
    note?: null | string
    contact_persons?: null | Array<
      Schemas.ContactPersonView
    >
    schedule_summary?: null | string
    stock_type?: Schemas.StockType
    timeslots_warehouse_id?: null | number
  }
  export type ContactPersonView = {
    contact_person_id?: string
    name?: null | string
    phone?: null | string
    email?: null | string
  }
  export type OrganizationView = {
    organization_id?: string
    name?: null | string
    phone?: null | string
    extra_phone?: null | number
    contact_persons?: null | Array<
      Schemas.ContactPersonView
    >
  }
  export type DealPaymentView = {
    rates?: null | Array<
      Schemas.RateView
    >
    prepay_percent?: number
    prepay_percent_enabled?: boolean
    on_unloading?: boolean
    in_fuel?: boolean
    pay_days_enabled?: boolean
    pay_days?: number
    fixed_rate?: boolean
    torg?: boolean
    direct_contract?: boolean
    money_type?: number
  }
  export type RateView = {
    rate?: number
    rate_type?: Schemas.RateType
    currency?: number
    active?: boolean
  }
  export type PayDocsView = {
    documents_copies?: OneOf<null | 
      | Schemas.DocumentStatusInfoView
    >
    documents_original?: OneOf<null | 
      | Schemas.DocumentStatusInfoView
    >
    documents_original_track?: OneOf<null | 
      | Schemas.DocumentTrackingInfoView
    >
    payment?: OneOf<null | 
      | Schemas.PaymentStatusView
    >
  }
  export type DocumentStatusInfoView = {
    checked?: boolean
    date?: null | Date
  }
  export type DocumentTrackingInfoView = {
    transport_company_id?: number
    tracking_url?: null | string
    tracking_number?: null | string
    sending_date?: null | Date
  }
  export type PaymentStatusView = {
    checked?: boolean
    date?: null | Date
  }
  export type RequisiteView = {
    requisite_id?: string
    requisite_type_id?: number
    requisite_name?: null | string
    legal_name?: null | string
    own_ship_id?: number
    fio?: null | string
    inn?: null | string
    ogrn?: null | string
    phone?: null | string
    fax?: null | string
    email?: null | string
    kpp?: null | string
    rs?: null | string
    ks?: null | string
    bik?: null | string
    bank?: null | string
    codes?: null | string
    is_read_only?: boolean
    okpo?: null | string
    available_in_ati_docs?: boolean
    is_vat_payer?: boolean
    is_active?: boolean
    legal_address?: OneOf<null | 
      | Schemas.FirmAddressView
    >
    post_address?: OneOf<null | 
      | Schemas.FirmAddressView
    >
    legal_address_id?: string
    post_address_id?: string
    signees?: null | Array<
      Schemas.Signee
    >
  }
  export type FirmAddressView = {
    address_id?: string
    country_id?: null | number
    region_id?: null | number
    city_id?: null | number
    city_name?: null | string
    post_index?: null | string
    street_type_id?: number
    street_name?: null | string
    house_no?: null | string
    part_no?: null | string
    litera?: null | string
    office_no?: null | string
    post_contact?: null | string
    add_date?: null | Date
    attributes?: number
    send_type_id?: number
    note?: null | string
    formatted_text?: null | string
    is_post_address?: boolean
  }
  export type Signee = {
    signee_id?: string
    requisite_id?: string
    full_name?: null | string
    position?: null | string
    act_upon?: null | string
    is_default?: boolean
    deletion_date?: null | Date
  }
  export type CustomSetting = {
    key?: null | string
    value?: null | string
    type?: null | string
    firm_id?: number
    contact_id?: number
  }
  export type PersonalInvitationOrderView = {
    deal?: OneOf<null | 
      | Schemas.PersonalInvitationView
    >
    load?: OneOf<null | 
      | Schemas.LoadView
    >
    is_red?: boolean
  }
  export type PersonalInvitationView = {
    updated_at?: Date
    status?: OneOf<
      | Schemas.DealState
    >
    millis_left_until_cancel?: number
    deal_kind?: Schemas.DealKinds
    payment?: OneOf<null | 
      | Schemas.DealPaymentView
    >
  }
  export type AuctionWithPossibleWinnersOrderView = {
    load?: OneOf<null | 
      | Schemas.LoadView
    >
    is_red?: boolean
    custom_settings?: null | Record<string, unknown>
  }
  export type AccountView = {
    firm_type?: null | string
    account_id?: null | string
    full_firm_name?: null | string
    firm_name?: null | string
    brand?: null | string
    ownership?: null | string
    ownership_id?: number
    claims_count?: number
    bad_partner_mentions_count?: number
    recommendations_count?: number
    passport?: OneOf<null | 
      | Schemas.PassportView
    >
    city_id?: number
    contacts?: null | Array<
      Schemas.ContactView
    >
  }
  export type PassportView = {
    status?: OneOf<
      | Schemas.FirmStatus
    >
    total_score?: number
  }
  export type FirmStatus = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
  export type ContactView = {
    id?: number
    name?: null | string
    telephone?: null | string
    email?: null | string
    skype_name?: null | string
    city_id?: null | number
    telephone_brand?: null | string
    telephone_region?: null | string
    mobile?: null | string
    mobile_brand?: null | string
    mobile_region?: null | string
  }
  export type CountersView = {
    in_progress?: OneOf<null | 
      | Schemas.OrderCounter
    >
    reconciliation?: OneOf<null | 
      | Schemas.OrderCounter
    >
    completed?: OneOf<null | 
      | Schemas.OrderCounter
    >
    payments?: OneOf<null | 
      | Schemas.OrderCounter
    >
  }
  export type OrderCounter = {
    highlighted?: number
    count?: number
    total_count?: number
  }
  export type CityView = {
    id?: number
    rid?: null | number
    cid?: null | number
    name?: null | string
    isRegCenter?: boolean
    city?: null | string
    region?: null | string
    country?: null | string
    cityEng?: null | string
    regionEng?: null | string
    countryEng?: null | string
    code?: null | string
  }
  export type Comment = {
    comment_id?: string
    message?: null | string
    contact_id?: number
    comment_date_time?: Date
  }
  export type JsonValidationException = AllOf<
    | Schemas.FinalException
    | Record<string, unknown>
  >
  export type OrderTab = '0' | '1' | '2' | '3'
  export type DealFileTypeInfo = {
    type?: OneOf<
      | Schemas.DealFileType
    >
    type_name?: null | string
    short_type_name?: null | string
    ordinal_id?: number
  }
  export type InWorkStatusModelInfo = {
    in_work_status_model?: OneOf<
      | Schemas.InWorkStatusModel
    >
    in_work_status_model_name?: null | string
    in_work_statuses?: null | Array<
      Schemas.InWorkStatusInfo
    >
  }
  export type InWorkStatusInfo = {
    status?: OneOf<
      | Schemas.InWorkStatus
    >
    status_name?: null | string
    ordinal_id?: number
  }
  export type FullOrderView = {
    load?: OneOf<null | 
      | Schemas.LoadView
    >
    account?: OneOf<null | 
      | Schemas.AccountView
    >
    deal?: OneOf<null | 
      | Schemas.DealView
    >
    custom_settings?: null | Record<string, unknown>
  }
  export type FinalExceptionModelOfContactAccessDeniedException = {
    reason?: null | string
    error?: null | string
  }
  export type FinalExceptionModelOfLoadCantReserveException = {
    reason?: null | string
    error?: null | string
  }
  export type FinalExceptionModelOfDeserializationException = {
    reason?: null | string
    error?: null | string
  }
  export type FinalExceptionModelOfAccessDeniedException = {
    reason?: null | string
    error?: null | string
  }
  export type FinalExceptionModelOfAuctionIsExWinnerException = {
    reason?: null | string
    error?: null | string
  }
  export type FinalExceptionModelOfAuctionIsNotWinnerException = {
    reason?: null | string
    error?: null | string
  }
  export type FinalExceptionModelOfInvitationNotFoundException = {
    reason?: null | string
    error?: null | string
  }
  export type FinalExceptionModelOfLoadNotFoundException = {
    reason?: null | string
    error?: null | string
  }
  export type FinalExceptionModel_1 = {
    reason?: null | string
    error?: null | string
  }
  export type ChangeDriverDto = {
    deal_id?: string
    driver_id?: string
  }
  export type ChangeTruckDto = {
    deal_id?: string
    truck_id?: null | string
    trailer_id?: null | string
    semitrailer_id?: null | string
  }
  export type ChangeRateDto = {
    deal_id?: null | string
    rate?: null | number
    currency_id?: null | number
    rate_type_id?: null | number
    on_card?: boolean
  }
  export type SaveUnilateralOrderDto = {
    deal_id?: null | string
    cargo_weight?: number
    cargo_volume?: number
    cargo_type_id?: number
    cargo_type?: null | string
    dogruz?: Schemas.DogruzType
    loading_type?: null | number
    unloading_type?: null | number
    length?: null | number
    height?: null | number
    width?: null | number
    diameter?: null | number
    pack_type?: null | number
    pallet_count?: null | number
    belt_count?: null | number
    adr?: null | number
    points?: null | Array<
      Schemas.UnilateralOrderPointDtoInbox
    >
    driver_id?: null | string
    send_to_driver?: null | boolean
    truck_id?: null | string
    trailer_id?: null | string
    semitrailer_id?: null | string
    rate?: null | number
    currency?: null | number
    payment_type?: OneOf<null | 
      | Schemas.UnilateralPaymentType
    >
    requisites_id?: null | string
    signer_id?: null | string
    loading_city?: number
    unloading_city?: number
    order_number?: null | string
  }
  export type UnilateralOrderPointDtoInbox = {
    id?: string
    ordinal_id?: number
    point_type?: OneOf<
      | Schemas.UnilateralLoadExtraPointType
    >
    country_id?: number
    region_id?: number
    city_id?: number
    time?: string
    time_to?: null | string
    date?: string
    date_to?: null | string
    lat?: number
    lon?: number
    address?: string
    contact_persons?: null | Array<
      Schemas.ContactPerson2
    >
    note?: null | string
  }
  export type UnilateralLoadExtraPointType = '1' | '2' | '3'
  export type UnilateralPaymentType = '0' | '1' | '2'
  export type FinalExceptionModelOfLoadCantTakeException = {
    reason?: null | string
    error?: null | string
  }
  export type FinalExceptionModelOfInvalidTruckCombinationException = {
    reason?: null | string
    error?: null | string
  }
  export type FinalExceptionModelOfJsonValidationException = {
    reason?: null | string
    error?: null | string
  }
  export type FinalExceptionModelOfDealWithDocsCantOverwriteException = {
    reason?: null | string
    error?: null | string
  }
  export type FinalExceptionModelOfDealNoChangeIsDropDocsNotSpecifiedException = {
    reason?: null | string
    error?: null | string
  }
  export type LoadTakeInfoDto = {
    copies?: OneOf<null | 
      | Schemas.LoadTakeCopiesDto
    >
    rate_type?: Schemas.RateType
    driver_id?: null | string
    deal_id?: null | string
    truck_info_id?: null | string
    semitrailer_id?: null | string
    trailer_id?: null | string
    requisites_id?: string
    signer_id?: null | string
    is_drop_docs?: boolean
    deal_kind?: OneOf<null | 
      | Schemas.DealKinds
    >
    tracker_owner_access?: null | number
    is_pass_through?: boolean
    taker_note?: null | string
  }
  export type LoadTakeCopiesDto = {
    driver?: OneOf<null | 
      | Schemas.DriverInfo
    >
    trailer?: OneOf<null | 
      | Schemas.TruckInfo
    >
    semitrailer?: OneOf<null | 
      | Schemas.TruckInfo
    >
    truck?: OneOf<null | 
      | Schemas.TruckInfo
    >
  }
  export type DriverInfo = {
    driver_id?: string
    parent_driver_id?: null | string
    first_name?: null | string
    firm_id?: number
    second_name?: null | string
    patronymic?: null | string
    driver_license_number?: null | string
    passport_series?: null | string
    passport_number?: null | string
    passport_issued_by?: null | string
    passport_when_issued?: Date
    registration?: null | string
    is_attracted_driver?: boolean
    last_deal_related_id?: null | string
    description?: null | string
    attracted_from?: null | string
    scans?: null | Array<
      Schemas.Scan
    >
    tracker_presence?: OneOf<null | 
      | Schemas.TrackerPresence
    >
    origin?: OneOf<
      | Schemas.DriverOrigin
    >
    date_of_birth?: null | Date
    department_code_in_passport?: null | string
    driver_inn?: null | string
    in_cargo_owner_black_list?: boolean
    external_id?: null | string
    black_list_reasons?: null | Array<
      string
    >
    binding?: OneOf<null | 
      | Schemas.PhoneBinding
    >
    phone_binder?: OneOf<null | 
      | Schemas.Account
    >
    phone_number?: null | string
    phone?: OneOf<null | 
      | Schemas.OrderPhone
    >
    phones?: null | Array<
      Schemas.OrderPhone
    >
  }
  export type Scan = {
    id?: string
    owner_id?: string
    path?: null | string
    name?: null | string
    file_id?: null | string
    type?: OneOf<
      | Schemas.AutoparkDocumentType
    >
  }
  export type TrackerPresence = {
    deal_id?: string
    phone?: null | string
    initial_phone?: null | string
    sms_invite_status?: OneOf<null | 
      | Schemas.SmsInviteStatus
    >
    tracker_offer_status?: Schemas.TrackerOfferStatus
    reason_changing_offer_status?: null | string
    extended_status?: Schemas.ExtendedDealInWorkStatus
    tracker_finished_at?: null | Date
    photo_attach_request?: boolean
    last_active?: null | Date
    has_tracker?: boolean
    progressbar_percent?: number
    gps_status?: Schemas.MapCarType
    gps_status_date?: null | Date
    bad_events?: null | Array<
      Schemas.TrackerRouteBadEvent
    >
    messenger_token?: null | string
  }
  export type SmsInviteStatus = {
    invite_sent?: boolean
    contact_name?: null | string
    firm_id?: null | number
    contact_id?: null | number
    sms_status?: Schemas.SmsStatus
    when?: null | Date
  }
  export type PhoneBinding = {
    owner_type?: Schemas.PhoneOwnerType
    firm_id?: null | number
    contact_id?: null | number
  }
  export type PhoneOwnerType = '0' | '1'
  export type Account = {
    add_date?: Date
    firm_type_id?: number
    firm_type?: null | string
    is_in_black_list?: boolean
    payed_services?: null | Array<
      Schemas.PayedService
    >
    has_payed_services?: boolean
    is_ati_partner?: boolean
    is_odks_member?: boolean
    is_reset_similarity_point?: boolean
    is_payed?: boolean
    contacts_count?: number
    firm_id?: number
    account_id?: null | string
    contact_id?: null | number
    full_firm_name?: null | string
    firm_name?: null | string
    brand?: null | string
    ownership?: null | string
    ownership_id?: number
    address?: null | string
    inn?: null | string
    time_zone_minutes?: null | number
    claims_sum?: null | number
    claims_count?: number
    city_id?: number
    bad_partner_mentions_count?: number
    bad_partner_firms_count?: number
    recommendations_count?: number
    ri_users_attributes?: number
    is_rrd?: boolean
    loads_access?: Schemas.FirmAccessLevel
    trucks_access?: Schemas.FirmAccessLevel
    location?: OneOf<null | 
      | Schemas.FirmServiceCity
    >
    passport?: OneOf<null | 
      | Schemas.Passport
    >
    contacts?: null | Array<
      Schemas.Contact
    >
    time_zone_id?: null | string
    registration_date?: Date
    payed_services_end_date?: Date
  }
  export type PayedService = {
    firm_id?: number
    service_id?: number
    service_amount?: null | number
    service_name?: null | string
  }
  export type FirmAccessLevel = '0' | '1' | '2' | '3' | '4'
  export type FirmServiceCity = {
    city_id?: number
    region_id?: null | number
    country_id?: null | number
    full_name?: null | string
    short_name?: null | string
    is_regional_center?: boolean
    city_size?: number
    fias_id?: null | string
    attributes?: number
    city_name?: null | string
    region_name?: null | string
    country_name?: null | string
    country_code_name?: null | string
  }
  export type Passport = {
    firm_id?: number
    total_score?: number
    ati_data_match_point?: number
    account_lifetime_point?: number
    business_activity_point?: number
    round_table_point?: number
    claim_point?: number
    prof_activity_point?: number
    ati_administration_point?: number
    clones_point?: number
    egr_point?: number
    mass_registration_point?: number
    mass_founder_point?: number
    firm_lifetime_point?: number
    negative_points_sum?: number
    status?: OneOf<
      | Schemas.FirmStatus
    >
    status_description?: null | string
  }
  export type Contact = {
    firm_id?: number
    id?: number
    name?: null | string
    department_id?: number
    telephone?: null | string
    telephone_brand?: null | string
    telephone_region?: null | string
    email?: null | string
    icq?: null | string
    mobile?: null | string
    mobile_brand?: null | string
    mobile_region?: null | string
    skype_name?: null | string
    fax?: null | string
    mobile_operator?: null | string
    region_id?: null | string
    city_id?: null | number
    is_visibled?: boolean
    is_email_visibled?: boolean
    location?: OneOf<null | 
      | Schemas.FirmServiceCity
    >
    user_rights?: number
    can_take_loads_for_orders?: boolean
    can_take_personal_board_load?: boolean
    can_work_with_own_load?: boolean
    can_work_with_department_load?: boolean
  }
  export type OrderPhone = {
    phone?: number
    phone_number?: null | string
    updated_at?: Date
    binding?: OneOf<null | 
      | Schemas.PhoneBinding
    >
  }
  export type TruckInfo = {
    truck_info_id?: string
    firm_id?: number
    parent_truck_id?: null | string
    last_deal_related_id?: null | string
    type?: OneOf<
      | Schemas.TruckType
    >
    description?: null | string
    brand_id?: null | number
    model?: null | string
    number?: null | string
    ownership_type?: OneOf<
      | Schemas.TruckOwnershipType
    >
    car_type_id?: number
    capacity?: null | number
    volume?: null | number
    length?: null | number
    width?: null | number
    height?: null | number
    manufacture_year?: null | number
    vin?: null | string
    body_number?: null | string
    vrc?: null | string
    dimension?: null | number
    truck_passport_number?: null | string
    can_refrigerator?: null | boolean
    has_gen_set?: null | boolean
    truck_owner_name?: null | string
    can_carry_heavy_container?: null | boolean
    can_carry_tall_container?: null | boolean
    external_id?: null | string
    scans?: null | Array<
      Schemas.Scan
    >
    photos?: null | Array<
      Schemas.AutoparkPhoto
    >
    verified?: null | boolean
    sensors?: null | Array<
      Schemas.Sensor
    >
    origin?: OneOf<
      | Schemas.TruckOrigin
    >
    tracker_presence?: OneOf<null | 
      | Schemas.TrackerPresence
    >
    binding?: OneOf<null | 
      | Schemas.PhoneBinding
    >
    phone_binder?: OneOf<null | 
      | Schemas.Account
    >
    phone_number?: null | string
    phone?: OneOf<null | 
      | Schemas.OrderPhone
    >
    phones?: null | Array<
      Schemas.OrderPhone
    >
  }
  export type AutoparkPhoto = {
    owner_id?: string
    id?: string
    path?: null | string
    name?: null | string
    file_id?: null | string
    type?: OneOf<
      | Schemas.AutoparkDocumentType
    >
  }
  export type Sensor = {
    sensor_id?: number
    sensor_name?: null | string
    provider_id?: number
    provider_sensor_id?: null | string
    is_active?: boolean
    unactivate_date?: null | Date
    host?: OneOf<null | 
      | Schemas.SensorHost
    >
  }
  export type SensorHost = {
    sensor_host_id?: number
    url?: null | string
  }
  export type PayDocsDto = {
    documents_copies?: OneOf<null | 
      | Schemas.DocumentStatusInfoDto
    >
    documents_original?: OneOf<null | 
      | Schemas.DocumentStatusInfoDto
    >
    documents_original_track?: OneOf<null | 
      | Schemas.DocumentTrackingInfoDto
    >
    closing_documents?: OneOf<null | 
      | Schemas.DocumentStatusInfoDto
    >
    payment?: OneOf<null | 
      | Schemas.PaymentStatusDto
    >
  }
  export type DocumentStatusInfoDto = {
    checked?: boolean
    date?: null | Date
  }
  export type DocumentTrackingInfoDto = {
    transport_company_id?: number
    tracking_url?: null | string
    tracking_number?: null | string
    sending_date?: null | Date
  }
  export type PaymentStatusDto = {
    checked?: boolean
    date?: null | Date
  }
  export type FinalExceptionModelOfDealInWorkOutOfRangeStatusException = {
    reason?: null | string
    error?: null | string
  }
  export type DealInWorkDto = {
    in_work_status?: Schemas.InWorkStatus
  }
  export type FullOrdersInfoDto = {
    role?: OneOf<
      | Schemas.OrderRole
    >
    tab?: OneOf<
      | Schemas.OrderTab
    >
    contact_id?: null | number
    departments?: null | Array<
      number
    >
  }
  export type OrdersCountersDto = {
    role?: OneOf<
      | Schemas.OrderRole
    >
    contact_id?: null | number
    departments?: null | Array<
      number
    >
    only_orders_counters?: boolean
  }
  export type TransportCompanyView = {
    id?: number
    name?: null | string
    tracking_url_template?: null | string
    has_tracking_url?: boolean
  }
  export type FinalExceptionModelOfPersonalInvitationNotFoundException = {
    reason?: null | string
    error?: null | string
  }
  export type ProblemDetails = {
    type?: null | string
    title?: null | string
    status?: null | number
    detail?: null | string
    instance?: null | string
  }
  export type LoadCopyViewForAtiTrucker = {
    id?: string
    firm_id?: number
    added_at?: Date
    updated_at?: Date
    distance?: number
    distance_type?: number
    contact_id1?: number
    contact_id2?: null | number
    first_date?: Date
    last_date?: Date
    date_type?: Schemas.DateType
    krugoreis?: boolean
    weight?: number
    volume?: number
    adr?: number
    cargo_type?: null | string
    car_type?: null | string
    pack_type?: null | string
    money_type?: null | string
    money_type_id?: number
    fixed_rate?: boolean
    pallet_count?: number
    size?: OneOf<null | 
      | Schemas.LoadSize
    >
    from_city?: null | string
    to_city?: null | string
    rate_sum?: number
    sum_with_nds?: number
    sum_without_nds?: number
    rate_sum_per_km?: number
    sum_with_nds_per_km?: number
    sum_without_nds_per_km?: number
    rate_sum_per_km_currency?: null | string
    from_city_id?: number
    from_city_latitude?: null | number
    from_city_longitude?: null | number
    to_city_id?: number
    to_city_latitude?: null | number
    to_city_longitude?: null | number
    periodicity_id?: Schemas.Periodicity
    currency?: null | string
    currency_eng?: null | string
    loading_type?: null | string
    unloading_type?: null | string
    loading_street?: null | string
    unloading_street?: null | string
    loading_organization_id?: null | string
    unloading_organization_id?: null | string
    loading_address_id?: null | string
    unloading_address_id?: null | string
    note?: null | string
    dogruz_type?: null | string
    belt_count?: number
    sbor_gruz?: boolean
    temperature_from?: null | number
    temperature_to?: null | number
    stsepka?: boolean
    pnevmohod?: boolean
    koniki?: boolean
    tir?: boolean
    cmr?: boolean
    t1?: boolean
    san_passport?: boolean
    trucks_quantity?: number
    loading_time_start?: null | Date
    loading_time_end?: null | Date
    unloading_time_start?: null | Date
    unloading_time_end?: null | Date
    prepay_percent_enabled?: boolean
    on_unloading?: boolean
    pay_days?: number
    direct_contract?: boolean
    torg?: boolean
    is_round_the_clock?: boolean
    unload_first_date?: null | Date
    unload_last_date?: null | Date
    extra_points?: null | Array<
      Schemas.ExtraPointViewForAtiTrucker
    >
    account?: OneOf<null | 
      | Schemas.AccountViewForAtiTrucker
    >
    boards?: null | Array<
      Schemas.LoadBoard
    >
    is_tracking?: boolean
    required_capacity?: null | number
  }
  export type ExtraPointViewForAtiTrucker = {
    city_id?: number
    city?: null | string
    type?: null | string
    street?: null | string
    organization_id?: null | string
    address_id?: null | string
    ordinal_id?: number
    latitude?: null | number
    longitude?: null | number
    loading_cargos?: null | Array<
      Schemas.LoadingCargo
    >
    unloading_cargos?: null | Array<
      Schemas.UnloadingCargo
    >
  }
  export type AccountViewForAtiTrucker = {
    account_id?: null | string
    full_firm_name?: null | string
    firm_name?: null | string
    brand?: null | string
    ownership?: null | string
    ownership_id?: number
    location?: OneOf<null | 
      | Schemas.FirmServiceCity
    >
    inn?: null | string
    time_zone_minutes?: number
    is_rrd?: boolean
    loads_access?: Schemas.FirmAccessLevel
    claims_count?: number
    bad_partner_mentions_count?: number
    bad_partner_firms_count?: number
    firm_type_id?: number
    firm_type?: null | string
    recommendation_count?: number
    passport?: OneOf<null | 
      | Schemas.PassportViewForAtiTrucker
    >
    paid_services?: null | Array<
      Schemas.PayedService
    >
    contacts?: null | Array<
      Schemas.Contact
    >
  }
  export type PassportViewForAtiTrucker = {
    total_score?: number
    ati_data_match_point?: number
    account_lifetime_point?: number
    business_activity_point?: number
    round_table_point?: number
    claim_point?: number
    prof_activity_point?: number
    ati_administration_point?: number
    clones_point?: number
    egr_point?: number
    mass_registration_point?: number
    mass_founder_point?: number
    firm_lifetime_point?: number
    status?: Schemas.FirmStatus
    status_description?: null | string
    negative_points?: number
  }
  export type LoadBoard = {
    board_id?: null | string
    publication_time?: null | Date
    publication_option?: number
    is_published?: boolean
    is_reservation_enabled?: boolean
  }
  export type DealViewForAtiTrucker = {
    deal_id?: null | string
    load_id?: null | string
    deal_load_id?: null | string
    firm_id?: number
    department_id?: null | number
    taker_firm_id?: number
    taker_contact_id?: null | number
    taker_department_id?: null | number
    rate_type?: OneOf<null | 
      | Schemas.RateType
    >
    updated_at?: null | Date
    started_at?: null | Date
    finished_at?: null | Date
    invite_cancellation_date?: null | Date
    status?: Schemas.DealState
    denial_reason?: null | string
    is_viewed?: boolean
    signer_id?: null | string
    requisite_id?: null | string
    taker_requisite_id?: null | string
    deal_note?: null | string
    driver_id?: null | string
    truck_info_id?: null | string
    trailer_id?: null | string
    semi_trailer_id?: null | string
    driver?: OneOf<null | 
      | Schemas.DriverRmqModel
    >
    truck_info?: OneOf<null | 
      | Schemas.TruckInfoRmqModel
    >
    trailer?: OneOf<null | 
      | Schemas.TruckInfoRmqModel
    >
    semi_trailer?: OneOf<null | 
      | Schemas.TruckInfoRmqModel
    >
    document_id?: null | string
    document_url?: null | string
    document_name?: null | string
    document_extension?: null | string
    is_signed?: boolean
    extra_document_id?: null | string
    extra_document_name?: null | string
    extra_document_type?: OneOf<null | 
      | Schemas.DocumentType
    >
    old_document_id?: null | string
    old_document_url?: null | string
    rate?: null | number
    sum_with_nds?: null | number
    sum_without_nds?: null | number
    currency?: null | number
    money_type?: null | number
    deal_kind?: Schemas.DealKinds
    auction_id?: null | string
    pay_docs?: null | Array<
      Schemas.PayDocsRmqModel
    >
    doc_editor_firm_id?: null | number
    tracker_cargo_owner_access?: OneOf<null | 
      | Schemas.TrackerOwnerAccess
    >
    driver_data_expected?: null | boolean
    in_work_status_model?: OneOf<
      | Schemas.InWorkStatusModel
    >
    in_work?: OneOf<null | 
      | Schemas.DealInWorkRmqModel
    >
    data_for_driver?: OneOf<null | 
      | Schemas.DataForDriverViewForAtiTrucker
    >
    data_for_drivers?: null | Array<
      Schemas.DataForDriverViewForAtiTrucker
    >
    files?: null | Array<
      Schemas.DealFileRmqModel
    >
    load?: OneOf<null | 
      | Schemas.LoadCopyForDealRmqModel
    >
    cargo_owner_agent?: OneOf<null | 
      | Schemas.AgentRmqModel
    >
    carrier_agent?: OneOf<null | 
      | Schemas.AgentRmqModel
    >
    rate_total?: number
    end_of_reservation?: Date
    documents?: null | Array<
      Schemas.DocumentInfoRmqModel
    >
    payment?: OneOf<null | 
      | Schemas.DealPayment
    >
    ati_id?: null | string
    cargo_owner_ati_id?: null | string
    is_pass_through?: boolean
    previous_driver?: OneOf<null | 
      | Schemas.DriverRmqModel
    >
    previous_truck?: OneOf<null | 
      | Schemas.TruckInfoRmqModel
    >
    previous_trailer?: OneOf<null | 
      | Schemas.TruckInfoRmqModel
    >
    previous_semitrailer?: OneOf<null | 
      | Schemas.TruckInfoRmqModel
    >
    document_access?: OneOf<
      | Schemas.DealDocumentAccess
    >
    timeslots_warehouse_ids?: null | Array<
      number
    >
    document_file_url?: null | string
    should_show_rate_to_driver?: boolean
  }
  export type DriverRmqModel = {
    first_name?: null | string
    second_name?: null | string
    patronymic?: null | string
    phone_number?: null | string
    driver_license_number?: null | string
    passport_series?: null | string
    passport_number?: null | string
    passport_issued_by?: null | string
    passport_when_issued?: null | Date
    registration?: null | string
    is_attracted_driver?: boolean
    description?: null | string
    attracted_from?: null | string
    origin?: Schemas.DriverOrigin
    date_of_birth?: null | Date
    department_code_in_passport?: null | string
    driver_inn?: null | string
    external_id?: null | string
  }
  export type TruckInfoRmqModel = {
    type?: OneOf<
      | Schemas.TruckType
    >
    description?: null | string
    brand_id?: null | number
    model?: null | string
    number?: null | string
    phone_number?: null | string
    ownership_type?: OneOf<null | 
      | Schemas.TruckOwnershipType
    >
    car_type_id?: number
    capacity?: null | number
    volume?: null | number
    length?: null | number
    width?: null | number
    height?: null | number
    manufacture_year?: null | number
    dimension?: null | number
    truck_passport_number?: null | string
    can_refrigerator?: null | boolean
    has_gen_set?: null | boolean
    truck_owner_name?: null | string
    can_carry_heavy_container?: null | boolean
    can_carry_tall_container?: null | boolean
    external_id?: null | string
    verified?: boolean
    last_deal_related_id?: null | string
    origin?: OneOf<
      | Schemas.TruckOrigin
    >
    sensors?: null | Array<
      Schemas.SensorRmqModel
    >
    vin?: null | string
    vrc?: null | string
    body_number?: null | string
  }
  export type SensorRmqModel = {
    sensor_id?: number
    sensor_name?: null | string
    provider_id?: number
    provider_sensor_id?: null | string
    is_active?: boolean
    unactivate_date?: null | Date
    host?: OneOf<null | 
      | Schemas.SensorHostRmqModel
    >
  }
  export type SensorHostRmqModel = {
    url?: null | string
  }
  export type PayDocsRmqModel = {
    firm_id?: number
    deal_id?: string
    documents_copies?: OneOf<null | 
      | Schemas.DocumentStatusInfoRmqModel
    >
    documents_original?: OneOf<null | 
      | Schemas.DocumentStatusInfoRmqModel
    >
    closing_documents?: OneOf<null | 
      | Schemas.DocumentStatusInfoRmqModel
    >
    payment?: OneOf<null | 
      | Schemas.PaymentStatusRmqModel
    >
  }
  export type DocumentStatusInfoRmqModel = {
    checked?: boolean
    date?: null | Date
  }
  export type PaymentStatusRmqModel = {
    paid?: boolean
    date?: null | Date
  }
  export type TrackerOwnerAccess = '0' | '1'
  export type DealInWorkRmqModel = {
    status?: OneOf<
      | Schemas.InWorkStatus
    >
    date?: Date
    contact_id?: null | number
    tracker_phone?: null | number
  }
  export type DataForDriverViewForAtiTrucker = {
    points?: null | Array<
      Schemas.DriverTruckerPointViewForAtiTrucker
    >
    tracker_phone?: number
    deal_id?: string
    id?: string
    revoked?: boolean
    updated_at?: Date
  }
  export type DriverTruckerPointViewForAtiTrucker = {
    deal_point_id?: string
    ordinal_id?: number
    time_with_offset?: Date
    time_to_with_offset?: null | Date
    time?: null | string
    time_to?: null | string
    date?: null | Date
    date_to?: null | Date
    lat?: null | number
    lon?: null | number
    address?: null | string
    city_id?: number
    region_id?: number
    country_id?: number
    point_type?: OneOf<
      | Schemas.DealPointTypes
    >
    contact_persons?: null | Array<
      Schemas.ContactPerson2
    >
    note?: null | string
    timeslots_warehouse_id?: null | number
  }
  export type DealFileRmqModel = {
    id?: string
    access?: Schemas.DealFileAccess
    add_date?: Date
    deal_id?: string
    owner_firm_id?: number
    contact_id?: number
    file_name?: null | string
    size?: number
    link?: null | string
    file_id?: null | string
    action_status?: Schemas.DealFileActionStatus
    source_type?: Schemas.DealFileSourceTypes
    source_file_type?: Schemas.DealFileSourceFileTypes
    file_type?: Schemas.DealFileType
    timeslots_warehouse_ids?: null | Array<
      number
    >
  }
  export type DealFileActionStatus = '0' | '1' | '2' | '3'
  export type LoadCopyForDealRmqModel = {
    contact_id1?: number
    department_id?: null | number
    load_number?: null | string
    note?: null | string
    cargo_weight?: number
    cargo_volume?: number
    cargo_adr?: number
    cargo_type_id?: number
    cargo_pack_type?: number
    cargo_pallet_count?: number
    pay_attribs?: number
    fixed_rate?: boolean
    load_prepay_percent?: number
    rate_sum?: number
    distance?: number
    date_type?: Schemas.DateType
    boards?: null | Array<
      Schemas.LoadBoardForDealRmqModel
    >
    updated_at?: Date
    order_number?: null | string
    loading_city_id?: number
    loading_street?: null | string
    loading_first_date?: null | Date
    loading_time_start?: null | string
    loading_is_round_the_clock?: boolean
    unloading_city_id?: number
    unloading_street?: null | string
    unloading_first_date?: null | Date
    unloading_time_start?: null | string
    unloading_is_round_the_clock?: boolean
    loading_cargoes_for_loading?: null | Array<
      Schemas.LoadingCargo
    >
    extra_points?: null | Array<
      Schemas.LoadExtraPoint
    >
    trucks_quantity?: number
    truck_attribs?: number
    dogruz_type?: Schemas.DogruzType
    krugoreis?: boolean
    car_type?: number
  }
  export type LoadBoardForDealRmqModel = {
    is_published?: boolean
    board_id?: null | string
  }
  export type AgentRmqModel = {
    deal_id?: string
    type?: Schemas.DealAgentType
    contact_name?: null | string
    firm_name?: null | string
    ownership?: null | string
    inn?: null | string
    ogrn?: null | string
  }
  export type DealAgentType = '0' | '1'
  export type DocumentInfoRmqModel = {
    id?: null | string
    deal_id?: string
    old_id?: null | string
    editor?: number
    url?: null | string
    old_url?: null | string
    name?: null | string
    extension?: null | string
    reason?: null | string
    actor?: OneOf<null | 
      | Schemas.SimpleUser
    >
    is_signed?: boolean
    document_type?: OneOf<
      | Schemas.DocumentType
    >
    document_access?: OneOf<
      | Schemas.DealDocumentAccess
    >
    document_file_url?: null | string
    document_action_status?: Schemas.DealDocumentActionStatus
    timeslots_warehouse_ids?: null | Array<
      number
    >
  }
  export type DealDocumentActionStatus = '0' | '1'
  export type DealPayment = {
    deal_id?: null | string
    load_id?: string
    rates?: null | Record<string, unknown>
    prepay_percent?: null | number
    max_bank_days?: null | number
    prepay_percent_enabled?: boolean
    on_unloading?: boolean
    max_bank_days_enabled?: boolean
    payment_source?: Schemas.PaymentSource
    source_id?: null | string
  }
  export type RateInfo = {
    rate?: number
    rate_type?: OneOf<
      | Schemas.RateType
    >
    currency?: number
    active?: boolean
  }
  export type PaymentSource = '0' | '1' | '2' | '3' | '4' | '5'
  export type AtiTruckerDealsFilterDto = {
    number?: string
  }
  export type Point = {
    is_empty?: boolean
    x?: number
    y?: number
  }
  export type OrderContractor = {
    firm_id?: number
    contractor_firm_id?: number
  }
  export type OrderView = {
    load?: OneOf<null | 
      | Schemas.LoadView2
    >
    deal?: OneOf<null | 
      | Schemas.DealView2
    >
    custom_settings?: null | Record<string, unknown>
  }
  export type LoadView2 = {
    contact_id1?: number
    contact_id2?: null | number
    id?: string
    load_number?: null | string
    parent_id?: null | string
    load_id_for_auction?: string
    department_id?: null | number
    alias_id?: null | string
    updated_at?: Date
    added_at?: Date
    first_date?: Date
    last_date?: Date
    unload_first_date?: null | Date
    unload_last_date?: null | Date
    distance?: number
    insured_min_tariff?: number
    note?: null | string
    date_type?: OneOf<
      | Schemas.DateType
    >
    periodicity_id?: OneOf<
      | Schemas.Periodicity
    >
    order_number?: null | string
    hidden?: boolean
    krugoreis?: boolean
    loading?: OneOf<null | 
      | Schemas.ExtendedLoadPoint
    >
    extra_points?: null | Array<
      Schemas.LoadExtraPoint
    >
    unloading?: OneOf<null | 
      | Schemas.ExtendedLoadPoint
    >
    cargo?: OneOf<null | 
      | Schemas.LoadCargo
    >
    transport?: OneOf<null | 
      | Schemas.LoadTransport
    >
    boards?: null | Array<
      Schemas.LoadBoard
    >
    auction?: OneOf<null | 
      | Schemas.Auction
    >
    payment?: OneOf<null | 
      | Schemas.LoadPayment
    >
    cargo_source?: null | string
  }
  export type ExtendedLoadPoint = AllOf<
    | Schemas.LoadPoint
    | {
      region_id?: null | number
      country_id?: null | number
      extended_large_cities?: null | Array<
        Schemas.LargeCityWithRegion
      >
    }
  >
  export type LargeCityWithRegion = {
    city_id?: number
    region_id?: null | number
    country_id?: null | number
  }
  export type LoadPoint = {
    fias_id?: string
    city_id?: number
    latitude?: null | number
    longitude?: null | number
    street?: null | string
    organization_id?: null | string
    address_id?: null | string
    time_start?: null | Date
    time_end?: null | Date
    is_round_the_clock?: boolean
    large_cities?: null | Array<
      number
    >
    large_cities_with_distance?: null | Array<
      Schemas.LargeCityWithDistance
    >
    loading_cargos?: null | Array<
      Schemas.LoadingCargo
    >
    organization?: OneOf<null | 
      | Schemas.Organization
    >
  }
  export type LargeCityWithDistance = {
    city_id?: number
    distance?: number
  }
  export type Auction = {
    auction_id?: string
    load_id?: string
    active_deal_id?: null | string
    finished?: boolean
    start_rate?: number
    actual_rate?: number
    currency?: number
    step?: number
    payment_type?: Schemas.AuctionPaymentType
    start_date?: null | Date
    end_date?: null | Date
    time_to_provide_documents?: null | number
    auto_renew?: boolean
    renew_time?: null | number
    max_renew_time?: null | number
    raise_bid?: boolean
    max_rate?: null | number
    raise_bid_interval?: null | number
    win_date?: null | Date
    finish_type?: Schemas.AuctionFinishType
    load_last_date?: null | Date
    boards?: null | Array<
      Schemas.LoadBoard
    >
    auction_rates?: null | Array<
      Schemas.AuctionRate
    >
    actual_rate_with_vat?: number
    actual_rate_without_vat?: number
    duration?: number
    start_since_first_bet?: boolean
    state?: Schemas.AuctionState
    winner_rate?: OneOf<null | 
      | Schemas.AuctionRate
    >
    has_winner?: boolean
    has_possible_winner?: boolean
    has_possible_winners?: boolean
    should_select_auction_winner_manually?: boolean
    winner_ati_id?: null | number
    participants_count?: number
    winner_criterion?: Schemas.WinnerCriteria
    is_pass_through_copy?: boolean
    pass_through_info?: OneOf<null | 
      | Schemas.PassThroughInfo
    >
    custom_settings?: null | Record<string, unknown>
  }
  export type AuctionPaymentType = '1' | '22' | '23' | '24' | '25'
  export type AuctionRate = {
    auction_rate_id?: string
    added_at?: Date
    rate_firm?: OneOf<null | 
      | Schemas.FirmStarsInfo
    >
    rate?: number
    rate_with_vat?: number
    rate_without_vat?: number
    payment_type?: OneOf<null | 
      | Schemas.AuctionPaymentType
    >
    state?: OneOf<
      | Schemas.AuctionRateState
    >
    loading_date?: null | Date
    rate_place_type?: Schemas.RatePlaceType
  }
  export type FirmStarsInfo = {
    score?: number
    status?: Schemas.FirmStatus
    name?: null | string
    ati_id?: null | string
    contact_name?: null | string
    claims_count?: number
    recommendations_count?: number
    docs_count?: number
    bad_partner_firms_count?: number
  }
  export type AuctionRateState = '0' | '1' | '-8' | '-7' | '-6' | '-5' | '-4' | '-3' | '-2' | '-1'
  export type RatePlaceType = '0' | '1' | '2'
  export type AuctionState = '0' | '1' | '-8' | '-7' | '-6' | '-5' | '-4' | '-3' | '-2' | '-1'
  export type WinnerCriteria = '0' | '1'
  export type PassThroughInfo = {
    show_margin?: boolean
    marge?: number
    is_root?: boolean
    parent_boards?: null | Array<
      Schemas.BoardInfo
    >
    parent_board_list?: null | Array<
      string
    >
    parent_load?: OneOf<null | 
      | Schemas.ParentLoadInfo
    >
  }
  export type BoardInfo = {
    color?: null | string
    id?: null | string
    name?: null | string
    original_name?: null | string
  }
  export type ParentLoadInfo = {
    id?: string
    number?: null | string
  }
  export type AuctionCustomSetting = {
    value?: null | string
    firm_id?: null | number
    contact_id?: null | number
  }
  export type LoadPayment = {
    currency_id?: number
    money_type?: number
    rate_sum?: number
    sum_with_nds?: number
    sum_without_nds?: number
    prepay_percent?: number
    prepay_percent_enabled?: boolean
    pay_days?: number
    pay_attribs?: number
    pay_days_enabled?: boolean
    fixed_rate?: boolean
    torg?: boolean
    direct_contract?: boolean
    in_fuel?: boolean
    on_unloading?: boolean
    hide_responses?: boolean
    accept_payment_types?: number
  }
  export type DealView2 = {
    deal_id?: string
    status?: OneOf<
      | Schemas.DealState
    >
    counterparty_status?: OneOf<
      | Schemas.DealState
    >
    denial_reason?: null | string
    load_id?: string
    taker_firm_id?: number
    taker_contact_id?: number
    taker_contact_list?: null | Array<
      number
    >
    taker_department_id?: null | number
    cargo_owner_firm_id?: number
    cargo_owner_department_id?: null | number
    cargo_owner_ati_id?: null | string
    taker_ati_id?: null | string
    end_of_reservation?: Date
    updated_at?: Date
    started_at?: null | Date
    finished_at?: null | Date
    payment?: OneOf<null | 
      | Schemas.DealPaymentView2
    >
    rate?: number
    rate_type?: OneOf<
      | Schemas.RateType
    >
    currency?: number
    money_type?: number
    is_viewed?: boolean
    auction_id?: null | string
    deal_load_id?: string
    requisites_id?: null | string
    signer_id?: null | string
    driver_id?: null | string
    driver?: OneOf<null | 
      | Schemas.ShortDriverInfo
    >
    truck_info_id?: null | string
    semitrailer_id?: null | string
    trailer_id?: null | string
    deal_note?: null | string
    deal_kind?: OneOf<
      | Schemas.DealKinds
    >
  }
  export type DealPaymentView2 = {
    rate_sum?: number
    currency_id?: number
    sum_with_nds?: number
    nds_currency_id?: number
    sum_without_nds?: number
    not_nds_currency_id?: number
    prepay_percent?: number
    pay_days?: number
    prepay_percent_enabled?: boolean
    on_unloading?: boolean
    in_fuel?: boolean
    pay_days_enabled?: boolean
    fixed_rate?: boolean
    torg?: boolean
    direct_contract?: boolean
    money_type?: number
    source?: OneOf<
      | Schemas.PaymentSource
    >
  }
  export type ShortDriverInfo = {
    first_name?: null | string
    second_name?: null | string
    patronymic?: null | string
    phone_number?: null | string
  }
  export type CustomSettingView = {
    value?: null | string
    firm_id?: null | number
    contact_id?: null | number
  }
  export type InternalFullOrdersInfo = {
    role?: OneOf<
      | Schemas.OrderRole
    >
    tab?: OneOf<
      | Schemas.OrderTab
    >
    firm_id?: number
    contact_id?: number
    filter_departments?: null | Array<
      number
    >
  }
  export type OrderFilter = {
    current_firm_id?: number
    owner_firm_id?: null | number
    taker_firm_id?: null | number
    with_reconciliation_auctions?: boolean
    with_reserved?: boolean
    with_auctions?: boolean
    with_child_entities?: boolean
    with_finished_and_approved?: boolean
    count?: null | number
  }
  export type ReserveInternalDto = {
    deal_id?: string
    firm_id?: number
    contact_id?: number
    from_auctions?: boolean
    is_pass_through?: boolean
    load_id?: string
    deal_kind?: Schemas.DealKinds
    deal_load_pairs?: null | Array<
      Schemas.DealLoadPair
    >
  }
  export type DealLoadPair = {
    deal_id?: string
    load_id?: string
  }
  export type PassThroughTakeDtoInternal = {
    copies?: OneOf<null | 
      | Schemas.LoadTakeCopiesRmqModel
    >
    rate_type?: Schemas.RateType
    firm_id?: number
    contact_id?: number
    load_id?: string
    deal_id?: string
    requisites_id?: string
    signer_id?: string
    is_drop_docs?: boolean
    deal_kind?: OneOf<null | 
      | Schemas.DealKinds
    >
    tracker_owner_access?: null | number
    is_pass_through?: boolean
  }
  export type LoadTakeCopiesRmqModel = {
    driver?: OneOf<null | 
      | Schemas.DriverInfo
    >
    trailer?: OneOf<null | 
      | Schemas.TruckInfo
    >
    semitrailer?: OneOf<null | 
      | Schemas.TruckInfo
    >
    truck?: OneOf<null | 
      | Schemas.TruckInfo
    >
  }
  export type OrderTakerInfo = {
    deal_id?: string
    firm_id?: number
    contact_id?: number
    from_auctions?: boolean
    reason?: null | string
    state?: OneOf<null | 
      | Schemas.DealState
    >
    has_parent?: boolean
    has_children?: boolean
    parent_load_id?: null | string
  }
  export type DeclineByAuctionsDto = {
    auction_id?: string
    firm_id?: number
    contractor_firm_id?: number
  }
  export type ChangeOrdersInternalDto = {
    changes?: null | Array<
      Schemas.ChangeOrdersPairDto
    >
  }
  export type ChangeOrdersPairDto = {
    reserve?: OneOf<null | 
      | Schemas.ChangeOrdersReserveDto
    >
    decline?: OneOf<null | 
      | Schemas.ChangeOrdersDeclineDto
    >
  }
  export type ChangeOrdersReserveDto = {
    load_id?: string
    deal_id?: string
    contact_id?: number
    firm_id?: number
  }
  export type ChangeOrdersDeclineDto = {
    load_id?: string
    deal_id?: string
    contact_id?: number
    firm_id?: number
    state?: Schemas.DealState
    reason?: null | string
  }
  export type SetOrderDateInternalDto = {
    updated_at?: null | Date
  }
  export type GetDealsInternalDto = {
    firm_id?: null | number
    load_ids?: null | Array<
      string
    >
  }
  export type DeleteOutdatedInviteDto = {
    load_id?: string
    taker_firm_id?: number
    taker_contact_id?: number
  }
  export type PersonalInvitationView2 = AllOf<
    | Schemas.DealView2
    | {
      cancellation_date?: null | Date
    }
  >
  export type UnilateralOrderViewOfFullDealView = {
    load_copy?: OneOf<null | 
      | Schemas.LoadCopyView
    >
    deal?: OneOf<null | 
      | Schemas.FullDealView
    >
  }
  export type LoadCopyView = {
    id?: string
    load_number?: null | string
    load_meta?: OneOf<null | 
      | Schemas.LoadMeta
    >
    auction_id?: null | string
    updated_at?: Date
    added_at?: Date
    archive_date?: null | Date
    distance?: number
    distance_type?: number
    platon_roads_length?: number
    toll_roads_length?: number
    travel_time?: string
    true_price?: number
    true_currency_id?: number
    parent_id?: null | string
    is_unpublished?: boolean
    firm_id?: number
    contact_id1?: number
    contact_id2?: null | number
    note?: null | string
    first_date?: Date
    last_date?: Date
    date_type?: Schemas.DateType
    periodicity_id?: Schemas.Periodicity
    order_number?: null | string
    krugoreis?: boolean
    zimnik?: boolean
    ferries?: boolean
    loading?: OneOf<null | 
      | Schemas.LoadPoint
    >
    extra_points?: null | Array<
      Schemas.LoadExtraPoint
    >
    unloading?: OneOf<null | 
      | Schemas.LoadPoint
    >
    cargo?: OneOf<null | 
      | Schemas.LoadCargo
    >
    transport?: OneOf<null | 
      | Schemas.LoadTransport
    >
    boards?: null | Array<
      Schemas.BoardView
    >
    unload_first_date?: null | Date
    unload_last_date?: null | Date
  }
  export type LoadMeta = {
    load_meta_id?: null | string
    meta_data?: null | string
  }
  export type BoardView = {
    board_id?: null | string
    name?: null | string
    color?: null | string
  }
  export type FullDealView = AllOf<
    | Schemas.DealView3
    | {
      started_at?: null | Date
      finished_at?: null | Date
      denial_reason?: null | string
      requisite_id?: null | string
      taker_requisites?: OneOf<null | 
        | Schemas.RequisiteView2
      >
      signer_id?: null | string
      driver?: OneOf<null | 
        | Schemas.DriverView2
      >
      truck?: OneOf<null | 
        | Schemas.TruckView2
      >
      trailer?: OneOf<null | 
        | Schemas.TruckView2
      >
      semi_trailer?: OneOf<null | 
        | Schemas.TruckView2
      >
      document?: OneOf<null | 
        | Schemas.DocumentView
      >
      additional_documents?: null | Array<
        Schemas.AdditionalDocumentView
      >
      in_work_status_model?: OneOf<
        | Schemas.InWorkStatusModel
      >
      in_work?: OneOf<null | 
        | Schemas.DealInWorkView
      >
      deal_note?: null | string
      deal_kind?: Schemas.DealKinds
      points?: null | Array<
        Schemas.DealPointView
      >
    }
  >
  export type RequisiteView2 = {
    requisite_id?: string
    requisite_firm_name?: null | string
    signer_id?: null | string
    own_ship_id?: number
    inn?: null | string
    kpp?: null | string
    requisite_type_id?: number
  }
  export type DriverView2 = {
    driver_id?: string
    parent_id?: null | string
    first_name?: null | string
    second_name?: null | string
    patronymic?: null | string
    phone_number?: null | string
    driver_license_number?: null | string
    passport_series?: null | string
    passport_number?: null | string
    passport_issued_by?: null | string
    passport_when_issued?: Date
    registration?: null | string
    is_attracted_driver?: boolean
    last_deal_related_id?: null | string
    description?: null | string
    attracted_from?: null | string
    scans?: null | Array<
      Schemas.Scan
    >
    origin?: OneOf<
      | Schemas.DriverOrigin
    >
    date_of_birth?: null | Date
    department_code_in_passport?: null | string
    driver_inn?: null | string
    in_cargo_owner_black_list?: boolean
    external_id?: null | string
    black_list_reasons?: null | Array<
      string
    >
  }
  export type TruckView2 = {
    truck_id?: string
    parent_id?: null | string
    last_deal_related_id?: null | string
    type?: OneOf<
      | Schemas.TruckType
    >
    description?: null | string
    brand_id?: null | number
    model?: null | string
    number?: null | string
    phone_number?: null | string
    is_attracted_truck?: boolean
    ownership_type?: OneOf<
      | Schemas.TruckOwnershipType
    >
    car_type_id?: number
    capacity?: null | number
    volume?: null | number
    length?: null | number
    width?: null | number
    height?: null | number
    manufacture_year?: null | number
    vin?: null | string
    vrc?: null | string
    body_number?: null | string
    dimension?: null | number
    truck_passport_number?: null | string
    can_refrigerator?: null | boolean
    has_gen_set?: null | boolean
    truck_owner_name?: null | string
    can_carry_heavy_container?: null | boolean
    can_carry_tall_container?: null | boolean
    external_id?: null | string
    verified?: boolean
    modification_restricted?: boolean
    scans?: null | Array<
      Schemas.Scan
    >
    origin?: OneOf<
      | Schemas.TruckOrigin
    >
  }
  export type DocumentView = {
    id?: null | string
    old_id?: null | string
    editor?: null | string
    url?: null | string
    old_url?: null | string
    name?: null | string
    is_signed?: boolean
    access?: OneOf<
      | Schemas.DealDocumentAccess
    >
  }
  export type AdditionalDocumentView = {
    id?: null | string
    is_counterparty_file?: boolean
    url?: null | string
    name?: null | string
    is_signed?: boolean
    document_type?: OneOf<
      | Schemas.DocumentType
    >
    access?: OneOf<
      | Schemas.DealDocumentAccess
    >
  }
  export type DealView3 = {
    deal_id?: string
    load_copy_id?: string
    load_id?: string
    taker_ati_id?: null | string
    taker_persistent_user_id?: number
    taker_contact_id?: number
    cargo_owner_ati_id?: null | string
    cargo_owner_persistent_user_id?: number
    updated_at?: Date
    end_of_reservation?: null | Date
    auction_id?: null | string
    status?: OneOf<
      | Schemas.DealState
    >
    counterparty_status?: OneOf<
      | Schemas.DealState
    >
    payment?: OneOf<null | 
      | Schemas.DealPaymentView3
    >
    pay_docs?: OneOf<null | 
      | Schemas.PayDocsView
    >
    files?: null | Array<
      Schemas.DealFileView
    >
    document_templates?: null | Array<
      Schemas.DealDocumentTemplatesView
    >
    is_tracking?: boolean
    should_show_rate_to_driver?: null | boolean
  }
  export type DealPaymentView3 = {
    rates?: null | Array<
      Schemas.RateView2
    >
    prepay_percent?: number
    prepay_percent_enabled?: boolean
    on_unloading?: boolean
    in_fuel?: boolean
    pay_days_enabled?: boolean
    pay_days?: number
    fixed_rate?: boolean
    torg?: boolean
    direct_contract?: boolean
    money_type?: null | number
  }
  export type RateView2 = {
    rate?: number
    rate_type?: Schemas.RateType
    currency?: number
    active?: boolean
  }
  export type DealDocumentTemplatesView = {
    organization_address?: null | string
    templates?: null | Array<
      Schemas.DocumentTemplateView
    >
  }
  export type SaveUnilateralOrderDtoNew = {
    points?: Array<
      Schemas.UnilateralOrderPointDtoInboxNew
    >
    driver_id?: null | string
    truck_id?: null | string
    trailer_id?: null | string
    semitrailer_id?: null | string
    deal_id?: null | string
    rate?: null | number
    currency?: null | number
    rate_type?: OneOf<null | 
      | Schemas.RateType
    >
    money_type?: null | number
    order_number?: null | string
    should_show_rate_to_driver?: boolean
    adr?: null | number
    loading_type?: null | number
    unloading_type?: null | number
    belt_count?: null | number
    file_ids?: null | Array<
      string
    >
  }
  export type UnilateralOrderPointDtoInboxNew = {
    ordinal_id?: number
    country_id?: number
    region_id?: null | number
    city_id?: number
    time?: string
    time_to?: null | string
    date?: null | string
    date_to?: null | string
    lat?: number
    lon?: number
    address?: string
    contact_persons?: null | Array<
      Schemas.ContactPerson2
    >
    note?: null | string
    point_type?: OneOf<
      | Schemas.UnilateralLoadPointType
    >
    is_round_the_clock?: boolean
    cargos?: Array<
      Schemas.CargoDto
    >
  }
  export type UnilateralLoadPointType = '1' | '2' | '3' | '8'
  export type CargoDto = {
    cargo_id?: number
    name_id?: null | number
    name?: null | string
    packaging_type?: null | number
    packaging_quantity?: null | number
    weight?: OneOf<null | 
      | Schemas.CargoWeight
    >
    volume?: null | number
    sizes?: OneOf<null | 
      | Schemas.LoadSizeDto
    >
  }
  export type CargoWeight = {
    quantity?: number
    type?: OneOf<null | 
      | Schemas.WeightType
    >
  }
  export type WeightType = '0' | '1'
  export type LoadSizeDto = {
    length?: null | number
    width?: null | number
    height?: null | number
    diameter?: null | number
  }
  export type DocumentMinView = {
    document_id?: null | string
    url?: null | string
  }
  export type DriverTrackerPointDTO = {
    deal_point_id?: string
    time?: null | string
    date?: null | string
    time_to?: null | string
    date_to?: null | string
    lat?: null | number
    lon?: null | number
    address?: null | string
    contact_persons?: null | Array<
      Schemas.ContactPerson2
    >
    note?: null | string
    timeslots_warehouse_id?: null | number
  }
  export type DealMapView = {
    goals?: null | Array<
      Schemas.GoalView
    >
    traces?: null | Array<
      Schemas.TraceView
    >
  }
  export type GoalView = {
    longitude?: number
    latitude?: number
    events?: null | Array<
      Schemas.EventView
    >
    ordinal_id?: number
    trace?: boolean
  }
  export type EventView = {
    type?: OneOf<
      | Schemas.TrackerEventType
    >
    tag?: null | string
    date?: Date
    date_to?: null | Date
    time?: null | string
    time_to?: null | string
    location_name?: OneOf<null | 
      | Schemas.LocationNameView
    >
  }
  export type TrackerEventType = '0' | '1' | '2'
  export type LocationNameView = {
    country?: null | string
    region?: null | string
    city?: null | string
    address?: null | string
  }
  export type TraceView = {
    car?: OneOf<null | 
      | Schemas.CarView
    >
    first_action?: Date
    last_action?: Date
    points?: null | Array<
      Schemas.PointView
    >
  }
  export type CarView = {
    driver_phone?: null | string
    car_status?: OneOf<
      | Schemas.MapCarType
    >
  }
  export type PointView = {
    longitude?: number
    latitude?: number
    events?: null | Array<
      Schemas.EventView
    >
    location_date?: Date
    is_fake?: boolean
    is_disabled?: boolean
    is_no_data?: boolean
    is_power_saving?: boolean
    is_empty_run?: boolean
    is_parking?: boolean
  }
  export type MapHistoryView = {
    events?: null | Array<
      Schemas.UserDealsHistoryView
    >
  }
  export type UserDealsHistoryView = {
    date?: Date
    event?: OneOf<null | 
      | Schemas.EventView
    >
    longitude?: number
    latitude?: number
    params?: null | Array<
      string
    >
  }
  export type OrderViewOfFullDealView = {
    load_copy?: OneOf<null | 
      | Schemas.LoadCopyView
    >
    deal?: OneOf<null | 
      | Schemas.FullDealView
    >
  }
  export type FinalExceptionModelOfNotFoundException = {
    reason?: null | string
    error?: null | string
  }
  export type SaveUnilateralOrderDto2 = {
    deal_id?: null | string
    cargo_weight?: number
    cargo_volume?: number
    cargo_type_id?: number
    cargo_type?: null | string
    loading_type?: null | number
    unloading_type?: null | number
    length?: null | number
    height?: null | number
    width?: null | number
    diameter?: null | number
    pack_type?: null | number
    pallet_count?: null | number
    belt_count?: null | number
    adr?: null | number
    points?: null | Array<
      Schemas.UnilateralOrderPointDtoInbox
    >
    driver_id?: null | string
    send_to_driver?: null | boolean
    truck_id?: null | string
    trailer_id?: null | string
    semitrailer_id?: null | string
    rate?: null | number
    currency?: null | number
    payment_type?: OneOf<null | 
      | Schemas.UnilateralPaymentType
    >
    requisites_id?: null | string
    signer_id?: null | string
    loading_city?: number
    unloading_city?: number
    order_number?: null | string
  }
  export type OrderFilter2 = {
    role?: OneOf<
      | Schemas.OrderRole
    >
    statuses?: null | Array<
      Schemas.DealState
    >
    load_ids?: null | Array<
      string
    >
  }
  export type DealStatusView = {
    deal_id?: string
    status?: Schemas.DealState
    deal_kind?: Schemas.DealKinds
    inwork_status?: OneOf<null | 
      | Schemas.InWorkStatus
    >
    tracker_offer_status?: OneOf<null | 
      | Schemas.TrackerOfferStatus
    >
    status_change_date_time?: Date
  }
  export type OrderToWorkDtoInbox = {
    in_work_status_model?: OneOf<
      | Schemas.InWorkStatusModel
    >
  }
  export type DocumentInfoShortView = {
    id?: null | string
    url?: null | string
    is_signed?: boolean
  }
  export type DealAcceptFromLoadIntegratorsDtoInbox = {
    template_id?: null | string
    document_type?: null | string
    requisite_id?: string
    signer_id?: string
    contract_number?: null | string
    contract_start_date?: null | Date
    point_ids?: null | Array<
      Schemas.DealPointIntegratorsDtoInbox
    >
  }
  export type DealPointIntegratorsDtoInbox = {
    deal_point_id?: string
    organization_id?: string
    contact_person_id?: null | string
    address_id?: null | string
  }
  export type LoadTakeInfoIntegratorsDto = {
    rate_type?: Schemas.RateType
    driver_id?: null | string
    truck_info_id?: null | string
    semitrailer_id?: null | string
    trailer_id?: null | string
    requisites_id?: string
    signer_id?: null | string
    is_drop_docs?: boolean
    deal_kind?: OneOf<null | 
      | Schemas.DealKinds
    >
    taker_note?: null | string
  }
  export type ChangeContactsDto = {
    deal_id?: string
    contact_id1?: number
    contact_id2?: null | number
  }
  export type DeclineOrderIntegratorsDto = {
    reason?: null | string
    action?: OneOf<null | 
      | Schemas.FinishActionIntegrators
    >
  }
  export type FinishActionIntegrators = '1' | '2' | '3' | '4'
  export type PersonalInvitationDTO = {
    load_id?: string
    taker_ati_id?: string
    taker_contacts_list?: Array<
      number
    >
    payment?: OneOf<
      | Schemas.PersonalInvitationPaymentDTO
    >
    cancel_after_in_minutes?: null | number
    cancellation_date?: null | Date
    is_tracking?: boolean
  }
  export type PersonalInvitationPaymentDTO = {
    price?: null | number
    currency_id?: null | number
    nds_price?: null | number
    nds_currency_id?: null | number
    not_nds_price?: null | number
    not_nds_currency_id?: null | number
  }
  export type PersonalOfferInvitationDTO = {
    load_id?: string
    response_id?: string
    rate_types?: null | Array<
      Schemas.PriceType
    >
    cancel_after_in_minutes?: null | number
    is_auto?: boolean
  }
  export type PriceType = '0' | '1' | '2'
  export type LoadPersonalInvitationView = {
    load_id?: string
    taker_ati_id?: null | string
    taker_persistent_user_id?: number
    taker_contacts_list?: null | Array<
      number
    >
    taker_contact_id?: number
    date?: Date
    cancellation_date?: null | Date
    deal_kind?: OneOf<
      | Schemas.DealKinds
    >
    payment?: OneOf<null | 
      | Schemas.InvitationPaymentView
    >
    is_tracking?: boolean
  }
  export type InvitationPaymentView = {
    rates?: null | Array<
      Schemas.InvitationRateView
    >
    prepay_percent?: number
    prepay_percent_enabled?: boolean
    on_unloading?: boolean
    in_fuel?: boolean
    pay_days_enabled?: boolean
    pay_days?: number
    fixed_rate?: boolean
    torg?: boolean
    direct_contract?: boolean
    money_type?: null | number
    payment_source?: Schemas.PaymentSource
  }
  export type InvitationRateView = {
    rate?: number
    rate_type?: OneOf<
      | Schemas.RateType
    >
    currency?: number
  }
  export type PersonalInvitationView3 = {
    owner_ati_id?: null | string
    owner_persistent_user_id?: number
    owner_contact_id?: null | number
    taker_ati_id?: null | string
    taker_persistent_user_id?: number
    taker_contact_id?: number
    taker_contacts_list?: null | Array<
      number
    >
    date?: Date
    cancellation_date?: null | Date
    payment?: OneOf<null | 
      | Schemas.InvitationPaymentView
    >
    load?: OneOf<null | 
      | Schemas.ShortLoadView
    >
    is_tracking?: boolean
    deal_kind?: OneOf<
      | Schemas.DealKinds
    >
  }
  export type ShortLoadView = {
    id?: string
    load_number?: null | string
    distance?: number
    distance_type?: number
    platon_roads_length?: number
    toll_roads_length?: number
    travel_time?: string
    true_price?: number
    true_currency_id?: number
    note?: null | string
    first_date?: Date
    last_date?: Date
    date_type?: Schemas.DateType
    periodicity_id?: Schemas.Periodicity
    order_number?: null | string
    krugoreis?: boolean
    zimnik?: boolean
    ferries?: boolean
    loading?: OneOf<null | 
      | Schemas.LoadPoint
    >
    extra_points?: null | Array<
      Schemas.LoadExtraPoint
    >
    unloading?: OneOf<null | 
      | Schemas.LoadPoint
    >
    cargo?: OneOf<null | 
      | Schemas.LoadCargo
    >
    transport?: OneOf<null | 
      | Schemas.LoadTransport
    >
    unload_first_date?: null | Date
    unload_last_date?: null | Date
  }
  export type DealOrderView2 = {
    load?: OneOf<null | 
      | Schemas.LoadView3
    >
    deal?: OneOf<null | 
      | Schemas.DealView4
    >
    is_red?: boolean
    custom_settings?: null | Record<string, unknown>
  }
  export type LoadView3 = {
    id?: string
    load_number?: null | string
    parent_id?: null | string
    load_id_for_auction?: string
    FirmId?: null | string
    updated_at?: Date
    added_at?: Date
    first_date?: Date
    last_date?: Date
    unload_first_date?: null | Date
    unload_last_date?: null | Date
    distance?: number
    insured_min_tariff?: number
    note?: null | string
    date_type?: OneOf<
      | Schemas.DateType
    >
    periodicity_id?: OneOf<
      | Schemas.Periodicity
    >
    order_number?: null | string
    krugoreis?: boolean
    loading?: OneOf<null | 
      | Schemas.LoadPointViewForOrder2
    >
    extra_points?: null | Array<
      Schemas.LoadExtraPointView
    >
    unloading?: OneOf<null | 
      | Schemas.LoadPointViewForOrder2
    >
    cargo?: OneOf<null | 
      | Schemas.LoadCargo
    >
    transport?: OneOf<null | 
      | Schemas.LoadTransport
    >
    boards?: null | Array<
      Schemas.BoardView
    >
    auction?: OneOf<null | 
      | Schemas.AuctionView2
    >
    pass_through_info?: OneOf<null | 
      | Schemas.PassThroughInfo
    >
    contact_id1?: null | number
    contact_id2?: null | number
    department_id?: null | number
    source?: OneOf<
      | Schemas.CopySource
    >
    cargo_source?: null | string
    lot_info?: OneOf<null | 
      | Schemas.LotInformationView
    >
  }
  export type LoadPointViewForOrder2 = {
    city_id?: number
    latitude?: null | number
    longitude?: null | number
    street?: null | string
    organization_id?: null | string
    address_id?: null | string
    time_start?: null | Date
    time_end?: null | Date
    is_round_the_clock?: boolean
    large_cities?: null | Array<
      number
    >
    loading_cargos?: null | Array<
      Schemas.LoadingCargo
    >
    organization?: OneOf<null | 
      | Schemas.OrganizationView
    >
    address?: OneOf<null | 
      | Schemas.PointStockDocView
    >
  }
  export type LoadExtraPointView = {
    city_id?: number
    point_type?: OneOf<
      | Schemas.LoadExtraPointType
    >
    ordinal_id?: number
    distance?: number
    street?: null | string
    organization_id?: null | string
    address_id?: null | string
    latitude?: null | number
    longitude?: null | number
    loading_date_start?: null | Date
    loading_date_end?: null | Date
    loading_time_start?: null | string
    loading_time_end?: null | string
    is_round_the_clock?: boolean
    organization?: OneOf<null | 
      | Schemas.OrganizationView
    >
    address?: OneOf<null | 
      | Schemas.PointStockDocView
    >
    loading_cargos?: null | Array<
      Schemas.LoadingCargo
    >
    unloading_cargos?: null | Array<
      Schemas.UnloadingCargo
    >
  }
  export type AuctionView2 = {
    auction_id?: string
    finished?: boolean
    win_date?: null | Date
    time_to_provide_documents?: null | number
    finish_type?: OneOf<
      | Schemas.AuctionFinishType
    >
    actual_rate?: null | number
    currency?: null | number
    payment_type?: OneOf<null | 
      | Schemas.AuctionPaymentType
    >
    start_date?: null | Date
    end_date?: null | Date
    has_possible_winner?: null | boolean
    participants_count?: null | number
    auction_rates?: null | Array<
      Schemas.AuctionRate
    >
    actual_rate_without_vat?: null | number
    actual_rate_with_vat?: null | number
    state?: OneOf<null | 
      | Schemas.AuctionState
    >
    actual_rates_count?: null | number
    documents_timed_out?: null | boolean
    active_deal_id?: null | string
    load_id?: null | string
    start_rate?: null | number
    duration?: null | number
    start_since_first_bet?: null | boolean
    winner_criterion?: OneOf<null | 
      | Schemas.WinnerCriteria
    >
    winner_rate?: OneOf<null | 
      | Schemas.AuctionRate
    >
    has_winner?: boolean
  }
  export type CopySource = '0' | '1'
  export type LotInformationView = {
    lot_number?: number
  }
  export type DealView4 = {
    deal_load_id?: null | string
    taker_ati_id?: null | string
    taker_contact_id?: number
    taker_contacts_list?: null | Array<
      number
    >
    taker_department_id?: null | number
    department_id?: null | number
    rate_type?: OneOf<null | 
      | Schemas.RateType
    >
    updated_at?: null | Date
    started_at?: null | Date
    finished_at?: null | Date
    status?: OneOf<
      | Schemas.DealState
    >
    deal_kind?: OneOf<null | 
      | Schemas.DealKinds
    >
    denial_reason?: null | string
    is_viewed?: null | boolean
    deal_note?: null | string
    deal_id?: null | string
    load_id?: null | string
    signer_id?: null | string
    driver?: OneOf<null | 
      | Schemas.DriverView3
    >
    truck?: OneOf<null | 
      | Schemas.TruckView3
    >
    trailer?: OneOf<null | 
      | Schemas.TruckView3
    >
    semi_trailer?: OneOf<null | 
      | Schemas.TruckView3
    >
    document_info?: OneOf<null | 
      | Schemas.DocumentInfoView
    >
    rate?: null | number
    currency?: null | number
    money_type?: null | number
    documents?: null | Array<
      Schemas.DocumentInfoView
    >
    files?: null | Array<
      Schemas.DealFileView
    >
    document_templates?: null | Array<
      Schemas.DealDocumentTemplatesView
    >
    in_work_status_model?: OneOf<
      | Schemas.InWorkStatusModel
    >
    in_work?: OneOf<null | 
      | Schemas.DealInWorkView
    >
    tracker_info?: OneOf<null | 
      | Schemas.DealTrackerInfoView
    >
    data_for_driver?: OneOf<null | 
      | Schemas.DataForDriverView
    >
    points?: null | Array<
      Schemas.DealPointView
    >
    payment?: OneOf<null | 
      | Schemas.DealPaymentView2
    >
    pay_docs?: OneOf<null | 
      | Schemas.PayDocsView2
    >
    taker_requisites?: OneOf<null | 
      | Schemas.RequisiteView
    >
    end_of_reservation?: null | Date
    auction_id?: null | string
    cancellation_date?: null | Date
    document_access?: OneOf<
      | Schemas.DealDocumentAccess
    >
    timeslots_warehouse_ids?: null | Array<
      number
    >
    document_file_url?: null | string
    is_tracking?: boolean
    should_show_rate_to_driver?: null | boolean
  }
  export type DriverView3 = {
    id?: string
    parent_driver_id?: null | string
    first_name?: null | string
    second_name?: null | string
    patronymic?: null | string
    phone_number?: null | string
    normalized_phone_number?: number
    driver_license_number?: null | string
    passport_series?: null | string
    passport_number?: null | string
    passport_issued_by?: null | string
    passport_when_issued?: Date
    registration?: null | string
    is_attracted_driver?: boolean
    last_deal_related_id?: null | string
    description?: null | string
    attracted_from_firm?: null | string
    modification_restricted?: boolean
    origin?: OneOf<
      | Schemas.DriverOrigin
    >
    date_of_birth?: null | Date
    department_code_in_passport?: null | string
    driver_inn?: null | string
    in_cargo_owner_black_list?: boolean
    external_id?: null | string
    black_list_reasons?: null | Array<
      string
    >
    tracker_presence?: OneOf<null | 
      | Schemas.TrackerPresenceView
    >
    phone_binding?: OneOf<null | 
      | Schemas.PhoneBindingView
    >
    passport_scans?: null | Array<
      Schemas.ScanView2
    >
    driver_license_scans?: null | Array<
      Schemas.ScanView2
    >
  }
  export type PhoneBindingView = {
    status?: Schemas.PhoneBindingStatus
    account_id?: null | string
    firm_name?: null | string
    owner_type?: Schemas.PhoneOwnerType
  }
  export type PhoneBindingStatus = '0' | '1' | '2' | '3' | '4'
  export type ScanView2 = {
    owner_id?: string
    id?: string
    path?: null | string
    name?: null | string
    file_id?: null | string
    type?: OneOf<
      | Schemas.AutoparkDocumentType
    >
  }
  export type TruckView3 = {
    id?: string
    last_deal_related_id?: null | string
    type?: OneOf<
      | Schemas.TruckType
    >
    description?: null | string
    brand_id?: null | number
    model?: null | string
    number?: null | string
    phone_number?: null | string
    ownership_type?: OneOf<
      | Schemas.TruckOwnershipType
    >
    car_type_id?: number
    capacity?: null | number
    volume?: null | number
    length?: null | number
    width?: null | number
    height?: null | number
    manufacture_year?: null | number
    vin?: null | string
    vrc?: null | string
    body_number?: null | string
    dimension?: null | number
    truck_passport_number?: null | string
    can_refrigerator?: null | boolean
    has_gen_set?: null | boolean
    truck_owner_name?: null | string
    can_carry_heavy_container?: null | boolean
    can_carry_tall_container?: null | boolean
    external_id?: null | string
    verified?: boolean
    modification_restricted?: boolean
    tracker_presence?: OneOf<null | 
      | Schemas.TrackerPresenceView
    >
    phone_binding?: OneOf<null | 
      | Schemas.PhoneBindingView
    >
    parent_truck_id?: null | string
    scans?: null | Array<
      Schemas.ScanView2
    >
    photos?: null | Array<
      Schemas.ScanView2
    >
    sensors?: null | Array<
      Schemas.SensorView
    >
    origin?: OneOf<
      | Schemas.TruckOrigin
    >
  }
  export type SensorView = {
    sensor_id?: number
    sensor_name?: null | string
    provider_id?: number
    provider_sensor_id?: null | string
    is_active?: boolean
    unactivate_date?: null | Date
    host?: OneOf<null | 
      | Schemas.SensorHostView
    >
  }
  export type SensorHostView = {
    sensor_host_id?: number
    url?: null | string
  }
  export type DealTrackerInfoView = {
    driver_data_expected?: boolean
    owner_access?: OneOf<
      | Schemas.TrackerOwnerAccess
    >
    updated_at?: Date
  }
  export type PayDocsView2 = {
    documents_copies?: OneOf<null | 
      | Schemas.DocumentStatusInfoView
    >
    documents_original?: OneOf<null | 
      | Schemas.DocumentStatusInfoView
    >
    documents_original_track?: OneOf<null | 
      | Schemas.DocumentTrackingInfoView
    >
    payment?: OneOf<null | 
      | Schemas.PaymentStatusView
    >
    closing_documents?: OneOf<null | 
      | Schemas.DocumentStatusInfoView
    >
  }
  export type DealDocumentSourceTypes = '0' | '1' | '2'
  export type OrdersInformation = {
    orders?: null | Array<
      Schemas.IOrder
    >
    accounts?: null | Record<string, unknown>
    counters?: OneOf<null | 
      | Schemas.OrdersCounters
    >
    cities?: null | Record<string, unknown>
    comments?: null | Record<string, unknown>
    boards?: null | Record<string, unknown>
    ati_id_map?: null | Record<string, unknown>
    organizations?: null | Array<
      Schemas.Organization
    >
    lot_info?: null | Array<
      Schemas.CargosLots
    >
  }
  export type IOrder = {
    load?: OneOf<null | 
      | Schemas.Load
    >
    is_red?: boolean
  }
  export type Load = {
    id?: string
    load_number?: null | string
    updated_at?: Date
    added_at?: Date
    archive_date?: null | Date
    distance?: number
    distance_type?: number
    platon_roads_length?: number
    toll_roads_length?: number
    travel_time?: string
    zimnik?: boolean
    ferries?: boolean
    true_price?: number
    true_currency_id?: number
    parent_id?: null | string
    root_id?: null | string
    is_unpublished?: boolean
    firm_id?: number
    alias_id?: null | string
    contact_id1?: number
    contact_id2?: null | number
    department_id?: null | number
    note?: null | string
    first_date?: Date
    last_date?: Date
    date_type?: Schemas.DateType
    periodicity_id?: Schemas.Periodicity
    order_number?: null | string
    hidden?: boolean
    krugoreis?: boolean
    loading?: OneOf<null | 
      | Schemas.LoadPoint
    >
    extra_points?: null | Array<
      Schemas.LoadExtraPoint
    >
    unloading?: OneOf<null | 
      | Schemas.LoadPoint
    >
    cargo?: OneOf<null | 
      | Schemas.LoadCargo
    >
    transport?: OneOf<null | 
      | Schemas.LoadTransport
    >
    payment?: OneOf<null | 
      | Schemas.LoadPayment
    >
    load_meta?: OneOf<null | 
      | Schemas.LoadMeta
    >
    deal?: OneOf<null | 
      | Schemas.DealItem
    >
    boards?: null | Array<
      Schemas.LoadBoard
    >
    auction_id?: null | string
    auction?: OneOf<null | 
      | Schemas.Auction
    >
    unload_first_date?: null | Date
    unload_last_date?: null | Date
    pass_through_info?: OneOf<null | 
      | Schemas.PassThroughInfo
    >
    source?: Schemas.CopySource
    lot_id?: null | string
    lot_number?: null | number
    archive_reason?: null | number
    is_pass_through_copy?: boolean
    cargo_source?: null | string
  }
  export type DealItem = {
    auction?: OneOf<null | 
      | Schemas.Auction
    >
    auction_id?: null | string
    deal_type?: Schemas.DealType
  }
  export type DealType = '0' | '1' | '2'
  export type OrdersCounters = {
    own_items_count?: number
    own_items_contact_count?: number
    unpublished_items_count?: number
    unpublished_items_contact_count?: number
    reconciliation_count?: number
    reconciliation_contact_count?: number
    in_progress_count?: number
    in_progress_contact_count?: number
    completed_count?: number
    completed_contact_count?: number
    red_reconciliation_count?: number
    red_reconciliation_contact_count?: number
    payments_count?: number
    payments_contact_count?: number
  }
  export type City = {
    city_id?: number
    region_id?: null | number
    country_id?: null | number
    full_name?: null | string
    is_regional_center?: boolean
    name?: null | string
    region_name?: null | string
    country_name?: null | string
    name_eng?: null | string
    region_name_eng?: null | string
    country_name_eng?: null | string
    country_code_name?: null | string
    time_zone?: number
    latitude?: null | number
    longitude?: null | number
  }
  export type Board = {
    color?: null | string
    id?: null | string
    name?: null | string
    original_name?: null | string
    view_only_own?: boolean
    available_for_contact?: boolean
  }
  export type CargosLots = {
    id?: string
    lot_number?: number
    cargo_application_ids?: null | Array<
      string
    >
    payment?: OneOf<null | 
      | Schemas.PaymentResponse
    >
    added_at?: Date
  }
  export type PaymentResponse = {
    type?: null | string
  }
  export type OrderFormView = {
    id?: null | string
    points?: Array<
      Schemas.OrderFormPoint
    >
    driver?: Schemas.DriverView3
    truck?: Schemas.TruckView3
    semitrailer?: Schemas.TruckView3
    trailer?: Schemas.TruckView3
    belt_count?: null | number
    adr?: null | number
    rate?: null | number
    currency?: null | number
    rate_type?: OneOf<null | 
      | Schemas.RateType
    >
    money_type?: null | number
    should_show_rate_to_driver?: null | boolean
    order_number?: null | string
    loading_types?: Array<
      string
    >
    unloading_types?: Array<
      string
    >
    files?: Array<
      Schemas.OrderFormDealFile
    >
  }
  export type OrderFormPoint = {
    id?: string
    city_id?: number
    region_id?: number
    country_id?: number
    lat?: null | number
    lon?: null | number
    address?: null | string
    type?: OneOf<
      | Schemas.DealPointTypes
    >
    time?: OneOf<null | 
      | Schemas.OrderFormPointTime
    >
    date?: OneOf<null | 
      | Schemas.OrderFormPointDate
    >
    note?: null | string
    contact_persons?: null | Array<
      Schemas.OrderFormContactPerson
    >
    cargos?: null | Array<
      Schemas.OrderFormCargo
    >
    organization_info?: OneOf<null | 
      | Schemas.OrganizationInfo
    >
  }
  export type OrderFormPointTime = {
    from?: null | string
    to?: null | string
    is_round_the_clock?: null | boolean
  }
  export type OrderFormPointDate = {
    from?: null | string
    to?: null | string
  }
  export type OrderFormContactPerson = {
    name?: null | string
    phone?: null | string
  }
  export type OrderFormCargo = {
    id?: number
    name_id?: number
    name?: null | string
    packaging_type?: null | number
    packaging_quantity?: null | number
    weight?: OneOf<null | 
      | Schemas.CargoWeight
    >
    volume?: null | number
    sizes?: OneOf<null | 
      | Schemas.OrderFormLoadSize
    >
  }
  export type OrderFormLoadSize = {
    length?: null | number
    width?: null | number
    height?: null | number
    diameter?: null | number
  }
  export type OrganizationInfo = {
    organization_id?: null | string
    address_id?: null | string
    contact_persons?: null | Array<
      Schemas.ContactPerson2
    >
    note?: null | string
    schedule?: null | string
    title?: null | string
  }
  export type OrderFormDealFile = {
    id?: null | string
    file_name?: null | string
    link?: null | string
    source_type?: Schemas.DealFileSourceTypes
    file_id?: null | string
  }
  export type ChangeAddressDto = {
    deal_id?: null | string
    changed?: boolean
    routes?: null | Array<
      Schemas.ChangeRouteDto
    >
  }
  export type ChangeRouteDto = {
    ordinal_id?: number
    deal_point_id?: null | string
    point_type?: OneOf<
      | Schemas.DealPointTypes
    >
    address?: null | string
    city_id?: null | number
    latitude?: null | number
    longitude?: null | number
    organization_id?: null | string
    address_id?: null | string
  }
  export type OrderIdWithType = {
    id?: string
    type?: Schemas.OrderIdTypes
  }
  export type OrderIdTypes = '0' | '1' | '2'
  export type OrdersInformationViewFrontend = {
    orders?: null | Array<
      Schemas.IOrderView
    >
    accounts?: null | Record<string, unknown>
    counters?: OneOf<null | 
      | Schemas.CountersView2
    >
    cities?: null | Record<string, unknown>
    comments?: null | Record<string, unknown>
  }
  export type IOrderView = {
    load?: OneOf<null | 
      | Schemas.LoadView3
    >
    deal?: OneOf<null | 
      | Schemas.DealView4
    >
    is_red?: boolean
  }
  export type AccountView2 = {
    firm_type?: null | string
    account_id?: null | string
    full_firm_name?: null | string
    firm_name?: null | string
    brand?: null | string
    ownership?: null | string
    ownership_id?: number
    passport?: OneOf<null | 
      | Schemas.PassportView2
    >
    contacts?: null | Array<
      Schemas.ContactView2
    >
    location?: OneOf<null | 
      | Schemas.FirmServiceCityView
    >
    contact_id?: null | number
    time_zone_minutes?: null | number
    ri_users_attributes?: number
    payed_services?: OneOf<null | 
      | Schemas.PayedServicesView
    >
    is_rrd?: boolean
    loads_access?: number
  }
  export type PassportView2 = {
    status?: OneOf<
      | Schemas.FirmStatus
    >
    total_score?: number
  }
  export type ContactView2 = {
    id?: number
    name?: null | string
    telephone?: null | string
    mobile?: null | string
    email?: null | string
    user_rights?: number
  }
  export type FirmServiceCityView = {
    city_name?: null | string
    short_name?: null | string
  }
  export type PayedServicesView = {
    end_date?: Date
    remaining_days?: number
    services?: null | Array<
      Schemas.PayedServiceView
    >
  }
  export type PayedServiceView = {
    service_id?: number
    service_amount?: null | number
    service_name?: null | string
  }
  export type CountersView2 = {
    in_progress?: OneOf<null | 
      | Schemas.OrderCounter
    >
    reconciliation?: OneOf<null | 
      | Schemas.OrderCounter
    >
    completed?: OneOf<null | 
      | Schemas.OrderCounter
    >
    payments?: OneOf<null | 
      | Schemas.OrderCounter
    >
    published?: OneOf<null | 
      | Schemas.OrderCounter
    >
    аrchive?: OneOf<null | 
      | Schemas.OrderCounter
    >
    lot_counters?: null | Record<string, unknown>
  }
  export type LotCounters = {
    loads_count?: number
    not_taken_count?: number
  }
  export type CityView2 = {
    id?: number
    rid?: null | number
    cid?: null | number
    name?: null | string
    isRegCenter?: boolean
    city?: null | string
    region?: null | string
    country?: null | string
    cityEng?: null | string
    regionEng?: null | string
    countryEng?: null | string
    code?: null | string
    timeZone?: number
  }
  export type FullOrdersInfoByIdsDto = AllOf<
    | Schemas.FullOrdersInfoDto
    | {
      ids?: null | Array<
        Schemas.OrderIdWithType
      >
    }
  >
  export type TakeLoadRequest = {
    RateType?: Schemas.RateType
    DriverId?: null | string
    TruckInfoId?: null | string
    SemitrailerId?: null | string
    TrailerId?: null | string
    RequisitesId?: string
    SignerId?: null | string
    IsDropDocs?: boolean
    TrackerOwnerAccess?: null | number
    DealKind?: OneOf<null | 
      | Schemas.DealKinds
    >
    FixedRateId?: null | string
    TakerNote?: null | string
  }
  export type DealAcceptFromLoadDtoInbox = AllOf<
    | Schemas.DealAcceptBaseDtoInbox
    | {
      point_ids?: null | Array<
        Schemas.DealPointDtoInbox
      >
    }
  >
  export type DealPointDtoInbox = {
    deal_point_id?: string
    participant_id?: string
    point_contact_id?: null | string
    stock_id?: null | string
  }
  export type DealAcceptBaseDtoInbox = {
    template_id?: null | string
    document_type?: null | string
    requisite_id?: string
    signer_id?: null | string
    contract_number?: null | string
    contract_start_date?: null | Date
  }
  export type CreateContractDtoInbox = {
    requisite_id?: string
    signer_id?: null | string
    document_type?: null | string
    template_id?: null | string
  }
  export type DeclineOrderDto = {
    reason?: null | string
    action?: OneOf<null | 
      | Schemas.FinishActionFrontend
    >
  }
  export type FinishActionFrontend = '0' | '1' | '2' | '3' | '4' | '5'
  export type PersonalInvitationDTO2 = {
    load_id?: string
    taker_ati_id?: string
    taker_contact_id?: null | number
    taker_contacts_list?: Array<
      number
    >
    cancel_after_in_minutes?: null | number
    cancellation_date?: null | Date
    payment?: Schemas.PersonalInvitationPaymentDTO2
    is_tracking?: null | boolean
  }
  export type PersonalInvitationPaymentDTO2 = {
    price?: null | number
    currency_id?: null | number
    nds_price?: null | number
    nds_currency_id?: null | number
    not_nds_price?: null | number
    not_nds_currency_id?: null | number
    prepay_percent_enabled?: boolean
    prepay_percent?: null | number
    on_unloading?: boolean
    max_bank_days?: null | number
    max_bank_days_enabled?: boolean
    payment_source?: OneOf<
      | Schemas.PaymentSource
    >
    source_id?: null | string
  }
  export type PersonalOfferInvitationDTO2 = {
    load_id?: string
    response_id?: string
    rate_types?: null | Array<
      Schemas.PriceType
    >
    cancel_after_in_minutes?: null | number
    is_auto?: boolean
  }
  export type LoadListInvitationsView = {
    personal_offers?: null | Record<string, unknown>
    accounts?: null | Record<string, unknown>
  }
  export type LoadPersonalInvitationView2 = {
    load_id?: string
    taker_ati_id?: null | string
    taker_contact_id?: number
    taker_contacts_list?: null | Array<
      number
    >
    cancellation_date?: null | Date
    deal_kind?: Schemas.DealKinds
    payment?: OneOf<null | 
      | Schemas.PersonalInvitationPayment
    >
    is_tracking?: boolean
  }
  export type PersonalInvitationPayment = {
    price?: null | number
    currency_id?: null | number
    nds_price?: null | number
    nds_currency_id?: null | number
    not_nds_price?: null | number
    not_nds_currency_id?: null | number
    prepay_percent?: null | number
    prepay_percent_enabled?: boolean
    on_unloading?: boolean
    max_bank_days?: null | number
    max_bank_days_enabled?: boolean
    payment_source?: Schemas.PaymentSource
    source_id?: null | string
  }
  export type InvitationSearchFilter = {
    role?: OneOf<
      | Schemas.OrderRole
    >
    load_ids?: null | Array<
      string
    >
  }
  export type FirmsDealMap = {
    phone_number?: null | string
    deals?: null | Array<
      Schemas.DealMapWithProgress
    >
  }
  export type DealMapWithProgress = {
    deal_id?: string
    goals?: null | unknown
    predicted_route?: null | unknown
    rotation_angle?: null | unknown
    traces?: null | Array<
      Schemas.RoutedTrace
    >
    progress_bar_percent?: number
    last_deal_status?: null | string
  }
  export type MapsFilterRequest = {
    zoom_square_request?: OneOf<null | 
      | Schemas.GeoSquare
    >
    role?: OneOf<null | 
      | Schemas.OrderRole
    >
    departments?: null | Array<
      number
    >
  }
  export type GeoSquare = {
    south_west?: OneOf<null | 
      | Schemas.GeoPair
    >
    north_east?: OneOf<null | 
      | Schemas.GeoPair
    >
    zoom?: number
  }
  export type GeoPair = {
    lat?: number
    lng?: number
  }
  export type DealIdsAndRoleRequestDto = {
    deal_ids?: null | Array<
      string
    >
    role?: Schemas.OrderRole
  }
  export type DocumentTemplateDto = {
    access?: Schemas.DealDocumentTemplateAccess
    deal_id?: string
    deal_point_id?: string
    cargoes_ids_hash?: number
    document_id?: string
    timeslots_warehouse_ids?: null | Array<
      number
    >
  }
}