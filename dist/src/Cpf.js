"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cpf {
    constructor(value) {
        this.CPF_VALID_LENGTH = 11;
        this.FACTOR_FIRST_VERIFIER_DIGIT = 10;
        this.FACTOR_SECOND_VERIFIER_DIGIT = 11;
        if (!this.validate(value))
            throw new Error("Invalid cpf");
        this.value = value;
    }
    validate(rawCpf) {
        if (!rawCpf)
            return false;
        const cpf = this.cleanCpf(rawCpf);
        if (cpf.length !== this.CPF_VALID_LENGTH)
            return false;
        if (this.areAllDigitsEqual(cpf))
            return false;
        const firstVerifierDigit = this.calculateDigit(cpf, this.FACTOR_FIRST_VERIFIER_DIGIT);
        const secondVerifierDigit = this.calculateDigit(cpf, this.FACTOR_SECOND_VERIFIER_DIGIT);
        const verifierDigit = this.extractVerifierDigit(cpf);
        const calculatedVerifiedDigit = `${firstVerifierDigit}${secondVerifierDigit}`;
        return verifierDigit === calculatedVerifiedDigit;
    }
    cleanCpf(cpf) {
        return cpf.replace(/\D/g, "");
    }
    areAllDigitsEqual(cpf) {
        const [firstDigit] = cpf;
        return [...cpf].every(c => c === firstDigit);
    }
    calculateDigit(cpf, factor) {
        let total = 0;
        for (const digit of cpf) {
            if (factor > 1)
                total += parseInt(digit) * factor--;
        }
        const rest = total % 11;
        return (rest < 2) ? 0 : (11 - rest);
    }
    extractVerifierDigit(cpf) {
        return cpf.slice(9);
    }
}
exports.default = Cpf;
