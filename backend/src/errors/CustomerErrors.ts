export class CustomerAlreadyExistsError extends Error {
    constructor() {
        super("Customer already exists with this email");
        this.name = "CustomerAlreadyExistsError";
    }
}

export class MissingDataError extends Error {
    constructor() {
        super("Name and email are required");
        this.name = "MissingDataError ";
    }
}

export class CustomerNotFoundError extends Error {
    constructor() {
        super("Customer not found");
        this.name = "CustomerNotFoundError";
    }
}

export class MissingDataIdError extends Error {
    constructor() {
        super("Customer ID is required");
        this.name = "MissingDataIdError";
    }
}