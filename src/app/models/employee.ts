export interface EmployeeGET {
    id: number,
    imie: string,
    nazwisko: string,
    data_rozpoczecia: Date,
    status: boolean,
    id_stanowiska: number,
    nazwa: string;
    podstawa: number
}

export interface EmployeePOST {
    id: number,
    imie: string,
    nazwisko: string,
    data_rozpoczecia: Date,
    status: boolean,
    id_stanowiska: number,
}