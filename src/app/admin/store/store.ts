export interface Store
{
    id?: number;
    publicId?: string;
    name?: string;
    timeZoneName?: string;
    disabled?: Date;
    address1?: string;
    address2?: string;
    urbanization?: string;
    city?: string;
    stateAbbrv?: string;
    zip5?: string;
    zip4?: string;
    phone?: string;
    email?: string;
    tableCount?: number;
}