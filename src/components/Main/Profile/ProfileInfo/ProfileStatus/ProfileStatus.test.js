import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status ="testStatus" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("testStatus");
    });
    test("status after creation isn't input", () => {
        const component = create(<ProfileStatus status ="testStatus" />);
        const instance = component.root;

        expect(() => {
            let input = instance.findByType("input");
        }).toThrow();
    });
    test("status after creation is span", () => {
        const component = create(<ProfileStatus status ="testStatus" />);
        const instance = component.root;
        let span = instance.findByType("span");
        expect(span).not.toBeNull();
    });
    test("status after creation have status from state", () => {
        const component = create(<ProfileStatus status ="testStatus" />);
        const instance = component.root;
        let span = instance.findByType("span");
        expect(span.children[0]).toBe("testStatus");
    });

    test("after double click on span input should be displayed", () => {
        const component = create(<ProfileStatus status ="testStatus" />);
        const instance = component.root;
        let span = instance.findByType("span");
        span.props.onDoubleClick();
        expect(() => {
            instance.type("input").toThrou();
        })
    });

    test("callback should be called", () => {
        let mockCollback = jest.fn();
        const component = create(<ProfileStatus status ="testStatus" updateStatus={mockCollback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCollback.mock.calls.length).toBe(1);
    });
});