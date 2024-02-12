export type AutocompleteAuthorization =
	| 'nickname'
	| 'username'
	| 'email'
	| 'current-password'
	| 'new-password'
	| 'one-time-code';
export type AutocompleteNames =
	| 'name'
	| 'given-name'
	| 'additional-name'
	| 'family-name'
	| 'honorific-prefix'
	| 'honorific-suffix';
export type AutocompleteCard =
	| 'cc-given-name'
	| 'cc-additional-name'
	| 'cc-family-name'
	| 'cc-name'
	| 'cc-csc'
	| 'cc-exp'
	| 'cc-exp-month'
	| 'cc-exp-year'
	| 'cc-number'
	| 'cc-type'
	| 'transaction-amount'
	| 'transaction-currency';
export type AutocompletePersonalData =
	| 'bday'
	| 'bday-day'
	| 'bday-month'
	| 'bday-year'
	| 'language'
	| 'sex'
	| 'organization'
	| 'organization-title'
	| 'photo';

export type AutocompleteAddress =
	| 'address-level1'
	| 'address-level2'
	| 'address-level3'
	| 'address-level4'
	| 'address-line1'
	| 'address-line2'
	| 'address-line3'
	| 'country'
	| 'country-name'
	| 'street-address'
	| 'postal-code';

export type AutocompletePhone =
	| 'tel'
	| 'tel-area-code'
	| 'tel-country-code'
	| 'tel-extension'
	| 'tel-local'
	| 'tel-local-prefix'
	| 'tel-local-suffix'
	| 'tel-national';

export type AutocompleteLink = 'impp' | 'url';
export type Autocomplete =
	| AutocompleteAuthorization
	| AutocompleteNames
	| AutocompleteCard
	| AutocompletePersonalData
	| AutocompleteAddress
	| AutocompletePhone
	| AutocompleteLink;
