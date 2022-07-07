export interface absenceTYPE {
    "absenceType_id": number,
    "name": string,
    "paidRate": number
}


export interface Absence {
    "absence_id": number,
    "employee_id": number,
    "absence_type": number,
    "absence_from": Date | null,
    "absence_to": Date | null,
    "id": number,
    "imie": string,
    "nazwisko": string,
    "data_rozpoczecia": Date | null,
    "status": number,
    "id_stanowiska": number
}

export interface AbsencePOST {
    "absence_id": number,
    "employee_id": number,
    "absence_type": number,
    "absence_from"?: Date | null,
    "absence_to"?: Date | null
}