/**
 *  ........................................
 *  . этот файл сгенерирован автоматически .
 *  ........................................
 */

/**
 * Схемы для сервиса `API Заказов`
 * @see {@link http://staging.orders-v1-0.service.consul:82/_internal/orders/swagger/index.html swagger}
 */
export namespace Schemas {

  export type ContractView = {
    contract_number?: string | null
    contract_start_date?: string | null
  }

  export type OrderContractorLimit = {
    firm_id?: number
    contractor_firm_id?: number
    limit_count?: Schemas.LimitCount | null
  }

  export type LimitCount = {
    limit?: number
    count?: number
    exceeded?: boolean
  }

  export type DealRoutedMap = {
    goals?: unknown | null
    predicted_route?: unknown | null
    rotation_angle?: unknown | null
    role?: Schemas.OrderRole | null
    traces?: Schemas.RoutedTrace[] | null
  }

  /**
   * @description Роль
   * 
   * * `0` — Грузовладелец
   * * `1` — Перевозчик
   *  
   * @names
   * * `CargoOwner` — 0
   * * `Carrier` — 1
   */
  export type OrderRole = 0 | 1

  export type RoutedTrace = {
    /**
     * @description Информация о траспортном средстве
     */
    car?: Schemas.RoutedCar | null
    first_action?: string | null
    last_action?: string | null
    gps_source?: Schemas.GpsSource | null
    points?: unknown | null
  }

  export type RoutedCar = {
    /**
     * @description Тип события
     *             
     * * `0` — Без происшествий
     * * `1` — GPS был выключен
     * * `2` — Попытка подделки GPS
     * * `3` — Не было данных
     * * `4` — Режим энергосбережения
     * * `5` — Стоянка
     */
    car_status?: Schemas.MapCarType
    /**
     * @description Телефон водителя
     */
    driver_phone?: string | null
    /**
     * @description Информация о перевозке
     */
    transportation_info?: Schemas.TransportationInfoForMap | null
  }

  /**
   * @names
   * * `Ok` — 0
   * * `GpsDisabled` — 1
   * * `GpsSpoof` — 2
   * * `NoData` — 3
   * * `PowerSaving` — 4
   * * `Parking` — 5
   */
  export type MapCarType = 0 | 1 | 2 | 3 | 4 | 5

  export type TransportationInfoForMap = {
    /**
     * @description Водитель
     */
    driver?: Schemas.DriverViewForMap | null
    /**
     * @description Транспортное средство
     */
    truck?: Schemas.TruckViewForMap | null
    /**
     * @description Груз
     */
    load?: Schemas.LoadViewForMap | null
  }

  export type DriverViewForMap = {
    phone?: string | null
    first_name?: string | null
    second_name?: string | null
    patronymic?: string | null
    messenger_token?: string | null
  }

  export type TruckViewForMap = {
    truck_model?: string | null
    trailer_model?: string | null
    semitrailer_model?: string | null
    truck_number?: string | null
    phone?: string | null
  }

  export type LoadViewForMap = {
    weight?: number
    volume?: number
    cargo_type_name?: string | null
    pack_type_name?: string | null
  }

  export type GpsSource = {
    type?: string | null
    device_name?: string | null
    device_id?: string | null
  }

  export type DealNotFoundException = Schemas.NotFoundException & {
    deal_id?: string
  }

  export type NotFoundException = Schemas.FinalException & Record<string, unknown>

  export type FinalException = Schemas.Exception & {
    error_code?: string | null
    http_error_code?: number
    reason?: string | null
  }

  export type Exception = {
    target_site?: Schemas.MethodBase | null
    has_been_thrown?: boolean
    serialization_watson_buckets?: unknown | null
    message?: string
    data?: unknown[]
    inner_exception?: Schemas.Exception | null
    help_link?: string | null
    source?: string | null
    h_result?: number
    stack_trace?: string | null
    serialization_stack_trace_string?: string | null
  }

