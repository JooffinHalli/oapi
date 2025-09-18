// -------------------------------
// | this file is auto-generated |
// -------------------------------

import type { Schemas } from './schemas';

/**
 * @see {@link https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.json swagger}
 * @title Stripe API
 * @description The Stripe REST API. Please see https://stripe.com/docs/api for more details.
 */
export type Paths = {

  '/v1/account': {

    /**
     * @description <p>Retrieves the details of an account.</p>
     * @summary Retrieve account
     * @operationId GetAccount
     */
    get: {
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.account
    }

  }

  '/v1/account_links': {

    /**
     * @description <p>Creates an AccountLink object that includes a single-use Stripe URL that the platform can redirect their user to in order to take them through the Connect Onboarding flow.</p>
     * @summary Create an account link
     * @operationId PostAccountLinks
     */
    post: {
      body: unknown
      res: Schemas.account_link
    }

  }

  '/v1/account_sessions': {

    /**
     * @description <p>Creates a AccountSession object that includes a single-use token that the platform can use on their front-end to grant client-side API access.</p>
     * @summary Create an Account Session
     * @operationId PostAccountSessions
     */
    post: {
      body: unknown
      res: Schemas.account_session
    }

  }

  '/v1/accounts': {

    /**
     * @description <p>Returns a list of accounts connected to your platform via <a href="/docs/connect">Connect</a>. If you’re not a platform, the list is empty.</p>
     * @summary List all connected accounts
     * @operationId GetAccounts
     */
    get: {
      queryParams?: {
        /**
         * @description Only return connected accounts that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.account[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>With <a href="/docs/connect">Connect</a>, you can create Stripe accounts for your users.
     * To do this, you’ll first need to <a href="https://dashboard.stripe.com/account/applications/settings">register your platform</a>.</p>
     * 
     * <p>If you’ve already collected information for your connected accounts, you <a href="/docs/connect/best-practices#onboarding">can prefill that information</a> when
     * creating the account. Connect Onboarding won’t ask for the prefilled information during account onboarding.
     * You can prefill any information on the account.</p>
     * @operationId PostAccounts
     */
    post: {
      body?: unknown
      res: Schemas.account
    }

  }

  '/v1/accounts/{account}': {

    /**
     * @description <p>With <a href="/connect">Connect</a>, you can delete accounts you manage.</p>
     * 
     * <p>Test-mode accounts can be deleted at any time.</p>
     * 
     * <p>Live-mode accounts that have access to the standard dashboard and Stripe is responsible for negative account balances cannot be deleted, which includes Standard accounts. All other Live-mode accounts, can be deleted when all <a href="/api/balance/balance_object">balances</a> are zero.</p>
     * 
     * <p>If you want to delete your own account, use the <a href="https://dashboard.stripe.com/settings/account">account information tab in your account settings</a> instead.</p>
     * @summary Delete an account
     * @operationId DeleteAccountsAccount
     */
    delete: {
      pathParams: {
        account: string
      }
      body?: unknown
      res: Schemas.deleted_account
    }

    /**
     * @description <p>Retrieves the details of an account.</p>
     * @summary Retrieve account
     * @operationId GetAccountsAccount
     */
    get: {
      pathParams: {
        account: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.account
    }

    /**
     * @description <p>Updates a <a href="/connect/accounts">connected account</a> by setting the values of the parameters passed. Any parameters not provided are
     * left unchanged.</p>
     * 
     * <p>For accounts where <a href="/api/accounts/object#account_object-controller-requirement_collection">controller.requirement_collection</a>
     * is <code>application</code>, which includes Custom accounts, you can update any information on the account.</p>
     * 
     * <p>For accounts where <a href="/api/accounts/object#account_object-controller-requirement_collection">controller.requirement_collection</a>
     * is <code>stripe</code>, which includes Standard and Express accounts, you can update all information until you create
     * an <a href="/api/account_links">Account Link</a> or <a href="/api/account_sessions">Account Session</a> to start Connect onboarding,
     * after which some properties can no longer be updated.</p>
     * 
     * <p>To update your own account, use the <a href="https://dashboard.stripe.com/settings/account">Dashboard</a>. Refer to our
     * <a href="/docs/connect/updating-accounts">Connect</a> documentation to learn more about updating accounts.</p>
     * @summary Update an account
     * @operationId PostAccountsAccount
     */
    post: {
      pathParams: {
        account: string
      }
      body?: unknown
      res: Schemas.account
    }

  }

  '/v1/accounts/{account}/bank_accounts': {

    /**
     * @description <p>Create an external account for a given account.</p>
     * @summary Create an external account
     * @operationId PostAccountsAccountBankAccounts
     */
    post: {
      pathParams: {
        account: string
      }
      body?: unknown
      res: Schemas.external_account
    }

  }

  '/v1/accounts/{account}/bank_accounts/{id}': {

    /**
     * @description <p>Delete a specified external account for a given account.</p>
     * @summary Delete an external account
     * @operationId DeleteAccountsAccountBankAccountsId
     */
    delete: {
      pathParams: {
        account: string
        /**
         * @description Unique identifier for the external account to be deleted.
         */
        id: string
      }
      body?: unknown
      res: Schemas.deleted_external_account
    }

    /**
     * @description <p>Retrieve a specified external account for a given account.</p>
     * @summary Retrieve an external account
     * @operationId GetAccountsAccountBankAccountsId
     */
    get: {
      pathParams: {
        account: string
        /**
         * @description Unique identifier for the external account to be retrieved.
         */
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.external_account
    }

    /**
     * @description <p>Updates the metadata, account holder name, account holder type of a bank account belonging to
     * a connected account and optionally sets it as the default for its currency. Other bank account
     * details are not editable by design.</p>
     * 
     * <p>You can only update bank accounts when <a href="/api/accounts/object#account_object-controller-requirement_collection">account.controller.requirement_collection</a> is <code>application</code>, which includes <a href="/connect/custom-accounts">Custom accounts</a>.</p>
     * 
     * <p>You can re-enable a disabled bank account by performing an update call without providing any
     * arguments or changes.</p>
     * @operationId PostAccountsAccountBankAccountsId
     */
    post: {
      pathParams: {
        account: string
        id: string
      }
      body?: unknown
      res: Schemas.external_account
    }

  }

  '/v1/accounts/{account}/capabilities': {

    /**
     * @description <p>Returns a list of capabilities associated with the account. The capabilities are returned sorted by creation date, with the most recent capability appearing first.</p>
     * @summary List all account capabilities
     * @operationId GetAccountsAccountCapabilities
     */
    get: {
      pathParams: {
        account: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: {
        data: Schemas.capability[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/accounts/{account}/capabilities/{capability}': {

    /**
     * @description <p>Retrieves information about the specified Account Capability.</p>
     * @summary Retrieve an Account Capability
     * @operationId GetAccountsAccountCapabilitiesCapability
     */
    get: {
      pathParams: {
        account: string
        capability: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.capability
    }

    /**
     * @description <p>Updates an existing Account Capability. Request or remove a capability by updating its <code>requested</code> parameter.</p>
     * @summary Update an Account Capability
     * @operationId PostAccountsAccountCapabilitiesCapability
     */
    post: {
      pathParams: {
        account: string
        capability: string
      }
      body?: unknown
      res: Schemas.capability
    }

  }

  '/v1/accounts/{account}/external_accounts': {

    /**
     * @description <p>List external accounts for an account.</p>
     * @summary List all external accounts
     * @operationId GetAccountsAccountExternalAccounts
     */
    get: {
      pathParams: {
        account: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Filter external accounts according to a particular object type.
         */
        object?: ('bank_account' | 'card')
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description The list contains all external accounts that have been attached to the Stripe account. These may be bank accounts or cards.
         */
        data: (Schemas.bank_account | Schemas.card)[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Create an external account for a given account.</p>
     * @summary Create an external account
     * @operationId PostAccountsAccountExternalAccounts
     */
    post: {
      pathParams: {
        account: string
      }
      body?: unknown
      res: Schemas.external_account
    }

  }

  '/v1/accounts/{account}/external_accounts/{id}': {

    /**
     * @description <p>Delete a specified external account for a given account.</p>
     * @summary Delete an external account
     * @operationId DeleteAccountsAccountExternalAccountsId
     */
    delete: {
      pathParams: {
        account: string
        /**
         * @description Unique identifier for the external account to be deleted.
         */
        id: string
      }
      body?: unknown
      res: Schemas.deleted_external_account
    }

    /**
     * @description <p>Retrieve a specified external account for a given account.</p>
     * @summary Retrieve an external account
     * @operationId GetAccountsAccountExternalAccountsId
     */
    get: {
      pathParams: {
        account: string
        /**
         * @description Unique identifier for the external account to be retrieved.
         */
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.external_account
    }

    /**
     * @description <p>Updates the metadata, account holder name, account holder type of a bank account belonging to
     * a connected account and optionally sets it as the default for its currency. Other bank account
     * details are not editable by design.</p>
     * 
     * <p>You can only update bank accounts when <a href="/api/accounts/object#account_object-controller-requirement_collection">account.controller.requirement_collection</a> is <code>application</code>, which includes <a href="/connect/custom-accounts">Custom accounts</a>.</p>
     * 
     * <p>You can re-enable a disabled bank account by performing an update call without providing any
     * arguments or changes.</p>
     * @operationId PostAccountsAccountExternalAccountsId
     */
    post: {
      pathParams: {
        account: string
        id: string
      }
      body?: unknown
      res: Schemas.external_account
    }

  }

  '/v1/accounts/{account}/login_links': {

    /**
     * @description <p>Creates a login link for a connected account to access the Express Dashboard.</p>
     * 
     * <p><strong>You can only create login links for accounts that use the <a href="/connect/express-dashboard">Express Dashboard</a> and are connected to your platform</strong>.</p>
     * @summary Create a login link
     * @operationId PostAccountsAccountLoginLinks
     */
    post: {
      pathParams: {
        account: string
      }
      body?: unknown
      res: Schemas.login_link
    }

  }

  '/v1/accounts/{account}/people': {

    /**
     * @description <p>Returns a list of people associated with the account’s legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>
     * @summary List all persons
     * @operationId GetAccountsAccountPeople
     */
    get: {
      pathParams: {
        account: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Filters on the list of people returned based on the person's relationship to the account's company.
         */
        relationship?: {
          authorizer?: boolean
          director?: boolean
          executive?: boolean
          legal_guardian?: boolean
          owner?: boolean
          representative?: boolean
        }
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.person[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new person.</p>
     * @summary Create a person
     * @operationId PostAccountsAccountPeople
     */
    post: {
      pathParams: {
        account: string
      }
      body?: unknown
      res: Schemas.person
    }

  }

  '/v1/accounts/{account}/people/{person}': {

    /**
     * @description <p>Deletes an existing person’s relationship to the account’s legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p>
     * @summary Delete a person
     * @operationId DeleteAccountsAccountPeoplePerson
     */
    delete: {
      pathParams: {
        account: string
        person: string
      }
      body?: unknown
      res: Schemas.deleted_person
    }

    /**
     * @description <p>Retrieves an existing person.</p>
     * @summary Retrieve a person
     * @operationId GetAccountsAccountPeoplePerson
     */
    get: {
      pathParams: {
        account: string
        person: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.person
    }

    /**
     * @description <p>Updates an existing person.</p>
     * @summary Update a person
     * @operationId PostAccountsAccountPeoplePerson
     */
    post: {
      pathParams: {
        account: string
        person: string
      }
      body?: unknown
      res: Schemas.person
    }

  }

  '/v1/accounts/{account}/persons': {

    /**
     * @description <p>Returns a list of people associated with the account’s legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>
     * @summary List all persons
     * @operationId GetAccountsAccountPersons
     */
    get: {
      pathParams: {
        account: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Filters on the list of people returned based on the person's relationship to the account's company.
         */
        relationship?: {
          authorizer?: boolean
          director?: boolean
          executive?: boolean
          legal_guardian?: boolean
          owner?: boolean
          representative?: boolean
        }
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.person[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new person.</p>
     * @summary Create a person
     * @operationId PostAccountsAccountPersons
     */
    post: {
      pathParams: {
        account: string
      }
      body?: unknown
      res: Schemas.person
    }

  }

  '/v1/accounts/{account}/persons/{person}': {

    /**
     * @description <p>Deletes an existing person’s relationship to the account’s legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p>
     * @summary Delete a person
     * @operationId DeleteAccountsAccountPersonsPerson
     */
    delete: {
      pathParams: {
        account: string
        person: string
      }
      body?: unknown
      res: Schemas.deleted_person
    }

    /**
     * @description <p>Retrieves an existing person.</p>
     * @summary Retrieve a person
     * @operationId GetAccountsAccountPersonsPerson
     */
    get: {
      pathParams: {
        account: string
        person: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.person
    }

    /**
     * @description <p>Updates an existing person.</p>
     * @summary Update a person
     * @operationId PostAccountsAccountPersonsPerson
     */
    post: {
      pathParams: {
        account: string
        person: string
      }
      body?: unknown
      res: Schemas.person
    }

  }

  '/v1/accounts/{account}/reject': {

    /**
     * @description <p>With <a href="/connect">Connect</a>, you can reject accounts that you have flagged as suspicious.</p>
     * 
     * <p>Only accounts where your platform is liable for negative account balances, which includes Custom and Express accounts, can be rejected. Test-mode accounts can be rejected at any time. Live-mode accounts can only be rejected after all balances are zero.</p>
     * @summary Reject an account
     * @operationId PostAccountsAccountReject
     */
    post: {
      pathParams: {
        account: string
      }
      body: unknown
      res: Schemas.account
    }

  }

  '/v1/apple_pay/domains': {

    /**
     * @description <p>List apple pay domains.</p>
     * @operationId GetApplePayDomains
     */
    get: {
      queryParams?: {
        domain_name?: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.apple_pay_domain[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Create an apple pay domain.</p>
     * @operationId PostApplePayDomains
     */
    post: {
      body: unknown
      res: Schemas.apple_pay_domain
    }

  }

  '/v1/apple_pay/domains/{domain}': {

    /**
     * @description <p>Delete an apple pay domain.</p>
     * @operationId DeleteApplePayDomainsDomain
     */
    delete: {
      pathParams: {
        domain: string
      }
      body?: unknown
      res: Schemas.deleted_apple_pay_domain
    }

    /**
     * @description <p>Retrieve an apple pay domain.</p>
     * @operationId GetApplePayDomainsDomain
     */
    get: {
      pathParams: {
        domain: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.apple_pay_domain
    }

  }

  '/v1/application_fees': {

    /**
     * @description <p>Returns a list of application fees you’ve previously collected. The application fees are returned in sorted order, with the most recent fees appearing first.</p>
     * @summary List all application fees
     * @operationId GetApplicationFees
     */
    get: {
      queryParams?: {
        /**
         * @description Only return application fees for the charge specified by this charge ID.
         */
        charge?: string
        /**
         * @description Only return applications fees that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.application_fee[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/application_fees/{fee}/refunds/{id}': {

    /**
     * @description <p>By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details about a specific refund stored on the application fee.</p>
     * @summary Retrieve an application fee refund
     * @operationId GetApplicationFeesFeeRefundsId
     */
    get: {
      pathParams: {
        fee: string
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.fee_refund
    }

    /**
     * @description <p>Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
     * 
     * <p>This request only accepts metadata as an argument.</p>
     * @summary Update an application fee refund
     * @operationId PostApplicationFeesFeeRefundsId
     */
    post: {
      pathParams: {
        fee: string
        id: string
      }
      body?: unknown
      res: Schemas.fee_refund
    }

  }

  '/v1/application_fees/{id}': {

    /**
     * @description <p>Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.</p>
     * @summary Retrieve an application fee
     * @operationId GetApplicationFeesId
     */
    get: {
      pathParams: {
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.application_fee
    }

  }

  '/v1/application_fees/{id}/refund': {

    /**
     * @operationId PostApplicationFeesIdRefund
     */
    post: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.application_fee
    }

  }

  '/v1/application_fees/{id}/refunds': {

    /**
     * @description <p>You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available by default on the application fee object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional refunds.</p>
     * @summary List all application fee refunds
     * @operationId GetApplicationFeesIdRefunds
     */
    get: {
      pathParams: {
        id: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.fee_refund[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Refunds an application fee that has previously been collected but not yet refunded.
     * Funds will be refunded to the Stripe account from which the fee was originally collected.</p>
     * 
     * <p>You can optionally refund only part of an application fee.
     * You can do so multiple times, until the entire fee has been refunded.</p>
     * 
     * <p>Once entirely refunded, an application fee can’t be refunded again.
     * This method will raise an error when called on an already-refunded application fee,
     * or when trying to refund more money than is left on an application fee.</p>
     * @summary Create an application fee refund
     * @operationId PostApplicationFeesIdRefunds
     */
    post: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.fee_refund
    }

  }

  '/v1/apps/secrets': {

    /**
     * @description <p>List all secrets stored on the given scope.</p>
     * @summary List secrets
     * @operationId GetAppsSecrets
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
         */
        scope: {
          type: ('account' | 'user')
          user?: string
        }
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.appssecret[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Create or replace a secret in the secret store.</p>
     * @summary Set a Secret
     * @operationId PostAppsSecrets
     */
    post: {
      body: unknown
      res: Schemas.appssecret
    }

  }

  '/v1/apps/secrets/delete': {

    /**
     * @description <p>Deletes a secret from the secret store by name and scope.</p>
     * @summary Delete a Secret
     * @operationId PostAppsSecretsDelete
     */
    post: {
      body: unknown
      res: Schemas.appssecret
    }

  }

  '/v1/apps/secrets/find': {

    /**
     * @description <p>Finds a secret in the secret store by name and scope.</p>
     * @summary Find a Secret
     * @operationId GetAppsSecretsFind
     */
    get: {
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A name for the secret that's unique within the scope.
         */
        name: string
        /**
         * @description Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
         */
        scope: {
          type: ('account' | 'user')
          user?: string
        }
      }
      body?: unknown
      res: Schemas.appssecret
    }

  }

  '/v1/balance': {

    /**
     * @description <p>Retrieves the current account balance, based on the authentication that was used to make the request.
     *  For a sample request, see <a href="/docs/connect/account-balances#accounting-for-negative-balances">Accounting for negative balances</a>.</p>
     * @summary Retrieve balance
     * @operationId GetBalance
     */
    get: {
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.balance
    }

  }

  '/v1/balance/history': {

    /**
     * @description <p>Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth). The transactions are returned in sorted order, with the most recent transactions appearing first.</p>
     * 
     * <p>Note that this endpoint was previously called “Balance history” and used the path <code>/v1/balance/history</code>.</p>
     * @summary List all balance transactions
     * @operationId GetBalanceHistory
     */
    get: {
      queryParams?: {
        /**
         * @description Only return transactions that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description Only return transactions in a certain currency. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency?: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description For automatic Stripe payouts only, only returns transactions that were paid out on the specified payout ID.
         */
        payout?: string
        /**
         * @description Only returns the original transaction.
         */
        source?: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only returns transactions of the given type. One of: `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `contribution`, `issuing_authorization_hold`, `issuing_authorization_release`, `issuing_dispute`, `issuing_transaction`, `obligation_outbound`, `obligation_reversal_inbound`, `payment`, `payment_failure_refund`, `payment_network_reserve_hold`, `payment_network_reserve_release`, `payment_refund`, `payment_reversal`, `payment_unreconciled`, `payout`, `payout_cancel`, `payout_failure`, `payout_minimum_balance_hold`, `payout_minimum_balance_release`, `refund`, `refund_failure`, `reserve_transaction`, `reserved_funds`, `stripe_fee`, `stripe_fx_fee`, `stripe_balance_payment_debit`, `stripe_balance_payment_debit_reversal`, `tax_fee`, `topup`, `topup_reversal`, `transfer`, `transfer_cancel`, `transfer_failure`, or `transfer_refund`.
         */
        type?: string
      }
      body?: unknown
      res: {
        data: Schemas.balance_transaction[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/balance/history/{id}': {

    /**
     * @description <p>Retrieves the balance transaction with the given ID.</p>
     * 
     * <p>Note that this endpoint previously used the path <code>/v1/balance/history/:id</code>.</p>
     * @summary Retrieve a balance transaction
     * @operationId GetBalanceHistoryId
     */
    get: {
      pathParams: {
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.balance_transaction
    }

  }

  '/v1/balance_transactions': {

    /**
     * @description <p>Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth). The transactions are returned in sorted order, with the most recent transactions appearing first.</p>
     * 
     * <p>Note that this endpoint was previously called “Balance history” and used the path <code>/v1/balance/history</code>.</p>
     * @summary List all balance transactions
     * @operationId GetBalanceTransactions
     */
    get: {
      queryParams?: {
        /**
         * @description Only return transactions that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description Only return transactions in a certain currency. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency?: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description For automatic Stripe payouts only, only returns transactions that were paid out on the specified payout ID.
         */
        payout?: string
        /**
         * @description Only returns the original transaction.
         */
        source?: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only returns transactions of the given type. One of: `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `contribution`, `issuing_authorization_hold`, `issuing_authorization_release`, `issuing_dispute`, `issuing_transaction`, `obligation_outbound`, `obligation_reversal_inbound`, `payment`, `payment_failure_refund`, `payment_network_reserve_hold`, `payment_network_reserve_release`, `payment_refund`, `payment_reversal`, `payment_unreconciled`, `payout`, `payout_cancel`, `payout_failure`, `payout_minimum_balance_hold`, `payout_minimum_balance_release`, `refund`, `refund_failure`, `reserve_transaction`, `reserved_funds`, `stripe_fee`, `stripe_fx_fee`, `stripe_balance_payment_debit`, `stripe_balance_payment_debit_reversal`, `tax_fee`, `topup`, `topup_reversal`, `transfer`, `transfer_cancel`, `transfer_failure`, or `transfer_refund`.
         */
        type?: string
      }
      body?: unknown
      res: {
        data: Schemas.balance_transaction[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/balance_transactions/{id}': {

    /**
     * @description <p>Retrieves the balance transaction with the given ID.</p>
     * 
     * <p>Note that this endpoint previously used the path <code>/v1/balance/history/:id</code>.</p>
     * @summary Retrieve a balance transaction
     * @operationId GetBalanceTransactionsId
     */
    get: {
      pathParams: {
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.balance_transaction
    }

  }

  '/v1/billing/alerts': {

    /**
     * @description <p>Lists billing active and inactive alerts</p>
     * @summary List billing alerts
     * @operationId GetBillingAlerts
     */
    get: {
      queryParams?: {
        /**
         * @description Filter results to only include this type of alert.
         */
        alert_type?: 'usage_threshold'
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Filter results to only include alerts with the given meter.
         */
        meter?: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.billingalert[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a billing alert</p>
     * @summary Create a billing alert
     * @operationId PostBillingAlerts
     */
    post: {
      body: unknown
      res: Schemas.billingalert
    }

  }

  '/v1/billing/alerts/{id}': {

    /**
     * @description <p>Retrieves a billing alert given an ID</p>
     * @summary Retrieve a billing alert
     * @operationId GetBillingAlertsId
     */
    get: {
      pathParams: {
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.billingalert
    }

  }

  '/v1/billing/alerts/{id}/activate': {

    /**
     * @description <p>Reactivates this alert, allowing it to trigger again.</p>
     * @summary Activate a billing alert
     * @operationId PostBillingAlertsIdActivate
     */
    post: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.billingalert
    }

  }

  '/v1/billing/alerts/{id}/archive': {

    /**
     * @description <p>Archives this alert, removing it from the list view and APIs. This is non-reversible.</p>
     * @summary Archive a billing alert
     * @operationId PostBillingAlertsIdArchive
     */
    post: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.billingalert
    }

  }

  '/v1/billing/alerts/{id}/deactivate': {

    /**
     * @description <p>Deactivates this alert, preventing it from triggering.</p>
     * @summary Deactivate a billing alert
     * @operationId PostBillingAlertsIdDeactivate
     */
    post: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.billingalert
    }

  }

  '/v1/billing/credit_balance_summary': {

    /**
     * @description <p>Retrieves the credit balance summary for a customer.</p>
     * @summary Retrieve the credit balance summary for a customer
     * @operationId GetBillingCreditBalanceSummary
     */
    get: {
      queryParams?: {
        /**
         * @description The customer for which to fetch credit balance summary.
         */
        customer: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description The filter criteria for the credit balance summary.
         */
        filter: {
          /**
           * @title scope_param
           */
          applicability_scope?: {
            price_type?: 'metered'
            prices?: {
              id: string
            }[]
          }
          credit_grant?: string
          type: ('applicability_scope' | 'credit_grant')
        }
      }
      body?: unknown
      res: Schemas.billingcredit_balance_summary
    }

  }

  '/v1/billing/credit_balance_transactions': {

    /**
     * @description <p>Retrieve a list of credit balance transactions.</p>
     * @summary List credit balance transactions
     * @operationId GetBillingCreditBalanceTransactions
     */
    get: {
      queryParams?: {
        /**
         * @description The credit grant for which to fetch credit balance transactions.
         */
        credit_grant?: string
        /**
         * @description The customer for which to fetch credit balance transactions.
         */
        customer: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.billingcredit_balance_transaction[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/billing/credit_balance_transactions/{id}': {

    /**
     * @description <p>Retrieves a credit balance transaction.</p>
     * @summary Retrieve a credit balance transaction
     * @operationId GetBillingCreditBalanceTransactionsId
     */
    get: {
      pathParams: {
        /**
         * @description Unique identifier for the object.
         */
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.billingcredit_balance_transaction
    }

  }

  '/v1/billing/credit_grants': {

    /**
     * @description <p>Retrieve a list of credit grants.</p>
     * @summary List credit grants
     * @operationId GetBillingCreditGrants
     */
    get: {
      queryParams?: {
        /**
         * @description Only return credit grants for this customer.
         */
        customer?: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.billingcredit_grant[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a credit grant.</p>
     * @summary Create a credit grant
     * @operationId PostBillingCreditGrants
     */
    post: {
      body: unknown
      res: Schemas.billingcredit_grant
    }

  }

  '/v1/billing/credit_grants/{id}': {

    /**
     * @description <p>Retrieves a credit grant.</p>
     * @summary Retrieve a credit grant
     * @operationId GetBillingCreditGrantsId
     */
    get: {
      pathParams: {
        /**
         * @description Unique identifier for the object.
         */
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.billingcredit_grant
    }

    /**
     * @description <p>Updates a credit grant.</p>
     * @summary Update a credit grant
     * @operationId PostBillingCreditGrantsId
     */
    post: {
      pathParams: {
        /**
         * @description Unique identifier for the object.
         */
        id: string
      }
      body?: unknown
      res: Schemas.billingcredit_grant
    }

  }

  '/v1/billing/credit_grants/{id}/expire': {

    /**
     * @description <p>Expires a credit grant.</p>
     * @summary Expire a credit grant
     * @operationId PostBillingCreditGrantsIdExpire
     */
    post: {
      pathParams: {
        /**
         * @description Unique identifier for the object.
         */
        id: string
      }
      body?: unknown
      res: Schemas.billingcredit_grant
    }

  }

  '/v1/billing/credit_grants/{id}/void': {

    /**
     * @description <p>Voids a credit grant.</p>
     * @summary Void a credit grant
     * @operationId PostBillingCreditGrantsIdVoid
     */
    post: {
      pathParams: {
        /**
         * @description Unique identifier for the object.
         */
        id: string
      }
      body?: unknown
      res: Schemas.billingcredit_grant
    }

  }

  '/v1/billing/meter_event_adjustments': {

    /**
     * @description <p>Creates a billing meter event adjustment.</p>
     * @summary Create a billing meter event adjustment
     * @operationId PostBillingMeterEventAdjustments
     */
    post: {
      body: unknown
      res: Schemas.billingmeter_event_adjustment
    }

  }

  '/v1/billing/meter_events': {

    /**
     * @description <p>Creates a billing meter event.</p>
     * @summary Create a billing meter event
     * @operationId PostBillingMeterEvents
     */
    post: {
      body: unknown
      res: Schemas.billingmeter_event
    }

  }

  '/v1/billing/meters': {

    /**
     * @description <p>Retrieve a list of billing meters.</p>
     * @summary List billing meters
     * @operationId GetBillingMeters
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Filter results to only include meters with the given status.
         */
        status?: ('active' | 'inactive')
      }
      body?: unknown
      res: {
        data: Schemas.billingmeter[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a billing meter.</p>
     * @summary Create a billing meter
     * @operationId PostBillingMeters
     */
    post: {
      body: unknown
      res: Schemas.billingmeter
    }

  }

  '/v1/billing/meters/{id}': {

    /**
     * @description <p>Retrieves a billing meter given an ID.</p>
     * @summary Retrieve a billing meter
     * @operationId GetBillingMetersId
     */
    get: {
      pathParams: {
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.billingmeter
    }

    /**
     * @description <p>Updates a billing meter.</p>
     * @summary Update a billing meter
     * @operationId PostBillingMetersId
     */
    post: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.billingmeter
    }

  }

  '/v1/billing/meters/{id}/deactivate': {

    /**
     * @description <p>When a meter is deactivated, no more meter events will be accepted for this meter. You can’t attach a deactivated meter to a price.</p>
     * @summary Deactivate a billing meter
     * @operationId PostBillingMetersIdDeactivate
     */
    post: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.billingmeter
    }

  }

  '/v1/billing/meters/{id}/event_summaries': {

    /**
     * @description <p>Retrieve a list of billing meter event summaries.</p>
     * @summary List billing meter event summaries
     * @operationId GetBillingMetersIdEventSummaries
     */
    get: {
      pathParams: {
        /**
         * @description Unique identifier for the object.
         */
        id: string
      }
      queryParams?: {
        /**
         * @description The customer for which to fetch event summaries.
         */
        customer: string
        /**
         * @description The timestamp from when to stop aggregating meter events (exclusive). Must be aligned with minute boundaries.
         */
        end_time: number
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description The timestamp from when to start aggregating meter events (inclusive). Must be aligned with minute boundaries.
         */
        start_time: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Specifies what granularity to use when generating event summaries. If not specified, a single event summary would be returned for the specified time range. For hourly granularity, start and end times must align with hour boundaries (e.g., 00:00, 01:00, ..., 23:00). For daily granularity, start and end times must align with UTC day boundaries (00:00 UTC).
         */
        value_grouping_window?: ('day' | 'hour')
      }
      body?: unknown
      res: {
        data: Schemas.billingmeter_event_summary[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/billing/meters/{id}/reactivate': {

    /**
     * @description <p>When a meter is reactivated, events for this meter can be accepted and you can attach the meter to a price.</p>
     * @summary Reactivate a billing meter
     * @operationId PostBillingMetersIdReactivate
     */
    post: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.billingmeter
    }

  }

  '/v1/billing_portal/configurations': {

    /**
     * @description <p>Returns a list of configurations that describe the functionality of the customer portal.</p>
     * @summary List portal configurations
     * @operationId GetBillingPortalConfigurations
     */
    get: {
      queryParams?: {
        /**
         * @description Only return configurations that are active or inactive (e.g., pass `true` to only list active configurations).
         */
        active?: boolean
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description Only return the default or non-default configurations (e.g., pass `true` to only list the default configuration).
         */
        is_default?: boolean
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.billing_portalconfiguration[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a configuration that describes the functionality and behavior of a PortalSession</p>
     * @summary Create a portal configuration
     * @operationId PostBillingPortalConfigurations
     */
    post: {
      body: unknown
      res: Schemas.billing_portalconfiguration
    }

  }

  '/v1/billing_portal/configurations/{configuration}': {

    /**
     * @description <p>Retrieves a configuration that describes the functionality of the customer portal.</p>
     * @summary Retrieve a portal configuration
     * @operationId GetBillingPortalConfigurationsConfiguration
     */
    get: {
      pathParams: {
        configuration: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.billing_portalconfiguration
    }

    /**
     * @description <p>Updates a configuration that describes the functionality of the customer portal.</p>
     * @summary Update a portal configuration
     * @operationId PostBillingPortalConfigurationsConfiguration
     */
    post: {
      pathParams: {
        configuration: string
      }
      body?: unknown
      res: Schemas.billing_portalconfiguration
    }

  }

  '/v1/billing_portal/sessions': {

    /**
     * @description <p>Creates a session of the customer portal.</p>
     * @summary Create a portal session
     * @operationId PostBillingPortalSessions
     */
    post: {
      body: unknown
      res: Schemas.billing_portalsession
    }

  }

  '/v1/charges': {

    /**
     * @description <p>Returns a list of charges you’ve previously created. The charges are returned in sorted order, with the most recent charges appearing first.</p>
     * @summary List all charges
     * @operationId GetCharges
     */
    get: {
      queryParams?: {
        /**
         * @description Only return charges that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description Only return charges for the customer specified by this customer ID.
         */
        customer?: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Only return charges that were created by the PaymentIntent specified by this PaymentIntent ID.
         */
        payment_intent?: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return charges for this transfer group, limited to 100.
         */
        transfer_group?: string
      }
      body?: unknown
      res: {
        data: Schemas.charge[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>This method is no longer recommended—use the <a href="/docs/api/payment_intents">Payment Intents API</a>
     * to initiate a new payment instead. Confirmation of the PaymentIntent creates the <code>Charge</code>
     * object used to request payment.</p>
     * @operationId PostCharges
     */
    post: {
      body?: unknown
      res: Schemas.charge
    }

  }

  '/v1/charges/search': {

    /**
     * @description <p>Search for charges you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
     * Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
     * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
     * to an hour behind during outages. Search functionality is not available to merchants in India.</p>
     * @summary Search charges
     * @operationId GetChargesSearch
     */
    get: {
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
         */
        page?: string
        /**
         * @description The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for charges](https://stripe.com/docs/search#query-fields-for-charges).
         */
        query: string
      }
      body?: unknown
      res: {
        data: Schemas.charge[]
        has_more: boolean
        next_page?: string | null
        /**
         * @description String representing the object's type. Objects of the same type share the same value.
         */
        object: 'search_result'
        /**
         * @description The total number of objects that match the query, only accurate up to 10,000.
         */
        total_count?: number
        url: string
      }
    }

  }

  '/v1/charges/{charge}': {

    /**
     * @description <p>Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information. The same information is returned when creating or refunding the charge.</p>
     * @summary Retrieve a charge
     * @operationId GetChargesCharge
     */
    get: {
      pathParams: {
        charge: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.charge
    }

    /**
     * @description <p>Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
     * @summary Update a charge
     * @operationId PostChargesCharge
     */
    post: {
      pathParams: {
        charge: string
      }
      body?: unknown
      res: Schemas.charge
    }

  }

  '/v1/charges/{charge}/capture': {

    /**
     * @description <p>Capture the payment of an existing, uncaptured charge that was created with the <code>capture</code> option set to false.</p>
     * 
     * <p>Uncaptured payments expire a set number of days after they are created (<a href="/docs/charges/placing-a-hold">7 by default</a>), after which they are marked as refunded and capture attempts will fail.</p>
     * 
     * <p>Don’t use this method to capture a PaymentIntent-initiated charge. Use <a href="/docs/api/payment_intents/capture">Capture a PaymentIntent</a>.</p>
     * @summary Capture a payment
     * @operationId PostChargesChargeCapture
     */
    post: {
      pathParams: {
        charge: string
      }
      body?: unknown
      res: Schemas.charge
    }

  }

  '/v1/charges/{charge}/dispute': {

    /**
     * @description <p>Retrieve a dispute for a specified charge.</p>
     * @operationId GetChargesChargeDispute
     */
    get: {
      pathParams: {
        charge: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.dispute
    }

    /**
     * @operationId PostChargesChargeDispute
     */
    post: {
      pathParams: {
        charge: string
      }
      body?: unknown
      res: Schemas.dispute
    }

  }

  '/v1/charges/{charge}/dispute/close': {

    /**
     * @operationId PostChargesChargeDisputeClose
     */
    post: {
      pathParams: {
        charge: string
      }
      body?: unknown
      res: Schemas.dispute
    }

  }

  '/v1/charges/{charge}/refund': {

    /**
     * @description <p>When you create a new refund, you must specify either a Charge or a PaymentIntent object.</p>
     * 
     * <p>This action refunds a previously created charge that’s not refunded yet.
     * Funds are refunded to the credit or debit card that’s originally charged.</p>
     * 
     * <p>You can optionally refund only part of a charge.
     * You can repeat this until the entire charge is refunded.</p>
     * 
     * <p>After you entirely refund a charge, you can’t refund it again.
     * This method raises an error when it’s called on an already-refunded charge,
     * or when you attempt to refund more money than is left on a charge.</p>
     * @summary Create a refund
     * @operationId PostChargesChargeRefund
     */
    post: {
      pathParams: {
        /**
         * @description The identifier of the charge to refund.
         */
        charge: string
      }
      body?: unknown
      res: Schemas.charge
    }

  }

  '/v1/charges/{charge}/refunds': {

    /**
     * @description <p>You can see a list of the refunds belonging to a specific charge. Note that the 10 most recent refunds are always available by default on the charge object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional refunds.</p>
     * @summary List all refunds
     * @operationId GetChargesChargeRefunds
     */
    get: {
      pathParams: {
        charge: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.refund[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>When you create a new refund, you must specify a Charge or a PaymentIntent object on which to create it.</p>
     * 
     * <p>Creating a new refund will refund a charge that has previously been created but not yet refunded.
     * Funds will be refunded to the credit or debit card that was originally charged.</p>
     * 
     * <p>You can optionally refund only part of a charge.
     * You can do so multiple times, until the entire charge has been refunded.</p>
     * 
     * <p>Once entirely refunded, a charge can’t be refunded again.
     * This method will raise an error when called on an already-refunded charge,
     * or when trying to refund more money than is left on a charge.</p>
     * @summary Create customer balance refund
     * @operationId PostChargesChargeRefunds
     */
    post: {
      pathParams: {
        /**
         * @description The identifier of the charge to refund.
         */
        charge: string
      }
      body?: unknown
      res: Schemas.refund
    }

  }

  '/v1/charges/{charge}/refunds/{refund}': {

    /**
     * @description <p>Retrieves the details of an existing refund.</p>
     * @operationId GetChargesChargeRefundsRefund
     */
    get: {
      pathParams: {
        charge: string
        refund: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.refund
    }

    /**
     * @description <p>Update a specified refund.</p>
     * @operationId PostChargesChargeRefundsRefund
     */
    post: {
      pathParams: {
        charge: string
        refund: string
      }
      body?: unknown
      res: Schemas.refund
    }

  }

  '/v1/checkout/sessions': {

    /**
     * @description <p>Returns a list of Checkout Sessions.</p>
     * @summary List all Checkout Sessions
     * @operationId GetCheckoutSessions
     */
    get: {
      queryParams?: {
        /**
         * @description Only return Checkout Sessions that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description Only return the Checkout Sessions for the Customer specified.
         */
        customer?: string
        /**
         * @description Only return the Checkout Sessions for the Customer details specified.
         */
        customer_details?: {
          email: string
        }
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Only return the Checkout Session for the PaymentIntent specified.
         */
        payment_intent?: string
        /**
         * @description Only return the Checkout Sessions for the Payment Link specified.
         */
        payment_link?: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return the Checkout Sessions matching the given status.
         */
        status?: ('complete' | 'expired' | 'open')
        /**
         * @description Only return the Checkout Session for the subscription specified.
         */
        subscription?: string
      }
      body?: unknown
      res: {
        data: Schemas.checkoutsession[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a Checkout Session object.</p>
     * @summary Create a Checkout Session
     * @operationId PostCheckoutSessions
     */
    post: {
      body?: unknown
      res: Schemas.checkoutsession
    }

  }

  '/v1/checkout/sessions/{session}': {

    /**
     * @description <p>Retrieves a Checkout Session object.</p>
     * @summary Retrieve a Checkout Session
     * @operationId GetCheckoutSessionsSession
     */
    get: {
      pathParams: {
        session: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.checkoutsession
    }

    /**
     * @description <p>Updates a Checkout Session object.</p>
     * 
     * <p>Related guide: <a href="/payments/checkout/dynamic-updates">Dynamically update Checkout</a></p>
     * @summary Update a Checkout Session
     * @operationId PostCheckoutSessionsSession
     */
    post: {
      pathParams: {
        session: string
      }
      body?: unknown
      res: Schemas.checkoutsession
    }

  }

  '/v1/checkout/sessions/{session}/expire': {

    /**
     * @description <p>A Checkout Session can be expired when it is in one of these statuses: <code>open</code> </p>
     * 
     * <p>After it expires, a customer can’t complete a Checkout Session and customers loading the Checkout Session see a message saying the Checkout Session is expired.</p>
     * @summary Expire a Checkout Session
     * @operationId PostCheckoutSessionsSessionExpire
     */
    post: {
      pathParams: {
        session: string
      }
      body?: unknown
      res: Schemas.checkoutsession
    }

  }

  '/v1/checkout/sessions/{session}/line_items': {

    /**
     * @description <p>When retrieving a Checkout Session, there is an includable <strong>line_items</strong> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
     * @summary Retrieve a Checkout Session's line items
     * @operationId GetCheckoutSessionsSessionLineItems
     */
    get: {
      pathParams: {
        session: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.item[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/climate/orders': {

    /**
     * @description <p>Lists all Climate order objects. The orders are returned sorted by creation date, with the
     * most recently created orders appearing first.</p>
     * @summary List orders
     * @operationId GetClimateOrders
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.climateorder[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a Climate order object for a given Climate product. The order will be processed immediately
     * after creation and payment will be deducted your Stripe balance.</p>
     * @summary Create an order
     * @operationId PostClimateOrders
     */
    post: {
      body: unknown
      res: Schemas.climateorder
    }

  }

  '/v1/climate/orders/{order}': {

    /**
     * @description <p>Retrieves the details of a Climate order object with the given ID.</p>
     * @summary Retrieve an order
     * @operationId GetClimateOrdersOrder
     */
    get: {
      pathParams: {
        /**
         * @description Unique identifier of the order.
         */
        order: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.climateorder
    }

    /**
     * @description <p>Updates the specified order by setting the values of the parameters passed.</p>
     * @summary Update an order
     * @operationId PostClimateOrdersOrder
     */
    post: {
      pathParams: {
        /**
         * @description Unique identifier of the order.
         */
        order: string
      }
      body?: unknown
      res: Schemas.climateorder
    }

  }

  '/v1/climate/orders/{order}/cancel': {

    /**
     * @description <p>Cancels a Climate order. You can cancel an order within 24 hours of creation. Stripe refunds the
     * reservation <code>amount_subtotal</code>, but not the <code>amount_fees</code> for user-triggered cancellations. Frontier
     * might cancel reservations if suppliers fail to deliver. If Frontier cancels the reservation, Stripe
     * provides 90 days advance notice and refunds the <code>amount_total</code>.</p>
     * @summary Cancel an order
     * @operationId PostClimateOrdersOrderCancel
     */
    post: {
      pathParams: {
        /**
         * @description Unique identifier of the order.
         */
        order: string
      }
      body?: unknown
      res: Schemas.climateorder
    }

  }

  '/v1/climate/products': {

    /**
     * @description <p>Lists all available Climate product objects.</p>
     * @summary List products
     * @operationId GetClimateProducts
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.climateproduct[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/climate/products/{product}': {

    /**
     * @description <p>Retrieves the details of a Climate product with the given ID.</p>
     * @summary Retrieve a product
     * @operationId GetClimateProductsProduct
     */
    get: {
      pathParams: {
        product: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.climateproduct
    }

  }

  '/v1/climate/suppliers': {

    /**
     * @description <p>Lists all available Climate supplier objects.</p>
     * @summary List suppliers
     * @operationId GetClimateSuppliers
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.climatesupplier[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/climate/suppliers/{supplier}': {

    /**
     * @description <p>Retrieves a Climate supplier object.</p>
     * @summary Retrieve a supplier
     * @operationId GetClimateSuppliersSupplier
     */
    get: {
      pathParams: {
        supplier: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.climatesupplier
    }

  }

  '/v1/confirmation_tokens/{confirmation_token}': {

    /**
     * @description <p>Retrieves an existing ConfirmationToken object</p>
     * @summary Retrieve a ConfirmationToken
     * @operationId GetConfirmationTokensConfirmationToken
     */
    get: {
      pathParams: {
        confirmation_token: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.confirmation_token
    }

  }

  '/v1/country_specs': {

    /**
     * @description <p>Lists all Country Spec objects available in the API.</p>
     * @summary List Country Specs
     * @operationId GetCountrySpecs
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.country_spec[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/country_specs/{country}': {

    /**
     * @description <p>Returns a Country Spec for a given Country code.</p>
     * @summary Retrieve a Country Spec
     * @operationId GetCountrySpecsCountry
     */
    get: {
      pathParams: {
        country: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.country_spec
    }

  }

  '/v1/coupons': {

    /**
     * @description <p>Returns a list of your coupons.</p>
     * @summary List all coupons
     * @operationId GetCoupons
     */
    get: {
      queryParams?: {
        /**
         * @description A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.coupon[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>You can create coupons easily via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. Coupon creation is also accessible via the API if you need to create coupons on the fly.</p>
     * 
     * <p>A coupon has either a <code>percent_off</code> or an <code>amount_off</code> and <code>currency</code>. If you set an <code>amount_off</code>, that amount will be subtracted from any invoice’s subtotal. For example, an invoice with a subtotal of <currency>100</currency> will have a final total of <currency>0</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it and an invoice with a subtotal of <currency>300</currency> will have a final total of <currency>100</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it.</p>
     * @summary Create a coupon
     * @operationId PostCoupons
     */
    post: {
      body?: unknown
      res: Schemas.coupon
    }

  }

  '/v1/coupons/{coupon}': {

    /**
     * @description <p>You can delete coupons via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. However, deleting a coupon does not affect any customers who have already applied the coupon; it means that new customers can’t redeem the coupon. You can also delete coupons via the API.</p>
     * @summary Delete a coupon
     * @operationId DeleteCouponsCoupon
     */
    delete: {
      pathParams: {
        coupon: string
      }
      body?: unknown
      res: Schemas.deleted_coupon
    }

    /**
     * @description <p>Retrieves the coupon with the given ID.</p>
     * @summary Retrieve a coupon
     * @operationId GetCouponsCoupon
     */
    get: {
      pathParams: {
        coupon: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.coupon
    }

    /**
     * @description <p>Updates the metadata of a coupon. Other coupon details (currency, duration, amount_off) are, by design, not editable.</p>
     * @summary Update a coupon
     * @operationId PostCouponsCoupon
     */
    post: {
      pathParams: {
        coupon: string
      }
      body?: unknown
      res: Schemas.coupon
    }

  }

  '/v1/credit_notes': {

    /**
     * @description <p>Returns a list of credit notes.</p>
     * @summary List all credit notes
     * @operationId GetCreditNotes
     */
    get: {
      queryParams?: {
        /**
         * @description Only return credit notes that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description Only return credit notes for the customer specified by this customer ID.
         */
        customer?: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description Only return credit notes for the invoice specified by this invoice ID.
         */
        invoice?: string
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.credit_note[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Issue a credit note to adjust the amount of a finalized invoice. A credit note will first reduce the invoice’s <code>amount_remaining</code> (and <code>amount_due</code>), but not below zero.
     * This amount is indicated by the credit note’s <code>pre_payment_amount</code>. The excess amount is indicated by <code>post_payment_amount</code>, and it can result in any combination of the following:</p>
     * 
     * <ul>
     * <li>Refunds: create a new refund (using <code>refund_amount</code>) or link existing refunds (using <code>refunds</code>).</li>
     * <li>Customer balance credit: credit the customer’s balance (using <code>credit_amount</code>) which will be automatically applied to their next invoice when it’s finalized.</li>
     * <li>Outside of Stripe credit: record the amount that is or will be credited outside of Stripe (using <code>out_of_band_amount</code>).</li>
     * </ul>
     * 
     * <p>The sum of refunds, customer balance credits, and outside of Stripe credits must equal the <code>post_payment_amount</code>.</p>
     * 
     * <p>You may issue multiple credit notes for an invoice. Each credit note may increment the invoice’s <code>pre_payment_credit_notes_amount</code>,
     * <code>post_payment_credit_notes_amount</code>, or both, depending on the invoice’s <code>amount_remaining</code> at the time of credit note creation.</p>
     * @summary Create a credit note
     * @operationId PostCreditNotes
     */
    post: {
      body: unknown
      res: Schemas.credit_note
    }

  }

  '/v1/credit_notes/preview': {

    /**
     * @description <p>Get a preview of a credit note without creating it.</p>
     * @summary Preview a credit note
     * @operationId GetCreditNotesPreview
     */
    get: {
      queryParams?: {
        /**
         * @description The integer amount in cents (or local equivalent) representing the total amount of the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.
         */
        amount?: number
        /**
         * @description The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.
         */
        credit_amount?: number
        /**
         * @description The date when this credit note is in effect. Same as `created` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the credit note PDF.
         */
        effective_at?: number
        /**
         * @description Type of email to send to the customer, one of `credit_note` or `none` and the default is `credit_note`.
         */
        email_type?: ('credit_note' | 'none')
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description ID of the invoice.
         */
        invoice: string
        /**
         * @description Line items that make up the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.
         */
        lines?: {
          amount?: number
          description?: string
          invoice_line_item?: string
          quantity?: number
          tax_amounts?: ({
            amount: number
            tax_rate: string
            taxable_amount: number
          }[] | '')
          tax_rates?: (string[] | '')
          type: ('custom_line_item' | 'invoice_line_item')
          unit_amount?: number
          unit_amount_decimal?: string
        }[]
        /**
         * @description The credit note's memo appears on the credit note PDF.
         */
        memo?: string
        /**
         * @description Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Record<string, string>
        /**
         * @description The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe.
         */
        out_of_band_amount?: number
        /**
         * @description Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
         */
        reason?: ('duplicate' | 'fraudulent' | 'order_change' | 'product_unsatisfactory')
        /**
         * @description The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.
         */
        refund_amount?: number
        /**
         * @description Refunds to link to this credit note.
         */
        refunds?: {
          amount_refunded?: number
          refund?: string
        }[]
        /**
         * @description When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.
         */
        shipping_cost?: {
          shipping_rate?: string
        }
      }
      body?: unknown
      res: Schemas.credit_note
    }

  }

  '/v1/credit_notes/preview/lines': {

    /**
     * @description <p>When retrieving a credit note preview, you’ll get a <strong>lines</strong> property containing the first handful of those items. This URL you can retrieve the full (paginated) list of line items.</p>
     * @summary Retrieve a credit note preview's line items
     * @operationId GetCreditNotesPreviewLines
     */
    get: {
      queryParams?: {
        /**
         * @description The integer amount in cents (or local equivalent) representing the total amount of the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.
         */
        amount?: number
        /**
         * @description The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.
         */
        credit_amount?: number
        /**
         * @description The date when this credit note is in effect. Same as `created` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the credit note PDF.
         */
        effective_at?: number
        /**
         * @description Type of email to send to the customer, one of `credit_note` or `none` and the default is `credit_note`.
         */
        email_type?: ('credit_note' | 'none')
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description ID of the invoice.
         */
        invoice: string
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Line items that make up the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.
         */
        lines?: {
          amount?: number
          description?: string
          invoice_line_item?: string
          quantity?: number
          tax_amounts?: ({
            amount: number
            tax_rate: string
            taxable_amount: number
          }[] | '')
          tax_rates?: (string[] | '')
          type: ('custom_line_item' | 'invoice_line_item')
          unit_amount?: number
          unit_amount_decimal?: string
        }[]
        /**
         * @description The credit note's memo appears on the credit note PDF.
         */
        memo?: string
        /**
         * @description Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Record<string, string>
        /**
         * @description The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe.
         */
        out_of_band_amount?: number
        /**
         * @description Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
         */
        reason?: ('duplicate' | 'fraudulent' | 'order_change' | 'product_unsatisfactory')
        /**
         * @description The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.
         */
        refund_amount?: number
        /**
         * @description Refunds to link to this credit note.
         */
        refunds?: {
          amount_refunded?: number
          refund?: string
        }[]
        /**
         * @description When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.
         */
        shipping_cost?: {
          shipping_rate?: string
        }
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.credit_note_line_item[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/credit_notes/{credit_note}/lines': {

    /**
     * @description <p>When retrieving a credit note, you’ll get a <strong>lines</strong> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
     * @summary Retrieve a credit note's line items
     * @operationId GetCreditNotesCreditNoteLines
     */
    get: {
      pathParams: {
        credit_note: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.credit_note_line_item[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/credit_notes/{id}': {

    /**
     * @description <p>Retrieves the credit note object with the given identifier.</p>
     * @summary Retrieve a credit note
     * @operationId GetCreditNotesId
     */
    get: {
      pathParams: {
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.credit_note
    }

    /**
     * @description <p>Updates an existing credit note.</p>
     * @summary Update a credit note
     * @operationId PostCreditNotesId
     */
    post: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.credit_note
    }

  }

  '/v1/credit_notes/{id}/void': {

    /**
     * @description <p>Marks a credit note as void. Learn more about <a href="/docs/billing/invoices/credit-notes#voiding">voiding credit notes</a>.</p>
     * @summary Void a credit note
     * @operationId PostCreditNotesIdVoid
     */
    post: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.credit_note
    }

  }

  '/v1/customer_sessions': {

    /**
     * @description <p>Creates a Customer Session object that includes a single-use client secret that you can use on your front-end to grant client-side API access for certain customer resources.</p>
     * @summary Create a Customer Session
     * @operationId PostCustomerSessions
     */
    post: {
      body: unknown
      res: Schemas.customer_session
    }

  }

  '/v1/customers': {

    /**
     * @description <p>Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first.</p>
     * @summary List all customers
     * @operationId GetCustomers
     */
    get: {
      queryParams?: {
        /**
         * @description Only return customers that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A case-sensitive filter on the list based on the customer's `email` field. The value must be a string.
         */
        email?: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Provides a list of customers that are associated with the specified test clock. The response will not include customers with test clocks if this parameter is not set.
         */
        test_clock?: string
      }
      body?: unknown
      res: {
        data: Schemas.customer[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new customer object.</p>
     * @summary Create a customer
     * @operationId PostCustomers
     */
    post: {
      body?: unknown
      res: Schemas.customer
    }

  }

  '/v1/customers/search': {

    /**
     * @description <p>Search for customers you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
     * Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
     * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
     * to an hour behind during outages. Search functionality is not available to merchants in India.</p>
     * @summary Search customers
     * @operationId GetCustomersSearch
     */
    get: {
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
         */
        page?: string
        /**
         * @description The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for customers](https://stripe.com/docs/search#query-fields-for-customers).
         */
        query: string
      }
      body?: unknown
      res: {
        data: Schemas.customer[]
        has_more: boolean
        next_page?: string | null
        /**
         * @description String representing the object's type. Objects of the same type share the same value.
         */
        object: 'search_result'
        /**
         * @description The total number of objects that match the query, only accurate up to 10,000.
         */
        total_count?: number
        url: string
      }
    }

  }

  '/v1/customers/{customer}': {

    /**
     * @description <p>Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.</p>
     * @summary Delete a customer
     * @operationId DeleteCustomersCustomer
     */
    delete: {
      pathParams: {
        customer: string
      }
      body?: unknown
      res: Schemas.deleted_customer
    }

    /**
     * @description <p>Retrieves a Customer object.</p>
     * @summary Retrieve a customer
     * @operationId GetCustomersCustomer
     */
    get: {
      pathParams: {
        customer: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: (Schemas.customer | Schemas.deleted_customer)
    }

    /**
     * @description <p>Updates the specified customer by setting the values of the parameters passed. Any parameters not provided will be left unchanged. For example, if you pass the <strong>source</strong> parameter, that becomes the customer’s active source (e.g., a card) to be used for all charges in the future. When you update a customer to a new valid card source by passing the <strong>source</strong> parameter: for each of the customer’s current subscriptions, if the subscription bills automatically and is in the <code>past_due</code> state, then the latest open invoice for the subscription with automatic collection enabled will be retried. This retry will not count as an automatic retry, and will not affect the next regularly scheduled payment for the invoice. Changing the <strong>default_source</strong> for a customer will not trigger this behavior.</p>
     * 
     * <p>This request accepts mostly the same arguments as the customer creation call.</p>
     * @summary Update a customer
     * @operationId PostCustomersCustomer
     */
    post: {
      pathParams: {
        customer: string
      }
      body?: unknown
      res: Schemas.customer
    }

  }

  '/v1/customers/{customer}/balance_transactions': {

    /**
     * @description <p>Returns a list of transactions that updated the customer’s <a href="/docs/billing/customer/balance">balances</a>.</p>
     * @summary List customer balance transactions
     * @operationId GetCustomersCustomerBalanceTransactions
     */
    get: {
      pathParams: {
        customer: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.customer_balance_transaction[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates an immutable transaction that updates the customer’s credit <a href="/docs/billing/customer/balance">balance</a>.</p>
     * @summary Create a customer balance transaction
     * @operationId PostCustomersCustomerBalanceTransactions
     */
    post: {
      pathParams: {
        customer: string
      }
      body: unknown
      res: Schemas.customer_balance_transaction
    }

  }

  '/v1/customers/{customer}/balance_transactions/{transaction}': {

    /**
     * @description <p>Retrieves a specific customer balance transaction that updated the customer’s <a href="/docs/billing/customer/balance">balances</a>.</p>
     * @summary Retrieve a customer balance transaction
     * @operationId GetCustomersCustomerBalanceTransactionsTransaction
     */
    get: {
      pathParams: {
        customer: string
        transaction: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.customer_balance_transaction
    }

    /**
     * @description <p>Most credit balance transaction fields are immutable, but you may update its <code>description</code> and <code>metadata</code>.</p>
     * @summary Update a customer credit balance transaction
     * @operationId PostCustomersCustomerBalanceTransactionsTransaction
     */
    post: {
      pathParams: {
        customer: string
        transaction: string
      }
      body?: unknown
      res: Schemas.customer_balance_transaction
    }

  }

  '/v1/customers/{customer}/bank_accounts': {

    /**
     * @description <p>You can see a list of the bank accounts belonging to a Customer. Note that the 10 most recent sources are always available by default on the Customer. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional bank accounts.</p>
     * @summary List all bank accounts
     * @operationId GetCustomersCustomerBankAccounts
     */
    get: {
      pathParams: {
        customer: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.bank_account[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>
     * 
     * <p>If the card’s owner has no default card, then the new card will become the default.
     * However, if the owner already has a default, then it will not change.
     * To change the default, you should <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>.</p>
     * @summary Create a card
     * @operationId PostCustomersCustomerBankAccounts
     */
    post: {
      pathParams: {
        customer: string
      }
      body?: unknown
      res: Schemas.payment_source
    }

  }

  '/v1/customers/{customer}/bank_accounts/{id}': {

    /**
     * @description <p>Delete a specified source for a given customer.</p>
     * @summary Delete a customer source
     * @operationId DeleteCustomersCustomerBankAccountsId
     */
    delete: {
      pathParams: {
        customer: string
        id: string
      }
      body?: unknown
      res: (Schemas.payment_source | Schemas.deleted_payment_source)
    }

    /**
     * @description <p>By default, you can see the 10 most recent sources stored on a Customer directly on the object, but you can also retrieve details about a specific bank account stored on the Stripe account.</p>
     * @summary Retrieve a bank account
     * @operationId GetCustomersCustomerBankAccountsId
     */
    get: {
      pathParams: {
        customer: string
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.bank_account
    }

    /**
     * @description <p>Update a specified source for a given customer.</p>
     * @operationId PostCustomersCustomerBankAccountsId
     */
    post: {
      pathParams: {
        customer: string
        id: string
      }
      body?: unknown
      res: (Schemas.card | Schemas.bank_account | Schemas.source)
    }

  }

  '/v1/customers/{customer}/bank_accounts/{id}/verify': {

    /**
     * @description <p>Verify a specified bank account for a given customer.</p>
     * @summary Verify a bank account
     * @operationId PostCustomersCustomerBankAccountsIdVerify
     */
    post: {
      pathParams: {
        customer: string
        id: string
      }
      body?: unknown
      res: Schemas.bank_account
    }

  }

  '/v1/customers/{customer}/cards': {

    /**
     * @description <p>You can see a list of the cards belonging to a customer.
     * Note that the 10 most recent sources are always available on the <code>Customer</code> object.
     * If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional cards.</p>
     * @summary List all cards
     * @operationId GetCustomersCustomerCards
     */
    get: {
      pathParams: {
        customer: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.card[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>
     * 
     * <p>If the card’s owner has no default card, then the new card will become the default.
     * However, if the owner already has a default, then it will not change.
     * To change the default, you should <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>.</p>
     * @summary Create a card
     * @operationId PostCustomersCustomerCards
     */
    post: {
      pathParams: {
        customer: string
      }
      body?: unknown
      res: Schemas.payment_source
    }

  }

  '/v1/customers/{customer}/cards/{id}': {

    /**
     * @description <p>Delete a specified source for a given customer.</p>
     * @summary Delete a customer source
     * @operationId DeleteCustomersCustomerCardsId
     */
    delete: {
      pathParams: {
        customer: string
        id: string
      }
      body?: unknown
      res: (Schemas.payment_source | Schemas.deleted_payment_source)
    }

    /**
     * @description <p>You can always see the 10 most recent cards directly on a customer; this method lets you retrieve details about a specific card stored on the customer.</p>
     * @summary Retrieve a card
     * @operationId GetCustomersCustomerCardsId
     */
    get: {
      pathParams: {
        customer: string
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.card
    }

    /**
     * @description <p>Update a specified source for a given customer.</p>
     * @operationId PostCustomersCustomerCardsId
     */
    post: {
      pathParams: {
        customer: string
        id: string
      }
      body?: unknown
      res: (Schemas.card | Schemas.bank_account | Schemas.source)
    }

  }

  '/v1/customers/{customer}/cash_balance': {

    /**
     * @description <p>Retrieves a customer’s cash balance.</p>
     * @summary Retrieve a cash balance
     * @operationId GetCustomersCustomerCashBalance
     */
    get: {
      pathParams: {
        customer: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.cash_balance
    }

    /**
     * @description <p>Changes the settings on a customer’s cash balance.</p>
     * @summary Update a cash balance's settings
     * @operationId PostCustomersCustomerCashBalance
     */
    post: {
      pathParams: {
        customer: string
      }
      body?: unknown
      res: Schemas.cash_balance
    }

  }

  '/v1/customers/{customer}/cash_balance_transactions': {

    /**
     * @description <p>Returns a list of transactions that modified the customer’s <a href="/docs/payments/customer-balance">cash balance</a>.</p>
     * @summary List cash balance transactions
     * @operationId GetCustomersCustomerCashBalanceTransactions
     */
    get: {
      pathParams: {
        customer: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.customer_cash_balance_transaction[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/customers/{customer}/cash_balance_transactions/{transaction}': {

    /**
     * @description <p>Retrieves a specific cash balance transaction, which updated the customer’s <a href="/docs/payments/customer-balance">cash balance</a>.</p>
     * @summary Retrieve a cash balance transaction
     * @operationId GetCustomersCustomerCashBalanceTransactionsTransaction
     */
    get: {
      pathParams: {
        customer: string
        transaction: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.customer_cash_balance_transaction
    }

  }

  '/v1/customers/{customer}/discount': {

    /**
     * @description <p>Removes the currently applied discount on a customer.</p>
     * @summary Delete a customer discount
     * @operationId DeleteCustomersCustomerDiscount
     */
    delete: {
      pathParams: {
        customer: string
      }
      body?: unknown
      res: Schemas.deleted_discount
    }

    /**
     * @operationId GetCustomersCustomerDiscount
     */
    get: {
      pathParams: {
        customer: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.discount
    }

  }

  '/v1/customers/{customer}/funding_instructions': {

    /**
     * @description <p>Retrieve funding instructions for a customer cash balance. If funding instructions do not yet exist for the customer, new
     * funding instructions will be created. If funding instructions have already been created for a given customer, the same
     * funding instructions will be retrieved. In other words, we will return the same funding instructions each time.</p>
     * @summary Create or retrieve funding instructions for a customer cash balance
     * @operationId PostCustomersCustomerFundingInstructions
     */
    post: {
      pathParams: {
        customer: string
      }
      body: unknown
      res: Schemas.funding_instructions
    }

  }

  '/v1/customers/{customer}/payment_methods': {

    /**
     * @description <p>Returns a list of PaymentMethods for a given Customer</p>
     * @summary List a Customer's PaymentMethods
     * @operationId GetCustomersCustomerPaymentMethods
     */
    get: {
      pathParams: {
        customer: string
      }
      queryParams?: {
        /**
         * @description This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow.
         */
        allow_redisplay?: ('always' | 'limited' | 'unspecified')
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description An optional filter on the list, based on the object `type` field. Without the filter, the list includes all current and future payment method types. If your integration expects only one type of payment method in the response, make sure to provide a type value in the request.
         */
        type?: ('acss_debit' | 'affirm' | 'afterpay_clearpay' | 'alipay' | 'alma' | 'amazon_pay' | 'au_becs_debit' | 'bacs_debit' | 'bancontact' | 'billie' | 'blik' | 'boleto' | 'card' | 'cashapp' | 'crypto' | 'customer_balance' | 'eps' | 'fpx' | 'giropay' | 'grabpay' | 'ideal' | 'kakao_pay' | 'klarna' | 'konbini' | 'kr_card' | 'link' | 'mobilepay' | 'multibanco' | 'naver_pay' | 'nz_bank_account' | 'oxxo' | 'p24' | 'pay_by_bank' | 'payco' | 'paynow' | 'paypal' | 'pix' | 'promptpay' | 'revolut_pay' | 'samsung_pay' | 'satispay' | 'sepa_debit' | 'sofort' | 'swish' | 'twint' | 'us_bank_account' | 'wechat_pay' | 'zip')
      }
      body?: unknown
      res: {
        data: Schemas.payment_method[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/customers/{customer}/payment_methods/{payment_method}': {

    /**
     * @description <p>Retrieves a PaymentMethod object for a given Customer.</p>
     * @summary Retrieve a Customer's PaymentMethod
     * @operationId GetCustomersCustomerPaymentMethodsPaymentMethod
     */
    get: {
      pathParams: {
        customer: string
        payment_method: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.payment_method
    }

  }

  '/v1/customers/{customer}/sources': {

    /**
     * @description <p>List sources for a specified customer.</p>
     * @operationId GetCustomersCustomerSources
     */
    get: {
      pathParams: {
        customer: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Filter sources according to a particular object type.
         */
        object?: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: (Schemas.bank_account | Schemas.card | Schemas.source)[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>
     * 
     * <p>If the card’s owner has no default card, then the new card will become the default.
     * However, if the owner already has a default, then it will not change.
     * To change the default, you should <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>.</p>
     * @summary Create a card
     * @operationId PostCustomersCustomerSources
     */
    post: {
      pathParams: {
        customer: string
      }
      body?: unknown
      res: Schemas.payment_source
    }

  }

  '/v1/customers/{customer}/sources/{id}': {

    /**
     * @description <p>Delete a specified source for a given customer.</p>
     * @summary Delete a customer source
     * @operationId DeleteCustomersCustomerSourcesId
     */
    delete: {
      pathParams: {
        customer: string
        id: string
      }
      body?: unknown
      res: (Schemas.payment_source | Schemas.deleted_payment_source)
    }

    /**
     * @description <p>Retrieve a specified source for a given customer.</p>
     * @operationId GetCustomersCustomerSourcesId
     */
    get: {
      pathParams: {
        customer: string
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.payment_source
    }

    /**
     * @description <p>Update a specified source for a given customer.</p>
     * @operationId PostCustomersCustomerSourcesId
     */
    post: {
      pathParams: {
        customer: string
        id: string
      }
      body?: unknown
      res: (Schemas.card | Schemas.bank_account | Schemas.source)
    }

  }

  '/v1/customers/{customer}/sources/{id}/verify': {

    /**
     * @description <p>Verify a specified bank account for a given customer.</p>
     * @summary Verify a bank account
     * @operationId PostCustomersCustomerSourcesIdVerify
     */
    post: {
      pathParams: {
        customer: string
        id: string
      }
      body?: unknown
      res: Schemas.bank_account
    }

  }

  '/v1/customers/{customer}/subscriptions': {

    /**
     * @description <p>You can see a list of the customer’s active subscriptions. Note that the 10 most recent active subscriptions are always available by default on the customer object. If you need more than those 10, you can use the limit and starting_after parameters to page through additional subscriptions.</p>
     * @summary List active subscriptions
     * @operationId GetCustomersCustomerSubscriptions
     */
    get: {
      pathParams: {
        customer: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.subscription[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new subscription on an existing customer.</p>
     * @summary Create a subscription
     * @operationId PostCustomersCustomerSubscriptions
     */
    post: {
      pathParams: {
        customer: string
      }
      body?: unknown
      res: Schemas.subscription
    }

  }

  '/v1/customers/{customer}/subscriptions/{subscription_exposed_id}': {

    /**
     * @description <p>Cancels a customer’s subscription. If you set the <code>at_period_end</code> parameter to <code>true</code>, the subscription will remain active until the end of the period, at which point it will be canceled and not renewed. Otherwise, with the default <code>false</code> value, the subscription is terminated immediately. In either case, the customer will not be charged again for the subscription.</p>
     * 
     * <p>Note, however, that any pending invoice items that you’ve created will still be charged for at the end of the period, unless manually <a href="#delete_invoiceitem">deleted</a>. If you’ve set the subscription to cancel at the end of the period, any pending prorations will also be left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations will be removed.</p>
     * 
     * <p>By default, upon subscription cancellation, Stripe will stop automatic collection of all finalized invoices for the customer. This is intended to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can resume automatic collection of the invoices manually after subscription cancellation to have us proceed. Or, you could check for unpaid invoices before allowing the customer to cancel the subscription at all.</p>
     * @summary Cancel a subscription
     * @operationId DeleteCustomersCustomerSubscriptionsSubscriptionExposedId
     */
    delete: {
      pathParams: {
        customer: string
        subscription_exposed_id: string
      }
      body?: unknown
      res: Schemas.subscription
    }

    /**
     * @description <p>Retrieves the subscription with the given ID.</p>
     * @summary Retrieve a subscription
     * @operationId GetCustomersCustomerSubscriptionsSubscriptionExposedId
     */
    get: {
      pathParams: {
        customer: string
        subscription_exposed_id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.subscription
    }

    /**
     * @description <p>Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities, we will optionally prorate the price we charge next month to make up for any price changes. To preview how the proration will be calculated, use the <a href="#upcoming_invoice">upcoming invoice</a> endpoint.</p>
     * @summary Update a subscription on a customer
     * @operationId PostCustomersCustomerSubscriptionsSubscriptionExposedId
     */
    post: {
      pathParams: {
        customer: string
        subscription_exposed_id: string
      }
      body?: unknown
      res: Schemas.subscription
    }

  }

  '/v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount': {

    /**
     * @description <p>Removes the currently applied discount on a customer.</p>
     * @summary Delete a customer discount
     * @operationId DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount
     */
    delete: {
      pathParams: {
        customer: string
        subscription_exposed_id: string
      }
      body?: unknown
      res: Schemas.deleted_discount
    }

    /**
     * @operationId GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount
     */
    get: {
      pathParams: {
        customer: string
        subscription_exposed_id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.discount
    }

  }

  '/v1/customers/{customer}/tax_ids': {

    /**
     * @description <p>Returns a list of tax IDs for a customer.</p>
     * @summary List all Customer tax IDs
     * @operationId GetCustomersCustomerTaxIds
     */
    get: {
      pathParams: {
        customer: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.tax_id[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new <code>tax_id</code> object for a customer.</p>
     * @summary Create a Customer tax ID
     * @operationId PostCustomersCustomerTaxIds
     */
    post: {
      pathParams: {
        customer: string
      }
      body: unknown
      res: Schemas.tax_id
    }

  }

  '/v1/customers/{customer}/tax_ids/{id}': {

    /**
     * @description <p>Deletes an existing <code>tax_id</code> object.</p>
     * @summary Delete a Customer tax ID
     * @operationId DeleteCustomersCustomerTaxIdsId
     */
    delete: {
      pathParams: {
        customer: string
        id: string
      }
      body?: unknown
      res: Schemas.deleted_tax_id
    }

    /**
     * @description <p>Retrieves the <code>tax_id</code> object with the given identifier.</p>
     * @summary Retrieve a Customer tax ID
     * @operationId GetCustomersCustomerTaxIdsId
     */
    get: {
      pathParams: {
        customer: string
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.tax_id
    }

  }

  '/v1/disputes': {

    /**
     * @description <p>Returns a list of your disputes.</p>
     * @summary List all disputes
     * @operationId GetDisputes
     */
    get: {
      queryParams?: {
        /**
         * @description Only return disputes associated to the charge specified by this charge ID.
         */
        charge?: string
        /**
         * @description Only return disputes that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Only return disputes associated to the PaymentIntent specified by this PaymentIntent ID.
         */
        payment_intent?: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.dispute[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/disputes/{dispute}': {

    /**
     * @description <p>Retrieves the dispute with the given ID.</p>
     * @summary Retrieve a dispute
     * @operationId GetDisputesDispute
     */
    get: {
      pathParams: {
        dispute: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.dispute
    }

    /**
     * @description <p>When you get a dispute, contacting your customer is always the best first step. If that doesn’t work, you can submit evidence to help us resolve the dispute in your favor. You can do this in your <a href="https://dashboard.stripe.com/disputes">dashboard</a>, but if you prefer, you can use the API to submit evidence programmatically.</p>
     * 
     * <p>Depending on your dispute type, different evidence fields will give you a better chance of winning your dispute. To figure out which evidence fields to provide, see our <a href="/docs/disputes/categories">guide to dispute types</a>.</p>
     * @summary Update a dispute
     * @operationId PostDisputesDispute
     */
    post: {
      pathParams: {
        dispute: string
      }
      body?: unknown
      res: Schemas.dispute
    }

  }

  '/v1/disputes/{dispute}/close': {

    /**
     * @description <p>Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially dismissing the dispute, acknowledging it as lost.</p>
     * 
     * <p>The status of the dispute will change from <code>needs_response</code> to <code>lost</code>. <em>Closing a dispute is irreversible</em>.</p>
     * @summary Close a dispute
     * @operationId PostDisputesDisputeClose
     */
    post: {
      pathParams: {
        dispute: string
      }
      body?: unknown
      res: Schemas.dispute
    }

  }

  '/v1/entitlements/active_entitlements': {

    /**
     * @description <p>Retrieve a list of active entitlements for a customer</p>
     * @summary List all active entitlements
     * @operationId GetEntitlementsActiveEntitlements
     */
    get: {
      queryParams?: {
        /**
         * @description The ID of the customer.
         */
        customer: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.entitlementsactive_entitlement[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/entitlements/active_entitlements/{id}': {

    /**
     * @description <p>Retrieve an active entitlement</p>
     * @summary Retrieve an active entitlement
     * @operationId GetEntitlementsActiveEntitlementsId
     */
    get: {
      pathParams: {
        /**
         * @description The ID of the entitlement.
         */
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.entitlementsactive_entitlement
    }

  }

  '/v1/entitlements/features': {

    /**
     * @description <p>Retrieve a list of features</p>
     * @summary List all features
     * @operationId GetEntitlementsFeatures
     */
    get: {
      queryParams?: {
        /**
         * @description If set, filter results to only include features with the given archive status.
         */
        archived?: boolean
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description If set, filter results to only include features with the given lookup_key.
         */
        lookup_key?: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.entitlementsfeature[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a feature</p>
     * @summary Create a feature
     * @operationId PostEntitlementsFeatures
     */
    post: {
      body: unknown
      res: Schemas.entitlementsfeature
    }

  }

  '/v1/entitlements/features/{id}': {

    /**
     * @description <p>Retrieves a feature</p>
     * @summary Retrieve a feature
     * @operationId GetEntitlementsFeaturesId
     */
    get: {
      pathParams: {
        /**
         * @description The ID of the feature.
         */
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.entitlementsfeature
    }

    /**
     * @description <p>Update a feature’s metadata or permanently deactivate it.</p>
     * @summary Updates a feature
     * @operationId PostEntitlementsFeaturesId
     */
    post: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.entitlementsfeature
    }

  }

  '/v1/ephemeral_keys': {

    /**
     * @description <p>Creates a short-lived API key for a given resource.</p>
     * @summary Create an ephemeral key
     * @operationId PostEphemeralKeys
     */
    post: {
      body?: unknown
      res: Schemas.ephemeral_key
    }

  }

  '/v1/ephemeral_keys/{key}': {

    /**
     * @description <p>Invalidates a short-lived API key for a given resource.</p>
     * @summary Immediately invalidate an ephemeral key
     * @operationId DeleteEphemeralKeysKey
     */
    delete: {
      pathParams: {
        key: string
      }
      body?: unknown
      res: Schemas.ephemeral_key
    }

  }

  '/v1/events': {

    /**
     * @description <p>List events, going back up to 30 days. Each event data is rendered according to Stripe API version at its creation time, specified in <a href="https://docs.stripe.com/api/events/object">event object</a> <code>api_version</code> attribute (not according to your current Stripe API version or <code>Stripe-Version</code> header).</p>
     * @summary List all events
     * @operationId GetEvents
     */
    get: {
      queryParams?: {
        /**
         * @description Only return events that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description Filter events by whether all webhooks were successfully delivered. If false, events which are still pending or have failed all delivery attempts to a webhook endpoint will be returned.
         */
        delivery_success?: boolean
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description A string containing a specific event name, or group of events using * as a wildcard. The list will be filtered to include only events with a matching event property.
         */
        type?: string
        /**
         * @description An array of up to 20 strings containing specific event names. The list will be filtered to include only events with a matching event property. You may pass either `type` or `types`, but not both.
         */
        types?: string[]
      }
      body?: unknown
      res: {
        data: Schemas.event[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/events/{id}': {

    /**
     * @description <p>Retrieves the details of an event if it was created in the last 30 days. Supply the unique identifier of the event, which you might have received in a webhook.</p>
     * @summary Retrieve an event
     * @operationId GetEventsId
     */
    get: {
      pathParams: {
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.event
    }

  }

  '/v1/exchange_rates': {

    /**
     * @description <p>Returns a list of objects that contain the rates at which foreign currencies are converted to one another. Only shows the currencies for which Stripe supports.</p>
     * @summary List all exchange rates
     * @operationId GetExchangeRates
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is the currency that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with the exchange rate for currency X your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and total number of supported payout currencies, and the default is the max.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is the currency that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with the exchange rate for currency X, your subsequent call can include `starting_after=X` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.exchange_rate[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/exchange_rates/{rate_id}': {

    /**
     * @description <p>Retrieves the exchange rates from the given currency to every supported currency.</p>
     * @summary Retrieve an exchange rate
     * @operationId GetExchangeRatesRateId
     */
    get: {
      pathParams: {
        rate_id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.exchange_rate
    }

  }

  '/v1/external_accounts/{id}': {

    /**
     * @description <p>Updates the metadata, account holder name, account holder type of a bank account belonging to
     * a connected account and optionally sets it as the default for its currency. Other bank account
     * details are not editable by design.</p>
     * 
     * <p>You can only update bank accounts when <a href="/api/accounts/object#account_object-controller-requirement_collection">account.controller.requirement_collection</a> is <code>application</code>, which includes <a href="/connect/custom-accounts">Custom accounts</a>.</p>
     * 
     * <p>You can re-enable a disabled bank account by performing an update call without providing any
     * arguments or changes.</p>
     * @operationId PostExternalAccountsId
     */
    post: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.external_account
    }

  }

  '/v1/file_links': {

    /**
     * @description <p>Returns a list of file links.</p>
     * @summary List all file links
     * @operationId GetFileLinks
     */
    get: {
      queryParams?: {
        /**
         * @description Only return links that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description Filter links by their expiration status. By default, Stripe returns all links.
         */
        expired?: boolean
        /**
         * @description Only return links for the given file.
         */
        file?: string
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.file_link[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new file link object.</p>
     * @summary Create a file link
     * @operationId PostFileLinks
     */
    post: {
      body: unknown
      res: Schemas.file_link
    }

  }

  '/v1/file_links/{link}': {

    /**
     * @description <p>Retrieves the file link with the given ID.</p>
     * @summary Retrieve a file link
     * @operationId GetFileLinksLink
     */
    get: {
      pathParams: {
        link: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.file_link
    }

    /**
     * @description <p>Updates an existing file link object. Expired links can no longer be updated.</p>
     * @summary Update a file link
     * @operationId PostFileLinksLink
     */
    post: {
      pathParams: {
        link: string
      }
      body?: unknown
      res: Schemas.file_link
    }

  }

  '/v1/files': {

    /**
     * @description <p>Returns a list of the files that your account has access to. Stripe sorts and returns the files by their creation dates, placing the most recently created files at the top.</p>
     * @summary List all files
     * @operationId GetFiles
     */
    get: {
      queryParams?: {
        /**
         * @description Only return files that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Filter queries by the file purpose. If you don't provide a purpose, the queries return unfiltered files.
         */
        purpose?: ('account_requirement' | 'additional_verification' | 'business_icon' | 'business_logo' | 'customer_signature' | 'dispute_evidence' | 'document_provider_identity_document' | 'finance_report_run' | 'financial_account_statement' | 'identity_document' | 'identity_document_downloadable' | 'issuing_regulatory_reporting' | 'pci_document' | 'selfie' | 'sigma_scheduled_query' | 'tax_document_user_upload' | 'terminal_android_apk' | 'terminal_reader_splashscreen')
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.file[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>To upload a file to Stripe, you need to send a request of type <code>multipart/form-data</code>. Include the file you want to upload in the request, and the parameters for creating a file.</p>
     * 
     * <p>All of Stripe’s officially supported Client libraries support sending <code>multipart/form-data</code>.</p>
     * @summary Create a file
     * @operationId PostFiles
     */
    post: {
      body: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A file to upload. Make sure that the specifications follow RFC 2388, which defines file transfers for the `multipart/form-data` protocol.
         */
        file: string
        /**
         * @title file_link_creation_params
         * @description Optional parameters that automatically create a [file link](https://stripe.com/docs/api#file_links) for the newly created file.
         */
        file_link_data?: {
          create: boolean
          expires_at?: number
          metadata?: (Record<string, string> | '')
        }
        /**
         * @description The [purpose](https://stripe.com/docs/file-upload#uploading-a-file) of the uploaded file.
         */
        purpose: ('account_requirement' | 'additional_verification' | 'business_icon' | 'business_logo' | 'customer_signature' | 'dispute_evidence' | 'identity_document' | 'issuing_regulatory_reporting' | 'pci_document' | 'tax_document_user_upload' | 'terminal_android_apk' | 'terminal_reader_splashscreen')
      }
      res: Schemas.file
    }

  }

  '/v1/files/{file}': {

    /**
     * @description <p>Retrieves the details of an existing file object. After you supply a unique file ID, Stripe returns the corresponding file object. Learn how to <a href="/docs/file-upload#download-file-contents">access file contents</a>.</p>
     * @summary Retrieve a file
     * @operationId GetFilesFile
     */
    get: {
      pathParams: {
        file: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.file
    }

  }

  '/v1/financial_connections/accounts': {

    /**
     * @description <p>Returns a list of Financial Connections <code>Account</code> objects.</p>
     * @summary List Accounts
     * @operationId GetFinancialConnectionsAccounts
     */
    get: {
      queryParams?: {
        /**
         * @description If present, only return accounts that belong to the specified account holder. `account_holder[customer]` and `account_holder[account]` are mutually exclusive.
         */
        account_holder?: {
          account?: string
          customer?: string
        }
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description If present, only return accounts that were collected as part of the given session.
         */
        session?: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.financial_connectionsaccount[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/financial_connections/accounts/{account}': {

    /**
     * @description <p>Retrieves the details of an Financial Connections <code>Account</code>.</p>
     * @summary Retrieve an Account
     * @operationId GetFinancialConnectionsAccountsAccount
     */
    get: {
      pathParams: {
        account: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.financial_connectionsaccount
    }

  }

  '/v1/financial_connections/accounts/{account}/disconnect': {

    /**
     * @description <p>Disables your access to a Financial Connections <code>Account</code>. You will no longer be able to access data associated with the account (e.g. balances, transactions).</p>
     * @summary Disconnect an Account
     * @operationId PostFinancialConnectionsAccountsAccountDisconnect
     */
    post: {
      pathParams: {
        account: string
      }
      body?: unknown
      res: Schemas.financial_connectionsaccount
    }

  }

  '/v1/financial_connections/accounts/{account}/owners': {

    /**
     * @description <p>Lists all owners for a given <code>Account</code></p>
     * @summary List Account Owners
     * @operationId GetFinancialConnectionsAccountsAccountOwners
     */
    get: {
      pathParams: {
        account: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description The ID of the ownership object to fetch owners from.
         */
        ownership: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.financial_connectionsaccount_owner[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/financial_connections/accounts/{account}/refresh': {

    /**
     * @description <p>Refreshes the data associated with a Financial Connections <code>Account</code>.</p>
     * @summary Refresh Account data
     * @operationId PostFinancialConnectionsAccountsAccountRefresh
     */
    post: {
      pathParams: {
        account: string
      }
      body: unknown
      res: Schemas.financial_connectionsaccount
    }

  }

  '/v1/financial_connections/accounts/{account}/subscribe': {

    /**
     * @description <p>Subscribes to periodic refreshes of data associated with a Financial Connections <code>Account</code>.</p>
     * @summary Subscribe to data refreshes for an Account
     * @operationId PostFinancialConnectionsAccountsAccountSubscribe
     */
    post: {
      pathParams: {
        account: string
      }
      body: unknown
      res: Schemas.financial_connectionsaccount
    }

  }

  '/v1/financial_connections/accounts/{account}/unsubscribe': {

    /**
     * @description <p>Unsubscribes from periodic refreshes of data associated with a Financial Connections <code>Account</code>.</p>
     * @summary Unsubscribe from data refreshes for an Account
     * @operationId PostFinancialConnectionsAccountsAccountUnsubscribe
     */
    post: {
      pathParams: {
        account: string
      }
      body: unknown
      res: Schemas.financial_connectionsaccount
    }

  }

  '/v1/financial_connections/sessions': {

    /**
     * @description <p>To launch the Financial Connections authorization flow, create a <code>Session</code>. The session’s <code>client_secret</code> can be used to launch the flow using Stripe.js.</p>
     * @summary Create a Session
     * @operationId PostFinancialConnectionsSessions
     */
    post: {
      body: unknown
      res: Schemas.financial_connectionssession
    }

  }

  '/v1/financial_connections/sessions/{session}': {

    /**
     * @description <p>Retrieves the details of a Financial Connections <code>Session</code></p>
     * @summary Retrieve a Session
     * @operationId GetFinancialConnectionsSessionsSession
     */
    get: {
      pathParams: {
        session: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.financial_connectionssession
    }

  }

  '/v1/financial_connections/transactions': {

    /**
     * @description <p>Returns a list of Financial Connections <code>Transaction</code> objects.</p>
     * @summary List Transactions
     * @operationId GetFinancialConnectionsTransactions
     */
    get: {
      queryParams?: {
        /**
         * @description The ID of the Financial Connections Account whose transactions will be retrieved.
         */
        account: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description A filter on the list based on the object `transacted_at` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options:
         */
        transacted_at?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A filter on the list based on the object `transaction_refresh` field. The value can be a dictionary with the following options:
         */
        transaction_refresh?: {
          after: string
        }
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.financial_connectionstransaction[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/financial_connections/transactions/{transaction}': {

    /**
     * @description <p>Retrieves the details of a Financial Connections <code>Transaction</code></p>
     * @summary Retrieve a Transaction
     * @operationId GetFinancialConnectionsTransactionsTransaction
     */
    get: {
      pathParams: {
        transaction: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.financial_connectionstransaction
    }

  }

  '/v1/forwarding/requests': {

    /**
     * @description <p>Lists all ForwardingRequest objects.</p>
     * @summary List all ForwardingRequests
     * @operationId GetForwardingRequests
     */
    get: {
      queryParams?: {
        /**
         * @description Similar to other List endpoints, filters results based on created timestamp. You can pass gt, gte, lt, and lte timestamp values.
         */
        created?: {
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        }
        /**
         * @description A pagination cursor to fetch the previous page of the list. The value must be a ForwardingRequest ID.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A pagination cursor to fetch the next page of the list. The value must be a ForwardingRequest ID.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.forwardingrequest[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a ForwardingRequest object.</p>
     * @summary Create a ForwardingRequest
     * @operationId PostForwardingRequests
     */
    post: {
      body: unknown
      res: Schemas.forwardingrequest
    }

  }

  '/v1/forwarding/requests/{id}': {

    /**
     * @description <p>Retrieves a ForwardingRequest object.</p>
     * @summary Retrieve a ForwardingRequest
     * @operationId GetForwardingRequestsId
     */
    get: {
      pathParams: {
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.forwardingrequest
    }

  }

  '/v1/identity/verification_reports': {

    /**
     * @description <p>List all verification reports.</p>
     * @summary List VerificationReports
     * @operationId GetIdentityVerificationReports
     */
    get: {
      queryParams?: {
        /**
         * @description A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
         */
        client_reference_id?: string
        /**
         * @description Only return VerificationReports that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return VerificationReports of this type
         */
        type?: ('document' | 'id_number')
        /**
         * @description Only return VerificationReports created by this VerificationSession ID. It is allowed to provide a VerificationIntent ID.
         */
        verification_session?: string
      }
      body?: unknown
      res: {
        data: Schemas.identityverification_report[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/identity/verification_reports/{report}': {

    /**
     * @description <p>Retrieves an existing VerificationReport</p>
     * @summary Retrieve a VerificationReport
     * @operationId GetIdentityVerificationReportsReport
     */
    get: {
      pathParams: {
        report: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.identityverification_report
    }

  }

  '/v1/identity/verification_sessions': {

    /**
     * @description <p>Returns a list of VerificationSessions</p>
     * @summary List VerificationSessions
     * @operationId GetIdentityVerificationSessions
     */
    get: {
      queryParams?: {
        /**
         * @description A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
         */
        client_reference_id?: string
        /**
         * @description Only return VerificationSessions that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        related_customer?: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return VerificationSessions with this status. [Learn more about the lifecycle of sessions](https://stripe.com/docs/identity/how-sessions-work).
         */
        status?: ('canceled' | 'processing' | 'requires_input' | 'verified')
      }
      body?: unknown
      res: {
        data: Schemas.identityverification_session[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a VerificationSession object.</p>
     * 
     * <p>After the VerificationSession is created, display a verification modal using the session <code>client_secret</code> or send your users to the session’s <code>url</code>.</p>
     * 
     * <p>If your API key is in test mode, verification checks won’t actually process, though everything else will occur as if in live mode.</p>
     * 
     * <p>Related guide: <a href="/docs/identity/verify-identity-documents">Verify your users’ identity documents</a></p>
     * @summary Create a VerificationSession
     * @operationId PostIdentityVerificationSessions
     */
    post: {
      body?: unknown
      res: Schemas.identityverification_session
    }

  }

  '/v1/identity/verification_sessions/{session}': {

    /**
     * @description <p>Retrieves the details of a VerificationSession that was previously created.</p>
     * 
     * <p>When the session status is <code>requires_input</code>, you can use this method to retrieve a valid
     * <code>client_secret</code> or <code>url</code> to allow re-submission.</p>
     * @summary Retrieve a VerificationSession
     * @operationId GetIdentityVerificationSessionsSession
     */
    get: {
      pathParams: {
        session: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.identityverification_session
    }

    /**
     * @description <p>Updates a VerificationSession object.</p>
     * 
     * <p>When the session status is <code>requires_input</code>, you can use this method to update the
     * verification check and options.</p>
     * @summary Update a VerificationSession
     * @operationId PostIdentityVerificationSessionsSession
     */
    post: {
      pathParams: {
        session: string
      }
      body?: unknown
      res: Schemas.identityverification_session
    }

  }

  '/v1/identity/verification_sessions/{session}/cancel': {

    /**
     * @description <p>A VerificationSession object can be canceled when it is in <code>requires_input</code> <a href="/docs/identity/how-sessions-work">status</a>.</p>
     * 
     * <p>Once canceled, future submission attempts are disabled. This cannot be undone. <a href="/docs/identity/verification-sessions#cancel">Learn more</a>.</p>
     * @summary Cancel a VerificationSession
     * @operationId PostIdentityVerificationSessionsSessionCancel
     */
    post: {
      pathParams: {
        session: string
      }
      body?: unknown
      res: Schemas.identityverification_session
    }

  }

  '/v1/identity/verification_sessions/{session}/redact': {

    /**
     * @description <p>Redact a VerificationSession to remove all collected information from Stripe. This will redact
     * the VerificationSession and all objects related to it, including VerificationReports, Events,
     * request logs, etc.</p>
     * 
     * <p>A VerificationSession object can be redacted when it is in <code>requires_input</code> or <code>verified</code>
     * <a href="/docs/identity/how-sessions-work">status</a>. Redacting a VerificationSession in <code>requires_action</code>
     * state will automatically cancel it.</p>
     * 
     * <p>The redaction process may take up to four days. When the redaction process is in progress, the
     * VerificationSession’s <code>redaction.status</code> field will be set to <code>processing</code>; when the process is
     * finished, it will change to <code>redacted</code> and an <code>identity.verification_session.redacted</code> event
     * will be emitted.</p>
     * 
     * <p>Redaction is irreversible. Redacted objects are still accessible in the Stripe API, but all the
     * fields that contain personal data will be replaced by the string <code>[redacted]</code> or a similar
     * placeholder. The <code>metadata</code> field will also be erased. Redacted objects cannot be updated or
     * used for any purpose.</p>
     * 
     * <p><a href="/docs/identity/verification-sessions#redact">Learn more</a>.</p>
     * @summary Redact a VerificationSession
     * @operationId PostIdentityVerificationSessionsSessionRedact
     */
    post: {
      pathParams: {
        session: string
      }
      body?: unknown
      res: Schemas.identityverification_session
    }

  }

  '/v1/invoice_payments': {

    /**
     * @description <p>When retrieving an invoice, there is an includable payments property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of payments.</p>
     * @summary List all payments for an invoice
     * @operationId GetInvoicePayments
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description The identifier of the invoice whose payments to return.
         */
        invoice?: string
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description The payment details of the invoice payments to return.
         */
        payment?: {
          payment_intent?: string
          type: 'payment_intent'
        }
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description The status of the invoice payments to return.
         */
        status?: ('canceled' | 'open' | 'paid')
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.invoice_payment[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/invoice_payments/{invoice_payment}': {

    /**
     * @description <p>Retrieves the invoice payment with the given ID.</p>
     * @summary Retrieve an InvoicePayment
     * @operationId GetInvoicePaymentsInvoicePayment
     */
    get: {
      pathParams: {
        invoice_payment: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.invoice_payment
    }

  }

  '/v1/invoice_rendering_templates': {

    /**
     * @description <p>List all templates, ordered by creation date, with the most recently created template appearing first.</p>
     * @summary List all invoice rendering templates
     * @operationId GetInvoiceRenderingTemplates
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        status?: ('active' | 'archived')
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.invoice_rendering_template[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/invoice_rendering_templates/{template}': {

    /**
     * @description <p>Retrieves an invoice rendering template with the given ID. It by default returns the latest version of the template. Optionally, specify a version to see previous versions.</p>
     * @summary Retrieve an invoice rendering template
     * @operationId GetInvoiceRenderingTemplatesTemplate
     */
    get: {
      pathParams: {
        template: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        version?: number
      }
      body?: unknown
      res: Schemas.invoice_rendering_template
    }

  }

  '/v1/invoice_rendering_templates/{template}/archive': {

    /**
     * @description <p>Updates the status of an invoice rendering template to ‘archived’ so no new Stripe objects (customers, invoices, etc.) can reference it. The template can also no longer be updated. However, if the template is already set on a Stripe object, it will continue to be applied on invoices generated by it.</p>
     * @summary Archive an invoice rendering template
     * @operationId PostInvoiceRenderingTemplatesTemplateArchive
     */
    post: {
      pathParams: {
        template: string
      }
      body?: unknown
      res: Schemas.invoice_rendering_template
    }

  }

  '/v1/invoice_rendering_templates/{template}/unarchive': {

    /**
     * @description <p>Unarchive an invoice rendering template so it can be used on new Stripe objects again.</p>
     * @summary Unarchive an invoice rendering template
     * @operationId PostInvoiceRenderingTemplatesTemplateUnarchive
     */
    post: {
      pathParams: {
        template: string
      }
      body?: unknown
      res: Schemas.invoice_rendering_template
    }

  }

  '/v1/invoiceitems': {

    /**
     * @description <p>Returns a list of your invoice items. Invoice items are returned sorted by creation date, with the most recently created invoice items appearing first.</p>
     * @summary List all invoice items
     * @operationId GetInvoiceitems
     */
    get: {
      queryParams?: {
        /**
         * @description Only return invoice items that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description The identifier of the customer whose invoice items to return. If none is provided, all invoice items will be returned.
         */
        customer?: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description Only return invoice items belonging to this invoice. If none is provided, all invoice items will be returned. If specifying an invoice, no customer identifier is needed.
         */
        invoice?: string
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Set to `true` to only show pending invoice items, which are not yet attached to any invoices. Set to `false` to only show invoice items already attached to invoices. If unspecified, no filter is applied.
         */
        pending?: boolean
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.invoiceitem[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates an item to be added to a draft invoice (up to 250 items per invoice). If no invoice is specified, the item will be on the next invoice created for the customer specified.</p>
     * @summary Create an invoice item
     * @operationId PostInvoiceitems
     */
    post: {
      body: unknown
      res: Schemas.invoiceitem
    }

  }

  '/v1/invoiceitems/{invoiceitem}': {

    /**
     * @description <p>Deletes an invoice item, removing it from an invoice. Deleting invoice items is only possible when they’re not attached to invoices, or if it’s attached to a draft invoice.</p>
     * @summary Delete an invoice item
     * @operationId DeleteInvoiceitemsInvoiceitem
     */
    delete: {
      pathParams: {
        invoiceitem: string
      }
      body?: unknown
      res: Schemas.deleted_invoiceitem
    }

    /**
     * @description <p>Retrieves the invoice item with the given ID.</p>
     * @summary Retrieve an invoice item
     * @operationId GetInvoiceitemsInvoiceitem
     */
    get: {
      pathParams: {
        invoiceitem: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.invoiceitem
    }

    /**
     * @description <p>Updates the amount or description of an invoice item on an upcoming invoice. Updating an invoice item is only possible before the invoice it’s attached to is closed.</p>
     * @summary Update an invoice item
     * @operationId PostInvoiceitemsInvoiceitem
     */
    post: {
      pathParams: {
        invoiceitem: string
      }
      body?: unknown
      res: Schemas.invoiceitem
    }

  }

  '/v1/invoices': {

    /**
     * @description <p>You can list all invoices, or list the invoices for a specific customer. The invoices are returned sorted by creation date, with the most recently created invoices appearing first.</p>
     * @summary List all invoices
     * @operationId GetInvoices
     */
    get: {
      queryParams?: {
        /**
         * @description The collection method of the invoice to retrieve. Either `charge_automatically` or `send_invoice`.
         */
        collection_method?: ('charge_automatically' | 'send_invoice')
        /**
         * @description Only return invoices that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description Only return invoices for the customer specified by this customer ID.
         */
        customer?: string
        due_date?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. [Learn more](https://stripe.com/docs/billing/invoices/workflow#workflow-overview)
         */
        status?: ('draft' | 'open' | 'paid' | 'uncollectible' | 'void')
        /**
         * @description Only return invoices for the subscription specified by this subscription ID.
         */
        subscription?: string
      }
      body?: unknown
      res: {
        data: Schemas.invoice[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>This endpoint creates a draft invoice for a given customer. The invoice remains a draft until you <a href="#finalize_invoice">finalize</a> the invoice, which allows you to <a href="#pay_invoice">pay</a> or <a href="#send_invoice">send</a> the invoice to your customers.</p>
     * @summary Create an invoice
     * @operationId PostInvoices
     */
    post: {
      body?: unknown
      res: Schemas.invoice
    }

  }

  '/v1/invoices/create_preview': {

    /**
     * @description <p>At any time, you can preview the upcoming invoice for a subscription or subscription schedule. This will show you all the charges that are pending, including subscription renewal charges, invoice item charges, etc. It will also show you any discounts that are applicable to the invoice.</p>
     * 
     * <p>You can also preview the effects of creating or updating a subscription or subscription schedule, including a preview of any prorations that will take place. To ensure that the actual proration is calculated exactly the same as the previewed proration, you should pass the <code>subscription_details.proration_date</code> parameter when doing the actual subscription update.</p>
     * 
     * <p>The recommended way to get only the prorations being previewed on the invoice is to consider line items where <code>parent.subscription_item_details.proration</code> is <code>true</code>.</p>
     * 
     * <p>Note that when you are viewing an upcoming invoice, you are simply viewing a preview – the invoice has not yet been created. As such, the upcoming invoice will not show up in invoice listing calls, and you cannot use the API to pay or edit the invoice. If you want to change the amount that your customer will be billed, you can add, remove, or update pending invoice items, or update the customer’s discount.</p>
     * 
     * <p>Note: Currency conversion calculations use the latest exchange rates. Exchange rates may vary between the time of the preview and the time of the actual invoice creation. <a href="https://docs.stripe.com/currencies/conversions">Learn more</a></p>
     * @summary Create a preview invoice
     * @operationId PostInvoicesCreatePreview
     */
    post: {
      body?: unknown
      res: Schemas.invoice
    }

  }

  '/v1/invoices/search': {

    /**
     * @description <p>Search for invoices you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
     * Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
     * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
     * to an hour behind during outages. Search functionality is not available to merchants in India.</p>
     * @summary Search invoices
     * @operationId GetInvoicesSearch
     */
    get: {
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
         */
        page?: string
        /**
         * @description The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for invoices](https://stripe.com/docs/search#query-fields-for-invoices).
         */
        query: string
      }
      body?: unknown
      res: {
        data: Schemas.invoice[]
        has_more: boolean
        next_page?: string | null
        /**
         * @description String representing the object's type. Objects of the same type share the same value.
         */
        object: 'search_result'
        /**
         * @description The total number of objects that match the query, only accurate up to 10,000.
         */
        total_count?: number
        url: string
      }
    }

  }

  '/v1/invoices/{invoice}': {

    /**
     * @description <p>Permanently deletes a one-off invoice draft. This cannot be undone. Attempts to delete invoices that are no longer in a draft state will fail; once an invoice has been finalized or if an invoice is for a subscription, it must be <a href="#void_invoice">voided</a>.</p>
     * @summary Delete a draft invoice
     * @operationId DeleteInvoicesInvoice
     */
    delete: {
      pathParams: {
        invoice: string
      }
      body?: unknown
      res: Schemas.deleted_invoice
    }

    /**
     * @description <p>Retrieves the invoice with the given ID.</p>
     * @summary Retrieve an invoice
     * @operationId GetInvoicesInvoice
     */
    get: {
      pathParams: {
        invoice: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.invoice
    }

    /**
     * @description <p>Draft invoices are fully editable. Once an invoice is <a href="/docs/billing/invoices/workflow#finalized">finalized</a>,
     * monetary values, as well as <code>collection_method</code>, become uneditable.</p>
     * 
     * <p>If you would like to stop the Stripe Billing engine from automatically finalizing, reattempting payments on,
     * sending reminders for, or <a href="/docs/billing/invoices/reconciliation">automatically reconciling</a> invoices, pass
     * <code>auto_advance=false</code>.</p>
     * @summary Update an invoice
     * @operationId PostInvoicesInvoice
     */
    post: {
      pathParams: {
        invoice: string
      }
      body?: unknown
      res: Schemas.invoice
    }

  }

  '/v1/invoices/{invoice}/add_lines': {

    /**
     * @description <p>Adds multiple line items to an invoice. This is only possible when an invoice is still a draft.</p>
     * @summary Bulk add invoice line items
     * @operationId PostInvoicesInvoiceAddLines
     */
    post: {
      pathParams: {
        invoice: string
      }
      body: unknown
      res: Schemas.invoice
    }

  }

  '/v1/invoices/{invoice}/attach_payment': {

    /**
     * @description <p>Attaches a PaymentIntent or an Out of Band Payment to the invoice, adding it to the list of <code>payments</code>.</p>
     * 
     * <p>For the PaymentIntent, when the PaymentIntent’s status changes to <code>succeeded</code>, the payment is credited
     * to the invoice, increasing its <code>amount_paid</code>. When the invoice is fully paid, the
     * invoice’s status becomes <code>paid</code>.</p>
     * 
     * <p>If the PaymentIntent’s status is already <code>succeeded</code> when it’s attached, it’s
     * credited to the invoice immediately.</p>
     * 
     * <p>See: <a href="/docs/invoicing/partial-payments">Partial payments</a> to learn more.</p>
     * @summary Attach a payment to an Invoice
     * @operationId PostInvoicesInvoiceAttachPayment
     */
    post: {
      pathParams: {
        invoice: string
      }
      body?: unknown
      res: Schemas.invoice
    }

  }

  '/v1/invoices/{invoice}/finalize': {

    /**
     * @description <p>Stripe automatically finalizes drafts before sending and attempting payment on invoices. However, if you’d like to finalize a draft invoice manually, you can do so using this method.</p>
     * @summary Finalize an invoice
     * @operationId PostInvoicesInvoiceFinalize
     */
    post: {
      pathParams: {
        invoice: string
      }
      body?: unknown
      res: Schemas.invoice
    }

  }

  '/v1/invoices/{invoice}/lines': {

    /**
     * @description <p>When retrieving an invoice, you’ll get a <strong>lines</strong> property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
     * @summary Retrieve an invoice's line items
     * @operationId GetInvoicesInvoiceLines
     */
    get: {
      pathParams: {
        invoice: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.line_item[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/invoices/{invoice}/lines/{line_item_id}': {

    /**
     * @description <p>Updates an invoice’s line item. Some fields, such as <code>tax_amounts</code>, only live on the invoice line item,
     * so they can only be updated through this endpoint. Other fields, such as <code>amount</code>, live on both the invoice
     * item and the invoice line item, so updates on this endpoint will propagate to the invoice item as well.
     * Updating an invoice’s line item is only possible before the invoice is finalized.</p>
     * @summary Update an invoice's line item
     * @operationId PostInvoicesInvoiceLinesLineItemId
     */
    post: {
      pathParams: {
        /**
         * @description Invoice ID of line item
         */
        invoice: string
        /**
         * @description Invoice line item ID
         */
        line_item_id: string
      }
      body?: unknown
      res: Schemas.line_item
    }

  }

  '/v1/invoices/{invoice}/mark_uncollectible': {

    /**
     * @description <p>Marking an invoice as uncollectible is useful for keeping track of bad debts that can be written off for accounting purposes.</p>
     * @summary Mark an invoice as uncollectible
     * @operationId PostInvoicesInvoiceMarkUncollectible
     */
    post: {
      pathParams: {
        invoice: string
      }
      body?: unknown
      res: Schemas.invoice
    }

  }

  '/v1/invoices/{invoice}/pay': {

    /**
     * @description <p>Stripe automatically creates and then attempts to collect payment on invoices for customers on subscriptions according to your <a href="https://dashboard.stripe.com/account/billing/automatic">subscriptions settings</a>. However, if you’d like to attempt payment on an invoice out of the normal collection schedule or for some other reason, you can do so.</p>
     * @summary Pay an invoice
     * @operationId PostInvoicesInvoicePay
     */
    post: {
      pathParams: {
        invoice: string
      }
      body?: unknown
      res: Schemas.invoice
    }

  }

  '/v1/invoices/{invoice}/remove_lines': {

    /**
     * @description <p>Removes multiple line items from an invoice. This is only possible when an invoice is still a draft.</p>
     * @summary Bulk remove invoice line items
     * @operationId PostInvoicesInvoiceRemoveLines
     */
    post: {
      pathParams: {
        invoice: string
      }
      body: unknown
      res: Schemas.invoice
    }

  }

  '/v1/invoices/{invoice}/send': {

    /**
     * @description <p>Stripe will automatically send invoices to customers according to your <a href="https://dashboard.stripe.com/account/billing/automatic">subscriptions settings</a>. However, if you’d like to manually send an invoice to your customer out of the normal schedule, you can do so. When sending invoices that have already been paid, there will be no reference to the payment in the email.</p>
     * 
     * <p>Requests made in test-mode result in no emails being sent, despite sending an <code>invoice.sent</code> event.</p>
     * @summary Send an invoice for manual payment
     * @operationId PostInvoicesInvoiceSend
     */
    post: {
      pathParams: {
        invoice: string
      }
      body?: unknown
      res: Schemas.invoice
    }

  }

  '/v1/invoices/{invoice}/update_lines': {

    /**
     * @description <p>Updates multiple line items on an invoice. This is only possible when an invoice is still a draft.</p>
     * @summary Bulk update invoice line items
     * @operationId PostInvoicesInvoiceUpdateLines
     */
    post: {
      pathParams: {
        invoice: string
      }
      body: unknown
      res: Schemas.invoice
    }

  }

  '/v1/invoices/{invoice}/void': {

    /**
     * @description <p>Mark a finalized invoice as void. This cannot be undone. Voiding an invoice is similar to <a href="#delete_invoice">deletion</a>, however it only applies to finalized invoices and maintains a papertrail where the invoice can still be found.</p>
     * 
     * <p>Consult with local regulations to determine whether and how an invoice might be amended, canceled, or voided in the jurisdiction you’re doing business in. You might need to <a href="#create_invoice">issue another invoice</a> or <a href="#create_credit_note">credit note</a> instead. Stripe recommends that you consult with your legal counsel for advice specific to your business.</p>
     * @summary Void an invoice
     * @operationId PostInvoicesInvoiceVoid
     */
    post: {
      pathParams: {
        invoice: string
      }
      body?: unknown
      res: Schemas.invoice
    }

  }

  '/v1/issuing/authorizations': {

    /**
     * @description <p>Returns a list of Issuing <code>Authorization</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
     * @summary List all authorizations
     * @operationId GetIssuingAuthorizations
     */
    get: {
      queryParams?: {
        /**
         * @description Only return authorizations that belong to the given card.
         */
        card?: string
        /**
         * @description Only return authorizations that belong to the given cardholder.
         */
        cardholder?: string
        /**
         * @description Only return authorizations that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return authorizations with the given status. One of `pending`, `closed`, or `reversed`.
         */
        status?: ('closed' | 'expired' | 'pending' | 'reversed')
      }
      body?: unknown
      res: {
        data: Schemas.issuingauthorization[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/issuing/authorizations/{authorization}': {

    /**
     * @description <p>Retrieves an Issuing <code>Authorization</code> object.</p>
     * @summary Retrieve an authorization
     * @operationId GetIssuingAuthorizationsAuthorization
     */
    get: {
      pathParams: {
        authorization: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.issuingauthorization
    }

    /**
     * @description <p>Updates the specified Issuing <code>Authorization</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
     * @summary Update an authorization
     * @operationId PostIssuingAuthorizationsAuthorization
     */
    post: {
      pathParams: {
        authorization: string
      }
      body?: unknown
      res: Schemas.issuingauthorization
    }

  }

  '/v1/issuing/authorizations/{authorization}/approve': {

    /**
     * @description <p>[Deprecated] Approves a pending Issuing <code>Authorization</code> object. This request should be made within the timeout window of the <a href="/docs/issuing/controls/real-time-authorizations">real-time authorization</a> flow. 
     * This method is deprecated. Instead, <a href="/docs/issuing/controls/real-time-authorizations#authorization-handling">respond directly to the webhook request to approve an authorization</a>.</p>
     * @summary Approve an authorization
     * @operationId PostIssuingAuthorizationsAuthorizationApprove
     */
    post: {
      pathParams: {
        authorization: string
      }
      body?: unknown
      res: Schemas.issuingauthorization
    }

  }

  '/v1/issuing/authorizations/{authorization}/decline': {

    /**
     * @description <p>[Deprecated] Declines a pending Issuing <code>Authorization</code> object. This request should be made within the timeout window of the <a href="/docs/issuing/controls/real-time-authorizations">real time authorization</a> flow.
     * This method is deprecated. Instead, <a href="/docs/issuing/controls/real-time-authorizations#authorization-handling">respond directly to the webhook request to decline an authorization</a>.</p>
     * @summary Decline an authorization
     * @operationId PostIssuingAuthorizationsAuthorizationDecline
     */
    post: {
      pathParams: {
        authorization: string
      }
      body?: unknown
      res: Schemas.issuingauthorization
    }

  }

  '/v1/issuing/cardholders': {

    /**
     * @description <p>Returns a list of Issuing <code>Cardholder</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
     * @summary List all cardholders
     * @operationId GetIssuingCardholders
     */
    get: {
      queryParams?: {
        /**
         * @description Only return cardholders that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description Only return cardholders that have the given email address.
         */
        email?: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Only return cardholders that have the given phone number.
         */
        phone_number?: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return cardholders that have the given status. One of `active`, `inactive`, or `blocked`.
         */
        status?: ('active' | 'blocked' | 'inactive')
        /**
         * @description Only return cardholders that have the given type. One of `individual` or `company`.
         */
        type?: ('company' | 'individual')
      }
      body?: unknown
      res: {
        data: Schemas.issuingcardholder[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new Issuing <code>Cardholder</code> object that can be issued cards.</p>
     * @summary Create a cardholder
     * @operationId PostIssuingCardholders
     */
    post: {
      body: unknown
      res: Schemas.issuingcardholder
    }

  }

  '/v1/issuing/cardholders/{cardholder}': {

    /**
     * @description <p>Retrieves an Issuing <code>Cardholder</code> object.</p>
     * @summary Retrieve a cardholder
     * @operationId GetIssuingCardholdersCardholder
     */
    get: {
      pathParams: {
        cardholder: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.issuingcardholder
    }

    /**
     * @description <p>Updates the specified Issuing <code>Cardholder</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
     * @summary Update a cardholder
     * @operationId PostIssuingCardholdersCardholder
     */
    post: {
      pathParams: {
        cardholder: string
      }
      body?: unknown
      res: Schemas.issuingcardholder
    }

  }

  '/v1/issuing/cards': {

    /**
     * @description <p>Returns a list of Issuing <code>Card</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
     * @summary List all cards
     * @operationId GetIssuingCards
     */
    get: {
      queryParams?: {
        /**
         * @description Only return cards belonging to the Cardholder with the provided ID.
         */
        cardholder?: string
        /**
         * @description Only return cards that were issued during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Only return cards that have the given expiration month.
         */
        exp_month?: number
        /**
         * @description Only return cards that have the given expiration year.
         */
        exp_year?: number
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description Only return cards that have the given last four digits.
         */
        last4?: string
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        personalization_design?: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return cards that have the given status. One of `active`, `inactive`, or `canceled`.
         */
        status?: ('active' | 'canceled' | 'inactive')
        /**
         * @description Only return cards that have the given type. One of `virtual` or `physical`.
         */
        type?: ('physical' | 'virtual')
      }
      body?: unknown
      res: {
        data: Schemas.issuingcard[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates an Issuing <code>Card</code> object.</p>
     * @summary Create a card
     * @operationId PostIssuingCards
     */
    post: {
      body: unknown
      res: Schemas.issuingcard
    }

  }

  '/v1/issuing/cards/{card}': {

    /**
     * @description <p>Retrieves an Issuing <code>Card</code> object.</p>
     * @summary Retrieve a card
     * @operationId GetIssuingCardsCard
     */
    get: {
      pathParams: {
        card: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.issuingcard
    }

    /**
     * @description <p>Updates the specified Issuing <code>Card</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
     * @summary Update a card
     * @operationId PostIssuingCardsCard
     */
    post: {
      pathParams: {
        card: string
      }
      body?: unknown
      res: Schemas.issuingcard
    }

  }

  '/v1/issuing/disputes': {

    /**
     * @description <p>Returns a list of Issuing <code>Dispute</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
     * @summary List all disputes
     * @operationId GetIssuingDisputes
     */
    get: {
      queryParams?: {
        /**
         * @description Only return Issuing disputes that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Select Issuing disputes with the given status.
         */
        status?: ('expired' | 'lost' | 'submitted' | 'unsubmitted' | 'won')
        /**
         * @description Select the Issuing dispute for the given transaction.
         */
        transaction?: string
      }
      body?: unknown
      res: {
        data: Schemas.issuingdispute[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates an Issuing <code>Dispute</code> object. Individual pieces of evidence within the <code>evidence</code> object are optional at this point. Stripe only validates that required evidence is present during submission. Refer to <a href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute reasons and evidence</a> for more details about evidence requirements.</p>
     * @summary Create a dispute
     * @operationId PostIssuingDisputes
     */
    post: {
      body?: unknown
      res: Schemas.issuingdispute
    }

  }

  '/v1/issuing/disputes/{dispute}': {

    /**
     * @description <p>Retrieves an Issuing <code>Dispute</code> object.</p>
     * @summary Retrieve a dispute
     * @operationId GetIssuingDisputesDispute
     */
    get: {
      pathParams: {
        dispute: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.issuingdispute
    }

    /**
     * @description <p>Updates the specified Issuing <code>Dispute</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Properties on the <code>evidence</code> object can be unset by passing in an empty string.</p>
     * @summary Update a dispute
     * @operationId PostIssuingDisputesDispute
     */
    post: {
      pathParams: {
        dispute: string
      }
      body?: unknown
      res: Schemas.issuingdispute
    }

  }

  '/v1/issuing/disputes/{dispute}/submit': {

    /**
     * @description <p>Submits an Issuing <code>Dispute</code> to the card network. Stripe validates that all evidence fields required for the dispute’s reason are present. For more details, see <a href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute reasons and evidence</a>.</p>
     * @summary Submit a dispute
     * @operationId PostIssuingDisputesDisputeSubmit
     */
    post: {
      pathParams: {
        dispute: string
      }
      body?: unknown
      res: Schemas.issuingdispute
    }

  }

  '/v1/issuing/personalization_designs': {

    /**
     * @description <p>Returns a list of personalization design objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
     * @summary List all personalization designs
     * @operationId GetIssuingPersonalizationDesigns
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Only return personalization designs with the given lookup keys.
         */
        lookup_keys?: string[]
        /**
         * @description Only return personalization designs with the given preferences.
         */
        preferences?: {
          is_default?: boolean
          is_platform_default?: boolean
        }
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return personalization designs with the given status.
         */
        status?: ('active' | 'inactive' | 'rejected' | 'review')
      }
      body?: unknown
      res: {
        data: Schemas.issuingpersonalization_design[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a personalization design object.</p>
     * @summary Create a personalization design
     * @operationId PostIssuingPersonalizationDesigns
     */
    post: {
      body: unknown
      res: Schemas.issuingpersonalization_design
    }

  }

  '/v1/issuing/personalization_designs/{personalization_design}': {

    /**
     * @description <p>Retrieves a personalization design object.</p>
     * @summary Retrieve a personalization design
     * @operationId GetIssuingPersonalizationDesignsPersonalizationDesign
     */
    get: {
      pathParams: {
        personalization_design: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.issuingpersonalization_design
    }

    /**
     * @description <p>Updates a card personalization object.</p>
     * @summary Update a personalization design
     * @operationId PostIssuingPersonalizationDesignsPersonalizationDesign
     */
    post: {
      pathParams: {
        personalization_design: string
      }
      body?: unknown
      res: Schemas.issuingpersonalization_design
    }

  }

  '/v1/issuing/physical_bundles': {

    /**
     * @description <p>Returns a list of physical bundle objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
     * @summary List all physical bundles
     * @operationId GetIssuingPhysicalBundles
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return physical bundles with the given status.
         */
        status?: ('active' | 'inactive' | 'review')
        /**
         * @description Only return physical bundles with the given type.
         */
        type?: ('custom' | 'standard')
      }
      body?: unknown
      res: {
        data: Schemas.issuingphysical_bundle[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/issuing/physical_bundles/{physical_bundle}': {

    /**
     * @description <p>Retrieves a physical bundle object.</p>
     * @summary Retrieve a physical bundle
     * @operationId GetIssuingPhysicalBundlesPhysicalBundle
     */
    get: {
      pathParams: {
        physical_bundle: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.issuingphysical_bundle
    }

  }

  '/v1/issuing/settlements/{settlement}': {

    /**
     * @description <p>Retrieves an Issuing <code>Settlement</code> object.</p>
     * @summary Retrieve a settlement
     * @operationId GetIssuingSettlementsSettlement
     */
    get: {
      pathParams: {
        settlement: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.issuingsettlement
    }

    /**
     * @description <p>Updates the specified Issuing <code>Settlement</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
     * @summary Update a settlement
     * @operationId PostIssuingSettlementsSettlement
     */
    post: {
      pathParams: {
        settlement: string
      }
      body?: unknown
      res: Schemas.issuingsettlement
    }

  }

  '/v1/issuing/tokens': {

    /**
     * @description <p>Lists all Issuing <code>Token</code> objects for a given card.</p>
     * @summary List all issuing tokens for card
     * @operationId GetIssuingTokens
     */
    get: {
      queryParams?: {
        /**
         * @description The Issuing card identifier to list tokens for.
         */
        card: string
        /**
         * @description Only return Issuing tokens that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Select Issuing tokens with the given status.
         */
        status?: ('active' | 'deleted' | 'requested' | 'suspended')
      }
      body?: unknown
      res: {
        data: Schemas.issuingtoken[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/issuing/tokens/{token}': {

    /**
     * @description <p>Retrieves an Issuing <code>Token</code> object.</p>
     * @summary Retrieve an issuing token
     * @operationId GetIssuingTokensToken
     */
    get: {
      pathParams: {
        token: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.issuingtoken
    }

    /**
     * @description <p>Attempts to update the specified Issuing <code>Token</code> object to the status specified.</p>
     * @summary Update a token status
     * @operationId PostIssuingTokensToken
     */
    post: {
      pathParams: {
        token: string
      }
      body: unknown
      res: Schemas.issuingtoken
    }

  }

  '/v1/issuing/transactions': {

    /**
     * @description <p>Returns a list of Issuing <code>Transaction</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
     * @summary List all transactions
     * @operationId GetIssuingTransactions
     */
    get: {
      queryParams?: {
        /**
         * @description Only return transactions that belong to the given card.
         */
        card?: string
        /**
         * @description Only return transactions that belong to the given cardholder.
         */
        cardholder?: string
        /**
         * @description Only return transactions that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return transactions that have the given type. One of `capture` or `refund`.
         */
        type?: ('capture' | 'refund')
      }
      body?: unknown
      res: {
        data: Schemas.issuingtransaction[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/issuing/transactions/{transaction}': {

    /**
     * @description <p>Retrieves an Issuing <code>Transaction</code> object.</p>
     * @summary Retrieve a transaction
     * @operationId GetIssuingTransactionsTransaction
     */
    get: {
      pathParams: {
        transaction: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.issuingtransaction
    }

    /**
     * @description <p>Updates the specified Issuing <code>Transaction</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
     * @summary Update a transaction
     * @operationId PostIssuingTransactionsTransaction
     */
    post: {
      pathParams: {
        transaction: string
      }
      body?: unknown
      res: Schemas.issuingtransaction
    }

  }

  '/v1/link_account_sessions': {

    /**
     * @description <p>To launch the Financial Connections authorization flow, create a <code>Session</code>. The session’s <code>client_secret</code> can be used to launch the flow using Stripe.js.</p>
     * @summary Create a Session
     * @operationId PostLinkAccountSessions
     */
    post: {
      body: unknown
      res: Schemas.financial_connectionssession
    }

  }

  '/v1/link_account_sessions/{session}': {

    /**
     * @description <p>Retrieves the details of a Financial Connections <code>Session</code></p>
     * @summary Retrieve a Session
     * @operationId GetLinkAccountSessionsSession
     */
    get: {
      pathParams: {
        session: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.financial_connectionssession
    }

  }

  '/v1/linked_accounts': {

    /**
     * @description <p>Returns a list of Financial Connections <code>Account</code> objects.</p>
     * @summary List Accounts
     * @operationId GetLinkedAccounts
     */
    get: {
      queryParams?: {
        /**
         * @description If present, only return accounts that belong to the specified account holder. `account_holder[customer]` and `account_holder[account]` are mutually exclusive.
         */
        account_holder?: {
          account?: string
          customer?: string
        }
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description If present, only return accounts that were collected as part of the given session.
         */
        session?: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.financial_connectionsaccount[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/linked_accounts/{account}': {

    /**
     * @description <p>Retrieves the details of an Financial Connections <code>Account</code>.</p>
     * @summary Retrieve an Account
     * @operationId GetLinkedAccountsAccount
     */
    get: {
      pathParams: {
        account: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.financial_connectionsaccount
    }

  }

  '/v1/linked_accounts/{account}/disconnect': {

    /**
     * @description <p>Disables your access to a Financial Connections <code>Account</code>. You will no longer be able to access data associated with the account (e.g. balances, transactions).</p>
     * @summary Disconnect an Account
     * @operationId PostLinkedAccountsAccountDisconnect
     */
    post: {
      pathParams: {
        account: string
      }
      body?: unknown
      res: Schemas.financial_connectionsaccount
    }

  }

  '/v1/linked_accounts/{account}/owners': {

    /**
     * @description <p>Lists all owners for a given <code>Account</code></p>
     * @summary List Account Owners
     * @operationId GetLinkedAccountsAccountOwners
     */
    get: {
      pathParams: {
        account: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description The ID of the ownership object to fetch owners from.
         */
        ownership: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.financial_connectionsaccount_owner[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/linked_accounts/{account}/refresh': {

    /**
     * @description <p>Refreshes the data associated with a Financial Connections <code>Account</code>.</p>
     * @summary Refresh Account data
     * @operationId PostLinkedAccountsAccountRefresh
     */
    post: {
      pathParams: {
        account: string
      }
      body: unknown
      res: Schemas.financial_connectionsaccount
    }

  }

  '/v1/mandates/{mandate}': {

    /**
     * @description <p>Retrieves a Mandate object.</p>
     * @summary Retrieve a Mandate
     * @operationId GetMandatesMandate
     */
    get: {
      pathParams: {
        mandate: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.mandate
    }

  }

  '/v1/payment_intents': {

    /**
     * @description <p>Returns a list of PaymentIntents.</p>
     * @summary List all PaymentIntents
     * @operationId GetPaymentIntents
     */
    get: {
      queryParams?: {
        /**
         * @description A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp or a dictionary with a number of different query options.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description Only return PaymentIntents for the customer that this customer ID specifies.
         */
        customer?: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.payment_intent[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a PaymentIntent object.</p>
     * 
     * <p>After the PaymentIntent is created, attach a payment method and <a href="/docs/api/payment_intents/confirm">confirm</a>
     * to continue the payment. Learn more about <a href="/docs/payments/payment-intents">the available payment flows
     * with the Payment Intents API</a>.</p>
     * 
     * <p>When you use <code>confirm=true</code> during creation, it’s equivalent to creating
     * and confirming the PaymentIntent in the same call. You can use any parameters
     * available in the <a href="/docs/api/payment_intents/confirm">confirm API</a> when you supply
     * <code>confirm=true</code>.</p>
     * @summary Create a PaymentIntent
     * @operationId PostPaymentIntents
     */
    post: {
      body: unknown
      res: Schemas.payment_intent
    }

  }

  '/v1/payment_intents/search': {

    /**
     * @description <p>Search for PaymentIntents you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
     * Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
     * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
     * to an hour behind during outages. Search functionality is not available to merchants in India.</p>
     * @summary Search PaymentIntents
     * @operationId GetPaymentIntentsSearch
     */
    get: {
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
         */
        page?: string
        /**
         * @description The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for payment intents](https://stripe.com/docs/search#query-fields-for-payment-intents).
         */
        query: string
      }
      body?: unknown
      res: {
        data: Schemas.payment_intent[]
        has_more: boolean
        next_page?: string | null
        /**
         * @description String representing the object's type. Objects of the same type share the same value.
         */
        object: 'search_result'
        /**
         * @description The total number of objects that match the query, only accurate up to 10,000.
         */
        total_count?: number
        url: string
      }
    }

  }

  '/v1/payment_intents/{intent}': {

    /**
     * @description <p>Retrieves the details of a PaymentIntent that has previously been created. </p>
     * 
     * <p>You can retrieve a PaymentIntent client-side using a publishable key when the <code>client_secret</code> is in the query string. </p>
     * 
     * <p>If you retrieve a PaymentIntent with a publishable key, it only returns a subset of properties. Refer to the <a href="#payment_intent_object">payment intent</a> object reference for more details.</p>
     * @summary Retrieve a PaymentIntent
     * @operationId GetPaymentIntentsIntent
     */
    get: {
      pathParams: {
        intent: string
      }
      queryParams?: {
        /**
         * @description The client secret of the PaymentIntent. We require it if you use a publishable key to retrieve the source.
         */
        client_secret?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.payment_intent
    }

    /**
     * @description <p>Updates properties on a PaymentIntent object without confirming.</p>
     * 
     * <p>Depending on which properties you update, you might need to confirm the
     * PaymentIntent again. For example, updating the <code>payment_method</code>
     * always requires you to confirm the PaymentIntent again. If you prefer to
     * update and confirm at the same time, we recommend updating properties through
     * the <a href="/docs/api/payment_intents/confirm">confirm API</a> instead.</p>
     * @summary Update a PaymentIntent
     * @operationId PostPaymentIntentsIntent
     */
    post: {
      pathParams: {
        intent: string
      }
      body?: unknown
      res: Schemas.payment_intent
    }

  }

  '/v1/payment_intents/{intent}/apply_customer_balance': {

    /**
     * @description <p>Manually reconcile the remaining amount for a <code>customer_balance</code> PaymentIntent.</p>
     * @summary Reconcile a customer_balance PaymentIntent
     * @operationId PostPaymentIntentsIntentApplyCustomerBalance
     */
    post: {
      pathParams: {
        intent: string
      }
      body?: unknown
      res: Schemas.payment_intent
    }

  }

  '/v1/payment_intents/{intent}/cancel': {

    /**
     * @description <p>You can cancel a PaymentIntent object when it’s in one of these statuses: <code>requires_payment_method</code>, <code>requires_capture</code>, <code>requires_confirmation</code>, <code>requires_action</code> or, <a href="/docs/payments/intents">in rare cases</a>, <code>processing</code>. </p>
     * 
     * <p>After it’s canceled, no additional charges are made by the PaymentIntent and any operations on the PaymentIntent fail with an error. For PaymentIntents with a <code>status</code> of <code>requires_capture</code>, the remaining <code>amount_capturable</code> is automatically refunded. </p>
     * 
     * <p>You can’t cancel the PaymentIntent for a Checkout Session. <a href="/docs/api/checkout/sessions/expire">Expire the Checkout Session</a> instead.</p>
     * @summary Cancel a PaymentIntent
     * @operationId PostPaymentIntentsIntentCancel
     */
    post: {
      pathParams: {
        intent: string
      }
      body?: unknown
      res: Schemas.payment_intent
    }

  }

  '/v1/payment_intents/{intent}/capture': {

    /**
     * @description <p>Capture the funds of an existing uncaptured PaymentIntent when its status is <code>requires_capture</code>.</p>
     * 
     * <p>Uncaptured PaymentIntents are cancelled a set number of days (7 by default) after their creation.</p>
     * 
     * <p>Learn more about <a href="/docs/payments/capture-later">separate authorization and capture</a>.</p>
     * @summary Capture a PaymentIntent
     * @operationId PostPaymentIntentsIntentCapture
     */
    post: {
      pathParams: {
        intent: string
      }
      body?: unknown
      res: Schemas.payment_intent
    }

  }

  '/v1/payment_intents/{intent}/confirm': {

    /**
     * @description <p>Confirm that your customer intends to pay with current or provided
     * payment method. Upon confirmation, the PaymentIntent will attempt to initiate
     * a payment.</p>
     * 
     * <p>If the selected payment method requires additional authentication steps, the
     * PaymentIntent will transition to the <code>requires_action</code> status and
     * suggest additional actions via <code>next_action</code>. If payment fails,
     * the PaymentIntent transitions to the <code>requires_payment_method</code> status or the
     * <code>canceled</code> status if the confirmation limit is reached. If
     * payment succeeds, the PaymentIntent will transition to the <code>succeeded</code>
     * status (or <code>requires_capture</code>, if <code>capture_method</code> is set to <code>manual</code>).</p>
     * 
     * <p>If the <code>confirmation_method</code> is <code>automatic</code>, payment may be attempted
     * using our <a href="/docs/stripe-js/reference#stripe-handle-card-payment">client SDKs</a>
     * and the PaymentIntent’s <a href="#payment_intent_object-client_secret">client_secret</a>.
     * After <code>next_action</code>s are handled by the client, no additional
     * confirmation is required to complete the payment.</p>
     * 
     * <p>If the <code>confirmation_method</code> is <code>manual</code>, all payment attempts must be
     * initiated using a secret key.</p>
     * 
     * <p>If any actions are required for the payment, the PaymentIntent will
     * return to the <code>requires_confirmation</code> state
     * after those actions are completed. Your server needs to then
     * explicitly re-confirm the PaymentIntent to initiate the next payment
     * attempt.</p>
     * 
     * <p>There is a variable upper limit on how many times a PaymentIntent can be confirmed.
     * After this limit is reached, any further calls to this endpoint will
     * transition the PaymentIntent to the <code>canceled</code> state.</p>
     * @summary Confirm a PaymentIntent
     * @operationId PostPaymentIntentsIntentConfirm
     */
    post: {
      pathParams: {
        intent: string
      }
      body?: unknown
      res: Schemas.payment_intent
    }

  }

  '/v1/payment_intents/{intent}/increment_authorization': {

    /**
     * @description <p>Perform an incremental authorization on an eligible
     * <a href="/docs/api/payment_intents/object">PaymentIntent</a>. To be eligible, the
     * PaymentIntent’s status must be <code>requires_capture</code> and
     * <a href="/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported">incremental_authorization_supported</a>
     * must be <code>true</code>.</p>
     * 
     * <p>Incremental authorizations attempt to increase the authorized amount on
     * your customer’s card to the new, higher <code>amount</code> provided. Similar to the
     * initial authorization, incremental authorizations can be declined. A
     * single PaymentIntent can call this endpoint multiple times to further
     * increase the authorized amount.</p>
     * 
     * <p>If the incremental authorization succeeds, the PaymentIntent object
     * returns with the updated
     * <a href="/docs/api/payment_intents/object#payment_intent_object-amount">amount</a>.
     * If the incremental authorization fails, a
     * <a href="/docs/error-codes#card-declined">card_declined</a> error returns, and no other
     * fields on the PaymentIntent or Charge update. The PaymentIntent
     * object remains capturable for the previously authorized amount.</p>
     * 
     * <p>Each PaymentIntent can have a maximum of 10 incremental authorization attempts, including declines.
     * After it’s captured, a PaymentIntent can no longer be incremented.</p>
     * 
     * <p>Learn more about <a href="/docs/terminal/features/incremental-authorizations">incremental authorizations</a>.</p>
     * @summary Increment an authorization
     * @operationId PostPaymentIntentsIntentIncrementAuthorization
     */
    post: {
      pathParams: {
        intent: string
      }
      body: unknown
      res: Schemas.payment_intent
    }

  }

  '/v1/payment_intents/{intent}/verify_microdeposits': {

    /**
     * @description <p>Verifies microdeposits on a PaymentIntent object.</p>
     * @summary Verify microdeposits on a PaymentIntent
     * @operationId PostPaymentIntentsIntentVerifyMicrodeposits
     */
    post: {
      pathParams: {
        intent: string
      }
      body?: unknown
      res: Schemas.payment_intent
    }

  }

  '/v1/payment_links': {

    /**
     * @description <p>Returns a list of your payment links.</p>
     * @summary List all payment links
     * @operationId GetPaymentLinks
     */
    get: {
      queryParams?: {
        /**
         * @description Only return payment links that are active or inactive (e.g., pass `false` to list all inactive payment links).
         */
        active?: boolean
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.payment_link[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a payment link.</p>
     * @summary Create a payment link
     * @operationId PostPaymentLinks
     */
    post: {
      body: unknown
      res: Schemas.payment_link
    }

  }

  '/v1/payment_links/{payment_link}': {

    /**
     * @description <p>Retrieve a payment link.</p>
     * @summary Retrieve payment link
     * @operationId GetPaymentLinksPaymentLink
     */
    get: {
      pathParams: {
        payment_link: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.payment_link
    }

    /**
     * @description <p>Updates a payment link.</p>
     * @summary Update a payment link
     * @operationId PostPaymentLinksPaymentLink
     */
    post: {
      pathParams: {
        payment_link: string
      }
      body?: unknown
      res: Schemas.payment_link
    }

  }

  '/v1/payment_links/{payment_link}/line_items': {

    /**
     * @description <p>When retrieving a payment link, there is an includable <strong>line_items</strong> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
     * @summary Retrieve a payment link's line items
     * @operationId GetPaymentLinksPaymentLinkLineItems
     */
    get: {
      pathParams: {
        payment_link: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.item[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/payment_method_configurations': {

    /**
     * @description <p>List payment method configurations</p>
     * @summary List payment method configurations
     * @operationId GetPaymentMethodConfigurations
     */
    get: {
      queryParams?: {
        /**
         * @description The Connect application to filter by.
         */
        application?: (string | '')
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.payment_method_configuration[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a payment method configuration</p>
     * @summary Create a payment method configuration
     * @operationId PostPaymentMethodConfigurations
     */
    post: {
      body?: unknown
      res: Schemas.payment_method_configuration
    }

  }

  '/v1/payment_method_configurations/{configuration}': {

    /**
     * @description <p>Retrieve payment method configuration</p>
     * @summary Retrieve payment method configuration
     * @operationId GetPaymentMethodConfigurationsConfiguration
     */
    get: {
      pathParams: {
        configuration: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.payment_method_configuration
    }

    /**
     * @description <p>Update payment method configuration</p>
     * @summary Update payment method configuration
     * @operationId PostPaymentMethodConfigurationsConfiguration
     */
    post: {
      pathParams: {
        configuration: string
      }
      body?: unknown
      res: Schemas.payment_method_configuration
    }

  }

  '/v1/payment_method_domains': {

    /**
     * @description <p>Lists the details of existing payment method domains.</p>
     * @summary List payment method domains
     * @operationId GetPaymentMethodDomains
     */
    get: {
      queryParams?: {
        /**
         * @description The domain name that this payment method domain object represents.
         */
        domain_name?: string
        /**
         * @description Whether this payment method domain is enabled. If the domain is not enabled, payment methods will not appear in Elements or Embedded Checkout
         */
        enabled?: boolean
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.payment_method_domain[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a payment method domain.</p>
     * @summary Create a payment method domain
     * @operationId PostPaymentMethodDomains
     */
    post: {
      body: unknown
      res: Schemas.payment_method_domain
    }

  }

  '/v1/payment_method_domains/{payment_method_domain}': {

    /**
     * @description <p>Retrieves the details of an existing payment method domain.</p>
     * @summary Retrieve a payment method domain
     * @operationId GetPaymentMethodDomainsPaymentMethodDomain
     */
    get: {
      pathParams: {
        payment_method_domain: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.payment_method_domain
    }

    /**
     * @description <p>Updates an existing payment method domain.</p>
     * @summary Update a payment method domain
     * @operationId PostPaymentMethodDomainsPaymentMethodDomain
     */
    post: {
      pathParams: {
        payment_method_domain: string
      }
      body?: unknown
      res: Schemas.payment_method_domain
    }

  }

  '/v1/payment_method_domains/{payment_method_domain}/validate': {

    /**
     * @description <p>Some payment methods might require additional steps to register a domain. If the requirements weren’t satisfied when the domain was created, the payment method will be inactive on the domain.
     * The payment method doesn’t appear in Elements or Embedded Checkout for this domain until it is active.</p>
     * 
     * <p>To activate a payment method on an existing payment method domain, complete the required registration steps specific to the payment method, and then validate the payment method domain with this endpoint.</p>
     * 
     * <p>Related guides: <a href="/docs/payments/payment-methods/pmd-registration">Payment method domains</a>.</p>
     * @summary Validate an existing payment method domain
     * @operationId PostPaymentMethodDomainsPaymentMethodDomainValidate
     */
    post: {
      pathParams: {
        payment_method_domain: string
      }
      body?: unknown
      res: Schemas.payment_method_domain
    }

  }

  '/v1/payment_methods': {

    /**
     * @description <p>Returns a list of PaymentMethods for Treasury flows. If you want to list the PaymentMethods attached to a Customer for payments, you should use the <a href="/docs/api/payment_methods/customer_list">List a Customer’s PaymentMethods</a> API instead.</p>
     * @summary List PaymentMethods
     * @operationId GetPaymentMethods
     */
    get: {
      queryParams?: {
        /**
         * @description The ID of the customer whose PaymentMethods will be retrieved.
         */
        customer?: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description An optional filter on the list, based on the object `type` field. Without the filter, the list includes all current and future payment method types. If your integration expects only one type of payment method in the response, make sure to provide a type value in the request.
         */
        type?: ('acss_debit' | 'affirm' | 'afterpay_clearpay' | 'alipay' | 'alma' | 'amazon_pay' | 'au_becs_debit' | 'bacs_debit' | 'bancontact' | 'billie' | 'blik' | 'boleto' | 'card' | 'cashapp' | 'crypto' | 'customer_balance' | 'eps' | 'fpx' | 'giropay' | 'grabpay' | 'ideal' | 'kakao_pay' | 'klarna' | 'konbini' | 'kr_card' | 'link' | 'mobilepay' | 'multibanco' | 'naver_pay' | 'nz_bank_account' | 'oxxo' | 'p24' | 'pay_by_bank' | 'payco' | 'paynow' | 'paypal' | 'pix' | 'promptpay' | 'revolut_pay' | 'samsung_pay' | 'satispay' | 'sepa_debit' | 'sofort' | 'swish' | 'twint' | 'us_bank_account' | 'wechat_pay' | 'zip')
      }
      body?: unknown
      res: {
        data: Schemas.payment_method[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a PaymentMethod object. Read the <a href="/docs/stripe-js/reference#stripe-create-payment-method">Stripe.js reference</a> to learn how to create PaymentMethods via Stripe.js.</p>
     * 
     * <p>Instead of creating a PaymentMethod directly, we recommend using the <a href="/docs/payments/accept-a-payment">PaymentIntents</a> API to accept a payment immediately or the <a href="/docs/payments/save-and-reuse">SetupIntent</a> API to collect payment method details ahead of a future payment.</p>
     * @summary Shares a PaymentMethod
     * @operationId PostPaymentMethods
     */
    post: {
      body?: unknown
      res: Schemas.payment_method
    }

  }

  '/v1/payment_methods/{payment_method}': {

    /**
     * @description <p>Retrieves a PaymentMethod object attached to the StripeAccount. To retrieve a payment method attached to a Customer, you should use <a href="/docs/api/payment_methods/customer">Retrieve a Customer’s PaymentMethods</a></p>
     * @summary Retrieve a PaymentMethod
     * @operationId GetPaymentMethodsPaymentMethod
     */
    get: {
      pathParams: {
        payment_method: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.payment_method
    }

    /**
     * @description <p>Updates a PaymentMethod object. A PaymentMethod must be attached to a customer to be updated.</p>
     * @summary Update a PaymentMethod
     * @operationId PostPaymentMethodsPaymentMethod
     */
    post: {
      pathParams: {
        payment_method: string
      }
      body?: unknown
      res: Schemas.payment_method
    }

  }

  '/v1/payment_methods/{payment_method}/attach': {

    /**
     * @description <p>Attaches a PaymentMethod object to a Customer.</p>
     * 
     * <p>To attach a new PaymentMethod to a customer for future payments, we recommend you use a <a href="/docs/api/setup_intents">SetupIntent</a>
     * or a PaymentIntent with <a href="/docs/api/payment_intents/create#create_payment_intent-setup_future_usage">setup_future_usage</a>.
     * These approaches will perform any necessary steps to set up the PaymentMethod for future payments. Using the <code>/v1/payment_methods/:id/attach</code>
     * endpoint without first using a SetupIntent or PaymentIntent with <code>setup_future_usage</code> does not optimize the PaymentMethod for
     * future use, which makes later declines and payment friction more likely.
     * See <a href="/docs/payments/payment-intents#future-usage">Optimizing cards for future payments</a> for more information about setting up
     * future payments.</p>
     * 
     * <p>To use this PaymentMethod as the default for invoice or subscription payments,
     * set <a href="/docs/api/customers/update#update_customer-invoice_settings-default_payment_method"><code>invoice_settings.default_payment_method</code></a>,
     * on the Customer to the PaymentMethod’s ID.</p>
     * @summary Attach a PaymentMethod to a Customer
     * @operationId PostPaymentMethodsPaymentMethodAttach
     */
    post: {
      pathParams: {
        payment_method: string
      }
      body: unknown
      res: Schemas.payment_method
    }

  }

  '/v1/payment_methods/{payment_method}/detach': {

    /**
     * @description <p>Detaches a PaymentMethod object from a Customer. After a PaymentMethod is detached, it can no longer be used for a payment or re-attached to a Customer.</p>
     * @summary Detach a PaymentMethod from a Customer
     * @operationId PostPaymentMethodsPaymentMethodDetach
     */
    post: {
      pathParams: {
        payment_method: string
      }
      body?: unknown
      res: Schemas.payment_method
    }

  }

  '/v1/payouts': {

    /**
     * @description <p>Returns a list of existing payouts sent to third-party bank accounts or payouts that Stripe sent to you. The payouts return in sorted order, with the most recently created payouts appearing first.</p>
     * @summary List all payouts
     * @operationId GetPayouts
     */
    get: {
      queryParams?: {
        /**
         * @description Only return payouts that are expected to arrive during the given date interval.
         */
        arrival_date?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description Only return payouts that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description The ID of an external account - only return payouts sent to this external account.
         */
        destination?: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return payouts that have the given status: `pending`, `paid`, `failed`, or `canceled`.
         */
        status?: string
      }
      body?: unknown
      res: {
        data: Schemas.payout[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>To send funds to your own bank account, create a new payout object. Your <a href="#balance">Stripe balance</a> must cover the payout amount. If it doesn’t, you receive an “Insufficient Funds” error.</p>
     * 
     * <p>If your API key is in test mode, money won’t actually be sent, though every other action occurs as if you’re in live mode.</p>
     * 
     * <p>If you create a manual payout on a Stripe account that uses multiple payment source types, you need to specify the source type balance that the payout draws from. The <a href="#balance_object">balance object</a> details available and pending amounts by source type.</p>
     * @summary Create a payout
     * @operationId PostPayouts
     */
    post: {
      body: unknown
      res: Schemas.payout
    }

  }

  '/v1/payouts/{payout}': {

    /**
     * @description <p>Retrieves the details of an existing payout. Supply the unique payout ID from either a payout creation request or the payout list. Stripe returns the corresponding payout information.</p>
     * @summary Retrieve a payout
     * @operationId GetPayoutsPayout
     */
    get: {
      pathParams: {
        payout: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.payout
    }

    /**
     * @description <p>Updates the specified payout by setting the values of the parameters you pass. We don’t change parameters that you don’t provide. This request only accepts the metadata as arguments.</p>
     * @summary Update a payout
     * @operationId PostPayoutsPayout
     */
    post: {
      pathParams: {
        payout: string
      }
      body?: unknown
      res: Schemas.payout
    }

  }

  '/v1/payouts/{payout}/cancel': {

    /**
     * @description <p>You can cancel a previously created payout if its status is <code>pending</code>. Stripe refunds the funds to your available balance. You can’t cancel automatic Stripe payouts.</p>
     * @summary Cancel a payout
     * @operationId PostPayoutsPayoutCancel
     */
    post: {
      pathParams: {
        payout: string
      }
      body?: unknown
      res: Schemas.payout
    }

  }

  '/v1/payouts/{payout}/reverse': {

    /**
     * @description <p>Reverses a payout by debiting the destination bank account. At this time, you can only reverse payouts for connected accounts to US bank accounts. If the payout is manual and in the <code>pending</code> status, use <code>/v1/payouts/:id/cancel</code> instead.</p>
     * 
     * <p>By requesting a reversal through <code>/v1/payouts/:id/reverse</code>, you confirm that the authorized signatory of the selected bank account authorizes the debit on the bank account and that no other authorization is required.</p>
     * @summary Reverse a payout
     * @operationId PostPayoutsPayoutReverse
     */
    post: {
      pathParams: {
        payout: string
      }
      body?: unknown
      res: Schemas.payout
    }

  }

  '/v1/plans': {

    /**
     * @description <p>Returns a list of your plans.</p>
     * @summary List all plans
     * @operationId GetPlans
     */
    get: {
      queryParams?: {
        /**
         * @description Only return plans that are active or inactive (e.g., pass `false` to list all inactive plans).
         */
        active?: boolean
        /**
         * @description A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Only return plans for the given product.
         */
        product?: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.plan[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>You can now model subscriptions more flexibly using the <a href="#prices">Prices API</a>. It replaces the Plans API and is backwards compatible to simplify your migration.</p>
     * @summary Create a plan
     * @operationId PostPlans
     */
    post: {
      body: unknown
      res: Schemas.plan
    }

  }

  '/v1/plans/{plan}': {

    /**
     * @description <p>Deleting plans means new subscribers can’t be added. Existing subscribers aren’t affected.</p>
     * @summary Delete a plan
     * @operationId DeletePlansPlan
     */
    delete: {
      pathParams: {
        plan: string
      }
      body?: unknown
      res: Schemas.deleted_plan
    }

    /**
     * @description <p>Retrieves the plan with the given ID.</p>
     * @summary Retrieve a plan
     * @operationId GetPlansPlan
     */
    get: {
      pathParams: {
        plan: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.plan
    }

    /**
     * @description <p>Updates the specified plan by setting the values of the parameters passed. Any parameters not provided are left unchanged. By design, you cannot change a plan’s ID, amount, currency, or billing cycle.</p>
     * @summary Update a plan
     * @operationId PostPlansPlan
     */
    post: {
      pathParams: {
        plan: string
      }
      body?: unknown
      res: Schemas.plan
    }

  }

  '/v1/prices': {

    /**
     * @description <p>Returns a list of your active prices, excluding <a href="/docs/products-prices/pricing-models#inline-pricing">inline prices</a>. For the list of inactive prices, set <code>active</code> to false.</p>
     * @summary List all prices
     * @operationId GetPrices
     */
    get: {
      queryParams?: {
        /**
         * @description Only return prices that are active or inactive (e.g., pass `false` to list all inactive prices).
         */
        active?: boolean
        /**
         * @description A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description Only return prices for the given currency.
         */
        currency?: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Only return the price with these lookup_keys, if any exist. You can specify up to 10 lookup_keys.
         */
        lookup_keys?: string[]
        /**
         * @description Only return prices for the given product.
         */
        product?: string
        /**
         * @description Only return prices with these recurring fields.
         */
        recurring?: {
          interval?: ('day' | 'month' | 'week' | 'year')
          meter?: string
          usage_type?: ('licensed' | 'metered')
        }
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return prices of type `recurring` or `one_time`.
         */
        type?: ('one_time' | 'recurring')
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.price[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new <a href="https://docs.stripe.com/api/prices">Price</a> for an existing <a href="https://docs.stripe.com/api/products">Product</a>. The Price can be recurring or one-time.</p>
     * @summary Create a price
     * @operationId PostPrices
     */
    post: {
      body: unknown
      res: Schemas.price
    }

  }

  '/v1/prices/search': {

    /**
     * @description <p>Search for prices you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
     * Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
     * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
     * to an hour behind during outages. Search functionality is not available to merchants in India.</p>
     * @summary Search prices
     * @operationId GetPricesSearch
     */
    get: {
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
         */
        page?: string
        /**
         * @description The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for prices](https://stripe.com/docs/search#query-fields-for-prices).
         */
        query: string
      }
      body?: unknown
      res: {
        data: Schemas.price[]
        has_more: boolean
        next_page?: string | null
        /**
         * @description String representing the object's type. Objects of the same type share the same value.
         */
        object: 'search_result'
        /**
         * @description The total number of objects that match the query, only accurate up to 10,000.
         */
        total_count?: number
        url: string
      }
    }

  }

  '/v1/prices/{price}': {

    /**
     * @description <p>Retrieves the price with the given ID.</p>
     * @summary Retrieve a price
     * @operationId GetPricesPrice
     */
    get: {
      pathParams: {
        price: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.price
    }

    /**
     * @description <p>Updates the specified price by setting the values of the parameters passed. Any parameters not provided are left unchanged.</p>
     * @summary Update a price
     * @operationId PostPricesPrice
     */
    post: {
      pathParams: {
        price: string
      }
      body?: unknown
      res: Schemas.price
    }

  }

  '/v1/products': {

    /**
     * @description <p>Returns a list of your products. The products are returned sorted by creation date, with the most recently created products appearing first.</p>
     * @summary List all products
     * @operationId GetProducts
     */
    get: {
      queryParams?: {
        /**
         * @description Only return products that are active or inactive (e.g., pass `false` to list all inactive products).
         */
        active?: boolean
        /**
         * @description Only return products that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description Only return products with the given IDs. Cannot be used with [starting_after](https://stripe.com/docs/api#list_products-starting_after) or [ending_before](https://stripe.com/docs/api#list_products-ending_before).
         */
        ids?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Only return products that can be shipped (i.e., physical, not digital products).
         */
        shippable?: boolean
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return products with the given url.
         */
        url?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.product[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new product object.</p>
     * @summary Create a product
     * @operationId PostProducts
     */
    post: {
      body: unknown
      res: Schemas.product
    }

  }

  '/v1/products/search': {

    /**
     * @description <p>Search for products you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
     * Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
     * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
     * to an hour behind during outages. Search functionality is not available to merchants in India.</p>
     * @summary Search products
     * @operationId GetProductsSearch
     */
    get: {
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
         */
        page?: string
        /**
         * @description The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for products](https://stripe.com/docs/search#query-fields-for-products).
         */
        query: string
      }
      body?: unknown
      res: {
        data: Schemas.product[]
        has_more: boolean
        next_page?: string | null
        /**
         * @description String representing the object's type. Objects of the same type share the same value.
         */
        object: 'search_result'
        /**
         * @description The total number of objects that match the query, only accurate up to 10,000.
         */
        total_count?: number
        url: string
      }
    }

  }

  '/v1/products/{id}': {

    /**
     * @description <p>Delete a product. Deleting a product is only possible if it has no prices associated with it. Additionally, deleting a product with <code>type=good</code> is only possible if it has no SKUs associated with it.</p>
     * @summary Delete a product
     * @operationId DeleteProductsId
     */
    delete: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.deleted_product
    }

    /**
     * @description <p>Retrieves the details of an existing product. Supply the unique product ID from either a product creation request or the product list, and Stripe will return the corresponding product information.</p>
     * @summary Retrieve a product
     * @operationId GetProductsId
     */
    get: {
      pathParams: {
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.product
    }

    /**
     * @description <p>Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
     * @summary Update a product
     * @operationId PostProductsId
     */
    post: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.product
    }

  }

  '/v1/products/{product}/features': {

    /**
     * @description <p>Retrieve a list of features for a product</p>
     * @summary List all features attached to a product
     * @operationId GetProductsProductFeatures
     */
    get: {
      pathParams: {
        product: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.product_feature[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a product_feature, which represents a feature attachment to a product</p>
     * @summary Attach a feature to a product
     * @operationId PostProductsProductFeatures
     */
    post: {
      pathParams: {
        product: string
      }
      body: unknown
      res: Schemas.product_feature
    }

  }

  '/v1/products/{product}/features/{id}': {

    /**
     * @description <p>Deletes the feature attachment to a product</p>
     * @summary Remove a feature from a product
     * @operationId DeleteProductsProductFeaturesId
     */
    delete: {
      pathParams: {
        id: string
        product: string
      }
      body?: unknown
      res: Schemas.deleted_product_feature
    }

    /**
     * @description <p>Retrieves a product_feature, which represents a feature attachment to a product</p>
     * @summary Retrieve a product_feature
     * @operationId GetProductsProductFeaturesId
     */
    get: {
      pathParams: {
        /**
         * @description The ID of the product_feature.
         */
        id: string
        /**
         * @description The ID of the product.
         */
        product: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.product_feature
    }

  }

  '/v1/promotion_codes': {

    /**
     * @description <p>Returns a list of your promotion codes.</p>
     * @summary List all promotion codes
     * @operationId GetPromotionCodes
     */
    get: {
      queryParams?: {
        /**
         * @description Filter promotion codes by whether they are active.
         */
        active?: boolean
        /**
         * @description Only return promotion codes that have this case-insensitive code.
         */
        code?: string
        /**
         * @description Only return promotion codes for this coupon.
         */
        coupon?: string
        /**
         * @description A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description Only return promotion codes that are restricted to this customer.
         */
        customer?: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.promotion_code[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>A promotion code points to a coupon. You can optionally restrict the code to a specific customer, redemption limit, and expiration date.</p>
     * @summary Create a promotion code
     * @operationId PostPromotionCodes
     */
    post: {
      body: unknown
      res: Schemas.promotion_code
    }

  }

  '/v1/promotion_codes/{promotion_code}': {

    /**
     * @description <p>Retrieves the promotion code with the given ID. In order to retrieve a promotion code by the customer-facing <code>code</code> use <a href="/docs/api/promotion_codes/list">list</a> with the desired <code>code</code>.</p>
     * @summary Retrieve a promotion code
     * @operationId GetPromotionCodesPromotionCode
     */
    get: {
      pathParams: {
        promotion_code: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.promotion_code
    }

    /**
     * @description <p>Updates the specified promotion code by setting the values of the parameters passed. Most fields are, by design, not editable.</p>
     * @summary Update a promotion code
     * @operationId PostPromotionCodesPromotionCode
     */
    post: {
      pathParams: {
        promotion_code: string
      }
      body?: unknown
      res: Schemas.promotion_code
    }

  }

  '/v1/quotes': {

    /**
     * @description <p>Returns a list of your quotes.</p>
     * @summary List all quotes
     * @operationId GetQuotes
     */
    get: {
      queryParams?: {
        /**
         * @description The ID of the customer whose quotes will be retrieved.
         */
        customer?: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description The status of the quote.
         */
        status?: ('accepted' | 'canceled' | 'draft' | 'open')
        /**
         * @description Provides a list of quotes that are associated with the specified test clock. The response will not include quotes with test clocks if this and the customer parameter is not set.
         */
        test_clock?: string
      }
      body?: unknown
      res: {
        data: Schemas.quote[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>A quote models prices and services for a customer. Default options for <code>header</code>, <code>description</code>, <code>footer</code>, and <code>expires_at</code> can be set in the dashboard via the <a href="https://dashboard.stripe.com/settings/billing/quote">quote template</a>.</p>
     * @summary Create a quote
     * @operationId PostQuotes
     */
    post: {
      body?: unknown
      res: Schemas.quote
    }

  }

  '/v1/quotes/{quote}': {

    /**
     * @description <p>Retrieves the quote with the given ID.</p>
     * @summary Retrieve a quote
     * @operationId GetQuotesQuote
     */
    get: {
      pathParams: {
        quote: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.quote
    }

    /**
     * @description <p>A quote models prices and services for a customer.</p>
     * @summary Update a quote
     * @operationId PostQuotesQuote
     */
    post: {
      pathParams: {
        quote: string
      }
      body?: unknown
      res: Schemas.quote
    }

  }

  '/v1/quotes/{quote}/accept': {

    /**
     * @description <p>Accepts the specified quote.</p>
     * @summary Accept a quote
     * @operationId PostQuotesQuoteAccept
     */
    post: {
      pathParams: {
        quote: string
      }
      body?: unknown
      res: Schemas.quote
    }

  }

  '/v1/quotes/{quote}/cancel': {

    /**
     * @description <p>Cancels the quote.</p>
     * @summary Cancel a quote
     * @operationId PostQuotesQuoteCancel
     */
    post: {
      pathParams: {
        quote: string
      }
      body?: unknown
      res: Schemas.quote
    }

  }

  '/v1/quotes/{quote}/computed_upfront_line_items': {

    /**
     * @description <p>When retrieving a quote, there is an includable <a href="https://stripe.com/docs/api/quotes/object#quote_object-computed-upfront-line_items"><strong>computed.upfront.line_items</strong></a> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of upfront line items.</p>
     * @summary Retrieve a quote's upfront line items
     * @operationId GetQuotesQuoteComputedUpfrontLineItems
     */
    get: {
      pathParams: {
        quote: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.item[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/quotes/{quote}/finalize': {

    /**
     * @description <p>Finalizes the quote.</p>
     * @summary Finalize a quote
     * @operationId PostQuotesQuoteFinalize
     */
    post: {
      pathParams: {
        quote: string
      }
      body?: unknown
      res: Schemas.quote
    }

  }

  '/v1/quotes/{quote}/line_items': {

    /**
     * @description <p>When retrieving a quote, there is an includable <strong>line_items</strong> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
     * @summary Retrieve a quote's line items
     * @operationId GetQuotesQuoteLineItems
     */
    get: {
      pathParams: {
        quote: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.item[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/quotes/{quote}/pdf': {

    /**
     * @description <p>Download the PDF for a finalized quote. Explanation for special handling can be found <a href="https://docs.stripe.com/quotes/overview#quote_pdf">here</a></p>
     * @summary Download quote PDF
     * @operationId GetQuotesQuotePdf
     */
    get: {
      pathParams: {
        quote: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: unknown
    }

  }

  '/v1/radar/early_fraud_warnings': {

    /**
     * @description <p>Returns a list of early fraud warnings.</p>
     * @summary List all early fraud warnings
     * @operationId GetRadarEarlyFraudWarnings
     */
    get: {
      queryParams?: {
        /**
         * @description Only return early fraud warnings for the charge specified by this charge ID.
         */
        charge?: string
        /**
         * @description Only return early fraud warnings that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Only return early fraud warnings for charges that were created by the PaymentIntent specified by this PaymentIntent ID.
         */
        payment_intent?: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.radarearly_fraud_warning[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/radar/early_fraud_warnings/{early_fraud_warning}': {

    /**
     * @description <p>Retrieves the details of an early fraud warning that has previously been created. </p>
     * 
     * <p>Please refer to the <a href="#early_fraud_warning_object">early fraud warning</a> object reference for more details.</p>
     * @summary Retrieve an early fraud warning
     * @operationId GetRadarEarlyFraudWarningsEarlyFraudWarning
     */
    get: {
      pathParams: {
        early_fraud_warning: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.radarearly_fraud_warning
    }

  }

  '/v1/radar/value_list_items': {

    /**
     * @description <p>Returns a list of <code>ValueListItem</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
     * @summary List all value list items
     * @operationId GetRadarValueListItems
     */
    get: {
      queryParams?: {
        /**
         * @description Only return items that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Return items belonging to the parent list whose value matches the specified value (using an "is like" match).
         */
        value?: string
        /**
         * @description Identifier for the parent value list this item belongs to.
         */
        value_list: string
      }
      body?: unknown
      res: {
        data: Schemas.radarvalue_list_item[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new <code>ValueListItem</code> object, which is added to the specified parent value list.</p>
     * @summary Create a value list item
     * @operationId PostRadarValueListItems
     */
    post: {
      body: unknown
      res: Schemas.radarvalue_list_item
    }

  }

  '/v1/radar/value_list_items/{item}': {

    /**
     * @description <p>Deletes a <code>ValueListItem</code> object, removing it from its parent value list.</p>
     * @summary Delete a value list item
     * @operationId DeleteRadarValueListItemsItem
     */
    delete: {
      pathParams: {
        item: string
      }
      body?: unknown
      res: Schemas.deleted_radarvalue_list_item
    }

    /**
     * @description <p>Retrieves a <code>ValueListItem</code> object.</p>
     * @summary Retrieve a value list item
     * @operationId GetRadarValueListItemsItem
     */
    get: {
      pathParams: {
        item: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.radarvalue_list_item
    }

  }

  '/v1/radar/value_lists': {

    /**
     * @description <p>Returns a list of <code>ValueList</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
     * @summary List all value lists
     * @operationId GetRadarValueLists
     */
    get: {
      queryParams?: {
        /**
         * @description The alias used to reference the value list when writing rules.
         */
        alias?: string
        /**
         * @description A value contained within a value list - returns all value lists containing this value.
         */
        contains?: string
        /**
         * @description Only return value lists that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.radarvalue_list[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new <code>ValueList</code> object, which can then be referenced in rules.</p>
     * @summary Create a value list
     * @operationId PostRadarValueLists
     */
    post: {
      body: unknown
      res: Schemas.radarvalue_list
    }

  }

  '/v1/radar/value_lists/{value_list}': {

    /**
     * @description <p>Deletes a <code>ValueList</code> object, also deleting any items contained within the value list. To be deleted, a value list must not be referenced in any rules.</p>
     * @summary Delete a value list
     * @operationId DeleteRadarValueListsValueList
     */
    delete: {
      pathParams: {
        value_list: string
      }
      body?: unknown
      res: Schemas.deleted_radarvalue_list
    }

    /**
     * @description <p>Retrieves a <code>ValueList</code> object.</p>
     * @summary Retrieve a value list
     * @operationId GetRadarValueListsValueList
     */
    get: {
      pathParams: {
        value_list: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.radarvalue_list
    }

    /**
     * @description <p>Updates a <code>ValueList</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Note that <code>item_type</code> is immutable.</p>
     * @summary Update a value list
     * @operationId PostRadarValueListsValueList
     */
    post: {
      pathParams: {
        value_list: string
      }
      body?: unknown
      res: Schemas.radarvalue_list
    }

  }

  '/v1/refunds': {

    /**
     * @description <p>Returns a list of all refunds you created. We return the refunds in sorted order, with the most recent refunds appearing first. The 10 most recent refunds are always available by default on the Charge object.</p>
     * @summary List all refunds
     * @operationId GetRefunds
     */
    get: {
      queryParams?: {
        /**
         * @description Only return refunds for the charge specified by this charge ID.
         */
        charge?: string
        /**
         * @description Only return refunds that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Only return refunds for the PaymentIntent specified by this ID.
         */
        payment_intent?: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.refund[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>When you create a new refund, you must specify a Charge or a PaymentIntent object on which to create it.</p>
     * 
     * <p>Creating a new refund will refund a charge that has previously been created but not yet refunded.
     * Funds will be refunded to the credit or debit card that was originally charged.</p>
     * 
     * <p>You can optionally refund only part of a charge.
     * You can do so multiple times, until the entire charge has been refunded.</p>
     * 
     * <p>Once entirely refunded, a charge can’t be refunded again.
     * This method will raise an error when called on an already-refunded charge,
     * or when trying to refund more money than is left on a charge.</p>
     * @summary Create customer balance refund
     * @operationId PostRefunds
     */
    post: {
      body?: unknown
      res: Schemas.refund
    }

  }

  '/v1/refunds/{refund}': {

    /**
     * @description <p>Retrieves the details of an existing refund.</p>
     * @summary Retrieve a refund
     * @operationId GetRefundsRefund
     */
    get: {
      pathParams: {
        refund: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.refund
    }

    /**
     * @description <p>Updates the refund that you specify by setting the values of the passed parameters. Any parameters that you don’t provide remain unchanged.</p>
     * 
     * <p>This request only accepts <code>metadata</code> as an argument.</p>
     * @summary Update a refund
     * @operationId PostRefundsRefund
     */
    post: {
      pathParams: {
        refund: string
      }
      body?: unknown
      res: Schemas.refund
    }

  }

  '/v1/refunds/{refund}/cancel': {

    /**
     * @description <p>Cancels a refund with a status of <code>requires_action</code>.</p>
     * 
     * <p>You can’t cancel refunds in other states. Only refunds for payment methods that require customer action can enter the <code>requires_action</code> state.</p>
     * @summary Cancel a refund
     * @operationId PostRefundsRefundCancel
     */
    post: {
      pathParams: {
        refund: string
      }
      body?: unknown
      res: Schemas.refund
    }

  }

  '/v1/reporting/report_runs': {

    /**
     * @description <p>Returns a list of Report Runs, with the most recent appearing first.</p>
     * @summary List all Report Runs
     * @operationId GetReportingReportRuns
     */
    get: {
      queryParams?: {
        /**
         * @description Only return Report Runs that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.reportingreport_run[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new object and begin running the report. (Certain report types require a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>
     * @summary Create a Report Run
     * @operationId PostReportingReportRuns
     */
    post: {
      body: unknown
      res: Schemas.reportingreport_run
    }

  }

  '/v1/reporting/report_runs/{report_run}': {

    /**
     * @description <p>Retrieves the details of an existing Report Run.</p>
     * @summary Retrieve a Report Run
     * @operationId GetReportingReportRunsReportRun
     */
    get: {
      pathParams: {
        report_run: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.reportingreport_run
    }

  }

  '/v1/reporting/report_types': {

    /**
     * @description <p>Returns a full list of Report Types.</p>
     * @summary List all Report Types
     * @operationId GetReportingReportTypes
     */
    get: {
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: {
        data: Schemas.reportingreport_type[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/reporting/report_types/{report_type}': {

    /**
     * @description <p>Retrieves the details of a Report Type. (Certain report types require a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>
     * @summary Retrieve a Report Type
     * @operationId GetReportingReportTypesReportType
     */
    get: {
      pathParams: {
        report_type: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.reportingreport_type
    }

  }

  '/v1/reviews': {

    /**
     * @description <p>Returns a list of <code>Review</code> objects that have <code>open</code> set to <code>true</code>. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
     * @summary List all open reviews
     * @operationId GetReviews
     */
    get: {
      queryParams?: {
        /**
         * @description Only return reviews that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.review[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/reviews/{review}': {

    /**
     * @description <p>Retrieves a <code>Review</code> object.</p>
     * @summary Retrieve a review
     * @operationId GetReviewsReview
     */
    get: {
      pathParams: {
        review: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.review
    }

  }

  '/v1/reviews/{review}/approve': {

    /**
     * @description <p>Approves a <code>Review</code> object, closing it and removing it from the list of reviews.</p>
     * @summary Approve a review
     * @operationId PostReviewsReviewApprove
     */
    post: {
      pathParams: {
        review: string
      }
      body?: unknown
      res: Schemas.review
    }

  }

  '/v1/setup_attempts': {

    /**
     * @description <p>Returns a list of SetupAttempts that associate with a provided SetupIntent.</p>
     * @summary List all SetupAttempts
     * @operationId GetSetupAttempts
     */
    get: {
      queryParams?: {
        /**
         * @description A filter on the list, based on the object `created` field. The value
         * can be a string with an integer Unix timestamp or a
         * dictionary with a number of different query options.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Only return SetupAttempts created by the SetupIntent specified by
         * this ID.
         */
        setup_intent: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.setup_attempt[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/setup_intents': {

    /**
     * @description <p>Returns a list of SetupIntents.</p>
     * @summary List all SetupIntents
     * @operationId GetSetupIntents
     */
    get: {
      queryParams?: {
        /**
         * @description If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
         * 
         * It can only be used for this Stripe Account’s own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
         */
        attach_to_self?: boolean
        /**
         * @description A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description Only return SetupIntents for the customer specified by this customer ID.
         */
        customer?: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Only return SetupIntents that associate with the specified payment method.
         */
        payment_method?: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.setup_intent[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a SetupIntent object.</p>
     * 
     * <p>After you create the SetupIntent, attach a payment method and <a href="/docs/api/setup_intents/confirm">confirm</a>
     * it to collect any required permissions to charge the payment method later.</p>
     * @summary Create a SetupIntent
     * @operationId PostSetupIntents
     */
    post: {
      body?: unknown
      res: Schemas.setup_intent
    }

  }

  '/v1/setup_intents/{intent}': {

    /**
     * @description <p>Retrieves the details of a SetupIntent that has previously been created. </p>
     * 
     * <p>Client-side retrieval using a publishable key is allowed when the <code>client_secret</code> is provided in the query string. </p>
     * 
     * <p>When retrieved with a publishable key, only a subset of properties will be returned. Please refer to the <a href="#setup_intent_object">SetupIntent</a> object reference for more details.</p>
     * @summary Retrieve a SetupIntent
     * @operationId GetSetupIntentsIntent
     */
    get: {
      pathParams: {
        intent: string
      }
      queryParams?: {
        /**
         * @description The client secret of the SetupIntent. We require this string if you use a publishable key to retrieve the SetupIntent.
         */
        client_secret?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.setup_intent
    }

    /**
     * @description <p>Updates a SetupIntent object.</p>
     * @summary Update a SetupIntent
     * @operationId PostSetupIntentsIntent
     */
    post: {
      pathParams: {
        intent: string
      }
      body?: unknown
      res: Schemas.setup_intent
    }

  }

  '/v1/setup_intents/{intent}/cancel': {

    /**
     * @description <p>You can cancel a SetupIntent object when it’s in one of these statuses: <code>requires_payment_method</code>, <code>requires_confirmation</code>, or <code>requires_action</code>. </p>
     * 
     * <p>After you cancel it, setup is abandoned and any operations on the SetupIntent fail with an error. You can’t cancel the SetupIntent for a Checkout Session. <a href="/docs/api/checkout/sessions/expire">Expire the Checkout Session</a> instead.</p>
     * @summary Cancel a SetupIntent
     * @operationId PostSetupIntentsIntentCancel
     */
    post: {
      pathParams: {
        intent: string
      }
      body?: unknown
      res: Schemas.setup_intent
    }

  }

  '/v1/setup_intents/{intent}/confirm': {

    /**
     * @description <p>Confirm that your customer intends to set up the current or
     * provided payment method. For example, you would confirm a SetupIntent
     * when a customer hits the “Save” button on a payment method management
     * page on your website.</p>
     * 
     * <p>If the selected payment method does not require any additional
     * steps from the customer, the SetupIntent will transition to the
     * <code>succeeded</code> status.</p>
     * 
     * <p>Otherwise, it will transition to the <code>requires_action</code> status and
     * suggest additional actions via <code>next_action</code>. If setup fails,
     * the SetupIntent will transition to the
     * <code>requires_payment_method</code> status or the <code>canceled</code> status if the
     * confirmation limit is reached.</p>
     * @summary Confirm a SetupIntent
     * @operationId PostSetupIntentsIntentConfirm
     */
    post: {
      pathParams: {
        intent: string
      }
      body?: unknown
      res: Schemas.setup_intent
    }

  }

  '/v1/setup_intents/{intent}/verify_microdeposits': {

    /**
     * @description <p>Verifies microdeposits on a SetupIntent object.</p>
     * @summary Verify microdeposits on a SetupIntent
     * @operationId PostSetupIntentsIntentVerifyMicrodeposits
     */
    post: {
      pathParams: {
        intent: string
      }
      body?: unknown
      res: Schemas.setup_intent
    }

  }

  '/v1/shipping_rates': {

    /**
     * @description <p>Returns a list of your shipping rates.</p>
     * @summary List all shipping rates
     * @operationId GetShippingRates
     */
    get: {
      queryParams?: {
        /**
         * @description Only return shipping rates that are active or inactive.
         */
        active?: boolean
        /**
         * @description A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description Only return shipping rates for the given currency.
         */
        currency?: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.shipping_rate[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new shipping rate object.</p>
     * @summary Create a shipping rate
     * @operationId PostShippingRates
     */
    post: {
      body: unknown
      res: Schemas.shipping_rate
    }

  }

  '/v1/shipping_rates/{shipping_rate_token}': {

    /**
     * @description <p>Returns the shipping rate object with the given ID.</p>
     * @summary Retrieve a shipping rate
     * @operationId GetShippingRatesShippingRateToken
     */
    get: {
      pathParams: {
        shipping_rate_token: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.shipping_rate
    }

    /**
     * @description <p>Updates an existing shipping rate object.</p>
     * @summary Update a shipping rate
     * @operationId PostShippingRatesShippingRateToken
     */
    post: {
      pathParams: {
        shipping_rate_token: string
      }
      body?: unknown
      res: Schemas.shipping_rate
    }

  }

  '/v1/sigma/saved_queries/{id}': {

    /**
     * @description <p>Update an existing Sigma query that previously exists</p>
     * @summary Update an existing Sigma Query
     * @operationId PostSigmaSavedQueriesId
     */
    post: {
      pathParams: {
        /**
         * @description The `id` of the saved query to update. This should be a valid `id` that was previously created.
         */
        id: string
      }
      body?: unknown
      res: Schemas.sigmasigma_api_query
    }

  }

  '/v1/sigma/scheduled_query_runs': {

    /**
     * @description <p>Returns a list of scheduled query runs.</p>
     * @summary List all scheduled query runs
     * @operationId GetSigmaScheduledQueryRuns
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.scheduled_query_run[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/sigma/scheduled_query_runs/{scheduled_query_run}': {

    /**
     * @description <p>Retrieves the details of an scheduled query run.</p>
     * @summary Retrieve a scheduled query run
     * @operationId GetSigmaScheduledQueryRunsScheduledQueryRun
     */
    get: {
      pathParams: {
        scheduled_query_run: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.scheduled_query_run
    }

  }

  '/v1/sources': {

    /**
     * @description <p>Creates a new source object.</p>
     * @summary Shares a source
     * @operationId PostSources
     */
    post: {
      body?: unknown
      res: Schemas.source
    }

  }

  '/v1/sources/{source}': {

    /**
     * @description <p>Retrieves an existing source object. Supply the unique source ID from a source creation request and Stripe will return the corresponding up-to-date source object information.</p>
     * @summary Retrieve a source
     * @operationId GetSourcesSource
     */
    get: {
      pathParams: {
        source: string
      }
      queryParams?: {
        /**
         * @description The client secret of the source. Required if a publishable key is used to retrieve the source.
         */
        client_secret?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.source
    }

    /**
     * @description <p>Updates the specified source by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
     * 
     * <p>This request accepts the <code>metadata</code> and <code>owner</code> as arguments. It is also possible to update type specific information for selected payment methods. Please refer to our <a href="/docs/sources">payment method guides</a> for more detail.</p>
     * @summary Update a source
     * @operationId PostSourcesSource
     */
    post: {
      pathParams: {
        source: string
      }
      body?: unknown
      res: Schemas.source
    }

  }

  '/v1/sources/{source}/mandate_notifications/{mandate_notification}': {

    /**
     * @description <p>Retrieves a new Source MandateNotification.</p>
     * @summary Retrieve a Source MandateNotification
     * @operationId GetSourcesSourceMandateNotificationsMandateNotification
     */
    get: {
      pathParams: {
        mandate_notification: string
        source: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.source_mandate_notification
    }

  }

  '/v1/sources/{source}/source_transactions': {

    /**
     * @description <p>List source transactions for a given source.</p>
     * @operationId GetSourcesSourceSourceTransactions
     */
    get: {
      pathParams: {
        source: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.source_transaction[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/sources/{source}/source_transactions/{source_transaction}': {

    /**
     * @description <p>Retrieve an existing source transaction object. Supply the unique source ID from a source creation request and the source transaction ID and Stripe will return the corresponding up-to-date source object information.</p>
     * @summary Retrieve a source transaction
     * @operationId GetSourcesSourceSourceTransactionsSourceTransaction
     */
    get: {
      pathParams: {
        source: string
        source_transaction: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.source_transaction
    }

  }

  '/v1/sources/{source}/verify': {

    /**
     * @description <p>Verify a given source.</p>
     * @operationId PostSourcesSourceVerify
     */
    post: {
      pathParams: {
        source: string
      }
      body: unknown
      res: Schemas.source
    }

  }

  '/v1/subscription_items': {

    /**
     * @description <p>Returns a list of your subscription items for a given subscription.</p>
     * @summary List all subscription items
     * @operationId GetSubscriptionItems
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description The ID of the subscription whose items will be retrieved.
         */
        subscription: string
      }
      body?: unknown
      res: {
        data: Schemas.subscription_item[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Adds a new item to an existing subscription. No existing items will be changed or replaced.</p>
     * @summary Create a subscription item
     * @operationId PostSubscriptionItems
     */
    post: {
      body: unknown
      res: Schemas.subscription_item
    }

  }

  '/v1/subscription_items/{item}': {

    /**
     * @description <p>Deletes an item from the subscription. Removing a subscription item from a subscription will not cancel the subscription.</p>
     * @summary Delete a subscription item
     * @operationId DeleteSubscriptionItemsItem
     */
    delete: {
      pathParams: {
        item: string
      }
      body?: unknown
      res: Schemas.deleted_subscription_item
    }

    /**
     * @description <p>Retrieves the subscription item with the given ID.</p>
     * @summary Retrieve a subscription item
     * @operationId GetSubscriptionItemsItem
     */
    get: {
      pathParams: {
        item: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.subscription_item
    }

    /**
     * @description <p>Updates the plan or quantity of an item on a current subscription.</p>
     * @summary Update a subscription item
     * @operationId PostSubscriptionItemsItem
     */
    post: {
      pathParams: {
        item: string
      }
      body?: unknown
      res: Schemas.subscription_item
    }

  }

  '/v1/subscription_schedules': {

    /**
     * @description <p>Retrieves the list of your subscription schedules.</p>
     * @summary List all schedules
     * @operationId GetSubscriptionSchedules
     */
    get: {
      queryParams?: {
        /**
         * @description Only return subscription schedules that were created canceled the given date interval.
         */
        canceled_at?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description Only return subscription schedules that completed during the given date interval.
         */
        completed_at?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description Only return subscription schedules that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description Only return subscription schedules for the given customer.
         */
        customer?: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Only return subscription schedules that were released during the given date interval.
         */
        released_at?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description Only return subscription schedules that have not started yet.
         */
        scheduled?: boolean
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.subscription_schedule[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new subscription schedule object. Each customer can have up to 500 active or scheduled subscriptions.</p>
     * @summary Create a schedule
     * @operationId PostSubscriptionSchedules
     */
    post: {
      body?: unknown
      res: Schemas.subscription_schedule
    }

  }

  '/v1/subscription_schedules/{schedule}': {

    /**
     * @description <p>Retrieves the details of an existing subscription schedule. You only need to supply the unique subscription schedule identifier that was returned upon subscription schedule creation.</p>
     * @summary Retrieve a schedule
     * @operationId GetSubscriptionSchedulesSchedule
     */
    get: {
      pathParams: {
        schedule: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.subscription_schedule
    }

    /**
     * @description <p>Updates an existing subscription schedule.</p>
     * @summary Update a schedule
     * @operationId PostSubscriptionSchedulesSchedule
     */
    post: {
      pathParams: {
        schedule: string
      }
      body?: unknown
      res: Schemas.subscription_schedule
    }

  }

  '/v1/subscription_schedules/{schedule}/cancel': {

    /**
     * @description <p>Cancels a subscription schedule and its associated subscription immediately (if the subscription schedule has an active subscription). A subscription schedule can only be canceled if its status is <code>not_started</code> or <code>active</code>.</p>
     * @summary Cancel a schedule
     * @operationId PostSubscriptionSchedulesScheduleCancel
     */
    post: {
      pathParams: {
        schedule: string
      }
      body?: unknown
      res: Schemas.subscription_schedule
    }

  }

  '/v1/subscription_schedules/{schedule}/release': {

    /**
     * @description <p>Releases the subscription schedule immediately, which will stop scheduling of its phases, but leave any existing subscription in place. A schedule can only be released if its status is <code>not_started</code> or <code>active</code>. If the subscription schedule is currently associated with a subscription, releasing it will remove its <code>subscription</code> property and set the subscription’s ID to the <code>released_subscription</code> property.</p>
     * @summary Release a schedule
     * @operationId PostSubscriptionSchedulesScheduleRelease
     */
    post: {
      pathParams: {
        schedule: string
      }
      body?: unknown
      res: Schemas.subscription_schedule
    }

  }

  '/v1/subscriptions': {

    /**
     * @description <p>By default, returns a list of subscriptions that have not been canceled. In order to list canceled subscriptions, specify <code>status=canceled</code>.</p>
     * @summary List subscriptions
     * @operationId GetSubscriptions
     */
    get: {
      queryParams?: {
        /**
         * @description Filter subscriptions by their automatic tax settings.
         */
        automatic_tax?: {
          enabled: boolean
        }
        /**
         * @description The collection method of the subscriptions to retrieve. Either `charge_automatically` or `send_invoice`.
         */
        collection_method?: ('charge_automatically' | 'send_invoice')
        /**
         * @description Only return subscriptions that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description Only return subscriptions whose minimum item current_period_end falls within the given date interval.
         */
        current_period_end?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description Only return subscriptions whose maximum item current_period_start falls within the given date interval.
         */
        current_period_start?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description The ID of the customer whose subscriptions will be retrieved.
         */
        customer?: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Filter for subscriptions that contain this recurring price ID.
         */
        price?: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description The status of the subscriptions to retrieve. Passing in a value of `canceled` will return all canceled subscriptions, including those belonging to deleted customers. Pass `ended` to find subscriptions that are canceled and subscriptions that are expired due to [incomplete payment](https://stripe.com/docs/billing/subscriptions/overview#subscription-statuses). Passing in a value of `all` will return subscriptions of all statuses. If no value is supplied, all subscriptions that have not been canceled are returned.
         */
        status?: ('active' | 'all' | 'canceled' | 'ended' | 'incomplete' | 'incomplete_expired' | 'past_due' | 'paused' | 'trialing' | 'unpaid')
        /**
         * @description Filter for subscriptions that are associated with the specified test clock. The response will not include subscriptions with test clocks if this and the customer parameter is not set.
         */
        test_clock?: string
      }
      body?: unknown
      res: {
        data: Schemas.subscription[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new subscription on an existing customer. Each customer can have up to 500 active or scheduled subscriptions.</p>
     * 
     * <p>When you create a subscription with <code>collection_method=charge_automatically</code>, the first invoice is finalized as part of the request.
     * The <code>payment_behavior</code> parameter determines the exact behavior of the initial payment.</p>
     * 
     * <p>To start subscriptions where the first invoice always begins in a <code>draft</code> status, use <a href="/docs/billing/subscriptions/subscription-schedules#managing">subscription schedules</a> instead.
     * Schedules provide the flexibility to model more complex billing configurations that change over time.</p>
     * @summary Create a subscription
     * @operationId PostSubscriptions
     */
    post: {
      body: unknown
      res: Schemas.subscription
    }

  }

  '/v1/subscriptions/search': {

    /**
     * @description <p>Search for subscriptions you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
     * Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
     * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
     * to an hour behind during outages. Search functionality is not available to merchants in India.</p>
     * @summary Search subscriptions
     * @operationId GetSubscriptionsSearch
     */
    get: {
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
         */
        page?: string
        /**
         * @description The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for subscriptions](https://stripe.com/docs/search#query-fields-for-subscriptions).
         */
        query: string
      }
      body?: unknown
      res: {
        data: Schemas.subscription[]
        has_more: boolean
        next_page?: string | null
        /**
         * @description String representing the object's type. Objects of the same type share the same value.
         */
        object: 'search_result'
        /**
         * @description The total number of objects that match the query, only accurate up to 10,000.
         */
        total_count?: number
        url: string
      }
    }

  }

  '/v1/subscriptions/{subscription_exposed_id}': {

    /**
     * @description <p>Cancels a customer’s subscription immediately. The customer won’t be charged again for the subscription. After it’s canceled, you can no longer update the subscription or its <a href="/metadata">metadata</a>.</p>
     * 
     * <p>Any pending invoice items that you’ve created are still charged at the end of the period, unless manually <a href="#delete_invoiceitem">deleted</a>. If you’ve set the subscription to cancel at the end of the period, any pending prorations are also left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations are removed if <code>invoice_now</code> and <code>prorate</code> are both set to true.</p>
     * 
     * <p>By default, upon subscription cancellation, Stripe stops automatic collection of all finalized invoices for the customer. This is intended to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can resume automatic collection of the invoices manually after subscription cancellation to have us proceed. Or, you could check for unpaid invoices before allowing the customer to cancel the subscription at all.</p>
     * @summary Cancel a subscription
     * @operationId DeleteSubscriptionsSubscriptionExposedId
     */
    delete: {
      pathParams: {
        subscription_exposed_id: string
      }
      body?: unknown
      res: Schemas.subscription
    }

    /**
     * @description <p>Retrieves the subscription with the given ID.</p>
     * @summary Retrieve a subscription
     * @operationId GetSubscriptionsSubscriptionExposedId
     */
    get: {
      pathParams: {
        subscription_exposed_id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.subscription
    }

    /**
     * @description <p>Updates an existing subscription to match the specified parameters.
     * When changing prices or quantities, we optionally prorate the price we charge next month to make up for any price changes.
     * To preview how the proration is calculated, use the <a href="/docs/api/invoices/create_preview">create preview</a> endpoint.</p>
     * 
     * <p>By default, we prorate subscription changes. For example, if a customer signs up on May 1 for a <currency>100</currency> price, they’ll be billed <currency>100</currency> immediately. If on May 15 they switch to a <currency>200</currency> price, then on June 1 they’ll be billed <currency>250</currency> (<currency>200</currency> for a renewal of her subscription, plus a <currency>50</currency> prorating adjustment for half of the previous month’s <currency>100</currency> difference). Similarly, a downgrade generates a credit that is applied to the next invoice. We also prorate when you make quantity changes.</p>
     * 
     * <p>Switching prices does not normally change the billing date or generate an immediate charge unless:</p>
     * 
     * <ul>
     * <li>The billing interval is changed (for example, from monthly to yearly).</li>
     * <li>The subscription moves from free to paid.</li>
     * <li>A trial starts or ends.</li>
     * </ul>
     * 
     * <p>In these cases, we apply a credit for the unused time on the previous price, immediately charge the customer using the new price, and reset the billing date. Learn about how <a href="/docs/billing/subscriptions/upgrade-downgrade#immediate-payment">Stripe immediately attempts payment for subscription changes</a>.</p>
     * 
     * <p>If you want to charge for an upgrade immediately, pass <code>proration_behavior</code> as <code>always_invoice</code> to create prorations, automatically invoice the customer for those proration adjustments, and attempt to collect payment. If you pass <code>create_prorations</code>, the prorations are created but not automatically invoiced. If you want to bill the customer for the prorations before the subscription’s renewal date, you need to manually <a href="/docs/api/invoices/create">invoice the customer</a>.</p>
     * 
     * <p>If you don’t want to prorate, set the <code>proration_behavior</code> option to <code>none</code>. With this option, the customer is billed <currency>100</currency> on May 1 and <currency>200</currency> on June 1. Similarly, if you set <code>proration_behavior</code> to <code>none</code> when switching between different billing intervals (for example, from monthly to yearly), we don’t generate any credits for the old subscription’s unused time. We still reset the billing date and bill immediately for the new subscription.</p>
     * 
     * <p>Updating the quantity on a subscription many times in an hour may result in <a href="/docs/rate-limits">rate limiting</a>. If you need to bill for a frequently changing quantity, consider integrating <a href="/docs/billing/subscriptions/usage-based">usage-based billing</a> instead.</p>
     * @summary Update a subscription
     * @operationId PostSubscriptionsSubscriptionExposedId
     */
    post: {
      pathParams: {
        subscription_exposed_id: string
      }
      body?: unknown
      res: Schemas.subscription
    }

  }

  '/v1/subscriptions/{subscription_exposed_id}/discount': {

    /**
     * @description <p>Removes the currently applied discount on a subscription.</p>
     * @summary Delete a subscription discount
     * @operationId DeleteSubscriptionsSubscriptionExposedIdDiscount
     */
    delete: {
      pathParams: {
        subscription_exposed_id: string
      }
      body?: unknown
      res: Schemas.deleted_discount
    }

  }

  '/v1/subscriptions/{subscription}/migrate': {

    /**
     * @description <p>Upgrade the billing_mode of an existing subscription.</p>
     * @summary Migrate a subscription
     * @operationId PostSubscriptionsSubscriptionMigrate
     */
    post: {
      pathParams: {
        subscription: string
      }
      body: unknown
      res: Schemas.subscription
    }

  }

  '/v1/subscriptions/{subscription}/resume': {

    /**
     * @description <p>Initiates resumption of a paused subscription, optionally resetting the billing cycle anchor and creating prorations. If a resumption invoice is generated, it must be paid or marked uncollectible before the subscription will be unpaused. If payment succeeds the subscription will become <code>active</code>, and if payment fails the subscription will be <code>past_due</code>. The resumption invoice will void automatically if not paid by the expiration date.</p>
     * @summary Resume a subscription
     * @operationId PostSubscriptionsSubscriptionResume
     */
    post: {
      pathParams: {
        subscription: string
      }
      body?: unknown
      res: Schemas.subscription
    }

  }

  '/v1/tax/calculations': {

    /**
     * @description <p>Calculates tax based on the input and returns a Tax <code>Calculation</code> object.</p>
     * @summary Create a Tax Calculation
     * @operationId PostTaxCalculations
     */
    post: {
      body: unknown
      res: Schemas.taxcalculation
    }

  }

  '/v1/tax/calculations/{calculation}': {

    /**
     * @description <p>Retrieves a Tax <code>Calculation</code> object, if the calculation hasn’t expired.</p>
     * @summary Retrieve a Tax Calculation
     * @operationId GetTaxCalculationsCalculation
     */
    get: {
      pathParams: {
        calculation: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.taxcalculation
    }

  }

  '/v1/tax/calculations/{calculation}/line_items': {

    /**
     * @description <p>Retrieves the line items of a tax calculation as a collection, if the calculation hasn’t expired.</p>
     * @summary Retrieve a calculation's line items
     * @operationId GetTaxCalculationsCalculationLineItems
     */
    get: {
      pathParams: {
        calculation: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.taxcalculation_line_item[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/tax/registrations': {

    /**
     * @description <p>Returns a list of Tax <code>Registration</code> objects.</p>
     * @summary List registrations
     * @operationId GetTaxRegistrations
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description The status of the Tax Registration.
         */
        status?: ('active' | 'all' | 'expired' | 'scheduled')
      }
      body?: unknown
      res: {
        data: Schemas.taxregistration[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new Tax <code>Registration</code> object.</p>
     * @summary Create a registration
     * @operationId PostTaxRegistrations
     */
    post: {
      body: unknown
      res: Schemas.taxregistration
    }

  }

  '/v1/tax/registrations/{id}': {

    /**
     * @description <p>Returns a Tax <code>Registration</code> object.</p>
     * @summary Retrieve a registration
     * @operationId GetTaxRegistrationsId
     */
    get: {
      pathParams: {
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.taxregistration
    }

    /**
     * @description <p>Updates an existing Tax <code>Registration</code> object.</p>
     * 
     * <p>A registration cannot be deleted after it has been created. If you wish to end a registration you may do so by setting <code>expires_at</code>.</p>
     * @summary Update a registration
     * @operationId PostTaxRegistrationsId
     */
    post: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.taxregistration
    }

  }

  '/v1/tax/settings': {

    /**
     * @description <p>Retrieves Tax <code>Settings</code> for a merchant.</p>
     * @summary Retrieve settings
     * @operationId GetTaxSettings
     */
    get: {
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.taxsettings
    }

    /**
     * @description <p>Updates Tax <code>Settings</code> parameters used in tax calculations. All parameters are editable but none can be removed once set.</p>
     * @summary Update settings
     * @operationId PostTaxSettings
     */
    post: {
      body?: unknown
      res: Schemas.taxsettings
    }

  }

  '/v1/tax/transactions/create_from_calculation': {

    /**
     * @description <p>Creates a Tax Transaction from a calculation, if that calculation hasn’t expired. Calculations expire after 90 days.</p>
     * @summary Create a transaction from a calculation
     * @operationId PostTaxTransactionsCreateFromCalculation
     */
    post: {
      body: unknown
      res: Schemas.taxtransaction
    }

  }

  '/v1/tax/transactions/create_reversal': {

    /**
     * @description <p>Partially or fully reverses a previously created <code>Transaction</code>.</p>
     * @summary Create a reversal transaction
     * @operationId PostTaxTransactionsCreateReversal
     */
    post: {
      body: unknown
      res: Schemas.taxtransaction
    }

  }

  '/v1/tax/transactions/{transaction}': {

    /**
     * @description <p>Retrieves a Tax <code>Transaction</code> object.</p>
     * @summary Retrieve a transaction
     * @operationId GetTaxTransactionsTransaction
     */
    get: {
      pathParams: {
        transaction: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.taxtransaction
    }

  }

  '/v1/tax/transactions/{transaction}/line_items': {

    /**
     * @description <p>Retrieves the line items of a committed standalone transaction as a collection.</p>
     * @summary Retrieve a transaction's line items
     * @operationId GetTaxTransactionsTransactionLineItems
     */
    get: {
      pathParams: {
        transaction: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.taxtransaction_line_item[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/tax_codes': {

    /**
     * @description <p>A list of <a href="https://stripe.com/docs/tax/tax-categories">all tax codes available</a> to add to Products in order to allow specific tax calculations.</p>
     * @summary List all tax codes
     * @operationId GetTaxCodes
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.tax_code[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/tax_codes/{id}': {

    /**
     * @description <p>Retrieves the details of an existing tax code. Supply the unique tax code ID and Stripe will return the corresponding tax code information.</p>
     * @summary Retrieve a tax code
     * @operationId GetTaxCodesId
     */
    get: {
      pathParams: {
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.tax_code
    }

  }

  '/v1/tax_ids': {

    /**
     * @description <p>Returns a list of tax IDs.</p>
     * @summary List all tax IDs
     * @operationId GetTaxIds
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description The account or customer the tax ID belongs to. Defaults to `owner[type]=self`.
         */
        owner?: {
          account?: string
          customer?: string
          type: ('account' | 'application' | 'customer' | 'self')
        }
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.tax_id[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new account or customer <code>tax_id</code> object.</p>
     * @summary Create a tax ID
     * @operationId PostTaxIds
     */
    post: {
      body: unknown
      res: Schemas.tax_id
    }

  }

  '/v1/tax_ids/{id}': {

    /**
     * @description <p>Deletes an existing account or customer <code>tax_id</code> object.</p>
     * @summary Delete a tax ID
     * @operationId DeleteTaxIdsId
     */
    delete: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.deleted_tax_id
    }

    /**
     * @description <p>Retrieves an account or customer <code>tax_id</code> object.</p>
     * @summary Retrieve a tax ID
     * @operationId GetTaxIdsId
     */
    get: {
      pathParams: {
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.tax_id
    }

  }

  '/v1/tax_rates': {

    /**
     * @description <p>Returns a list of your tax rates. Tax rates are returned sorted by creation date, with the most recently created tax rates appearing first.</p>
     * @summary List all tax rates
     * @operationId GetTaxRates
     */
    get: {
      queryParams?: {
        /**
         * @description Optional flag to filter by tax rates that are either active or inactive (archived).
         */
        active?: boolean
        /**
         * @description Optional range for filtering created date.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description Optional flag to filter by tax rates that are inclusive (or those that are not inclusive).
         */
        inclusive?: boolean
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.tax_rate[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new tax rate.</p>
     * @summary Create a tax rate
     * @operationId PostTaxRates
     */
    post: {
      body: unknown
      res: Schemas.tax_rate
    }

  }

  '/v1/tax_rates/{tax_rate}': {

    /**
     * @description <p>Retrieves a tax rate with the given ID</p>
     * @summary Retrieve a tax rate
     * @operationId GetTaxRatesTaxRate
     */
    get: {
      pathParams: {
        tax_rate: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.tax_rate
    }

    /**
     * @description <p>Updates an existing tax rate.</p>
     * @summary Update a tax rate
     * @operationId PostTaxRatesTaxRate
     */
    post: {
      pathParams: {
        tax_rate: string
      }
      body?: unknown
      res: Schemas.tax_rate
    }

  }

  '/v1/terminal/configurations': {

    /**
     * @description <p>Returns a list of <code>Configuration</code> objects.</p>
     * @summary List all Configurations
     * @operationId GetTerminalConfigurations
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description if present, only return the account default or non-default configurations.
         */
        is_account_default?: boolean
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.terminalconfiguration[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new <code>Configuration</code> object.</p>
     * @summary Create a Configuration
     * @operationId PostTerminalConfigurations
     */
    post: {
      body?: unknown
      res: Schemas.terminalconfiguration
    }

  }

  '/v1/terminal/configurations/{configuration}': {

    /**
     * @description <p>Deletes a <code>Configuration</code> object.</p>
     * @summary Delete a Configuration
     * @operationId DeleteTerminalConfigurationsConfiguration
     */
    delete: {
      pathParams: {
        configuration: string
      }
      body?: unknown
      res: Schemas.deleted_terminalconfiguration
    }

    /**
     * @description <p>Retrieves a <code>Configuration</code> object.</p>
     * @summary Retrieve a Configuration
     * @operationId GetTerminalConfigurationsConfiguration
     */
    get: {
      pathParams: {
        configuration: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: (Schemas.terminalconfiguration | Schemas.deleted_terminalconfiguration)
    }

    /**
     * @description <p>Updates a new <code>Configuration</code> object.</p>
     * @summary Update a Configuration
     * @operationId PostTerminalConfigurationsConfiguration
     */
    post: {
      pathParams: {
        configuration: string
      }
      body?: unknown
      res: (Schemas.terminalconfiguration | Schemas.deleted_terminalconfiguration)
    }

  }

  '/v1/terminal/connection_tokens': {

    /**
     * @description <p>To connect to a reader the Stripe Terminal SDK needs to retrieve a short-lived connection token from Stripe, proxied through your server. On your backend, add an endpoint that creates and returns a connection token.</p>
     * @summary Create a Connection Token
     * @operationId PostTerminalConnectionTokens
     */
    post: {
      body?: unknown
      res: Schemas.terminalconnection_token
    }

  }

  '/v1/terminal/locations': {

    /**
     * @description <p>Returns a list of <code>Location</code> objects.</p>
     * @summary List all Locations
     * @operationId GetTerminalLocations
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.terminallocation[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new <code>Location</code> object.
     * For further details, including which address fields are required in each country, see the <a href="/docs/terminal/fleet/locations">Manage locations</a> guide.</p>
     * @summary Create a Location
     * @operationId PostTerminalLocations
     */
    post: {
      body: unknown
      res: Schemas.terminallocation
    }

  }

  '/v1/terminal/locations/{location}': {

    /**
     * @description <p>Deletes a <code>Location</code> object.</p>
     * @summary Delete a Location
     * @operationId DeleteTerminalLocationsLocation
     */
    delete: {
      pathParams: {
        location: string
      }
      body?: unknown
      res: Schemas.deleted_terminallocation
    }

    /**
     * @description <p>Retrieves a <code>Location</code> object.</p>
     * @summary Retrieve a Location
     * @operationId GetTerminalLocationsLocation
     */
    get: {
      pathParams: {
        location: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: (Schemas.terminallocation | Schemas.deleted_terminallocation)
    }

    /**
     * @description <p>Updates a <code>Location</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
     * @summary Update a Location
     * @operationId PostTerminalLocationsLocation
     */
    post: {
      pathParams: {
        location: string
      }
      body?: unknown
      res: (Schemas.terminallocation | Schemas.deleted_terminallocation)
    }

  }

  '/v1/terminal/readers': {

    /**
     * @description <p>Returns a list of <code>Reader</code> objects.</p>
     * @summary List all Readers
     * @operationId GetTerminalReaders
     */
    get: {
      queryParams?: {
        /**
         * @description Filters readers by device type
         */
        device_type?: ('bbpos_chipper2x' | 'bbpos_wisepad3' | 'bbpos_wisepos_e' | 'mobile_phone_reader' | 'simulated_stripe_s700' | 'simulated_wisepos_e' | 'stripe_m2' | 'stripe_s700' | 'verifone_P400')
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A location ID to filter the response list to only readers at the specific location
         */
        location?: string
        /**
         * @description Filters readers by serial number
         */
        serial_number?: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description A status filter to filter readers to only offline or online readers
         */
        status?: ('offline' | 'online')
      }
      body?: unknown
      res: {
        /**
         * @description A list of readers
         */
        data: Schemas.terminalreader[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new <code>Reader</code> object.</p>
     * @summary Create a Reader
     * @operationId PostTerminalReaders
     */
    post: {
      body: unknown
      res: Schemas.terminalreader
    }

  }

  '/v1/terminal/readers/{reader}': {

    /**
     * @description <p>Deletes a <code>Reader</code> object.</p>
     * @summary Delete a Reader
     * @operationId DeleteTerminalReadersReader
     */
    delete: {
      pathParams: {
        reader: string
      }
      body?: unknown
      res: Schemas.deleted_terminalreader
    }

    /**
     * @description <p>Retrieves a <code>Reader</code> object.</p>
     * @summary Retrieve a Reader
     * @operationId GetTerminalReadersReader
     */
    get: {
      pathParams: {
        reader: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: (Schemas.terminalreader | Schemas.deleted_terminalreader)
    }

    /**
     * @description <p>Updates a <code>Reader</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
     * @summary Update a Reader
     * @operationId PostTerminalReadersReader
     */
    post: {
      pathParams: {
        reader: string
      }
      body?: unknown
      res: (Schemas.terminalreader | Schemas.deleted_terminalreader)
    }

  }

  '/v1/terminal/readers/{reader}/cancel_action': {

    /**
     * @description <p>Cancels the current reader action.</p>
     * @summary Cancel the current reader action
     * @operationId PostTerminalReadersReaderCancelAction
     */
    post: {
      pathParams: {
        reader: string
      }
      body?: unknown
      res: Schemas.terminalreader
    }

  }

  '/v1/terminal/readers/{reader}/collect_inputs': {

    /**
     * @description <p>Initiates an input collection flow on a Reader.</p>
     * @summary Collect inputs using a Reader
     * @operationId PostTerminalReadersReaderCollectInputs
     */
    post: {
      pathParams: {
        reader: string
      }
      body: unknown
      res: Schemas.terminalreader
    }

  }

  '/v1/terminal/readers/{reader}/collect_payment_method': {

    /**
     * @description <p>Initiates a payment flow on a Reader and updates the PaymentIntent with card details before manual confirmation.</p>
     * @summary Hand off a PaymentIntent to a Reader and collect card details
     * @operationId PostTerminalReadersReaderCollectPaymentMethod
     */
    post: {
      pathParams: {
        reader: string
      }
      body: unknown
      res: Schemas.terminalreader
    }

  }

  '/v1/terminal/readers/{reader}/confirm_payment_intent': {

    /**
     * @description <p>Finalizes a payment on a Reader.</p>
     * @summary Confirm a PaymentIntent on the Reader
     * @operationId PostTerminalReadersReaderConfirmPaymentIntent
     */
    post: {
      pathParams: {
        reader: string
      }
      body: unknown
      res: Schemas.terminalreader
    }

  }

  '/v1/terminal/readers/{reader}/process_payment_intent': {

    /**
     * @description <p>Initiates a payment flow on a Reader.</p>
     * @summary Hand-off a PaymentIntent to a Reader
     * @operationId PostTerminalReadersReaderProcessPaymentIntent
     */
    post: {
      pathParams: {
        reader: string
      }
      body: unknown
      res: Schemas.terminalreader
    }

  }

  '/v1/terminal/readers/{reader}/process_setup_intent': {

    /**
     * @description <p>Initiates a setup intent flow on a Reader.</p>
     * @summary Hand-off a SetupIntent to a Reader
     * @operationId PostTerminalReadersReaderProcessSetupIntent
     */
    post: {
      pathParams: {
        reader: string
      }
      body: unknown
      res: Schemas.terminalreader
    }

  }

  '/v1/terminal/readers/{reader}/refund_payment': {

    /**
     * @description <p>Initiates a refund on a Reader</p>
     * @summary Refund a Charge or a PaymentIntent in-person
     * @operationId PostTerminalReadersReaderRefundPayment
     */
    post: {
      pathParams: {
        reader: string
      }
      body?: unknown
      res: Schemas.terminalreader
    }

  }

  '/v1/terminal/readers/{reader}/set_reader_display': {

    /**
     * @description <p>Sets reader display to show cart details.</p>
     * @summary Set reader display
     * @operationId PostTerminalReadersReaderSetReaderDisplay
     */
    post: {
      pathParams: {
        reader: string
      }
      body: unknown
      res: Schemas.terminalreader
    }

  }

  '/v1/test_helpers/confirmation_tokens': {

    /**
     * @description <p>Creates a test mode Confirmation Token server side for your integration tests.</p>
     * @summary Create a test Confirmation Token
     * @operationId PostTestHelpersConfirmationTokens
     */
    post: {
      body?: unknown
      res: Schemas.confirmation_token
    }

  }

  '/v1/test_helpers/customers/{customer}/fund_cash_balance': {

    /**
     * @description <p>Create an incoming testmode bank transfer</p>
     * @summary Fund a test mode cash balance
     * @operationId PostTestHelpersCustomersCustomerFundCashBalance
     */
    post: {
      pathParams: {
        customer: string
      }
      body: unknown
      res: Schemas.customer_cash_balance_transaction
    }

  }

  '/v1/test_helpers/issuing/authorizations': {

    /**
     * @description <p>Create a test-mode authorization.</p>
     * @summary Create a test-mode authorization
     * @operationId PostTestHelpersIssuingAuthorizations
     */
    post: {
      body: unknown
      res: Schemas.issuingauthorization
    }

  }

  '/v1/test_helpers/issuing/authorizations/{authorization}/capture': {

    /**
     * @description <p>Capture a test-mode authorization.</p>
     * @summary Capture a test-mode authorization
     * @operationId PostTestHelpersIssuingAuthorizationsAuthorizationCapture
     */
    post: {
      pathParams: {
        authorization: string
      }
      body?: unknown
      res: Schemas.issuingauthorization
    }

  }

  '/v1/test_helpers/issuing/authorizations/{authorization}/expire': {

    /**
     * @description <p>Expire a test-mode Authorization.</p>
     * @summary Expire a test-mode authorization
     * @operationId PostTestHelpersIssuingAuthorizationsAuthorizationExpire
     */
    post: {
      pathParams: {
        authorization: string
      }
      body?: unknown
      res: Schemas.issuingauthorization
    }

  }

  '/v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount': {

    /**
     * @description <p>Finalize the amount on an Authorization prior to capture, when the initial authorization was for an estimated amount.</p>
     * @summary Finalize a test-mode authorization's amount
     * @operationId PostTestHelpersIssuingAuthorizationsAuthorizationFinalizeAmount
     */
    post: {
      pathParams: {
        authorization: string
      }
      body: unknown
      res: Schemas.issuingauthorization
    }

  }

  '/v1/test_helpers/issuing/authorizations/{authorization}/fraud_challenges/respond': {

    /**
     * @description <p>Respond to a fraud challenge on a testmode Issuing authorization, simulating either a confirmation of fraud or a correction of legitimacy.</p>
     * @summary Respond to fraud challenge
     * @operationId PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespond
     */
    post: {
      pathParams: {
        authorization: string
      }
      body: unknown
      res: Schemas.issuingauthorization
    }

  }

  '/v1/test_helpers/issuing/authorizations/{authorization}/increment': {

    /**
     * @description <p>Increment a test-mode Authorization.</p>
     * @summary Increment a test-mode authorization
     * @operationId PostTestHelpersIssuingAuthorizationsAuthorizationIncrement
     */
    post: {
      pathParams: {
        authorization: string
      }
      body: unknown
      res: Schemas.issuingauthorization
    }

  }

  '/v1/test_helpers/issuing/authorizations/{authorization}/reverse': {

    /**
     * @description <p>Reverse a test-mode Authorization.</p>
     * @summary Reverse a test-mode authorization
     * @operationId PostTestHelpersIssuingAuthorizationsAuthorizationReverse
     */
    post: {
      pathParams: {
        authorization: string
      }
      body?: unknown
      res: Schemas.issuingauthorization
    }

  }

  '/v1/test_helpers/issuing/cards/{card}/shipping/deliver': {

    /**
     * @description <p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>delivered</code>.</p>
     * @summary Deliver a testmode card
     * @operationId PostTestHelpersIssuingCardsCardShippingDeliver
     */
    post: {
      pathParams: {
        card: string
      }
      body?: unknown
      res: Schemas.issuingcard
    }

  }

  '/v1/test_helpers/issuing/cards/{card}/shipping/fail': {

    /**
     * @description <p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>failure</code>.</p>
     * @summary Fail a testmode card
     * @operationId PostTestHelpersIssuingCardsCardShippingFail
     */
    post: {
      pathParams: {
        card: string
      }
      body?: unknown
      res: Schemas.issuingcard
    }

  }

  '/v1/test_helpers/issuing/cards/{card}/shipping/return': {

    /**
     * @description <p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>returned</code>.</p>
     * @summary Return a testmode card
     * @operationId PostTestHelpersIssuingCardsCardShippingReturn
     */
    post: {
      pathParams: {
        card: string
      }
      body?: unknown
      res: Schemas.issuingcard
    }

  }

  '/v1/test_helpers/issuing/cards/{card}/shipping/ship': {

    /**
     * @description <p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>shipped</code>.</p>
     * @summary Ship a testmode card
     * @operationId PostTestHelpersIssuingCardsCardShippingShip
     */
    post: {
      pathParams: {
        card: string
      }
      body?: unknown
      res: Schemas.issuingcard
    }

  }

  '/v1/test_helpers/issuing/cards/{card}/shipping/submit': {

    /**
     * @description <p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>submitted</code>. This method requires Stripe Version ‘2024-09-30.acacia’ or later.</p>
     * @summary Submit a testmode card
     * @operationId PostTestHelpersIssuingCardsCardShippingSubmit
     */
    post: {
      pathParams: {
        card: string
      }
      body?: unknown
      res: Schemas.issuingcard
    }

  }

  '/v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate': {

    /**
     * @description <p>Updates the <code>status</code> of the specified testmode personalization design object to <code>active</code>.</p>
     * @summary Activate a testmode personalization design
     * @operationId PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignActivate
     */
    post: {
      pathParams: {
        personalization_design: string
      }
      body?: unknown
      res: Schemas.issuingpersonalization_design
    }

  }

  '/v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate': {

    /**
     * @description <p>Updates the <code>status</code> of the specified testmode personalization design object to <code>inactive</code>.</p>
     * @summary Deactivate a testmode personalization design
     * @operationId PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignDeactivate
     */
    post: {
      pathParams: {
        personalization_design: string
      }
      body?: unknown
      res: Schemas.issuingpersonalization_design
    }

  }

  '/v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject': {

    /**
     * @description <p>Updates the <code>status</code> of the specified testmode personalization design object to <code>rejected</code>.</p>
     * @summary Reject a testmode personalization design
     * @operationId PostTestHelpersIssuingPersonalizationDesignsPersonalizationDesignReject
     */
    post: {
      pathParams: {
        personalization_design: string
      }
      body: unknown
      res: Schemas.issuingpersonalization_design
    }

  }

  '/v1/test_helpers/issuing/settlements': {

    /**
     * @description <p>Allows the user to create an Issuing settlement.</p>
     * @summary Create a test-mode settlement
     * @operationId PostTestHelpersIssuingSettlements
     */
    post: {
      body: unknown
      res: Schemas.issuingsettlement
    }

  }

  '/v1/test_helpers/issuing/settlements/{settlement}/complete': {

    /**
     * @description <p>Allows the user to mark an Issuing settlement as complete.</p>
     * @summary Complete a test-mode settlement
     * @operationId PostTestHelpersIssuingSettlementsSettlementComplete
     */
    post: {
      pathParams: {
        /**
         * @description The settlement token to mark as complete.
         */
        settlement: string
      }
      body?: unknown
      res: Schemas.issuingsettlement
    }

  }

  '/v1/test_helpers/issuing/transactions/create_force_capture': {

    /**
     * @description <p>Allows the user to capture an arbitrary amount, also known as a forced capture.</p>
     * @summary Create a test-mode force capture
     * @operationId PostTestHelpersIssuingTransactionsCreateForceCapture
     */
    post: {
      body: unknown
      res: Schemas.issuingtransaction
    }

  }

  '/v1/test_helpers/issuing/transactions/create_unlinked_refund': {

    /**
     * @description <p>Allows the user to refund an arbitrary amount, also known as a unlinked refund.</p>
     * @summary Create a test-mode unlinked refund
     * @operationId PostTestHelpersIssuingTransactionsCreateUnlinkedRefund
     */
    post: {
      body: unknown
      res: Schemas.issuingtransaction
    }

  }

  '/v1/test_helpers/issuing/transactions/{transaction}/refund': {

    /**
     * @description <p>Refund a test-mode Transaction.</p>
     * @summary Refund a test-mode transaction
     * @operationId PostTestHelpersIssuingTransactionsTransactionRefund
     */
    post: {
      pathParams: {
        transaction: string
      }
      body?: unknown
      res: Schemas.issuingtransaction
    }

  }

  '/v1/test_helpers/refunds/{refund}/expire': {

    /**
     * @description <p>Expire a refund with a status of <code>requires_action</code>.</p>
     * @summary Expire a pending refund.
     * @operationId PostTestHelpersRefundsRefundExpire
     */
    post: {
      pathParams: {
        refund: string
      }
      body?: unknown
      res: Schemas.refund
    }

  }

  '/v1/test_helpers/terminal/readers/{reader}/present_payment_method': {

    /**
     * @description <p>Presents a payment method on a simulated reader. Can be used to simulate accepting a payment, saving a card or refunding a transaction.</p>
     * @summary Simulate presenting a payment method
     * @operationId PostTestHelpersTerminalReadersReaderPresentPaymentMethod
     */
    post: {
      pathParams: {
        reader: string
      }
      body?: unknown
      res: Schemas.terminalreader
    }

  }

  '/v1/test_helpers/terminal/readers/{reader}/succeed_input_collection': {

    /**
     * @description <p>Use this endpoint to trigger a successful input collection on a simulated reader.</p>
     * @summary Simulate a successful input collection
     * @operationId PostTestHelpersTerminalReadersReaderSucceedInputCollection
     */
    post: {
      pathParams: {
        reader: string
      }
      body?: unknown
      res: Schemas.terminalreader
    }

  }

  '/v1/test_helpers/terminal/readers/{reader}/timeout_input_collection': {

    /**
     * @description <p>Use this endpoint to complete an input collection with a timeout error on a simulated reader.</p>
     * @summary Simulate an input collection timeout
     * @operationId PostTestHelpersTerminalReadersReaderTimeoutInputCollection
     */
    post: {
      pathParams: {
        reader: string
      }
      body?: unknown
      res: Schemas.terminalreader
    }

  }

  '/v1/test_helpers/test_clocks': {

    /**
     * @description <p>Returns a list of your test clocks.</p>
     * @summary List all test clocks
     * @operationId GetTestHelpersTestClocks
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.test_helperstest_clock[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new test clock that can be attached to new customers and quotes.</p>
     * @summary Create a test clock
     * @operationId PostTestHelpersTestClocks
     */
    post: {
      body: unknown
      res: Schemas.test_helperstest_clock
    }

  }

  '/v1/test_helpers/test_clocks/{test_clock}': {

    /**
     * @description <p>Deletes a test clock.</p>
     * @summary Delete a test clock
     * @operationId DeleteTestHelpersTestClocksTestClock
     */
    delete: {
      pathParams: {
        test_clock: string
      }
      body?: unknown
      res: Schemas.deleted_test_helperstest_clock
    }

    /**
     * @description <p>Retrieves a test clock.</p>
     * @summary Retrieve a test clock
     * @operationId GetTestHelpersTestClocksTestClock
     */
    get: {
      pathParams: {
        test_clock: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.test_helperstest_clock
    }

  }

  '/v1/test_helpers/test_clocks/{test_clock}/advance': {

    /**
     * @description <p>Starts advancing a test clock to a specified time in the future. Advancement is done when status changes to <code>Ready</code>.</p>
     * @summary Advance a test clock
     * @operationId PostTestHelpersTestClocksTestClockAdvance
     */
    post: {
      pathParams: {
        test_clock: string
      }
      body: unknown
      res: Schemas.test_helperstest_clock
    }

  }

  '/v1/test_helpers/treasury/inbound_transfers/{id}/fail': {

    /**
     * @description <p>Transitions a test mode created InboundTransfer to the <code>failed</code> status. The InboundTransfer must already be in the <code>processing</code> state.</p>
     * @summary Test mode: Fail an InboundTransfer
     * @operationId PostTestHelpersTreasuryInboundTransfersIdFail
     */
    post: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.treasuryinbound_transfer
    }

  }

  '/v1/test_helpers/treasury/inbound_transfers/{id}/return': {

    /**
     * @description <p>Marks the test mode InboundTransfer object as returned and links the InboundTransfer to a ReceivedDebit. The InboundTransfer must already be in the <code>succeeded</code> state.</p>
     * @summary Test mode: Return an InboundTransfer
     * @operationId PostTestHelpersTreasuryInboundTransfersIdReturn
     */
    post: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.treasuryinbound_transfer
    }

  }

  '/v1/test_helpers/treasury/inbound_transfers/{id}/succeed': {

    /**
     * @description <p>Transitions a test mode created InboundTransfer to the <code>succeeded</code> status. The InboundTransfer must already be in the <code>processing</code> state.</p>
     * @summary Test mode: Succeed an InboundTransfer
     * @operationId PostTestHelpersTreasuryInboundTransfersIdSucceed
     */
    post: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.treasuryinbound_transfer
    }

  }

  '/v1/test_helpers/treasury/outbound_payments/{id}': {

    /**
     * @description <p>Updates a test mode created OutboundPayment with tracking details. The OutboundPayment must not be cancelable, and cannot be in the <code>canceled</code> or <code>failed</code> states.</p>
     * @summary Test mode: Update an OutboundPayment
     * @operationId PostTestHelpersTreasuryOutboundPaymentsId
     */
    post: {
      pathParams: {
        id: string
      }
      body: unknown
      res: Schemas.treasuryoutbound_payment
    }

  }

  '/v1/test_helpers/treasury/outbound_payments/{id}/fail': {

    /**
     * @description <p>Transitions a test mode created OutboundPayment to the <code>failed</code> status. The OutboundPayment must already be in the <code>processing</code> state.</p>
     * @summary Test mode: Fail an OutboundPayment
     * @operationId PostTestHelpersTreasuryOutboundPaymentsIdFail
     */
    post: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.treasuryoutbound_payment
    }

  }

  '/v1/test_helpers/treasury/outbound_payments/{id}/post': {

    /**
     * @description <p>Transitions a test mode created OutboundPayment to the <code>posted</code> status. The OutboundPayment must already be in the <code>processing</code> state.</p>
     * @summary Test mode: Post an OutboundPayment
     * @operationId PostTestHelpersTreasuryOutboundPaymentsIdPost
     */
    post: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.treasuryoutbound_payment
    }

  }

  '/v1/test_helpers/treasury/outbound_payments/{id}/return': {

    /**
     * @description <p>Transitions a test mode created OutboundPayment to the <code>returned</code> status. The OutboundPayment must already be in the <code>processing</code> state.</p>
     * @summary Test mode: Return an OutboundPayment
     * @operationId PostTestHelpersTreasuryOutboundPaymentsIdReturn
     */
    post: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.treasuryoutbound_payment
    }

  }

  '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}': {

    /**
     * @description <p>Updates a test mode created OutboundTransfer with tracking details. The OutboundTransfer must not be cancelable, and cannot be in the <code>canceled</code> or <code>failed</code> states.</p>
     * @summary Test mode: Update an OutboundTransfer
     * @operationId PostTestHelpersTreasuryOutboundTransfersOutboundTransfer
     */
    post: {
      pathParams: {
        outbound_transfer: string
      }
      body: unknown
      res: Schemas.treasuryoutbound_transfer
    }

  }

  '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail': {

    /**
     * @description <p>Transitions a test mode created OutboundTransfer to the <code>failed</code> status. The OutboundTransfer must already be in the <code>processing</code> state.</p>
     * @summary Test mode: Fail an OutboundTransfer
     * @operationId PostTestHelpersTreasuryOutboundTransfersOutboundTransferFail
     */
    post: {
      pathParams: {
        outbound_transfer: string
      }
      body?: unknown
      res: Schemas.treasuryoutbound_transfer
    }

  }

  '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post': {

    /**
     * @description <p>Transitions a test mode created OutboundTransfer to the <code>posted</code> status. The OutboundTransfer must already be in the <code>processing</code> state.</p>
     * @summary Test mode: Post an OutboundTransfer
     * @operationId PostTestHelpersTreasuryOutboundTransfersOutboundTransferPost
     */
    post: {
      pathParams: {
        outbound_transfer: string
      }
      body?: unknown
      res: Schemas.treasuryoutbound_transfer
    }

  }

  '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return': {

    /**
     * @description <p>Transitions a test mode created OutboundTransfer to the <code>returned</code> status. The OutboundTransfer must already be in the <code>processing</code> state.</p>
     * @summary Test mode: Return an OutboundTransfer
     * @operationId PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturn
     */
    post: {
      pathParams: {
        outbound_transfer: string
      }
      body?: unknown
      res: Schemas.treasuryoutbound_transfer
    }

  }

  '/v1/test_helpers/treasury/received_credits': {

    /**
     * @description <p>Use this endpoint to simulate a test mode ReceivedCredit initiated by a third party. In live mode, you can’t directly create ReceivedCredits initiated by third parties.</p>
     * @summary Test mode: Create a ReceivedCredit
     * @operationId PostTestHelpersTreasuryReceivedCredits
     */
    post: {
      body: unknown
      res: Schemas.treasuryreceived_credit
    }

  }

  '/v1/test_helpers/treasury/received_debits': {

    /**
     * @description <p>Use this endpoint to simulate a test mode ReceivedDebit initiated by a third party. In live mode, you can’t directly create ReceivedDebits initiated by third parties.</p>
     * @summary Test mode: Create a ReceivedDebit
     * @operationId PostTestHelpersTreasuryReceivedDebits
     */
    post: {
      body: unknown
      res: Schemas.treasuryreceived_debit
    }

  }

  '/v1/tokens': {

    /**
     * @description <p>Creates a single-use token that represents a bank account’s details.
     * You can use this token with any v1 API method in place of a bank account dictionary. You can only use this token once. To do so, attach it to a <a href="#accounts">connected account</a> where <a href="/api/accounts/object#account_object-controller-requirement_collection">controller.requirement_collection</a> is <code>application</code>, which includes Custom accounts.</p>
     * @summary Create a CVC update token
     * @operationId PostTokens
     */
    post: {
      body?: unknown
      res: Schemas.token
    }

  }

  '/v1/tokens/{token}': {

    /**
     * @description <p>Retrieves the token with the given ID.</p>
     * @summary Retrieve a token
     * @operationId GetTokensToken
     */
    get: {
      pathParams: {
        token: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.token
    }

  }

  '/v1/topups': {

    /**
     * @description <p>Returns a list of top-ups.</p>
     * @summary List all top-ups
     * @operationId GetTopups
     */
    get: {
      queryParams?: {
        /**
         * @description A positive integer representing how much to transfer.
         */
        amount?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return top-ups that have the given status. One of `canceled`, `failed`, `pending` or `succeeded`.
         */
        status?: ('canceled' | 'failed' | 'pending' | 'succeeded')
      }
      body?: unknown
      res: {
        data: Schemas.topup[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Top up the balance of an account</p>
     * @summary Create a top-up
     * @operationId PostTopups
     */
    post: {
      body: unknown
      res: Schemas.topup
    }

  }

  '/v1/topups/{topup}': {

    /**
     * @description <p>Retrieves the details of a top-up that has previously been created. Supply the unique top-up ID that was returned from your previous request, and Stripe will return the corresponding top-up information.</p>
     * @summary Retrieve a top-up
     * @operationId GetTopupsTopup
     */
    get: {
      pathParams: {
        topup: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.topup
    }

    /**
     * @description <p>Updates the metadata of a top-up. Other top-up details are not editable by design.</p>
     * @summary Update a top-up
     * @operationId PostTopupsTopup
     */
    post: {
      pathParams: {
        topup: string
      }
      body?: unknown
      res: Schemas.topup
    }

  }

  '/v1/topups/{topup}/cancel': {

    /**
     * @description <p>Cancels a top-up. Only pending top-ups can be canceled.</p>
     * @summary Cancel a top-up
     * @operationId PostTopupsTopupCancel
     */
    post: {
      pathParams: {
        topup: string
      }
      body?: unknown
      res: Schemas.topup
    }

  }

  '/v1/transfers': {

    /**
     * @description <p>Returns a list of existing transfers sent to connected accounts. The transfers are returned in sorted order, with the most recently created transfers appearing first.</p>
     * @summary List all transfers
     * @operationId GetTransfers
     */
    get: {
      queryParams?: {
        /**
         * @description Only return transfers that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description Only return transfers for the destination specified by this account ID.
         */
        destination?: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return transfers with the specified transfer group.
         */
        transfer_group?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.transfer[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>To send funds from your Stripe account to a connected account, you create a new transfer object. Your <a href="#balance">Stripe balance</a> must be able to cover the transfer amount, or you’ll receive an “Insufficient Funds” error.</p>
     * @summary Create a transfer
     * @operationId PostTransfers
     */
    post: {
      body: unknown
      res: Schemas.transfer
    }

  }

  '/v1/transfers/{id}/reversals': {

    /**
     * @description <p>You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by default on the transfer object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional reversals.</p>
     * @summary List all reversals
     * @operationId GetTransfersIdReversals
     */
    get: {
      pathParams: {
        id: string
      }
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.transfer_reversal[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>When you create a new reversal, you must specify a transfer to create it on.</p>
     * 
     * <p>When reversing transfers, you can optionally reverse part of the transfer. You can do so as many times as you wish until the entire transfer has been reversed.</p>
     * 
     * <p>Once entirely reversed, a transfer can’t be reversed again. This method will return an error when called on an already-reversed transfer, or when trying to reverse more money than is left on a transfer.</p>
     * @summary Create a transfer reversal
     * @operationId PostTransfersIdReversals
     */
    post: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.transfer_reversal
    }

  }

  '/v1/transfers/{transfer}': {

    /**
     * @description <p>Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or the transfer list, and Stripe will return the corresponding transfer information.</p>
     * @summary Retrieve a transfer
     * @operationId GetTransfersTransfer
     */
    get: {
      pathParams: {
        transfer: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.transfer
    }

    /**
     * @description <p>Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
     * 
     * <p>This request accepts only metadata as an argument.</p>
     * @summary Update a transfer
     * @operationId PostTransfersTransfer
     */
    post: {
      pathParams: {
        transfer: string
      }
      body?: unknown
      res: Schemas.transfer
    }

  }

  '/v1/transfers/{transfer}/reversals/{id}': {

    /**
     * @description <p>By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.</p>
     * @summary Retrieve a reversal
     * @operationId GetTransfersTransferReversalsId
     */
    get: {
      pathParams: {
        id: string
        transfer: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.transfer_reversal
    }

    /**
     * @description <p>Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
     * 
     * <p>This request only accepts metadata and description as arguments.</p>
     * @summary Update a reversal
     * @operationId PostTransfersTransferReversalsId
     */
    post: {
      pathParams: {
        id: string
        transfer: string
      }
      body?: unknown
      res: Schemas.transfer_reversal
    }

  }

  '/v1/treasury/credit_reversals': {

    /**
     * @description <p>Returns a list of CreditReversals.</p>
     * @summary List all CreditReversals
     * @operationId GetTreasuryCreditReversals
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description Returns objects associated with this FinancialAccount.
         */
        financial_account: string
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Only return CreditReversals for the ReceivedCredit ID.
         */
        received_credit?: string
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return CreditReversals for a given status.
         */
        status?: ('canceled' | 'posted' | 'processing')
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.treasurycredit_reversal[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Reverses a ReceivedCredit and creates a CreditReversal object.</p>
     * @summary Create a CreditReversal
     * @operationId PostTreasuryCreditReversals
     */
    post: {
      body: unknown
      res: Schemas.treasurycredit_reversal
    }

  }

  '/v1/treasury/credit_reversals/{credit_reversal}': {

    /**
     * @description <p>Retrieves the details of an existing CreditReversal by passing the unique CreditReversal ID from either the CreditReversal creation request or CreditReversal list</p>
     * @summary Retrieve a CreditReversal
     * @operationId GetTreasuryCreditReversalsCreditReversal
     */
    get: {
      pathParams: {
        credit_reversal: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.treasurycredit_reversal
    }

  }

  '/v1/treasury/debit_reversals': {

    /**
     * @description <p>Returns a list of DebitReversals.</p>
     * @summary List all DebitReversals
     * @operationId GetTreasuryDebitReversals
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description Returns objects associated with this FinancialAccount.
         */
        financial_account: string
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Only return DebitReversals for the ReceivedDebit ID.
         */
        received_debit?: string
        /**
         * @description Only return DebitReversals for a given resolution.
         */
        resolution?: ('lost' | 'won')
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return DebitReversals for a given status.
         */
        status?: ('canceled' | 'completed' | 'processing')
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.treasurydebit_reversal[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Reverses a ReceivedDebit and creates a DebitReversal object.</p>
     * @summary Create a DebitReversal
     * @operationId PostTreasuryDebitReversals
     */
    post: {
      body: unknown
      res: Schemas.treasurydebit_reversal
    }

  }

  '/v1/treasury/debit_reversals/{debit_reversal}': {

    /**
     * @description <p>Retrieves a DebitReversal object.</p>
     * @summary Retrieve a DebitReversal
     * @operationId GetTreasuryDebitReversalsDebitReversal
     */
    get: {
      pathParams: {
        debit_reversal: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.treasurydebit_reversal
    }

  }

  '/v1/treasury/financial_accounts': {

    /**
     * @description <p>Returns a list of FinancialAccounts.</p>
     * @summary List all FinancialAccounts
     * @operationId GetTreasuryFinancialAccounts
     */
    get: {
      queryParams?: {
        /**
         * @description Only return FinancialAccounts that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description An object ID cursor for use in pagination.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit ranging from 1 to 100 (defaults to 10).
         */
        limit?: number
        /**
         * @description An object ID cursor for use in pagination.
         */
        starting_after?: string
        /**
         * @description Only return FinancialAccounts that have the given status: `open` or `closed`
         */
        status?: ('closed' | 'open')
      }
      body?: unknown
      res: {
        data: Schemas.treasuryfinancial_account[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates a new FinancialAccount. Each connected account can have up to three FinancialAccounts by default.</p>
     * @summary Create a FinancialAccount
     * @operationId PostTreasuryFinancialAccounts
     */
    post: {
      body: unknown
      res: Schemas.treasuryfinancial_account
    }

  }

  '/v1/treasury/financial_accounts/{financial_account}': {

    /**
     * @description <p>Retrieves the details of a FinancialAccount.</p>
     * @summary Retrieve a FinancialAccount
     * @operationId GetTreasuryFinancialAccountsFinancialAccount
     */
    get: {
      pathParams: {
        financial_account: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.treasuryfinancial_account
    }

    /**
     * @description <p>Updates the details of a FinancialAccount.</p>
     * @summary Update a FinancialAccount
     * @operationId PostTreasuryFinancialAccountsFinancialAccount
     */
    post: {
      pathParams: {
        financial_account: string
      }
      body?: unknown
      res: Schemas.treasuryfinancial_account
    }

  }

  '/v1/treasury/financial_accounts/{financial_account}/close': {

    /**
     * @description <p>Closes a FinancialAccount. A FinancialAccount can only be closed if it has a zero balance, has no pending InboundTransfers, and has canceled all attached Issuing cards.</p>
     * @summary Close a FinancialAccount
     * @operationId PostTreasuryFinancialAccountsFinancialAccountClose
     */
    post: {
      pathParams: {
        financial_account: string
      }
      body?: unknown
      res: Schemas.treasuryfinancial_account
    }

  }

  '/v1/treasury/financial_accounts/{financial_account}/features': {

    /**
     * @description <p>Retrieves Features information associated with the FinancialAccount.</p>
     * @summary Retrieve FinancialAccount Features
     * @operationId GetTreasuryFinancialAccountsFinancialAccountFeatures
     */
    get: {
      pathParams: {
        financial_account: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.treasuryfinancial_account_features
    }

    /**
     * @description <p>Updates the Features associated with a FinancialAccount.</p>
     * @summary Update FinancialAccount Features
     * @operationId PostTreasuryFinancialAccountsFinancialAccountFeatures
     */
    post: {
      pathParams: {
        financial_account: string
      }
      body?: unknown
      res: Schemas.treasuryfinancial_account_features
    }

  }

  '/v1/treasury/inbound_transfers': {

    /**
     * @description <p>Returns a list of InboundTransfers sent from the specified FinancialAccount.</p>
     * @summary List all InboundTransfers
     * @operationId GetTreasuryInboundTransfers
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description Returns objects associated with this FinancialAccount.
         */
        financial_account: string
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return InboundTransfers that have the given status: `processing`, `succeeded`, `failed` or `canceled`.
         */
        status?: ('canceled' | 'failed' | 'processing' | 'succeeded')
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.treasuryinbound_transfer[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates an InboundTransfer.</p>
     * @summary Create an InboundTransfer
     * @operationId PostTreasuryInboundTransfers
     */
    post: {
      body: unknown
      res: Schemas.treasuryinbound_transfer
    }

  }

  '/v1/treasury/inbound_transfers/{id}': {

    /**
     * @description <p>Retrieves the details of an existing InboundTransfer.</p>
     * @summary Retrieve an InboundTransfer
     * @operationId GetTreasuryInboundTransfersId
     */
    get: {
      pathParams: {
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.treasuryinbound_transfer
    }

  }

  '/v1/treasury/inbound_transfers/{inbound_transfer}/cancel': {

    /**
     * @description <p>Cancels an InboundTransfer.</p>
     * @summary Cancel an InboundTransfer
     * @operationId PostTreasuryInboundTransfersInboundTransferCancel
     */
    post: {
      pathParams: {
        inbound_transfer: string
      }
      body?: unknown
      res: Schemas.treasuryinbound_transfer
    }

  }

  '/v1/treasury/outbound_payments': {

    /**
     * @description <p>Returns a list of OutboundPayments sent from the specified FinancialAccount.</p>
     * @summary List all OutboundPayments
     * @operationId GetTreasuryOutboundPayments
     */
    get: {
      queryParams?: {
        /**
         * @description Only return OutboundPayments that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description Only return OutboundPayments sent to this customer.
         */
        customer?: string
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description Returns objects associated with this FinancialAccount.
         */
        financial_account: string
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return OutboundPayments that have the given status: `processing`, `failed`, `posted`, `returned`, or `canceled`.
         */
        status?: ('canceled' | 'failed' | 'posted' | 'processing' | 'returned')
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.treasuryoutbound_payment[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates an OutboundPayment.</p>
     * @summary Create an OutboundPayment
     * @operationId PostTreasuryOutboundPayments
     */
    post: {
      body: unknown
      res: Schemas.treasuryoutbound_payment
    }

  }

  '/v1/treasury/outbound_payments/{id}': {

    /**
     * @description <p>Retrieves the details of an existing OutboundPayment by passing the unique OutboundPayment ID from either the OutboundPayment creation request or OutboundPayment list.</p>
     * @summary Retrieve an OutboundPayment
     * @operationId GetTreasuryOutboundPaymentsId
     */
    get: {
      pathParams: {
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.treasuryoutbound_payment
    }

  }

  '/v1/treasury/outbound_payments/{id}/cancel': {

    /**
     * @description <p>Cancel an OutboundPayment.</p>
     * @summary Cancel an OutboundPayment
     * @operationId PostTreasuryOutboundPaymentsIdCancel
     */
    post: {
      pathParams: {
        id: string
      }
      body?: unknown
      res: Schemas.treasuryoutbound_payment
    }

  }

  '/v1/treasury/outbound_transfers': {

    /**
     * @description <p>Returns a list of OutboundTransfers sent from the specified FinancialAccount.</p>
     * @summary List all OutboundTransfers
     * @operationId GetTreasuryOutboundTransfers
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description Returns objects associated with this FinancialAccount.
         */
        financial_account: string
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return OutboundTransfers that have the given status: `processing`, `canceled`, `failed`, `posted`, or `returned`.
         */
        status?: ('canceled' | 'failed' | 'posted' | 'processing' | 'returned')
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.treasuryoutbound_transfer[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>Creates an OutboundTransfer.</p>
     * @summary Create an OutboundTransfer
     * @operationId PostTreasuryOutboundTransfers
     */
    post: {
      body: unknown
      res: Schemas.treasuryoutbound_transfer
    }

  }

  '/v1/treasury/outbound_transfers/{outbound_transfer}': {

    /**
     * @description <p>Retrieves the details of an existing OutboundTransfer by passing the unique OutboundTransfer ID from either the OutboundTransfer creation request or OutboundTransfer list.</p>
     * @summary Retrieve an OutboundTransfer
     * @operationId GetTreasuryOutboundTransfersOutboundTransfer
     */
    get: {
      pathParams: {
        outbound_transfer: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.treasuryoutbound_transfer
    }

  }

  '/v1/treasury/outbound_transfers/{outbound_transfer}/cancel': {

    /**
     * @description <p>An OutboundTransfer can be canceled if the funds have not yet been paid out.</p>
     * @summary Cancel an OutboundTransfer
     * @operationId PostTreasuryOutboundTransfersOutboundTransferCancel
     */
    post: {
      pathParams: {
        outbound_transfer: string
      }
      body?: unknown
      res: Schemas.treasuryoutbound_transfer
    }

  }

  '/v1/treasury/received_credits': {

    /**
     * @description <p>Returns a list of ReceivedCredits.</p>
     * @summary List all ReceivedCredits
     * @operationId GetTreasuryReceivedCredits
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description The FinancialAccount that received the funds.
         */
        financial_account: string
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description Only return ReceivedCredits described by the flow.
         */
        linked_flows?: {
          source_flow_type: ('credit_reversal' | 'other' | 'outbound_payment' | 'outbound_transfer' | 'payout')
        }
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return ReceivedCredits that have the given status: `succeeded` or `failed`.
         */
        status?: ('failed' | 'succeeded')
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.treasuryreceived_credit[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/treasury/received_credits/{id}': {

    /**
     * @description <p>Retrieves the details of an existing ReceivedCredit by passing the unique ReceivedCredit ID from the ReceivedCredit list.</p>
     * @summary Retrieve a ReceivedCredit
     * @operationId GetTreasuryReceivedCreditsId
     */
    get: {
      pathParams: {
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.treasuryreceived_credit
    }

  }

  '/v1/treasury/received_debits': {

    /**
     * @description <p>Returns a list of ReceivedDebits.</p>
     * @summary List all ReceivedDebits
     * @operationId GetTreasuryReceivedDebits
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description The FinancialAccount that funds were pulled from.
         */
        financial_account: string
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return ReceivedDebits that have the given status: `succeeded` or `failed`.
         */
        status?: ('failed' | 'succeeded')
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.treasuryreceived_debit[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/treasury/received_debits/{id}': {

    /**
     * @description <p>Retrieves the details of an existing ReceivedDebit by passing the unique ReceivedDebit ID from the ReceivedDebit list</p>
     * @summary Retrieve a ReceivedDebit
     * @operationId GetTreasuryReceivedDebitsId
     */
    get: {
      pathParams: {
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.treasuryreceived_debit
    }

  }

  '/v1/treasury/transaction_entries': {

    /**
     * @description <p>Retrieves a list of TransactionEntry objects.</p>
     * @summary List all TransactionEntries
     * @operationId GetTreasuryTransactionEntries
     */
    get: {
      queryParams?: {
        /**
         * @description Only return TransactionEntries that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        effective_at?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description Returns objects associated with this FinancialAccount.
         */
        financial_account: string
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description The results are in reverse chronological order by `created` or `effective_at`. The default is `created`.
         */
        order_by?: ('created' | 'effective_at')
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return TransactionEntries associated with this Transaction.
         */
        transaction?: string
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.treasurytransaction_entry[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/treasury/transaction_entries/{id}': {

    /**
     * @description <p>Retrieves a TransactionEntry object.</p>
     * @summary Retrieve a TransactionEntry
     * @operationId GetTreasuryTransactionEntriesId
     */
    get: {
      pathParams: {
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.treasurytransaction_entry
    }

  }

  '/v1/treasury/transactions': {

    /**
     * @description <p>Retrieves a list of Transaction objects.</p>
     * @summary List all Transactions
     * @operationId GetTreasuryTransactions
     */
    get: {
      queryParams?: {
        /**
         * @description Only return Transactions that were created during the given date interval.
         */
        created?: ({
          gt?: number
          gte?: number
          lt?: number
          lte?: number
        } | number)
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description Returns objects associated with this FinancialAccount.
         */
        financial_account: string
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description The results are in reverse chronological order by `created` or `posted_at`. The default is `created`.
         */
        order_by?: ('created' | 'posted_at')
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
        /**
         * @description Only return Transactions that have the given status: `open`, `posted`, or `void`.
         */
        status?: ('open' | 'posted' | 'void')
        /**
         * @description A filter for the `status_transitions.posted_at` timestamp. When using this filter, `status=posted` and `order_by=posted_at` must also be specified.
         */
        status_transitions?: {
          posted_at?: ({
            gt?: number
            gte?: number
            lt?: number
            lte?: number
          } | number)
        }
      }
      body?: unknown
      res: {
        /**
         * @description Details about each object.
         */
        data: Schemas.treasurytransaction[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

  }

  '/v1/treasury/transactions/{id}': {

    /**
     * @description <p>Retrieves the details of an existing Transaction.</p>
     * @summary Retrieve a Transaction
     * @operationId GetTreasuryTransactionsId
     */
    get: {
      pathParams: {
        id: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.treasurytransaction
    }

  }

  '/v1/webhook_endpoints': {

    /**
     * @description <p>Returns a list of your webhook endpoints.</p>
     * @summary List all webhook endpoints
     * @operationId GetWebhookEndpoints
     */
    get: {
      queryParams?: {
        /**
         * @description A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
         */
        ending_before?: string
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
        /**
         * @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
         */
        limit?: number
        /**
         * @description A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
         */
        starting_after?: string
      }
      body?: unknown
      res: {
        data: Schemas.webhook_endpoint[]
        /**
         * @description True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean
        /**
         * @description String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: 'list'
        /**
         * @description The URL where this list can be accessed.
         */
        url: string
      }
    }

    /**
     * @description <p>A webhook endpoint must have a <code>url</code> and a list of <code>enabled_events</code>. You may optionally specify the Boolean <code>connect</code> parameter. If set to true, then a Connect webhook endpoint that notifies the specified <code>url</code> about events from all connected accounts is created; otherwise an account webhook endpoint that notifies the specified <code>url</code> only about events from your account is created. You can also create webhook endpoints in the <a href="https://dashboard.stripe.com/account/webhooks">webhooks settings</a> section of the Dashboard.</p>
     * @summary Create a webhook endpoint
     * @operationId PostWebhookEndpoints
     */
    post: {
      body: unknown
      res: Schemas.webhook_endpoint
    }

  }

  '/v1/webhook_endpoints/{webhook_endpoint}': {

    /**
     * @description <p>You can also delete webhook endpoints via the <a href="https://dashboard.stripe.com/account/webhooks">webhook endpoint management</a> page of the Stripe dashboard.</p>
     * @summary Delete a webhook endpoint
     * @operationId DeleteWebhookEndpointsWebhookEndpoint
     */
    delete: {
      pathParams: {
        webhook_endpoint: string
      }
      body?: unknown
      res: Schemas.deleted_webhook_endpoint
    }

    /**
     * @description <p>Retrieves the webhook endpoint with the given ID.</p>
     * @summary Retrieve a webhook endpoint
     * @operationId GetWebhookEndpointsWebhookEndpoint
     */
    get: {
      pathParams: {
        webhook_endpoint: string
      }
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      body?: unknown
      res: Schemas.webhook_endpoint
    }

    /**
     * @description <p>Updates the webhook endpoint. You may edit the <code>url</code>, the list of <code>enabled_events</code>, and the status of your endpoint.</p>
     * @summary Update a webhook endpoint
     * @operationId PostWebhookEndpointsWebhookEndpoint
     */
    post: {
      pathParams: {
        webhook_endpoint: string
      }
      body?: unknown
      res: Schemas.webhook_endpoint
    }

  }

}