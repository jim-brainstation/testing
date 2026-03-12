import { describe, expect, it, vi } from "vitest";
import { purchaseItem } from "./credit-card";

describe("credit card", () => {
    it("charges card if balance is enough", () => {
        // 1. Arrange
        const chargeCardFn = vi.fn(); // mock function

        // 2. Act
        purchaseItem(80, 100, chargeCardFn);

        // 3. Assert
        expect(chargeCardFn).toBeCalled();
    })

    it("does not charge card if balance is not enough", () => {
        const chargeCardFn = vi.fn(); // mock function

        purchaseItem(100, 1, chargeCardFn);
        expect(chargeCardFn).not.toBeCalled();
    })

    it("does not charge card if balance is zero", () => {
        const chargeCardFn = vi.fn(); // mock function

        purchaseItem(100, 0, chargeCardFn);
        expect(chargeCardFn).not.toBeCalled();
    })

    it("does not charge card if balance is null", () => {
        const chargeCardFn = vi.fn(); // mock function

        purchaseItem(100, null, chargeCardFn);
        expect(chargeCardFn).not.toBeCalled();
    })

    it("does not charge card if balance is negative", () => {
        const chargeCardFn = vi.fn(); // mock function

        purchaseItem(100, -1, chargeCardFn);
        expect(chargeCardFn).not.toBeCalled();
    })
})