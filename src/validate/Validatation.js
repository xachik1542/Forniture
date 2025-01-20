import { Email_Regexp, Name_Regexp, Phone_Regexp, Textarea_Regexp } from "./Regexp";

export const Name_Validatation = { 
    required: "Enter a valid name",
    pattern: {
        value: Name_Regexp,
        message: "Enter a valid name"
    }
};

export const Phone_Validation = {
    required: "Enter the correct serial number",
    pattern: {
        value: Phone_Regexp,
        message: "Enter the correct serial number"
    }
}

export const Email_Validation = {
    required: "Enter a valid email",
    pattern: {
        value: Email_Regexp,
        message: "Enter a valid email"
    }
}

export const Textarea_Validation = {
    pattern: Textarea_Regexp
}