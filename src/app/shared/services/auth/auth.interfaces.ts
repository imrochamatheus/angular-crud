export namespace AuthInterfaces {
    export namespace Send {
        export interface Login {
            id: number;
            password: string;
        }
    }

    export namespace Receive {
        export interface Login {
            jwtToken: string
        }
    }
}

