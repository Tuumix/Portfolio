export interface TerminalInfo {
    user: string;
    command: string;
    output: string | Array<ContactInfo>;
}

export interface ContactInfo {
    name: string;
    href: string;
}