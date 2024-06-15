/**
 *  ........................................
 *  . этот файл сгенерирован автоматически .
 *  ........................................
 */

import { Schemas } from './schemas';

/**
 * Типы эндпойнтов для сервиса `API Заказов`
 * @see {@link http://staging.orders-v1-0.service.consul:82/_internal/orders/swagger/index.html swagger}
 */
export type Paths = {
  '/orders/contracts': {
    get: {
      queryParams: {
        cargoOwnerRequisitesId: string
        dealId: string
      }
      res: Schemas.ContractView
    }
  }
  '/public/v1/orders/driver/map_route/by_deal': {
    /**
     * @summary Получение информации для карты ативодителя с зумированием
     */
    get: {
      queryParams: {
        /**
         * @description Id Заказа 
         */
        deal_id: string
        /**
         * @description Широта юго-запад
         */
        south_west_lat: number
        /**
         * @description Долгота юго-запад
         */
        south_west_lng: number
        /**
         * @description Широта северо-восток
         */
        north_east_lat: number
        /**
         * @description Долгота северо-восток
         */
        north_east_lng: number
        /**
         * @description Коэффициент масштабирования
         */
        zoom: number
        /**
         * @description Количество секунд до текущего момента
         */
        interval: number | null
      }
      /**
       * @description Вернем информацию для карты
       */
      res: Schemas.DealRoutedMap
    }
  }
  '/public/v1/orders/driver/map/history': {
    /**
     * @summary Получение истории заказа для отображения на карте
     */
    get: {
      queryParams: {
        /**
         * @description Id Заказа 
         */
        deal_id: string
      }
      /**
       * @description Вернем историю
       */
      res: unknown
    }
  }
  '/public/v1/orders/driver/map/route_info': {
    /**
     * @summary Получение данных для карты с предполагаемым маршрутом
     */
    get: {
      queryParams: {
        deal_id: string
      }
      res: unknown
    }
  }
  '/v2/orders/unilateral': {
    /**
     * @summary Создание и изменение заявки водителю.
     */
    post: {
      /**
       * @description Возвращает информацию по Заказу
       */
      res: Schemas.UnilateralOrderViewOfFullDealView
    }
  }
  '/v1.2/orders/documents/{parentDocumentId}/invoice': {
    /**
     * @description Позволяет перевозчику и грузовладельцу создать счет для Заказа, оформленного через систему АТИ-Доки, для Заказа в статусах: исполнение, документы и оплата, в архиве
     * @summary Создание счета
     */
    post: {
      pathParams: {
        /**
         * @description Id документа
         */
        parentDocumentId: string
      }
      /**
       * @description Возвращает информацию по счету
       */
      res: Schemas.DocumentMinView
    }
  }
  '/v1.2/orders/documents/{parentDocumentId}/act': {
    /**
     * @description Позволяет перевозчику и грузовладельцу создать двухсторонний акт для Заказа, оформленного через систему АТИ-Доки, для Заказа в статусах: исполнение, документы и оплата, в архиве
     * @summary Создание акта
     */
    post: {
      pathParams: {
        /**
         * @description Id документа
         */
        parentDocumentId: string
      }
      /**
       * @description Возвращает информацию по акту
       */
      res: Schemas.DocumentMinView
    }
  }
  '/v1.2/orders/documents/{parentDocumentId}/unilateral_dissolution': {
    /**
     * @description Позволяет перевозчику и грузовладельцу создать уведомление об отклонении Заказа, оформленного через систему АТИ-Доки, для Заказа в исполнении
     * @summary Создание уведомления о расторжении
     */
    post: {
      pathParams: {
        /**
         * @description Id документа
         */
        parentDocumentId: string
      }
      /**
       * @description Возвращает информацию по уведомлению
       */
      res: Schemas.DocumentMinView
    }
  }
  '/v1.2/orders/cargo_owner/{dealId}/driver_tracker_points': {
    /**
     * @description Обновляет информацию, необходимую водителю для использования приложения АТИ Водитель и отправляет ее на приложение.
     * В тело метода включается информация о типе точки (загрузка или разгрузка), а также информация об адресе, географических координатах,
     * дате и времени, контактном лице на точке
     * @summary Обновление заказа для АТИ Водителя.
     */
    post: {
      pathParams: {
        /**
         * @description Id Заказа
         */
        dealId: string
      }
      /**
       * @description Созданная информация по заказу
       */
      res: Schemas.DriverTrackerPointView[]
    }
  }
  '/v1.2/orders/carrier/{dealId}/driver_tracker_points': {
    /**
     * @description Возвращает массив точек маршрута, по которым водитель будет следовать, используя приложение АТИ Водитель.
     * Каждая точка соответствует загрузке или разгрузке, и также содержит информацию об адресе, географических координатах, дате и времени, контактном лице на точке.
     * @summary Получение информации по заказу для водителя
     */
    get: {
      pathParams: {
        /**
         * @description Id Заказа
         */
        dealId: string
      }
      /**
       * @description Информация по заказу
       */
      res: Schemas.DriverTrackerPointView[]
    }
    /**
     * @description Привязывает водителя к заказу, создает информацию, необходимую водителю для использования приложения АТИ Водитель и отправляет ее на приложение.
     * В тело метода включается информация о типе точки (загрузка или разгрузка), а также информация об адресе, географических координатах, дате и времени, контактном лице на точке
     * @summary Назначение заказа на водителя.
     */
    put: {
      pathParams: {
        /**
         * @description Id Заказа
         */
        dealId: string
      }
      /**
       * @description Созданная информация по заказу
       */
      res: Schemas.DriverTrackerPointView[]
    }
    /**
     * @description Обновляет информацию, необходимую водителю для использования приложения АТИ Водитель и отправляет ее на приложение.
     * В тело метода включается информация о типе точки (загрузка или разгрузка), а также информация об адресе, географических координатах, дате и времени, контактном лице на точке
     * @summary Обновление заказа для АТИ Водителя.
     */
    post: {
      pathParams: {
        /**
         * @description Id Заказа
         */
        dealId: string
      }
      /**
       * @description Созданная информация по заказу
       */
      res: Schemas.DriverTrackerPointView[]
    }
    /**
     * @description Отвязывает водителя от заказа и удаляет информацию, созданную при назначении заказа на водителя.
     * @summary Снятие водителя с заказа.
     */
    delete: {
      pathParams: {
        /**
         * @description Id Заказа
         */
        dealId: string
      }
      /**
       * @description Информация по заказу успешно удалена
       */
      res: unknown
    }
  }
  '/v1.2/orders/carrier/map_route/by_deal': {
    /**
     * @description Возвращает информацию о маршруте, пройденном водителем с использованием приложения, а также о начальной, конечной и промежуточных точках маршрута.
     * Ответ метода можно использовать, например, для отображения маршрута на карте.
     * @summary Получение информации о пройденном маршруте АТИ Водителя
     */
    get: {
      queryParams: {
        /**
         * @description Id Заказа
         */
        deal_id: string
        /**
         * @description Широта юго-запад
         */
        south_west_lat: number
        /**
         * @description Долгота юго-запад
         */
        south_west_lng: number
        /**
         * @description Широта северо-восток
         */
        north_east_lat: number
        /**
         * @description Долгота северо-восток
         */
        north_east_lng: number
        /**
         * @description Коэффициент масштабирования
         */
        zoom: number
      }
      /**
       * @description Информация для карты
       */
      res: Schemas.DealMapView[]
    }
  }
  '/v1.2/orders/carrier/map/history': {
    /**
     * @description Массив событий, произошедших в пути следования водителя. Например: поломка, ДТП.
     * @summary Получение истории
     */
    get: {
      queryParams: {
        /**
         * @description Id Заказа 
         */
        deal_id: string
      }
      /**
       * @description История выполнения заказа водителем
       */
      res: Schemas.MapHistoryView[]
    }
  }
  '/v1.2/orders/carrier/{dealId}/tracker_access': {
    /**
     * @description По умолчанию грузовладелец не может следить за водителем на карте.
     * С помощью метода можно открывать и закрывать грузовладельцу доступ к этой информации (данные, возвращаемые методом `/map/by_deal`).
     * @summary Установка доступа грузовладельца к данным из АТИ Водителя.
     */
    post: {
      queryParams: {
        /**
         * @description Значение доступа
         *             
         * * `0` — Запретить доступ
         * * `1` — Разрешить доступ
         */
        value: Schemas.TrackerOwnerAccess | null
      }
      pathParams: {
        /**
         * @description Id Заказа
         */
        dealId: string
      }
      /**
       * @description Успешное выполнение операции
       */
      res: unknown
    }
  }
  '/v1.2/orders/docs/{documentId}/access': {
    /**
     * @summary Настройка доступа к документу заказа
     */
    put: {
      pathParams: {
        /**
         * @description Id документа
         */
        documentId: string
      }
      /**
       * @description Успешное изменение доступа
       */
      res: unknown
    }
  }
  '/v1.2/orders/files': {
    /**
     * @description Позволяет прикрепить файл к заказу
     * Content-Type: multipart/form-data
     * @summary Прикрепление файла к заказу
     */
    post: {
      /**
       * @description Успешное добавление
       */
      res: Schemas.DealFileView
    }
  }
  '/v1.2/orders/files/{fileId}': {
    /**
     * @summary Удаление приложенного файла заказа
     */
    delete: {
      pathParams: {
        /**
         * @description Id файла
         */
        fileId: string
      }
      /**
       * @description Успешное удаление
       */
      res: unknown
    }
  }
  '/v1.2/orders/files/{fileId}/access': {
    /**
     * @summary Настройка доступа к файлу заказа
     */
    post: {
      pathParams: {
        /**
         * @description Id файла
         */
        fileId: string
      }
      /**
       * @description Успешное изменение доступа
       */
      res: unknown
    }
    /**
     * @summary Настройка доступа к файлу заказа
     */
    put: {
      pathParams: {
        /**
         * @description Id файла
         */
        fileId: string
      }
      /**
       * @description Успешное изменение доступа
       */
      res: unknown
    }
  }
  '/v1.2/orders/{dealId}': {
    /**
     * @description Позволяет получить Заказ, в котором пользователь принимает участие
     * @summary Получение информации по Заказу
     */
    get: {
      pathParams: {
        /**
         * @description Id Заказа
         */
        dealId: string
      }
      /**
       * @description Возвращает информацию по Заказу
       */
      res: Schemas.OrderViewOfFullDealView
    }
    /**
     * @description Отклонение, отказ от Заказа. Заказ может быть отклонен как грузоперевозчиком, так и грузовладельцем до момента его завершения.
     * При отклонении Заказа в исполнении можно отклонить только Заказы без документов, созданных в системе АТИ-Доки., с DealState Заказа `4`.
     * @summary Отклонение Заказа без документов
     */
    delete: {
      pathParams: {
        /**
         * @description Id заказа
         */
        dealId: string
      }
      /**
       * @description Успешное отклонение
       */
      res: unknown
    }
  }
  '/v1.2/orders/file_types': {
    /**
     * @summary Получение типов файлов
     */
    get: {
      /**
       * @description Возвращает список типов файлов
       */
      res: Schemas.DealFileTypeInfo[]
    }
  }
  '/v1.2/orders/status_models': {
    /**
     * @summary Получение статусных моделей со списками статусов
     */
    get: {
      /**
       * @description Возвращает список статусных моделей
       */
      res: Schemas.InWorkStatusModelInfo[]
    }
  }
  '/v1.2/orders/status_models/{model}/statuses': {
    /**
     * @summary Получение списка статусов по статусной модели
     */
    get: {
      pathParams: {
        /**
         * @description Статусная модель
         */
        model: number
      }
      /**
       * @description Возвращает список статусов по статусной модели
       */
      res: (Record<string, unknown> & Record<string, string>)
    }
  }
  '/v1.2/orders/unilateral': {
    /**
     * @summary Создание и изменение заявки водителю.
     */
    post: {
      /**
       * @description Возвращает информацию по Заказу
       */
      res: Schemas.UnilateralOrderViewOfFullDealView
    }
  }
  '/v1.2/orders/search': {
    /**
     * @description Позволяет список Заказов по указанным id грузов, если список пуст вернет все Заказы в которых пользователь принимает участие
     * @summary Получение списка Заказов по фильтру
     */
    post: {
      /**
       * @description Возвращает информацию о Заказах по фильтру
       */
      res: Schemas.OrderViewOfFullDealView[]
    }
  }
  '/v1.2/orders/get_orders_statuses': {
    /**
     * @description Позволяет получить список статусов Заказов для указанных грузов
     * @summary Получение статусов Заказов
     */
    post: {
      /**
       * @description Возвращает объект _Id груза - список статусов связанных Заказов_
       */
      res: (Record<string, unknown> & Record<string, Schemas.DealStatusView[]>)
    }
  }
  '/v1.2/orders/{dealId}/inwork': {
    /**
     * @description Позволяет установить статус перевозки для Заказа.
     * Требуется DealState Заказа `4`.
     * Установить статус может как грузовладелец так и перевозчик.
     * @summary Смена cтатуса перевозки Заказа
     */
    post: {
      pathParams: {
        /**
         * @description Id Заказа
         */
        dealId: string
      }
      /**
       * @description Успешное изменение статуса
       */
      res: boolean
    }
  }
  '/v1.2/orders/{dealId}/pay_docs': {
    /**
     * @description Позволяет установить статус документов и оплаты для Заказа.
     * Требуется DealState Заказа `10` или `5`.
     * @summary Изменение информации о статусе документов и оплаты
     */
    post: {
      pathParams: {
        /**
         * @description Id Заказа
         */
        dealId: string
      }
      /**
       * @description Успешное изменение статуса
       */
      res: unknown
    }
  }
  '/v1.2/orders/{dealId}/move_to_work': {
    /**
     * @description Позволяет создать Заказ без оформления документов через АТИ-Доки сразу после того, как перевозчик пришлет вам предложение на перевозку.
     * @summary Создание Заказа без документов
     */
    post: {
      pathParams: {
        /**
         * @description ID Заказа
         */
        dealId: string
      }
      /**
       * @description Успешное создание Заказа
       */
      res: unknown
    }
  }
  '/v1.2/orders/{dealId}/accept': {
    /**
     * @description Позволяет создать Заказ с документом через АТИ-Доки
     * @summary Создание Заказа с документом через АТИ-Доки
     */
    post: {
      pathParams: {
        /**
         * @description Id Заказа
         */
        dealId: string
      }
      /**
       * @description Параметры ссылки для открытия Заказа в АТИ-Доках
       */
      res: Schemas.DocumentInfoShortView
    }
  }
  '/v1.2/orders/{dealId}/accept_file': {
    /**
     * @description Позволяет создать Заказ с документом через загрузку файла, содержащего информацию о заказе (адреса, контакты, сроки, стоимость перевозки, условия и др.)
     * Content-Type: multipart/form-data
     * @summary Создание Заказа с документом через загрузку файла
     */
    post: {
      pathParams: {
        /**
         * @description Id Заказа
         */
        dealId: string
      }
      /**
       * @description Параметры ссылки для открытия Заказа
       */
      res: Schemas.DocumentInfoShortView
    }
  }
  '/v1.2/orders/takeload/{loadId}': {
    /**
     * @description Взятие груза возможно в том случае, если пользователь является победителем Торгов (аукциона), получил приглашение от грузовладельца или состоит на площадке, где опубликован груз.
     * @summary Взятие груза / Редактирование Заказа
     */
    post: {
      pathParams: {
        /**
         * @description Id груза
         */
        loadId: string
      }
      /**
       * @description Успешное взятие/редактирование
       */
      res: Schemas.OrderViewOfFullDealView
    }
  }
  '/v1.2/orders/{dealId}/finish': {
    /**
     * @description Завершает перевозку
     * 
     * *Завершить перевозку можно в том случае, если DealState Заказа `4`*
     * @summary Завершение перевозки
     */
    put: {
      queryParams: {
        /**
         * @description При выставлении этого флага Заказ переносится на вкладку "ДО и Оплата"
         */
        waitPayment: boolean
      }
      pathParams: {
        /**
         * @description Id Заказа
         */
        dealId: string
      }
      /**
       * @description Успешное завершение
       */
      res: unknown
    }
  }
  '/v1.2/orders/driver': {
    /**
     * @description Смена Водителя для Заказов без документов, созданных в системе АТИ-Доки.
     * Требуется DealState Заказа `4`.
     * Сменить Водителя может как грузовладелец, так и перевозчик.
     * @summary Смена Водителя в Заказе
     */
    put: {
      /**
       * @description Успешная смена водителя
       */
      res: unknown
    }
  }
  '/v1.2/orders/truck': {
    /**
     * @description Смена Транспортного Средства для Заказов без документов, созданных в системе АТИ-Доки.
     * Требуется DealState Заказа `4`.
     * Сменить ТС может как грузовладелец, так и перевозчик.
     * @summary Смена ТС в Заказе
     */
    put: {
      /**
       * @description Успешная смена ТС
       */
      res: unknown
    }
  }
  '/v1.2/orders/rate': {
    /**
     * @description Изменение ставки в Заказе без документов, созданных в системе АТИ-Доки.
     * Требуется DealState Заказа `4` - В исполнении, `10` - Документы и Оплата.
     * Изменить ставку может грузовладелец.
     * @summary Изменение ставки в Заказе
     */
    put: {
      /**
       * @description Успешное изменение ставки
       */
      res: unknown
    }
  }
  '/v1.2/orders/contacts': {
    /**
     * @description Сменить контакты может грузовладелец
     * @summary Смена контактов в Заказе
     */
    put: {
      /**
       * @description Успешная смена контактов
       */
      res: unknown
    }
  }
  '/v1.2/orders/{dealId}/decline': {
    /**
     * @description Грузовладелец может отклонить Заказ в согласовании, в том числе с
     * созданными документами через АТИ-Доки.
     * При отклонении Заказа можно выбрать, что сделать с грузом:
     * 1= выставить груз без Торгов,
     * 2 = перенести груз в Архив.
     * 3 = сменить победителя, если в Торгах были еще участники
     * 4 = восстановить груз и перезапустить Торги, если они были запущены
     * @summary Отклонение Заказа с выбором действия
     */
    delete: {
      pathParams: {
        /**
         * @description Id заказа
         */
        dealId: string
      }
      /**
       * @description Успешное отклонение заказа
       */
      res: unknown
    }
  }
  '/v1.2/orders/{dealId}/delete_obsolete': {
    /**
     * @description Удаляет заказ, которые не может быть выполнен, например взятый перевозчиком, а затем отклоненный грузовладельцем.
     * @summary Удаление неактуального заказа
     */
    delete: {
      pathParams: {
        /**
         * @description Id заказа
         */
        dealId: string
      }
      /**
       * @description Успешное удаление
       */
      res: unknown
    }
  }
  '/v1.2/orders/invites': {
    /**
     * @description Отправляет приглашение оформить заказ грузоперевозчику с оповещением
     *             
     * *Отправленное повторно приглашение удалит предыдущее*
     * @summary Отправка приглашения
     */
    post: {
      /**
       * @description Приглашение отправлено
       */
      res: unknown
    }
  }
  '/v1.2/orders/invites/counter_offer': {
    /**
     * @description Отправляет приглашение оформить заказ грузоперевозчику по встречному предложению
     * @summary Отправка приглашения по встречному предложению
     */
    post: {
      /**
       * @description Приглашение отправлено
       */
      res: unknown
    }
  }
  '/v1.2/orders/invites/{loadId}': {
    /**
     * @summary Получение отправленных приглашений
     */
    get: {
      pathParams: {
        /**
         * @description ID груза
         */
        loadId: string
      }
      /**
       * @description Отправленные приглашения
       */
      res: Schemas.LoadPersonalInvitationView[]
    }
  }
  '/v1.2/orders/invites/{loadId}/{takerPersistentUserId}': {
    /**
     * @summary Получение отправленного приглашения
     */
    get: {
      queryParams: {
        /**
         * @description ID приглашения
         */
        dealId: string | null
      }
      pathParams: {
        /**
         * @description ID груза
         */
        loadId: string
        /**
         * @description Постоянный ID приглашенной фирмы
         */
        takerPersistentUserId: number
      }
      /**
       * @description Отправленное приглашение
       */
      res: Schemas.LoadPersonalInvitationView
    }
  }
  '/v1.2/orders/invites/received/{loadId}': {
    /**
     * @summary Получение полученного приглашения
     */
    get: {
      queryParams: {
        /**
         * @description ID приглашения
         */
        dealId: string | null
      }
      pathParams: {
        /**
         * @description ID груза
         */
        loadId: string
      }
      /**
       * @description Полученное приглашение
       */
      res: Schemas.PersonalInvitationView3
    }
  }
  '/v1.2/orders/invites/my': {
    /**
     * @summary Получение списка приглашений
     */
    get: {
      queryParams: {
        /**
         * @description Роль пользователя: `0` — Грузовладелец, `1` — Перевозчик
         */
        role: Schemas.OrderRole
      }
      /**
       * @description Список приглашений на перевозку груза
       */
      res: Schemas.PersonalInvitationView3[]
    }
  }
  '/v1.2/orders/invites/{loadId}/{contactId}': {
    /**
     * @summary Отказ от приглашения
     */
    delete: {
      pathParams: {
        /**
         * @description ID груза
         */
        loadId: string
        contactId: string
      }
      /**
       * @description Успешный отказ от приглашения
       */
      res: unknown
    }
  }
  '/v1.2/orders/invites/by_taker_id/{loadId}/{takerAtiId}': {
    /**
     * @summary Удаление предложения
     */
    delete: {
      pathParams: {
        /**
         * @description ID груза
         */
        loadId: string
        /**
         * @description Id аккаунта приглашаемой фирмы
         */
        takerAtiId: string
      }
      /**
       * @description Успешное удаление предложения
       */
      res: unknown
    }
  }
  '/v1.2/orders/redirect/to_deal/{dealId}': {
    /**
     * @description Открытие попапа происходит по ссылке. Возможно только в том случае, если действие производит грузовладелец, а Заказ находится на этапе согласования.
     * @summary Получение ссылки на попап редактирования документа
     */
    get: {
      queryParams: {
        /**
         * @description Выполняемое действие, должен быть равен "create_document"
         */
        action: string | null
      }
      pathParams: {
        /**
         * @description Id Заказа
         */
        dealId: string
      }
      /**
       * @description Успешное получение ссылки
       */
      res: string
    }
  }
  '/webapi/orders/unilateral': {
    /**
     * @summary Сохранение одностороннего заказа
     */
    post: {
      /**
       * @description Возвращает информацию по Заказу
       */
      res: Schemas.DealOrderView2
    }
  }
  '/orders/documents/{parentDocumentId}/invoice': {
    post: {
      queryParams: {
        docSourceType: Schemas.DealDocumentSourceTypes
      }
      pathParams: {
        parentDocumentId: string
      }
      res: unknown
    }
  }
  '/orders/documents/{parentDocumentId}/act': {
    post: {
      queryParams: {
        docSourceType: Schemas.DealDocumentSourceTypes
      }
      pathParams: {
        parentDocumentId: string
      }
      res: unknown
    }
  }
  '/orders/documents/{parentDocumentId}/poa': {
    post: {
      queryParams: {
        docSourceType: Schemas.DealDocumentSourceTypes
      }
      pathParams: {
        parentDocumentId: string
      }
      res: unknown
    }
  }
  '/orders/documents/{parentDocumentId}/unilateral_dissolution': {
    post: {
      pathParams: {
        parentDocumentId: string
      }
      res: unknown
    }
  }
  '/orders/carrier/{dealId}/driver_tracker_points': {
    /**
     * @summary Получение информации по Заказу для водителя
     */
    get: {
      pathParams: {
        /**
         * @description Id Заказа
         */
        dealId: string
      }
      /**
       * @description Точки маршрута
       */
      res: Schemas.DriverTrackerPointView[]
    }
    /**
     * @summary Создание информации для водителя
     */
    put: {
      pathParams: {
        /**
         * @description Id Заказа
         */
        dealId: string
      }
      /**
       * @description Созданные точки
       */
      res: unknown
    }
    /**
     * @summary Обновление информации для водителя
     */
    post: {
      pathParams: {
        /**
         * @description Id Заказа
         */
        dealId: string
      }
      /**
       * @description Обновленные точки
       */
      res: unknown
    }
    /**
     * @summary Снятие водителя с заказа
     */
    delete: {
      pathParams: {
        /**
         * @description Id Заказа
         */
        dealId: string
      }
      /**
       * @description Успешное снятие
       */
      res: unknown
    }
  }
  '/orders/carrier/{dealId}/tracker_access': {
    /**
     * @summary Установка доступа грузовладельца к трекеру
     */
    post: {
      queryParams: {
        /**
         * @description Значение доступа
         */
        value: Schemas.TrackerOwnerAccess | null
      }
      pathParams: {
        /**
         * @description ID Заказа
         */
        dealId: string
      }
      /**
       * @description Успешное изменение
       */
      res: unknown
    }
  }
  '/orders/carrier/{dealId}/driver_data_expected': {
    /**
     * @summary Установка флага "Укажу данные позже"
     */
    post: {
      queryParams: {
        /**
         * @description Значение флага "Укажу данные позже"
         */
        value: boolean
      }
      pathParams: {
        /**
         * @description ID Заказа
         */
        dealId: string
      }
      /**
       * @description Успешное изменение
       */
      res: unknown
    }
  }
  '/orders/catalogs_copies/drivers': {
    get: {
      queryParams: {
        cargoOwnerAtiId: string | null
      }
      res: unknown
    }
  }
  '/orders/catalogs_copies/trucks': {
    get: {
      res: unknown
    }
  }
  '/orders/order/points_doc/{dealId}': {
    get: {
      pathParams: {
        dealId: string
      }
      res: Schemas.Point[]
    }
  }
  '/orders/docs/{documentId}/access': {
    post: {
      pathParams: {
        documentId: string
      }
      res: unknown
    }
    put: {
      pathParams: {
        documentId: string
      }
      res: unknown
    }
  }
  '/orders/files': {
    post: {
      res: unknown
    }
    get: {
      res: unknown
    }
  }
  '/orders/{dealId}/files': {
    post: {
      pathParams: {
        dealId: string
      }
      res: unknown
    }
    get: {
      pathParams: {
        dealId: string
      }
      res: unknown
    }
  }
  '/orders/files/{fileId}': {
    delete: {
      pathParams: {
        fileId: string
      }
      res: unknown
    }
  }
  '/orders/{dealId}/files/{fileId}': {
    delete: {
      pathParams: {
        fileId: string
        dealId: string
      }
      res: unknown
    }
  }
  '/orders/files/{fileId}/access': {
    post: {
      pathParams: {
        fileId: string
      }
      res: unknown
    }
    put: {
      pathParams: {
        fileId: string
      }
      res: unknown
    }
  }
  '/orders/{dealId}/files/{fileId}/access': {
    post: {
      pathParams: {
        fileId: string
        dealId: string
      }
      res: unknown
    }
    put: {
      pathParams: {
        fileId: string
        dealId: string
      }
      res: unknown
    }
  }
  '/orders/loads/{loadId}': {
    post: {
      pathParams: {
        loadId: string
      }
      res: unknown
    }
  }
  '/orders/limits/{atiId}/{contractorAtiId}/check': {
    get: {
      pathParams: {
        atiId: string
        contractorAtiId: string
      }
      res: unknown
    }
  }
  '/orders/get_full_orders_info': {
    /**
     * @summary Получение полной информации для вывода списка заказов
     */
    get: {
      queryParams: {
        /**
         * @description роль(грузовладелец либо перевозчик) 
         */
        role: Schemas.OrderRole
        /**
         * @description вкладка 
         */
        tab: Schemas.OrderTab
        /**
         * @description Id контакта 
         */
        contactId: number | null
      }
      /**
       * @description Вернем нужный Заказ
       */
      res: Schemas.OrdersInformation
    }
  }
  '/orders/counters': {
    get: {
      queryParams: {
        role: Schemas.OrderRole
        contactId: number | null
      }
      res: (Record<string, unknown> & Record<string, Schemas.OrderCounter>)
    }
    /**
     * @summary Счётчики заказов
     */
    post: {
      res: (Record<string, unknown> & Record<string, Schemas.OrderCounter>)
    }
  }
  '/orders/{dealId}': {
    /**
     * @summary Метод получения информации по фиксированной ставке
     * GET: loads/orders/95bd1b86-fc69-e611-80cf-10c37b6f39fc
     */
    get: {
      pathParams: {
        dealId: string
      }
      res: unknown
    }
    /**
     * @summary Метод отмены заказа:
     * - с аукционом
     * - в исполнении перевозчиком или грузовладельцем (без создания документа по отмене)
     */
    delete: {
      pathParams: {
        /**
         * @description Id заказа
         */
        dealId: string
      }
      res: unknown
    }
  }
  '/orders/form-view/{dealId}': {
    /**
     * @summary Метод получения информации о заказе в сокращенной форме
     */
    get: {
      pathParams: {
        dealId: string
      }
      res: Schemas.OrderFormView
    }
  }
  '/orders/init': {
    /**
     * @summary Начальные данные по заказам
     */
    get: {
      queryParams: {
        excludeDictionaries: boolean
      }
      res: unknown
    }
  }
  '/orders/{loadId}/{takerAtiId}': {
    get: {
      pathParams: {
        loadId: string
        takerAtiId: string
      }
      res: unknown
    }
  }
  '/orders/file_types': {
    /**
     * @summary Получение типов файлов
     */
    get: {
      res: unknown
    }
  }
  '/orders/status_models': {
    /**
     * @summary Получение статусных моделей со списками статусов
     */
    get: {
      res: unknown
    }
  }
  '/orders/status_models/{model}/statuses': {
    /**
     * @summary Получение списка статусов по статусной модели
     */
    get: {
      pathParams: {
        /**
         * @description Статусная модель
         */
        model: number
      }
      res: unknown
    }
  }
  '/orders/reserve/{loadId}': {
    /**
     * @summary Резервирование груза
     */
    put: {
      queryParams: {
        dealKind: Schemas.DealKinds | null
        inviteContactId: number | null
      }
      pathParams: {
        loadId: string
      }
      res: unknown
    }
    /**
     * @summary Отмена резерва
     */
    delete: {
      pathParams: {
        loadId: string
      }
      res: unknown
    }
  }
  '/orders/{dealId}/finish': {
    /**
     * @summary Метод завершения перевозки
     * PUT: loads/orders/95bd1b86-fc69-e611-80cf-10c37b6f39fc/finish
     */
    put: {
      queryParams: {
        waitPayment: boolean
      }
      pathParams: {
        dealId: string
      }
      res: unknown
    }
  }
  '/orders/finish': {
    /**
     * @summary Массовый метод завершения перевозки
     * PUT: orders/finish
     */
    put: {
      queryParams: {
        waitPayment: boolean
      }
      res: unknown
    }
  }
  '/orders/driver': {
    /**
     * @description Смена Водителя в Заказе 
     * Требуется DealState Заказа `4`.
     * Сменить Водителя может как грузовладелец, так и перевозчик.
     * @summary Смена Водителя в Заказе
     */
    put: {
      res: unknown
    }
  }
  '/orders/truck': {
    /**
     * @description Смена ТС в Заказе
     * Требуется DealState Заказа `4`.
     * Сменить ТС может как грузовладелец, так и перевозчик.
     * @summary Смена ТС в Заказе
     */
    put: {
      res: unknown
    }
  }
  '/orders/rate': {
    /**
     * @description Изменение ставки в Заказе без документов, созданных в системе АТИ-Доки.
     * Требуется DealState Заказа `4` - В исполнении, `10` - Документы и Оплата.
     * Изменить ставку может грузовладелец.
     * @summary Изменение ставки в Заказе
     */
    put: {
      res: unknown
    }
  }
  '/orders/address': {
    /**
     * @description Изменение маршрута в Заказе без документов, созданных в системе АТИ-Доки.
     * Требуется DealState Заказа `4` - В исполнении, `10` - Документы и Оплата.
     * Изменить маршрут может грузовладелец.
     * @summary Изменение маршрута в Заказе
     */
    put: {
      /**
       * @description Возвращает структуру такого же вида, как на входе, с признаком изменения changed
       */
      res: Schemas.ChangeAddressDto
    }
  }
  '/orders/contacts': {
    /**
     * @description Сменить контакты может грузовладелец
     * @summary Смена контактов в Заказе
     */
    put: {
      res: unknown
    }
  }
  '/orders/full_info_by_ids': {
    /**
     * @summary Получение полной информации для вывода списка заказов по списку id
     */
    post: {
      queryParams: {
        role: Schemas.OrderRole
        tab: Schemas.OrderTab
        contactId: number | null
      }
      res: Schemas.OrdersInformation
    }
  }
  '/orders/full_orders_info_by_ids': {
    /**
     * @summary Получение полной информации для вывода списка заказов по списку id
     */
    post: {
      res: Schemas.OrdersInformationViewFrontend
    }
  }
  '/orders/unilateral': {
    /**
     * @summary Сохранение одностороннего заказа
     */
    post: {
      /**
       * @description Возвращает информацию по Заказу
       */
      res: Schemas.DealOrderView2
    }
  }
  '/orders/takeload/{loadId}': {
    /**
     * @summary Взятие груза
     */
    post: {
      pathParams: {
        loadId: string
      }
      res: unknown
    }
  }
  '/orders/{dealId}/in_work': {
    /**
     * @summary Смена cтатуса перевозки Заказа
     */
    post: {
      pathParams: {
        dealId: string
      }
      res: unknown
    }
  }
  '/orders/{dealId}/pay_docs': {
    /**
     * @summary Изменение информации о статусе документов и оплаты
     */
    post: {
      pathParams: {
        dealId: string
      }
      res: unknown
    }
  }
  '/orders/{dealId}/accept': {
    /**
     * @summary Метод одобрения заявки грузовладельцем (создание документа по грузу)
     */
    post: {
      pathParams: {
        dealId: string
      }
      res: unknown
    }
  }
  '/orders/{dealId}/move_to_work': {
    /**
     * @summary Создание заказа в исполнении (без АД)
     */
    post: {
      pathParams: {
        dealId: string
      }
      res: unknown
    }
  }
  '/orders/{dealId}/accept_file': {
    /**
     * @summary Метод одобрения заявки грузовладельцем (создание документа по приложенному файлу)
     */
    post: {
      pathParams: {
        dealId: string
      }
      res: unknown
    }
  }
  '/orders/{dealId}/create_contract': {
    /**
     * @summary Метод создания договора
     */
    post: {
      pathParams: {
        dealId: string
      }
      res: unknown
    }
  }
  '/orders/{dealId}/set_view': {
    /**
     * @summary Установка просмотра заявки
     */
    post: {
      queryParams: {
        /**
         * @description первый просмотр Заказа после редактирвания 
         */
        isFirstView: boolean
      }
      pathParams: {
        /**
         * @description id Заказа 
         */
        dealId: string
      }
      res: unknown
    }
  }
  '/orders/full_orders_info': {
    /**
     * @summary Получение полной информации для вывода списка заказов
     */
    post: {
      res: Schemas.OrdersInformationViewFrontend
    }
  }
  '/orders/{dealId}/decline': {
    /**
     * @summary Метод для отмены заказа с выбором действия
     */
    delete: {
      pathParams: {
        /**
         * @description Id заказа
         */
        dealId: string
      }
      res: unknown
    }
  }
  '/orders/{dealId}/delete_obsolete': {
    /**
     * @summary Удаление неактуальнго заказа
     */
    delete: {
      pathParams: {
        /**
         * @description Id заказа
         */
        dealId: string
      }
      /**
       * @description Успешное удаление
       */
      res: boolean
    }
  }
  '/orders/invites': {
    post: {
      res: unknown
    }
  }
  '/orders/invites/counter_offer': {
    /**
     * @description Отправляет приглашение оформить заказ грузоперевозчику по встречному предложению.
     * Метод не используется. Для отправки предложения по встречному предложению с фронта вызывается метод POST orders/invites
     * @summary Отправка приглашения по встречному предложению
     */
    post: {
      res: unknown
    }
  }
  '/orders/invites/{loadId}': {
    get: {
      pathParams: {
        loadId: string
      }
      res: unknown
    }
    delete: {
      pathParams: {
        loadId: string
      }
      res: unknown
    }
  }
  '/orders/invites/search': {
    post: {
      res: Schemas.LoadListInvitationsView
    }
  }
  '/orders/invites/by_taker_id/{loadId}/{takerAtiId}': {
    delete: {
      pathParams: {
        loadId: string
        takerAtiId: string
      }
      res: unknown
    }
  }
  '/orders/invites/{loadId}/{dealId}': {
    delete: {
      pathParams: {
        loadId: string
        dealId: string
      }
      res: unknown
    }
  }
  '/orders/driver/map_route/by_deal': {
    /**
     * @summary Получение информации для карты ативодителя с зумированием
     */
    get: {
      queryParams: {
        /**
         * @description Id Заказа 
         */
        deal_id: string
        /**
         * @description Широта юго-запад
         */
        south_west_lat: number
        /**
         * @description Долгота юго-запад
         */
        south_west_lng: number
        /**
         * @description Широта северо-восток
         */
        north_east_lat: number
        /**
         * @description Долгота северо-восток
         */
        north_east_lng: number
        /**
         * @description Коэффициент масштабирования
         */
        zoom: number
        /**
         * @description Количество секунд до текущего момента
         */
        interval: number | null
      }
      /**
       * @description Вернем информацию для карты
       */
      res: Schemas.DealRoutedMap
    }
  }
  '/orders/driver/map_route': {
    /**
     * @summary Получение маршрутов для карты
     */
    post: {
      /**
       * @description Вернем маршруты для карты
       */
      res: Schemas.FirmsDealMap[]
    }
  }
  '/orders/driver/map/history': {
    /**
     * @summary Получение истории
     */
    get: {
      queryParams: {
        /**
         * @description Id Заказа 
         */
        deal_id: string
      }
      /**
       * @description Вернем историю
       */
      res: unknown
    }
  }
  '/orders/driver/presence/by_deals': {
    /**
     * @summary Водители и машины в ати-водителе
     */
    post: {
      /**
       * @description Вернем информацию для заказов
       */
      res: Schemas.DriverView3[]
    }
  }
  '/orders/driver/map/route_info': {
    /**
     * @summary Получение данных для карты с предполагаемым маршрутом
     */
    get: {
      queryParams: {
        deal_id: string
      }
      res: unknown
    }
  }
  '/orders/redirect/{dealId}': {
    get: {
      queryParams: {
        hash: string | null
      }
      pathParams: {
        dealId: string
      }
      res: unknown
    }
  }
  '/orders/templates/access': {
    post: {
      res: unknown
    }
  }
}