  export type MethodBase = Schemas.MemberInfo & {
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

  /**
   * @names
   * * `PrivateScope` — 0
   * * `ReuseSlot` — 0
   * * `Private` — 1
   * * `FamANDAssem` — 2
   * * `Assembly` — 3
   * * `Family` — 4
   * * `FamORAssem` — 5
   * * `Public` — 6
   * * `MemberAccessMask` — 7
   * * `UnmanagedExport` — 8
   * * `Static` — 16
   * * `Final` — 32
   * * `Virtual` — 64
   * * `HideBySig` — 128
   * * `NewSlot` — 256
   * * `VtableLayoutMask` — 256
   * * `CheckAccessOnOverride` — 512
   * * `Abstract` — 1024
   * * `SpecialName` — 2048
   * * `RTSpecialName` — 4096
   * * `PinvokeImpl` — 8192
   * * `HasSecurity` — 16384
   * * `RequireSecObject` — 32768
   * * `ReservedMask` — 53248
   */
  export type MethodAttributes = 0 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 16 | 32 | 64 | 128 | 256 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384 | 32768 | 53248

  /**
   * @names
   * * `IL` — 0
   * * `Managed` — 0
   * * `Native` — 1
   * * `OPTIL` — 2
   * * `CodeTypeMask` — 3
   * * `Runtime` — 3
   * * `ManagedMask` — 4
   * * `Unmanaged` — 4
   * * `NoInlining` — 8
   * * `ForwardRef` — 16
   * * `Synchronized` — 32
   * * `NoOptimization` — 64
   * * `PreserveSig` — 128
   * * `AggressiveInlining` — 256
   * * `AggressiveOptimization` — 512
   * * `InternalCall` — 4096
   * * `MaxMethodImplVal` — 65535
   */
  export type MethodImplAttributes = 0 | 0 | 1 | 2 | 3 | 3 | 4 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 4096 | 65535

  /**
   * @names
   * * `Standard` — 1
   * * `VarArgs` — 2
   * * `Any` — 3
   * * `HasThis` — 32
   * * `ExplicitThis` — 64
   */
  export type CallingConventions = 1 | 2 | 3 | 32 | 64

  export type RuntimeMethodHandle = {
    value?: Schemas.IntPtr
  }

  export type IntPtr = {
    size?: number
    max_value?: Schemas.IntPtr
    min_value?: Schemas.IntPtr
    'system._numerics._i_additive_identity<nint,nint>._additive_identity'?: Schemas.IntPtr
    'system._numerics._i_binary_number<nint>._all_bits_set'?: Schemas.IntPtr
    'system._numerics._i_min_max_value<nint>._min_value'?: Schemas.IntPtr
    'system._numerics._i_min_max_value<nint>._max_value'?: Schemas.IntPtr
    'system._numerics._i_multiplicative_identity<nint,nint>._multiplicative_identity'?: Schemas.IntPtr
    'system._numerics._i_number_base<nint>._one'?: Schemas.IntPtr
    'system._numerics._i_number_base<nint>._radix'?: number
    'system._numerics._i_number_base<nint>._zero'?: Schemas.IntPtr
    'system._numerics._i_signed_number<nint>._negative_one'?: Schemas.IntPtr
  }

  export type MemberInfo = {
    member_type?: Schemas.MemberTypes
    name?: string
    declaring_type?: string | null
    reflected_type?: string | null
    module?: Schemas.Module
    custom_attributes?: Schemas.CustomAttributeData[]
    is_collectible?: boolean
    metadata_token?: number
  }

  /**
   * @names
   * * `Constructor` — 1
   * * `Event` — 2
   * * `Field` — 4
   * * `Method` — 8
   * * `Property` — 16
   * * `TypeInfo` — 32
   * * `Custom` — 64
   * * `NestedType` — 128
   * * `All` — 191
   */
  export type MemberTypes = 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 191

  export type Module = {
    assembly?: Schemas.Assembly
    fully_qualified_name?: string
    name?: string
    md_stream_version?: number
    module_version_id?: string
    scope_name?: string
    module_handle?: Schemas.ModuleHandle
    custom_attributes?: Schemas.CustomAttributeData[]
    metadata_token?: number
  }

  export type Assembly = {
    defined_types?: Schemas.TypeInfo[]
    exported_types?: string[]
    code_base?: string | null
    entry_point?: Schemas.MethodInfo | null
    full_name?: string | null
    image_runtime_version?: string
    is_dynamic?: boolean
    location?: string
    reflection_only?: boolean
    is_collectible?: boolean
    is_fully_trusted?: boolean
    custom_attributes?: Schemas.CustomAttributeData[]
    escaped_code_base?: string
    manifest_module?: Schemas.Module
    modules?: Schemas.Module[]
    global_assembly_cache?: boolean
    host_context?: number
    security_rule_set?: Schemas.SecurityRuleSet
  }

  export type TypeInfo = string & {
    generic_type_parameters?: string[]
    declared_constructors?: Schemas.ConstructorInfo[]
    declared_events?: Schemas.EventInfo[]
    declared_fields?: Schemas.FieldInfo[]
    declared_members?: Schemas.MemberInfo[]
    declared_methods?: Schemas.MethodInfo[]
    declared_nested_types?: Schemas.TypeInfo[]
    declared_properties?: Schemas.PropertyInfo[]
    implemented_interfaces?: string[]
  }

  export type ConstructorInfo = Schemas.MethodBase & {
    member_type?: Schemas.MemberTypes
  }

  export type EventInfo = Schemas.MemberInfo & {
    member_type?: Schemas.MemberTypes
    attributes?: Schemas.EventAttributes
    is_special_name?: boolean
    add_method?: Schemas.MethodInfo | null
    remove_method?: Schemas.MethodInfo | null
    raise_method?: Schemas.MethodInfo | null
    is_multicast?: boolean
    event_handler_type?: string | null
  }

  /**
   * @names
   * * `None` — 0
   * * `SpecialName` — 512
   * * `RTSpecialName` — 1024
   * * `ReservedMask` — 1024
   */
  export type EventAttributes = 0 | 512 | 1024 | 1024

  export type MethodInfo = Schemas.MethodBase & {
    member_type?: Schemas.MemberTypes
    return_parameter?: Schemas.ParameterInfo
    return_type?: string
    return_type_custom_attributes?: Schemas.ICustomAttributeProvider
    generic_parameter_count?: number
  }

  export type ParameterInfo = {
    attributes?: Schemas.ParameterAttributes
    member?: Schemas.MemberInfo
    name?: string | null
    parameter_type?: string
    position?: number
    is_in?: boolean
    is_lcid?: boolean
    is_optional?: boolean
    is_out?: boolean
    is_retval?: boolean
    default_value?: unknown | null
    raw_default_value?: unknown | null
    has_default_value?: boolean
    custom_attributes?: Schemas.CustomAttributeData[]
    metadata_token?: number
  }

  /**
   * @names
   * * `None` — 0
   * * `In` — 1
   * * `Out` — 2
   * * `Lcid` — 4
   * * `Retval` — 8
   * * `Optional` — 16
   * * `HasDefault` — 4096
   * * `HasFieldMarshal` — 8192
   * * `Reserved3` — 16384
   * * `Reserved4` — 32768
   * * `ReservedMask` — 61440
   */
  export type ParameterAttributes = 0 | 1 | 2 | 4 | 8 | 16 | 4096 | 8192 | 16384 | 32768 | 61440

  export type CustomAttributeData = {
    attribute_type?: string
    constructor?: Schemas.ConstructorInfo
    constructor_arguments?: Schemas.CustomAttributeTypedArgument[]
    named_arguments?: Schemas.CustomAttributeNamedArgument[]
  }

  export type CustomAttributeTypedArgument = {
    argument_type?: string
    value?: unknown | null
  }

  export type CustomAttributeNamedArgument = {
    argument_type?: string
    member_info?: Schemas.MemberInfo
    typed_value?: Schemas.CustomAttributeTypedArgument
    member_name?: string
    is_field?: boolean
  }

  export type ICustomAttributeProvider = Record<string, unknown>

  export type FieldInfo = Schemas.MemberInfo & {
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

  /**
   * @names
   * * `PrivateScope` — 0
   * * `Private` — 1
   * * `FamANDAssem` — 2
   * * `Assembly` — 3
   * * `Family` — 4
   * * `FamORAssem` — 5
   * * `Public` — 6
   * * `FieldAccessMask` — 7
   * * `Static` — 16
   * * `InitOnly` — 32
   * * `Literal` — 64
   * * `NotSerialized` — 128
   * * `HasFieldRVA` — 256
   * * `SpecialName` — 512
   * * `RTSpecialName` — 1024
   * * `HasFieldMarshal` — 4096
   * * `PinvokeImpl` — 8192
   * * `HasDefault` — 32768
   * * `ReservedMask` — 38144
   */
  export type FieldAttributes = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 4096 | 8192 | 32768 | 38144

  export type RuntimeFieldHandle = {
    value?: Schemas.IntPtr
  }

  export type PropertyInfo = Schemas.MemberInfo & {
    member_type?: Schemas.MemberTypes
    property_type?: string
    attributes?: Schemas.PropertyAttributes
    is_special_name?: boolean
    can_read?: boolean
    can_write?: boolean
    get_method?: Schemas.MethodInfo | null
    set_method?: Schemas.MethodInfo | null
  }

  /**
   * @names
   * * `None` — 0
   * * `SpecialName` — 512
   * * `RTSpecialName` — 1024
   * * `HasDefault` — 4096
   * * `Reserved2` — 8192
   * * `Reserved3` — 16384
   * * `Reserved4` — 32768
   * * `ReservedMask` — 62464
   */
  export type PropertyAttributes = 0 | 512 | 1024 | 4096 | 8192 | 16384 | 32768 | 62464

  /**
   * @names
   * * `None` — 0
   * * `Level1` — 1
   * * `Level2` — 2
   */
  export type SecurityRuleSet = 0 | 1 | 2

  export type ModuleHandle = {
    md_stream_version?: number
  }

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModelOfFileAccessDeniedException = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModelOfFileNotFoundException = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  export type DealDocumentAccessDto = {
    /**
     * @description Доступ к документу
     */
    access?: Schemas.DealDocumentAccess
    /**
     * @description Список складов с Временными окнами с доступом к документу
     */
    timeslots_warehouse_ids?: number[] | null
  }

  /**
   * @description Доступ к документу
   *             
   * * `0` — Обе стороны
   * * `1` — Водитель
   *  
   * @names
   * * `SharedWithCounterparty` — 0
   * * `SharedWithAtiTrucker` — 1
   */
  export type DealDocumentAccess = 0 | 1

  /**
   * @description Файлы заказа
   */
  export type DealFileView = {
    /**
     * @description Id файла
     */
    id?: string
    /**
     * @description Id файла в хранилище
     */
    storage_file_id?: string | null
    /**
     * @description Доступ к файлу
     *             
     * * `0` — только загрузивший файл
     * * `1` — обе стороны
     * * `2` — загрузивший файл и водитель
     * * `3` — доступен обеим сторонам и водителю
     */
    access?: Schemas.DealFileAccess
    /**
     * @description Время загрузки файла
     */
    add_date?: string
    /**
     * @description Id связанного Заказа
     */
    deal_id?: string
    /**
     * @description Файл контрагента
     */
    is_counterparty_file?: boolean
    /**
     * @description Имя файла
     */
    file_name?: string | null
    /**
     * @description Размер файла
     */
    size?: number
    /**
     * @description Ссылка на файл
     */
    link?: string | null
    /**
     * @description ID файла
     */
    file_id?: string | null
    /**
     * @description Источник файла
     *             
     * * `0` — Загружен в заказ
     * * `1` — Скопирован из груза
     * * `2` — Скопирован из данных о водителе
     * * `3` — Скопироване из данных о грузовике
     * * `4` — Скопирован из данных о прицепе
     * * `5` — Скопирован из данных о полуприцепе
     * * `6` — Скопирован из данных о тягаче
     * * `7` — Загружен для Ати-водителя
     */
    source_type?: Schemas.DealFileSourceTypes
    /**
     * @description Тип загруженного файла
     *             
     * * `0` — Обычный файл
     * * `1` — Водительское удостоверение
     * * `2` — Паспорт водителя
     * * `3` — Техпаспорт ТС
     * * `4` — Пластик
     * * `5` — Фото ТС
     */
    source_file_type?: Schemas.DealFileSourceFileTypes
    /**
     * @description Тип файла
     *             
     * * `0` — Другой документ
     * * `1` — Товарно-транспортная накладная
     * * `2` — Товарная накладная
     * * `3` — Транспортная накладная
     * * `4` — Накладная
     * * `5` — Счет-фактура
     * * `6` — Счет на оплату
     * * `7` — Платежное поручение
     * * `8` — Акт выполненных работ
     * * `9` — Заявка
     * * `10` — Заявка (к договору)
     * * `11` — Заказ
     * * `12` — Договор
     * * `13` — Доп. соглашение (к договору)
     * * `14` — Доверенность
     * * `15` — Поручение экспедитору
     * * `16` — Информационное письмо
     * * `17` — Документ о происшествии с грузом/ТС
     */
    file_type?: Schemas.DealFileType
    /**
     * @description Список складов с Временными окнами с доступом  к файлу
     */
    timeslots_warehouse_ids?: number[] | null
  }

  /**
   * @description Доступ к файлу
   *             
   * * `0` — только загрузивший файл
   * * `1` — обе стороны
   * * `2` — загрузивший файл и водитель
   * * `3` — доступен обеим сторонам и водителю
   *  
   * @names
   * * `OnlyYou` — 0
   * * `SharedWithCounterparty` — 1
   * * `SharedWithAtiTrucker` — 2
   * * `SharedWithAtiTruckerAndCounterparty` — 3
   */
  export type DealFileAccess = 0 | 1 | 2 | 3

  /**
   * @description Источник файла
   *             
   * * `0` — Загружен в заказ
   * * `1` — Скопирован из груза
   * * `2` — Скопирован из данных о водителе
   * * `3` — Скопироване из данных о грузовике
   * * `4` — Скопирован из данных о прицепе
   * * `5` — Скопирован из данных о полуприцепе
   * * `6` — Скопирован из данных о тягаче
   * * `7` — Загружен для Ати-водителя
   * * `8` — Загружен из приложения АТИ-водитель
   *  
   * @names
   * * `SimpleLoader` — 0
   * * `Load` — 1
   * * `Driver` — 2
   * * `Truck` — 3
   * * `Trailer` — 4
   * * `SemiTrailer` — 5
   * * `Tractor` — 6
   * * `AtiTruckerPopupLoader` — 7
   * * `FromAtiDriver` — 8
   */
  export type DealFileSourceTypes = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

  /**
   * @description Тип загруженного файла
   *             
   * * `0` — Обычный файл
   * * `1` — Скан водительского удостоверения
   * * `2` — Скан гражданского паспорта водителя
   * * `3` — Скан ПТС
   * * `4` — Скан пластикового ПТС
   * * `5` — Фото ТС
   * * `8` - Скан договора о безвоздмездном пользовании
   *  
   * @names
   * * `None` — 0
   * * `DriverLicense` — 1
   * * `DriverPassport` — 2
   * * `TruckTechPassport` — 3
   * * `TruckPlasticTechPassport` — 4
   * * `TruckPhoto` — 5
   * * `FreeUse` — 8
   */
  export type DealFileSourceFileTypes = 0 | 1 | 2 | 3 | 4 | 5 | 8

  /**
   * @description Тип файла
   *             
   * * `0` — Другой документ
   * * `1` — Товарно-транспортная накладная
   * * `2` — Товарная накладная
   * * `3` — Транспортная накладная
   * * `4` — Накладная
   * * `5` — Счет-фактура
   * * `6` — Счет на оплату
   * * `7` — Платежное поручение
   * * `8` — Акт выполненных работ
   * * `9` — Заявка
   * * `10` — Заявка к договору
   * * `11` — Заказ
   * * `12` — Договор
   * * `13` — Доп. соглашение к договору
   * * `14` — Доверенность
   * * `15` — Поручение экспедитору
   * * `16` — Информационное письмо
   * * `17` — Документ о происшествии с грузом/ТС
   *  
   * @names
   * * `OtherDoc` — 0
   * * `ConsignmentNote` — 1
   * * `PackingList` — 2
   * * `WayBill` — 3
   * * `WayBillGeneral` — 4
   * * `Invoice` — 5
   * * `InvoiceForPayment` — 6
   * * `PaymentOrder` — 7
   * * `CertificateOfCompletion` — 8
   * * `Request` — 9
   * * `RequestForOrder` — 10
   * * `Order` — 11
   * * `Contract` — 12
   * * `SupplementaryAgreement` — 13
   * * `Dealership` — 14
   * * `Assignment` — 15
   * * `InfoLetter` — 16
   * * `AccidentAct` — 17
   */
  export type DealFileType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModelOfFileWrongException = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModelOfDealAccessDeniedException = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModelOfDealNotFoundException = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModelOfFinalException = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  export type DealFileAccessDto = {
    /**
     * @description Доступ к файлу
     */
    access?: Schemas.DealFileAccess
    /**
     * @description Список складов с Временными окнами с доступом к файлу
     */
    timeslots_warehouse_ids?: number[] | null
  }

  export type DealFilesAndDocumentsView = {
    files?: Schemas.DealFileView[] | null
    documents?: Schemas.DocumentInfoView[] | null
    document_templates?: Schemas.DocumentTemplatesView[] | null
  }

  export type DocumentInfoView = {
    /**
     * @description Id документа
     */
    id?: string | null
    /**
     * @description Id нового документа
     */
    old_id?: string | null
    /**
     * @description Фирма, отредактировавшая документ
     */
    editor?: string | null
    /**
     * @description Адрес просмотра договора
     */
    url?: string | null
    /**
     * @description Адрес просмотра старого договора
     */
    old_url?: string | null
    /**
     * @description Имя документа
     */
    name?: string | null
    /**
     * @description Причина отклонения документа
     */
    reason?: string | null
    /**
     * @description Отклонивший документ
     */
    actor?: Schemas.SimpleUser | null
    /**
     * @description Документ подписан перевозчиком
     */
    is_signed?: boolean
    /**
     * @description Тип документа
     */
    document_type?: Schemas.DocumentType
    is_from_file?: boolean
    /**
     * @description Доступ к документу
     */
    access?: Schemas.DealDocumentAccess
    /**
     * @description Список складов с Временными окнами с доступом к документу
     */
    timeslots_warehouse_ids?: number[] | null
  }

  export type SimpleUser = {
    firm_id?: number
    contact_id?: number
  }

  /**
   * @description Тип документа
   *             
   * * `0` — Нет
   * * `1` — Заказ
   * * `2` — Договор-заявка
   * * `3` — Поручение экспедитору
   * * `4` — Акт
   * * `5` — Счет
   * * `6` — Одностороннее расторжение
   * * `7` — Доверенность
   * * `8` — Табличный заказ
   * * `9` — Заявка к договору (табличный вид)
   *  
   * @names
   * * `None` — 0
   * * `Order` — 1
   * * `Application` — 2
   * * `ForwarderInstruction` — 3
   * * `Act` — 4
   * * `Invoice` — 5
   * * `UnilateralDissolution` — 6
   * * `PowerOfAttorney` — 7
   * * `TableOrder` — 8
   * * `TableApplication` — 9
   */
  export type DocumentType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

  export type DocumentTemplatesView = {
    /**
     * @description Название организации
     */
    organization_name?: string | null
    /**
     * @description Форма собственности
     */
    ownership?: string | null
    /**
     * @description Адрес организации
     */
    organization_address?: string | null
    /**
     * @description Шаблоны документов
     */
    templates?: Schemas.DocumentTemplateView[] | null
  }

  export type DocumentTemplateView = {
    /**
     * @description Время загрузки документа
     */
    add_date?: string
    /**
     * @description Доступ к документу
     *             
     * * `0` — только загрузивший документ
     * * `1` — обе стороны
     */
    access?: Schemas.DealDocumentTemplateAccess
    /**
     * @description Список складов с Временными окнами с доступом к документу
     */
    timeslots_warehouse_ids?: number[] | null
    /**
     * @description Id связанного Заказа
     */
    deal_id?: string
    /**
     * @description Id точки в заказе, к которой привязан документ
     */
    deal_point_id?: string
    /**
     * @description Id фирмы, загрузившей документ
     */
    owner_firm_id?: number
    /**
     * @description Поле-хэш, рассчитывается на основе id грузов, выгружаемых в точке DealPointId. Если выгружаемые грузы не указаны - будет равно 0
     */
    cargoes_ids_hash?: number
    /**
     * @description Id контакта
     */
    contact_id?: number
    /**
     * @description Название документа
     */
    file_name?: string | null
    /**
     * @description Id файла документа
     * Можно скачать файл с помощью метода(https://ati.su/developers/api/filestorage/#get-v1.0-filestorage-files-%7bfile_id%7d-)
     */
    file_id?: string | null
    /**
     * @description Id документа
     */
    id?: string
    /**
     * @description Размер документа
     */
    size?: number
    /**
     * @description Ссылка на документ (только для сайта)
     */
    link?: string | null
  }

  /**
   * @description Доступ к файлу
   *             
   * * `0` — только загрузивший файл
   * * `1` — обе стороны
   *  
   * @names
   * * `OnlyYou` — 0
   * * `SharedWithCounterparty` — 1
   */
  export type DealDocumentTemplateAccess = 0 | 1

  export type OrdersInformationView = {
    /**
     * @description Список заказов
     */
    orders?: Schemas.DealOrderView[] | null
    /**
     * @description Список персональных приглашений
     */
    personal_invites?: Schemas.PersonalInvitationOrderView[] | null
    /**
     * @description Список аукционов с возможным победителем без действующего победителя
     */
    auctions_without_winners?: Schemas.AuctionWithPossibleWinnersOrderView[] | null
    /**
     * @description Список аккаунтов, которые фигурируют в заказах
     */
    accounts?: (Record<string, unknown> & Record<string, Schemas.AccountView>) | null
    /**
     * @description Счетчики для вкладок "В исполнении", "Архив", "Согласование", "ДО и Оплата"
     */
    counters?: Schemas.CountersView | null
    /**
     * @description Список городов, фигурирующих в заказах
     */
    cities?: (Record<string, unknown> & Record<string, Schemas.CityView>) | null
    /**
     * @description Список комментариев 
     */
    comments?: (Record<string, unknown> & Record<string, Schemas.Comment[]>) | null
  }

  export type DealOrderView = {
    /**
     * @description Копия груза
     */
    load?: Schemas.LoadView | null
    /**
     * @description Описание параметров заказа
     */
    deal?: Schemas.DealView | null
    /**
     * @description Отмечен ли заказ красной точкой (признак того, что требуется действие)
     */
    is_red?: boolean
    /**
     * @description Пользовательские настройки
     */
    custom_settings?: (Record<string, unknown> & Record<string, Schemas.CustomSetting>) | null
  }

  export type LoadView = {
    /**
     * @description Id копии груза
     */
    id?: string
    /**
     * @description Сгенерированный номер груза
     */
    load_number?: string | null
    /**
     * @description Id исходного груза
     */
    parent_id?: string | null
    firm_id?: string | null
    /**
     * @description Id первого контакта груза
     */
    contact_id1?: number
    /**
     * @description Id второго контакта груза
     */
    contact_id2?: number | null
    /**
     * @description Id подразделения груза
     */
    department_id?: number | null
    /**
     * @description Id фирмы, которой принадлежит груз
     */
    ati_id?: string | null
    /**
     * @description Дата и время последнего обновления груза
     */
    updated_at?: string
    /**
     * @description Дата добавления груза
     */
    added_at?: string
    /**
     * @description Расстояние
     */
    distance?: number
    distance_type?: number
    /**
     * @description Минимальный тариф страхования
     */
    insured_min_tariff?: number
    /**
     * @description Примечание к грузу
     */
    note?: string | null
    date_type?: Schemas.DateType
    periodicity_id?: Schemas.Periodicity
    /**
     * @description Номер заказа
     */
    order_number?: string | null
    /**
     * @description Включен ли кругорейс
     */
    krugoreis?: boolean
    /**
     * @description Описание параметров загрузки
     */
    loading?: Schemas.LoadPointViewForOrder | null
    /**
     * @description Описание дополнительных точек маршрута
     */
    extra_points?: Schemas.LoadExtraPoint[] | null
    /**
     * @description Описание параметров разгрузки
     */
    unloading?: Schemas.LoadPointViewForOrder | null
    /**
     * @description Описание габаритов груза
     */
    cargo?: Schemas.LoadCargo | null
    /**
     * @description Описание параметров желаемого транспорта
     */
    transport?: Schemas.LoadTransport | null
    /**
     * @description Параметры площадок груза
     */
    boards?: string[] | null
    /**
     * @description Параметры Торгов
     */
    auction?: Schemas.AuctionView | null
    /**
     * @description Параметры маршрута
     */
    route?: Schemas.RouteInfoView | null
    /**
     * @description Источник публикации груза
     */
    cargo_source?: string | null
  }

  /**
   * @description Готовность груза к перевозке
   *             
   * * `0` — Готов к отправке сегодня или завтра
   * * `1` — Готов к отправке между FirstDate и LastDate
   * * `2` — Готов к отправке постоянно
   * * `3` — Груза нет, запрос ставки
   *  
   * @names
   * * `ReadyToLoading` — 0
   * * `BetweenTwoDates` — 1
   * * `AlwaysReady` — 2
   * * `MissingLoad` — 3
   */
  export type DateType = 0 | 1 | 2 | 3

  /**
   * @description Периодичность загрузки
   *             
   * * `0` — Нет
   * * `1` — Ежедневно
   * * `100` — Только по рабочим дням
   *  
   * @names
   * * `None` — 0
   * * `EveryDay` — 1
   * * `OnlyWorkingDays` — 100
   */
  export type Periodicity = 0 | 1 | 100

  export type LoadPointViewForOrder = {
    /**
     * @description Id города\
     * Значение из [словаря городов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    city_id?: number
    /**
     * @description Широта
     */
    latitude?: number | null
    /**
     * @description Долгота
     */
    longitude?: number | null
    /**
     * @description Улица
     */
    street?: string | null
    /**
     * @description Id из справочника организаций
     */
    organization_id?: string | null
    /**
     * @description Id адреса в организации
     */
    address_id?: string | null
    /**
     * @description Время начала загрузки
     */
    time_start?: string | null
    /**
     * @description Время конца загрузки
     */
    time_end?: string | null
    /**
     * @description Дата, с которой возможна загрузка / разгрузка
     */
    first_date?: string | null
    /**
     * @description Дата, с которой загрузка заканчивается / до которой можно разгрузить груз
     */
    last_date?: string | null
    /**
     * @description Загрузка происходит круглосуточно
     */
    is_round_the_clock?: boolean
    /**
     * @description Id ближайших крупных городов
     */
    large_cities_ids?: number[] | null
    /**
     * @description Сборные грузы для загрузки
     */
    loading_cargos?: Schemas.LoadingCargo[] | null
  }

  export type LoadingCargo = {
    /**
     * @description Id груза
     */
    cargo_id?: number
    /**
     * @description Наименование груза
     */
    name_id?: number
    name?: string | null
    /**
     * @description Упаковка
     */
    packaging_type?: number | null
    packaging_quantity?: number | null
    weight?: number | null
    /**
     * @description Объем
     */
    volume?: number | null
    /**
     * @description Габариты
     */
    sizes?: Schemas.LoadSize | null
    packaging_type_name?: string | null
  }

  /**
   * @description Размеры груза
   */
  export type LoadSize = {
    /**
     * @description Длина в метрах
     */
    length?: number | null
    /**
     * @description Ширина в метрах
     */
    width?: number | null
    /**
     * @description Высота в метрах
     */
    height?: number | null
    /**
     * @description Диаметр в метрах
     */
    diameter?: number | null
    /**
     * @description Подсвечивать ли длину
     */
    length_highlight?: boolean
    /**
     * @description Подсвечивать ли ширину
     */
    width_highlight?: boolean
    /**
     * @description Подсвечивать ли высоту
     */
    height_highlight?: boolean
  }

  export type LoadExtraPoint = {
    route_point_id?: string
    id?: string
    /**
     * @description Id города\
     * Значение из [словаря городов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    city_id?: number
    point_type?: Schemas.LoadExtraPointType
    /**
     * @description Порядковый номер в маршруте
     */
    ordinal_id?: number
    /**
     * @description Расстояние
     */
    distance?: number
    /**
     * @description Адрес
     */
    street?: string | null
    /**
     * @description Широта
     */
    latitude?: number | null
    /**
     * @description Долгота
     */
    longitude?: number | null
    /**
     * @description Id из справочника организаций
     */
    organization_id?: string | null
    /**
     * @description Id адреса в организации
     */
    address_id?: string | null
    /**
     * @description Дата начала  загрузки
     */
    loading_date_start?: string | null
    /**
     * @description Дата конца загрузки
     */
    loading_date_end?: string | null
    /**
     * @description Время начала загрузки
     */
    loading_time_start?: string | null
    /**
     * @description Время конца загрузки
     */
    loading_time_end?: string | null
    /**
     * @description Круглосуточно
     */
    is_round_the_clock?: boolean
    city_name?: string | null
    loading_cargos?: Schemas.LoadingCargo[] | null
    unloading_cargos?: Schemas.UnloadingCargo[] | null
    organization?: Schemas.Organization | null
  }

  /**
   * @description Тип дополнительной точки маршрута груза
   *             
   * * `1` — Загрузка
   * * `2` — Разгрузка
   * * `3` — Таможня
   * * `4` — Ближайший крупный город к городу загрузки
   * * `5` — Ближайший крупный город к городу разгрузки
   * * `8` — Проехать через
   *  
   * @names
   * * `LoadingExtraPoint` — 1
   * * `UnloadingExtraPoint` — 2
   * * `CustomExtraPoint` — 3
   * * `LoadingLargeCity` — 4
   * * `UnloadingLargeCity` — 5
   * * `DriverThrough` — 8
   */
  export type LoadExtraPointType = 1 | 2 | 3 | 4 | 5 | 8

  export type UnloadingCargo = {
    /**
     * @description Id груза
     */
    cargo_id?: number
    /**
     * @description Вес
     */
    weight?: number | null
    /**
     * @description Объём
     */
    volume?: number | null
    /**
     * @description Выгружаемая часть упаковки
     */
    packaging_quantity?: number | null
    /**
     * @description Выгружаемая часть груза будет определена в ТТН
     */
    is_defined_by_ttn?: boolean
  }

  export type Organization = {
    organization_id?: string
    firm_id?: number
    name?: string | null
    ownership?: number
    residency?: Schemas.Residency | null
    inn?: string | null
    phone?: string | null
    extra_phone?: number | null
    docs_address?: Schemas.OrganizationDocsAddress | null
    stocks?: Schemas.Stock[] | null
    contact_persons?: Schemas.ContactPerson[] | null
    ownership_name?: string | null
  }

  /**
   * @names
   * * `Russia` — 1
   * * `Ukraine` — 2
   * * `Belarus` — 3
   * * `Kazakhstan` — 10
   * * `International` — 200
   */
  export type Residency = 1 | 2 | 3 | 10 | 200

  export type OrganizationDocsAddress = {
    postcode?: string | null
    city_id?: number | null
    street_name?: string | null
    house_no?: string | null
    office_no?: string | null
  }

  export type Stock = {
    stock_id?: string
    address?: string | null
    address_city_id?: number
    address_latitude?: number
    address_longitude?: number
    note?: string | null
    work_schedules?: Schemas.StockSchedule[] | null
    breaks_schedules?: Schemas.StockSchedule[] | null
    contact_persons?: Schemas.ContactPerson[] | null
    schedule_summary?: string | null
    stock_type?: Schemas.StockType
    timeslots_binding?: Schemas.TimeslotsBinding | null
  }

  export type StockSchedule = {
    stock_schedule_id?: string
    day_of_week?: Schemas.DayOfWeek
    start_time?: string
    end_time?: string
  }

  /**
   * @names
   * * `Sunday` — 0
   * * `Monday` — 1
   * * `Tuesday` — 2
   * * `Wednesday` — 3
   * * `Thursday` — 4
   * * `Friday` — 5
   * * `Saturday` — 6
   */
  export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6

  export type ContactPerson = {
    contact_person_id?: string
    name?: string | null
    phone?: string | null
    email?: string | null
  }

  /**
   * @names
   * * `Stock` — 1
   * * `Office` — 2
   * * `Store` — 3
   */
  export type StockType = 1 | 2 | 3

  export type TimeslotsBinding = {
    warehouse_id?: number
    status?: Schemas.TimeslotsBindingStatus
  }

  /**
   * @names
   * * `AwaitReaction` — 0
   * * `Accepted` — 1
   * * `Revoked` — 2
   * * `Rejected` — 3
   */
  export type TimeslotsBindingStatus = 0 | 1 | 2 | 3

  /**
   * @description Параметры груза
   */
  export type LoadCargo = {
    /**
     * @description Вес
     */
    weight?: number
    /**
     * @description Объем
     */
    volume?: number
    /**
     * @description Модификатор опасности груза с 0 до 9
     */
    adr?: number
    /**
     * @description Идентификатор наименования груза\
     * Значение из [словаря наименований грузов](https://ati.su/developers/api/dictionaries/cargoes/#get-v1.0-dictionaries-cargoTypes)
     */
    cargo_type_id?: number
    /**
     * @description Строковое наименование груза. Выводится если CargoTypeId не указан, либо равен `59`
     */
    cargo_type?: string | null
    /**
     * @description Тип упаковки(навалом, коробки, россыпью, запаллечен ... пирамида). Значение из словаря PackTypes
     */
    pack_type?: number
    /**
     * @description Количество паллетов
     */
    pallet_count?: number
    /**
     * @description Количество ремней
     */
    belt_count?: number
    dogruz_type?: Schemas.DogruzType
    /**
     * @description Сборный груз
     */
    sbor_gruz?: boolean
    /**
     * @description Размеры груза
     */
    size?: Schemas.LoadSize | null
  }

  /**
   * @description Параметр, отвечающий за способ перевозки груза
   *             
   * * `1` — Только отдельной машиной
   * * `2` — Догруз возможен
   * * `3` — Догруз
   *  
   * @names
   * * `OnlyToSeparateCar` — 1
   * * `DogruzPossible` — 2
   * * `Dogruz` — 3
   */
  export type DogruzType = 1 | 2 | 3

  /**
   * @description Параметры перевозки
   */
  export type LoadTransport = {
    /**
     * @description Битовая сумма кузовов
     */
    car_type?: number
    car_type_string?: string | null
    /**
     * @description Битовая сумма типов загрузки
     */
    loading_type?: number
    /**
     * @description Тип условия загрузки
     * 
     * * `OR`
     * * `AND`
     */
    loading_logical_operator?: string | null
    /**
     * @description Битовая сумма типов разгрузки
     */
    unloading_type?: number
    /**
     * @description Тип условия разгрузки
     *             
     * * `OR`
     * * `AND`
     */
    unloading_logical_operator?: string | null
    /**
     * @description Количество машин
     */
    trucks_quantity?: number
    /**
     * @description Температура перевозки - нижнее значение
     */
    temperature_from?: number | null
    /**
     * @description Температура перевозки - верхнее значение
     */
    temperature_to?: number | null
    /**
     * @description Настройки для машины, используются только в RMQ (Stsepka, Pnevmohod, Koniki)
     */
    truck_attribs?: number | null
    /**
     * @description Сцепка
     */
    stsepka?: boolean
    /**
     * @description Пневмоход
     */
    pnevmohod?: boolean
    /**
     * @description Коники
     */
    koniki?: boolean
    /**
     * @description TIR
     */
    tir?: boolean
    /**
     * @description CMR
     */
    cmr?: boolean
    /**
     * @description Т1
     */
    t1?: boolean
    /**
     * @description Мед книжка
     */
    san_passport?: boolean
    /**
     * @description Запрос отслеживания через АТИ Водитель
     */
    is_tracking?: boolean
    /**
     * @description Требуемая грузоподъёмность в тоннах
     */
    required_capacity?: number | null
  }

  export type AuctionView = {
    /**
     * @description Id аукциона
     */
    auction_id?: string
    /**
     * @description Завершен ли аукцион
     */
    finished?: boolean
    /**
     * @description Время завершения аукциона
     *  
     */
    win_date?: string | null
    /**
     * @description Оставшееся время в течении которого нужно отправить документы, в милисекундах
     */
    milliseconds_left_to_provide_documents?: number | null
    finish_type?: Schemas.AuctionFinishType
  }

  /**
   * @description Тип завершения Торгов (аукциона)
   * 
   * * `0` — Обычное завершение
   * * `1` — Завершение при выставлении минимальной ставки
   * * `2` — Досрочное завершение
   *  
   * @names
   * * `Normal` — 0
   * * `ByMinimalRate` — 1
   * * `Force` — 2
   */
  export type AuctionFinishType = 0 | 1 | 2

  export type RouteInfoView = {
    country?: string | null
    distance?: number
    distance_type?: number
  }

  export type DealView = {
    /**
     * @description Id копии груза
     */
    deal_load_id?: string
    /**
     * @description Id аккаунта фирмы грузоперевозчика
     */
    taker_ati_id?: string | null
    /**
     * @description Id контакта грузоперевозчика
     */
    taker_contact_id?: number
    /**
     * @description Id подразделения грузоперевозчика
     */
    taker_department_id?: number | null
    /**
     * @description Id подразделения грузовладельца
     */
    department_id?: number | null
    /**
     * @description Тип ставки
     */
    rate_type?: Schemas.RateType
    /**
     * @description Дата последнего обновления статуса заказа
     */
    updated_at?: string
    /**
     * @description Дата начала заказа
     */
    started_at?: string | null
    /**
     * @description Дата окончания заказа
     */
    finished_at?: string | null
    status?: Schemas.DealState
    deal_kind?: Schemas.DealKinds
    /**
     * @description Причина отмены заказа
     */
    denial_reason?: string | null
    /**
     * @description Причина отклонения документа
     */
    denial_document_reason?: string | null
    /**
     * @description Просмотрена ли заявка
     */
    is_viewed?: boolean
    /**
     * @description Примечание к Заказу
     */
    deal_note?: string | null
    /**
     * @description Id заказа
     */
    deal_id?: string
    /**
     * @description Id груза, по которому был создан заказ
     */
    load_id?: string
    /**
     * @description Id подписанта
     */
    signer_id?: string | null
    /**
     * @description Параметры водителя в заказе
     */
    driver?: Schemas.DriverView | null
    /**
     * @description Параметры тягача в заказе
     */
    truck?: Schemas.TruckView | null
    /**
     * @description Параметры прицепа в заказе
     */
    trailer?: Schemas.TruckView | null
    /**
     * @description Параметры полуприцепа в заказе
     */
    semi_trailer?: Schemas.TruckView | null
    /**
     * @description Информация о заявке в АТИ Доках
     */
    document_info?: Schemas.DocumentInfoView2 | null
    /**
     * @description Ставка
     */
    rate?: number
    /**
     * @description Id валюты
     */
    currency?: number
    /**
     * @description Id типа ставки (любая, на карту, нал)
     */
    money_type?: number
    /**
     * @description Информация о дополнительных документах в заказах
     */
    documents?: Schemas.DocumentInfoView2[] | null
    /**
     * @description Информация о файлах в заказах
     */
    files?: Schemas.DealFileView[] | null
    /**
     * @description Информация о шаблонах документов в заказах
     */
    document_templates?: Schemas.DocumentTemplatesView[] | null
    /**
     * @description Статусная модель перевозки
     *             
     * * `0` — Простая перевозка
     * * `1` — Первая миля
     * * `2` — Последняя миля
     * * `3` — Порожний контейнер
     */
    in_work_status_model?: Schemas.InWorkStatusModel
    /**
     * @description Информация о подстатусе заказа в исполнении
     */
    in_work?: Schemas.DealInWorkView | null
    /**
     * @description Данные по трекеру для текущего водителя
     */
    data_for_driver?: Schemas.DataForDriverView | null
    points?: Schemas.DealPointView[] | null
    /**
     * @description Информация об оплате
     */
    payment?: Schemas.DealPaymentView | null
    /**
     * @description Информация об оплате Заказа контрагентом
     */
    pay_docs?: Schemas.PayDocsView | null
    /**
     * @description Реквизиты перевозчика
     */
    taker_requisites?: Schemas.RequisiteView | null
    /**
     * @description Время до которого груз зарезервирован
     */
    millis_until_end_of_reservation?: number | null
    /**
     * @description Id связанных Торгов
     */
    auction_id?: string | null
    denial_actor?: Schemas.SimpleUser | null
  }

  /**
   * @description Тип оплаты
   *             
   * * `0` — Нет
   * * `1` — Любая
   * * `2` — С НДС
   * * `3` — Без НДС
   *  
   * @names
   * * `None` — 0
   * * `Common` — 1
   * * `Nds` — 2
   * * `WithoutNds` — 3
   */
  export type RateType = 0 | 1 | 2 | 3

  /**
   * @description Статус Заказа
   * 
   * * `0` — Груз зарезервирован перевозчиком
   * * `1` — Перевозчик заполнил информацию о реквизитах/водителе/машине и грузовладелец не просмотрел заявку
   * * `2` — Перевозчик заполнил информацию о реквизитах/водителе/машине и грузовладелец просмотрел заявку
   * * `3` — Грузовладелец отправил документ-заявку перевозчику
   * * `4` — Заказ в исполнении (перевозчик дал согласие на документ-заявку)
   * * `5` — Заказ завершен и перенесен в архив
   * * `7` — Есть только приглашение на Заказ
   * * `8` — Заказа нет, но есть Торги, у которых есть возможные победители
   * * `9` — Заказ отклонен автоматически, так как после последней даты загрузки прошло уже более 7 дней
   * * `10` — Заказ завершен, ожидается оплата
   * * `11` — В Торгах лучшая ставка из других Торгов
   * * `-11` — Заказ удален
   * * `-10` — Резерв груза перевозчиком отменен
   * * `-9` — Заказ отклонен грузовладельцем в Торгах после истечения срока подачи документов (смена победителя)
   * * `-8` — Грузовладелец отменил Заказ в исполнении
   * * `-7` — Перевозчик отменил Заказ в исполнении
   * * `-6` — Заказ отклонен грузовладельцем после удаления Торгов
   * * `-4` — Заказ отклонен грузовладельцем в Торгах (смена победителя)
   * * `-3` — Заказ отклонен грузовладельцем
   * * `-2` — Заказ отозван перевозчиком
   *  
   * @names
   * * `Reserve` — 0
   * * `Taken` — 1
   * * `TakenViewed` — 2
   * * `DocumentSentByCargoOwner` — 3
   * * `DocumentApprovedByTrucker` — 4
   * * `Finished` — 5
   * * `PersonalDealInvite` — 7
   * * `AuctionWithPossibleWinner` — 8
   * * `CancelAuto` — 9
   * * `WaitPaymentAndDocuments` — 10
   * * `BestRateFromOtherPassThroughAuction` — 11
   * * `Deleted` — -11
   * * `ReserveCanceled` — -10
   * * `DenialInAuctionByDocExpired` — -9
   * * `CancelInWorkByCargoOwner` — -8
   * * `CancelInWorkByTrucker` — -7
   * * `DenialBecauseDeleteAuction` — -6
   * * `DenialInAuction` — -4
   * * `DenialByCargoOwner` — -3
   * * `DenialByTrucker` — -2
   */
  export type DealState = 0 | 1 | 2 | 3 | 4 | 5 | 7 | 8 | 9 | 10 | 11 | -11 | -10 | -9 | -8 | -7 | -6 | -4 | -3 | -2

  /**
   * @description Тип Заказа
   *             
   * * `0` — Заказ невозможен 
   * * `1` — Взятие груза из поиска
   * * `2` — Заказ из Торгов
   * * `4` — Предложение груза
   * * `8` — Из перехвата машин
   * * `16` — Односторонний заказ
   * * `32` — Предложение груза из встречного предложения
   * * `64` — Предложение груза по контракту
   *  
   * @names
   * * `None` — 0
   * * `OrdinaryDeal` — 1
   * * `AuctionDeal` — 2
   * * `PersonalDeal` — 4
   * * `TruckInterDeal` — 8
   * * `UnilateralDeal` — 16
   * * `CounterOfferDeal` — 32
   * * `ContractDeal` — 64
   */
  export type DealKinds = 0 | 1 | 2 | 4 | 8 | 16 | 32 | 64

  export type DriverView = {
    /**
     * @description Идентификатор водителя
     */
    driver_id?: string
    /**
     * @description Идентификатор водителя каталогов
     */
    parent_id?: string | null
    /**
     * @description Имя водителя
     */
    first_name?: string | null
    ati_id?: string | null
    /**
     * @description Фамилия водителя
     */
    second_name?: string | null
    /**
     * @description Отчество водителя
     */
    patronymic?: string | null
    /**
     * @description Номер телефона
     */
    phone_number?: string | null
    /**
     * @description Номер водительского удостоверения
     */
    driver_license_number?: string | null
    /**
     * @description Серия паспорта
     */
    passport_series?: string | null
    /**
     * @description Номер паспорта
     */
    passport_number?: string | null
    /**
     * @description Кем выдан
     */
    passport_issued_by?: string | null
    /**
     * @description Когда выдан
     */
    passport_when_issued?: string
    /**
     * @description Прописка
     */
    registration?: string | null
    /**
     * @description Флаг привлеченного водителя (со стороны)
     */
    is_attracted_driver?: boolean
    /**
     * @description Id связанной сущности по Заказу
     */
    last_deal_related_id?: string | null
    /**
     * @description Идентификатор связанного ТС, которое пользователь задал в кабинете
     */
    related_id?: string | null
    /**
     * @description Краткое описание водителя
     */
    description?: string | null
    /**
     * @description Фирма от которой привлечен водитель.
     */
    attracted_from?: string | null
    /**
     * @description Запрещено редактирование и удаление водителя
     */
    modification_restricted?: boolean
    /**
     * @description Идентификатор источника информации о водителе
     */
    origin?: Schemas.DriverOrigin
    /**
     * @description Дата рождения
     */
    date_of_birth?: string | null
    /**
     * @description Код подразделения
     */
    department_code_in_passport?: string | null
    /**
     * @description ИНН водителя
     */
    driver_inn?: string | null
    /**
     * @description Есть в Черном списке
     */
    in_cargo_owner_black_list?: boolean
    /**
     * @description Внешний идентификатор
     */
    external_id?: string | null
    /**
     * @description Причины добавления в Черный список
     */
    black_list_reasons?: string[] | null
    /**
     * @description Информация о сканах паспорта / водительского удостоверения
     */
    scans?: Schemas.ScanView[] | null
    /**
     * @description Информация о приложении АТИ-Водитель
     */
    tracker_presence?: Schemas.TrackerPresenceView | null
  }

  /**
   * @description Идентификатор источника информации о водителе
   *             
   * * `0` — Неизвестно откуда указан водитель
   * * `1` — Водитель указан на странице заказов у Заказа в исполнении
   * * `2` — Водитель указан в АТИ-Доках
   *  
   * @names
   * * `Unknown` — 0
   * * `OrdersUiFromDealInProgress` — 1
   * * `AtiDocs` — 2
   */
  export type DriverOrigin = 0 | 1 | 2

  export type ScanView = {
    /**
     * @description Id "владельца" скана
     */
    owner_id?: string
    /**
     * @description Id Скана
     */
    scan_id?: string
    /**
     * @description Адрес расположения файла скана в хранилище
     */
    scan_path?: string | null
    /**
     * @description Имя файла скана в хранилище
     */
    scan_name?: string | null
    /**
     * @description ID файла
     */
    file_id?: string | null
    /**
     * @description Тип скана
     */
    scan_type?: Schemas.AutoparkDocumentType
  }

  /**
   * @description Тип документа сущности каталогов
   *             
   * * `1` — Скан водительского удостоверения
   * * `2` — Скан гражданского паспорта
   * * `3` — Скан ПТС
   * * `4` — Скан пластикового ПТС
   * * `6` — Скан договора аренды
   * * `5` — Фото ТС
   * * `8` — Договор о безвоздмездном пользовании
   *  
   * @names
   * * `DriverLicense` — 1
   * * `Passport` — 2
   * * `TechPassport` — 3
   * * `PlasticTechPassport` — 4
   * * `TruckPhoto` — 5
   * * `RentContract` — 6
   * * `FreeUse` — 8
   */
  export type AutoparkDocumentType = 1 | 2 | 3 | 4 | 5 | 6 | 8

  export type TrackerPresenceView = {
    phone?: string | null
    initial_phone?: string | null
    last_active?: string | null
    has_tracker?: boolean | null
    sms_invite_status?: Schemas.SmsInviteStatusView | null
    tracker_offer_status?: Schemas.TrackerOfferStatus
    reason_changing_offer_status?: string | null
    extended_status?: Schemas.ExtendedDealInWorkStatus
    tracker_finished_at?: string | null
    photo_attach_request?: boolean
    progressbar_percent?: number
    gps_status?: Schemas.MapCarType
    gps_status_date?: string | null
    bad_events?: Schemas.TrackerRouteBadEvent[] | null
    finished_by_counterpart_date?: string | null
    messenger_token?: string | null
    is_deleted_account?: boolean | null
  }

  export type SmsInviteStatusView = {
    invite_sent?: boolean
    contact_name?: string | null
    firm_id?: number | null
    contact_id?: number | null
    sms_status?: Schemas.SmsStatus
    when?: string | null
  }

  /**
   * @names
   * * `Empty` — 0
   * * `Created` — 1
   * * `Error` — 2
   * * `Sent` — 3
   * * `Delivered` — 4
   */
  export type SmsStatus = 0 | 1 | 2 | 3 | 4

  /**
   * @names
   * * `None` — 0
   * * `Sent` — 1
   * * `AcceptedByDriver` — 2
   * * `RejectedByDriver` — 3
   */
  export type TrackerOfferStatus = 0 | 1 | 2 | 3

  /**
   * @names
   * * `None` — 0
   * * `CompletedByDriver` — 100
   */
  export type ExtendedDealInWorkStatus = 0 | 100

  /**
   * @description Происшествия по ходу маршрута водителя
   *  
   * @names
   * * `GpsSpoof` — 0
   * * `Accident` — 1
   * * `Breakdown` — 2
   * * `GpsOff` — 3
   * * `NoData` — 4
   */
  export type TrackerRouteBadEvent = 0 | 1 | 2 | 3 | 4

  /**
   * @description Транспортное средство
   */
  export type TruckView = {
    /**
     * @description Id транспортного средства
     */
    truck_info_id?: string
    /**
     * @description Id родительского ТС
     */
    parent_truck_id?: string | null
    ati_id?: string | null
    /**
     * @description Id связанного транспортного средства
     */
    related_id?: string | null
    /**
     * @description Тип владения ТС
     *             
     * * `0` - Собственное
     * * `1` - Привлеченное
     * * `2` - Аренда
     * * `3` - Лизинг
     * * `4` - Совместная собственность (супругов)
     * * `5` - Безвозмездное пользование
     */
    ownership_type?: Schemas.TruckOwnershipType
    /**
     * @description Тип транспортного средства
     */
    type?: Schemas.TruckType
    /**
     * @description Тип Кузова
     */
    car_type_id?: number
    /**
     * @description Описание транспортного средства
     */
    description?: string | null
    /**
     * @description Марка
     */
    brand_id?: number | null
    /**
     * @description Модель
     */
    model?: string | null
    /**
     * @description Номер
     */
    number?: string | null
    /**
     * @description Грузоподъемность
     */
    capacity?: number | null
    /**
     * @description Объем
     */
    volume?: number | null
    /**
     * @description Длина
     */
    length?: number | null
    /**
     * @description Ширина
     */
    width?: number | null
    /**
     * @description Высота
     */
    height?: number | null
    /**
     * @description Id ТС, с которым было связано ТС во время выполнения последнего Заказа
     */
    last_deal_related_id?: string | null
    /**
     * @description Год выпуска
     */
    manufacture_year?: number | null
    /**
     * @description Запрещено редактирование и удаление ТС.
     */
    modification_restricted?: boolean
    /**
     * @description Не отображать в карточке фирмы
     */
    hidden_in_firm_info?: boolean
    /**
     * @description VIN
     */
    vin?: string | null
    /**
     * @description СТС
     */
    vrc?: string | null
    /**
     * @description Номер кузова
     */
    body_number?: string | null
    /**
     * @description Размерность контейнера
     */
    dimension?: number | null
    /**
     * @description Номер ПТС
     */
    truck_passport_number?: string | null
    /**
     * @description Способность возить реф-контейнеры
     */
    can_refrigerator?: boolean | null
    /**
     * @description Есть GenSet
     */
    has_gen_set?: boolean | null
    /**
     * @description Имя владельца по СТС
     */
    truck_owner_name?: string | null
    /**
     * @description Способность перевозить тяжелые контейнеры
     *  
     */
    can_carry_heavy_container?: boolean | null
    /**
     * @description Способность перевозить высокие контейнеры
     */
    can_carry_tall_container?: boolean | null
    /**
     * @description Внешний идентификатор
     */
    external_id?: string | null
    /**
     * @description Проверено
     */
    verified?: boolean
    /**
     * @description Сканы ПТС
     */
    scans?: Schemas.ScanView[] | null
    /**
     * @description Фото ТС
     */
    photos?: Schemas.ScanView[] | null
    /**
     * @description Закрепленные за ТС водители
     */
    drivers?: Schemas.DriverView[] | null
    /**
     * @description Источник создания Транспорта
     */
    origin?: Schemas.TruckOrigin
  }

  /**
   * @description Тип владения ТС
   *             
   * * `0` - Собственное
   * * `1` - Привлеченное
   * * `2` - Аренда
   * * `3` - Лизинг
   * * `4` - Совместная собственность (супругов)
   * * `5` - Безвозмездное пользование
   *  
   * @names
   * * `Own` — 0
   * * `Attracted` — 1
   * * `Rent` — 2
   * * `Leasing` — 3
   * * `JointOwnershipSpouses` — 4
   * * `FreeUse` — 5
   */
  export type TruckOwnershipType = 0 | 1 | 2 | 3 | 4 | 5

  /**
   * @description Тип транспортного средства
   *             
   * * `1` — Грузовик
   * * `2` — Тягач
   * * `4` — Полуприцеп
   * * `8` — Прицеп
   *  
   * @names
   * * `Truck` — 1
   * * `Tractor` — 2
   * * `Semitrailer` — 4
   * * `Trailer` — 8
   */
  export type TruckType = 1 | 2 | 4 | 8

  /**
   * @description Источник создания Транспорта
   *             
   * * `0` — Неизвестно откуда указано ТС
   * * `1` — ТС указано на странице заказов у Заказа в исполнении
   * * `2` — ТС Указано в АТИ-доках
   *  
   * @names
   * * `Unknown` — 0
   * * `OrdersUiFromDealInProgress` — 1
   * * `ATIDocs` — 2
   */
  export type TruckOrigin = 0 | 1 | 2

  export type DocumentInfoView2 = {
    /**
     * @description Id документа
     */
    id?: string | null
    /**
     * @description Id нового документа
     */
    old_id?: string | null
    /**
     * @description Фирма, отредактировавшая документ
     */
    editor?: string | null
    /**
     * @description Адрес просмотра договора
     */
    url?: string | null
    /**
     * @description Адрес просмотра старого договора
     */
    old_url?: string | null
    /**
     * @description Имя документа
     */
    name?: string | null
    /**
     * @description Расширение документа
     */
    extension?: string | null
    number?: number | null
    /**
     * @description Строковый номер документа
     */
    string_number?: string | null
    /**
     * @description Причина отклонения документа
     */
    reason?: string | null
    /**
     * @description Отклонивший документ
     */
    actor?: Schemas.SimpleUser | null
    /**
     * @description Документ подписан перевозчиком
     */
    is_signed?: boolean
    /**
     * @description Тип документа
     */
    document_type?: Schemas.DocumentType
    /**
     * @description Доступ к документу
     */
    access?: Schemas.DealDocumentAccess
    /**
     * @description Список складов с Временными окнами с доступом к документу
     */
    timeslots_warehouse_ids?: number[] | null
  }

  /**
   * @description Статусная модель перевозки
   *             
   * * `0` — Простая перевозка
   * * `1` — Первая миля
   * * `2` — Последняя миля
   * * `3` — Порожний контейнер
   *  
   * @names
   * * `Default` — 0
   * * `FirstMile` — 1
   * * `LastMile` — 2
   * * `EmptyContainer` — 3
   */
  export type InWorkStatusModel = 0 | 1 | 2 | 3

  export type DealInWorkView = {
    /**
     * @description Id Заказа
     */
    deal_id?: string
    /**
     * @description Статус перевозки
     *             
     * * `0` — Нет статуса
     * * `1` — Едет на загрузку
     * * `2` — Ожидает загрузку
     * * `3` — Загружается
     * * `4` — Загрузился, едет на выгрузку
     * * `5` — Ожидает выгрузку
     * * `6` — Выгружается
     * * `7` — Выгрузился
     * * `8` — Поломка
     * * `9` — ДТП
     * * `10` — Арест ТС
     * * `11` — Контейнер получен на погрузку
     * * `12` — Контейнер на погрузке
     * * `13` — Погрузка контейнера окончена
     * * `14` — Контейнер сдан с погрузки
     * * `15` — Контейнер получен на выгрузку
     * * `16` — Контейнер на выгрузке
     * * `17` — Выгрузка контейнера окончена
     * * `18` — Контейнер сдан с выгрузки
     * * `19` — Пустой контейнер получен
     * * `20` — Пустой контейнер сдан
     */
    in_work_status?: Schemas.InWorkStatus
    /**
     * @description Дата выставления статуса
     */
    in_work_date?: string | null
    /**
     * @description Фирма, выставившая статус (перевозчик или грузовладелец)
     */
    ati_id?: string | null
    /**
     * @description Контакт, выставивший статус
     */
    contact_id?: number | null
    /**
     * @description Номер телефона трекера, откуда получен статус
     */
    tracker_phone?: number | null
  }

  /**
   * @description Статус перевозки
   *             
   * * `0` — Нет статуса
   * * `1` — Едет на загрузку
   * * `2` — Ожидает загрузку
   * * `3` — Загружается
   * * `4` — Загрузился, едет на выгрузку
   * * `5` — Ожидает выгрузку
   * * `6` — Выгружается
   * * `7` — Выгрузился
   * * `8` — Поломка
   * * `9` — ДТП
   * * `10` — Арест ТС
   * * `11` — Контейнер получен на погрузку
   * * `12` — Контейнер на погрузке
   * * `13` — Погрузка контейнера окончена
   * * `14` — Контейнер сдан с погрузки
   * * `15` — Контейнер получен на выгрузку
   * * `16` — Контейнер на выгрузке
   * * `17` — Выгрузка контейнера окончена
   * * `18` — Контейнер сдан с выгрузки
   * * `19` — Пустой контейнер получен
   * * `20` — Пустой контейнер сдан
   *  
   * @names
   * * `None` — 0
   * * `GoToLoading` — 1
   * * `ReadyToLoad` — 2
   * * `Loading` — 3
   * * `Loaded` — 4
   * * `ReadyToUnload` — 5
   * * `Unloading` — 6
   * * `Unloaded` — 7
   * * `Breakdown` — 8
   * * `Accident` — 9
   * * `Arrested` — 10
   * * `ContainerReceivedToLoading` — 11
   * * `ContainerOnLoading` — 12
   * * `ContainerFinishedLoading` — 13
   * * `ContainerSentFromLoading` — 14
   * * `ContainerReceivedToUnloading` — 15
   * * `ContainerOnUnloading` — 16
   * * `ContainerFinishedUnloading` — 17
   * * `ContainerSentFromUnloading` — 18
   * * `EmptyContainerReceived` — 19
   * * `EmptyContainerSent` — 20
   */
  export type InWorkStatus = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20

  export type DataForDriverView = {
    id?: string
    deal_id?: string
    tracker_phone?: number
    revoked?: boolean
    points?: Schemas.DriverTrackerPointView[] | null
    updated_at?: string
    sent?: boolean
  }

  export type DriverTrackerPointView = {
    /**
     * @description Id точки из Заказа
     */
    deal_point_id?: string
    /**
     * @description Порядковый номер точки
     */
    ordinal_id?: number
    /**
     * @description Время
     */
    time?: string | null
    /**
     * @description Дата
     */
    date?: string | null
    /**
     * @description Время до (если есть)
     */
    time_to?: string | null
    /**
     * @description Дата до (если есть)
     */
    date_to?: string | null
    /**
     * @description Широта точки
     */
    lat?: number | null
    /**
     * @description Долгота точки
     */
    lon?: number | null
    /**
     * @description Адрес
     */
    address?: string | null
    /**
     * @description Id города\
     * Значение из [словаря городов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    city_id?: number
    /**
     * @description Id региона\
     * Значение из [словаря регионов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    region_id?: number
    /**
     * @description Id страны\
     * Значение из [словаря стран АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    country_id?: number
    /**
     * @description Тип точки
     *             
     * * `1` — Загрузка
     * * `2` — Разгрузка
     */
    point_type?: Schemas.DealPointTypes
    /**
     * @description Список контактов (не более 10 контактов)
     */
    contact_persons?: Schemas.ContactPerson2[] | null
    /**
     * @description Примечание (до 1000 символов)
     */
    note?: string | null
    /**
     * @description Айди склада из временных окон
     */
    timeslots_warehouse_id?: number | null
  }

  /**
   * @description Тип точки маршрута
   *             
   * * `1` — Загрузка
   * * `2` — Разгрузка
   * * `3` — Таможня
   * * `8` — Ехать через
   *  
   * @names
   * * `Loading` — 1
   * * `Unloading` — 2
   * * `Customs` — 3
   * * `GoThrough` — 8
   */
  export type DealPointTypes = 1 | 2 | 3 | 8

  export type ContactPerson2 = {
    /**
     * @description Контактное лицо
     */
    name?: string | null
    /**
     * @description Телефон контактного лица
     */
    phone?: string | null
    /**
     * @description Порядковый номер добавления контактного лица (от 1 до 10)
     */
    ordinal_id?: number
  }

  /**
   * @description Точка маршрута заказа
   */
  export type DealPointView = {
    /**
     * @description Id точки заказа
     */
    deal_point_id?: string
    /**
     * @description Порядковый номер
     */
    ordinal_id?: number
    /**
     * @description Тип точки маршрута
     *             
     * * `1` — Загрузка
     * * `2` — Разгрузка
     */
    point_type?: Schemas.DealPointTypes
    /**
     * @description Id города\
     * Значение из [словаря городов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    city_id?: number
    /**
     * @description Широта
     */
    lat?: number | null
    /**
     * @description Долгота
     */
    lon?: number | null
    /**
     * @description Адрес
     */
    address?: string | null
    /**
     * @description Название организации
     */
    participant_name?: string | null
    /**
     * @description Id региона
     * Значение из [словаря регионов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    region_id?: number
    contact_name?: string | null
    organization_id?: string | null
    stock_id?: string | null
    stock?: Schemas.PointStockDocView | null
    organization?: Schemas.OrganizationView | null
  }

  export type PointStockDocView = {
    stock_id?: string
    address?: string | null
    address_city_id?: number
    note?: string | null
    contact_persons?: Schemas.ContactPersonView[] | null
    schedule_summary?: string | null
    stock_type?: Schemas.StockType
    timeslots_warehouse_id?: number | null
  }

  export type ContactPersonView = {
    contact_person_id?: string
    name?: string | null
    phone?: string | null
    email?: string | null
  }

  export type OrganizationView = {
    organization_id?: string
    name?: string | null
    phone?: string | null
    extra_phone?: number | null
    contact_persons?: Schemas.ContactPersonView[] | null
  }

  export type DealPaymentView = {
    /**
     * @description Список возможных ставок перевозки
     */
    rates?: Schemas.RateView[] | null
    /**
     * @description Процент предоплаты
     */
    prepay_percent?: number
    /**
     * @description Есть ли предоплата
     */
    prepay_percent_enabled?: boolean
    /**
     * @description Оплата на выгрузке
     */
    on_unloading?: boolean
    /**
     * @description Оплата топливом
     */
    in_fuel?: boolean
    /**
     * @description Есть ли срок оплаты
     */
    pay_days_enabled?: boolean
    /**
     * @description Срок оплаты
     */
    pay_days?: number
    /**
     * @description Указана ли в грузе ставка
     */
    fixed_rate?: boolean
    /**
     * @description Возможен ли торг
     */
    torg?: boolean
    /**
     * @description Прямой договор
     */
    direct_contract?: boolean
    /**
     * @description Id типа ставки (любая, на карту, нал)
     */
    money_type?: number
  }

  export type RateView = {
    /**
     * @description Сумма
     */
    rate?: number
    rate_type?: Schemas.RateType
    /**
     * @description Id валюты
     */
    currency?: number
    /**
     * @description Является ли ставка выбранной
     */
    active?: boolean
  }

  export type PayDocsView = {
    /**
     * @description Информация о копиях документов
     */
    documents_copies?: Schemas.DocumentStatusInfoView | null
    /**
     * @description Информация о оригиналах документов
     */
    documents_original?: Schemas.DocumentStatusInfoView | null
    /**
     * @description Информация об отслеживании оригиналов документов
     */
    documents_original_track?: Schemas.DocumentTrackingInfoView | null
    /**
     * @description Информация о оплате
     */
    payment?: Schemas.PaymentStatusView | null
  }

  export type DocumentStatusInfoView = {
    /**
     * @description Документ получен
     */
    checked?: boolean
    /**
     * @description Дата получения документов
     */
    date?: string | null
  }

  export type DocumentTrackingInfoView = {
    /**
     * @description Id транспортной компании, осуществляющей доставку документов
     */
    transport_company_id?: number
    /**
     * @description Сссылка для отслеживания статуса отправления
     */
    tracking_url?: string | null
    /**
     * @description Номер отправления
     */
    tracking_number?: string | null
    /**
     * @description Дата отправки документов
     */
    sending_date?: string | null
  }

  export type PaymentStatusView = {
    /**
     * @description Заказ оплачен
     */
    checked?: boolean
    /**
     * @description Дата оплаты
     */
    date?: string | null
  }

  export type RequisiteView = {
    requisite_id?: string
    requisite_type_id?: number
    requisite_name?: string | null
    legal_name?: string | null
    own_ship_id?: number
    fio?: string | null
    inn?: string | null
    ogrn?: string | null
    phone?: string | null
    fax?: string | null
    email?: string | null
    kpp?: string | null
    rs?: string | null
    ks?: string | null
    bik?: string | null
    bank?: string | null
    codes?: string | null
    is_read_only?: boolean
    okpo?: string | null
    available_in_ati_docs?: boolean
    is_vat_payer?: boolean
    is_active?: boolean
    legal_address?: Schemas.FirmAddressView | null
    post_address?: Schemas.FirmAddressView | null
    legal_address_id?: string
    post_address_id?: string
    signees?: Schemas.Signee[] | null
  }

  export type FirmAddressView = {
    address_id?: string
    country_id?: number | null
    region_id?: number | null
    city_id?: number | null
    city_name?: string | null
    post_index?: string | null
    street_type_id?: number
    street_name?: string | null
    house_no?: string | null
    part_no?: string | null
    litera?: string | null
    office_no?: string | null
    post_contact?: string | null
    add_date?: string | null
    attributes?: number
    send_type_id?: number
    note?: string | null
    formatted_text?: string | null
    is_post_address?: boolean
  }

  /**
   * @description Подписант (лицо, поставившее свою подпись под документом).
   */
  export type Signee = {
    /**
     * @description Идентификатор записи.
     */
    signee_id?: string
    /**
     * @description Идентификатор реквизита, которому принадлежит эта запись.
     */
    requisite_id?: string
    /**
     * @description ФИО (обязательно в родительном падеже).
     */
    full_name?: string | null
    /**
     * @description Должность (обязательно в родительном падеже).
     */
    position?: string | null
    /**
     * @description На основании чего действует (обязательно в родительном падеже).
     */
    act_upon?: string | null
    /**
     * @description Выбирать по умолчанию.
     */
    is_default?: boolean
    /**
     * @description Дата удаления.
     */
    deletion_date?: string | null
  }

  export type CustomSetting = {
    key?: string | null
    value?: string | null
    type?: string | null
    firm_id?: number
    contact_id?: number
  }

  export type PersonalInvitationOrderView = {
    /**
     * @description Параметры персонального приглашения
     */
    deal?: Schemas.PersonalInvitationView | null
    /**
     * @description Груз
     */
    load?: Schemas.LoadView | null
    is_red?: boolean
  }

  export type PersonalInvitationView = {
    /**
     * @description Время выставления приглашения
     */
    updated_at?: string
    /**
     * @description Статус заказа - заказа еще нет, но есть персональное приглашение
     */
    status?: Schemas.DealState
    millis_left_until_cancel?: number
    deal_kind?: Schemas.DealKinds
    /**
     * @description Параметры оплаты
     */
    payment?: Schemas.DealPaymentView | null
  }

  export type AuctionWithPossibleWinnersOrderView = {
    /**
     * @description Груз
     */
    load?: Schemas.LoadView | null
    /**
     * @description Отмечен ли заказ красной точкой (признак того, что требуется действие)
     */
    is_red?: boolean
    /**
     * @description Пользовательские настройки
     */
    custom_settings?: (Record<string, unknown> & Record<string, Schemas.CustomSetting>) | null
  }

  export type AccountView = {
    firm_type?: string | null
    /**
     * @description Id аккаунта
     */
    account_id?: string | null
    /**
     * @description Полное имя фирмы
     */
    full_firm_name?: string | null
    /**
     * @description Краткое имя фирмы
     */
    firm_name?: string | null
    /**
     * @description Брэнд
     */
    brand?: string | null
    /**
     * @description Тип собственности
     */
    ownership?: string | null
    /**
     * @description Id типа собственности
     */
    ownership_id?: number
    /**
     * @description Количество претензий
     */
    claims_count?: number
    /**
     * @description Количество упоминаний на форуме "Недобросовестные партнеры"
     */
    bad_partner_mentions_count?: number
    /**
     * @description Количество рекомендаций
     */
    recommendations_count?: number
    /**
     * @description Паспорт фирмы
     */
    passport?: Schemas.PassportView | null
    city_id?: number
    /**
     * @description Список контактов
     */
    contacts?: Schemas.ContactView[] | null
  }

  export type PassportView = {
    /**
     * @description Статус (цвет звезд)
     */
    status?: Schemas.FirmStatus
    /**
     * @description Количество баллов
     */
    total_score?: number
  }

  /**
   * @names
   * * `Gray` — 0
   * * `Green` — 1
   * * `Yellow` — 2
   * * `Red` — 3
   * * `AtiPartner` — 4
   * * `AtiEmployee` — 5
   * * `GosOrgan` — 6
   * * `Odks` — 7
   */
  export type FirmStatus = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

  export type ContactView = {
    id?: number
    name?: string | null
    telephone?: string | null
    email?: string | null
    skype_name?: string | null
    city_id?: number | null
    telephone_brand?: string | null
    telephone_region?: string | null
    mobile?: string | null
    mobile_brand?: string | null
    mobile_region?: string | null
  }

  export type CountersView = {
    /**
     * @description В исполнении
     */
    in_progress?: Schemas.OrderCounter | null
    /**
     * @description Согласование
     */
    reconciliation?: Schemas.OrderCounter | null
    /**
     * @description Архив
     */
    completed?: Schemas.OrderCounter | null
    /**
     * @description ДО и Оплата
     */
    payments?: Schemas.OrderCounter | null
  }

  export type OrderCounter = {
    /**
     * @description Счетчик заказов, требующих действие
     */
    highlighted?: number
    /**
     * @description Сетчик заказов по контакту
     */
    count?: number
    /**
     * @description Счетчик заказов для всех контактов
     */
    total_count?: number
  }

  export type CityView = {
    /**
     * @description Id города\
     * Значение из [словаря городов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    id?: number
    /**
     * @description Id региона\
     * Значение из [словаря регионов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    rid?: number | null
    /**
     * @description Id страны\
     * Значение из [словаря стран АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    cid?: number | null
    /**
     * @description Полное имя города
     */
    name?: string | null
    /**
     * @description Является ли региональным центром
     */
    isRegCenter?: boolean
    /**
     * @description Название города
     */
    city?: string | null
    /**
     * @description Название региона
     */
    region?: string | null
    /**
     * @description Название страны
     */
    country?: string | null
    /**
     * @description Название города на английском
     */
    cityEng?: string | null
    /**
     * @description Название региона на английском
     */
    regionEng?: string | null
    /**
     * @description Название страны на английском
     */
    countryEng?: string | null
    /**
     * @description Код страны
     */
    code?: string | null
  }

  export type Comment = {
    /**
     * @description Id комментария
     */
    comment_id?: string
    /**
     * @description Сообщение
     */
    message?: string | null
    /**
     * @description Id контакта, который оставил комментарий
     */
    contact_id?: number
    /**
     * @description Дата комментария
     */
    comment_date_time?: string
  }

  export type JsonValidationException = Schemas.FinalException & Record<string, unknown>

  /**
   * @description Вкладка
   * 
   * * `0` — Согласование
   * * `1` — В исполнении
   * * `2` — Архив
   * * `3` — ДО и Оплата
   *  
   * @names
   * * `Reconciliation` — 0
   * * `InProgress` — 1
   * * `Completed` — 2
   * * `Payments` — 3
   */
  export type OrderTab = 0 | 1 | 2 | 3

  export type DealFileTypeInfo = {
    /**
     * @description Тип файла
     */
    type?: Schemas.DealFileType
    /**
     * @description Название типа файла
     */
    type_name?: string | null
    /**
     * @description Короткое название типа файла
     */
    short_type_name?: string | null
    /**
     * @description Порядок типа в списке
     */
    ordinal_id?: number
  }

  export type InWorkStatusModelInfo = {
    /**
     * @description Статусная модель перевозки
     */
    in_work_status_model?: Schemas.InWorkStatusModel
    /**
     * @description Название статусной модели перевозки
     */
    in_work_status_model_name?: string | null
    /**
     * @description Список статусов модели
     */
    in_work_statuses?: Schemas.InWorkStatusInfo[] | null
  }

  export type InWorkStatusInfo = {
    /**
     * @description Статус перевозки
     */
    status?: Schemas.InWorkStatus
    /**
     * @description Название статуса перевозки
     */
    status_name?: string | null
    /**
     * @description Порядок статуса в списке
     */
    ordinal_id?: number
  }

  export type FullOrderView = {
    /**
     * @description Копия груза
     */
    load?: Schemas.LoadView | null
    /**
     * @description Аккаунт контрагента
     */
    account?: Schemas.AccountView | null
    /**
     * @description Заказ
     */
    deal?: Schemas.DealView | null
    /**
     * @description Пользовательские настройки
     */
    custom_settings?: (Record<string, unknown> & Record<string, Schemas.CustomSetting>) | null
  }

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModelOfContactAccessDeniedException = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModelOfLoadCantReserveException = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModelOfDeserializationException = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModelOfAccessDeniedException = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModelOfAuctionIsExWinnerException = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModelOfAuctionIsNotWinnerException = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModelOfInvitationNotFoundException = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModelOfLoadNotFoundException = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModel_1 = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  export type ChangeDriverDto = {
    /**
     * @description Идентификатор Заказа
     */
    deal_id?: string
    /**
     * @description Идентификатор нового водителя
     */
    driver_id?: string
  }

  export type ChangeTruckDto = {
    /**
     * @description Идентификатор Заказа
     */
    deal_id?: string
    /**
     * @description Идентификатор Грузовика или Тягача
     */
    truck_id?: string | null
    /**
     * @description Идентификатор Прицепа
     */
    trailer_id?: string | null
    /**
     * @description Идентификатор Полуприцепа
     */
    semitrailer_id?: string | null
  }

  export type ChangeRateDto = {
    /**
     * @description Идентификатор Заказа
     */
    deal_id?: string | null
    /**
     * @description Размер ставки
     */
    rate?: number | null
    /**
     * @description Id валюты из [словаря валют АТИ](https://ati.su/developers/api/dictionaries/cargoes/#get-v1.0-dictionaries-currencyTypes)
     */
    currency_id?: number | null
    /**
     * @description Тип оплаты. 1 - наличные, 2 - с НДС, 3 - без НДС
     */
    rate_type_id?: number | null
    /**
     * @description Возможность отправлять наличные на карту
     */
    on_card?: boolean
  }

  export type SaveUnilateralOrderDto = {
    /**
     * @description Идентификатор Заказа
     * 
     * Указывается, когда необходимо изменить заказ
     */
    deal_id?: string | null
    /**
     * @description Вес груза в тоннах
     * 
     * Обязательный параметр, если не задан параметр `cargo_volume`.
     * Максимальная длина - 4 символа
     */
    cargo_weight?: number
    /**
     * @description Объем груза в кубических метрах
     * 
     * Обязательный параметр, если не задан параметр `cargo_weight`.
     *             
     * Максимальная длина - 4 символа
     */
    cargo_volume?: number
    /**
     * @description Идентификатор наименования груза\
     * Значение из [словаря наименований грузов](https://ati.su/developers/api/dictionaries/cargoes/#get-v1.0-dictionaries-cargoTypes)
     */
    cargo_type_id?: number
    /**
     * @description Наименование груза.
     * 
     * Обязательный параметр, если значение параметра `cargo_type_id` равно 59.
     * 
     * Максимальная длина названия - 50 символов.
     * 
     * Этот параметр должен быть пустым, если параметр `cargo_type_id` отличен от 59.
     * 
     * В этом поле запрещено указывать контактную информацию.
     */
    cargo_type?: string | null
    dogruz?: Schemas.DogruzType
    /**
     * @description Битовая сумма id типов разгрузки
     * 
     * Например: только "Верхняя" будет иметь значение 1;
     * 
     * "Верхняя", "Боковая" и "Со снятием стоек" имеют значение 67 (1 + 2 + 64)
     * 
     * Значение из [словаря вариантов загрузки АТИ](https://ati.su/developers/api/dictionaries/cargoes/#get-v1.0-dictionaries-loadingTypes)
     */
    loading_type?: number | null
    /**
     * @description Битовая сумма id типов разгрузки
     * 
     * Например: только "Верхняя" будет иметь значение 1;
     *             
     * "Верхняя", "Боковая" и "Со снятием стоек" имеют значение 67 (1 + 2 + 64)
     * 
     * Значение из [словаря вариантов разагрузки АТИ](https://ati.su/developers/api/dictionaries/cargoes/#get-v1.0-dictionaries-loadingTypes)
     */
    unloading_type?: number | null
    /**
     * @description Длина груза в метрах
     * 
     * Допустимое значение от 0 до 50. Максимальная длина - 5 символов.
     */
    length?: number | null
    /**
     * @description Высота груза в метрах
     * 
     * Допустимое значение от 0 до 50. Максимальная длина - 5 символов.
     */
    height?: number | null
    /**
     * @description Ширина груза в метрах
     * 
     * Допустимое значение от 0 до 50. Максимальная длина - 5 символов.
     */
    width?: number | null
    /**
     * @description Диаметр груза в метрах
     * 
     * Допустимое значение от 0 до 50. Максимальная длина - 5 символов.
     */
    diameter?: number | null
    /**
     * @description Идентификатор наименования упаковки (навалом, коробки, россыпью, ...)
     * 
     * Значение из [словаря наименований грузов](https://ati.su/developers/api/dictionaries/cargoes/#get-v1.0-dictionaries-packTypes)
     */
    pack_type?: number | null
    /**
     * @description Количество упаковок для груза
     *             
     * Обязательное поле, если `pack_type` не равен 0, 1, 3
     * 
     * Допустимое значение от 0 до 9999
     */
    pallet_count?: number | null
    /**
     * @description Количество ремней для груза.
     * 
     * Допустимое значение от 0 до 9999
     */
    belt_count?: number | null
    /**
     * @description Параметр, определяющий степень опасности груза
     *             
     * Возможны значения с 1 до 9
     */
    adr?: number | null
    /**
     * @description Точки маршрута
     *             
     * Обязательное поле, если нужно отправить заказ АТИ-Водителю
     */
    points?: Schemas.UnilateralOrderPointDtoInbox[] | null
    /**
     * @description Идентификатор водителя
     */
    driver_id?: string | null
    /**
     * @description Отправлять ли заказ водителю в приложение АТИ-Водитель
     */
    send_to_driver?: boolean | null
    /**
     * @description Идентификатор транспорта
     */
    truck_id?: string | null
    /**
     * @description Идентификатор прицепа
     */
    trailer_id?: string | null
    /**
     * @description Идентификатор полуприцепа
     */
    semitrailer_id?: string | null
    /**
     * @description Ставка
     * 
     * Если ставка указана, то должны быть заполнены поля `currency` и `payment_type`
     */
    rate?: number | null
    /**
     * @description Идентификатор валюты ставки
     *             
     * Поле является обязательным, если указана ставка (`rate`)
     * 
     * Значение из [словаря валют АТИ](https://ati.su/developers/api/dictionaries/cargoes/#get-v1.0-dictionaries-currencyTypes)
     */
    currency?: number | null
    /**
     * @description Типы оплаты для Одностороннего заказа
     *             
     * Поле является обязательным, если указана ставка (`rate`)
     * 
     * * `0` — Оплата наличными
     * * `1` — Безналичная оплата без НДС 
     * * `2` — Безналичная оплата c НДС
     */
    payment_type?: Schemas.UnilateralPaymentType | null
    /**
     * @description Идентификатор реквизитов
     */
    requisites_id?: string | null
    /**
     * @description Идентификатор подписанта
     */
    signer_id?: string | null
    /**
     * @description Идентификатор города загрузки
     */
    loading_city?: number
    /**
     * @description Идентификатор города разгрузки
     */
    unloading_city?: number
    /**
     * @description Номер заказа или груза
     */
    order_number?: string | null
  }

  export type UnilateralOrderPointDtoInbox = {
    /**
     * @description Идентификатор точки
     */
    id?: string
    /**
     * @description Порядковый номер точки, начиная с 0
     */
    ordinal_id?: number
    /**
     * @description Тип точки
     * * `1` — Загрузка
     * * `2` — Разгрузка
     * * `3` — Таможня
     */
    point_type?: Schemas.UnilateralLoadExtraPointType
    /**
     * @description Id страны\
     * Значение из [словаря стран АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    country_id?: number
    /**
     * @description Id региона\
     * Значение из [словаря регионов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    region_id?: number
    /**
     * @description Id города\
     * Значение из [словаря городов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    city_id: number
    /**
     * @description Время прибытия (при наличии значения time_to, time означает начало периода времени прибытия)
     */
    time: string
    /**
     * @description Время до (если есть)
     */
    time_to?: string | null
    /**
     * @description Дата прибытия (при наличии значения date_to, date означает начало периода дат прибытия) 
     */
    date: string
    /**
     * @description Дата до (если есть)
     */
    date_to?: string | null
    /**
     * @description Широта точки
     */
    lat: number
    /**
     * @description Долгота точки
     */
    lon: number
    /**
     * @description Адрес
     */
    address?: string
    /**
     * @description Список контактов (не более 10 контактов)
     */
    contact_persons?: Schemas.ContactPerson2[] | null
    /**
     * @description Примечание (до 1000 символов)
     */
    note?: string | null
  }

  /**
   * @description Тип дополнительной точки маршрута груза
   *             
   * * `1` — Загрузка
   * * `2` — Разгрузка
   * * `3` — Таможня
   *  
   * @names
   * * `LoadingExtraPoint` — 1
   * * `UnloadingExtraPoint` — 2
   * * `CustomExtraPoint` — 3
   */
  export type UnilateralLoadExtraPointType = 1 | 2 | 3

  /**
   * @description Типы оплаты для Одностороннего заказа
   *             
   * * `0` — Оплата наличными
   * * `1` — Безналичная оплата без НДС 
   * * `2` — Безналичная оплата c НДС
   *  
   * @names
   * * `Cash` — 0
   * * `CashlessWithoutNds` — 1
   * * `CashlessWithNds` — 2
   */
  export type UnilateralPaymentType = 0 | 1 | 2

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModelOfLoadCantTakeException = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModelOfInvalidTruckCombinationException = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModelOfJsonValidationException = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModelOfDealWithDocsCantOverwriteException = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModelOfDealNoChangeIsDropDocsNotSpecifiedException = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  /**
   * @description Параметры Заказа
   */
  export type LoadTakeInfoDto = {
    copies?: Schemas.LoadTakeCopiesDto | null
    rate_type?: Schemas.RateType
    /**
     * @description ID водителя
     */
    driver_id?: string | null
    deal_id?: string | null
    /**
     * @description ID транспортного средства
     */
    truck_info_id?: string | null
    /**
     * @description ID полуприцепа
     *             
     * *Может быть указан только если транспортное средство — тягач*
     */
    semitrailer_id?: string | null
    /**
     * @description ID прицепа
     *             
     * *Может быть указан только если указан полуприцеп или транспортное средство — грузовик*
     */
    trailer_id?: string | null
    /**
     * @description ID реквизитов
     */
    requisites_id?: string
    /**
     * @description ID подписанта
     */
    signer_id?: string | null
    /**
     * @description Отзывать ли привязанные документы
     *             
     * *Используется при редактировании*
     */
    is_drop_docs?: boolean
    deal_kind?: Schemas.DealKinds | null
    tracker_owner_access?: number | null
    is_pass_through?: boolean
    /**
     * @description Комментарий перевозчика
     */
    taker_note?: string | null
  }

  export type LoadTakeCopiesDto = {
    driver?: Schemas.DriverInfo | null
    trailer?: Schemas.TruckInfo | null
    semitrailer?: Schemas.TruckInfo | null
    truck?: Schemas.TruckInfo | null
  }

  export type DriverInfo = {
    /**
     * @description Идентификатор реквизитов водителя/водителя заказа
     */
    driver_id?: string
    /**
     * @description Идентификатор реквизитов водителя каталога
     */
    parent_driver_id?: string | null
    /**
     * @description Имя водителя
     */
    first_name?: string | null
    /**
     * @description Идентификатор фирмы
     */
    firm_id?: number
    /**
     * @description Фамилия водителя
     */
    second_name?: string | null
    /**
     * @description Отчество водителя
     */
    patronymic?: string | null
    /**
     * @description Номер водительского удостоверения
     */
    driver_license_number?: string | null
    /**
     * @description Серия паспорта
     */
    passport_series?: string | null
    /**
     * @description Номер паспорта
     */
    passport_number?: string | null
    /**
     * @description Кем выдан
     */
    passport_issued_by?: string | null
    /**
     * @description Когда выдан
     */
    passport_when_issued?: string
    /**
     * @description Прописка
     */
    registration?: string | null
    /**
     * @description Флаг привлеченного водителя (со стороны)
     */
    is_attracted_driver?: boolean
    /**
     * @description Id связанной сущности по Заказу
     */
    last_deal_related_id?: string | null
    /**
     * @description Краткое описание водителя
     */
    description?: string | null
    /**
     * @description Фирма от которой привлечен водитель.
     */
    attracted_from?: string | null
    /**
     * @description Информация о сканах паспорта / водительского удостоверения
     */
    scans?: Schemas.Scan[] | null
    /**
     * @description Информация о приложении АТИ-Водитель
     */
    tracker_presence?: Schemas.TrackerPresence | null
    /**
     * @description Идентификатор источника информации о водителе
     */
    origin?: Schemas.DriverOrigin
    /**
     * @description Дата рождения
     */
    date_of_birth?: string | null
    /**
     * @description Код подразделения
     */
    department_code_in_passport?: string | null
    /**
     * @description ИНН водителя
     */
    driver_inn?: string | null
    /**
     * @description Есть в Черном списке
     */
    in_cargo_owner_black_list?: boolean
    /**
     * @description Внешний идентификатор
     */
    external_id?: string | null
    /**
     * @description Причины добавления в Черный список
     */
    black_list_reasons?: string[] | null
    binding?: Schemas.PhoneBinding | null
    phone_binder?: Schemas.Account | null
    /**
     * @description Номер телефона
     */
    phone_number?: string | null
    phone?: Schemas.OrderPhone | null
    /**
     * @description Телефоны
     */
    phones?: Schemas.OrderPhone[] | null
  }

  /**
   * @description Скан документа ТС или водителя
   */
  export type Scan = {
    /**
     * @description ID 
     */
    id?: string
    /**
     * @description ID сущности, котрой принадлежит скан
     */
    owner_id?: string
    /**
     * @description Путь к файлу
     */
    path?: string | null
    /**
     * @description Название
     */
    name?: string | null
    /**
     * @description ID файла
     */
    file_id?: string | null
    /**
     * @description Тип документа
     *             
     * * `1` — Скан водительского удостоверения
     * * `2` — Скан гражданского паспорта
     * * `3` — Скан ПТС
     * * `4` — Скан пластикового ПТС
     * * `5` — Фото ТС
     * * `8` — Договор о безвоздмездном пользовании
     */
    type?: Schemas.AutoparkDocumentType
  }

  export type TrackerPresence = {
    deal_id?: string
    phone?: string | null
    initial_phone?: string | null
    sms_invite_status?: Schemas.SmsInviteStatus | null
    tracker_offer_status?: Schemas.TrackerOfferStatus
    reason_changing_offer_status?: string | null
    extended_status?: Schemas.ExtendedDealInWorkStatus
    tracker_finished_at?: string | null
    photo_attach_request?: boolean
    last_active?: string | null
    has_tracker?: boolean
    progressbar_percent?: number
    gps_status?: Schemas.MapCarType
    gps_status_date?: string | null
    bad_events?: Schemas.TrackerRouteBadEvent[] | null
    messenger_token?: string | null
    is_deleted_account?: boolean | null
  }

  export type SmsInviteStatus = {
    invite_sent?: boolean
    contact_name?: string | null
    firm_id?: number | null
    contact_id?: number | null
    sms_status?: Schemas.SmsStatus
    when?: string | null
  }

  export type PhoneBinding = {
    owner_type?: Schemas.PhoneOwnerType
    firm_id?: number | null
    contact_id?: number | null
  }

  /**
   * @names
   * * `Driver` — 0
   * * `Truck` — 1
   */
  export type PhoneOwnerType = 0 | 1

  export type Account = {
    add_date?: string
    firm_type_id?: number
    firm_type?: string | null
    is_in_black_list?: boolean
    payed_services?: Schemas.PayedService[] | null
    has_payed_services?: boolean
    is_ati_partner?: boolean
    /**
     * @description Член общ. движения Круглый Стол
     */
    is_odks_member?: boolean
    /**
     * @description Был сброшен балл за соответствие в связи с продолжительной неактивностью фирмы
     */
    is_reset_similarity_point?: boolean
    /**
     * @description В отличие от HasPayedServices применяется только там, где нет обращения к сервисам
     */
    is_payed?: boolean
    contacts_count?: number
    firm_id?: number
    account_id?: string | null
    contact_id?: number | null
    /**
     * @description Имя фирмы + форма собственности
     */
    full_firm_name?: string | null
    firm_name?: string | null
    brand?: string | null
    ownership?: string | null
    ownership_id?: number
    address?: string | null
    inn?: string | null
    time_zone_minutes?: number | null
    /**
     * @description Сумма претензий от всех фирм (деньги, которые хотят получить от фирмы)
     */
    claims_sum?: number | null
    /**
     * @description Количество претензий от фирм
     */
    claims_count?: number
    city_id?: number
    /**
     * @description Количество упоминаний на форуме Недобросовестных партнеров
     */
    bad_partner_mentions_count?: number
    /**
     * @description Количество фирм, которые написали о данной фирме на форуме Недобросовестных партнеров
     */
    bad_partner_firms_count?: number
    recommendations_count?: number
    ri_users_attributes?: number
    is_rrd?: boolean
    loads_access?: Schemas.FirmAccessLevel
    trucks_access?: Schemas.FirmAccessLevel
    location?: Schemas.FirmServiceCity | null
    passport?: Schemas.Passport | null
    contacts?: Schemas.Contact[] | null
    time_zone_id?: string | null
    registration_date?: string
    payed_services_end_date?: string
  }

  export type PayedService = {
    firm_id?: number
    service_id?: number
    service_amount?: number | null
    service_name?: string | null
  }

  /**
   * @names
   * * `NoAccess` — 0
   * * `ReadOnly` — 1
   * * `ReadWrite` — 2
   * * `AddDelete` — 3
   * * `Full` — 4
   */
  export type FirmAccessLevel = 0 | 1 | 2 | 3 | 4

  export type FirmServiceCity = {
    city_id?: number
    region_id?: number | null
    country_id?: number | null
    full_name?: string | null
    short_name?: string | null
    is_regional_center?: boolean
    city_size?: number
    fias_id?: string | null
    attributes?: number
    city_name?: string | null
    region_name?: string | null
    country_name?: string | null
    country_code_name?: string | null
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
    /**
     * @description Статус отвечает за цвет подложки звезд
     */
    status?: Schemas.FirmStatus
    /**
     * @description Описание статуса
     */
    status_description?: string | null
  }

  export type Contact = {
    firm_id?: number
    id?: number
    name?: string | null
    department_id?: number
    telephone?: string | null
    telephone_brand?: string | null
    telephone_region?: string | null
    email?: string | null
    icq?: string | null
    mobile?: string | null
    mobile_brand?: string | null
    mobile_region?: string | null
    skype_name?: string | null
    fax?: string | null
    mobile_operator?: string | null
    region_id?: string | null
    city_id?: number | null
    is_visibled?: boolean
    is_email_visibled?: boolean
    location?: Schemas.FirmServiceCity | null
    user_rights?: number
    can_take_loads_for_orders?: boolean
    can_take_personal_board_load?: boolean
    can_work_with_own_load?: boolean
    can_work_with_department_load?: boolean
  }

  export type OrderPhone = {
    phone?: number
    phone_number?: string | null
    updated_at?: string
    binding?: Schemas.PhoneBinding | null
  }

  export type TruckInfo = {
    truck_info_id?: string
    /**
     * @description Идентификатор фирмы
     */
    firm_id?: number
    /**
     * @description ID транспортного средства каталогов
     */
    parent_truck_id?: string | null
    /**
     * @description Идентификатор ТС, с которым было связано ТС во время выполнения последнего Заказа
     */
    last_deal_related_id?: string | null
    /**
     * @description Тип транспортного средства
     */
    type?: Schemas.TruckType
    /**
     * @description Описание транспортного средства
     */
    description?: string | null
    /**
     * @description Марка
     */
    brand_id?: number | null
    /**
     * @description Модель
     */
    model?: string | null
    /**
     * @description Номер
     */
    number?: string | null
    /**
     * @description Тип владения ТС
     *             
     * * `0` - Собственное
     * * `1` - Привлеченное
     * * `2` - Аренда
     * * `3` - Лизинг
     * * `4` - Совместная собственность (супругов)
     * * `5` - Безвозмездное пользование
     */
    ownership_type?: Schemas.TruckOwnershipType
    /**
     * @description Тип Кузова
     */
    car_type_id?: number
    /**
     * @description Грузоподъемность
     */
    capacity?: number | null
    /**
     * @description Объем
     */
    volume?: number | null
    /**
     * @description Длина
     */
    length?: number | null
    /**
     * @description Ширина
     */
    width?: number | null
    /**
     * @description Высота
     */
    height?: number | null
    /**
     * @description Год выпуска
     */
    manufacture_year?: number | null
    /**
     * @description VIN
     */
    vin?: string | null
    /**
     * @description Номер кузова
     */
    body_number?: string | null
    /**
     * @description СТС
     */
    vrc?: string | null
    /**
     * @description Размерность контейнера
     */
    dimension?: number | null
    /**
     * @description Номер ПТС
     */
    truck_passport_number?: string | null
    /**
     * @description Способность возить реф-контейнеры
     */
    can_refrigerator?: boolean | null
    /**
     * @description Есть GenSet
     */
    has_gen_set?: boolean | null
    /**
     * @description Имя владельца по СТС
     */
    truck_owner_name?: string | null
    /**
     * @description Способность перевозить тяжелые контейнеры
     *  
     */
    can_carry_heavy_container?: boolean | null
    /**
     * @description Способность перевозить высокие контейнеры
     */
    can_carry_tall_container?: boolean | null
    /**
     * @description Внешний идентификатор
     */
    external_id?: string | null
    /**
     * @description Сканы документов ТС
     */
    scans?: Schemas.Scan[] | null
    /**
     * @description фото ТС
     */
    photos?: Schemas.AutoparkPhoto[] | null
    /**
     * @description Проверено
     */
    verified?: boolean | null
    /**
     * @description Датчики мониторинга транспорта
     */
    sensors?: Schemas.Sensor[] | null
    /**
     * @description Источник создания Транспорта
     */
    origin?: Schemas.TruckOrigin
    /**
     * @description Информация о приложении АТИ-Водитель
     */
    tracker_presence?: Schemas.TrackerPresence | null
    binding?: Schemas.PhoneBinding | null
    phone_binder?: Schemas.Account | null
    /**
     * @description Номер телефона
     */
    phone_number?: string | null
    phone?: Schemas.OrderPhone | null
    /**
     * @description Телефоны
     */
    phones?: Schemas.OrderPhone[] | null
  }

  export type AutoparkPhoto = {
    /**
     * @description ID "владельца" скана.
     */
    owner_id?: string
    /**
     * @description ID документа.
     */
    id?: string
    /**
     * @description Адрес расположения файла документа в хранилище.
     */
    path?: string | null
    /**
     * @description Имя файла документа в хранилище.
     */
    name?: string | null
    file_id?: string | null
    /**
     * @description Тип документа.
     */
    type?: Schemas.AutoparkDocumentType
  }

  export type Sensor = {
    sensor_id?: number
    sensor_name?: string | null
    provider_id?: number
    provider_sensor_id?: string | null
    is_active?: boolean
    unactivate_date?: string | null
    host?: Schemas.SensorHost | null
  }

  export type SensorHost = {
    sensor_host_id?: number
    url?: string | null
  }

  export type PayDocsDto = {
    /**
     * @description Информация о копиях документов
     */
    documents_copies?: Schemas.DocumentStatusInfoDto | null
    /**
     * @description Информация об оригиналах документов
     */
    documents_original?: Schemas.DocumentStatusInfoDto | null
    /**
     * @description Информация об отслеживании отправки оригиналов документов (Только для Перевозчика)
     */
    documents_original_track?: Schemas.DocumentTrackingInfoDto | null
    /**
     * @description Информация о закрывающих документах (Только для Перевозчика)
     */
    closing_documents?: Schemas.DocumentStatusInfoDto | null
    /**
     * @description Информация об оплате
     */
    payment?: Schemas.PaymentStatusDto | null
  }

  export type DocumentStatusInfoDto = {
    /**
     * @description Документ получен
     */
    checked?: boolean
    /**
     * @description Дата получения документов
     */
    date?: string | null
  }

  export type DocumentTrackingInfoDto = {
    /**
     * @description ID транспортной компании, осуществляющей доставку документов
     */
    transport_company_id?: number
    /**
     * @description Сссылка для отслеживания статуса отправления
     */
    tracking_url?: string | null
    /**
     * @description Номер отправления
     */
    tracking_number?: string | null
    /**
     * @description Дата отправки документов
     */
    sending_date?: string | null
  }

  export type PaymentStatusDto = {
    /**
     * @description Заказ оплачен
     */
    checked?: boolean
    /**
     * @description Дата оплаты
     */
    date?: string | null
  }

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModelOfDealInWorkOutOfRangeStatusException = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  export type DealInWorkDto = {
    in_work_status?: Schemas.InWorkStatus
  }

  export type FullOrdersInfoDto = {
    /**
     * @description Роль
     */
    role?: Schemas.OrderRole
    /**
     * @description Вкладка
     */
    tab?: Schemas.OrderTab
    /**
     * @description Id контакта
     */
    contact_id?: number | null
    /**
     * @description Id подразделений
     */
    departments?: number[] | null
  }

  export type OrdersCountersDto = {
    /**
     * @description Роль
     */
    role?: Schemas.OrderRole
    /**
     * @description Id контакта
     */
    contact_id?: number | null
    /**
     * @description Id подразделений
     */
    departments?: number[] | null
    /**
     * @description При выставлении этого флага будут отправляться счетчики только для заказов(без грузов)
     */
    only_orders_counters?: boolean
  }

  export type TransportCompanyView = {
    /**
     * @description Id транспортной компании
     */
    id?: number
    /**
     * @description Название транспортной компании
     */
    name?: string | null
    /**
     * @description Ссылка на трек
     */
    tracking_url_template?: string | null
    /**
     * @description Можно ли сформировать ссылку на трек с параметром
     */
    has_tracking_url?: boolean
  }

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModelOfPersonalInvitationNotFoundException = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  export type ProblemDetails = ({
    type?: string | null
    title?: string | null
    status?: number | null
    detail?: string | null
    instance?: string | null
  } & Record<string, unknown | null>)

  export type LoadCopyViewForAtiTrucker = {
    id?: string
    firm_id?: number
    added_at?: string
    updated_at?: string
    distance?: number
    distance_type?: number
    contact_id1?: number
    contact_id2?: number | null
    first_date?: string
    last_date?: string
    date_type?: Schemas.DateType
    krugoreis?: boolean
    weight?: number
    volume?: number
    adr?: number
    cargo_type?: string | null
    car_type?: string | null
    pack_type?: string | null
    money_type?: string | null
    money_type_id?: number
    fixed_rate?: boolean
    pallet_count?: number
    size?: Schemas.LoadSize | null
    from_city?: string | null
    to_city?: string | null
    rate_sum?: number
    sum_with_nds?: number
    sum_without_nds?: number
    rate_sum_per_km?: number
    sum_with_nds_per_km?: number
    sum_without_nds_per_km?: number
    rate_sum_per_km_currency?: string | null
    from_city_id?: number
    from_city_latitude?: number | null
    from_city_longitude?: number | null
    to_city_id?: number
    to_city_latitude?: number | null
    to_city_longitude?: number | null
    periodicity_id?: Schemas.Periodicity
    currency?: string | null
    currency_eng?: string | null
    loading_type?: string | null
    unloading_type?: string | null
    loading_street?: string | null
    unloading_street?: string | null
    loading_organization_id?: string | null
    unloading_organization_id?: string | null
    loading_address_id?: string | null
    unloading_address_id?: string | null
    note?: string | null
    dogruz_type?: string | null
    belt_count?: number
    sbor_gruz?: boolean
    temperature_from?: number | null
    temperature_to?: number | null
    stsepka?: boolean
    pnevmohod?: boolean
    koniki?: boolean
    tir?: boolean
    cmr?: boolean
    t1?: boolean
    san_passport?: boolean
    trucks_quantity?: number
    loading_time_start?: string | null
    loading_time_end?: string | null
    unloading_time_start?: string | null
    unloading_time_end?: string | null
    prepay_percent_enabled?: boolean
    on_unloading?: boolean
    pay_days?: number
    direct_contract?: boolean
    torg?: boolean
    is_round_the_clock?: boolean
    unload_first_date?: string | null
    unload_last_date?: string | null
    extra_points?: Schemas.ExtraPointViewForAtiTrucker[] | null
    account?: Schemas.AccountViewForAtiTrucker | null
    boards?: Schemas.LoadBoard[] | null
    is_tracking?: boolean
    /**
     * @description Требуемая грузоподъёмность в тоннах
     */
    required_capacity?: number | null
  }

  export type ExtraPointViewForAtiTrucker = {
    city_id?: number
    city?: string | null
    type?: string | null
    street?: string | null
    organization_id?: string | null
    address_id?: string | null
    ordinal_id?: number
    latitude?: number | null
    longitude?: number | null
    loading_cargos?: Schemas.LoadingCargo[] | null
    unloading_cargos?: Schemas.UnloadingCargo[] | null
  }

  export type AccountViewForAtiTrucker = {
    account_id?: string | null
    full_firm_name?: string | null
    firm_name?: string | null
    brand?: string | null
    ownership?: string | null
    ownership_id?: number
    location?: Schemas.FirmServiceCity | null
    inn?: string | null
    time_zone_minutes?: number
    is_rrd?: boolean
    loads_access?: Schemas.FirmAccessLevel
    claims_count?: number
    bad_partner_mentions_count?: number
    bad_partner_firms_count?: number
    firm_type_id?: number
    firm_type?: string | null
    recommendation_count?: number
    passport?: Schemas.PassportViewForAtiTrucker | null
    paid_services?: Schemas.PayedService[] | null
    contacts?: Schemas.Contact[] | null
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
    status_description?: string | null
    negative_points?: number
  }

  export type LoadBoard = {
    /**
     * @description ID площадки
     */
    board_id?: string | null
    /**
     * @description Время публикации груза на площадке
     */
    publication_time?: string | null
    /**
     * @description Способ публикации груза на площадке
     */
    publication_option?: number
    /**
     * @description Опубликован ли груз на площадке
     */
    is_published?: boolean
    is_reservation_enabled?: boolean
  }

  export type DealViewForAtiTrucker = {
    deal_id?: string | null
    load_id?: string | null
    deal_load_id?: string | null
    firm_id?: number
    department_id?: number | null
    taker_firm_id?: number
    taker_contact_id?: number | null
    taker_department_id?: number | null
    rate_type?: Schemas.RateType | null
    updated_at?: string | null
    started_at?: string | null
    finished_at?: string | null
    /**
     * @description Дата отмены приглашения "Оформить Заказ"
     */
    invite_cancellation_date?: string | null
    status?: Schemas.DealState
    denial_reason?: string | null
    is_viewed?: boolean
    signer_id?: string | null
    requisite_id?: string | null
    taker_requisite_id?: string | null
    deal_note?: string | null
    driver_id?: string | null
    truck_info_id?: string | null
    trailer_id?: string | null
    semi_trailer_id?: string | null
    driver?: Schemas.DriverRmqModel | null
    truck_info?: Schemas.TruckInfoRmqModel | null
    trailer?: Schemas.TruckInfoRmqModel | null
    semi_trailer?: Schemas.TruckInfoRmqModel | null
    document_id?: string | null
    document_url?: string | null
    document_name?: string | null
    document_extension?: string | null
    is_signed?: boolean
    extra_document_id?: string | null
    extra_document_name?: string | null
    extra_document_type?: Schemas.DocumentType | null
    old_document_id?: string | null
    old_document_url?: string | null
    rate?: number | null
    sum_with_nds?: number | null
    sum_without_nds?: number | null
    currency?: number | null
    money_type?: number | null
    deal_kind?: Schemas.DealKinds
    auction_id?: string | null
    pay_docs?: Schemas.PayDocsRmqModel[] | null
    doc_editor_firm_id?: number | null
    tracker_cargo_owner_access?: Schemas.TrackerOwnerAccess | null
    /**
     * @description флаг "Укажу данные позже"
     */
    driver_data_expected?: boolean | null
    /**
     * @description Статусная модель перевозки
     *             
     * * `0` — Простая перевозка
     * * `1` — Первая миля
     * * `2` — Последняя миля
     * * `3` — Порожний контейнер
     */
    in_work_status_model?: Schemas.InWorkStatusModel
    in_work?: Schemas.DealInWorkRmqModel | null
    data_for_driver?: Schemas.DataForDriverViewForAtiTrucker | null
    data_for_drivers?: Schemas.DataForDriverViewForAtiTrucker[] | null
    files?: Schemas.DealFileRmqModel[] | null
    load?: Schemas.LoadCopyForDealRmqModel | null
    cargo_owner_agent?: Schemas.AgentRmqModel | null
    carrier_agent?: Schemas.AgentRmqModel | null
    /**
     * @description Ставка в рублях
     */
    rate_total?: number
    /**
     * @description Дата и время окончиния возможности резервации Заказа
     */
    end_of_reservation?: string
    /**
     * @description Дополнительные документы в Заказе
     */
    documents?: Schemas.DocumentInfoRmqModel[] | null
    /**
     * @description Оплата в Заказе
     */
    payment?: Schemas.DealPayment | null
    ati_id?: string | null
    cargo_owner_ati_id?: string | null
    is_pass_through?: boolean
    previous_driver?: Schemas.DriverRmqModel | null
    previous_truck?: Schemas.TruckInfoRmqModel | null
    previous_trailer?: Schemas.TruckInfoRmqModel | null
    previous_semitrailer?: Schemas.TruckInfoRmqModel | null
    /**
     * @description Доступ к документу
     */
    document_access?: Schemas.DealDocumentAccess
    /**
     * @description Список складов с Временными окнами с доступом к документу
     */
    timeslots_warehouse_ids?: number[] | null
    /**
     * @description Ссылка на документ в pdf
     */
    document_file_url?: string | null
    /**
     * @description Показывать ли ставку водителю
     */
    should_show_rate_to_driver?: boolean
  }

  export type DriverRmqModel = {
    /**
     * @description Имя водителя
     */
    first_name?: string | null
    /**
     * @description Фамилия водителя
     */
    second_name?: string | null
    /**
     * @description Отчество водителя
     */
    patronymic?: string | null
    /**
     * @description Номер телефона
     */
    phone_number?: string | null
    /**
     * @description Номер водительского удостоверения
     */
    driver_license_number?: string | null
    /**
     * @description Серия паспорта
     */
    passport_series?: string | null
    /**
     * @description Номер паспорта
     */
    passport_number?: string | null
    /**
     * @description Кем выдан
     */
    passport_issued_by?: string | null
    /**
     * @description Когда выдан
     */
    passport_when_issued?: string | null
    /**
     * @description Прописка
     */
    registration?: string | null
    /**
     * @description Флаг привлеченного водителя (со стороны)
     */
    is_attracted_driver?: boolean
    /**
     * @description Краткое описание водителя
     */
    description?: string | null
    /**
     * @description Фирма от которой привлечен водитель.
     */
    attracted_from?: string | null
    origin?: Schemas.DriverOrigin
    date_of_birth?: string | null
    department_code_in_passport?: string | null
    driver_inn?: string | null
    external_id?: string | null
  }

  export type TruckInfoRmqModel = {
    /**
     * @description Тип транспортного средства
     */
    type?: Schemas.TruckType
    /**
     * @description Описание транспортного средства
     */
    description?: string | null
    /**
     * @description Марка
     */
    brand_id?: number | null
    /**
     * @description Модель
     */
    model?: string | null
    /**
     * @description Номер
     */
    number?: string | null
    /**
     * @description Телефон
     */
    phone_number?: string | null
    /**
     * @description Тип владения ТС
     *             
     * * `0` - Собственное
     * * `1` - Привлеченное
     * * `2` - Аренда
     * * `3` - Лизинг
     * * `4` - Совместная собственность (супругов)
     * * `5` - Безвозмездное пользование
     */
    ownership_type?: Schemas.TruckOwnershipType | null
    /**
     * @description Тип Кузова
     */
    car_type_id?: number
    /**
     * @description Грузоподъемность
     */
    capacity?: number | null
    /**
     * @description Объем
     */
    volume?: number | null
    /**
     * @description Длина
     */
    length?: number | null
    /**
     * @description Ширина
     */
    width?: number | null
    /**
     * @description Высота
     */
    height?: number | null
    /**
     * @description Год выпуска
     */
    manufacture_year?: number | null
    /**
     * @description Размерность контейнера
     */
    dimension?: number | null
    /**
     * @description Номер ПТС
     */
    truck_passport_number?: string | null
    /**
     * @description Способность возить реф-контейнеры
     */
    can_refrigerator?: boolean | null
    /**
     * @description Есть GenSet
     */
    has_gen_set?: boolean | null
    /**
     * @description Имя владельца по СТС
     */
    truck_owner_name?: string | null
    /**
     * @description Способность перевозить тяжелые контейнеры
     *  
     */
    can_carry_heavy_container?: boolean | null
    /**
     * @description Способность перевозить высокие контейнеры
     */
    can_carry_tall_container?: boolean | null
    /**
     * @description Внешний идентификатор
     */
    external_id?: string | null
    /**
     * @description Проверено
     */
    verified?: boolean
    /**
     * @description Идентификатор ТС, с которым было связано ТС во время выполнения последнего Заказа
     */
    last_deal_related_id?: string | null
    /**
     * @description Источник создания Транспорта
     */
    origin?: Schemas.TruckOrigin
    sensors?: Schemas.SensorRmqModel[] | null
    /**
     * @description VIN
     */
    vin?: string | null
    /**
     * @description СТС
     */
    vrc?: string | null
    /**
     * @description Номер кузова
     */
    body_number?: string | null
  }

  export type SensorRmqModel = {
    sensor_id?: number
    sensor_name?: string | null
    provider_id?: number
    provider_sensor_id?: string | null
    is_active?: boolean
    unactivate_date?: string | null
    host?: Schemas.SensorHostRmqModel | null
  }

  export type SensorHostRmqModel = {
    url?: string | null
  }

  export type PayDocsRmqModel = {
    firm_id?: number
    deal_id?: string
    documents_copies?: Schemas.DocumentStatusInfoRmqModel | null
    documents_original?: Schemas.DocumentStatusInfoRmqModel | null
    closing_documents?: Schemas.DocumentStatusInfoRmqModel | null
    payment?: Schemas.PaymentStatusRmqModel | null
  }

  export type DocumentStatusInfoRmqModel = {
    checked?: boolean
    date?: string | null
  }

  export type PaymentStatusRmqModel = {
    paid?: boolean
    date?: string | null
  }

  /**
   * @names
   * * `Hide` — 0
   * * `Show` — 1
   */
  export type TrackerOwnerAccess = 0 | 1

  export type DealInWorkRmqModel = {
    /**
     * @description Статус "В работе"
     */
    status?: Schemas.InWorkStatus
    /**
     * @description Дата выставления статуса
     */
    date?: string
    /**
     * @description Контакт, выставивший статус
     */
    contact_id?: number | null
    /**
     * @description Номер телефона трекера, откуда получен статус
     */
    tracker_phone?: number | null
  }

  export type DataForDriverViewForAtiTrucker = {
    points?: Schemas.DriverTruckerPointViewForAtiTrucker[] | null
    tracker_phone?: number
    deal_id?: string
    id?: string
    revoked?: boolean
    updated_at?: string
  }

  export type DriverTruckerPointViewForAtiTrucker = {
    /**
     * @description Id точки из Заказа
     */
    deal_point_id?: string
    /**
     * @description Порядковый номер точки
     */
    ordinal_id?: number
    /**
     * @description Время
     */
    time_with_offset?: string
    /**
     * @description Время до (если есть)
     */
    time_to_with_offset?: string | null
    /**
     * @description Время
     */
    time?: string | null
    /**
     * @description Время до (если есть)
     */
    time_to?: string | null
    /**
     * @description Дата
     */
    date?: string | null
    /**
     * @description Дата до (если есть)
     */
    date_to?: string | null
    /**
     * @description Широта точки
     */
    lat?: number | null
    /**
     * @description Долгота точки
     */
    lon?: number | null
    /**
     * @description Адрес
     */
    address?: string | null
    /**
     * @description Id города\
     * Значение из [словаря городов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    city_id?: number
    /**
     * @description Id региона\
     * Значение из [словаря регионов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    region_id?: number
    /**
     * @description Id страны\
     * Значение из [словаря стран АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    country_id?: number
    /**
     * @description Тип точки
     */
    point_type?: Schemas.DealPointTypes
    /**
     * @description Список контактов (не более 10 контактов)
     */
    contact_persons?: Schemas.ContactPerson2[] | null
    /**
     * @description Примечание (до 1000 символов)
     */
    note?: string | null
    /**
     * @description Айди склада из временных окон
     */
    timeslots_warehouse_id?: number | null
  }

  export type DealFileRmqModel = {
    id?: string
    access?: Schemas.DealFileAccess
    add_date?: string
    deal_id?: string
    owner_firm_id?: number
    contact_id?: number
    file_name?: string | null
    size?: number
    link?: string | null
    file_id?: string | null
    action_status?: Schemas.DealFileActionStatus
    source_type?: Schemas.DealFileSourceTypes
    source_file_type?: Schemas.DealFileSourceFileTypes
    file_type?: Schemas.DealFileType
    /**
     * @description Список складов с Временными окнами с доступом к файлу
     */
    timeslots_warehouse_ids?: number[] | null
  }

  /**
   * @names
   * * `None` — 0
   * * `Add` — 1
   * * `Remove` — 2
   * * `ChangeAccess` — 3
   */
  export type DealFileActionStatus = 0 | 1 | 2 | 3

  export type LoadCopyForDealRmqModel = {
    contact_id1?: number
    department_id?: number | null
    load_number?: string | null
    note?: string | null
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
    boards?: Schemas.LoadBoardForDealRmqModel[] | null
    updated_at?: string
    order_number?: string | null
    loading_city_id?: number
    loading_street?: string | null
    loading_first_date?: string | null
    loading_time_start?: string | null
    loading_is_round_the_clock?: boolean
    unloading_city_id?: number
    unloading_street?: string | null
    unloading_first_date?: string | null
    unloading_time_start?: string | null
    unloading_is_round_the_clock?: boolean
    loading_cargoes_for_loading?: Schemas.LoadingCargo[] | null
    extra_points?: Schemas.LoadExtraPoint[] | null
    trucks_quantity?: number
    truck_attribs?: number
    dogruz_type?: Schemas.DogruzType
    krugoreis?: boolean
    car_type?: number
  }

  export type LoadBoardForDealRmqModel = {
    is_published?: boolean
    board_id?: string | null
  }

  export type AgentRmqModel = {
    deal_id?: string
    type?: Schemas.DealAgentType
    contact_name?: string | null
    firm_name?: string | null
    ownership?: string | null
    inn?: string | null
    ogrn?: string | null
  }

  /**
   * @names
   * * `Carrier` — 0
   * * `CargoOwner` — 1
   */
  export type DealAgentType = 0 | 1

  export type DocumentInfoRmqModel = {
    /**
     * @description Id документа
     */
    id?: string | null
    /**
     * @description Id Заказа
     */
    deal_id?: string
    /**
     * @description Id нового документа
     */
    old_id?: string | null
    /**
     * @description Фирма, отредактировавшая документ
     */
    editor?: number
    /**
     * @description Адрес просмотра договора
     */
    url?: string | null
    /**
     * @description Адрес просмотра старого договора
     */
    old_url?: string | null
    /**
     * @description Имя документа
     */
    name?: string | null
    /**
     * @description Расширение документа
     */
    extension?: string | null
    /**
     * @description Причина отклонения документа
     */
    reason?: string | null
    /**
     * @description Отклонивший документ
     */
    actor?: Schemas.SimpleUser | null
    /**
     * @description Документ подписан перевозчиком
     */
    is_signed?: boolean
    /**
     * @description Тип документа
     */
    document_type?: Schemas.DocumentType
    /**
     * @description Доступ к документу
     */
    document_access?: Schemas.DealDocumentAccess
    /**
     * @description Ссылка на документ в pdf
     */
    document_file_url?: string | null
    document_action_status?: Schemas.DealDocumentActionStatus
    timeslots_warehouse_ids?: number[] | null
  }

  /**
   * @names
   * * `None` — 0
   * * `ChangeAccess` — 1
   */
  export type DealDocumentActionStatus = 0 | 1

  export type DealPayment = {
    deal_id?: string | null
    load_id?: string
    rates?: (Record<string, unknown> & Record<string, Schemas.RateInfo>) | null
    prepay_percent?: number | null
    max_bank_days?: number | null
    prepay_percent_enabled?: boolean
    on_unloading?: boolean
    max_bank_days_enabled?: boolean
    payment_source?: Schemas.PaymentSource
    source_id?: string | null
  }

  export type RateInfo = {
    /**
     * @description Сумма
     */
    rate?: number
    /**
     * @description Тип оплаты
     */
    rate_type?: Schemas.RateType
    /**
     * @description ID валюты
     */
    currency?: number
    /**
     * @description Является ли ставка выбранной
     */
    active?: boolean
  }

  /**
   * @description Источник параметров оплаты
   *             
   *  * `0` — Нет
   *  * `1` — Встречное предложение
   *  * `2` — Торги
   *  * `3` — Груз
   *  * `4` — Предложение груза
   *  * `5` — Предложение по контракту
   *  
   * @names
   * * `None` — 0
   * * `CounterOffer` — 1
   * * `Auction` — 2
   * * `Load` — 3
   * * `Invitation` — 4
   * * `Contract` — 5
   */
  export type PaymentSource = 0 | 1 | 2 | 3 | 4 | 5

  export type AtiTruckerDealsFilterDto = {
    number: string
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
    load?: Schemas.LoadView2 | null
    deal?: Schemas.DealView2 | null
    /**
     * @description Пользовательские настройки
     */
    custom_settings?: (Record<string, unknown> & Record<string, Schemas.CustomSettingView>) | null
  }

  export type LoadView2 = {
    /**
     * @description Id первого контакта груза
     */
    contact_id1?: number
    /**
     * @description Id второго контакта груза
     */
    contact_id2?: number | null
    /**
     * @description Id копии груза
     */
    id?: string
    /**
     * @description Сгенерированный номер груза
     */
    load_number?: string | null
    /**
     * @description Id исходного груза
     */
    parent_id?: string | null
    /**
     * @description Id груза, по которому будут искаться Торги
     */
    load_id_for_auction?: string
    /**
     * @description Id подразделения, которому принадлежит груз
     */
    department_id?: number | null
    /**
     * @description Id фирмы, которой принадлежит груз
     */
    alias_id?: string | null
    /**
     * @description Дата и время последнего обновления груза
     */
    updated_at?: string
    /**
     * @description Дата добавления груза
     */
    added_at?: string
    /**
     * @description Дата, с которой возможна загрузка
     */
    first_date?: string
    /**
     * @description Дата, с которой загрузка заканчивается
     */
    last_date?: string
    /**
     * @description Дата, начиная с которой можно разгрузить груз
     */
    unload_first_date?: string | null
    /**
     * @description Дата, до которой можно разгрузить груз
     */
    unload_last_date?: string | null
    /**
     * @description Расстояние
     */
    distance?: number
    /**
     * @description Минимальный тариф страхования
     */
    insured_min_tariff?: number
    /**
     * @description Примечание к грузу
     */
    note?: string | null
    /**
     * @description Тип временного интервала загрузки
     */
    date_type?: Schemas.DateType
    /**
     * @description Периодичность загрузки
     */
    periodicity_id?: Schemas.Periodicity
    /**
     * @description Номер заказа
     */
    order_number?: string | null
    hidden?: boolean
    /**
     * @description Включен ли кругорейс
     */
    krugoreis?: boolean
    /**
     * @description Описание параметров загрузки
     */
    loading?: Schemas.ExtendedLoadPoint | null
    /**
     * @description Описание дополнительных точек маршрута
     */
    extra_points?: Schemas.LoadExtraPoint[] | null
    /**
     * @description Описание параметров разгрузки
     */
    unloading?: Schemas.ExtendedLoadPoint | null
    /**
     * @description Описание габаритов груза
     */
    cargo?: Schemas.LoadCargo | null
    /**
     * @description Описание параметров желаемого транспорта
     */
    transport?: Schemas.LoadTransport | null
    /**
     * @description Параметры площадок груза
     */
    boards?: Schemas.LoadBoard[] | null
    /**
     * @description Параметры Торгов
     */
    auction?: Schemas.Auction | null
    payment?: Schemas.LoadPayment | null
    /**
     * @description Источник публикации груза
     */
    cargo_source?: string | null
  }

  export type ExtendedLoadPoint = Schemas.LoadPoint & {
    /**
     * @description Id региона\
     * Значение из [словаря регионов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    region_id?: number | null
    /**
     * @description Id страны\
     * Значение из [словаря стран АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    country_id?: number | null
    /**
     * @description Список ID ближайших крупных городов, их регионов и стран
     */
    extended_large_cities?: Schemas.LargeCityWithRegion[] | null
  }

  export type LargeCityWithRegion = {
    /**
     * @description Id города\
     * Значение из [словаря городов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    city_id?: number
    /**
     * @description Id региона\
     * Значение из [словаря регионов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    region_id?: number | null
    /**
     * @description Id страны\
     * Значение из [словаря стран АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    country_id?: number | null
  }

  /**
   * @description Точка маршрута груза
   */
  export type LoadPoint = {
    /**
     * @description Id точки по базе ФИАС
     */
    fias_id?: string
    /**
     * @description Id города\
     * Значение из [словаря городов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    city_id?: number
    /**
     * @description Широта
     */
    latitude?: number | null
    /**
     * @description Долгота
     */
    longitude?: number | null
    /**
     * @description Адрес
     */
    street?: string | null
    /**
     * @description Id из справочника организаций
     */
    organization_id?: string | null
    /**
     * @description Id адреса в организации
     */
    address_id?: string | null
    /**
     * @description Время "От"
     */
    time_start?: string | null
    /**
     * @description Время "До"
     */
    time_end?: string | null
    /**
     * @description Круглосуточно
     */
    is_round_the_clock?: boolean
    /**
     * @description Список Id ближайших крупных городов
     */
    large_cities?: number[] | null
    /**
     * @description Расстояния до ближайших крупных городов
     */
    large_cities_with_distance?: Schemas.LargeCityWithDistance[] | null
    loading_cargos?: Schemas.LoadingCargo[] | null
    organization?: Schemas.Organization | null
  }

  /**
   * @description Сущность, описывающая ближайший крупный город
   */
  export type LargeCityWithDistance = {
    /**
     * @description Id города\
     * Значение из [словаря городов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    city_id?: number
    /**
     * @description Расстояние
     */
    distance?: number
  }

  export type Auction = {
    auction_id?: string
    load_id?: string
    active_deal_id?: string | null
    finished?: boolean
    start_rate?: number
    actual_rate?: number
    currency?: number
    step?: number
    payment_type?: Schemas.AuctionPaymentType
    start_date?: string | null
    end_date?: string | null
    time_to_provide_documents?: number | null
    auto_renew?: boolean
    /**
     * @description Время, на которое надо сдвигать окончание аукциона при включенном AutoRenew
     */
    renew_time?: number | null
    /**
     * @description Максимально допустимое время, на которое можно сдвинуть окончание аукциона при включенном AutoRenew
     */
    max_renew_time?: number | null
    raise_bid?: boolean
    max_rate?: number | null
    raise_bid_interval?: number | null
    win_date?: string | null
    finish_type?: Schemas.AuctionFinishType
    load_last_date?: string | null
    boards?: Schemas.LoadBoard[] | null
    auction_rates?: Schemas.AuctionRate[] | null
    actual_rate_with_vat?: number
    actual_rate_without_vat?: number
    duration?: number
    start_since_first_bet?: boolean
    state?: Schemas.AuctionState
    /**
     * @description Сделанная ставка
     */
    winner_rate?: Schemas.AuctionRate | null
    has_winner?: boolean
    has_possible_winner?: boolean
    /**
     * @description Для совместимости с грузом
     */
    has_possible_winners?: boolean
    should_select_auction_winner_manually?: boolean
    winner_ati_id?: number | null
    participants_count?: number
    winner_criterion?: Schemas.WinnerCriteria
    is_pass_through_copy?: boolean
    pass_through_info?: Schemas.PassThroughInfo | null
    custom_settings?: (Record<string, unknown> & Record<string, Schemas.AuctionCustomSetting>) | null
  }

  /**
   * @description Тип оплаты
   * 
   * * `22` — Любая
   * * `1` — Наличные
   * * `23` — По карте
   * * `24` — Безналичные с НДС
   * * `25` — Безналичные без НДС
   *  
   * @names
   * * `Cash` — 1
   * * `Any` — 22
   * * `OnCard` — 23
   * * `CashlessWithNds` — 24
   * * `CashlessWithoutNds` — 25
   */
  export type AuctionPaymentType = 1 | 22 | 23 | 24 | 25

  export type AuctionRate = {
    auction_rate_id?: string
    added_at?: string
    /**
     * @description Фирма, оставившая заявку
     */
    rate_firm?: Schemas.FirmStarsInfo | null
    /**
     * @description Ставка на груз, которую поставил пользователь
     */
    rate?: number
    /**
     * @description Ставка c ндс на груз, которую поставил пользователь
     */
    rate_with_vat?: number
    /**
     * @description Ставка без ндс на груз, которую поставил пользователь
     */
    rate_without_vat?: number
    /**
     * @description Тип оплаты
     */
    payment_type?: Schemas.AuctionPaymentType | null
    /**
     * @description Статус ставки
     */
    state?: Schemas.AuctionRateState
    loading_date?: string | null
    rate_place_type?: Schemas.RatePlaceType
  }

  export type FirmStarsInfo = {
    score?: number
    status?: Schemas.FirmStatus
    name?: string | null
    ati_id?: string | null
    contact_name?: string | null
    claims_count?: number
    recommendations_count?: number
    docs_count?: number
    /**
     * @description Количество фирм, которые написали о данной фирме на форуме Недобросовестных партнеров
     */
    bad_partner_firms_count?: number
  }

  /**
   * @names
   * * `Undecided` — 0
   * * `Winner` — 1
   * * `CargoOwnerDeclineDocument` — -8
   * * `WinnerDeclineDocument` — -7
   * * `WinnerRefuseDeal` — -6
   * * `CargoOwnerRefuseDeal` — -5
   * * `WinnerRefused` — -4
   * * `ExWinner` — -3
   * * `Refused` — -2
   * * `Loser` — -1
   */
  export type AuctionRateState = 0 | 1 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1

  /**
   * @names
   * * `Direct` — 0
   * * `Relative` — 1
   * * `Foreign` — 2
   */
  export type RatePlaceType = 0 | 1 | 2

  /**
   * @names
   * * `OnAndNoRates` — 0
   * * `OnAndHasRates` — 1
   * * `FinishedWithoutOtherBetsAndNeedChooseAction` — -8
   * * `FinishedWithOtherBetsAndNeedChooseAction` — -7
   * * `AuctionFinishedWithWinnerFromOtherAuction` — -6
   * * `FinishedAndAwaitingNextNextWinner` — -5
   * * `FinishedAndAwaitingDocsFromNewWinner` — -4
   * * `FinishedAndAwaitingNextWinner` — -3
   * * `FinishedAndAwaitingDocs` — -2
   * * `FinishedAndNoRates` — -1
   */
  export type AuctionState = 0 | 1 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1

  /**
   * @names
   * * `Rate` — 0
   * * `RateAndLoadingDate` — 1
   */
  export type WinnerCriteria = 0 | 1

  export type PassThroughInfo = {
    show_margin?: boolean
    marge?: number
    is_root?: boolean
    parent_boards?: Schemas.BoardInfo[] | null
    parent_board_list?: string[] | null
    parent_load?: Schemas.ParentLoadInfo | null
  }

  export type BoardInfo = {
    color?: string | null
    id?: string | null
    name?: string | null
    original_name?: string | null
  }

  export type ParentLoadInfo = {
    id?: string
    number?: string | null
  }

  export type AuctionCustomSetting = {
    value?: string | null
    firm_id?: number | null
    contact_id?: number | null
  }

  export type LoadPayment = {
    /**
     * @description Id валюты
     */
    currency_id?: number
    /**
     * @description Ставка (любая, на карту, нал)
     */
    money_type?: number
    /**
     * @description Сама ставка
     */
    rate_sum?: number
    /**
     * @description Ставка с НДС
     */
    sum_with_nds?: number
    /**
     * @description Ставка без НДС
     */
    sum_without_nds?: number
    /**
     * @description Процент предоплаты
     */
    prepay_percent?: number
    /**
     * @description Включена ли предоплата
     */
    prepay_percent_enabled?: boolean
    /**
     * @description Через сколько банковских дней оплата
     */
    pay_days?: number
    /**
     * @description Условия оплаты, используется только в RMQ (PayDaysEnabled, FixedRate, Torg, DirectContract, InFuel, OnUnloading, HideResponses)
     */
    pay_attribs?: number
    /**
     * @description Включена ли функция "через Х банковских дней"
     */
    pay_days_enabled?: boolean
    /**
     * @description Истина, если ставка задана, Ложь если запрос ставки
     */
    fixed_rate?: boolean
    /**
     * @description Возможен ли торг
     */
    torg?: boolean
    /**
     * @description Прямой договор
     */
    direct_contract?: boolean
    /**
     * @description Оплата топливом
     */
    in_fuel?: boolean
    /**
     * @description На выгрузке
     */
    on_unloading?: boolean
    /**
     * @description Скрыть отзывы других перевозчиков 
     */
    hide_responses?: boolean
    /**
     * @description Типы оплаты, которые он принимает (флаги: 1 - наличные, 2 - с ндс безнал, 4 - без ндс безнал )
     */
    accept_payment_types?: number
  }

  export type DealView2 = {
    /**
     * @description Id Заказа
     */
    deal_id?: string
    /**
     * @description Статус Заказа
     */
    status?: Schemas.DealState
    /**
     * @description Статус Заказа контрагента
     */
    counterparty_status?: Schemas.DealState
    /**
     * @description Причина отмены Заказа
     */
    denial_reason?: string | null
    /**
     * @description Id груза
     */
    load_id?: string
    /**
     * @description Id фирмы перевозчика
     */
    taker_firm_id?: number
    /**
     * @description Id контакта перевозчика
     */
    taker_contact_id?: number
    /**
     * @description Список контактов перевозчика
     */
    taker_contact_list?: number[] | null
    /**
     * @description Id подразделения перевозчика
     */
    taker_department_id?: number | null
    /**
     * @description Id фирмы грузовладельца
     */
    cargo_owner_firm_id?: number
    /**
     * @description Id подразделения грузовладельца
     */
    cargo_owner_department_id?: number | null
    /**
     * @description AtiId фирмы грузовладельца
     */
    cargo_owner_ati_id?: string | null
    /**
     * @description AtiId фирмы перевозчика
     */
    taker_ati_id?: string | null
    /**
     * @description Дата и время окончиния возможности резервации Заказа
     */
    end_of_reservation?: string
    /**
     * @description Дата последнего обновления Заказа
     */
    updated_at?: string
    /**
     * @description Дата начала Заказа
     */
    started_at?: string | null
    /**
     * @description Дата завершения Заказа
     */
    finished_at?: string | null
    payment?: Schemas.DealPaymentView2 | null
    /**
     * @description Цена в Заказе
     */
    rate?: number
    /**
     * @description Тип оплаты в Заказе (нал, ндс. без ндс)
     */
    rate_type?: Schemas.RateType
    /**
     * @description Тип валюты в Заказе
     */
    currency?: number
    /**
     * @description Тип оплаты 
     */
    money_type?: number
    /**
     * @description Заказ был просмотрена заинтересованной стороной
     */
    is_viewed?: boolean
    /**
     * @description Id Торгов, по которым был создан Заказ
     */
    auction_id?: string | null
    /**
     * @description Id копии груза в Заказе
     */
    deal_load_id?: string
    /**
     * @description Id реквизитов (появляется, когда происходит взятие груза - Status >= 1)
     */
    requisites_id?: string | null
    /**
     * @description Id подписанта (появляется, когда происходит взятие груза - Status >= 1)
     */
    signer_id?: string | null
    /**
     * @description Id водителя (появляется, когда происходит взятие груза - Status >= 1)
     */
    driver_id?: string | null
    /**
     * @description Сокращенная информация о водителе (ФИО, телефон)
     */
    driver?: Schemas.ShortDriverInfo | null
    /**
     * @description Id ТС (появляется, когда происходит взятие груза - Status >= 1)
     */
    truck_info_id?: string | null
    /**
     * @description Id полуприцепа (появляется, когда происходит взятие груза - Status >= 1)
     */
    semitrailer_id?: string | null
    /**
     * @description Id прицепа (появляется, когда происходит взятие груза - Status >= 1)
     */
    trailer_id?: string | null
    deal_note?: string | null
    /**
     * @description Тип Заказа
     */
    deal_kind?: Schemas.DealKinds
  }

  export type DealPaymentView2 = {
    /**
     * @description Сумма оплаты
     */
    rate_sum?: number
    /**
     * @description Валюта\
     * Значение из [словаря валют АТИ](https://ati.su/developers/api/dictionaries/cargoes/#get-v1.0-dictionaries-currencyTypes)
     */
    currency_id?: number
    /**
     * @description Сумма оплаты в случае оплаты с НДС
     */
    sum_with_nds?: number
    /**
     * @description Валюта в случае оплаты с НДС\
     * Значение из [словаря валют АТИ](https://ati.su/developers/api/dictionaries/cargoes/#get-v1.0-dictionaries-currencyTypes)
     */
    nds_currency_id?: number
    /**
     * @description Сумма оплаты в случае оплаты без НДС
     */
    sum_without_nds?: number
    /**
     * @description Валюта в случае оплаты без НДС\
     * Значение из [словаря валют АТИ](https://ati.su/developers/api/dictionaries/cargoes/#get-v1.0-dictionaries-currencyTypes)
     */
    not_nds_currency_id?: number
    /**
     * @description Процент предоплаты
     */
    prepay_percent?: number
    /**
     * @description Количество банковских дней для оплаты
     */
    pay_days?: number
    /**
     * @description Включена ли предоплата
     */
    prepay_percent_enabled?: boolean
    /**
     * @description Предоплата на разгрузке
     */
    on_unloading?: boolean
    /**
     * @description Предоплата топливом
     */
    in_fuel?: boolean
    /**
     * @description Включена ли функция "оплата через Х банковских дней"
     */
    pay_days_enabled?: boolean
    /**
     * @description Истина, если ставка задана, Ложь если запрос ставки
     */
    fixed_rate?: boolean
    /**
     * @description Присутствует ли торг
     */
    torg?: boolean
    /**
     * @description Прямой договор
     */
    direct_contract?: boolean
    /**
     * @description тип оплаты, значение из словаря MoneyType
     */
    money_type?: number
    /**
     * @description Источник параметров оплаты
     */
    source?: Schemas.PaymentSource
  }

  export type ShortDriverInfo = {
    /**
     * @description Имя водителя
     */
    first_name?: string | null
    /**
     * @description Фамилия водителя
     */
    second_name?: string | null
    /**
     * @description Отчество водителя
     */
    patronymic?: string | null
    /**
     * @description Номер телефона
     */
    phone_number?: string | null
  }

  export type CustomSettingView = {
    value?: string | null
    firm_id?: number | null
    contact_id?: number | null
  }

  export type InternalFullOrdersInfo = {
    /**
     * @description Роль
     */
    role?: Schemas.OrderRole
    /**
     * @description Вкладка
     */
    tab?: Schemas.OrderTab
    /**
     * @description Id фирмы
     */
    firm_id?: number
    /**
     * @description Id контакта
     */
    contact_id?: number
    /**
     * @description Подразделения, по которым нужно отфильтровать заказы (при необходимости)
     */
    filter_departments?: number[] | null
  }

  export type OrderFilter = {
    current_firm_id?: number
    owner_firm_id?: number | null
    taker_firm_id?: number | null
    with_reconciliation_auctions?: boolean
    with_reserved?: boolean
    with_auctions?: boolean
    with_child_entities?: boolean
    with_finished_and_approved?: boolean
    count?: number | null
  }

  export type ReserveInternalDto = {
    deal_id?: string
    firm_id?: number
    contact_id?: number
    from_auctions?: boolean
    is_pass_through?: boolean
    load_id?: string
    deal_kind?: Schemas.DealKinds
    deal_load_pairs?: Schemas.DealLoadPair[] | null
  }

  export type DealLoadPair = {
    deal_id?: string
    load_id?: string
  }

  export type PassThroughTakeDtoInternal = {
    copies?: Schemas.LoadTakeCopiesRmqModel | null
    rate_type?: Schemas.RateType
    firm_id?: number
    contact_id?: number
    load_id?: string
    deal_id?: string
    requisites_id?: string
    signer_id?: string
    is_drop_docs?: boolean
    deal_kind?: Schemas.DealKinds | null
    tracker_owner_access?: number | null
    is_pass_through?: boolean
  }

  export type LoadTakeCopiesRmqModel = {
    driver?: Schemas.DriverInfo | null
    trailer?: Schemas.TruckInfo | null
    semitrailer?: Schemas.TruckInfo | null
    truck?: Schemas.TruckInfo | null
  }

  export type OrderTakerInfo = {
    /**
     * @description Id заказа
     *             
     */
    deal_id?: string
    /**
     * @description Id перевозчика
     *             
     */
    firm_id?: number
    /**
     * @description Контакт перевозчика
     */
    contact_id?: number
    /**
     * @description Запрос из сервиса аукционов
     */
    from_auctions?: boolean
    /**
     * @description Причина отклонения заказа
     */
    reason?: string | null
    /**
     * @description Статус заказа
     */
    state?: Schemas.DealState | null
    /**
     * @description У данного заказа имеется вышестоящий заказ
     */
    has_parent?: boolean
    /**
     * @description У данного заказа имеется хотя бы 1 нижестоящий заказ
     */
    has_children?: boolean
    /**
     * @description Вышестоящий груз
     */
    parent_load_id?: string | null
  }

  export type DeclineByAuctionsDto = {
    auction_id?: string
    firm_id?: number
    contractor_firm_id?: number
  }

  export type ChangeOrdersInternalDto = {
    changes?: Schemas.ChangeOrdersPairDto[] | null
  }

  export type ChangeOrdersPairDto = {
    reserve?: Schemas.ChangeOrdersReserveDto | null
    decline?: Schemas.ChangeOrdersDeclineDto | null
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
    reason?: string | null
  }

  export type SetOrderDateInternalDto = {
    updated_at?: string | null
  }

  export type GetDealsInternalDto = {
    firm_id?: number | null
    load_ids?: string[] | null
  }

  export type DeleteOutdatedInviteDto = {
    load_id?: string
    taker_firm_id?: number
    taker_contact_id?: number
  }

  export type PersonalInvitationView2 = Schemas.DealView2 & {
    /**
     * @description Дата отмены приглашения "Оформить Заказ"
     */
    cancellation_date?: string | null
  }

  /**
   * @description Груз и связанный заказ
   */
  export type UnilateralOrderViewOfFullDealView = {
    /**
     * @description Груз
     */
    load_copy?: Schemas.LoadCopyView | null
    /**
     * @description Заказ
     */
    deal?: Schemas.FullDealView | null
  }

  /**
   * @description Копия груза
   * 
   * *При взятии груз копируется, копия не отображается в поиске и её невозможно отредактировать*
   */
  export type LoadCopyView = {
    /**
     * @description Id копии груза 
     */
    id?: string
    /**
     * @description Сгенерированный номер груза
     */
    load_number?: string | null
    load_meta?: Schemas.LoadMeta | null
    /**
     * @description Id Торгов (аукциона)
     */
    auction_id?: string | null
    /**
     * @description Дата последнего изменения груза
     */
    updated_at?: string
    /**
     * @description Дата добавления груза
     */
    added_at?: string
    /**
     * @description Дата помещения груза в архив
     * 
     * *При взятии груза, он попадает в архив*
     */
    archive_date?: string | null
    /**
     * @description Расстояние для груза
     *             
     * *При расчете учитываются дополнительные пункты разгрузки*
     */
    distance?: number
    /**
     * @description Маршрут построен с проездом по МКАД или без МКАД
     *             
     * * `0` — без МКАД
     * * `1` — с МКАД
     */
    distance_type?: number
    /**
     * @description Расстояние по Платону
     */
    platon_roads_length?: number
    /**
     * @description Расстояние по платным дорогам
     */
    toll_roads_length?: number
    /**
     * @description Время в пути
     */
    travel_time?: string
    /**
     * @description Озвученная ставка
     */
    true_price?: number
    /**
     * @description Id валюты озвученной ставки
     */
    true_currency_id?: number
    /**
     * @description Id груза
     */
    parent_id?: string | null
    /**
     * @description Груз не опубликован
     */
    is_unpublished?: boolean
    /**
     * @description ID фирмы, выставившей груз
     */
    firm_id?: number
    /**
     * @description Контакт #1, указанный в грузе
     */
    contact_id1?: number
    /**
     * @description Контакт #2, указанный в грузе
     */
    contact_id2?: number | null
    /**
     * @description Примечание к грузу
     */
    note?: string | null
    /**
     * @description Дата, начиная с которой груз актуален
     */
    first_date?: string
    /**
     * @description Дата, после которой груз не актуален
     */
    last_date?: string
    date_type?: Schemas.DateType
    periodicity_id?: Schemas.Periodicity
    /**
     * @description Номер груза/заказа
     */
    order_number?: string | null
    /**
     * @description Кругорейс
     */
    krugoreis?: boolean
    /**
     * @description Зимники
     */
    zimnik?: boolean
    /**
     * @description Паромные переправы
     */
    ferries?: boolean
    /**
     * @description Точка загрузки
     */
    loading?: Schemas.LoadPoint | null
    /**
     * @description Дополнительные точки 
     */
    extra_points?: Schemas.LoadExtraPoint[] | null
    /**
     * @description Точка разгрузки
     */
    unloading?: Schemas.LoadPoint | null
    /**
     * @description Параметры груза
     */
    cargo?: Schemas.LoadCargo | null
    /**
     * @description Параметры перевозки
     */
    transport?: Schemas.LoadTransport | null
    /**
     * @description Площадки, на которых опубликован груз
     */
    boards?: Schemas.BoardView[] | null
    /**
     * @description Дата, начиная с которой можно разгрузить груз
     */
    unload_first_date?: string | null
    /**
     * @description Дата, до которой можно разгрузить груз
     */
    unload_last_date?: string | null
  }

  /**
   * @description Метаданные груза
   */
  export type LoadMeta = {
    /**
     * @description Id
     */
    load_meta_id?: string | null
    /**
     * @description Данные
     */
    meta_data?: string | null
  }

  export type BoardView = {
    /**
     * @description Id площадки
     */
    board_id?: string | null
    /**
     * @description Имя площадки
     */
    name?: string | null
    /**
     * @description Цвет площадки
     */
    color?: string | null
  }

  export type FullDealView = Schemas.DealView3 & {
    /**
     * @description Дата взятия/резервирования груза
     */
    started_at?: string | null
    /**
     * @description Дата завершения заказа
     */
    finished_at?: string | null
    /**
     * @description Причина отклонения заказа
     *             
     * *Присутствует когда Status `-2` или `-3`*
     */
    denial_reason?: string | null
    /**
     * @description Id реквизитов\
     * см. taker_requisites, в новой версии API это поле перестанет существовать
     */
    requisite_id?: string | null
    /**
     * @description Реквизиты перевозчика
     */
    taker_requisites?: Schemas.RequisiteView2 | null
    /**
     * @description Id подписанта\
     * см. taker_requisites, в новой версии API это поле перестанет существовать
     */
    signer_id?: string | null
    /**
     * @description Копия водителя
     *             
     * *При взятии груза, водитель копируется, копию редактировать невозможно*
     */
    driver?: Schemas.DriverView2 | null
    /**
     * @description Копия транспортного средства
     *             
     * *При взятии груза, транспортное средство копируется, копию редактировать невозможно*
     */
    truck?: Schemas.TruckView2 | null
    /**
     * @description Копия прицепа
     *             
     * *При взятии груза, прицеп копируется, копию редактировать невозможно*
     */
    trailer?: Schemas.TruckView2 | null
    /**
     * @description Копия полуприцепа
     *             
     * *При взятии груза, полуприцеп копируется, копию редактировать невозможно*
     */
    semi_trailer?: Schemas.TruckView2 | null
    /**
     * @description Основной документ в АТИ-Доках
     */
    document?: Schemas.DocumentView | null
    /**
     * @description Дополнительные документы
     */
    additional_documents?: Schemas.AdditionalDocumentView[] | null
    /**
     * @description Статусная модель перевозки
     *             
     * * `0` — Простая перевозка
     * * `1` — Первая миля
     * * `2` — Последняя миля
     * * `3` — Порожний контейнер
     */
    in_work_status_model?: Schemas.InWorkStatusModel
    /**
     * @description Статус перевозки заказа
     */
    in_work?: Schemas.DealInWorkView | null
    /**
     * @description Предлагаемые правки к документу
     */
    deal_note?: string | null
    deal_kind?: Schemas.DealKinds
    /**
     * @description Точки маршрута
     */
    points?: Schemas.DealPointView[] | null
  }

  export type RequisiteView2 = {
    /**
     * @description Id реквизитов\
     * Более подробную информацию о реквизитах можно посмотреть [здесь](https://ati.su/developers/api/firms/#firms-requisites)
     */
    requisite_id?: string
    /**
     * @description Название компании
     */
    requisite_firm_name?: string | null
    /**
     * @description Id подписанта
     */
    signer_id?: string | null
    /**
     * @description Идентификатор формы собственности\
     * Значение из [словаря ОПФ АТИ](https://ati.su/developers/api/dictionaries/firms/#get-v1.0-dictionaries-ownerships/) 
     */
    own_ship_id?: number
    /**
     * @description ИНН
     */
    inn?: string | null
    /**
     * @description КПП
     */
    kpp?: string | null
    /**
     * @description Тип реквизитов
     */
    requisite_type_id?: number
  }

  export type DriverView2 = {
    /**
     * @description Id копии водителя
     */
    driver_id?: string
    /**
     * @description Идентификатор водителя из [Справочника Водителей](/api/catalogs/#водители)
     */
    parent_id?: string | null
    /**
     * @description Имя водителя
     */
    first_name?: string | null
    /**
     * @description Фамилия водителя
     */
    second_name?: string | null
    /**
     * @description Отчество водителя
     */
    patronymic?: string | null
    /**
     * @description Номер телефона
     */
    phone_number?: string | null
    /**
     * @description Номер водительского удостоверения
     */
    driver_license_number?: string | null
    /**
     * @description Серия паспорта
     */
    passport_series?: string | null
    /**
     * @description Номер паспорта
     */
    passport_number?: string | null
    /**
     * @description Кем выдан
     */
    passport_issued_by?: string | null
    /**
     * @description Когда выдан
     */
    passport_when_issued?: string
    /**
     * @description Прописка
     */
    registration?: string | null
    /**
     * @description Флаг привлеченного водителя (со стороны)
     */
    is_attracted_driver?: boolean
    /**
     * @description Id связанной сущности по Заказу
     */
    last_deal_related_id?: string | null
    /**
     * @description Краткое описание водителя
     */
    description?: string | null
    /**
     * @description Фирма от которой привлечен водитель.
     */
    attracted_from?: string | null
    /**
     * @description Сканы паспорта / водительского удостоверения
     */
    scans?: Schemas.Scan[] | null
    /**
     * @description Идентификатор источника информации о водителе
     *             
     * * `0` — Неизвестно откуда указан водитель
     * * `1` — Водитель указан на странице заказов у Заказа в исполнении
     * * `2` — Водитель указан в АТИ-Доках
     */
    origin?: Schemas.DriverOrigin
    /**
     * @description Дата рождения
     */
    date_of_birth?: string | null
    /**
     * @description Код подразделения
     */
    department_code_in_passport?: string | null
    /**
     * @description ИНН водителя
     */
    driver_inn?: string | null
    /**
     * @description Есть в Черном списке
     */
    in_cargo_owner_black_list?: boolean
    /**
     * @description Внешний идентификатор
     */
    external_id?: string | null
    /**
     * @description Причины добавления в Черный список
     */
    black_list_reasons?: string[] | null
  }

  /**
   * @description Транспортное средство
   */
  export type TruckView2 = {
    /**
     * @description Id копии транспортного средства
     */
    truck_id?: string
    /**
     * @description Id транспортного средства из [Автопарка](/api/catalogs/#автопарк)
     */
    parent_id?: string | null
    /**
     * @description Id ТС, с которым было связано ТС во время выполнения последнего Заказа
     */
    last_deal_related_id?: string | null
    /**
     * @description Тип транспортного средства
     *             
     * * `1` — Грузовик
     * * `2` — Тягач
     * * `4` — Полуприцеп
     * * `8` — Прицеп
     */
    type?: Schemas.TruckType
    /**
     * @description Описание транспортного средства
     */
    description?: string | null
    /**
     * @description Марка
     */
    brand_id?: number | null
    /**
     * @description Модель
     */
    model?: string | null
    /**
     * @description Номер
     */
    number?: string | null
    /**
     * @description Телефон
     */
    phone_number?: string | null
    /**
     * @description Привлеченное ТС
     */
    is_attracted_truck?: boolean
    /**
     * @description Тип владения ТС
     *             
     * * `0` - Собственное
     * * `1` - Привлеченное
     * * `2` - Аренда
     * * `3` - Лизинг
     * * `4` - Совместная собственность (супругов)
     * * `5` - Безвозмездное пользование
     */
    ownership_type?: Schemas.TruckOwnershipType
    /**
     * @description Тип Кузова
     */
    car_type_id?: number
    /**
     * @description Грузоподъемность
     */
    capacity?: number | null
    /**
     * @description Объем
     */
    volume?: number | null
    /**
     * @description Длина
     */
    length?: number | null
    /**
     * @description Ширина
     */
    width?: number | null
    /**
     * @description Высота
     */
    height?: number | null
    /**
     * @description Год выпуска
     */
    manufacture_year?: number | null
    /**
     * @description VIN
     */
    vin?: string | null
    /**
     * @description СТС
     */
    vrc?: string | null
    /**
     * @description Номер кузова
     */
    body_number?: string | null
    /**
     * @description Размерность контейнера
     */
    dimension?: number | null
    /**
     * @description Номер ПТС
     */
    truck_passport_number?: string | null
    /**
     * @description Способность возить реф-контейнеры
     */
    can_refrigerator?: boolean | null
    /**
     * @description Есть GenSet
     */
    has_gen_set?: boolean | null
    /**
     * @description Имя владельца по СТС
     */
    truck_owner_name?: string | null
    /**
     * @description Способность перевозить тяжелые контейнеры
     *  
     */
    can_carry_heavy_container?: boolean | null
    /**
     * @description Способность перевозить высокие контейнеры
     */
    can_carry_tall_container?: boolean | null
    /**
     * @description Внешний идентификатор
     */
    external_id?: string | null
    /**
     * @description Проверено
     */
    verified?: boolean
    /**
     * @description Запрещено редактирование и удаление ТС.
     */
    modification_restricted?: boolean
    /**
     * @description Сканы ПТС
     */
    scans?: Schemas.Scan[] | null
    /**
     * @description Источник создания Транспорта
     *             
     * * `0` — Неизвестно откуда указано ТС
     * * `1` — ТС указано на странице заказов у Заказа в исполнении
     * * `2` — ТС Указано в АТИ-доках
     */
    origin?: Schemas.TruckOrigin
  }

  export type DocumentView = {
    /**
     * @description ID документа
     */
    id?: string | null
    /**
     * @description ID старого документа
     */
    old_id?: string | null
    /**
     * @description Фирма, отредактировавшая документ
     */
    editor?: string | null
    /**
     * @description Адрес просмотра договора
     */
    url?: string | null
    /**
     * @description Адрес просмотра старого договора
     */
    old_url?: string | null
    /**
     * @description Имя документа
     */
    name?: string | null
    /**
     * @description Документ подписан перевозчиком
     */
    is_signed?: boolean
    /**
     * @description Доступ к документу
     *             
     * * `0` — Обе стороны
     * * `1` — Водитель
     */
    access?: Schemas.DealDocumentAccess
  }

  export type AdditionalDocumentView = {
    /**
     * @description Id документа
     */
    id?: string | null
    /**
     * @description Файл контрагента
     */
    is_counterparty_file?: boolean
    /**
     * @description Адрес документа
     */
    url?: string | null
    /**
     * @description Имя документа
     */
    name?: string | null
    /**
     * @description Документ подписан перевозчиком
     */
    is_signed?: boolean
    /**
     * @description Тип документа
     *             
     * * `0` — Нет
     * * `1` — Заказ
     * * `2` — Договор-заявка
     * * `3` — Поручение экспедитору
     * * `4` — Акт
     * * `5` — Счет
     * * `6` — Одностороннее расторжение
     * * `7` — Доверенность
     * * `8` — Табличный заказ
     * * `9` — Заявка к договору (табличный вид)
     */
    document_type?: Schemas.DocumentType
    /**
     * @description Доступ к документу
     *             
     * * `0` — Обе стороны
     * * `1` — Водитель
     */
    access?: Schemas.DealDocumentAccess
  }

  /**
   * @description Заказ
   *             
   * *Основная информация о Заказе*
   */
  export type DealView3 = {
    /**
     * @description Id Заказа
     */
    deal_id?: string
    /**
     * @description Id связанной копии груза
     */
    load_copy_id?: string
    /**
     * @description Id груза
     */
    load_id?: string
    /**
     * @description Код фирмы, взявшей груз
     */
    taker_ati_id?: string | null
    /**
     * @description Идентификатор пользователя, взявшего груз
     */
    taker_persistent_user_id?: number
    /**
     * @description Id контакта, взявшего груз
     */
    taker_contact_id?: number
    /**
     * @description Код фирмы опубликовавшей груз
     */
    cargo_owner_ati_id?: string | null
    /**
     * @description Идентификатор пользователя, опубликовавшего груз
     */
    cargo_owner_persistent_user_id?: number
    /**
     * @description Время изменения информации по Заказу
     */
    updated_at?: string
    /**
     * @description Время до которого груз зарезервирован
     */
    end_of_reservation?: string | null
    /**
     * @description Id Торгов (аукциона)
     */
    auction_id?: string | null
    /**
     * @description Статус Заказа
     * 
     * * `0` — Груз зарезервирован перевозчиком
     * * `1` — Перевозчик заполнил информацию о реквизитах/водителе/машине и грузовладелец не просмотрел заявку
     * * `2` — Перевозчик заполнил информацию о реквизитах/водителе/машине и грузовладелец просмотрел заявку
     * * `3` — Грузовладелец отправил документ-заявку перевозчику
     * * `4` — Заказ в исполнении (перевозчик дал согласие на документ-заявку)
     * * `5` — Заказ завершен и перенесен в архив
     * * `7` — Есть только приглашение на Заказ
     * * `8` — Заказа нет, но есть Торги, у которых есть возможные победители
     * * `9` — Заказ отклонен автоматически, так как после последней даты загрузки прошло уже более 7 дней
     * * `10` — Заказ завершен, ожидается оплата
     * * `11` — В Торгах лучшая ставка из других Торгов
     * * `-11` — Заказ удален
     * * `-10` — Резерв груза перевозчиком отменен
     * * `-9` — Заказ отклонен грузовладельцем в Торгах после истечения срока подачи документов (смена победителя)
     * * `-8` — Грузовладелец отменил Заказ в исполнении
     * * `-7` — Перевозчик отменил Заказ в исполнении
     * * `-6` — Заказ отклонен грузовладельцем после удаления Торгов
     * * `-4` — Заказ отклонен грузовладельцем в Торгах (смена победителя)
     * * `-3` — Заказ отклонен грузовладельцем
     * * `-2` — Заказ отозван перевозчиком
     */
    status?: Schemas.DealState
    /**
     * @description Статус Заказа у контрагента
     * 
     * * `0` — Груз зарезервирован перевозчиком
     * * `1` — Перевозчик заполнил информацию о реквизитах/водителе/машине и грузовладелец не просмотрел заявку
     * * `2` — Перевозчик заполнил информацию о реквизитах/водителе/машине и грузовладелец просмотрел заявку
     * * `3` — Грузовладелец отправил документ-заявку перевозчику
     * * `4` — Заказ в исполнении (перевозчик дал согласие на документ-заявку)
     * * `5` — Заказ завершен и перенесен в архив
     * * `7` — Есть только приглашение на Заказ
     * * `8` — Заказа нет, но есть Торги, у которых есть возможные победители
     * * `9` — Заказ отклонен автоматически, так как после последней даты загрузки прошло уже более 7 дней
     * * `10` — Заказ завершен, ожидается оплата
     * * `11` — В Торгах лучшая ставка из других Торгов
     * * `-11` — Заказ удален
     * * `-10` — Резерв груза перевозчиком отменен
     * * `-9` — Заказ отклонен грузовладельцем в Торгах после истечения срока подачи документов (смена победителя)
     * * `-8` — Грузовладелец отменил Заказ в исполнении
     * * `-7` — Перевозчик отменил Заказ в исполнении
     * * `-6` — Заказ отклонен грузовладельцем после удаления Торгов
     * * `-4` — Заказ отклонен грузовладельцем в Торгах (смена победителя)
     * * `-3` — Заказ отклонен грузовладельцем
     * * `-2` — Заказ отозван перевозчиком
     */
    counterparty_status?: Schemas.DealState
    /**
     * @description Параметры оплаты Заказа
     */
    payment?: Schemas.DealPaymentView3 | null
    /**
     * @description Информация об оплате заказа
     */
    pay_docs?: Schemas.PayDocsView | null
    /**
     * @description Файлы Заказа
     */
    files?: Schemas.DealFileView[] | null
    /**
     * @description Информация о шаблонах документов в заказах
     */
    document_templates?: Schemas.DealDocumentTemplatesView[] | null
    /**
     * @description Запрос отслеживания через АТИ Водитель
     */
    is_tracking?: boolean
    /**
     * @description Показывать ли ставку водителю (для ОЗ)
     */
    should_show_rate_to_driver?: boolean | null
  }

  export type DealPaymentView3 = {
    /**
     * @description Список возможных ставок перевозки
     */
    rates?: Schemas.RateView2[] | null
    /**
     * @description Процент предоплаты
     */
    prepay_percent?: number
    /**
     * @description Есть ли предоплата
     */
    prepay_percent_enabled?: boolean
    /**
     * @description Оплата на выгрузке
     */
    on_unloading?: boolean
    /**
     * @description Оплата топливом
     */
    in_fuel?: boolean
    /**
     * @description Есть ли срок оплаты
     */
    pay_days_enabled?: boolean
    /**
     * @description Срок оплаты
     */
    pay_days?: number
    /**
     * @description Указана ли в грузе ставка
     */
    fixed_rate?: boolean
    /**
     * @description Возможен ли торг
     */
    torg?: boolean
    /**
     * @description Прямой договор
     */
    direct_contract?: boolean
    /**
     * @description Способ оплаты
     */
    money_type?: number | null
  }

  export type RateView2 = {
    /**
     * @description Сумма
     */
    rate?: number
    rate_type?: Schemas.RateType
    /**
     * @description Id валюты
     */
    currency?: number
    /**
     * @description Является ли ставка выбранной
     */
    active?: boolean
  }

  export type DealDocumentTemplatesView = {
    /**
     * @description Адрес организации
     */
    organization_address?: string | null
    /**
     * @description Шаблоны документов
     */
    templates?: Schemas.DocumentTemplateView[] | null
  }

  export type SaveUnilateralOrderDtoNew = {
    /**
     * @description Точки маршрута, включая загрузку и разгрузку
     */
    points?: Schemas.UnilateralOrderPointDtoInboxNew[]
    /**
     * @description Идентификатор водителя
     */
    driver_id?: string | null
    /**
     * @description Идентификатор транспорта
     */
    truck_id?: string | null
    /**
     * @description Идентификатор прицепа
     */
    trailer_id?: string | null
    /**
     * @description Идентификатор полуприцепа
     */
    semitrailer_id?: string | null
    /**
     * @description Идентификатор Заказа
     * 
     * Указывается, когда необходимо изменить заказ
     */
    deal_id?: string | null
    /**
     * @description Ставка
     * 
     * Если ставка указана, то должны быть заполнены поля `currency`, `money_type` и `rate_type`
     */
    rate?: number | null
    /**
     * @description Идентификатор валюты ставки
     *             
     * Поле является обязательным, если указана ставка (`rate`)
     * 
     * Значение из [словаря валют АТИ](https://ati.su/developers/api/dictionaries/cargoes/#get-v1.0-dictionaries-currencyTypes)
     */
    currency?: number | null
    /**
     * @description Типы оплаты
     *             
     * Поле является обязательным, если указана ставка (`rate`)
     * 
     * * `0` — Нет
     * * `1` — Любая
     * * `2` — С НДС
     * * `3` — Без НДС
     */
    rate_type?: Schemas.RateType | null
    /**
     * @description Ставка (любая, на карту, нал)
     *             
     * * `1` — Нал
     * * `22` — Любая
     * * `23` — На карту
     * * `24` — Нал без НДС
     * * `25` — Безнал без НДС
     */
    money_type?: number | null
    /**
     * @description Номер заказа или груза
     */
    order_number?: string | null
    /**
     * @description Показывать ли ставку водителю
     */
    should_show_rate_to_driver?: boolean
    /**
     * @description Параметр, определяющий степень опасности груза
     *             
     * Возможны значения с 1 до 9
     */
    adr?: number | null
    /**
     * @description Битовая сумма Id типов загрузки 
     */
    loading_type?: number | null
    /**
     * @description Битовая сумма Id типов разгрузки 
     */
    unloading_type?: number | null
    /**
     * @description Кол-во ремней
     */
    belt_count?: number | null
    /**
     * @description Список ID файлов
     */
    file_ids?: string[] | null
  }

  export type UnilateralOrderPointDtoInboxNew = {
    /**
     * @description Порядковый номер точки, начиная с 0
     */
    ordinal_id?: number
    /**
     * @description Id страны\
     * Значение из [словаря стран АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    country_id?: number
    /**
     * @description Id региона\
     * Значение из [словаря регионов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    region_id?: number | null
    /**
     * @description Id города\
     * Значение из [словаря городов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    city_id: number
    /**
     * @description Время прибытия (при наличии значения time_to, time означает начало периода времени прибытия)
     */
    time: string
    /**
     * @description Время до (если есть)
     */
    time_to?: string | null
    /**
     * @description Дата прибытия (при наличии значения date_to, date означает начало периода дат прибытия) 
     */
    date?: string | null
    /**
     * @description Дата до (если есть)
     */
    date_to?: string | null
    /**
     * @description Широта точки
     */
    lat: number
    /**
     * @description Долгота точки
     */
    lon: number
    /**
     * @description Адрес
     */
    address?: string
    /**
     * @description Список контактов (не более 10 контактов)
     */
    contact_persons?: Schemas.ContactPerson2[] | null
    /**
     * @description Примечание (до 160 символов)
     */
    note?: string | null
    /**
     * @description Тип точки
     * * `1` — Загрузка
     * * `2` — Разгрузка
     * * `3` — Таможня
     * * `8` — Ехать через
     */
    point_type?: Schemas.UnilateralLoadPointType
    /**
     * @description Круглосуточная загрузка
     */
    is_round_the_clock?: boolean
    /**
     * @description Груз
     */
    cargos?: Schemas.CargoDto[]
  }

  /**
   * @description Тип дополнительной точки маршрута груза
   *             
   * * `1` — Загрузка
   * * `2` — Разгрузка
   * * `3` — Таможня
   * * `8` — Ехать через
   *  
   * @names
   * * `LoadingExtraPoint` — 1
   * * `UnloadingExtraPoint` — 2
   * * `CustomExtraPoint` — 3
   * * `GoThrough` — 8
   */
  export type UnilateralLoadPointType = 1 | 2 | 3 | 8

  export type CargoDto = {
    /**
     * @description Id груза
     */
    cargo_id?: number
    /**
     * @description ID наименования груза
     */
    name_id?: number | null
    /**
     * @description Наименование груза
     */
    name?: string | null
    /**
     * @description Упаковка
     */
    packaging_type?: number | null
    /**
     * @description Кол-во упаковок
     */
    packaging_quantity?: number | null
    /**
     * @description Вес
     */
    weight?: Schemas.CargoWeight | null
    /**
     * @description Объем
     */
    volume?: number | null
    /**
     * @description Габариты
     */
    sizes?: Schemas.LoadSizeDto | null
  }

  export type CargoWeight = {
    /**
     * @description Вес
     */
    quantity?: number
    /**
     * @description Тип веса груза
     *             
     * * `0` — Килограммы
     * * `1` — Тонны
     */
    type?: Schemas.WeightType | null
  }

  /**
   * @description Тип веса груза
   *             
   * * `0` — Килограммы
   * * `1` — Тонны
   *  
   * @names
   * * `Kilos` — 0
   * * `Tons` — 1
   */
  export type WeightType = 0 | 1

  export type LoadSizeDto = {
    /**
     * @description Длина в метрах
     */
    length?: number | null
    /**
     * @description Ширина в метрах
     */
    width?: number | null
    /**
     * @description Высота в метрах
     */
    height?: number | null
    /**
     * @description Диаметр в метрах
     */
    diameter?: number | null
  }

  export type DocumentMinView = {
    /**
     * @description ID документа
     */
    document_id?: string | null
    /**
     * @description Адрес просмотра договора
     */
    url?: string | null
  }

  export type DriverTrackerPointDTO = {
    /**
     * @description Id точки из Заказа
     */
    deal_point_id: string
    /**
     * @description Время
     */
    time?: string | null
    /**
     * @description Дата
     */
    date?: string | null
    /**
     * @description Время до (если есть)
     */
    time_to?: string | null
    /**
     * @description Дата до (если есть)
     */
    date_to?: string | null
    /**
     * @description Широта точки
     */
    lat?: number | null
    /**
     * @description Долгота точки
     */
    lon?: number | null
    /**
     * @description Адрес
     */
    address?: string | null
    /**
     * @description Список контактов (не более 10 контактов)
     */
    contact_persons?: Schemas.ContactPerson2[] | null
    /**
     * @description Примечание (до 1000 символов)
     */
    note?: string | null
    /**
     * @description Айди склада из временных окон
     */
    timeslots_warehouse_id?: number | null
  }

  export type DealMapView = {
    /**
     * @description Точки загрузки/разгрузки
     */
    goals?: Schemas.GoalView[] | null
    /**
     * @description Точки траектории движения водителя
     */
    traces?: Schemas.TraceView[] | null
  }

  export type GoalView = {
    /**
     * @description Долгота
     */
    longitude?: number
    /**
     * @description Широта
     */
    latitude?: number
    /**
     * @description События
     */
    events?: Schemas.EventView[] | null
    /**
     * @description Номер по порядку
     */
    ordinal_id?: number
    /**
     * @description Нужно ли прокладывать маршрут для этой точки
     */
    trace?: boolean
  }

  export type EventView = {
    /**
     * @description Тип события
     * 
     * * `0` — Значение по умолчанию
     * * `1` — Метаинформация об устройстве. Включает в себя события выключения GPS, подмены GPS координат, выключения телефона.
     * * `2` — Информация о статусе заказа (статусы выбираются водителем в приложении)
     */
    type?: Schemas.TrackerEventType
    /**
     * @description Тэг произошедшего события
     */
    tag?: string | null
    /**
     * @description Дата начала
     */
    date?: string
    /**
     * @description Дата окончания
     */
    date_to?: string | null
    /**
     * @description Время начала
     */
    time?: string | null
    /**
     * @description Время окончания
     */
    time_to?: string | null
    /**
     * @description Информация о местоположении
     */
    location_name?: Schemas.LocationNameView | null
  }

  /**
   * @names
   * * `NotSet` — 0
   * * `Meta` — 1
   * * `Status` — 2
   */
  export type TrackerEventType = 0 | 1 | 2

  export type LocationNameView = {
    /**
     * @description Страна
     */
    country?: string | null
    /**
     * @description Регион
     */
    region?: string | null
    /**
     * @description Город
     */
    city?: string | null
    /**
     * @description Адрес
     */
    address?: string | null
  }

  export type TraceView = {
    /**
     * @description Транспортное средство
     */
    car?: Schemas.CarView | null
    /**
     * @description Время начала действия
     */
    first_action?: string
    /**
     * @description Время окончания действия
     */
    last_action?: string
    /**
     * @description Точки маршрута
     */
    points?: Schemas.PointView[] | null
  }

  export type CarView = {
    /**
     * @description Номер телефона водителя
     */
    driver_phone?: string | null
    /**
     * @description Тип события
     *             
     * * `0` — Без происшествий
     * * `1` — GPS был выключен
     * * `2` — Попытка подделки GPS
     * * `3` — Не было данных
     * * `4` — Режим энергосбережения
     * * `5` — Стоянка
     */
    car_status?: Schemas.MapCarType
  }

  export type PointView = {
    /**
     * @description Долгота
     */
    longitude?: number
    /**
     * @description Широта
     */
    latitude?: number
    /**
     * @description События
     */
    events?: Schemas.EventView[] | null
    /**
     * @description Время местоположения
     */
    location_date?: string
    /**
     * @description Флаг поддельного сигнала GPS
     */
    is_fake?: boolean
    /**
     * @description Фдаг выключенности GPS
     */
    is_disabled?: boolean
    /**
     * @description Флаг наличия данных
     */
    is_no_data?: boolean
    /**
     * @description Флаг включенности режима энергосбережения
     */
    is_power_saving?: boolean
    /**
     * @description Флаг холостого хода
     */
    is_empty_run?: boolean
    /**
     * @description Стоянка
     */
    is_parking?: boolean
  }

  export type MapHistoryView = {
    /**
     * @description События в пути
     */
    events?: Schemas.UserDealsHistoryView[] | null
  }

  export type UserDealsHistoryView = {
    /**
     * @description Время события
     */
    date?: string
    /**
     * @description Событие
     */
    event?: Schemas.EventView | null
    /**
     * @description Долгота
     */
    longitude?: number
    /**
     * @description Широта
     */
    latitude?: number
    params?: string[] | null
  }

  export type OrderViewOfFullDealView = {
    /**
     * @description Копия груза
     * 
     * *При создании заказа груз копируется, копия не отображается в поиске и её невозможно отредактировать*
     */
    load_copy?: Schemas.LoadCopyView | null
    /**
     * @description Заказ
     *             
     * *Основная информация о заказе*
     */
    deal?: Schemas.FullDealView | null
  }

  /**
   * @description Модель ошибки
   */
  export type FinalExceptionModelOfNotFoundException = {
    /**
     * @description Причина ошибки
     */
    reason?: string | null
    /**
     * @description Ключ ошибки
     */
    error?: string | null
  }

  export type SaveUnilateralOrderDto2 = {
    /**
     * @description Идентификатор Заказа
     * 
     * Указывается, когда необходимо изменить заказ
     */
    deal_id?: string | null
    /**
     * @description Вес груза в тоннах
     * 
     * Обязательный параметр, если не задан параметр `cargo_volume`.
     * Максимальная длина - 4 символа
     */
    cargo_weight?: number
    /**
     * @description Объем груза в кубических метрах
     * 
     * Обязательный параметр, если не задан параметр `cargo_weight`.
     *             
     * Максимальная длина - 4 символа
     */
    cargo_volume?: number
    /**
     * @description Идентификатор наименования груза\
     * Значение из [словаря наименований грузов](https://ati.su/developers/api/dictionaries/cargoes/#get-v1.0-dictionaries-cargoTypes)
     */
    cargo_type_id?: number
    /**
     * @description Наименование груза.
     * 
     * Обязательный параметр, если значение параметра `cargo_type_id` равно 59.
     * 
     * Максимальная длина названия - 50 символов.
     * 
     * Этот параметр должен быть пустым, если параметр `cargo_type_id` отличен от 59.
     * 
     * В этом поле запрещено указывать контактную информацию.
     */
    cargo_type?: string | null
    /**
     * @description Битовая сумма id типов разгрузки
     * 
     * Например: только "Верхняя" будет иметь значение 1;
     * 
     * "Верхняя", "Боковая" и "Со снятием стоек" имеют значение 67 (1 + 2 + 64)
     * 
     * Значение из [словаря вариантов загрузки АТИ](https://ati.su/developers/api/dictionaries/cargoes/#get-v1.0-dictionaries-loadingTypes)
     */
    loading_type?: number | null
    /**
     * @description Битовая сумма id типов разгрузки
     * 
     * Например: только "Верхняя" будет иметь значение 1;
     *             
     * "Верхняя", "Боковая" и "Со снятием стоек" имеют значение 67 (1 + 2 + 64)
     * 
     * Значение из [словаря вариантов загрузки АТИ](https://ati.su/developers/api/dictionaries/cargoes/#get-v1.0-dictionaries-loadingTypes)
     */
    unloading_type?: number | null
    /**
     * @description Длина груза в метрах
     * 
     * Допустимое значение от 0 до 50. Максимальная длина - 5 символов.
     */
    length?: number | null
    /**
     * @description Высота груза в метрах
     * 
     * Допустимое значение от 0 до 50. Максимальная длина - 5 символов.
     */
    height?: number | null
    /**
     * @description Ширина груза в метрах
     * 
     * Допустимое значение от 0 до 50. Максимальная длина - 5 символов.
     */
    width?: number | null
    /**
     * @description Диаметр груза в метрах
     * 
     * Допустимое значение от 0 до 50. Максимальная длина - 5 символов.
     */
    diameter?: number | null
    /**
     * @description Идентификатор наименования упаковки (навалом, коробки, россыпью, ...)
     * 
     * Значение из [словаря наименований грузов](https://ati.su/developers/api/dictionaries/cargoes/#get-v1.0-dictionaries-packTypes)
     */
    pack_type?: number | null
    /**
     * @description Количество упаковок для груза
     *             
     * Обязательное поле, если `pack_type` не равен 0, 1, 3
     * 
     * Допустимое значение от 0 до 9999
     */
    pallet_count?: number | null
    /**
     * @description Количество ремней для груза.
     * 
     * Допустимое значение от 0 до 9999
     */
    belt_count?: number | null
    /**
     * @description Параметр, определяющий степень опасности груза
     *             
     * Возможны значения с 1 до 9
     */
    adr?: number | null
    /**
     * @description Точки маршрута
     *             
     * Обязательное поле, если нужно отправить заказ АТИ-Водителю
     */
    points?: Schemas.UnilateralOrderPointDtoInbox[] | null
    /**
     * @description Идентификатор водителя
     */
    driver_id?: string | null
    /**
     * @description Отправлять ли заказ водителю в приложение АТИ-Водитель
     */
    send_to_driver?: boolean | null
    /**
     * @description Идентификатор транспорта
     */
    truck_id?: string | null
    /**
     * @description Идентификатор прицепа
     */
    trailer_id?: string | null
    /**
     * @description Идентификатор полуприцепа
     */
    semitrailer_id?: string | null
    /**
     * @description Ставка
     * 
     * Если ставка указана, то должны быть заполнены поля `currency` и `payment_type`
     */
    rate?: number | null
    /**
     * @description Идентификатор валюты ставки
     *             
     * Поле является обязательным, если указана ставка (`rate`)
     * 
     * Значение из [словаря валют АТИ](https://ati.su/developers/api/dictionaries/cargoes/#get-v1.0-dictionaries-currencyTypes)
     */
    currency?: number | null
    /**
     * @description Типы оплаты для Одностороннего заказа
     *             
     * Поле является обязательным, если указана ставка (`rate`)
     * 
     * * `0` — Оплата наличными
     * * `1` — Безналичная оплата без НДС 
     * * `2` — Безналичная оплата c НДС
     */
    payment_type?: Schemas.UnilateralPaymentType | null
    /**
     * @description Идентификатор реквизитов
     */
    requisites_id?: string | null
    /**
     * @description Идентификатор подписанта
     */
    signer_id?: string | null
    /**
     * @description Идентификатор города загрузки
     */
    loading_city?: number
    /**
     * @description Идентификатор города разгрузки
     */
    unloading_city?: number
    /**
     * @description Номер заказа или груза
     */
    order_number?: string | null
  }

  /**
   * @description Фильтр по заказам
   */
  export type OrderFilter2 = {
    /**
     * @description Роль пользователя, по умолчанию: Грузовладелец
     * 
     * * `0` — Грузовладелец
     * * `1` — Перевозчик
     */
    role?: Schemas.OrderRole
    /**
     * @description Список статусов для фильтрации заказов. Если передать null или пустой список, то вернутся все заказы пользователя
     * 
     * * `0` — Груз зарезервирован перевозчиком
     * * `1` — Перевозчик заполнил информацию о реквизитах/водителе/машине и грузовладелец не просмотрел заявку
     * * `2` — Перевозчик заполнил информацию о реквизитах/водителе/машине и грузовладелец просмотрел заявку
     * * `3` — Грузовладелец отправил документ-заявку перевозчику
     * * `4` — Заказ в исполнении (перевозчик дал согласие на документ-заявку)
     * * `5` — Заказ завершен и перенесен в архив
     * * `7` — Есть только приглашение на Заказ
     * * `8` — Заказа нет, но есть Торги, у которых есть возможные победители
     * * `9` — Заказ отклонен автоматически, так как после последней даты загрузки прошло уже более 7 дней
     * * `10` — Заказ завершен, ожидается оплата
     * * `11` — В Торгах лучшая ставка из других Торгов
     * * `-11` — Заказ удален
     * * `-10` — Резерв груза перевозчиком отменен
     * * `-9` — Заказ отклонен грузовладельцем в Торгах после истечения срока подачи документов (смена победителя)
     * * `-8` — Грузовладелец отменил Заказ в исполнении
     * * `-7` — Перевозчик отменил Заказ в исполнении
     * * `-6` — Заказ отклонен грузовладельцем после удаления Торгов
     * * `-4` — Заказ отклонен грузовладельцем в Торгах (смена победителя)
     * * `-3` — Заказ отклонен грузовладельцем
     * * `-2` — Заказ отозван перевозчиком
     */
    statuses?: Schemas.DealState[] | null
    /**
     * @description Список id грузов
     */
    load_ids?: string[] | null
  }

  /**
   * @description Информация о статусе заказа
   */
  export type DealStatusView = {
    /**
     * @description Id заказа
     */
    deal_id?: string
    status?: Schemas.DealState
    deal_kind?: Schemas.DealKinds
    inwork_status?: Schemas.InWorkStatus | null
    tracker_offer_status?: Schemas.TrackerOfferStatus | null
    /**
     * @description Время изменения статуса
     */
    status_change_date_time?: string
  }

  export type OrderToWorkDtoInbox = {
    /**
     * @description Статусная модель перевозки
     *             
     * * `0` — Простая перевозка
     * * `1` — Первая миля
     * * `2` — Последняя миля
     * * `3` — Порожний контейнер
     */
    in_work_status_model?: Schemas.InWorkStatusModel
  }

  /**
   * @description Параметры ссылки для открытия Заказа в АТИ-Доках 
   */
  export type DocumentInfoShortView = {
    /**
     * @description Id документа
     */
    id?: string | null
    /**
     * @description Url документа
     */
    url?: string | null
    /**
     * @description Подписан ли документ
     */
    is_signed?: boolean
  }

  /**
   * @description Данные грузовладельца для Заказа
   */
  export type DealAcceptFromLoadIntegratorsDtoInbox = {
    /**
     * @description Id шаблона документа а АТИ Доках
     */
    template_id?: string | null
    /**
     * @description Тип документа ("заказ", "заказ (табличный вид)", "заявка (к договору)", "поручение экспедитору", "Заявка к договору (табличный вид)")
     */
    document_type?: string | null
    /**
     * @description Id реквизитов
     */
    requisite_id?: string
    /**
     * @description Id подписанта
     */
    signer_id?: string
    /**
     * @description Номер договора произвольного формата не длинее 50 символов. Обязателен, если тип документа -- заявка или поручение экспедитору.
     */
    contract_number?: string | null
    /**
     * @description Дата начала договора. Обязателен, если тип документа -- заявка или поручение экспедитору.
     */
    contract_start_date?: string | null
    /**
     * @description Список адресов загрузки/разгрузки с организациями для Заказа
     */
    point_ids?: Schemas.DealPointIntegratorsDtoInbox[] | null
  }

  /**
   * @description Адрес загрузки/разгрузки в Заказе
   */
  export type DealPointIntegratorsDtoInbox = {
    /**
     * @description Id адреса загрузки/разгрузки из Заказа
     */
    deal_point_id?: string
    /**
     * @description Id организации
     */
    organization_id?: string
    /**
     * @description Id контакта адреса
     */
    contact_person_id?: string | null
    /**
     * @description Id адреса
     */
    address_id?: string | null
  }

  /**
   * @description Параметры Заказа
   */
  export type LoadTakeInfoIntegratorsDto = {
    rate_type?: Schemas.RateType
    /**
     * @description Id водителя
     */
    driver_id?: string | null
    /**
     * @description Id транспортного средства
     */
    truck_info_id?: string | null
    /**
     * @description Id полуприцепа
     *             
     * *Может быть указан только если транспортное средство — тягач*
     */
    semitrailer_id?: string | null
    /**
     * @description Id прицепа
     *             
     * *Может быть указан только если указан полуприцеп или транспортное средство — грузовик*
     */
    trailer_id?: string | null
    /**
     * @description Id реквизитов
     */
    requisites_id?: string
    /**
     * @description Id подписанта
     */
    signer_id?: string | null
    /**
     * @description Отзывать ли привязанные документы
     *             
     * *Используется при редактировании*
     */
    is_drop_docs?: boolean
    deal_kind?: Schemas.DealKinds | null
    /**
     * @description Комментарий перевозчика
     */
    taker_note?: string | null
  }

  export type ChangeContactsDto = {
    /**
     * @description Идентификатор Заказа
     */
    deal_id: string
    /**
     * @description Основной контакт
     */
    contact_id1: number
    /**
     * @description Второй контакт
     */
    contact_id2?: number | null
  }

  export type DeclineOrderIntegratorsDto = {
    reason?: string | null
    action?: Schemas.FinishActionIntegrators | null
  }

  /**
   * @description Действие после отмены заказа
   * * `1` — Восстановить груз
   * * `2` — Оставить груз в Архиве (если по грузу есть торги, они отменятся)
   * * `3` — Сменить победителя
   * * `4` — Перезапустить Торги
   *  
   * @names
   * * `PublishLoad` — 1
   * * `DeleteLoad` — 2
   * * `SelectNewWinner` — 3
   * * `RestartAuction` — 4
   */
  export type FinishActionIntegrators = 1 | 2 | 3 | 4

  export type PersonalInvitationDTO = {
    /**
     * @description Id груза
     */
    load_id: string
    /**
     * @description Id аккаунта приглашаемой фирмы
     */
    taker_ati_id: string
    /**
     * @description Список контактов приглашаемой фирмы
     */
    taker_contacts_list: number[]
    /**
     * @description Параметры оплаты заказа. Обязательно указание хотя бы одной ставки и валюты для неё.
     */
    payment: Schemas.PersonalInvitationPaymentDTO
    /**
     * @description Через сколько минут отменить приглашение "Оформить Заказ".
     * Допустимое значение от 1 до 4320 минут. По умолчанию - 4320 (3 суток)
     */
    cancel_after_in_minutes?: number | null
    /**
     * @description Дата отмены предложения на перевозку груза, формат ISO 8601
     */
    cancellation_date?: string | null
    /**
     * @description Запрос отслеживания через АТИ Водитель
     */
    is_tracking?: boolean
  }

  /**
   * @description Параметры оплаты заказа. Обязательно указание хотя бы одной ставки и валюты для неё.
   */
  export type PersonalInvitationPaymentDTO = {
    /**
     * @description Сумма
     */
    price?: number | null
    /**
     * @description ID валюты
     */
    currency_id?: number | null
    /**
     * @description Сумма с НДС
     */
    nds_price?: number | null
    /**
     * @description ID валюты c НДС
     */
    nds_currency_id?: number | null
    /**
     * @description Сумма без НДС
     */
    not_nds_price?: number | null
    /**
     * @description ID валюты без НДС
     */
    not_nds_currency_id?: number | null
  }

  export type PersonalOfferInvitationDTO = {
    /**
     * @description Id груза
     */
    load_id?: string
    /**
     * @description Id встречного приглашения.
     * Значение из метода [получения отзывов](https://ati.su/developers/api/loads/published/#get-v1.0-loads-new-responses)
     */
    response_id?: string
    /**
     * @description По каким ставкам отправить приглашение. 
     * Типы ставок:
     *             
     * * `0` — наличные
     * * `1` — б/нал с НДС
     * * `2` — б/нал без НДС
     */
    rate_types?: Schemas.PriceType[] | null
    /**
     * @description Через сколько минут отменить приглашение "Оформить Заказ".
     * Допустимое значение от 1 до 4320 минут. По умолчанию - 4320 (3 суток)
     */
    cancel_after_in_minutes?: number | null
    /**
     * @description Приглашение создано автоматически
     */
    is_auto?: boolean
    /**
     * @description Архивировать заявку при срабатывании автоматического приглашения
     */
    need_archive_on_invite?: boolean
  }

  /**
   * @description Тип ставки
   *             
   * * `0` — наличные
   * * `1` — б/нал с НДС
   * * `2` — б/нал без НДС
   *  
   * @names
   * * `Cash` — 0
   * * `CashlessWithNds` — 1
   * * `CashlessWithoutNds` — 2
   */
  export type PriceType = 0 | 1 | 2

  export type LoadPersonalInvitationView = {
    /**
     * @description Id груза
     */
    load_id?: string
    /**
     * @description Id приглашенной фирмы
     */
    taker_ati_id?: string | null
    /**
     * @description Постоянный Id приглашенной фирмы
     */
    taker_persistent_user_id?: number
    /**
     * @description Список контактов приглашенной фирмы
     */
    taker_contacts_list?: number[] | null
    /**
     * @description Id контакта приглашенной фирмы
     */
    taker_contact_id?: number
    /**
     * @description Время отправки приглашения
     */
    date?: string
    /**
     * @description Время отмены приглашения
     */
    cancellation_date?: string | null
    /**
     * @description Тип Заказа
     *             
     * * `0` — Заказ невозможен 
     * * `1` — Взятие груза из поиска
     * * `2` — Заказ из Торгов
     * * `4` — Предложение груза
     * * `8` — Из перехвата машин
     * * `16` — Односторонний заказ
     * * `32` — Предложение груза из встречного предложения
     * * `64` — Предложение груза по контракту
     */
    deal_kind?: Schemas.DealKinds
    /**
     * @description Предложенные параметры оплаты
     */
    payment?: Schemas.InvitationPaymentView | null
    /**
     * @description Запрос отслеживания через АТИ Водитель
     */
    is_tracking?: boolean
  }

  export type InvitationPaymentView = {
    /**
     * @description Список возможных ставок перевозки
     */
    rates?: Schemas.InvitationRateView[] | null
    /**
     * @description Процент предоплаты
     */
    prepay_percent?: number
    /**
     * @description Есть ли предоплата
     */
    prepay_percent_enabled?: boolean
    /**
     * @description Оплата на выгрузке
     */
    on_unloading?: boolean
    /**
     * @description Оплата топливом
     */
    in_fuel?: boolean
    /**
     * @description Есть ли срок оплаты
     */
    pay_days_enabled?: boolean
    /**
     * @description Срок оплаты
     */
    pay_days?: number
    /**
     * @description Указана ли в грузе ставка
     */
    fixed_rate?: boolean
    /**
     * @description Возможен ли торг
     */
    torg?: boolean
    /**
     * @description Прямой договор
     */
    direct_contract?: boolean
    /**
     * @description Способ оплаты
     */
    money_type?: number | null
    payment_source?: Schemas.PaymentSource
  }

  export type InvitationRateView = {
    /**
     * @description Сумма
     */
    rate?: number
    /**
     * @description Тип оплаты
     *             
     * * `0` — Нет
     * * `1` — Любая
     * * `2` — С НДС
     * * `3` — Без НДС
     */
    rate_type?: Schemas.RateType
    /**
     * @description Id валюты\
     * Значение из [словаря валют АТИ](https://ati.su/developers/api/dictionaries/cargoes/#get-v1.0-dictionaries-currencyTypes)
     */
    currency?: number
  }

  export type PersonalInvitationView3 = {
    /**
     * @description Id фирмы грузовладельца
     */
    owner_ati_id?: string | null
    /**
     * @description Постоянный Id фирмы грузовладельца
     */
    owner_persistent_user_id?: number
    /**
     * @description Id контакта, который отправил приглашение
     */
    owner_contact_id?: number | null
    /**
     * @description Id приглашенной фирмы
     */
    taker_ati_id?: string | null
    /**
     * @description Постоянный Id приглашенной фирмы
     */
    taker_persistent_user_id?: number
    /**
     * @description Id контакта приглашенной фирмы
     */
    taker_contact_id?: number
    /**
     * @description Список контактов приглашенной фирмы
     */
    taker_contacts_list?: number[] | null
    /**
     * @description Время отправки приглашения
     */
    date?: string
    /**
     * @description Время отмены приглашения
     */
    cancellation_date?: string | null
    /**
     * @description Предложенные параметры оплаты
     */
    payment?: Schemas.InvitationPaymentView | null
    /**
     * @description Параметры предложенного груза
     */
    load?: Schemas.ShortLoadView | null
    /**
     * @description Запрос отслеживания через АТИ Водитель
     */
    is_tracking?: boolean
    /**
     * @description Тип Заказа
     */
    deal_kind?: Schemas.DealKinds
  }

  /**
   * @description Краткая информация по грузу
   */
  export type ShortLoadView = {
    /**
     * @description ID груза
     */
    id?: string
    /**
     * @description Сгенерированный номер груза
     */
    load_number?: string | null
    /**
     * @description Расстояние для груза
     *             
     * *При расчете учитываются дополнительные пункты разгрузки*
     */
    distance?: number
    /**
     * @description Маршрут построен с проездом по МКАД или без МКАД
     *             
     * * `0` — без МКАД
     * * `1` — с МКАД
     */
    distance_type?: number
    /**
     * @description Расстояние по Платону
     */
    platon_roads_length?: number
    /**
     * @description Расстояние по платным дорогам
     */
    toll_roads_length?: number
    /**
     * @description Время в пути
     */
    travel_time?: string
    /**
     * @description Озвученная ставка
     */
    true_price?: number
    /**
     * @description ID валюты озвученной ставки
     */
    true_currency_id?: number
    /**
     * @description Примечание к грузу
     */
    note?: string | null
    /**
     * @description Дата, начиная с которой груз актуален
     */
    first_date?: string
    /**
     * @description Дата, после которой груз не актуален
     */
    last_date?: string
    date_type?: Schemas.DateType
    periodicity_id?: Schemas.Periodicity
    /**
     * @description Номер груза/заказа
     */
    order_number?: string | null
    /**
     * @description Кругорейс
     */
    krugoreis?: boolean
    /**
     * @description Зимники
     */
    zimnik?: boolean
    /**
     * @description Паромные переправы
     */
    ferries?: boolean
    /**
     * @description Точка загрузки
     */
    loading?: Schemas.LoadPoint | null
    /**
     * @description Дополнительные точки 
     */
    extra_points?: Schemas.LoadExtraPoint[] | null
    /**
     * @description Точка разгрузки
     */
    unloading?: Schemas.LoadPoint | null
    /**
     * @description Параметры груза
     */
    cargo?: Schemas.LoadCargo | null
    /**
     * @description Параметры перевозки
     */
    transport?: Schemas.LoadTransport | null
    /**
     * @description Дата, начиная с которой можно разгрузить груз
     */
    unload_first_date?: string | null
    /**
     * @description Дата, до которой можно разгрузить груз
     */
    unload_last_date?: string | null
  }

  export type DealOrderView2 = {
    /**
     * @description Копия груза
     */
    load?: Schemas.LoadView3 | null
    /**
     * @description Описание параметров заказа
     */
    deal?: Schemas.DealView4 | null
    /**
     * @description Отмечен ли заказ красной точкой (признак того, что требуется действие)
     */
    is_red?: boolean
    /**
     * @description Пользовательские настройки
     */
    custom_settings?: (Record<string, unknown> & Record<string, Schemas.CustomSettingView>) | null
  }

  export type LoadView3 = {
    /**
     * @description Id копии груза
     */
    id?: string
    /**
     * @description Сгенерированный номер груза
     */
    load_number?: string | null
    /**
     * @description Id исходного груза
     */
    parent_id?: string | null
    /**
     * @description Id груза, по которому будут искаться Торги
     */
    load_id_for_auction?: string
    /**
     * @description Id фирмы, которой принадлежит груз
     */
    FirmId?: string | null
    /**
     * @description Дата и время последнего обновления груза
     */
    updated_at?: string
    /**
     * @description Дата добавления груза
     */
    added_at?: string
    /**
     * @description Дата, с которой возможна загрузка
     */
    first_date?: string
    /**
     * @description Дата, с которой загрузка заканчивается
     */
    last_date?: string
    /**
     * @description Дата, начиная с которой можно разгрузить груз
     */
    unload_first_date?: string | null
    /**
     * @description Дата, до которой можно разгрузить груз
     */
    unload_last_date?: string | null
    /**
     * @description Расстояние
     */
    distance?: number
    /**
     * @description Минимальный тариф страхования
     */
    insured_min_tariff?: number
    /**
     * @description Примечание к грузу
     */
    note?: string | null
    /**
     * @description Тип временного интервала загрузки
     */
    date_type?: Schemas.DateType
    /**
     * @description Периодичность загрузки
     */
    periodicity_id?: Schemas.Periodicity
    /**
     * @description Номер заказа
     */
    order_number?: string | null
    /**
     * @description Включен ли кругорейс
     */
    krugoreis?: boolean
    /**
     * @description Описание параметров загрузки
     */
    loading?: Schemas.LoadPointViewForOrder2 | null
    /**
     * @description Описание дополнительных точек маршрута
     */
    extra_points?: Schemas.LoadExtraPointView[] | null
    /**
     * @description Описание параметров разгрузки
     */
    unloading?: Schemas.LoadPointViewForOrder2 | null
    /**
     * @description Описание габаритов груза
     */
    cargo?: Schemas.LoadCargo | null
    /**
     * @description Описание параметров желаемого транспорта
     */
    transport?: Schemas.LoadTransport | null
    /**
     * @description Параметры площадок груза
     */
    boards?: Schemas.BoardView[] | null
    /**
     * @description Параметры Торгов
     */
    auction?: Schemas.AuctionView2 | null
    pass_through_info?: Schemas.PassThroughInfo | null
    /**
     * @description Id первого контакта груза
     */
    contact_id1?: number | null
    /**
     * @description Id второго контакта груза
     */
    contact_id2?: number | null
    /**
     * @description Id подразделения груза
     */
    department_id?: number | null
    /**
     * @description Источник копирования груза
     */
    source?: Schemas.CopySource
    /**
     * @description Источник публикации груза
     */
    cargo_source?: string | null
    /**
     * @description Информация о лоте
     */
    lot_info?: Schemas.LotInformationView | null
  }

  export type LoadPointViewForOrder2 = {
    /**
     * @description Id города\
     * Значение из [словаря городов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    city_id?: number
    /**
     * @description Широта
     */
    latitude?: number | null
    /**
     * @description Долгота
     */
    longitude?: number | null
    /**
     * @description Улица
     */
    street?: string | null
    /**
     * @description Id из справочника организаций
     */
    organization_id?: string | null
    /**
     * @description Id адреса в организации
     */
    address_id?: string | null
    /**
     * @description Время начала загрузки
     */
    time_start?: string | null
    /**
     * @description Время конца загрузки
     */
    time_end?: string | null
    /**
     * @description Загрузка происходит круглосуточно
     */
    is_round_the_clock?: boolean
    /**
     * @description Id ближайших крупных городов
     */
    large_cities?: number[] | null
    loading_cargos?: Schemas.LoadingCargo[] | null
    organization?: Schemas.OrganizationView | null
    address?: Schemas.PointStockDocView | null
  }

  export type LoadExtraPointView = {
    /**
     * @description Id города\
     * Значение из [словаря городов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    city_id?: number
    /**
     * @description Тип дополнительной точки маршрута груза
     */
    point_type?: Schemas.LoadExtraPointType
    /**
     * @description Порядковый номер в маршруте
     */
    ordinal_id?: number
    /**
     * @description Расстояние
     */
    distance?: number
    /**
     * @description Адрес
     */
    street?: string | null
    /**
     * @description Id из справочника организаций
     */
    organization_id?: string | null
    /**
     * @description Id адреса в организации
     */
    address_id?: string | null
    /**
     * @description Широта
     */
    latitude?: number | null
    /**
     * @description Долгота
     */
    longitude?: number | null
    /**
     * @description Дата начала  загрузки
     */
    loading_date_start?: string | null
    /**
     * @description Дата конца загрузки
     */
    loading_date_end?: string | null
    /**
     * @description Время начала загрузки
     */
    loading_time_start?: string | null
    /**
     * @description Время конца загрузки
     */
    loading_time_end?: string | null
    /**
     * @description Круглосуточно
     */
    is_round_the_clock?: boolean
    organization?: Schemas.OrganizationView | null
    address?: Schemas.PointStockDocView | null
    loading_cargos?: Schemas.LoadingCargo[] | null
    unloading_cargos?: Schemas.UnloadingCargo[] | null
  }

  export type AuctionView2 = {
    /**
     * @description Id аукциона
     */
    auction_id?: string
    /**
     * @description Завершен ли аукцион
     */
    finished?: boolean
    /**
     * @description Время завершения аукциона
     *  
     */
    win_date?: string | null
    /**
     * @description Время, в течении которого нужно отправить документы, в часах
     */
    time_to_provide_documents?: number | null
    /**
     * @description Тип завершения аукциона
     */
    finish_type?: Schemas.AuctionFinishType
    /**
     * @description Следующая возможная ставка
     */
    actual_rate?: number | null
    /**
     * @description Валюта\
     * Значение из [словаря валют АТИ](https://ati.su/developers/api/dictionaries/cargoes/#get-v1.0-dictionaries-currencyTypes)
     */
    currency?: number | null
    /**
     * @description Тип оплаты в аукционе
     */
    payment_type?: Schemas.AuctionPaymentType | null
    /**
     * @description Дата начала аукциона
     */
    start_date?: string | null
    /**
     * @description Дата конца аукциона
     */
    end_date?: string | null
    /**
     * @description Есть ли возможные победители
     */
    has_possible_winner?: boolean | null
    /**
     * @description Количество участников
     */
    participants_count?: number | null
    /**
     * @description Ставки по аукциону
     */
    auction_rates?: Schemas.AuctionRate[] | null
    /**
     * @description Следующая возможная ставка без НДС
     */
    actual_rate_without_vat?: number | null
    /**
     * @description Следующая возможная ставка с НДС
     */
    actual_rate_with_vat?: number | null
    /**
     * @description Состояние аукциона
     */
    state?: Schemas.AuctionState | null
    /**
     * @description Количество актуальных ставок в аукционе
     */
    actual_rates_count?: number | null
    /**
     * @description Победитель просрочил отправку документов
     */
    documents_timed_out?: boolean | null
    /**
     * @description Id Заказа, который идет с победителем аукциона
     */
    active_deal_id?: string | null
    /**
     * @description Id груза, к которому привязан аукцион
     */
    load_id?: string | null
    /**
     * @description Начальная ставка
     */
    start_rate?: number | null
    /**
     * @description Продолжительность
     */
    duration?: number | null
    /**
     * @description Проставлять время окончания аукциона с момента первой ставки
     */
    start_since_first_bet?: boolean | null
    winner_criterion?: Schemas.WinnerCriteria | null
    winner_rate?: Schemas.AuctionRate | null
    has_winner?: boolean
  }

  /**
   * @names
   * * `None` — 0
   * * `Atrucks` — 1
   */
  export type CopySource = 0 | 1

  export type LotInformationView = {
    /**
     * @description Номер лота
     */
    lot_number?: number
  }

  export type DealView4 = {
    /**
     * @description Id копии груза
     */
    deal_load_id?: string | null
    /**
     * @description Id аккаунта фирмы грузоперевозчика
     */
    taker_ati_id?: string | null
    /**
     * @description Id контакта грузоперевозчика
     */
    taker_contact_id?: number
    /**
     * @description Список контактов грузоперевозчика
     */
    taker_contacts_list?: number[] | null
    /**
     * @description Id подразделения грузоперевозчика
     */
    taker_department_id?: number | null
    /**
     * @description Id подразделения грузовладельца
     */
    department_id?: number | null
    /**
     * @description Тип ставки
     */
    rate_type?: Schemas.RateType | null
    /**
     * @description Дата последнего обновления статуса заказа
     */
    updated_at?: string | null
    /**
     * @description Дата начала заказа
     */
    started_at?: string | null
    /**
     * @description Дата окончания заказа
     */
    finished_at?: string | null
    /**
     * @description Статус заказа
     */
    status?: Schemas.DealState
    /**
     * @description Тип заказа
     */
    deal_kind?: Schemas.DealKinds | null
    /**
     * @description Причина отмены заказа
     */
    denial_reason?: string | null
    /**
     * @description Просмотрена ли заявка
     */
    is_viewed?: boolean | null
    /**
     * @description Примечание к Заказу
     */
    deal_note?: string | null
    /**
     * @description Id заказа
     */
    deal_id?: string | null
    /**
     * @description Id груза, по которому был создан заказ
     */
    load_id?: string | null
    /**
     * @description Id подписанта
     */
    signer_id?: string | null
    /**
     * @description Параметры водителя в заказе
     */
    driver?: Schemas.DriverView3 | null
    /**
     * @description Параметры тягача в заказе
     */
    truck?: Schemas.TruckView3 | null
    /**
     * @description Параметры прицепа в заказе
     */
    trailer?: Schemas.TruckView3 | null
    /**
     * @description Параметры полуприцепа в заказе
     */
    semi_trailer?: Schemas.TruckView3 | null
    /**
     * @description Информация о заявке в АТИ Доках
     */
    document_info?: Schemas.DocumentInfoView | null
    /**
     * @description Ставка
     */
    rate?: number | null
    /**
     * @description Id валюты
     */
    currency?: number | null
    /**
     * @description Id типа ставки (любая, на карту, нал)
     */
    money_type?: number | null
    /**
     * @description Информация о дополнительных документах в заказах
     */
    documents?: Schemas.DocumentInfoView[] | null
    /**
     * @description Информация о файлах в заказах
     */
    files?: Schemas.DealFileView[] | null
    /**
     * @description Информация о шаблонах документов в заказах
     */
    document_templates?: Schemas.DealDocumentTemplatesView[] | null
    /**
     * @description Статусная модель перевозки
     *             
     * * `0` — Простая перевозка
     * * `1` — Первая миля
     * * `2` — Последняя миля
     * * `3` — Порожний контейнер
     */
    in_work_status_model?: Schemas.InWorkStatusModel
    /**
     * @description Информация о подстатусе заказа в исполнении
     */
    in_work?: Schemas.DealInWorkView | null
    /**
     * @description Информация об АТИ-Водителе по Заказу
     */
    tracker_info?: Schemas.DealTrackerInfoView | null
    /**
     * @description Данные по трекеру для текущего водителя
     */
    data_for_driver?: Schemas.DataForDriverView | null
    points?: Schemas.DealPointView[] | null
    /**
     * @description Информация об оплате
     */
    payment?: Schemas.DealPaymentView2 | null
    /**
     * @description Информация об оплате Заказа контрагентом
     */
    pay_docs?: Schemas.PayDocsView2 | null
    /**
     * @description Реквизиты перевозчика
     */
    taker_requisites?: Schemas.RequisiteView | null
    /**
     * @description Время до которого груз зарезервирован
     */
    end_of_reservation?: string | null
    /**
     * @description Id связанных Торгов
     */
    auction_id?: string | null
    /**
     * @description Дата отмены приглашения "Оформить Заказ"
     */
    cancellation_date?: string | null
    /**
     * @description Доступ к документу
     */
    document_access?: Schemas.DealDocumentAccess
    /**
     * @description Список складов с Временными окнами с доступом к документу
     */
    timeslots_warehouse_ids?: number[] | null
    /**
     * @description Ссылка на документ в pdf
     */
    document_file_url?: string | null
    /**
     * @description Запрос отслеживания через АТИ Водитель
     */
    is_tracking?: boolean
    /**
     * @description Показывать ли ставку водителю (для ОЗ)
     */
    should_show_rate_to_driver?: boolean | null
  }

  export type DriverView3 = {
    /**
     * @description Идентификатор водителя
     */
    id?: string
    /**
     * @description Идентификатор реквизитов водителя заказа
     */
    parent_driver_id?: string | null
    /**
     * @description Имя водителя
     */
    first_name?: string | null
    /**
     * @description Фамилия водителя
     */
    second_name?: string | null
    /**
     * @description Отчество водителя
     */
    patronymic?: string | null
    /**
     * @description Номер телефона
     */
    phone_number?: string | null
    /**
     * @description Нормализованный номер телефона
     */
    normalized_phone_number?: number
    /**
     * @description Номер водительского удостоверения
     */
    driver_license_number?: string | null
    /**
     * @description Серия паспорта
     */
    passport_series?: string | null
    /**
     * @description Номер паспорта
     */
    passport_number?: string | null
    /**
     * @description Кем выдан
     */
    passport_issued_by?: string | null
    /**
     * @description Когда выдан
     */
    passport_when_issued?: string
    /**
     * @description Прописка
     */
    registration?: string | null
    /**
     * @description Флаг привлеченного водителя (со стороны)
     */
    is_attracted_driver?: boolean
    /**
     * @description Id связанной сущности по Заказу
     */
    last_deal_related_id?: string | null
    /**
     * @description Краткое описание водителя
     */
    description?: string | null
    /**
     * @description Фирма от которой привлечен водитель.
     */
    attracted_from_firm?: string | null
    /**
     * @description Запрещено редактирование и удаление водителя.
     */
    modification_restricted?: boolean
    /**
     * @description Идентификатор источника информации о водителе
     */
    origin?: Schemas.DriverOrigin
    /**
     * @description Дата рождения
     */
    date_of_birth?: string | null
    /**
     * @description Код подразделения
     */
    department_code_in_passport?: string | null
    /**
     * @description ИНН водителя
     */
    driver_inn?: string | null
    /**
     * @description Есть в Черном списке
     */
    in_cargo_owner_black_list?: boolean
    /**
     * @description Внешний идентификатор
     */
    external_id?: string | null
    /**
     * @description Причины добавления в Черный список
     */
    black_list_reasons?: string[] | null
    tracker_presence?: Schemas.TrackerPresenceView | null
    phone_binding?: Schemas.PhoneBindingView | null
    passport_scans?: Schemas.ScanView2[] | null
    driver_license_scans?: Schemas.ScanView2[] | null
  }

  export type PhoneBindingView = {
    status?: Schemas.PhoneBindingStatus
    account_id?: string | null
    firm_name?: string | null
    owner_type?: Schemas.PhoneOwnerType
  }

  /**
   * @names
   * * `Employee` — 0
   * * `Request` — 1
   * * `Reject` — 2
   * * `Fired` — 3
   * * `Retired` — 4
   */
  export type PhoneBindingStatus = 0 | 1 | 2 | 3 | 4

  export type ScanView2 = {
    /**
     * @description Id "владельца" скана
     */
    owner_id?: string
    /**
     * @description Id Скана
     */
    id?: string
    /**
     * @description Адрес расположения файла скана в хранилище
     */
    path?: string | null
    /**
     * @description Имя файла скана в хранилище
     */
    name?: string | null
    /**
     * @description ID файла
     */
    file_id?: string | null
    /**
     * @description Тип скана
     */
    type?: Schemas.AutoparkDocumentType
  }

  /**
   * @description Транспортное средство
   */
  export type TruckView3 = {
    /**
     * @description Id транспортного средства
     */
    id?: string
    /**
     * @description Id ТС, с которым было связано ТС во время выполнения последнего Заказа
     */
    last_deal_related_id?: string | null
    /**
     * @description Тип транспортного средства
     */
    type?: Schemas.TruckType
    /**
     * @description Описание транспортного средства
     */
    description?: string | null
    /**
     * @description Марка
     */
    brand_id?: number | null
    /**
     * @description Модель
     */
    model?: string | null
    /**
     * @description Номер
     */
    number?: string | null
    /**
     * @description Телефон
     */
    phone_number?: string | null
    /**
     * @description Тип владения ТС
     *             
     * * `0` - Собственное
     * * `1` - Привлеченное
     * * `2` - Аренда
     * * `3` - Лизинг
     * * `4` - Совместная собственность (супругов)
     * * `5` - Безвозмездное пользование
     */
    ownership_type?: Schemas.TruckOwnershipType
    /**
     * @description Тип Кузова
     */
    car_type_id?: number
    /**
     * @description Грузоподъемность
     */
    capacity?: number | null
    /**
     * @description Объем
     */
    volume?: number | null
    /**
     * @description Длина
     */
    length?: number | null
    /**
     * @description Ширина
     */
    width?: number | null
    /**
     * @description Высота
     */
    height?: number | null
    /**
     * @description Год выпуска
     */
    manufacture_year?: number | null
    /**
     * @description VIN
     */
    vin?: string | null
    /**
     * @description СТС
     */
    vrc?: string | null
    /**
     * @description Номер кузова
     */
    body_number?: string | null
    /**
     * @description Размерность контейнера
     */
    dimension?: number | null
    /**
     * @description Номер ПТС
     */
    truck_passport_number?: string | null
    /**
     * @description Способность возить реф-контейнеры
     */
    can_refrigerator?: boolean | null
    /**
     * @description Есть GenSet
     */
    has_gen_set?: boolean | null
    /**
     * @description Имя владельца по СТС
     */
    truck_owner_name?: string | null
    /**
     * @description Способность перевозить тяжелые контейнеры
     *  
     */
    can_carry_heavy_container?: boolean | null
    /**
     * @description Способность перевозить высокие контейнеры
     */
    can_carry_tall_container?: boolean | null
    /**
     * @description Внешний идентификатор
     */
    external_id?: string | null
    /**
     * @description Проверено
     */
    verified?: boolean
    /**
     * @description Запрещено редактирование и удаление ТС.
     */
    modification_restricted?: boolean
    tracker_presence?: Schemas.TrackerPresenceView | null
    phone_binding?: Schemas.PhoneBindingView | null
    /**
     * @description Id транспортного средства каталогов
     */
    parent_truck_id?: string | null
    /**
     * @description Сканы ПТС
     */
    scans?: Schemas.ScanView2[] | null
    photos?: Schemas.ScanView2[] | null
    /**
     * @description Датчики мониторинга транспорта
     */
    sensors?: Schemas.SensorView[] | null
    /**
     * @description Источник создания Транспорта
     */
    origin?: Schemas.TruckOrigin
  }

  /**
   * @description Датчик мониторинга транспортного средства
   */
  export type SensorView = {
    /**
     * @description Идентификатор датчика
     */
    sensor_id?: number
    /**
     * @description Наименование датчика
     */
    sensor_name?: string | null
    /**
     * @description Идентификатор поставщика датчиков мониторинга транспорта
     */
    provider_id?: number
    /**
     * @description Идентификатор датчика из внешней системы мониторинга
     */
    provider_sensor_id?: string | null
    /**
     * @description Статус активности датчика
     */
    is_active?: boolean
    /**
     * @description Дата окончания действия датчика
     */
    unactivate_date?: string | null
    /**
     * @description Информация о сервере поставщика устройства мониторинга транспорта
     */
    host?: Schemas.SensorHostView | null
  }

  /**
   * @description Информация о сервере поставщика устройства мониторинга транспорта
   */
  export type SensorHostView = {
    /**
     * @description Идентификатор сервера
     */
    sensor_host_id?: number
    /**
     * @description Адрес сервера
     */
    url?: string | null
  }

  export type DealTrackerInfoView = {
    /**
     * @description флаг "Укажу данные позже"
     */
    driver_data_expected?: boolean
    /**
     * @description Доступ грузовладельца к информации о трекере
     */
    owner_access?: Schemas.TrackerOwnerAccess
    /**
     * @description Время изменения информации о трекере
     */
    updated_at?: string
  }

  export type PayDocsView2 = {
    /**
     * @description Информация о копиях документов
     */
    documents_copies?: Schemas.DocumentStatusInfoView | null
    /**
     * @description Информация о оригиналах документов
     */
    documents_original?: Schemas.DocumentStatusInfoView | null
    /**
     * @description Информация об отслеживании оригиналов документов
     */
    documents_original_track?: Schemas.DocumentTrackingInfoView | null
    /**
     * @description Информация о оплате
     */
    payment?: Schemas.PaymentStatusView | null
    /**
     * @description Информация о закрывающих документах (Только для Перевозчика)
     */
    closing_documents?: Schemas.DocumentStatusInfoView | null
  }

  /**
   * @description Место создания документа
   *             
   * * `0` — попап заказов
   * * `1` — попап данных для АТИ-Водителя
   * * `2` — интегратор
   *  
   * @names
   * * `OrderDocumentsPopup` — 0
   * * `AddEditDataForDriverPopup` — 1
   * * `Integrators` — 2
   */
  export type DealDocumentSourceTypes = 0 | 1 | 2

  export type OrdersInformation = {
    /**
     * @description Список заказов
     */
    orders?: Schemas.IOrder[] | null
    /**
     * @description Список аккаунтов, которые фигурируют в заказах
     */
    accounts?: (Record<string, unknown> & Record<string, Schemas.Account>) | null
    /**
     * @description Счетчики для вкладок "В исполнении", "Архив", "Согласование", "ДО и Оплата"
     */
    counters?: Schemas.OrdersCounters | null
    /**
     * @description Список городов, фигурирующих в заказах
     */
    cities?: (Record<string, unknown> & Record<string, Schemas.City>) | null
    /**
     * @description Список комментариев 
     */
    comments?: (Record<string, unknown> & Record<string, Schemas.Comment[]>) | null
    boards?: (Record<string, unknown> & Record<string, Schemas.Board>) | null
    ati_id_map?: (Record<string, unknown> & Record<string, string>) | null
    organizations?: Schemas.Organization[] | null
    lot_info?: Schemas.CargosLots[] | null
  }

  export type IOrder = {
    load?: Schemas.Load | null
    is_red?: boolean
  }

  export type Load = {
    id?: string
    load_number?: string | null
    updated_at?: string
    added_at?: string
    archive_date?: string | null
    distance?: number
    distance_type?: number
    platon_roads_length?: number
    toll_roads_length?: number
    travel_time?: string
    zimnik?: boolean
    ferries?: boolean
    true_price?: number
    true_currency_id?: number
    parent_id?: string | null
    root_id?: string | null
    is_unpublished?: boolean
    firm_id?: number
    alias_id?: string | null
    contact_id1?: number
    contact_id2?: number | null
    department_id?: number | null
    note?: string | null
    first_date?: string
    last_date?: string
    date_type?: Schemas.DateType
    periodicity_id?: Schemas.Periodicity
    order_number?: string | null
    hidden?: boolean
    krugoreis?: boolean
    loading?: Schemas.LoadPoint | null
    extra_points?: Schemas.LoadExtraPoint[] | null
    unloading?: Schemas.LoadPoint | null
    cargo?: Schemas.LoadCargo | null
    transport?: Schemas.LoadTransport | null
    payment?: Schemas.LoadPayment | null
    load_meta?: Schemas.LoadMeta | null
    deal?: Schemas.DealItem | null
    boards?: Schemas.LoadBoard[] | null
    auction_id?: string | null
    auction?: Schemas.Auction | null
    unload_first_date?: string | null
    unload_last_date?: string | null
    pass_through_info?: Schemas.PassThroughInfo | null
    source?: Schemas.CopySource
    lot_id?: string | null
    lot_number?: number | null
    archive_reason?: number | null
    is_pass_through_copy?: boolean
    cargo_source?: string | null
  }

  export type DealItem = {
    auction?: Schemas.Auction | null
    auction_id?: string | null
    deal_type?: Schemas.DealType
  }

  /**
   * @names
   * * `None` — 0
   * * `Deal` — 1
   * * `Auction` — 2
   */
  export type DealType = 0 | 1 | 2

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
    region_id?: number | null
    country_id?: number | null
    full_name?: string | null
    is_regional_center?: boolean
    name?: string | null
    region_name?: string | null
    country_name?: string | null
    name_eng?: string | null
    region_name_eng?: string | null
    country_name_eng?: string | null
    country_code_name?: string | null
    time_zone?: number
    latitude?: number | null
    longitude?: number | null
  }

  export type Board = {
    color?: string | null
    id?: string | null
    name?: string | null
    original_name?: string | null
    view_only_own?: boolean
    /**
     * @description Доступна ли площадка текущему контакту
     */
    available_for_contact?: boolean
  }

  export type CargosLots = {
    id?: string
    lot_number?: number
    cargo_application_ids?: string[] | null
    payment?: Schemas.PaymentResponse | null
    added_at?: string
  }

  export type PaymentResponse = {
    type?: string | null
  }

  export type OrderFormView = {
    /**
     * @description Идентификатор Заказа
     */
    id?: string | null
    /**
     * @description Точки маршрута, включая загрузку и разгрузку
     */
    points?: Schemas.OrderFormPoint[]
    driver?: Schemas.DriverView3
    truck?: Schemas.TruckView3
    semitrailer?: Schemas.TruckView3
    trailer?: Schemas.TruckView3
    /**
     * @description Количество ремней для груза.
     */
    belt_count?: number | null
    /**
     * @description Параметр, определяющий степень опасности груза
     */
    adr?: number | null
    /**
     * @description Ставка
     */
    rate?: number | null
    /**
     * @description Идентификатор валюты ставки
     */
    currency?: number | null
    /**
     * @description Типы оплаты
     */
    rate_type?: Schemas.RateType | null
    /**
     * @description Ставка 
     */
    money_type?: number | null
    /**
     * @description Показывать ли ставку водителю
     */
    should_show_rate_to_driver?: boolean | null
    /**
     * @description Номер заказа или груза
     */
    order_number?: string | null
    /**
     * @description Id типов загрузки. 
     */
    loading_types?: string[]
    /**
     * @description Id типов разгрузки. 
     */
    unloading_types?: string[]
    /**
     * @description Список файлов
     */
    files?: Schemas.OrderFormDealFile[]
  }

  export type OrderFormPoint = {
    id?: string
    /**
     * @description Id города\
     * Значение из [словаря городов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    city_id?: number
    /**
     * @description Id региона\
     * Значение из [словаря регионов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    region_id?: number
    /**
     * @description Id страны\
     * Значение из [словаря стран АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    country_id?: number
    /**
     * @description Широта
     */
    lat?: number | null
    /**
     * @description Долгота
     */
    lon?: number | null
    /**
     * @description Адрес
     */
    address?: string | null
    /**
     * @description Тип точки
     */
    type?: Schemas.DealPointTypes
    time?: Schemas.OrderFormPointTime | null
    date?: Schemas.OrderFormPointDate | null
    note?: string | null
    contact_persons?: Schemas.OrderFormContactPerson[] | null
    cargos?: Schemas.OrderFormCargo[] | null
    organization_info?: Schemas.OrganizationInfo | null
  }

  export type OrderFormPointTime = {
    /**
     * @description Время прибытия
     */
    from?: string | null
    /**
     * @description Время до
     */
    to?: string | null
    is_round_the_clock?: boolean | null
  }

  export type OrderFormPointDate = {
    /**
     * @description Дата прибытия 
     */
    from?: string | null
    /**
     * @description Дата до
     */
    to?: string | null
  }

  export type OrderFormContactPerson = {
    name?: string | null
    phone?: string | null
  }

  export type OrderFormCargo = {
    /**
     * @description Id груза
     */
    id?: number
    /**
     * @description Наименование груза
     */
    name_id?: number
    name?: string | null
    /**
     * @description Упаковка
     */
    packaging_type?: number | null
    packaging_quantity?: number | null
    weight?: Schemas.CargoWeight | null
    /**
     * @description Объем
     */
    volume?: number | null
    /**
     * @description Габариты
     */
    sizes?: Schemas.OrderFormLoadSize | null
  }

  export type OrderFormLoadSize = {
    /**
     * @description Длина в метрах
     */
    length?: number | null
    /**
     * @description Ширина в метрах
     */
    width?: number | null
    /**
     * @description Высота в метрах
     */
    height?: number | null
    /**
     * @description Диаметр в метрах
     */
    diameter?: number | null
  }

  export type OrganizationInfo = {
    organization_id?: string | null
    address_id?: string | null
    contact_persons?: Schemas.ContactPerson2[] | null
    note?: string | null
    schedule?: string | null
    title?: string | null
  }

  export type OrderFormDealFile = {
    id?: string | null
    file_name?: string | null
    link?: string | null
    source_type?: Schemas.DealFileSourceTypes
    file_id?: string | null
  }

  export type ChangeAddressDto = {
    /**
     * @description Идентификатор Заказа
     */
    deal_id?: string | null
    /**
     * @description Признак изменения
     */
    changed?: boolean
    /**
     * @description Точки маршрута
     */
    routes?: Schemas.ChangeRouteDto[] | null
  }

  export type ChangeRouteDto = {
    /**
     * @description Порядковый номер точки
     */
    ordinal_id?: number
    /**
     * @description Id точки
     */
    deal_point_id?: string | null
    /**
     * @description Тип точки маршрута
     *             
     * * `1` — Загрузка
     * * `2` — Разгрузка
     * * `3` — Таможня
     * * `8` — Ехать через
     */
    point_type?: Schemas.DealPointTypes
    /**
     * @description Адрес
     */
    address?: string | null
    /**
     * @description Id города\
     * Значение из [словаря городов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    city_id?: number | null
    /**
     * @description Широта
     */
    latitude?: number | null
    /**
     * @description Долгота точки
     */
    longitude?: number | null
    /**
     * @description Id организации из справочника 
     */
    organization_id?: string | null
    /**
     * @description Id адреса в организации из справочника 
     */
    address_id?: string | null
  }

  export type OrderIdWithType = {
    id?: string
    type?: Schemas.OrderIdTypes
  }

  /**
   * @description Тип Заказа
   * 
   * * `0` — Заказ
   * * `1` — Аукцион
   * * `2` — Персональное приглашение
   * * `3` — Груз в заказе
   *  
   * @names
   * * `Deal` — 0
   * * `Auction` — 1
   * * `PersonalDealLoadId` — 2
   */
  export type OrderIdTypes = 0 | 1 | 2

  export type OrdersInformationViewFrontend = {
    /**
     * @description Список заказов
     */
    orders?: Schemas.IOrderView[] | null
    /**
     * @description Список аккаунтов, которые фигурируют в заказах
     */
    accounts?: (Record<string, unknown> & Record<string, Schemas.AccountView2>) | null
    /**
     * @description Счетчики для вкладок "В исполнении", "Архив", "Согласование", "ДО и Оплата"
     */
    counters?: Schemas.CountersView2 | null
    /**
     * @description Список городов, фигурирующих в заказах
     */
    cities?: (Record<string, unknown> & Record<string, Schemas.CityView2>) | null
    /**
     * @description Список комментариев 
     */
    comments?: (Record<string, unknown> & Record<string, Schemas.Comment[]>) | null
  }

  export type IOrderView = {
    /**
     * @description Копия груза
     */
    load?: Schemas.LoadView3 | null
    /**
     * @description Описание параметров заказа
     */
    deal?: Schemas.DealView4 | null
    /**
     * @description Отмечен ли заказ красной точкой (признак того, что требуется действие)
     */
    is_red?: boolean
  }

  export type AccountView2 = {
    firm_type?: string | null
    /**
     * @description Id аккаунта
     */
    account_id?: string | null
    /**
     * @description Полное имя фирмы
     */
    full_firm_name?: string | null
    /**
     * @description Краткое имя фирмы
     */
    firm_name?: string | null
    /**
     * @description Брэнд
     */
    brand?: string | null
    /**
     * @description Тип собственности
     */
    ownership?: string | null
    /**
     * @description Id типа собственности
     */
    ownership_id?: number
    /**
     * @description Паспорт фирмы
     */
    passport?: Schemas.PassportView2 | null
    /**
     * @description Список контактов
     */
    contacts?: Schemas.ContactView2[] | null
    location?: Schemas.FirmServiceCityView | null
    contact_id?: number | null
    time_zone_minutes?: number | null
    ri_users_attributes?: number
    payed_services?: Schemas.PayedServicesView | null
    is_rrd?: boolean
    loads_access?: number
  }

  export type PassportView2 = {
    /**
     * @description Статус (цвет звезд)
     */
    status?: Schemas.FirmStatus
    /**
     * @description Количество баллов
     */
    total_score?: number
  }

  export type ContactView2 = {
    id?: number
    name?: string | null
    telephone?: string | null
    mobile?: string | null
    email?: string | null
    user_rights?: number
  }

  export type FirmServiceCityView = {
    city_name?: string | null
    short_name?: string | null
  }

  export type PayedServicesView = {
    end_date?: string
    remaining_days?: number
    services?: Schemas.PayedServiceView[] | null
  }

  export type PayedServiceView = {
    service_id?: number
    service_amount?: number | null
    service_name?: string | null
  }

  export type CountersView2 = {
    /**
     * @description В исполнении
     */
    in_progress?: Schemas.OrderCounter | null
    /**
     * @description Согласование
     */
    reconciliation?: Schemas.OrderCounter | null
    /**
     * @description Архив
     */
    completed?: Schemas.OrderCounter | null
    /**
     * @description ДО и Оплата
     */
    payments?: Schemas.OrderCounter | null
    /**
     * @description Ваши грузы
     */
    published?: Schemas.OrderCounter | null
    /**
     * @description Архив грузов
     */
    аrchive?: Schemas.OrderCounter | null
    /**
     * @description Счетчик лотов
     */
    lot_counters?: (Record<string, unknown> & Record<string, Schemas.LotCounters>) | null
  }

  export type LotCounters = {
    /**
     * @description Количество грузов в лоте
     */
    loads_count?: number
    /**
     * @description Количество невзятых грузов из лота
     */
    not_taken_count?: number
  }

  export type CityView2 = {
    /**
     * @description Id города\
     * Значение из [словаря городов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    id?: number
    /**
     * @description Id региона\
     * Значение из [словаря регионов АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    rid?: number | null
    /**
     * @description Id страны\
     * Значение из [словаря стран АТИ](https://ati.su/developers/api/dictionaries/geo/) 
     */
    cid?: number | null
    /**
     * @description Полное имя города
     */
    name?: string | null
    /**
     * @description Является ли региональным центром
     */
    isRegCenter?: boolean
    /**
     * @description Название города
     */
    city?: string | null
    /**
     * @description Название региона
     */
    region?: string | null
    /**
     * @description Название страны
     */
    country?: string | null
    /**
     * @description Название города на английском
     */
    cityEng?: string | null
    /**
     * @description Название региона на английском
     */
    regionEng?: string | null
    /**
     * @description Название страны на английском
     */
    countryEng?: string | null
    /**
     * @description Код страны
     */
    code?: string | null
    /**
     * @description Таймзона
     */
    timeZone?: number
  }

  export type FullOrdersInfoByIdsDto = Schemas.FullOrdersInfoDto & {
    ids?: Schemas.OrderIdWithType[] | null
  }

  export type TakeLoadRequest = {
    RateType?: Schemas.RateType
    DriverId?: string | null
    TruckInfoId?: string | null
    SemitrailerId?: string | null
    TrailerId?: string | null
    RequisitesId?: string
    SignerId?: string | null
    IsDropDocs?: boolean
    TrackerOwnerAccess?: number | null
    DealKind?: Schemas.DealKinds | null
    FixedRateId?: string | null
    TakerNote?: string | null
  }

  export type DealAcceptFromLoadDtoInbox = Schemas.DealAcceptBaseDtoInbox & {
    /**
     * @description Список пунктов загрузки/разгрузки с организациями
     */
    point_ids?: Schemas.DealPointDtoInbox[] | null
  }

  export type DealPointDtoInbox = {
    /**
     * @description Id точки загрузки/разгрузки из заказа
     */
    deal_point_id?: string
    /**
     * @description Id организации
     */
    participant_id?: string
    /**
     * @description Id контакта для точки
     */
    point_contact_id?: string | null
    /**
     * @description Id склада
     */
    stock_id?: string | null
  }

  export type DealAcceptBaseDtoInbox = {
    /**
     * @description Id шаблона документа
     */
    template_id?: string | null
    /**
     * @description Тип документа
     */
    document_type?: string | null
    /**
     * @description Id реквизитов
     */
    requisite_id?: string
    /**
     * @description Id подписанта
     */
    signer_id?: string | null
    /**
     * @description Номер документа
     */
    contract_number?: string | null
    /**
     * @description Дата документа
     */
    contract_start_date?: string | null
  }

  export type CreateContractDtoInbox = {
    /**
     * @description Id реквизитов
     */
    requisite_id?: string
    /**
     * @description Id подписанта
     */
    signer_id?: string | null
    /**
     * @description Тип договора
     */
    document_type?: string | null
    /**
     * @description Id пользовательского шаблона, если он был выбран
     */
    template_id?: string | null
  }

  export type DeclineOrderDto = {
    reason?: string | null
    action?: Schemas.FinishActionFrontend | null
  }

  /**
   * @description Действие после отмены заказа
   * * `0` — Выполнить действие по умолчанию 
   * * `1` — Восстановить груз
   * * `2` — Оставить груз в Архиве (если по грузу есть торги, они отменятся)
   * * `3` — Сменить победителя
   * * `4` — Перезапустить Торги
   * * `5` — Ничего не делать, в том числе основное действие
   *  
   * @names
   * * `Default` — 0
   * * `PublishLoad` — 1
   * * `DeleteLoad` — 2
   * * `SelectNewWinner` — 3
   * * `RestartAuction` — 4
   * * `DoNothing` — 5
   */
  export type FinishActionFrontend = 0 | 1 | 2 | 3 | 4 | 5

  export type PersonalInvitationDTO2 = {
    /**
     * @description Id груза
     */
    load_id: string
    /**
     * @description Id аккаунта приглашаемой фирмы
     */
    taker_ati_id: string
    /**
     * @description ID контакта перевозчика
     */
    taker_contact_id?: number | null
    /**
     * @description Список контактов приглашаемой фирмы
     */
    taker_contacts_list: number[]
    /**
     * @description Через сколько минут отменить приглашение "Оформить Заказ"
     * Принимаемые значения: от 1 до 4320 включительно
     * По умолчанию - 4320 (3 суток)
     */
    cancel_after_in_minutes?: number | null
    /**
     * @description Дата отмены предложения на перевозку груза, формат ISO 8601
     */
    cancellation_date?: string | null
    payment: Schemas.PersonalInvitationPaymentDTO2
    /**
     * @description Запрос отслеживания через АТИ Водитель
     */
    is_tracking?: boolean | null
  }

  /**
   * @description Параметры оплаты заказа. Обязательно указание одной ставки и валюты для неё.
   */
  export type PersonalInvitationPaymentDTO2 = {
    /**
     * @description Сумма
     */
    price?: number | null
    /**
     * @description ID валюты
     */
    currency_id?: number | null
    /**
     * @description Сумма с НДС
     */
    nds_price?: number | null
    /**
     * @description ID валюты c НДС
     */
    nds_currency_id?: number | null
    /**
     * @description Сумма без НДС
     */
    not_nds_price?: number | null
    /**
     * @description ID валюты без НДС
     */
    not_nds_currency_id?: number | null
    /**
     * @description Есть ли предоплата
     */
    prepay_percent_enabled?: boolean
    /**
     * @description Процент предоплаты
     */
    prepay_percent?: number | null
    /**
     * @description Оплата на выгрузке
     */
    on_unloading?: boolean
    /**
     * @description Срок оплаты
     */
    max_bank_days?: number | null
    /**
     * @description Есть ли срок оплаты
     */
    max_bank_days_enabled?: boolean
    payment_source?: Schemas.PaymentSource
    /**
     * @description ID источника параметров оплаты
     */
    source_id?: string | null
  }

  export type PersonalOfferInvitationDTO2 = {
    /**
     * @description Id груза
     */
    load_id?: string
    /**
     * @description Id встречного приглашения.
     * Значение из метода [получения отзывов](https://ati.su/developers/api/loads/published/#get-v1.0-loads-new-responses)
     */
    response_id?: string
    /**
     * @description По каким ставкам отправить приглашение. 
     * Типы ставок:
     *             
     * * `0` — наличные
     * * `1` — б/нал с НДС
     * * `2` — б/нал без НДС
     */
    rate_types?: Schemas.PriceType[] | null
    /**
     * @description Через сколько минут отменить приглашение "Оформить Заказ".
     * Допустимое значение от 1 до 4320 минут. По умолчанию - 4320 (3 суток)
     */
    cancel_after_in_minutes?: number | null
    /**
     * @description Приглашение создано автоматически
     */
    is_auto?: boolean
    /**
     * @description Архивировать заявку при срабатывании автоматического приглашения
     */
    need_archive_on_invite?: boolean
  }

  export type LoadListInvitationsView = {
    personal_offers?: (Record<string, unknown> & Record<string, Schemas.LoadPersonalInvitationView2[]>) | null
    accounts?: (Record<string, unknown> & Record<string, Schemas.AccountView2>) | null
  }

  export type LoadPersonalInvitationView2 = {
    load_id?: string
    taker_ati_id?: string | null
    /**
     * @description Id контакта (для совместимости со старым фронтом)
     */
    taker_contact_id?: number
    taker_contacts_list?: number[] | null
    /**
     * @description Дата отмены персонального приглашения в UTC
     */
    cancellation_date?: string | null
    deal_kind?: Schemas.DealKinds
    payment?: Schemas.PersonalInvitationPayment | null
    /**
     * @description Запрос отслеживания через АТИ Водитель
     */
    is_tracking?: boolean
  }

  export type PersonalInvitationPayment = {
    price?: number | null
    currency_id?: number | null
    nds_price?: number | null
    nds_currency_id?: number | null
    not_nds_price?: number | null
    not_nds_currency_id?: number | null
    prepay_percent?: number | null
    prepay_percent_enabled?: boolean
    on_unloading?: boolean
    max_bank_days?: number | null
    max_bank_days_enabled?: boolean
    payment_source?: Schemas.PaymentSource
    source_id?: string | null
  }

  export type InvitationSearchFilter = {
    /**
     * @description Роль пользователя, по умолчанию: Грузовладелец
     * 
     * * `0` — Грузовладелец
     * * `1` — Перевозчик
     */
    role?: Schemas.OrderRole
    /**
     * @description Список id грузов
     */
    load_ids?: string[] | null
  }

  export type FirmsDealMap = {
    phone_number?: string | null
    deals?: Schemas.DealMapWithProgress[] | null
  }

  export type DealMapWithProgress = {
    deal_id?: string
    goals?: unknown | null
    predicted_route?: unknown | null
    rotation_angle?: unknown | null
    traces?: Schemas.RoutedTrace[] | null
    progress_bar_percent?: number
    last_deal_status?: string | null
  }

  export type MapsFilterRequest = {
    zoom_square_request?: Schemas.GeoSquare | null
    /**
     * @description Роль
     * 
     * * `0` — Грузовладелец
     * * `1` — Перевозчик
     */
    role?: Schemas.OrderRole | null
    /**
     * @description Список подразделений
     */
    departments?: number[] | null
  }

  export type GeoSquare = {
    south_west?: Schemas.GeoPair | null
    north_east?: Schemas.GeoPair | null
    zoom?: number
  }

  export type GeoPair = {
    lat?: number
    lng?: number
  }

  export type DealIdsAndRoleRequestDto = {
    deal_ids?: string[] | null
    role?: Schemas.OrderRole
  }

  export type DocumentTemplateDto = {
    access?: Schemas.DealDocumentTemplateAccess
    deal_id?: string
    deal_point_id?: string
    cargoes_ids_hash?: number
    document_id?: string
    /**
     * @description Список складов с Временными окнами с доступом к документу
     */
    timeslots_warehouse_ids?: number[] | null
  }

}